"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { useCursor } from "./CursorContext";
import { ArrowDiagonal, ArrowRight } from "./Icons";
import type { Exploration } from "@/lib/explorations";
import { easing, fadeUp, smoothTransition, viewportOnce } from "@/lib/animations";

// Different mockup variations
const MockupDashboard = () => (
  <div className="w-full h-full p-4 flex flex-col gap-2">
    <div className="flex gap-2 mb-2">
      <div className="w-1/3 h-16 bg-stroke/10 rounded-lg" />
      <div className="w-1/3 h-16 bg-stroke/10 rounded-lg" />
      <div className="w-1/3 h-16 bg-stroke/10 rounded-lg" />
    </div>
    <div className="flex gap-2 flex-1">
      <div className="w-2/3 bg-stroke/8 rounded-lg p-3">
        <div className="h-2 bg-stroke/15 rounded w-1/2 mb-2" />
        <div className="flex gap-1 h-3/4">
          {[40, 65, 45, 80, 55, 70, 50].map((h, i) => (
            <div key={i} className="flex-1 flex items-end">
              <div className="w-full bg-stroke/20 rounded-t" style={{ height: `${h}%` }} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/3 flex flex-col gap-2">
        <div className="flex-1 bg-stroke/8 rounded-lg p-2">
          <div className="w-12 h-12 rounded-full bg-stroke/15 mx-auto mb-2" />
          <div className="h-1.5 bg-stroke/10 rounded w-3/4 mx-auto" />
        </div>
        <div className="flex-1 bg-stroke/8 rounded-lg" />
      </div>
    </div>
  </div>
);

const MockupMobile = () => (
  <div className="w-16 h-28 mx-auto bg-stroke/8 rounded-xl border border-stroke/20 p-1.5 flex flex-col gap-1">
    <div className="w-6 h-1 bg-stroke/20 rounded-full mx-auto" />
    <div className="flex-1 flex flex-col gap-1">
      <div className="h-8 bg-stroke/15 rounded" />
      <div className="h-1.5 bg-stroke/10 rounded w-3/4" />
      <div className="h-1 bg-stroke/8 rounded w-1/2" />
      <div className="flex-1" />
      <div className="flex gap-1">
        <div className="flex-1 h-6 bg-stroke/12 rounded" />
        <div className="flex-1 h-6 bg-stroke/12 rounded" />
      </div>
    </div>
  </div>
);

const MockupEcommerce = () => (
  <div className="w-full h-full p-3 flex flex-col gap-2">
    <div className="h-2 bg-stroke/15 rounded w-1/2" />
    <div className="grid grid-cols-2 gap-2 flex-1">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="bg-stroke/8 rounded-lg p-2 flex flex-col">
          <div className="flex-1 bg-stroke/12 rounded mb-1" />
          <div className="h-1.5 bg-stroke/10 rounded w-3/4" />
          <div className="h-1 bg-stroke/8 rounded w-1/2 mt-0.5" />
        </div>
      ))}
    </div>
  </div>
);

const MockupBrand = () => (
  <div className="w-full h-full flex items-center justify-center p-4">
    <div className="relative">
      <div className="w-16 h-16 rounded-2xl bg-stroke/15 rotate-12" />
      <div className="absolute inset-0 w-16 h-16 rounded-2xl border-2 border-stroke/20 -rotate-12" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-6 h-6 bg-stroke/25 rounded-full" />
      </div>
    </div>
  </div>
);

const MockupLanding = () => (
  <div className="w-full h-full p-3 flex gap-3">
    <div className="flex-1 flex flex-col justify-center gap-2">
      <div className="h-3 bg-stroke/15 rounded w-3/4" />
      <div className="h-2 bg-stroke/10 rounded w-full" />
      <div className="h-2 bg-stroke/10 rounded w-2/3" />
      <div className="w-16 h-6 bg-stroke/20 rounded-full mt-2" />
    </div>
    <div className="w-1/3 bg-stroke/8 rounded-lg" />
  </div>
);

const MockupFintech = () => (
  <div className="w-full h-full p-3 flex flex-col items-center justify-center gap-2">
    <div className="w-20 h-12 bg-stroke/12 rounded-lg flex items-center justify-center">
      <span className="text-lg font-display italic text-stroke/30">$</span>
    </div>
    <div className="flex gap-1">
      <div className="w-8 h-8 bg-stroke/10 rounded-lg" />
      <div className="w-8 h-8 bg-stroke/10 rounded-lg" />
      <div className="w-8 h-8 bg-stroke/10 rounded-lg" />
    </div>
  </div>
);

const getMockup = (type: string) => {
  switch (type) {
    case "dashboard": return <MockupDashboard />;
    case "mobile": return <MockupMobile />;
    case "ecommerce": return <MockupEcommerce />;
    case "brand": return <MockupBrand />;
    case "landing": return <MockupLanding />;
    case "fintech": return <MockupFintech />;
    default: return null;
  }
};

type GalleryGridProps = {
  items: Exploration[];
  /** When set, renders a full-width "All" tile linking to this href after the items. */
  allHref?: string;
};

// How many tiles to reveal per scroll batch on the full gallery.
const BATCH_SIZE = 8;

export default function GalleryGrid({ items, allHref }: GalleryGridProps) {
  const { setCursorType, setCursorText } = useCursor();
  // Only image-bearing tiles are openable, so the lightbox pages through this subset.
  const imageItems = useMemo(() => items.filter((item) => item.image), [items]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const prefetchedImages = useRef<Set<string>>(new Set());

  // Progressively reveal tiles as the user scrolls. Only the full gallery
  // (no "View all" tile) paginates, and only once it exceeds one batch.
  const paginate = !allHref && items.length > BATCH_SIZE;
  const [visibleCount, setVisibleCount] = useState(
    paginate ? BATCH_SIZE : items.length
  );
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const hasMore = paginate && visibleCount < items.length;
  const visibleItems = paginate ? items.slice(0, visibleCount) : items;

  // Reveal the next batch when the sentinel nears the viewport.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!hasMore || !sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleCount((count) => Math.min(count + BATCH_SIZE, items.length));
        }
      },
      { rootMargin: "600px 0px" }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, items.length]);

  const prefetch = useCallback((src: string | undefined) => {
    if (src && !prefetchedImages.current.has(src)) {
      const img = new window.Image();
      img.src = src;
      prefetchedImages.current.add(src);
    }
  }, []);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const step = useCallback(
    (delta: number) => {
      setLightboxIndex((current) => {
        if (current === null || imageItems.length === 0) {
          return current;
        }
        const next = (current + delta + imageItems.length) % imageItems.length;
        // Warm the neighbour we're paging to so it appears instantly.
        prefetch(imageItems[next]?.image);
        return next;
      });
    },
    [imageItems, prefetch]
  );

  useEffect(() => {
    if (lightboxIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      } else if (event.key === "ArrowLeft") {
        step(-1);
      } else if (event.key === "ArrowRight") {
        step(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, step]);

  const activeItem = lightboxIndex === null ? null : imageItems[lightboxIndex];

  return (
    <>
      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[240px] gap-5 md:gap-6 px-2">
        {visibleItems.map((item, index) => (
          <motion.button
            key={item.id}
            type="button"
            className={`group relative rounded-3xl bg-surface border border-stroke overflow-hidden cursor-pointer transition-all duration-300 hover:border-text/30 text-left w-full h-full focus-ring-lg ${item.span}`}
            initial={fadeUp.hidden}
            whileInView={fadeUp.visible}
            viewport={viewportOnce}
            transition={smoothTransition((index % BATCH_SIZE) * 0.08)}
            onMouseEnter={() => {
              setCursorType("project");
              setCursorText(item.image ? "View" : "Explore");
              prefetch(item.image);
            }}
            onMouseLeave={() => {
              setCursorType("default");
              setCursorText("");
            }}
            onClick={() => {
              if (!item.image) {
                return;
              }
              const idx = imageItems.findIndex((it) => it.id === item.id);
              if (idx !== -1) {
                setLightboxIndex(idx);
              }
            }}
          >
            {/* Image only for cards with image, otherwise show mockup with overlays */}
            {item.image ? (
              <>
                <ImageWithSkeleton
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-all duration-500"
                />
              </>
            ) : (
              <>
                {/* Gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />

                {/* Mockup */}
                <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity">
                  {getMockup(item.mockup)}
                </div>

                {/* Number badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-4xl md:text-5xl font-display italic text-stroke/15">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-bg/90 via-bg/50 to-transparent">
                  <span className="text-2xs text-muted uppercase tracking-wider block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-sm md:text-base text-text font-medium group-hover:translate-x-1 transition-transform">
                    {item.title}
                  </h3>
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-4 right-4 md:bottom-5 md:right-5 w-8 h-8 rounded-full border border-stroke flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:bg-text md:group-hover:border-text transition-all duration-300">
                  <ArrowDiagonal width={12} height={12} className="text-muted group-hover:text-bg transition-colors" />
                </div>
              </>
            )}
          </motion.button>
        ))}

        {/* Full-width "All" tile → gallery all page */}
        {allHref && (
          <motion.div
            initial={fadeUp.hidden}
            whileInView={fadeUp.visible}
            viewport={viewportOnce}
            transition={smoothTransition(items.length * 0.08)}
            className="md:col-span-4"
          >
            <Link
              href={allHref}
              onMouseEnter={() => {
                setCursorType("project");
                setCursorText("Open");
              }}
              onMouseLeave={() => {
                setCursorType("default");
                setCursorText("");
              }}
              className="group relative flex h-full w-full items-center justify-center gap-4 rounded-3xl bg-surface border border-stroke overflow-hidden transition-all duration-300 hover:border-text/30 focus-ring-lg"
            >
              <span className="text-2xl md:text-3xl font-display italic text-text">
                View all
              </span>
              <span className="w-9 h-9 rounded-full border border-stroke flex items-center justify-center transition-all duration-300 group-hover:bg-text group-hover:border-text">
                <ArrowDiagonal width={14} height={14} className="text-muted group-hover:text-bg transition-colors" />
              </span>
            </Link>
          </motion.div>
        )}
      </div>

      {/* Scroll sentinel + loading-more indicator */}
      {hasMore && (
        <div
          ref={sentinelRef}
          role="status"
          aria-live="polite"
          className="flex flex-col items-center justify-center gap-3 py-14"
        >
          <span
            aria-hidden="true"
            className="h-7 w-7 rounded-full border-2 border-stroke border-t-text animate-spin"
          />
          <span className="text-2xs uppercase tracking-[0.2em] text-muted">
            Loading more · {visibleCount} / {items.length}
          </span>
        </div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Previous */}
            {imageItems.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(-1);
                }}
                className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white bg-black/70 border border-white/20 backdrop-blur-md hover:bg-black/80 transition-colors"
                aria-label="Previous image"
              >
                <ArrowRight
                  width={20}
                  height={20}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="rotate-180"
                />
              </button>
            )}

            <motion.div
              key={activeItem.id}
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.25, ease: easing.expo }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(event) => event.stopPropagation()}
            >
              {/*
                Native <img> on the raw source URL — this matches the URL the
                hover handler prefetches (new window.Image().src = item.image),
                so an already-hovered image opens instantly from cache instead
                of waiting on a cold next/image optimizer pass for a new URL.
              */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={activeItem.image}
                alt={activeItem.title}
                decoding="async"
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white bg-black/70 border border-white/20 backdrop-blur-md hover:bg-black/80 transition-colors"
                aria-label="Close preview"
              >
                ✕
              </button>
              {/* Position counter */}
              {imageItems.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/70 border border-white/20 backdrop-blur-md text-white text-xs tabular-nums">
                  {lightboxIndex! + 1} / {imageItems.length}
                </div>
              )}
            </motion.div>

            {/* Next */}
            {imageItems.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  step(1);
                }}
                className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white bg-black/70 border border-white/20 backdrop-blur-md hover:bg-black/80 transition-colors"
                aria-label="Next image"
              >
                <ArrowRight
                  width={20}
                  height={20}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
