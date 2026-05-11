"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
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

const chapters = [
  {
    eyebrow: "Origins",
    title: <>Beginnings &amp; <span className="font-display italic">curiosity</span></>,
    paragraphs: [
      "I was born in Los Angeles to a father who worked as a manufacturing engineer and a mother who taught and performed as a professional jazz musician. We moved to Long Beach when I was three, and to the San Francisco Bay Area when I was eleven. School came easily — straight A's through middle and high school — and mathematics in particular took hold of me. By the end of high school I was taking college-level multivariable calculus, more curious about where math could go than what it was for.",
      "What I didn't have was a clear sense of what I wanted to do. The two worlds I'd grown up inside both seemed to be coming apart: manufacturing was steadily offshoring to China and elsewhere, and the music industry my mother lived in was being rearranged by Napster and the first wave of digital disruption. Without an obvious inheritance, I had to look inward and figure out what actually mattered to me.",
      "The answer arrived almost by accident, in an intro computer science course my first year of college. Something clicked — software felt like a medium where the only real constraints were imagination and rigor, a space where you could build things from nothing. I went on to study Computer Science with an emphasis in Computational Economics at UC Santa Barbara, graduating in 2013, drawn to the intersection of code, markets, and human behavior as the most honest frame for understanding the modern world.",
    ],
  },
  {
    eyebrow: "Early Career",
    title: <>Engineering across <span className="font-display italic">industries</span></>,
    paragraphs: [
      "I started my career in business intelligence and software engineering, working with companies like Cisco, Unilever, Genentech, Gap, and American Express. I learned how large systems actually run — how data moves, where it breaks, and how decisions cascade through organizations. It was a fast education in the gap between elegant architecture and operational reality.",
      "Those years taught me to respect constraints. The most important problems in enterprise software aren't algorithmic — they're about trust, ownership, and incentives. I left consulting with a clear conviction: I wanted to build things, not just optimize them.",
    ],
  },
  {
    eyebrow: "Founder",
    title: <>Building <span className="font-display italic">ventures</span> from zero</>,
    paragraphs: [
      "Through those early career years, I couldn't ignore what was happening outside the office. Economic inequality was widening, homelessness was spreading across the cities I lived and worked in, climate change was accelerating, and political polarization and populism were reshaping public life. The problems felt structural and connected, and watching them grow without a coherent response gnawed at me.",
      "So in 2017 I co-founded my first venture with a friend — We Stand Up, a nonprofit aimed at translating civic awareness into action for younger generations through web and social content. It was my first real step into formal entrepreneurship, and it convinced me that distribution and design matter as much as the underlying message.",
      "In 2018 I co-founded Learna Inc., a SaaS platform for building and administering online courses. We helped educational organizations scale digital learning before the rest of the world caught up to remote-first delivery. The experience deepened my belief that the most important skill in the modern world is self-education — the ability to continuously learn, adapt, and evolve.",
      "In 2020 I founded AW3 Technology, a venture studio at the intersection of Web3, AI, and distributed computing. AW3 became the home for everything I cared about: working with founders, designing systems, and building products that respect the people who use them. We've helped many companies launch from scratch, generate revenue, and raise millions of dollars.",
    ],
  },
  {
    eyebrow: "Research",
    title: <>Code, capital, and <span className="font-display italic">consensus</span></>,
    paragraphs: [
      "Some of my work at AW3 has been more experimental than commercial. I invented Proof of Love — a blockchain consensus mechanism (patent pending) — as part of a longer investigation into how trust, coordination, and incentives might be encoded in software in ways that don't reduce humans to extractive endpoints.",
      "I'm also developing SunScript, an AI-native programming language and development ecosystem designed for a world where humans and language models build software together. These projects are bets on a specific thesis: the next decade of computing will be defined by how well we align technical systems with human meaning, not just human throughput.",
    ],
  },
  {
    eyebrow: "Writing",
    title: <>Stories &amp; <span className="font-display italic">systems</span></>,
    paragraphs: [
      "Alongside technology, writing has always been central to my work. I'm writing a series of novels that blend philosophical inquiry, psychological realism, mythology, and speculative fiction — exploring the tension between power and truth, ego and transcendence, collapse and renewal.",
      "Whether through software or storytelling, I'm interested in the same underlying question: how human beings create meaning, systems, and futures. Engineers and novelists do versions of the same job — both impose structure on a chaotic world and ask the reader to trust it long enough to discover something true.",
    ],
  },
  {
    eyebrow: "Philosophy",
    title: <>Why this <span className="font-display italic">work</span></>,
    paragraphs: [
      "I believe technology, at its best, should deepen human potential rather than diminish it. That belief is the through-line behind every venture, line of code, and chapter I write. I'm drawn to building systems that empower creators, founders, and communities — rather than extract from them.",
      "At AW3, I work alongside an extraordinary team of engineers, founders, and creators who share that orientation, supported by a world-class network of advisors across finance, education, and technology — including leaders from Baird Augustine, Bitwage, and Blocksee. Our mission is simple: build tools that empower people and systems that endure.",
    ],
  },
  {
    eyebrow: "Today",
    title: <>What I&apos;m <span className="font-display italic">building now</span></>,
    paragraphs: [
      "I'm based in San Francisco, where I currently serve as Founder &amp; CEO of AW3 Technology, Technology Partner &amp; Advisor at Baird Augustine, and Chief Deals Officer at Deelz — an AW3-incubated venture helping people find honest deals on used cars.",
      "Outside of company-building, I'm developing projects across AI tooling, programming languages, decentralized consensus, publishing, and creative media. I'm also writing — long-form novels and shorter essays on civilization, spirituality, empire, memory, and the future of humanity.",
      "This portfolio is a collection of the worlds I'm building — companies, software, ideas, stories, and experiments — all connected by a desire to explore what comes next. If any of this resonates, I'd love to hear from you.",
    ],
  },
];

export default function BioPage() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  useMarqueeAnimation(marqueeRef);

  return (
    <main className="bg-bg min-h-screen relative z-10">
      <Navbar />

      {/* Hero */}
      <section className="pt-36 pb-8 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={fadeUp.hidden}
          animate={fadeUp.visible}
          transition={smoothTransition(0, 0.8)}
          className="text-center mb-8 md:mb-12"
        >
          <span className="eyebrow-label inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-stroke" />
            Biography
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-text leading-[1.03] mb-6">
            The long <span className="font-display italic">story</span>
          </h1>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            A fuller account of how I got here — the people, places, and ideas that shape the work I&apos;m doing now.
          </p>
        </motion.div>
      </section>

      {/* Portrait */}
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

      {/* Chapters */}
      <section className="pb-16 px-6 md:px-10 lg:px-16 max-w-[860px] mx-auto">
        <div className="space-y-20 md:space-y-24">
          {chapters.map((chapter, index) => (
            <motion.article
              key={chapter.eyebrow}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xs text-muted uppercase tracking-[0.2em]">
                  {String(index + 1).padStart(2, "0")} · {chapter.eyebrow}
                </span>
                <span className="flex-1 h-px bg-stroke/60" />
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-text leading-[1.1] mb-8">
                {chapter.title}
              </h2>
              <div className="space-y-5 text-base md:text-lg text-muted leading-[1.75]">
                {chapter.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Closing quote */}
      <section className="pb-24 pt-8 px-6 md:px-10 lg:px-16 max-w-[860px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center border-t border-stroke pt-16"
        >
          <p className="text-2xl md:text-3xl text-text leading-[1.4] font-display italic">
            &ldquo;Build tools that empower people, and systems that endure.&rdquo;
          </p>
          <p className="text-sm text-muted mt-6 tracking-[0.18em] uppercase">— Will Schulz</p>
        </motion.div>
      </section>

      {/* Contact footer */}
      <section
        id="contact"
        className="relative bg-bg pt-24 md:pt-32 pb-8 md:pb-12 overflow-hidden"
      >
        <FloatingObjectsContact />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
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

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke">
            <SocialLinks />

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
