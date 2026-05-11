"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, smoothTransition, viewportOnce } from "@/lib/animations";

type SectionHeaderProps = {
  label: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  cta?: ReactNode;
};

export default function SectionHeader({
  label,
  title,
  subtitle,
  cta,
}: SectionHeaderProps) {
  return (
    <motion.div
      className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 px-2"
      initial={fadeUp.hidden}
      whileInView={fadeUp.visible}
      viewport={viewportOnce}
      transition={smoothTransition()}
    >
      <div>
        <span className="section-eyebrow mb-4">
          <span className="section-divider" />
          {label}
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-text leading-[1.1]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted text-sm md:text-base mt-3 max-w-md">
            {subtitle}
          </p>
        )}
      </div>
      {cta}
    </motion.div>
  );
}
