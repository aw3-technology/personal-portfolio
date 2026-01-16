"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function VinylLogo() {
  const { theme } = useTheme();

  return (
    <Link
      href="/"
      className="group relative flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded-full"
      aria-label="Back to home"
    >
      {/* Outer ring with vibrant gradient border */}
      <div className={`relative w-9 h-9 rounded-full p-[2px] transition-all duration-500 ${
        theme === "dark" 
          ? "bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-blue-400"
          : "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 group-hover:from-pink-600 group-hover:via-purple-600 group-hover:to-blue-600"
      }`}>
        {/* Inner circle background */}
        <div className={`w-full h-full rounded-full flex items-center justify-center transition-all duration-300 ${
          theme === "dark" ? "bg-bg" : "bg-bg"
        }`}>
          {/* Logo Text */}
          <span className={`text-[13px] font-display italic tracking-tighter leading-none transition-all duration-300 group-hover:scale-110 ${
            theme === "dark" ? "text-text" : "text-text"
          }`}>
            JA
          </span>
        </div>
      </div>
    </Link>
  );
}
