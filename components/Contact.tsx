"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowDiagonal } from "./Icons";
import AnimatedSection from "./ui/AnimatedSection";
import GradientButton from "./ui/GradientButton";
import StatusBadge from "./ui/StatusBadge";
import { useMarqueeAnimation } from "@/lib/hooks/useMarqueeAnimation";

const FloatingObjectsContact = dynamic(() => import("./FloatingObjectsContact"), {
  ssr: false,
});

const socials = [
  { name: "X", href: "https://x.com/aw3_xyz" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/will-schulz/" },
  { name: "GitHub", href: "https://github.com/aw3-technology" },
  { name: "Instagram", href: "https://www.instagram.com/will_parkerr/" },
  { name: "Facebook", href: "https://www.facebook.com/will.schulz/" },
  { name: "Calendly", href: "https://calendly.com/will-schulz-aw3/30min" },
];

export default function Contact() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  useMarqueeAnimation(marqueeRef);

  const marqueeText = "LET'S WORK TOGETHER";

  return (
    <section
      id="contact"
      className="relative bg-bg pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden"
    >
      {/* 3D Background */}
      <FloatingObjectsContact />
      
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Marquee */}
        <div 
          ref={marqueeRef} 
          className="overflow-hidden mb-12 md:mb-16 -mx-[100vw]"
        >
          <div className="marquee-inner flex whitespace-nowrap" style={{ willChange: "transform" }}>
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                className="text-hero md:text-hero-md lg:text-hero-lg font-display italic text-text leading-none"
              >
                {marqueeText}
                <span className="text-muted mx-6 md:mx-10">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Center content */}
        <AnimatedSection className="text-center mb-12 md:mb-16">
          <p className="text-base md:text-lg text-muted mb-8 max-w-md mx-auto">
            Have a project in mind? I&apos;m always open to new ideas and collaborations.
          </p>

          <GradientButton
            as={motion.a}
            whileTap={{ scale: 0.97 }}
            href="mailto:will.schulz@aw3.tech"
            className="inline-flex items-center gap-3 px-8 py-4"
          >
            <span className="text-lg text-text relative z-10 break-all sm:break-normal">will.schulz@aw3.tech</span>
            <ArrowDiagonal width={18} height={18} className="text-muted group-hover:text-text group-hover:translate-x-1 group-hover:-translate-y-1 transition-all relative z-10" />
          </GradientButton>
        </AnimatedSection>

        {/* Bottom bar */}
        <div 
          className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke"
        >
          {/* Socials */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8">
            {socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text transition-colors hover:-translate-y-0.5 duration-200 focus-ring rounded"
              >
                {social.name}
              </Link>
            ))}
          </div>
          
          {/* Status */}
          <div className="flex items-center gap-3">
            <StatusBadge />
            <span className="text-sm text-muted">Available for projects</span>
          </div>
        </div>

      </div>
    </section>
  );
}
