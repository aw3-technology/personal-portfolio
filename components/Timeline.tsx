"use client";

import { motion } from "framer-motion";
import type { TimelineEntry } from "@/lib/experience";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const dot = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { duration: 0.4 } },
};

/**
 * Staggered, dotted work-experience timeline. Renders the given entries; the
 * data lives in lib/experience.ts so the about page stays presentational.
 */
export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <div className="relative">
      <motion.div
        className="space-y-12"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {entries.map((entry) => (
          <motion.div
            key={`${entry.title}-${entry.period}`}
            className="grid md:grid-cols-[180px_1fr] gap-6 relative pl-8 md:pl-0"
            variants={item}
          >
            <motion.div
              className="absolute left-0 md:left-[180px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg -translate-x-1/2"
              variants={dot}
            />
            <div className="text-sm text-muted">{entry.period}</div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl text-text font-medium mb-1">{entry.title}</h3>
                <p className="text-base text-muted font-display italic">{entry.org}</p>
              </div>
              <div className="space-y-3 text-base text-muted leading-[1.7]">
                <p>{entry.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
