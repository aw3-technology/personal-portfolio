"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { projects } from "@/lib/projects";
import { useMarqueeAnimation } from "@/lib/hooks/useMarqueeAnimation";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";
import { ArrowDiagonal, Check, ChevronDown } from "@/components/Icons";
import AnimatedSection from "@/components/ui/AnimatedSection";
import BentoCard, { portfolioBentoConfigs } from "@/components/ui/BentoCard";
import GradientButton from "@/components/ui/GradientButton";
import SocialLinks from "@/components/ui/SocialLinks";
import StatusDot from "@/components/ui/StatusDot";
import { easing, fadeUp, fadeUpSm, smoothTransition } from "@/lib/animations";
import "./portfolio.css";

const FloatingObjectsContact = dynamic(() => import("@/components/FloatingObjectsContact"), {
  ssr: false,
});

const categories = ["All", "Landing Page", "B2B SaaS Product", "Fintech Platform", "Product-Led Growth"];

const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "a-z", label: "A-Z" },
  { value: "z-a", label: "Z-A" },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  useMarqueeAnimation(marqueeRef);

  // Close sort dropdown on outside click or escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) {
        return;
      }
      if (sortRef.current && !sortRef.current.contains(target)) {
        setIsSortOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(target)) {
        setIsCategoryOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSortOpen(false);
        setIsCategoryOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = selectedCategory === "All" 
      ? projects 
      : projects.filter(p => p.category === selectedCategory);

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return parseInt(b.year) - parseInt(a.year);
        case "oldest":
          return parseInt(a.year) - parseInt(b.year);
        case "a-z":
          return a.title.localeCompare(b.title);
        case "z-a":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedCategory, sortBy]);

  return (
    <main className="bg-bg min-h-screen relative z-10">
      {/* Back to Top Button */}
      <BackToTop />
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-36 pb-16 px-6 md:px-10 lg:px-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={fadeUp.hidden}
          animate={fadeUp.visible}
          transition={smoothTransition(0, 0.8)}
          className="text-center mb-12 md:mb-16"
        >
          <span className="eyebrow-label inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-stroke" />
            Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-text leading-[1.03] mb-6">
            All <span className="font-display italic">Work</span>
          </h1>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            A collection of selected projects spanning product design, web development, and design systems.
          </p>
        </motion.div>

        {/* Filters & Sort */}
        <motion.div
          initial={fadeUpSm.hidden}
          animate={fadeUpSm.visible}
          transition={smoothTransition(0.2, 0.8)}
          className="mb-12 md:mb-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Category Filters */}
            <div className="w-full md:w-auto">
              {/* Mobile: All button + Dropdown for other categories + Sort in one row */}
              <div className="flex md:hidden gap-2">
                {/* All button - always visible on mobile */}
                <button
                  onClick={() => setSelectedCategory("All")}
                  className={`group relative shrink-0 whitespace-nowrap px-5 py-3 text-xs rounded-full border-2 transition-all duration-500 overflow-visible ${
                    selectedCategory === "All"
                      ? "text-text border-text bg-transparent"
                      : "text-muted border-stroke bg-transparent hover:text-text hover:border-text/40"
                  }`}
                >
                  <span
                    className={`absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-opacity duration-500 ${
                      selectedCategory === "All" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{ margin: "-2px" }}
                  >
                    <span className="flex w-full h-full rounded-full bg-bg" />
                  </span>
                  <span className="relative z-10">All</span>
                </button>

                {/* Category dropdown - mobile only */}
                <div className="relative group" ref={categoryRef}>
                  <span
                    className={`absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-opacity duration-500 ${
                      selectedCategory !== "All" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{ margin: "-2px" }}
                  >
                    <span className="flex w-full h-full rounded-full bg-bg" />
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsCategoryOpen((prev) => !prev)}
                    aria-haspopup="listbox"
                    aria-expanded={isCategoryOpen}
                    className={`relative z-10 w-full inline-flex items-center justify-between gap-2 px-5 py-3 text-xs rounded-full border-2 transition-all duration-500 ${
                      selectedCategory !== "All"
                        ? "text-text border-transparent bg-transparent"
                        : "text-muted border-stroke bg-transparent hover:text-text hover:border-text/40"
                    }`}
                  >
                    <span className="whitespace-nowrap">
                      {selectedCategory !== "All" ? selectedCategory : "Select Category"}
                    </span>
                    <ChevronDown
                      width={12}
                      height={12}
                      className={`shrink-0 text-current transition-transform duration-300 ${isCategoryOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  
                  {isCategoryOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: easing.expo }}
                      className="absolute left-0 mt-3 w-max min-w-[220px] rounded-2xl border border-white/15 bg-[#0e0e12]/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden z-20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/2 to-transparent pointer-events-none" />
                      <ul role="listbox" aria-label="Category options" className="relative z-10 p-2">
                        {categories.filter(cat => cat !== "All").map((cat) => {
                          const isActive = cat === selectedCategory;
                          return (
                            <li key={cat}>
                              <button
                                type="button"
                                role="option"
                                aria-selected={isActive}
                                onClick={() => {
                                  setSelectedCategory(cat);
                                  setIsCategoryOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-sm transition-all ${
                                  isActive
                                    ? "bg-white/16 text-white"
                                    : "text-white/80 hover:text-white hover:bg-white/10"
                                }`}
                              >
                                <span className="whitespace-nowrap">{cat}</span>
                                {isActive && (
                                  <Check width={14} height={14} className="text-text/90 shrink-0" />
                                )}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}
                </div>

                {/* Sort Dropdown - Mobile only (in same row) */}
                <div className="relative group overflow-visible shrink-0 ml-auto" ref={sortRef}>
                  <span
                    className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500"
                    style={{ margin: "-2px" }}
                  >
                    <span className="flex w-full h-full rounded-full bg-bg" />
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsSortOpen((prev) => !prev)}
                    aria-haspopup="listbox"
                    aria-expanded={isSortOpen}
                    className="relative z-10 inline-flex items-center gap-2 px-4 py-3 text-left text-xs font-medium text-text bg-transparent border-2 border-stroke rounded-full shadow-none focus:outline-none focus:ring-2 focus:ring-text/60 transition-all hover:border-text/40 cursor-pointer"
                  >
                    <span className="whitespace-nowrap">
                      {sortOptions.find((option) => option.value === sortBy)?.label ?? "Sort"}
                    </span>
                    <span className="pointer-events-none shrink-0">
                      <ChevronDown
                        width={12}
                        height={12}
                        className={`text-text/70 transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>
                  {isSortOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: easing.expo }}
                      className="absolute right-0 mt-3 w-[220px] rounded-2xl border border-white/15 bg-[#0e0e12]/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden z-20"
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/2 to-transparent pointer-events-none" />
                      <ul role="listbox" aria-label="Sort options" className="relative z-10 p-2">
                        {sortOptions.map((option) => {
                          const isActive = option.value === sortBy;
                          return (
                            <li key={option.value}>
                              <button
                                type="button"
                                role="option"
                                aria-selected={isActive}
                                onClick={() => {
                                  setSortBy(option.value);
                                  setIsSortOpen(false);
                                }}
                                className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-sm transition-all ${
                                  isActive
                                    ? "bg-white/16 text-white"
                                    : "text-white/80 hover:text-white hover:bg-white/10"
                                }`}
                              >
                                <span>{option.label}</span>
                                {isActive && (
                                  <Check width={14} height={14} className="text-text/90" />
                                )}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Desktop: All buttons horizontal */}
              <div className="hidden md:flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`group relative shrink-0 whitespace-nowrap px-5 py-3 text-sm rounded-full border-2 transition-all duration-500 overflow-visible ${
                      selectedCategory === cat
                        ? "text-text border-text bg-transparent"
                        : "text-muted border-stroke bg-transparent hover:text-text hover:border-text/40"
                    }`}
                  >
                    <span
                      className={`absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-opacity duration-500 ${
                        selectedCategory === cat ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                      style={{ margin: "-2px" }}
                    >
                      <span className="flex w-full h-full rounded-full bg-bg" />
                    </span>
                    <span className="relative z-10">{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Dropdown - Desktop only */}
            <div className="hidden md:block relative group overflow-visible">
              <span
                className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500"
                style={{ margin: "-2px" }}
              >
                <span className="flex w-full h-full rounded-full bg-bg" />
              </span>
              <button
                type="button"
                onClick={() => setIsSortOpen((prev) => !prev)}
                aria-haspopup="listbox"
                aria-expanded={isSortOpen}
                className="relative z-10 inline-flex items-center gap-2 px-4 py-3 text-left text-sm font-medium text-text bg-transparent border-2 border-stroke rounded-full shadow-none focus:outline-none focus:ring-2 focus:ring-text/60 transition-all hover:border-text/40 cursor-pointer"
              >
                <span className="whitespace-nowrap">
                  {sortOptions.find((option) => option.value === sortBy)?.label ?? "Sort"}
                </span>
                <span className="pointer-events-none shrink-0">
                  <ChevronDown
                    width={12}
                    height={12}
                    className={`text-text/70 transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""}`}
                  />
                </span>
              </button>
              {isSortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: easing.expo }}
                  className="absolute right-0 mt-3 w-[220px] rounded-2xl border border-white/15 bg-[#0e0e12]/95 backdrop-blur-xl shadow-2xl shadow-black/40 overflow-hidden z-20"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-white/2 to-transparent pointer-events-none" />
                  <ul role="listbox" aria-label="Sort options" className="relative z-10 p-2">
                    {sortOptions.map((option) => {
                      const isActive = option.value === sortBy;
                      return (
                        <li key={option.value}>
                          <button
                            type="button"
                            role="option"
                            aria-selected={isActive}
                            onClick={() => {
                              setSortBy(option.value);
                              setIsSortOpen(false);
                            }}
                            className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl text-left text-sm transition-all ${
                              isActive
                                ? "bg-white/16 text-white"
                                : "text-white/80 hover:text-white hover:bg-white/10"
                            }`}
                          >
                            <span>{option.label}</span>
                            {isActive && (
                              <Check width={14} height={14} className="text-text/90" />
                            )}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Bento Grid - Exactly Like Homepage */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeInOut" }}
            >
              {filteredProjects.slice(0, 8).map((project, index) => (
                <BentoCard
                  key={project.slug}
                  project={project}
                  config={portfolioBentoConfigs[index]}
                  fallbackImageSrc="/placeholder.jpg"
                  motionProps={{
                    initial: { opacity: 0, y: 15 },
                    animate: { opacity: 1, y: 0 },
                    transition: {
                      duration: 0.3,
                      delay: index * 0.03,
                      ease: easing.standard,
                    },
                  }}
                />
              ))}
            </motion.div>
          ) : (
          <motion.div
            initial={fadeUpSm.hidden}
            animate={fadeUpSm.visible}
            transition={smoothTransition(0, 0.6)}
            className="text-center py-24 md:py-32"
          >
            <div className="max-w-md mx-auto">
              <span className="text-6xl md:text-7xl font-display italic text-text/10 mb-6 block">
                :(
              </span>
              <h3 className="text-2xl md:text-3xl text-text mb-4">
                No projects <span className="font-display italic">found</span>
              </h3>
              <p className="text-base text-muted mb-8">
                Try selecting a different category to see more work.
              </p>
              <GradientButton
                as="button"
                onClick={() => setSelectedCategory("All")}
                className="inline-flex items-center gap-2 px-6 py-3"
              >
                <span className="text-sm text-text relative z-10">View All Projects</span>
              </GradientButton>
            </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Footer CTA - Same as Contact Section */}
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
                  LET'S WORK TOGETHER
                  <span className="text-muted mx-6 md:mx-10">•</span>
                </span>
              ))}
            </div>
          </div>

          {/* Center content */}
          <AnimatedSection className="text-center mb-16 md:mb-20">
            <p className="text-base md:text-lg text-muted mb-8 max-w-md mx-auto">
              Have a project in mind? I'm always open to new ideas and collaborations.
            </p>

            <GradientButton
              as={motion.a}
              whileTap={{ scale: 0.97 }}
              href="mailto:will.schulz@aw3.tech"
              className="inline-flex items-center gap-3 px-8 py-4"
            >
              <span className="text-lg text-text relative z-10">will.schulz@aw3.tech</span>
              <ArrowDiagonal width={18} height={18} className="text-muted group-hover:text-text group-hover:translate-x-1 group-hover:-translate-y-1 transition-all relative z-10" />
            </GradientButton>
          </AnimatedSection>

          {/* Bottom bar */}
          <div 
            className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-stroke"
          >
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
