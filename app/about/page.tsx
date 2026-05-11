"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import Navbar from "@/components/Navbar";
import { ArrowDiagonal } from "@/components/Icons";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GradientButton from "@/components/ui/GradientButton";
import SocialLinks from "@/components/ui/SocialLinks";
import StatusDot from "@/components/ui/StatusDot";
import { fadeUp, smoothTransition } from "@/lib/animations";
import { useMarqueeAnimation } from "@/lib/hooks/useMarqueeAnimation";

const FloatingObjectsContact = dynamic(() => import("@/components/FloatingObjectsContact"), {
  ssr: false,
});

export default function AboutPage() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  useMarqueeAnimation(marqueeRef);
  const skills = [
    "Blockchain",
    "AI",
    "Full-Stack Development",
    "Design + UI/UX",
    "Data Analytics",
    "Product Management",
    "Digital Marketing",
    "Fundraising",
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

  return (
    <main className="bg-bg min-h-screen relative z-10">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-8 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={fadeUp.hidden}
          animate={fadeUp.visible}
          transition={smoothTransition(0, 0.8)}
          className="text-center mb-8 md:mb-12"
        >
          <span className="eyebrow-label inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-stroke" />
            Resume
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-text leading-[1.03] mb-6">
            William <span className="font-display italic">Schulz</span>
          </h1>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            Software developer, designer, creative, and founder based in San Francisco, building <span className="font-display italic">thoughtful</span> digital experiences.
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
              I&apos;m a founder, writer, and systems thinker focused on the intersection of technology, storytelling, and human evolution. As Founder &amp; CEO of <span className="font-display italic">AW3 Technology</span>, I&apos;m building ventures that merge <span className="font-display italic">code, capital, and creativity</span> — exploring decentralized systems, AI-native development, digital infrastructure, and new models for collaboration. My work spans software architecture, product design, venture strategy, and emerging technologies, with a focus on systems that empower creators, founders, and communities rather than extract from them.
            </p>
            <p>
              I&apos;m currently developing projects across AI tooling, programming languages, decentralized consensus, publishing, and creative media. This includes <span className="font-display italic">SunScript</span>, an AI-native programming language and development ecosystem; experimental infrastructure around <span className="font-display italic">Proof of Love</span> consensus; and long-form literary projects exploring civilization, spirituality, empire, memory, and the future of humanity.
            </p>
            <p>
              At AW3, I work alongside an extraordinary team of engineers, founders, and creators who believe technology should serve humanity, not the other way around. Our work blends deep expertise in AI, Web3, and venture building with creative instincts drawn from art, storytelling, and culture — supported by a world-class network of strategic advisors across finance, education, and technology, including leaders from <span className="font-display italic">Baird Augustine</span>, <span className="font-display italic">Bitwage</span>, and <span className="font-display italic">Blocksee</span>. Our mission is simple: build tools that empower people and systems that endure.
            </p>
            <p>
              Alongside technology, writing has always been central to my work. My novels blend philosophical inquiry, psychological realism, mythology, and speculative fiction, often exploring the tension between power and truth, ego and transcendence, collapse and renewal. Whether through software or storytelling, I&apos;m interested in the same underlying question: how human beings create meaning, systems, and futures.
            </p>
            <p>
              My background spans startups, creative direction, branding, software engineering, music, festivals, and independent research. I believe the most important skill in the modern world is self-education — the ability to continuously learn, adapt, and evolve. Technology, at its best, should deepen human potential rather than diminish it. This portfolio is a collection of the worlds I&apos;m building — companies, software, ideas, stories, and experiments — all connected by a desire to explore what comes next.
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
              <motion.div
                className="grid md:grid-cols-[180px_1fr] gap-6 relative pl-8 md:pl-0"
                variants={timelineItem}
              >
                <motion.div
                  className="absolute left-0 md:left-[180px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg -translate-x-1/2"
                  variants={timelineDot}
                />
                <div className="text-sm text-muted">Jan 2024 — Present</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-text font-medium mb-1">Technology Partner &amp; Advisor</h3>
                    <p className="text-base text-muted font-display italic">Baird Augustine · San Francisco Bay Area · Part-time, Remote</p>
                  </div>
                  <div className="space-y-3 text-base text-muted leading-[1.7]">
                    <p>
                      Partnered with a Silicon Valley-based neo-investment bank to advise on technology-related initiatives across deal flow, diligence, and product strategy.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-[180px_1fr] gap-6 relative pl-8 md:pl-0"
                variants={timelineItem}
              >
                <motion.div
                  className="absolute left-0 md:left-[180px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg -translate-x-1/2"
                  variants={timelineDot}
                />
                <div className="text-sm text-muted">Aug 2023 — Present</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-text font-medium mb-1">Chief Deals Officer</h3>
                    <p className="text-base text-muted font-display italic">Deelz · San Francisco Bay Area · Part-time, Remote</p>
                  </div>
                  <div className="space-y-3 text-base text-muted leading-[1.7]">
                    <p>
                      Leading a project incubated by AW3 Technology to develop an application that helps users find deals on used cars efficiently.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-[180px_1fr] gap-6 relative pl-8 md:pl-0"
                variants={timelineItem}
              >
                <motion.div
                  className="absolute left-0 md:left-[180px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg -translate-x-1/2"
                  variants={timelineDot}
                />
                <div className="text-sm text-muted">Mar 2020 — Present</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-text font-medium mb-1">Galactic Ambassador</h3>
                    <p className="text-base text-muted font-display italic">AW3 Technology · San Francisco Bay Area · Full-time</p>
                  </div>
                  <div className="space-y-3 text-base text-muted leading-[1.7]">
                    <p>
                      Founder of an award-winning venture studio using web3, AI, and distributed computing to tackle global challenges. Helped many companies build products from scratch, generate revenue, and raise millions of dollars. Inventor of Proof of Love blockchain consensus (patent pending).
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-[180px_1fr] gap-6 relative pl-8 md:pl-0"
                variants={timelineItem}
              >
                <motion.div
                  className="absolute left-0 md:left-[180px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg -translate-x-1/2"
                  variants={timelineDot}
                />
                <div className="text-sm text-muted">Jun 2022 — Mar 2023</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-text font-medium mb-1">Venture Fellow</h3>
                    <p className="text-base text-muted font-display italic">Newchip Accelerator · San Francisco Bay Area · Part-time</p>
                  </div>
                  <div className="space-y-3 text-base text-muted leading-[1.7]">
                    <p>
                      Participated in an accelerator program focused on venture funding and startup scaling.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-[180px_1fr] gap-6 relative pl-8 md:pl-0"
                variants={timelineItem}
              >
                <motion.div
                  className="absolute left-0 md:left-[180px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg -translate-x-1/2"
                  variants={timelineDot}
                />
                <div className="text-sm text-muted">Aug 2021 — Dec 2021</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-text font-medium mb-1">Cohort Participant</h3>
                    <p className="text-base text-muted font-display italic">VC Lab · Part-time</p>
                  </div>
                  <div className="space-y-3 text-base text-muted leading-[1.7]">
                    <p>
                      Completed a 5-month program on the fundamentals of starting and operating a venture capital fund.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-[180px_1fr] gap-6 relative pl-8 md:pl-0"
                variants={timelineItem}
              >
                <motion.div
                  className="absolute left-0 md:left-[180px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg -translate-x-1/2"
                  variants={timelineDot}
                />
                <div className="text-sm text-muted">Aug 2018 — Apr 2020</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-text font-medium mb-1">Co-Founder</h3>
                    <p className="text-base text-muted font-display italic">Learna Inc. · Greater Los Angeles Area</p>
                  </div>
                  <div className="space-y-3 text-base text-muted leading-[1.7]">
                    <p>
                      Co-founded a SaaS platform for building and administering online courses, enabling educational organizations to scale online learning experiences.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-[180px_1fr] gap-6 relative pl-8 md:pl-0"
                variants={timelineItem}
              >
                <motion.div
                  className="absolute left-0 md:left-[180px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg -translate-x-1/2"
                  variants={timelineDot}
                />
                <div className="text-sm text-muted">Jan 2017 — Jun 2018</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-text font-medium mb-1">Co-Founder</h3>
                    <p className="text-base text-muted font-display italic">We Stand Up</p>
                  </div>
                  <div className="space-y-3 text-base text-muted leading-[1.7]">
                    <p>
                      Established a 501(c)(4) nonprofit aimed at generating social and political awareness among millennials through web-based and social media content.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-[180px_1fr] gap-6 relative pl-8 md:pl-0"
                variants={timelineItem}
              >
                <motion.div
                  className="absolute left-0 md:left-[180px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg -translate-x-1/2"
                  variants={timelineDot}
                />
                <div className="text-sm text-muted">Jul 2016 — Dec 2016</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-text font-medium mb-1">Software Consultant</h3>
                    <p className="text-base text-muted font-display italic">Kunai · Oakland, CA</p>
                  </div>
                  <div className="space-y-3 text-base text-muted leading-[1.7]">
                    <p>
                      Worked on financial technology projects, including a significant engagement for American Express.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-[180px_1fr] gap-6 relative pl-8 md:pl-0"
                variants={timelineItem}
              >
                <motion.div
                  className="absolute left-0 md:left-[180px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg -translate-x-1/2"
                  variants={timelineDot}
                />
                <div className="text-sm text-muted">Oct 2015 — Apr 2016</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-text font-medium mb-1">Software Engineer</h3>
                    <p className="text-base text-muted font-display italic">Gap (through Insight Global) · San Francisco, CA</p>
                  </div>
                  <div className="space-y-3 text-base text-muted leading-[1.7]">
                    <p>
                      Contributed to Gap&apos;s in-house Agile team on point-of-sale systems, implementing and testing web and mobile POS solutions.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-[180px_1fr] gap-6 relative pl-8 md:pl-0"
                variants={timelineItem}
              >
                <motion.div
                  className="absolute left-0 md:left-[180px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg -translate-x-1/2"
                  variants={timelineDot}
                />
                <div className="text-sm text-muted">May 2014 — Oct 2015</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-text font-medium mb-1">Business Intelligence Consultant / Software Engineer</h3>
                    <p className="text-base text-muted font-display italic">Saama Technologies, Inc. · San Jose, CA</p>
                  </div>
                  <div className="space-y-3 text-base text-muted leading-[1.7]">
                    <p>
                      Managed business intelligence and software engineering projects for clients including Cisco, Unilever, and Genentech.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="grid md:grid-cols-[180px_1fr] gap-6 relative pl-8 md:pl-0"
                variants={timelineItem}
              >
                <motion.div
                  className="absolute left-0 md:left-[180px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent border-2 border-bg -translate-x-1/2"
                  variants={timelineDot}
                />
                <div className="text-sm text-muted">Dec 2013 — May 2014</div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl text-text font-medium mb-1">Business Intelligence Training</h3>
                    <p className="text-base text-muted font-display italic">Saama Technologies, Inc. · Pune Area, India</p>
                  </div>
                  <div className="space-y-3 text-base text-muted leading-[1.7]">
                    <p>
                      Completed six months of intensive training in business intelligence.
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
              <GradientButton
                as="span"
                key={skill}
                className="inline-flex items-center px-5 py-3 text-xs md:text-sm text-muted hover:text-text"
              >
                <span className="relative z-10">{skill}</span>
              </GradientButton>
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
              <h3 className="text-lg text-text font-medium mb-1">Bachelor of Arts in Computer Science</h3>
              <p className="text-base text-muted font-display italic mb-2">University of California, Santa Barbara</p>
              <p className="text-sm text-muted mb-3">2009 — 2013</p>
              <p className="text-base text-muted leading-[1.7]">
                B.A. in Computer Science with an emphasis in Computational Economics.
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
              <ArrowDiagonal
                width={16}
                height={16}
                className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all"
              />
            </Link>
            <Link 
              href="#" 
              className="group flex items-center justify-between py-3 border-b border-stroke hover:border-text/30 transition-colors"
            >
              <span className="text-base text-muted group-hover:text-text transition-colors">
                Design work featured on Behance
              </span>
              <ArrowDiagonal
                width={16}
                height={16}
                className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all"
              />
            </Link>
            <Link 
              href="#" 
              className="group flex items-center justify-between py-3 border-b border-stroke hover:border-text/30 transition-colors"
            >
              <span className="text-base text-muted group-hover:text-text transition-colors">
                Speaker at Design Matters Conference
              </span>
              <ArrowDiagonal
                width={16}
                height={16}
                className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all"
              />
            </Link>
            <Link 
              href="#" 
              className="group flex items-center justify-between py-3 border-b border-stroke hover:border-text/30 transition-colors"
            >
              <span className="text-base text-muted group-hover:text-text transition-colors">
                Article published on Smashing Magazine
              </span>
              <ArrowDiagonal
                width={16}
                height={16}
                className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all"
              />
            </Link>
            <Link 
              href="#" 
              className="group flex items-center justify-between py-3 border-b border-stroke hover:border-text/30 transition-colors"
            >
              <span className="text-base text-muted group-hover:text-text transition-colors">
                10x featured on Dribbble
              </span>
              <ArrowDiagonal
                width={16}
                height={16}
                className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all"
              />
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
                  className="text-hero md:text-hero-md lg:text-hero-lg font-display italic text-text leading-none"
                >
                  LET&apos;S WORK TOGETHER
                  <span className="text-muted mx-6 md:mx-10">•</span>
                </span>
              ))}
            </div>
          </div>

          {/* Center content */}
          <AnimatedSection className="text-center mb-16 md:mb-20">
            <p className="text-base md:text-lg text-muted mb-8 max-w-md mx-auto">
              Have a project in mind? I&apos;m always open to new ideas and collaborations.
            </p>

            <GradientButton
              as={motion.a}
              whileTap={{ scale: 0.97 }}
              href="mailto:will.schulz@aw3.tech"
              className="inline-flex items-center gap-3 px-8 py-4"
            >
              <span className="text-lg text-text relative z-10">will.schulz@aw3.tech</span>
              <ArrowDiagonal
                width={18}
                height={18}
                className="text-muted group-hover:text-text group-hover:translate-x-1 group-hover:-translate-y-1 transition-all relative z-10"
              />
            </GradientButton>
          </AnimatedSection>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke">
            <SocialLinks />

            {/* Status */}
            <div className="flex items-center gap-3">
              <StatusDot />
              <span className="text-sm text-muted">Available for projects</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
