"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, smoothTransition } from "@/lib/animations";

type PageHeroProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Override the bottom margin of the centered block. */
  className?: string;
  /** Extra content rendered inside the centered block, after the subtitle. */
  children?: ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  className = "mb-8 md:mb-12",
  children,
}: PageHeroProps) {
  return (
    <motion.div
      initial={fadeUp.hidden}
      animate={fadeUp.visible}
      transition={smoothTransition(0, 0.8)}
      className={`text-center ${className}`}
    >
      <span className="eyebrow-label inline-flex items-center gap-2 mb-6">
        <span className="w-8 h-px bg-stroke" />
        {eyebrow}
      </span>
      <h1 className="text-5xl md:text-7xl lg:text-8xl text-text leading-[1.03] mb-6">
        {title}
      </h1>
      {subtitle && (
        <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      {children}
    </motion.div>
  );
}
