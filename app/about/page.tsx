"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import gsap from "gsap";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import Navbar from "@/components/Navbar";

const FloatingObjectsContact = dynamic(() => import("@/components/FloatingObjectsContact"), {
  ssr: false,
});

export default function AboutPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const skills = [
    "UI Design",
    "UX Research",
    "Prototyping",
    "Figma",
    "Framer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "Data Visualization",
    "Motion Design",
  ];
  const timelineContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const timelineItem = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const timelineDot = {
    hidden: { scale: 0 },
    show: { scale: 1, transition: { duration: 0.4 } },
  };

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Marquee animation
  useEffect(() => {
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

  return (
    <main className="bg-bg min-h-screen relative z-10">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-8 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 text-xs text-muted uppercase tracking-[0.3em] mb-6">
            <span className="w-8 h-px bg-stroke" />
            Resume
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-text leading-[1.03] mb-6">
            John <span className="font-display italic">Anderson</span>
          </h1>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            Product designer and developer based in New York, focused on <span className="font-display italic">thoughtful</span> digital experiences.
          </p>
        </motion.div>
      </section>

      {/* Image Section */}
      <section className="pb-16 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative aspect-square w-full max-w-[480px] mx-auto rounded-2xl overflow-hidden bg-surface">
            <ImageWithSkeleton
              src="/headshot.png"
              alt="Portrait of Will Schulz"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* About Description Section */}
      <section className="pb-16 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl text-text mb-8">
            <span className="font-display italic">About</span>
          </h2>
          <div className="space-y-3 text-base text-muted leading-[1.7]">
            <p>
              I'm a passionate designer and developer with 3+ years of experience crafting thoughtful digital experiences. My work sits at the intersection of design and code, specializing in creating interfaces that are both beautiful and functional with meticulous attention to detail.
            </p>
            <p>
              I approach every project with a focus on user needs, business goals, and technical constraints. Working collaboratively with product teams, engineers, and stakeholders to transform complex problems into delightful experiences that users genuinely enjoy using every day.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Work Experience Timeline */}
      <section className="pb-16 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl text-text mb-12">
            Work <span className="font-display italic">Experience</span>
          </h2>

          <div className="relative">
            <motion.div
              className="space-y-12"
              variants={timelineContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Experience Item 1 */}
              <motion.div 
                className="grid md:grid-cols-[180px_1fr] gap-6 relative pl-8 md:pl-0"
                variants={timelineItem}
              >
                {/* Dot */}
                <motion.div 
                  className="absolute left-0 md:left-[180px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg -translate-x-1/2"
                  variants={timelineDot}
                />
                
                <div className="text-sm text-muted">May 2025 - Dec 2025</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-text font-medium mb-1">UI/UX Designer</h3>
                    <p className="text-base text-muted font-display italic">Cedarline Labs</p>
                  </div>
                  <div className="space-y-3 text-base text-muted leading-[1.7]">
                    <p>
                      Led design initiatives for SaaS products, establishing user-centered design principles and collaborating with cross-functional teams to deliver high-quality digital experiences.
                    </p>
                    <p>
                      Conducted user research and usability testing to inform design decisions, while developing design systems that improved team velocity and product consistency.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Experience Item 2 */}
              <motion.div 
                className="grid md:grid-cols-[180px_1fr] gap-6 relative pl-8 md:pl-0"
                variants={timelineItem}
              >
                {/* Dot */}
                <motion.div 
                  className="absolute left-0 md:left-[180px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg -translate-x-1/2"
                  variants={timelineDot}
                />
                
                <div className="text-sm text-muted">Jun 2024 - Jun 2025</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-text font-medium mb-1">UI Designer</h3>
                    <p className="text-base text-muted font-display italic">Marrow Studio</p>
                  </div>
                  <div className="space-y-3 text-base text-muted leading-[1.7]">
                    <p>
                      Designed user interfaces for web and mobile applications across various industries. Created design systems and component libraries that reduced design-to-development handoff time by 40%.
                    </p>
                    <p>
                      Worked closely with developers to ensure pixel-perfect implementations, participating in daily standups and design reviews throughout the development lifecycle.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Experience Item 3 */}
              <motion.div 
                className="grid md:grid-cols-[180px_1fr] gap-6 relative pl-8 md:pl-0"
                variants={timelineItem}
              >
                {/* Dot */}
                <motion.div 
                  className="absolute left-0 md:left-[180px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg -translate-x-1/2"
                  variants={timelineDot}
                />
                
                <div className="text-sm text-muted">Feb 2025 - May 2025</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-text font-medium mb-1">Visual Designer</h3>
                    <p className="text-base text-muted font-display italic">Northwind Systems, Inc.</p>
                  </div>
                  <div className="space-y-3 text-base text-muted leading-[1.7]">
                    <p>
                      Created visual designs for marketing campaigns and brand materials across digital and print media. Developed brand guidelines and visual identity systems that ensured consistency across all touchpoints.
                    </p>
                    <p>
                      Designed graphics for social media and digital platforms, creating templates that empowered marketing teams to produce on-brand content independently.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Tools Section */}
      <section className="pb-16 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl text-text mb-6">
            <span className="font-display italic">Skills</span>
          </h2>
          <div className="h-px w-full bg-stroke/50 mb-6" />
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="group relative inline-flex items-center px-5 py-3 text-xs md:text-sm text-muted bg-transparent border-2 border-stroke rounded-full overflow-visible transition-colors duration-300 hover:text-text"
              >
                <span
                  className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ margin: "-2px" }}
                >
                  <span className="flex w-full h-full rounded-full bg-bg" />
                </span>
                <span className="relative z-10">{skill}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section className="pb-16 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl text-text mb-8">
            <span className="font-display italic">Education</span>
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-lg text-text font-medium mb-1">Self-Taught Designer & Developer</h3>
              <p className="text-base text-muted font-display italic mb-2">Online Learning & Practice</p>
              <p className="text-sm text-muted mb-3">2021 - Present</p>
              <p className="text-base text-muted leading-[1.7]">
                Continuous learning through online courses, documentation, and hands-on project work. Focused on user-centered design, modern web development, and design systems.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Recognition / Features */}
      <section className="pb-24 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl text-text mb-8">
            <span className="font-display italic">Recognition</span>
          </h2>
          <div className="space-y-4">
            <Link 
              href="#" 
              className="group flex items-center justify-between py-3 border-b border-stroke hover:border-text/30 transition-colors"
            >
              <span className="text-base text-muted group-hover:text-text transition-colors">
                Featured on Awwwards
              </span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
            <Link 
              href="#" 
              className="group flex items-center justify-between py-3 border-b border-stroke hover:border-text/30 transition-colors"
            >
              <span className="text-base text-muted group-hover:text-text transition-colors">
                Design work featured on Behance
              </span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
            <Link 
              href="#" 
              className="group flex items-center justify-between py-3 border-b border-stroke hover:border-text/30 transition-colors"
            >
              <span className="text-base text-muted group-hover:text-text transition-colors">
                Speaker at Design Matters Conference
              </span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
            <Link 
              href="#" 
              className="group flex items-center justify-between py-3 border-b border-stroke hover:border-text/30 transition-colors"
            >
              <span className="text-base text-muted group-hover:text-text transition-colors">
                Article published on Smashing Magazine
              </span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
            <Link 
              href="#" 
              className="group flex items-center justify-between py-3 border-b border-stroke hover:border-text/30 transition-colors"
            >
              <span className="text-base text-muted group-hover:text-text transition-colors">
                10x featured on Dribbble
              </span>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer CTA - Contact Section */}
      <section
        id="contact"
        className="relative bg-bg pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden"
      >
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
                  LET&apos;S WORK TOGETHER
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
              <span
                className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ margin: "-2px" }}
              >
                <span className="flex w-full h-full rounded-full bg-bg" />
              </span>
              <span className="text-lg text-text relative z-10">hello@johnanderson.com</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted group-hover:text-text group-hover:translate-x-1 group-hover:-translate-y-1 transition-all relative z-10"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke">
            {/* Socials */}
            <div className="flex items-center gap-6 md:gap-8">
              <Link
                href="https://x.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text transition-colors hover:-translate-y-0.5 duration-200"
              >
                Twitter
              </Link>
              <Link
                href="https://www.linkedin.com/in/yourprofile/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text transition-colors hover:-translate-y-0.5 duration-200"
              >
                LinkedIn
              </Link>
              <Link
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text transition-colors hover:-translate-y-0.5 duration-200"
              >
                Dribbble
              </Link>
              <Link
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text transition-colors hover:-translate-y-0.5 duration-200"
              >
                GitHub
              </Link>
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
    </main>
  );
}
