"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import Timeline from "@/components/Timeline";
import { ArrowDiagonal } from "@/components/Icons";
import GradientButton from "@/components/ui/GradientButton";
import PageHero from "@/components/ui/PageHero";
import { workTimeline } from "@/lib/experience";

export default function AboutPage() {
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
  return (
    <main className="bg-bg min-h-screen relative z-10">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-8 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <PageHero
          eyebrow="Resume"
          title={<>William <span className="font-display italic">Schulz</span></>}
          subtitle={
            <>
              Software developer, designer, creative, and founder based in San Francisco, building{" "}
              <span className="font-display italic">thoughtful</span> digital experiences.
            </>
          }
        >
          <div className="mt-8 flex justify-center">
            <GradientButton
              as={motion.a}
              whileTap={{ scale: 0.97 }}
              href="/will-schulz-cv.png"
              download="Will Schulz CV.png"
              className="inline-flex items-center gap-3 px-8 py-4"
            >
              <span className="text-base text-text relative z-10">Download CV</span>
              <ArrowDiagonal
                width={18}
                height={18}
                className="text-muted group-hover:text-text group-hover:translate-x-1 group-hover:-translate-y-1 transition-all relative z-10"
              />
            </GradientButton>
          </div>
        </PageHero>
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

          <Timeline entries={workTimeline} />
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
              href="/work/aw3-technology#recognition"
              className="group flex items-center justify-between py-3 border-b border-stroke hover:border-text/30 transition-colors"
            >
              <span className="text-base text-muted group-hover:text-text transition-colors">
                Certificate of Recognition — Fiona Ma, California State Treasurer
              </span>
              <ArrowDiagonal
                width={16}
                height={16}
                className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all"
              />
            </Link>
            <Link
              href="/work/justiguide"
              className="group flex items-center justify-between py-3 border-b border-stroke hover:border-text/30 transition-colors"
            >
              <span className="text-base text-muted group-hover:text-text transition-colors">
                TIME&apos;s Best Inventions of 2025 — JustiGuide
              </span>
              <ArrowDiagonal
                width={16}
                height={16}
                className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all"
              />
            </Link>
            <Link
              href="/work/justiguide"
              className="group flex items-center justify-between py-3 border-b border-stroke hover:border-text/30 transition-colors"
            >
              <span className="text-base text-muted group-hover:text-text transition-colors">
                TechCrunch Startup Battlefield 200 — JustiGuide
              </span>
              <ArrowDiagonal
                width={16}
                height={16}
                className="text-muted group-hover:text-text group-hover:translate-x-1 transition-all"
              />
            </Link>
            <Link
              href="/work/baird-augustine#recognition"
              className="group flex items-center justify-between py-3 border-b border-stroke hover:border-text/30 transition-colors"
            >
              <span className="text-base text-muted group-hover:text-text transition-colors">
                Recognized by the State of California — Baird Augustine
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
      <ContactFooter />
    </main>
  );
}
