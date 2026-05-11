"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import VinylLogo from "./VinylLogo";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import { useScrolled } from "@/lib/hooks/useScrolled";
import { ChevronDown, Check } from "./Icons";
import { easing } from "@/lib/animations";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/portfolio" },
];

const moreLinks = [
  { label: "Resume", href: "/about" },
  { label: "Bio", href: "/bio" },
];

export default function Navbar() {
  const isScrolled = useScrolled(100);
  const { theme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);

  const isMoreActive = moreLinks.some((link) => link.href === pathname);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (moreRef.current && !moreRef.current.contains(target)) {
        setIsMoreOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMoreOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.98 }}
                transition={{ duration: 0.2, ease: easing.expo }}
                className={`absolute right-0 mt-3 w-44 rounded-2xl border backdrop-blur-xl shadow-2xl shadow-black/30 overflow-hidden z-20 ${
                  theme === "dark"
                    ? "border-white/15 bg-[#0e0e12]/95"
                    : "border-stroke/70 bg-surface/95"
                }`}
                role="menu"
              >
                <div className={`absolute inset-0 pointer-events-none ${
                  theme === "dark"
                    ? "bg-gradient-to-b from-white/8 via-white/2 to-transparent"
                    : "bg-gradient-to-b from-black/[0.03] to-transparent"
                }`} />
                <ul className="relative z-10 p-2">
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
              </motion.div>
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
          <span className="absolute inset-0 -m-[2px] rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <span className="flex w-full h-full rounded-full bg-surface backdrop-blur-md" />
          </span>
          <span className="relative z-10">Say hi ↗</span>
        </a>
        <div className="hidden sm:block w-px h-5 bg-stroke mx-1" />
        <ThemeToggle />
      </div>
    </nav>
  );
}
