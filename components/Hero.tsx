"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "./Navbar";
import GradientButton from "./ui/GradientButton";

const roles = ["Developer", "Designer", "Creative", "Founder"];

const FloatingObjects = dynamic(() => import("./FloatingObjects"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [currentRole, setCurrentRole] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

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
      <FloatingObjects />

      <Navbar />

      {/* Main Content */}
      <div ref={contentRef} className="flex-1 flex flex-col items-center justify-center text-center px-6 md:px-10 lg:px-16 pb-16 pt-20 sm:pt-16 md:pt-16 relative z-10">
        
        {/* Label */}
        <p className="eyebrow-label blur-in mb-8">
          Portfolio 2026
        </p>

        {/* Name with mask reveal */}
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text mb-6">
          William Schulz
        </h1>

        {/* Role */}
        <p className="blur-in text-lg md:text-xl lg:text-2xl text-muted mb-10">
          A{" "}
          <span key={currentRole} className="font-display italic text-text animate-fade-in">
            {roles[currentRole]}
          </span>
          {" "}based in San Francisco
        </p>

        {/* Bio */}
        <p className="blur-in text-sm md:text-base text-muted leading-relaxed max-w-md mb-12">
          Crafting thoughtful digital experiences with attention to the details that make interfaces feel alive.
        </p>

        {/* CTA */}
        <div className="blur-in flex flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
          <GradientButton
            as={Link}
            href="#work"
            variant="filled"
            className="w-fit px-7 py-3.5 text-sm hover:scale-105"
          >
            <span className="relative z-10 group-hover:text-text transition-colors duration-500">View Work</span>
          </GradientButton>
          <GradientButton
            as={Link}
            href="#contact"
            className="w-fit px-7 py-3.5 text-text text-sm"
          >
            <span className="relative z-10">Get in Touch</span>
          </GradientButton>
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
