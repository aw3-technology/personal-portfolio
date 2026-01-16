"use client";

import { useEffect, useRef, useState, Suspense, useCallback } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import VinylLogo from "./VinylLogo";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";

const roles = ["Designer", "Developer", "Creator", "Thinker"];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/portfolio" },
  { label: "Resume", href: "/about" },
];

const FloatingObjects = dynamic(() => import("./FloatingObjects"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentRole, setCurrentRole] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Navigate after a short delay
    setTimeout(() => {
      router.push(href);
    }, 150);
  };

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Name reveal with mask
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
        0.1
      );

      // Blur to focus for other elements
      tl.fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
        0.3
      );

      // Set loaded after animations
      tl.call(() => setIsLoaded(true));

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-bg flex flex-col overflow-hidden"
      id="home"
    >
      {/* 3D Floating Objects */}
      <Suspense fallback={null}>
        <FloatingObjects />
      </Suspense>

      {/* Navbar - Always Fixed */}
      <nav
        className="fixed top-0 left-0 right-0 w-full py-3 sm:py-4 md:py-5 flex justify-center z-50"
      >
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

      {/* Main Content */}
      <div ref={contentRef} className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-10 lg:px-16 pb-16 pt-20 sm:pt-16 md:pt-16 relative z-10">
        
        {/* Label */}
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          Portfolio 2026
        </p>

        {/* Name with mask reveal */}
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text mb-6">
          John Anderson
        </h1>

        {/* Role */}
        <p className="blur-in text-lg md:text-xl lg:text-2xl text-muted mb-10">
          A{" "}
          <span key={currentRole} className="font-display italic text-text animate-fade-in">
            {roles[currentRole]}
          </span>
          {" "}based in New York
        </p>

        {/* Bio */}
        <p className="blur-in text-sm md:text-base text-muted leading-relaxed max-w-md mb-12">
          Crafting thoughtful digital experiences with attention to the details that make interfaces feel alive.
        </p>

        {/* CTA */}
        <div className="blur-in flex flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <Link
            href="#work"
            className="group relative w-fit px-7 py-3.5 bg-text text-bg text-sm rounded-full hover:scale-105 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg overflow-visible"
          >
            {/* Gradient border ring - only visible on hover */}
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ margin: '-2px' }}>
              <span className="flex w-full h-full rounded-full bg-bg" />
            </span>
            <span className="relative z-10 group-hover:text-text transition-colors duration-500">View Work</span>
          </Link>
          <Link
            href="#contact"
            className="group relative w-fit px-7 py-3.5 bg-bg text-text text-sm rounded-full border-2 border-stroke transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg overflow-visible"
          >
            {/* Gradient border ring - only visible on hover */}
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ margin: '-2px' }}>
              <span className="flex w-full h-full rounded-full bg-bg" />
            </span>
            <span className="relative z-10">Get in Touch</span>
          </Link>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="blur-in absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-text animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
