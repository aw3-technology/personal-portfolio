"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/experience";
import { fadeUp, fadeUpSm, smoothTransition, viewportOnce } from "@/lib/animations";
import { ArrowDiagonal } from "./Icons";
import GradientBorderRing from "./ui/GradientBorderRing";

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative bg-bg py-16 md:py-24"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header - Right aligned like reference */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 px-2"
          initial={fadeUp.hidden}
          whileInView={fadeUp.visible}
          viewport={viewportOnce}
          transition={smoothTransition()}
        >
          <div>
            <span className="eyebrow-label inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-stroke" />
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
              <span className="text-[10px] text-muted uppercase tracking-wider">Years</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-stroke" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-display italic text-text">20+</span>
              <span className="text-[10px] text-muted uppercase tracking-wider">Projects</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-stroke" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-display italic text-text">15+</span>
              <span className="text-[10px] text-muted uppercase tracking-wider">Clients</span>
            </div>
          </div>
        </motion.div>

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
        <motion.div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-16 px-2"
          initial={fadeUp.hidden}
          whileInView={fadeUp.visible}
          viewport={viewportOnce}
          transition={smoothTransition()}
        >
          {/* Status */}
          <div className="inline-flex items-center gap-3 justify-center md:justify-start text-center md:text-left">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm text-text">Available for new projects</span>
            <span className="text-muted">·</span>
            <span className="text-sm text-muted">Based in San Francisco</span>
          </div>
          
          {/* CTA */}
          <a
            href="#contact"
            className="group relative inline-flex w-fit items-center gap-3 px-5 py-3 bg-bg border-2 border-stroke rounded-full text-sm text-muted transition-all duration-500 overflow-visible self-center mt-2 md:mt-0 md:self-auto md:ml-auto"
          >
            <GradientBorderRing />
            <span className="relative z-10 group-hover:text-text transition-colors duration-300">Get in touch</span>
            <ArrowDiagonal width={12} height={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 relative z-10" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
