"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { easing } from "@/lib/animations";
import { Check } from "@/components/Icons";

type GlassMenuProps = {
  align?: "left" | "right";
  width?: string;
  /**
   * When provided, the panel adapts to the theme (used by the Navbar). When
   * omitted, the panel uses the always-dark glass treatment used by the
   * portfolio filter/sort dropdowns.
   */
  isDark?: boolean;
  children: ReactNode;
};

/**
 * The floating "glass" panel shared by every dropdown in the app — the
 * blurred, bordered container with a subtle top-down sheen and a pop-in
 * animation. Callers supply the list (`<ul>` with the appropriate role) as
 * children so option vs. menu semantics stay at the call site.
 */
export default function GlassMenu({
  align = "right",
  width = "w-[220px]",
  isDark,
  children,
}: GlassMenuProps) {
  const themed = isDark !== undefined;
  const panelBg = themed
    ? isDark
      ? "border-white/15 bg-[#0e0e12]/95"
      : "border-stroke/70 bg-surface/95"
    : "border-white/15 bg-[#0e0e12]/95";
  const overlay = themed
    ? isDark
      ? "bg-gradient-to-b from-white/8 via-white/2 to-transparent"
      : "bg-gradient-to-b from-black/[0.03] to-transparent"
    : "bg-gradient-to-b from-white/8 via-white/2 to-transparent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.98 }}
      transition={{ duration: 0.2, ease: easing.expo }}
      className={`absolute ${align === "right" ? "right-0" : "left-0"} mt-3 ${width} rounded-2xl border backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden z-20 ${panelBg}`}
    >
      <div className={`absolute inset-0 pointer-events-none ${overlay}`} />
      {children}
    </motion.div>
  );
}

type GlassMenuOptionProps = {
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
};

/** An option row for the always-dark portfolio dropdowns. */
export function GlassMenuOption({
  isActive,
  onClick,
  children,
}: GlassMenuOptionProps) {
  return (
    <li>
      <button
        type="button"
        role="option"
        aria-selected={isActive}
        onClick={onClick}
        className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-sm transition-all ${
          isActive
            ? "bg-white/16 text-white"
            : "text-white/80 hover:text-white hover:bg-white/10"
        }`}
      >
        <span className="whitespace-nowrap">{children}</span>
        {isActive && <Check width={14} height={14} className="text-text/90 shrink-0" />}
      </button>
    </li>
  );
}
