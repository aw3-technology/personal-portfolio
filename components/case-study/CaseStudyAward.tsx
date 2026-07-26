"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { fadeUp, smoothTransition, viewportOnce } from "@/lib/animations";

type Award = NonNullable<Project["award"]>;

/** Recognition / award section shown when a project has award data. */
export default function CaseStudyAward({ award }: { award: Award }) {
  return (
    <motion.section
      id="recognition"
      className="scroll-mt-32"
      initial={fadeUp.hidden}
      whileInView={fadeUp.visible}
      viewport={viewportOnce}
      transition={smoothTransition()}
    >
      <span className="section-eyebrow text-caption text-muted/80 tracking-[0.32em] mb-7 max-w-3xl">
        <span className="w-6 h-px bg-stroke" />
        Recognition
      </span>
      <h2 className="text-2xl md:text-[2rem] text-text mb-10 max-w-3xl">
        Honored for <span className="font-display italic">cutting-edge innovation.</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="relative w-full aspect-[4/5] bg-surface rounded-2xl border border-stroke overflow-hidden">
          <ImageWithSkeleton
            src={award.image}
            alt={`${award.title} from ${award.issuer}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
        <div>
          <div className="text-caption text-muted/80 tracking-[0.3em] uppercase mb-3">
            {award.title}
          </div>
          <p className="text-base md:text-lead text-text leading-[1.7] mb-6 italic">
            &ldquo;{award.citation}&rdquo;
          </p>
          {award.body && (
            <p className="text-base md:text-lead text-muted leading-[1.8] mb-6">
              {award.body}
            </p>
          )}
          <dl className="grid grid-cols-1 gap-3 text-sm">
            <div className="flex gap-3">
              <dt className="text-muted/70 uppercase tracking-[0.2em] text-caption w-20 shrink-0">Issued by</dt>
              <dd className="text-text">{award.issuer}</dd>
            </div>
            <div className="flex gap-3">
              <dt className="text-muted/70 uppercase tracking-[0.2em] text-caption w-20 shrink-0">Date</dt>
              <dd className="text-text">{award.date}</dd>
            </div>
          </dl>
        </div>
      </div>
    </motion.section>
  );
}
