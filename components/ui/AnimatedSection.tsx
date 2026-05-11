"use client";

import { motion, type Transition } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import {
  fadeUp,
  smoothTransition,
  viewportOnce,
  type FadeStates,
  type ViewportOptions,
} from "@/lib/animations";

type AnimatedSectionProps = {
  as?: "div" | "section";
  variants?: FadeStates;
  viewport?: ViewportOptions;
  transition?: Transition;
  className?: string;
  style?: CSSProperties;
  id?: string;
  children: ReactNode;
};

export default function AnimatedSection({
  as = "div",
  variants = fadeUp,
  viewport = viewportOnce,
  transition = smoothTransition(),
  className,
  style,
  id,
  children,
}: AnimatedSectionProps) {
  const Component = as === "section" ? motion.section : motion.div;
  return (
    <Component
      id={id}
      className={className}
      style={style}
      initial={variants.hidden}
      whileInView={variants.visible}
      viewport={viewport}
      transition={transition}
    >
      {children}
    </Component>
  );
}
