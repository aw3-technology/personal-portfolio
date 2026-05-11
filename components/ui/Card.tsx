"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export type CardProps = HTMLMotionProps<"div">;

export default function Card({ className = "", ...props }: CardProps) {
  return (
    <motion.div
      className={`bg-surface border border-stroke rounded-3xl p-6 md:p-8 ${className}`.trim()}
      {...props}
    />
  );
}
