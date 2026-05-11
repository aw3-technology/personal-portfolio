"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function VinylLogo() {
  const { theme } = useTheme();

  return (
    <Link
      href="/"
      className="group relative flex items-center justify-center focus-ring rounded-full"
      aria-label="Back to home"
    >
      {/* Outer ring with vibrant gradient border */}
      <div className={`relative w-9 h-9 rounded-full p-[2px] transition-all duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-blue-400"
          : "bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 group-hover:from-pink-600 group-hover:via-purple-600 group-hover:to-blue-600"
      }`}>
        {/* Inner circle background */}
        <div className="w-full h-full rounded-full overflow-hidden bg-bg transition-transform duration-300 group-hover:scale-110">
          <Image
            src="/headshot.png"
            alt="William Schulz"
            width={36}
            height={36}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </Link>
  );
}
