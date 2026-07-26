"use client";

import { useEffect, useMemo, useRef } from "react";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import { groupCaseStudyBlocks } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { useCursor } from "./CursorContext";
import Navbar from "./Navbar";
import { createTextProcessor } from "./TextProcessor";
import SocialLinks from "./ui/SocialLinks";
import StatusDot from "./ui/StatusDot";
import CaseStudyHero from "./case-study/CaseStudyHero";
import DefaultCaseStudySections from "./case-study/DefaultCaseStudySections";
import CaseStudyAward from "./case-study/CaseStudyAward";
import NextProjectNav from "./case-study/NextProjectNav";
import {
  renderCaseStudyBlock,
  renderLayoutSection,
} from "./CaseStudyBlockRenderer";
import { fadeUp, smoothTransition } from "@/lib/animations";

export default function CaseStudyPage({ project }: { project: Project }) {
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

  // Next project (loops back to the first once past the end).
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = currentIndex < projects.length - 1
    ? projects[currentIndex + 1]
    : projects[0];

  return (
    <main className="bg-bg min-h-screen relative z-10">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <CaseStudyHero project={project} />

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
            <DefaultCaseStudySections project={project} />
            )}

            {/* Recognition / Award */}
            {project.award && <CaseStudyAward award={project.award} />}

            {/* Next Project Navigation */}
            {nextProject && nextProject.slug !== project.slug && (
              <NextProjectNav nextProject={nextProject} />
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
