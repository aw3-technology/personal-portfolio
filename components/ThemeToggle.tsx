"use client";

import { useTheme } from "./ThemeProvider";
import GradientBorderRing from "./ui/GradientBorderRing";
import { MoonIcon, SunIcon } from "./Icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === "light" ? MoonIcon : SunIcon;

  return (
    <button
      onClick={toggleTheme}
      className="group relative w-9 h-9 flex items-center justify-center rounded-full border border-stroke transition-all duration-500 overflow-visible"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Gradient border ring on hover */}
      <GradientBorderRing>
        <Icon width={16} height={16} className="text-muted" />
      </GradientBorderRing>

      {/* Icon for non-hover state */}
      <Icon
        width={16}
        height={16}
        className="text-muted relative z-10 group-hover:opacity-0 transition-opacity duration-500"
      />
    </button>
  );
}
