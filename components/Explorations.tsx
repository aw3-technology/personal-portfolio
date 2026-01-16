"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "UI/UX Designer",
    company: "Cedarline Labs",
    period: "May 2025 - Dec 2025",
  },
  {
    role: "UI Designer",
    company: "Marrow Studio",
    period: "Jun 2024 - Jun 2025",
  },
  {
    role: "Visual Designer",
    company: "Northwind Systems, Inc.",
    period: "Feb 2025 - May 2025",
  },
  {
    role: "UI/UX Designer",
    company: "Sunjet Digital",
    period: "Aug 2021 - Mar 2023",
  },
  {
    role: "Freelance UI/UX Designer",
    company: "RemoteNest",
    period: "Sep 2020 - Aug 2021",
  },
];

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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs text-muted uppercase tracking-[0.3em] mb-4">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Status */}
          <div className="inline-flex items-center gap-3 justify-center md:justify-start text-center md:text-left">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-sm text-text">Available for new projects</span>
            <span className="text-muted">·</span>
            <span className="text-sm text-muted">Based in New York</span>
          </div>
          
          {/* CTA */}
          <a
            href="#contact"
            className="group relative inline-flex w-fit items-center gap-3 px-5 py-3 bg-bg border-2 border-stroke rounded-full text-sm text-muted transition-all duration-500 overflow-visible self-center mt-2 md:mt-0 md:self-auto md:ml-auto"
          >
            {/* Gradient border ring - only outline */}
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ margin: '-2px' }}>
              <span className="flex w-full h-full rounded-full bg-bg" />
            </span>
            <span className="relative z-10 group-hover:text-text transition-colors duration-300">Get in touch</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 relative z-10">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
