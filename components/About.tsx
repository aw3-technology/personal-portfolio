"use client";

import { motion } from "framer-motion";
import { fadeUp, smoothTransition, viewportOnce } from "@/lib/animations";

const skills = {
  design: ["UI Design", "UX Research", "Prototyping", "Figma", "Framer"],
  development: ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"],
};

const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Projects Completed", value: "20+" },
  { label: "Happy Clients", value: "15+" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-bg py-16 md:py-24"
    >
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header - matching Work section */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 px-2"
          initial={fadeUp.hidden}
          whileInView={fadeUp.visible}
          viewport={viewportOnce}
          transition={smoothTransition()}
        >
          <div className="max-w-2xl">
            <span className="eyebrow-label inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-stroke" />
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-text leading-[1.1]">
              My <span className="font-display italic">journey</span> so far
            </h2>
            <p className="text-muted text-sm md:text-base mt-3">
              A passionate designer and developer, dedicated to creating meaningful digital experiences.
            </p>
          </div>
          
          {/* Status pill - matching Work section button */}
          <div className="inline-flex items-center gap-3 px-5 py-3 border border-stroke rounded-full text-sm text-muted">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span>Available for projects</span>
          </div>
        </motion.div>

        {/* Bento Grid - matching Work section style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 px-2">
          
          {/* Main intro card - spans 7 columns */}
          <motion.div
            className="md:col-span-7 bg-surface border border-stroke rounded-3xl p-6 md:p-8 relative overflow-hidden"
            initial={fadeUp.hidden}
            whileInView={fadeUp.visible}
            viewport={viewportOnce}
            transition={smoothTransition(0.1)}
          >
            {/* Wireframe decoration */}
            <div className="absolute top-8 right-8 w-20 h-20 border border-stroke/30 rounded-full opacity-50" />
            <div className="absolute top-12 right-12 w-10 h-10 border border-stroke/20 rotate-45 opacity-50" />
            
            <span className="text-xs text-muted uppercase tracking-[0.2em] mb-6 block">Story</span>
            <p className="text-xl md:text-2xl lg:text-3xl text-text leading-relaxed mb-6">
              I believe in creating digital experiences that are both{" "}
              <span className="font-display italic">beautiful</span> and{" "}
              <span className="font-display italic">functional</span>.
            </p>
            <p className="text-muted leading-relaxed">
              Started the journey in 2021, learning design and development from scratch. 
              Today, helping teams build products that respect users' time and attention.
            </p>
          </motion.div>

          {/* Stats card - spans 5 columns */}
          <motion.div
            className="md:col-span-5 bg-surface border border-stroke rounded-3xl p-6 md:p-8 flex flex-col justify-between h-full"
            initial={fadeUp.hidden}
            whileInView={fadeUp.visible}
            viewport={viewportOnce}
            transition={smoothTransition(0.2)}
          >
            <span className="text-xs text-muted uppercase tracking-[0.2em] mb-6 block">Numbers</span>
            <div className="space-y-6">
              {stats.map((stat, index) => (
                <div key={stat.label}>
                  <div className="flex items-end justify-between">
                    <span className="text-muted text-sm">{stat.label}</span>
                    <span className="text-3xl md:text-4xl font-display italic text-text">{stat.value}</span>
                  </div>
                  {index < stats.length - 1 && <div className="h-px bg-stroke/50 mt-4" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Design Skills - spans 5 columns */}
          <motion.div
            className="md:col-span-5 bg-surface border border-stroke rounded-3xl p-6 md:p-8"
            initial={fadeUp.hidden}
            whileInView={fadeUp.visible}
            viewport={viewportOnce}
            transition={smoothTransition(0.3)}
          >
            <span className="text-xs text-muted uppercase tracking-[0.2em] mb-6 block">Design</span>
            <div className="flex flex-wrap gap-2">
              {skills.design.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm text-text bg-bg border border-stroke/50 rounded-full hover:border-text/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Development Skills - spans 7 columns */}
          <motion.div
            className="md:col-span-7 bg-surface border border-stroke rounded-3xl p-6 md:p-8 relative overflow-hidden"
            initial={fadeUp.hidden}
            whileInView={fadeUp.visible}
            viewport={viewportOnce}
            transition={smoothTransition(0.4)}
          >
            {/* Wireframe decoration */}
            <div className="absolute bottom-6 right-6 w-16 h-16 border border-stroke/30 rotate-12 opacity-50" />
            
            <span className="text-xs text-muted uppercase tracking-[0.2em] mb-6 block">Development</span>
            <div className="flex flex-wrap gap-2">
              {skills.development.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm text-text bg-bg border border-stroke/50 rounded-full hover:border-text/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
