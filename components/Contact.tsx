"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowDiagonal } from "./Icons";
import GradientBorderRing from "./ui/GradientBorderRing";
import { fadeUp, smoothTransition, viewportOnce } from "@/lib/animations";

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

  useEffect(() => {
    // Marquee animation
    let animation: gsap.core.Tween | null = null;
    
    if (marqueeRef.current) {
      const marqueeInner = marqueeRef.current.querySelector(".marquee-inner");
      if (marqueeInner) {
        animation = gsap.to(marqueeInner, {
          xPercent: -50,
          duration: 40,
          ease: "none",
          repeat: -1,
        });
      }
    }

    return () => {
      if (animation) animation.kill();
    };
  }, []);

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
                className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-display italic text-text leading-none"
              >
                {marqueeText}
                <span className="text-muted mx-6 md:mx-10">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* Center content */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={fadeUp.hidden}
          whileInView={fadeUp.visible}
          viewport={viewportOnce}
          transition={smoothTransition()}
        >
          <p className="text-base md:text-lg text-muted mb-8 max-w-md mx-auto">
            Have a project in mind? I&apos;m always open to new ideas and collaborations.
          </p>
          
          <motion.a
            whileTap={{ scale: 0.97 }}
            href="mailto:will.schulz@aw3.tech"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-bg border-2 border-stroke rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg overflow-visible"
          >
            <GradientBorderRing />
            <span className="text-lg text-text relative z-10 break-all sm:break-normal">will.schulz@aw3.tech</span>
            <ArrowDiagonal width={18} height={18} className="text-muted group-hover:text-text group-hover:translate-x-1 group-hover:-translate-y-1 transition-all relative z-10" />
          </motion.a>
        </motion.div>

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
                className="text-sm text-muted hover:text-text transition-colors hover:-translate-y-0.5 duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
              >
                {social.name}
              </Link>
            ))}
          </div>
          
          {/* Status */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-sm text-muted">Available for projects</span>
          </div>
        </div>

      </div>
    </section>
  );
}
