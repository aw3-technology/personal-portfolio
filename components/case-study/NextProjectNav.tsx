"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import { useCursor } from "../CursorContext";
import { ArrowRight } from "../Icons";
import { fadeUpSm, smoothTransition, viewportOnce } from "@/lib/animations";

/** Renders the title with the trailing word(s) set in the display italic. */
function accentedTitle(title: string) {
  const words = title.split(" ");
  if (words.length <= 2) {
    const lastWord = words.pop();
    const firstWords = words.join(" ");
    return (
      <>
        {firstWords && firstWords + " "}
        <span className="font-display italic">{lastWord}</span>
      </>
    );
  }
  const lastTwoWords = words.slice(-2).join(" ");
  const firstWords = words.slice(0, -2).join(" ");
  return (
    <>
      {firstWords}{" "}
      <span className="font-display italic">{lastTwoWords}</span>
    </>
  );
}

/** "Next Project" navigation card at the foot of a case study. */
export default function NextProjectNav({ nextProject }: { nextProject: Project }) {
  const { setCursorType, setCursorText } = useCursor();

  return (
    <motion.section
      className="mt-24 border-t border-stroke"
      initial={fadeUpSm.hidden}
      whileInView={fadeUpSm.visible}
      viewport={viewportOnce}
      transition={smoothTransition(0, 0.8)}
    >
      <Link
        href={`/work/${nextProject.slug}`}
        onMouseEnter={() => {
          setCursorType("project");
          setCursorText("View");
        }}
        onMouseLeave={() => {
          setCursorType("default");
          setCursorText("");
        }}
        className="group relative block py-12 md:py-16 border-b border-stroke hover:border-text/30 transition-all duration-500 focus-ring-lg"
      >
        <div className="relative flex items-center justify-between gap-6">
          {/* Left - Project info */}
          <div className="flex-1">
            <span className="section-eyebrow text-caption text-muted/80 tracking-[0.32em] mb-5">
              <span className="w-8 h-px bg-stroke group-hover:bg-text/30 transition-colors duration-300" />
              Next Project
            </span>

            <h3 className="text-3xl md:text-4xl lg:text-5xl text-text mb-3 group-hover:text-text/70 transition-colors duration-300">
              {accentedTitle(nextProject.title)}
            </h3>

            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm text-muted">
              <span className="px-3 py-1.5 rounded-full border border-stroke text-xs uppercase tracking-wider text-muted">
                {nextProject.category}
              </span>
              <span className="text-muted/70">{nextProject.year}</span>
              <span className="hidden md:block text-muted/40">•</span>
              <span className="hidden md:block text-muted/70">{nextProject.role}</span>
            </div>
          </div>

          {/* Right - Arrow circle */}
          <div className="relative group/arrow flex items-center justify-center w-16 h-16 md:w-20 md:h-20 shrink-0">
            {/* Gradient border wrapper - same as logo */}
            <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animated-gradient-border">
              <div className="flex w-full h-full rounded-full bg-bg" />
            </div>

            {/* Static border (visible by default) */}
            <div className="absolute inset-0 rounded-full border-2 border-stroke group-hover:border-transparent transition-all duration-500" />

            <ArrowRight
              width={28}
              height={28}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="relative z-10 text-text group-hover:translate-x-1 transition-transform duration-300"
            />
          </div>
        </div>
      </Link>
    </motion.section>
  );
}
