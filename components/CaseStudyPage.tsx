"use client";

import { useEffect, useMemo, useRef } from "react";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import { groupCaseStudyBlocks } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ImageWithSkeleton from "./ImageWithSkeleton";
import VinylLogo from "./VinylLogo";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import { useCursor } from "./CursorContext";
import Navbar from "./Navbar";
import { ArrowRight } from "./Icons";
import { createTextProcessor } from "./TextProcessor";
import SocialLinks from "./ui/SocialLinks";
import StatusDot from "./ui/StatusDot";
import {
  renderCaseStudyBlock,
  renderLayoutSection,
} from "./CaseStudyBlockRenderer";
import {
  fadeUp,
  fadeUpSm,
  fadeUpLg,
  smoothTransition,
  viewportOnce,
} from "@/lib/animations";

export default function CaseStudyPage({ project }: { project: Project }) {
  const heroRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const { setCursorType, setCursorText } = useCursor();

  // Parallax for hero image
  const heroImageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroImageRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);

  useEffect(() => {
    // Reset cursor state on page load to avoid stale hover text.
    setCursorType("default");
    setCursorText("");
  }, [setCursorType, setCursorText]);

  const metrics = useMemo(() => project.metrics, [project.metrics]);
  const caseStudyBlocks = project.caseStudy?.blocks ?? [];
  const caseStudyLayout = project.caseStudy?.layout ?? [];

  const groupedCaseStudyBlocks = useMemo(
    () => groupCaseStudyBlocks(caseStudyBlocks),
    [caseStudyBlocks]
  );

  const textProcessor = useMemo(
    () => createTextProcessor(project.emphasisKeywords ?? []),
    [project.emphasisKeywords]
  );

  // Get next and previous projects
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 
    ? projects[currentIndex + 1] 
    : projects[0]; // Loop back to first project

  return (
    <main className="bg-bg min-h-screen relative z-10">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-36 pb-20 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <div className="max-w-4xl">
            {/* Category Badge */}
            <motion.span
              initial={fadeUpSm.hidden}
              animate={fadeUpSm.visible}
              transition={smoothTransition(0.1, 0.8)}
              className="section-eyebrow text-caption text-muted/80 tracking-[0.32em] mb-7"
            >
              <span className="section-divider" />
              {project.category}
            </motion.span>
            
            <motion.h1
              initial={fadeUpLg.hidden}
              animate={fadeUpLg.visible}
              transition={smoothTransition(0.2, 0.9)}
              className="text-4xl md:text-[3.25rem] lg:text-6xl text-text leading-[1.03] mb-6"
            >
              {project.title.split(' ')[0]}{' '}
              <span className="font-display italic">{project.title.split(' ').slice(1).join(' ')}</span>
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
                  project.meta.map((item, index) => (
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
                            {index > 0 ? " / " : ""}{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
      </section>

      {/* Main Image Mockup */}
      <section ref={heroImageRef} className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-24 md:mb-32">
         <motion.div
            initial={fadeUp.hidden}
            animate={fadeUp.visible}
            transition={smoothTransition(0.5)}
            className="w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-surface border border-stroke relative"
          >
            <div className="absolute inset-0 w-full h-full">
            {project.caseStudyImage || project.image ? (
              <ImageWithSkeleton
                src={project.caseStudyImage ?? project.image ?? ""}
                alt={project.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
                className="object-cover"
              />
            ) : null}
            </div>
         </motion.div>
      </section>

      {/* Content Grid */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          {/* Main Content */}
          <div className="flex flex-col gap-20 md:gap-28">
            {caseStudyLayout.length > 0 ? (
              <div className="flex flex-col gap-14 md:gap-20">
                {caseStudyLayout.map((layout, index) =>
                  renderLayoutSection(layout, index, textProcessor)
                )}
              </div>
            ) : groupedCaseStudyBlocks.length > 0 ? (
              <div className="flex flex-col gap-8 md:gap-10">
                {groupedCaseStudyBlocks.map((block, index) =>
                  renderCaseStudyBlock(block, index, textProcessor)
                )}
              </div>
            ) : (
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
                   <div key={i} className="p-6 md:p-8 bg-surface rounded-2xl border border-stroke text-center hover:border-text/30 transition-all duration-300">
                     <span className="text-xl md:text-[1.6rem] lg:text-2xl font-display italic text-text">{metric}</span>
                   </div>
                 ))}
               </div>
            </motion.section>

            </>
            )}

            {/* Recognition / Award */}
            {project.award && (
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
                      src={project.award.image}
                      alt={`${project.award.title} from ${project.award.issuer}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-caption text-muted/80 tracking-[0.3em] uppercase mb-3">
                      {project.award.title}
                    </div>
                    <p className="text-base md:text-lead text-text leading-[1.7] mb-6 italic">
                      &ldquo;{project.award.citation}&rdquo;
                    </p>
                    {project.award.body && (
                      <p className="text-base md:text-lead text-muted leading-[1.8] mb-6">
                        {project.award.body}
                      </p>
                    )}
                    <dl className="grid grid-cols-1 gap-3 text-sm">
                      <div className="flex gap-3">
                        <dt className="text-muted/70 uppercase tracking-[0.2em] text-caption w-20 shrink-0">Issued by</dt>
                        <dd className="text-text">{project.award.issuer}</dd>
                      </div>
                      <div className="flex gap-3">
                        <dt className="text-muted/70 uppercase tracking-[0.2em] text-caption w-20 shrink-0">Date</dt>
                        <dd className="text-text">{project.award.date}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </motion.section>
            )}


            {/* Next Project Navigation */}
            {nextProject && nextProject.slug !== project.slug && (
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
                        {(() => {
                          const words = nextProject.title.split(' ');
                          if (words.length <= 2) {
                            // If 2 or fewer words, make last word italic
                            const lastWord = words.pop();
                            const firstWords = words.join(' ');
                            return (
                              <>
                                {firstWords && firstWords + ' '}
                                <span className="font-display italic">{lastWord}</span>
                              </>
                            );
                          } else {
                            // If more than 2 words, make last 2 words italic
                            const lastTwoWords = words.slice(-2).join(' ');
                            const firstWords = words.slice(0, -2).join(' ');
                            return (
                              <>
                                {firstWords}{' '}
                                <span className="font-display italic">{lastTwoWords}</span>
                              </>
                            );
                          }
                        })()}
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
            )}

          </div>
      </div>

      {/* Footer */}
      <footer className="bg-bg pb-8 md:pb-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="pt-8 border-t border-stroke">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Socials */}
            <SocialLinks />
            
            {/* Status */}
            <div className="flex items-center gap-3">
              <StatusDot />
              <span className="text-sm text-muted">Available for projects</span>
            </div>
          </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
