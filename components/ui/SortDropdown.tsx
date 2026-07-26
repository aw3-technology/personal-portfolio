"use client";

import { forwardRef } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "@/components/Icons";
import GlassMenu, { GlassMenuOption } from "@/components/ui/GlassMenu";
import GradientBorderRing from "@/components/ui/GradientBorderRing";

export type SortOption = { value: string; label: string };

type SortDropdownProps = {
  options: SortOption[];
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  /** Classes for the outer positioning wrapper (differs mobile vs desktop). */
  wrapperClassName: string;
  /** Text-size utility for the trigger button ("text-xs" | "text-sm"). */
  buttonTextClass?: string;
};

/**
 * Gradient-bordered sort menu shared by the portfolio page's mobile and desktop
 * filter rows. The two call sites previously duplicated this entire markup; they
 * now differ only by wrapper classes, button text size, and whether a ref is
 * attached for outside-click detection.
 */
const SortDropdown = forwardRef<HTMLDivElement, SortDropdownProps>(function SortDropdown(
  { options, value, onChange, isOpen, onToggle, wrapperClassName, buttonTextClass = "text-sm" },
  ref,
) {
  const activeLabel = options.find((option) => option.value === value)?.label ?? "Sort";

  return (
    <div className={wrapperClassName} ref={ref}>
      <GradientBorderRing />
      <button
        type="button"
        onClick={onToggle}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`relative z-10 inline-flex items-center gap-2 px-4 py-3 text-left ${buttonTextClass} font-medium text-text bg-transparent border-2 border-stroke rounded-full shadow-none focus:outline-none focus:ring-2 focus:ring-text/60 transition-all hover:border-text/40 cursor-pointer`}
      >
        <span className="whitespace-nowrap">{activeLabel}</span>
        <span className="pointer-events-none shrink-0">
          <ChevronDown
            width={12}
            height={12}
            className={`text-text/70 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <GlassMenu align="right" width="w-[220px]">
            <ul role="listbox" aria-label="Sort options" className="relative z-10 p-2">
              {options.map((option) => (
                <GlassMenuOption
                  key={option.value}
                  isActive={option.value === value}
                  onClick={() => onChange(option.value)}
                >
                  {option.label}
                </GlassMenuOption>
              ))}
            </ul>
          </GlassMenu>
        )}
      </AnimatePresence>
    </div>
  );
});

export default SortDropdown;
