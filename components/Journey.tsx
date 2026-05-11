"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/experience";
import { fadeUpSm, smoothTransition, viewportOnce } from "@/lib/animations";
import { ArrowDiagonal } from "./Icons";
import AnimatedSection from "./ui/AnimatedSection";
import GradientButton from "./ui/GradientButton";
import StatusBadge from "./ui/StatusBadge";

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative bg-bg py-16 md:py-24"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header - Right aligned like reference */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 px-2">
          <div>
            <span className="section-eyebrow mb-4">
              <span className="section-divider" />
              Experience
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-text leading-[1.1]">
              Recent <span className="font-display italic">adventures</span>
            </h2>
            <p className="text-muted text-sm md:text-base mt-3 max-w-md">
              A timeline of roles and learning experiences that shaped my craft.
            </p>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-display italic text-text">4+</span>
              <span className="text-2xs text-muted uppercase tracking-wider">Years</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-stroke" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-display italic text-text">20+</span>
              <span className="text-2xs text-muted uppercase tracking-wider">Projects</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-stroke" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-display italic text-text">15+</span>
              <span className="text-2xs text-muted uppercase tracking-wider">Clients</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Experience List - Clean table style like reference */}
        <div className="px-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`group py-7 md:py-8 border-b border-stroke hover:bg-surface/30 transition-all duration-300 ${
                index === 0 ? "border-t" : ""
              }`}
              initial={fadeUpSm.hidden}
              whileInView={fadeUpSm.visible}
              viewport={viewportOnce}
              transition={smoothTransition(index * 0.05, 0.8)}
            >
              <div className="grid grid-cols-12 gap-3 md:gap-4 items-baseline">
                {/* Role - Main column */}
                <div className="col-span-8 md:col-span-5 md:order-1">
                  <h3 className="text-base md:text-lg text-text group-hover:translate-x-2 transition-transform duration-300">
                    {exp.role}
                  </h3>
                </div>
                
                {/* Period - Right aligned */}
                <div className="col-span-4 md:col-span-3 text-right md:order-3">
                  <span className="text-sm md:text-base text-text font-display italic">
                    {exp.period}
                  </span>
                </div>

                {/* Company - Secondary column */}
                <div className="col-span-12 md:col-span-4 md:order-2">
                  <span className="text-sm md:text-base text-muted group-hover:text-text/70 transition-colors">
                    {exp.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section with status */}
        <AnimatedSection className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-12 md:mt-16 px-2">
          {/* Status */}
          <div className="inline-flex items-center gap-3 justify-center md:justify-start text-center md:text-left">
            <StatusBadge />
            <span className="text-sm text-text">Available for new projects</span>
            <span className="text-muted">·</span>
            <span className="text-sm text-muted">Based in San Francisco</span>
          </div>

          {/* CTA */}
          <GradientButton
            href="#contact"
            className="inline-flex w-fit items-center gap-3 px-5 py-3 text-sm text-muted self-center mt-2 md:mt-0 md:self-auto md:ml-auto"
          >
            <span className="relative z-10 group-hover:text-text transition-colors duration-300">Get in touch</span>
            <ArrowDiagonal width={12} height={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 relative z-10" />
          </GradientButton>
        </AnimatedSection>
      </div>
    </section>
  );
}
