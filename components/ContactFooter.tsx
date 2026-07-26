"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowDiagonal } from "./Icons";
import AnimatedSection from "./ui/AnimatedSection";
import GradientButton from "./ui/GradientButton";
import SocialLinks from "./ui/SocialLinks";
import StatusDot from "./ui/StatusDot";
import { useMarqueeAnimation } from "@/lib/hooks/useMarqueeAnimation";

const FloatingObjectsContact = dynamic(() => import("./FloatingObjectsContact"), {
  ssr: false,
});

type SocialLink = { name: string; href: string };

type ContactFooterProps = {
  /** Section id used as the scroll anchor. Defaults to "contact". */
  id?: string;
  /** Scrolling marquee headline. */
  marqueeText?: string;
  /** Contact email address (used for both the label and the mailto: link). */
  email?: string;
  /** Spacing utility applied to the center content block. */
  centerSpacing?: string;
  /** Extra classes for the email label (e.g. break-all handling). */
  emailClassName?: string;
  /** Override the social links; falls back to SocialLinks' defaults. */
  socialLinks?: SocialLink[];
  /** Layout classes for the social links row. */
  socialClassName?: string;
};

/**
 * Shared "let's work together" contact footer used across the home, blog,
 * about, portfolio, and bio pages. Owns its own marquee ref/animation and the
 * lazy-loaded 3D background so callers only pass presentational overrides.
 */
export default function ContactFooter({
  id = "contact",
  marqueeText = "LET'S WORK TOGETHER",
  email = "will.schulz@aw3.tech",
  centerSpacing = "mb-16 md:mb-20",
  emailClassName = "text-lg text-text relative z-10",
  socialLinks,
  socialClassName,
}: ContactFooterProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  useMarqueeAnimation(marqueeRef);

  return (
    <section
      id={id}
      className="relative bg-bg pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden"
    >
      {/* 3D Background */}
      <FloatingObjectsContact />

      <div className="relative z-10 w-full max-w-content mx-auto px-6 md:px-10 lg:px-16">
        {/* Marquee */}
        <div ref={marqueeRef} className="overflow-hidden mb-12 md:mb-16 -mx-[100vw]">
          <div
            className="marquee-inner flex whitespace-nowrap"
            style={{ willChange: "transform" }}
          >
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
        <AnimatedSection className={`text-center ${centerSpacing}`}>
          <p className="text-base md:text-lg text-muted mb-8 max-w-md mx-auto">
            Have a project in mind? I&apos;m always open to new ideas and collaborations.
          </p>

          <GradientButton
            as={motion.a}
            whileTap={{ scale: 0.97 }}
            href={`mailto:${email}`}
            className="inline-flex items-center gap-3 px-8 py-4"
          >
            <span className={emailClassName}>{email}</span>
            <ArrowDiagonal
              width={18}
              height={18}
              className="text-muted group-hover:text-text group-hover:translate-x-1 group-hover:-translate-y-1 transition-all relative z-10"
            />
          </GradientButton>
        </AnimatedSection>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke">
          <SocialLinks links={socialLinks} className={socialClassName} />

          {/* Status */}
          <div className="flex items-center gap-3">
            <StatusDot />
            <span className="text-sm text-muted">Available for projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}
