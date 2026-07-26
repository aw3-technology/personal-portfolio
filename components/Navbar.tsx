"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import VinylLogo from "./VinylLogo";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import { useScrolled } from "@/lib/hooks/useScrolled";
import { useDismissable } from "@/lib/hooks/useDismissable";
import { ChevronDown, Check } from "./Icons";
import GlassMenu from "./ui/GlassMenu";
import GradientBorderRing from "./ui/GradientBorderRing";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/portfolio" },
];

const moreLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "Resume", href: "/about" },
  { label: "Bio", href: "/bio" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const isScrolled = useScrolled(100);
  const { theme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  const isMoreActive = moreLinks.some((link) => link.href === pathname);

  useDismissable(moreRef, () => setIsMoreOpen(false));

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMoreOpen(false);

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Navigate after a short delay
    setTimeout(() => {
      router.push(href);
    }, 150);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push('/#contact');
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 w-full py-3 sm:py-4 md:py-5 flex justify-center z-50">
      <div
        className={`inline-flex max-w-[calc(100vw-1.5rem)] flex-wrap items-center justify-center gap-1 px-2 py-2 backdrop-blur-md border rounded-full transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-surface shadow-md shadow-black/10"
            : "bg-surface shadow-sm"
        } ${
          theme === "dark" ? "border-white/10" : "border-stroke/50"
        }`}
      >
        <VinylLogo />
        <div className="hidden sm:block w-px h-5 bg-stroke mx-1" />
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavigation(e, link.href)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full transition-all duration-200 focus-ring ${
                isActive
                  ? "text-text bg-stroke/50"
                  : "text-muted hover:text-text hover:bg-stroke/50"
              }`}
            >
              {link.label}
            </Link>
          );
        })}

        {/* More dropdown */}
        <div className="relative" ref={moreRef}>
          <button
            type="button"
            onClick={() => setIsMoreOpen((prev) => !prev)}
            aria-haspopup="menu"
            aria-expanded={isMoreOpen}
            className={`inline-flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full transition-all duration-200 focus-ring ${
              isMoreActive
                ? "text-text bg-stroke/50"
                : "text-muted hover:text-text hover:bg-stroke/50"
            }`}
          >
            <span>More</span>
            <ChevronDown
              width={10}
              height={10}
              className={`shrink-0 transition-transform duration-300 ${isMoreOpen ? "rotate-180" : ""}`}
            />
          </button>

          <AnimatePresence>
            {isMoreOpen && (
              <GlassMenu align="right" width="w-44" isDark={theme === "dark"}>
                <ul className="relative z-10 p-2" role="menu">
                  {moreLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          onClick={(e) => handleNavigation(e, link.href)}
                          role="menuitem"
                          className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-sm transition-all ${
                            isActive
                              ? "bg-stroke/60 text-text"
                              : "text-muted hover:text-text hover:bg-stroke/40"
                          }`}
                        >
                          <span>{link.label}</span>
                          {isActive && (
                            <Check width={14} height={14} className="text-text/90 shrink-0" />
                          )}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </GlassMenu>
            )}
          </AnimatePresence>
        </div>

        <div className="hidden sm:block w-px h-5 bg-stroke mx-1" />
        <a
          href="#contact"
          onClick={handleContactClick}
          className="group relative px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full transition-all duration-500 text-text focus-ring overflow-visible hover:bg-stroke/30"
        >
          {/* Gradient border ring on hover */}
          <GradientBorderRing fill="bg-surface backdrop-blur-md" />
          <span className="relative z-10">Say hi ↗</span>
        </a>
        <div className="hidden sm:block w-px h-5 bg-stroke mx-1" />
        <ThemeToggle />
      </div>
    </nav>
  );
}
