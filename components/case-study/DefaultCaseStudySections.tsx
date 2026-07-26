"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { fadeUp, smoothTransition, viewportOnce } from "@/lib/animations";

/**
 * Fallback case-study body rendered when a project has no structured
 * `caseStudy.layout` or `caseStudy.blocks`: the Challenge, Process, Solution,
 * and Results sections built from the project's plain-text fields.
 */
export default function DefaultCaseStudySections({ project }: { project: Project }) {
  const metrics = project.metrics;

  return (
    <>
      {/* Challenge Section (Combined Overview + Problem) */}
      <motion.section
        id="challenge"
        className="scroll-mt-32"
        initial={fadeUp.hidden}
        whileInView={fadeUp.visible}
        viewport={viewportOnce}
        transition={smoothTransition()}
      >
        <span className="section-eyebrow text-caption text-muted/80 tracking-[0.32em] mb-7">
          <span className="w-6 h-px bg-stroke" />
          Challenge
        </span>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          <div>
            <h2 className="text-2xl md:text-[2rem] text-text mb-5">
              The <span className="font-display italic">Challenge</span>
            </h2>
            <p className="text-base md:text-lead text-muted leading-[1.8]">{project.problem}</p>
          </div>
          <div className="bg-surface p-7 md:p-9 rounded-2xl border border-stroke">
            <h3 className="text-caption text-muted/80 mb-6 uppercase tracking-[0.3em]">Key Outcomes</h3>
            <ul className="space-y-3.5">
              {metrics.map((metric, i) => {
                const rewritten = (() => {
                  if (metric === "2-day delivery") return "Delivered within 2 days";
                  if (metric === "3 iterations") return "Iterated 3 times with refinements";
                  if (metric === "Client approved") return "Approved without extra rework";
                  return metric;
                })();
                return (
                  <li key={i} className="flex items-start gap-3 text-sm md:text-[1rem] text-text leading-[1.6]">
                    <span className="text-accent text-sm mt-0.5">→</span>
                    {rewritten}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Process */}
      <motion.section
        id="process"
        className="scroll-mt-32"
        initial={fadeUp.hidden}
        whileInView={fadeUp.visible}
        viewport={viewportOnce}
        transition={smoothTransition()}
      >
        <span className="section-eyebrow text-caption text-muted/80 tracking-[0.32em] mb-7">
          <span className="w-6 h-px bg-stroke" />
          Process
        </span>
        <h2 className="text-2xl md:text-[2rem] text-text mb-10">
          From ambiguity to <span className="font-display italic">clarity.</span>
        </h2>

        <p className="text-base md:text-lead text-muted max-w-3xl leading-[1.8] mb-10">
          {project.process}
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="aspect-[4/3] bg-surface rounded-2xl border border-stroke overflow-hidden group relative">
            <ImageWithSkeleton
              src="/case-study/3d-abstract-1.jpg"
              alt="User Flow Diagram"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
          <div className="aspect-[4/3] bg-surface rounded-2xl border border-stroke overflow-hidden group relative">
            <ImageWithSkeleton
              src="/case-study/3d-shapes-1.jpg"
              alt="Low-Fidelity Wireframes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </div>
      </motion.section>

      {/* Solution */}
      <motion.section
        id="solution"
        className="scroll-mt-32"
        initial={fadeUp.hidden}
        whileInView={fadeUp.visible}
        viewport={viewportOnce}
        transition={smoothTransition()}
      >
        <span className="section-eyebrow text-caption text-muted/80 tracking-[0.32em] mb-7">
          <span className="w-6 h-px bg-stroke" />
          Solution
        </span>
        <h2 className="text-2xl md:text-[2rem] text-text mb-10">
          Precision at <span className="font-display italic">scale.</span>
        </h2>
        <p className="text-base md:text-lead text-muted max-w-3xl leading-[1.8] mb-10">
          {project.solution}
        </p>
        <div className="w-full aspect-video bg-surface rounded-3xl border border-stroke overflow-hidden group mb-8 relative">
          <ImageWithSkeleton
            src="/case-study/3d-render-1.jpg"
            alt="High-Fidelity Design"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="aspect-[4/3] bg-surface rounded-2xl border border-stroke overflow-hidden group relative">
            <ImageWithSkeleton
              src="/case-study/3d-design-1.jpg"
              alt="Component Details"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
          <div className="aspect-[4/3] bg-surface rounded-2xl border border-stroke overflow-hidden group relative">
            <ImageWithSkeleton
              src="/case-study/3d-geometry-1.jpg"
              alt="Responsive Design"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </div>
      </motion.section>

      {/* Outcome */}
      <motion.section
        id="outcome"
        className="scroll-mt-32"
        initial={fadeUp.hidden}
        whileInView={fadeUp.visible}
        viewport={viewportOnce}
        transition={smoothTransition()}
      >
        <span className="section-eyebrow text-caption text-muted/80 tracking-[0.32em] mb-7 max-w-3xl">
          <span className="w-6 h-px bg-stroke" />
          Results
        </span>
        <h2 className="text-2xl md:text-[2rem] text-text mb-6 max-w-3xl">
          Measurable <span className="font-display italic">results.</span>
        </h2>
        <p className="text-base md:text-lead text-muted leading-[1.8] max-w-3xl">
          {project.outcome}
        </p>

        {/* Metrics from project data */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="p-6 md:p-8 bg-surface rounded-2xl border border-stroke text-center hover:border-text/30 transition-all duration-300"
            >
              <span className="text-xl md:text-[1.6rem] lg:text-2xl font-display italic text-text">{metric}</span>
            </div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
