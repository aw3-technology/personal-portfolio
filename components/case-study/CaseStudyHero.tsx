"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import OwnershipBadge from "../ui/OwnershipBadge";
import { fadeUpSm, fadeUpLg, smoothTransition } from "@/lib/animations";

/** Case-study hero: category badge, title, summary, and the meta info row. */
export default function CaseStudyHero({ project }: { project: Project }) {
  return (
    <section className="pt-36 pb-20 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
      <div className="max-w-4xl">
        {/* Category Badge */}
        <motion.div
          initial={fadeUpSm.hidden}
          animate={fadeUpSm.visible}
          transition={smoothTransition(0.1, 0.8)}
          className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-7"
        >
          <span className="section-eyebrow text-caption text-muted/80 tracking-[0.32em]">
            <span className="section-divider" />
            {project.category}
          </span>
          <OwnershipBadge ownership={project.ownership} />
        </motion.div>

        <motion.h1
          initial={fadeUpLg.hidden}
          animate={fadeUpLg.visible}
          transition={smoothTransition(0.2, 0.9)}
          className="text-4xl md:text-[3.25rem] lg:text-6xl text-text leading-[1.03] mb-6"
        >
          {project.title.split(" ")[0]}{" "}
          <span className="font-display italic">{project.title.split(" ").slice(1).join(" ")}</span>
        </motion.h1>

        <motion.p
          initial={fadeUpSm.hidden}
          animate={fadeUpSm.visible}
          transition={smoothTransition(0.3, 0.9)}
          className="text-lg md:text-[1.25rem] text-muted max-w-2xl leading-[1.75] mb-10"
        >
          {project.summary}
        </motion.p>
      </div>

      {/* Meta Info */}
      <motion.div
        initial={fadeUpSm.hidden}
        animate={fadeUpSm.visible}
        transition={smoothTransition(0.4, 0.9)}
        className="pt-8 border-t border-stroke"
      >
        <div className="flex flex-wrap items-start gap-7 md:gap-12">
          {project.meta && project.meta.length > 0 ? (
            project.meta.map((item) => (
              <div key={item.label}>
                <span className="text-2xs text-muted uppercase tracking-[0.24em] block mb-2">
                  {item.label}
                </span>
                {Array.isArray(item.value) ? (
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {item.value.map((value) => (
                      <span
                        key={value}
                        className="px-2.5 py-1 text-caption text-muted bg-surface border border-stroke rounded-full"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-sm md:text-[0.98rem] text-text">{item.value}</span>
                )}
              </div>
            ))
          ) : (
            <>
              <div className="pr-4 border-r border-stroke md:border-r-0 md:pr-0">
                <span className="text-2xs text-muted uppercase tracking-[0.24em] block mb-2">Role</span>
                <span className="text-sm md:text-[0.98rem] text-text">{project.role}</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-stroke" />
              <div className="pr-4 border-r border-stroke md:border-r-0 md:pr-0">
                <span className="text-2xs text-muted uppercase tracking-[0.24em] block mb-2">Tools</span>
                <span className="text-sm md:text-[0.98rem] text-text">Figma</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-stroke" />
              <div className="pr-4 border-r border-stroke md:border-r-0 md:pr-0">
                <span className="text-2xs text-muted uppercase tracking-[0.24em] block mb-2">Duration</span>
                <span className="text-sm md:text-[0.98rem] text-text">6-8 weeks</span>
              </div>
              <div className="hidden md:block w-px h-10 bg-stroke" />
              <div>
                <span className="text-2xs text-muted uppercase tracking-[0.24em] block mb-2">Scope</span>
                <div className="mt-1 text-sm md:text-[0.98rem] text-text">
                  {project.tags.map((tag, index) => (
                    <span key={tag}>
                      {index > 0 ? " / " : ""}
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
}
