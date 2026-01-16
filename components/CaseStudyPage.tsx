"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import type { CaseStudyBlock, CaseStudyLayout, Project } from "@/lib/projects";
import { projects } from "@/lib/projects";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import ImageWithSkeleton from "./ImageWithSkeleton";
import VinylLogo from "./VinylLogo";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeProvider";
import { useCursor } from "./CursorContext";
import Navbar from "./Navbar";

export default function CaseStudyPage({ project }: { project: Project }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();
  const { setCursorType, setCursorText } = useCursor();

  // Parallax for hero image
  const heroImageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroImageRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "10%"]);

  useEffect(() => {
    // Handle scroll for navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Reset cursor state on page load to avoid stale hover text.
    setCursorType("default");
    setCursorText("");
  }, [setCursorType, setCursorText]);

  const metrics = useMemo(() => project.metrics, [project.metrics]);
  const caseStudyBlocks = project.caseStudy?.blocks ?? [];
  const caseStudyLayout = project.caseStudy?.layout ?? [];

  type RenderBlock = CaseStudyBlock | { type: "imageGroup"; blocks: CaseStudyBlock[] };

  const groupCaseStudyBlocks = (blocks: CaseStudyBlock[]): RenderBlock[] => {
    const grouped: RenderBlock[] = [];
    let buffer: CaseStudyBlock[] = [];

    const flushBuffer = () => {
      if (buffer.length === 1) {
        grouped.push(buffer[0]);
      } else if (buffer.length > 1) {
        grouped.push({ type: "imageGroup", blocks: [...buffer] });
      }
      buffer = [];
    };

    blocks.forEach((block) => {
      if (block.type === "image") {
        buffer.push(block);
      } else {
        flushBuffer();
        grouped.push(block);
      }
    });

    flushBuffer();
    return grouped;
  };

  const groupedCaseStudyBlocks = useMemo(
    () => groupCaseStudyBlocks(caseStudyBlocks),
    [caseStudyBlocks]
  );

  const emphasisKeywords = [
    "REZI.AI",
    "AI music",
    "AI",
    "Calm",
    "Headspace",
    "Endel",
    "RemoteNest",
    "Figma"
  ];

  const escapeRegExp = (value: string) =>
    value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const renderEmphasis = (text: string) => {
    const pattern = new RegExp(
      `(${emphasisKeywords.map(escapeRegExp).join("|")})`,
      "g"
    );
    const parts = text.split(pattern).filter(Boolean);

    return parts.map((part, partIndex) =>
      emphasisKeywords.includes(part) ? (
        <span key={`em-${partIndex}`} className="font-display italic">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const renderQuotedText = (text: string) => {
    const parts: React.ReactNode[] = [];
    const regex = /"([^"]+)"/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    let keyIndex = 0;

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(...renderEmphasis(text.slice(lastIndex, match.index)));
      }
      parts.push(
        <span key={`quote-${keyIndex++}`} className="font-display italic">
          {renderEmphasis(`"${match[1]}"`)}
        </span>
      );
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(...renderEmphasis(text.slice(lastIndex)));
    }

    return parts;
  };

  const renderHeadingText = (text: string, applyLastWord = true) => {
    if (!applyLastWord) {
      return renderQuotedText(text);
    }

    const words = text.trim().split(" ");
    if (words.length < 2) {
      return renderQuotedText(text);
    }

    const lastWord = words.pop() ?? "";
    const rest = words.join(" ");

    return (
      <>
        {renderQuotedText(rest)}{" "}
        <span className="font-display italic">{renderQuotedText(lastWord)}</span>
      </>
    );
  };
  const renderBodyText = (text: string) => text;

  const renderImageBlock = (
    block: Extract<CaseStudyBlock, { type: "image" }>,
    index: number,
    aspectOverride?: "video" | "4/3" | "3/2" | "square"
  ) => {
    const aspectKey = aspectOverride ?? block.aspect;
    const aspectClass =
      aspectKey === "4/3"
        ? "aspect-[4/3]"
        : aspectKey === "3/2"
          ? "aspect-[3/2]"
          : aspectKey === "square"
            ? "aspect-square"
            : "aspect-video";

    return (
      <div key={`block-${index}`} className="h-full">
        <div
          className={`w-full h-full ${aspectClass} bg-surface rounded-2xl border border-stroke overflow-hidden relative group`}
        >
          {block.src ? (
            <ImageWithSkeleton
              src={block.src}
              alt={block.alt ?? block.label}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="flex items-center justify-center px-6 h-full">
              <span className="text-muted/50 text-sm md:text-base text-center font-display italic">
                {block.label}
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderHeadingBlock = (heading?: string) => {
    if (!heading) {
      return null;
    }

    return (
      <h2 className="text-3xl md:text-[2.75rem] lg:text-5xl text-text leading-[1.08]">
        {renderHeadingText(heading)}
      </h2>
    );
  };

  const renderCaseStudyBlock = (block: RenderBlock, index: number) => {
    switch (block.type) {
      case "heading": {
        const HeadingTag = block.level === 3 ? "h3" : "h2";
        const headingClass =
          block.level === 3
            ? "text-2xl md:text-[2rem] text-text"
            : "text-3xl md:text-[2.75rem] text-text";
        const headingParts = block.text.split("—");

        return (
          <div key={`block-${index}`} className="space-y-4">
            {block.eyebrow && (
              <span className="inline-flex items-center gap-2 text-[11px] text-muted/80 uppercase tracking-[0.32em]">
                <span className="w-8 h-px bg-stroke" />
                {block.eyebrow}
              </span>
            )}
            <HeadingTag className={`${headingClass} leading-[1.08]`}>
              {headingParts.length > 1 ? (
                <>
                  {renderHeadingText(headingParts[0].trim())}{" "}
                  <span className="font-display italic">
                    {renderHeadingText(
                      headingParts.slice(1).join("—").trim(),
                      false
                    )}
                  </span>
                </>
              ) : (
                renderHeadingText(block.text)
              )}
            </HeadingTag>
          </div>
        );
      }
      case "paragraph":
        return (
          <p
            key={`block-${index}`}
            className="text-base md:text-[1.05rem] text-muted leading-[1.8] max-w-3xl"
          >
            {renderBodyText(block.text)}
          </p>
        );
      case "list":
        return (
          <ul
            key={`block-${index}`}
            className="space-y-3 max-w-3xl"
          >
            {block.items.map((item, itemIndex) => (
              <li key={`block-${index}-item-${itemIndex}`} className="flex items-start gap-3 text-base md:text-[1.05rem] text-muted leading-[1.75]">
                <span className="text-accent text-sm mt-0.5 flex-shrink-0">→</span>
                <span>{renderBodyText(item)}</span>
              </li>
            ))}
          </ul>
        );
      case "callout": {
        const isMetric = block.tone === "metric";
        
        if (isMetric) {
           return (
            <motion.div
              key={`block-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full py-12 md:py-14 border-y border-stroke my-12"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                {block.label && (
                  <span className="inline-flex items-center gap-2 text-xs text-muted uppercase tracking-[0.3em]">
                    <span className="w-6 h-px bg-stroke" />
                    {block.label}
                    <span className="w-6 h-px bg-stroke" />
                  </span>
                )}

                <h3 className="text-3xl md:text-[2.75rem] lg:text-5xl text-text leading-[1.08] max-w-2xl">
                  <span className="font-display italic">{block.text}</span>
                </h3>
              </div>
            </motion.div>
           );
        }

        return (
          <motion.div
            key={`block-${index}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full pl-6 md:pl-8 border-l-2 border-accent my-12 max-w-4xl"
          >
            <p className="text-xl md:text-[1.6rem] text-text/90 leading-[1.6] italic">
              "{renderBodyText(block.text)}"
            </p>
          </motion.div>
        );
      }
      case "image":
        return renderImageBlock(block, index);
      case "imageGroup": {
        const columnClass =
          block.blocks.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2";
        const imageBlocks = block.blocks.map(b => b as Extract<CaseStudyBlock, { type: "image" }>);
        const aspectOverride =
          imageBlocks.every((item) => item.aspect === imageBlocks[0].aspect)
            ? imageBlocks[0].aspect
            : "video";

        return (
          <div
            key={`block-${index}`}
            className={`grid grid-cols-1 ${columnClass} gap-10 md:gap-12`}
          >
            {imageBlocks.map((imageBlock, imageIndex) =>
              renderImageBlock(
                imageBlock,
                index * 100 + imageIndex,
                aspectOverride
              )
            )}
          </div>
        );
      }
      default:
        return null;
    }
  };

  const renderLayoutSection = (layout: CaseStudyLayout, index: number) => {
    switch (layout.type) {
      case "split": {
        const isFlipped = layout.flip;
        return (
          <section
            key={`layout-${index}`}
            className="grid gap-12 md:gap-16 md:grid-cols-2 items-start"
          >
            <div className={isFlipped ? "md:order-2" : ""}>
              <div className="flex flex-col gap-6 md:gap-8">
                {renderHeadingBlock(layout.heading)}
                {layout.content.map((block, blockIndex) =>
                  renderCaseStudyBlock(block, index * 1000 + blockIndex)
                )}
              </div>
            </div>
            <div className={isFlipped ? "md:order-1" : ""}>
              <div className="flex flex-col gap-6 md:gap-8">
                {layout.media?.map((block, blockIndex) =>
                  renderCaseStudyBlock(block, index * 1000 + blockIndex + 100)
                )}
              </div>
            </div>
          </section>
        );
      }
      case "grid":
        return (
          <section key={`layout-${index}`} className="flex flex-col gap-10 md:gap-14">
            {renderHeadingBlock(layout.heading)}
            {/* Bento Grid - Asymmetric Layout */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-5 md:gap-8 auto-rows-[240px]">
              {layout.items.map((block, itemIndex) => {
                // Define bento grid patterns
                const bentoPatterns = [
                  "col-span-2 md:col-span-4 md:row-span-2", // Large featured
                  "col-span-1 md:col-span-2 md:row-span-1", // Medium square
                  "col-span-1 md:col-span-2 md:row-span-2", // Tall
                ];
                const pattern = bentoPatterns[itemIndex % bentoPatterns.length];
                
                return (
                  <div key={`grid-${index}-${itemIndex}`} className={pattern}>
                    {renderCaseStudyBlock(block, index * 1000 + itemIndex)}
                  </div>
                );
              })}
            </div>
          </section>
        );
      case "timeline":
        return (
          <section key={`layout-${index}`} className="flex flex-col gap-8 md:gap-12">
            {renderHeadingBlock(layout.heading)}
            <div className="grid gap-10 md:grid-cols-3">
              {layout.steps.map((step, stepIndex) => (
                <motion.div
                  key={`timeline-${index}-${stepIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: stepIndex * 0.1 }}
                  className="relative pl-6 border-l-2 border-stroke"
                >
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-2 h-2 rounded-full bg-accent" />
                  
                  <p className="text-[11px] text-muted/80 uppercase tracking-[0.3em] mb-4">
                    Step {stepIndex + 1}
                  </p>
                  
                  <h3 className="text-lg md:text-[1.35rem] text-text mb-2">
                    <span className="font-display italic">{step.title}</span>
                  </h3>
                  <p className="text-sm md:text-[1.02rem] text-muted leading-[1.7]">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </section>
        );
      case "stack":
        return (
          <section key={`layout-${index}`} className="flex flex-col gap-8 md:gap-12">
            {renderHeadingBlock(layout.heading)}
            <div className="flex flex-col gap-6 md:gap-8">
              {layout.blocks.map((block, blockIndex) =>
                renderCaseStudyBlock(block, index * 1000 + blockIndex)
              )}
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  // Get next and previous projects
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 
    ? projects[currentIndex + 1] 
    : projects[0]; // Loop back to first project

  return (
    <main className="bg-bg min-h-screen relative z-10">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-36 pb-20 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <div className="max-w-4xl">
            {/* Category Badge */}
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="inline-flex items-center gap-2 text-[11px] text-muted/80 uppercase tracking-[0.32em] mb-7"
            >
              <span className="w-8 h-px bg-stroke" />
              {project.category}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-[3.25rem] lg:text-6xl text-text leading-[1.03] mb-6"
            >
              {project.title.split(' ')[0]}{' '}
              <span className="font-display italic">{project.title.split(' ').slice(1).join(' ')}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-lg md:text-[1.25rem] text-muted max-w-2xl leading-[1.75] mb-10"
            >
              {project.summary}
            </motion.p>
        </div>
        
            {/* Meta Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="pt-8 border-t border-stroke"
            >
              <div className="flex flex-wrap items-start gap-7 md:gap-12">
                {project.meta && project.meta.length > 0 ? (
                  project.meta.map((item, index) => (
                    <div key={item.label}>
                      <span className="text-[10px] text-muted uppercase tracking-[0.24em] block mb-2">
                        {item.label}
                      </span>
                      {Array.isArray(item.value) ? (
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {item.value.map((value) => (
                            <span
                              key={value}
                              className="px-2.5 py-1 text-[11px] text-muted bg-surface border border-stroke rounded-full"
                            >
                              {value}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-sm md:text-[0.98rem] text-text">{item.value}</span>
                      )}
                    </div>
                  ))
                ) : (
                  <>
                    <div className="pr-4 border-r border-stroke md:border-r-0 md:pr-0">
                      <span className="text-[10px] text-muted uppercase tracking-[0.24em] block mb-2">Role</span>
                      <span className="text-sm md:text-[0.98rem] text-text">{project.role}</span>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-stroke" />
                    <div className="pr-4 border-r border-stroke md:border-r-0 md:pr-0">
                      <span className="text-[10px] text-muted uppercase tracking-[0.24em] block mb-2">Tools</span>
                      <span className="text-sm md:text-[0.98rem] text-text">Figma</span>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-stroke" />
                    <div className="pr-4 border-r border-stroke md:border-r-0 md:pr-0">
                      <span className="text-[10px] text-muted uppercase tracking-[0.24em] block mb-2">Duration</span>
                      <span className="text-sm md:text-[0.98rem] text-text">6-8 weeks</span>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-stroke" />
                    <div>
                      <span className="text-[10px] text-muted uppercase tracking-[0.24em] block mb-2">Scope</span>
                      <div className="mt-1 text-sm md:text-[0.98rem] text-text">
                        {project.tags.map((tag, index) => (
                          <span key={tag}>
                            {index > 0 ? " / " : ""}{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
      </section>

      {/* Main Image Mockup */}
      <section ref={heroImageRef} className="px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto mb-24 md:mb-32">
         <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden bg-surface border border-stroke relative"
          >
            <div className="absolute inset-0 w-full h-full">
            {project.caseStudyImage || project.image ? (
              <ImageWithSkeleton
                src={project.caseStudyImage ?? project.image ?? ""}
                alt={project.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                priority
                className="object-cover"
              />
            ) : null}
            </div>
         </motion.div>
      </section>

      {/* Content Grid */}
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          {/* Main Content */}
          <div className="flex flex-col gap-20 md:gap-28">
            {caseStudyLayout.length > 0 ? (
              <div className="flex flex-col gap-14 md:gap-20">
                {caseStudyLayout.map((layout, index) =>
                  renderLayoutSection(layout, index)
                )}
              </div>
            ) : groupedCaseStudyBlocks.length > 0 ? (
              <div className="flex flex-col gap-8 md:gap-10">
                {groupedCaseStudyBlocks.map((block, index) =>
                  renderCaseStudyBlock(block, index)
                )}
              </div>
            ) : (
            <>
            {/* Challenge Section (Combined Overview + Problem) */}
            <motion.section 
              id="challenge" 
              className="scroll-mt-32"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
               <span className="inline-flex items-center gap-2 text-[11px] text-muted/80 uppercase tracking-[0.32em] mb-7">
                 <span className="w-6 h-px bg-stroke" />
                 Challenge
               </span>
               <div className="grid md:grid-cols-2 gap-10 md:gap-14">
                  <div>
                      <h2 className="text-2xl md:text-[2rem] text-text mb-5">
                        The <span className="font-display italic">Challenge</span>
                      </h2>
                      <p className="text-base md:text-[1.05rem] text-muted leading-[1.8]">{project.problem}</p>
                  </div>
                  <div className="bg-surface p-7 md:p-9 rounded-2xl border border-stroke">
                      <h3 className="text-[11px] text-muted/80 mb-6 uppercase tracking-[0.3em]">Key Outcomes</h3>
                      <ul className="space-y-3.5">
                        {metrics.map((metric, i) => {
                          const rewritten = (() => {
                            if (metric === "2-day delivery") return "Delivered within 2 days";
                            if (metric === "3 iterations") return "Iterated 3 times with refinements";
                            if (metric === "Client approved") return "Approved without extra rework";
                            return metric;
                          })();
                          return (
                            <li key={i} className="flex items-start gap-3 text-sm md:text-[1rem] text-text leading-[1.6]">
                                <span className="text-accent text-sm mt-0.5">→</span>
                                {rewritten}
                            </li>
                          );
                        })}
                      </ul>
                  </div>
               </div>
            </motion.section>


            {/* Process */}
            <motion.section 
              id="process" 
              className="scroll-mt-32"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <span className="inline-flex items-center gap-2 text-[11px] text-muted/80 uppercase tracking-[0.32em] mb-7">
                  <span className="w-6 h-px bg-stroke" />
                  Process
                </span>
                <h2 className="text-2xl md:text-[2rem] text-text mb-10">
                  From ambiguity to <span className="font-display italic">clarity.</span>
                </h2>
                
                <p className="text-base md:text-[1.05rem] text-muted max-w-3xl leading-[1.8] mb-10">
                    {project.process}
                </p>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                   <div className="aspect-[4/3] bg-surface rounded-2xl border border-stroke overflow-hidden group relative">
                       <ImageWithSkeleton
                         src="/case-study/3d-abstract-1.jpg"
                         alt="User Flow Diagram"
                         fill
                         sizes="(max-width: 768px) 100vw, 50vw"
                         className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                       />
                   </div>
                   <div className="aspect-[4/3] bg-surface rounded-2xl border border-stroke overflow-hidden group relative">
                       <ImageWithSkeleton
                         src="/case-study/3d-shapes-1.jpg"
                         alt="Low-Fidelity Wireframes"
                         fill
                         sizes="(max-width: 768px) 100vw, 50vw"
                         className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                       />
                   </div>
                </div>
            </motion.section>

            {/* Solution */}
            <motion.section 
              id="solution" 
              className="scroll-mt-32"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <span className="inline-flex items-center gap-2 text-[11px] text-muted/80 uppercase tracking-[0.32em] mb-7">
                  <span className="w-6 h-px bg-stroke" />
                  Solution
                </span>
                <h2 className="text-2xl md:text-[2rem] text-text mb-10">
                  Precision at <span className="font-display italic">scale.</span>
                </h2>
                <p className="text-base md:text-[1.05rem] text-muted max-w-3xl leading-[1.8] mb-10">
                    {project.solution}
                </p>
                <div className="w-full aspect-video bg-surface rounded-3xl border border-stroke overflow-hidden group mb-8 relative">
                    <ImageWithSkeleton
                      src="/case-study/3d-render-1.jpg"
                      alt="High-Fidelity Design"
                      fill
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                </div>
                 <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                   <div className="aspect-[4/3] bg-surface rounded-2xl border border-stroke overflow-hidden group relative">
                       <ImageWithSkeleton
                         src="/case-study/3d-design-1.jpg"
                         alt="Component Details"
                         fill
                         sizes="(max-width: 768px) 100vw, 50vw"
                         className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                       />
                   </div>
                   <div className="aspect-[4/3] bg-surface rounded-2xl border border-stroke overflow-hidden group relative">
                       <ImageWithSkeleton
                         src="/case-study/3d-geometry-1.jpg"
                         alt="Responsive Design"
                         fill
                         sizes="(max-width: 768px) 100vw, 50vw"
                         className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                       />
                   </div>
                </div>
            </motion.section>

            {/* Outcome */}
            <motion.section 
              id="outcome" 
              className="scroll-mt-32"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            >
                <span className="inline-flex items-center gap-2 text-[11px] text-muted/80 uppercase tracking-[0.32em] mb-7 max-w-3xl">
                  <span className="w-6 h-px bg-stroke" />
                  Results
                </span>
                <h2 className="text-2xl md:text-[2rem] text-text mb-6 max-w-3xl">
                  Measurable <span className="font-display italic">results.</span>
                </h2>
                <p className="text-base md:text-[1.05rem] text-muted leading-[1.8] max-w-3xl">
                    {project.outcome}
                </p>

               {/* Metrics from project data */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                 {metrics.map((metric, i) => (
                   <div key={i} className="p-6 md:p-8 bg-surface rounded-2xl border border-stroke text-center hover:border-text/30 transition-all duration-300">
                     <span className="text-xl md:text-[1.6rem] lg:text-2xl font-display italic text-text">{metric}</span>
                   </div>
                 ))}
               </div>
            </motion.section>

            </>
            )}


            {/* Next Project Navigation */}
            {nextProject && nextProject.slug !== project.slug && (
              <motion.section 
                className="mt-24 border-t border-stroke"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link
                  href={`/work/${nextProject.slug}`}
                  onMouseEnter={() => {
                    setCursorType("project");
                    setCursorText("View");
                  }}
                  onMouseLeave={() => {
                    setCursorType("default");
                    setCursorText("");
                  }}
                  className="group relative block py-12 md:py-16 border-b border-stroke hover:border-text/30 transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
                >
                  <div className="relative flex items-center justify-between gap-6">
                    {/* Left - Project info */}
                    <div className="flex-1">
                      <span className="inline-flex items-center gap-2 text-[11px] text-muted/80 uppercase tracking-[0.32em] mb-5">
                        <span className="w-8 h-px bg-stroke group-hover:bg-text/30 transition-colors duration-300" />
                        Next Project
                      </span>
                      
                      <h3 className="text-3xl md:text-4xl lg:text-5xl text-text mb-3 group-hover:text-text/70 transition-colors duration-300">
                        {(() => {
                          const words = nextProject.title.split(' ');
                          if (words.length <= 2) {
                            // If 2 or fewer words, make last word italic
                            const lastWord = words.pop();
                            const firstWords = words.join(' ');
                            return (
                              <>
                                {firstWords && firstWords + ' '}
                                <span className="font-display italic">{lastWord}</span>
                              </>
                            );
                          } else {
                            // If more than 2 words, make last 2 words italic
                            const lastTwoWords = words.slice(-2).join(' ');
                            const firstWords = words.slice(0, -2).join(' ');
                            return (
                              <>
                                {firstWords}{' '}
                                <span className="font-display italic">{lastTwoWords}</span>
                              </>
                            );
                          }
                        })()}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm text-muted">
                        <span className="px-3 py-1.5 rounded-full border border-stroke text-xs uppercase tracking-wider text-muted">
                          {nextProject.category}
                        </span>
                        <span className="text-muted/70">{nextProject.year}</span>
                        <span className="hidden md:block text-muted/40">•</span>
                        <span className="hidden md:block text-muted/70">{nextProject.role}</span>
                      </div>
                    </div>
                    
                    {/* Right - Arrow circle */}
                    <div className="relative group/arrow flex items-center justify-center w-16 h-16 md:w-20 md:h-20 shrink-0">
                      {/* Gradient border wrapper - same as logo */}
                      <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animated-gradient-border">
                        <div className="flex w-full h-full rounded-full bg-bg" />
                      </div>
                      
                      {/* Static border (visible by default) */}
                      <div className="absolute inset-0 rounded-full border-2 border-stroke group-hover:border-transparent transition-all duration-500" />
                      
                      <svg 
                        width="28" 
                        height="28" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="relative z-10 text-text group-hover:translate-x-1 transition-transform duration-300"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.section>
            )}

          </div>
      </div>

      {/* Footer */}
      <footer className="bg-bg pb-8 md:pb-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="pt-8 border-t border-stroke">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
                href="https://www.linkedin.com/in/yourprofile"
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
        </div>
      </footer>
    </main>
  );
}
