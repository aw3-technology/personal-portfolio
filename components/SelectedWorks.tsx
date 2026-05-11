"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowRight } from "@/components/Icons";
import { smoothTransition } from "@/lib/animations";
import GradientButton from "@/components/ui/GradientButton";
import BentoCard, { homepageBentoConfigs } from "@/components/ui/BentoCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg relative z-10 py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <SectionHeader
          label="Selected Work"
          title={<>Featured <span className="font-display italic">projects</span></>}
          subtitle="A selection of projects I've worked on, from concept to launch."
          cta={
            <GradientButton
              as={Link}
              href="/portfolio"
              className="hidden md:inline-flex items-center gap-3 px-5 py-3 text-sm text-muted"
            >
              <span className="relative z-10 group-hover:text-text transition-colors duration-300">View all work</span>
              <ArrowRight width={14} height={14} className="group-hover:translate-x-1 transition-transform relative z-10" />
            </GradientButton>
          }
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 px-2">
          {projects.slice(0, 4).map((project, index) => (
            <BentoCard
              key={project.slug}
              project={project}
              config={homepageBentoConfigs[index % homepageBentoConfigs.length]}
              motionProps={{
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "-100px" },
                transition: smoothTransition(index * 0.1),
              }}
            />
          ))}
        </div>
        <div className="mt-12 px-2 md:hidden flex justify-center">
          <GradientButton
            as={Link}
            href="/portfolio"
            className="inline-flex w-fit items-center justify-center gap-3 px-6 py-3 text-sm text-muted"
          >
            <span className="relative z-10 group-hover:text-text transition-colors duration-300">View all work</span>
            <ArrowRight width={14} height={14} className="group-hover:translate-x-1 transition-transform relative z-10" />
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
