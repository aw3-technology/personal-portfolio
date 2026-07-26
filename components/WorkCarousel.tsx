"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import { useCursor } from "@/components/CursorContext";
import OwnershipBadge from "@/components/ui/OwnershipBadge";

// Every project that has a card image, in the order they appear in the portfolio.
const carouselProjects = projects.filter(
  (project): project is typeof project & { image: string } =>
    Boolean(project.image)
);

// Duplicate the list so the marquee can loop seamlessly at translateX(-50%).
const track = [...carouselProjects, ...carouselProjects];

export default function WorkCarousel() {
  const { setCursorType, setCursorText } = useCursor();

  return (
    <section
      id="work-carousel"
      aria-label="Project image carousel"
      className="bg-bg relative z-10 py-16 md:py-24 overflow-hidden"
    >
      <div
        className="relative"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="group flex w-max gap-5 md:gap-6 animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
          {track.map((project, index) => (
            <Link
              key={`${project.slug}-${index}`}
              href={`/work/${project.slug}`}
              aria-hidden={index >= carouselProjects.length}
              tabIndex={index >= carouselProjects.length ? -1 : undefined}
              className="group/card relative block h-52 w-80 md:h-64 md:w-[26rem] shrink-0 overflow-hidden rounded-2xl border border-stroke bg-surface focus-ring-lg"
              onMouseEnter={() => {
                setCursorType("project");
                setCursorText("View");
              }}
              onMouseLeave={() => {
                setCursorType("default");
                setCursorText("");
              }}
            >
              <ImageWithSkeleton
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 320px, 416px"
                className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-5">
                <h3 className="text-sm md:text-base text-text leading-tight">
                  {project.title}
                </h3>
                <OwnershipBadge ownership={project.ownership} variant="overlay" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
