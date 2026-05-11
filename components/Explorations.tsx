"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { useCursor } from "./CursorContext";
import { ArrowDiagonal, Dribbble } from "./Icons";
import { explorations } from "@/lib/explorations";
import { easing, fadeUp, smoothTransition, viewportOnce } from "@/lib/animations";
import AnimatedSection from "./ui/AnimatedSection";
import GradientButton from "./ui/GradientButton";

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

export default function Explorations() {
  const { setCursorType, setCursorText } = useCursor();
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxTitle, setLightboxTitle] = useState<string>("");
  const prefetchedImages = useRef<Set<string>>(new Set());

  useEffect(() => {
    if (!lightboxImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxImage(null);
        setLightboxTitle("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage]);

  return (
    <section
      id="explorations"
      className="relative bg-bg py-16 md:py-24"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 px-2">
          <div>
            <span className="section-eyebrow mb-4">
              <span className="section-divider" />
              Explorations
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-text leading-[1.1]">
              Visual <span className="font-display italic">playground</span>
            </h2>
          </div>
          <GradientButton
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-3 px-5 py-2.5 text-sm text-muted"
          >
            <Dribbble width={16} height={16} className="text-dribbble group-hover:scale-110 transition-transform relative z-10" />
            <span className="relative z-10 group-hover:text-text transition-colors duration-300">View on Dribbble</span>
            <ArrowDiagonal width={12} height={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
          </GradientButton>
        </AnimatedSection>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[240px] gap-5 md:gap-6 px-2">
          {explorations.map((item, index) => (
            <motion.button
              key={item.id}
              type="button"
              className={`group relative rounded-3xl bg-surface border border-stroke overflow-hidden cursor-pointer transition-all duration-300 hover:border-text/30 text-left w-full h-full focus-ring-lg ${item.span}`}
              initial={fadeUp.hidden}
              whileInView={fadeUp.visible}
              viewport={viewportOnce}
              transition={smoothTransition(index * 0.08)}
              onMouseEnter={() => {
                setCursorType("project");
                setCursorText(item.image ? "View" : "Explore");
                if (item.image && !prefetchedImages.current.has(item.image)) {
                  const img = new window.Image();
                  img.src = item.image;
                  prefetchedImages.current.add(item.image);
                }
              }}
              onMouseLeave={() => {
                setCursorType("default");
                setCursorText("");
              }}
              onClick={() => {
                if (!item.image) {
                  return;
                }

                setLightboxImage(item.image);
                setLightboxTitle(item.title);
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
        </div>
        <div className="mt-12 px-2 md:hidden flex justify-center">
          <GradientButton
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-3 px-5 py-2.5 text-sm text-muted"
          >
            <Dribbble width={16} height={16} className="text-dribbble group-hover:scale-110 transition-transform relative z-10" />
            <span className="relative z-10 group-hover:text-text transition-colors duration-300">View on Dribbble</span>
            <ArrowDiagonal width={12} height={12} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
          </GradientButton>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3, ease: easing.expo }}
                className="relative max-w-5xl max-h-[90vh] w-full"
                onClick={(event) => event.stopPropagation()}
              >
                <Image
                  src={lightboxImage}
                  alt={lightboxTitle}
                  width={1920}
                  height={1080}
                  loading="eager"
                  className="w-full h-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => {
                    setLightboxImage(null);
                    setLightboxTitle("");
                  }}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white bg-black/70 border border-white/20 backdrop-blur-md hover:bg-black/80 transition-colors"
                  aria-label="Close preview"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
