"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import VinylLogo from "./VinylLogo";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/portfolio" },
  { label: "Resume", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Navigate after a short delay
    setTimeout(() => {
      router.push(href);
    }, 150);
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
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                isActive 
                  ? "text-text bg-stroke/50" 
                  : "text-muted hover:text-text hover:bg-stroke/50"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
        <div className="hidden sm:block w-px h-5 bg-stroke mx-1" />
        <a 
          href="/#contact" 
          className="group relative px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full transition-all duration-500 text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg overflow-visible hover:bg-stroke/30"
        >
          {/* Gradient border ring on hover */}
          <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ margin: '-2px' }}>
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
