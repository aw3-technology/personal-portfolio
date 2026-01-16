"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Link from "next/link";
import dynamic from "next/dynamic";

const FloatingObjectsContact = dynamic(() => import("./FloatingObjectsContact"), {
  ssr: false,
});

const socials = [
  { name: "Twitter", href: "https://x.com/johnanderson" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/johnanderson/" },
  { name: "Dribbble", href: "https://dribbble.com/" },
  { name: "GitHub", href: "https://github.com/johnanderson" },
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-base md:text-lg text-muted mb-8 max-w-md mx-auto">
            Have a project in mind? I&apos;m always open to new ideas and collaborations.
          </p>
          
          <motion.a
            whileTap={{ scale: 0.97 }}
            href="mailto:hello@johnanderson.com"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-bg border-2 border-stroke rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg overflow-visible"
          >
            {/* Gradient border ring - only outline */}
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ margin: '-2px' }}>
              <span className="flex w-full h-full rounded-full bg-bg" />
            </span>
            <span className="text-lg text-text relative z-10 break-all sm:break-normal">hello@johnanderson.com</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted group-hover:text-text group-hover:translate-x-1 group-hover:-translate-y-1 transition-all relative z-10">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
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
