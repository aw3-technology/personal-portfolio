"use client";

import { motion } from "framer-motion";
import GradientBorderRing from "./ui/GradientBorderRing";
import { ChevronUp } from "./Icons";
import { useScrolled } from "@/lib/hooks/useScrolled";

export default function BackToTop() {
  const isVisible = useScrolled(500);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className={`group fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-text text-bg flex items-center justify-center shadow-lg transition-all duration-500 hover:scale-110 overflow-visible ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <GradientBorderRing>
        <ChevronUp width={20} height={20} className="text-text" />
      </GradientBorderRing>

      {/* Icon for non-hover state */}
      <ChevronUp
        width={20}
        height={20}
        className="relative z-10 group-hover:opacity-0 transition-opacity duration-500"
      />
    </motion.button>
  );
}
