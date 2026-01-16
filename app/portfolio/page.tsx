"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { projects } from "@/lib/projects";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import VinylLogo from "@/components/VinylLogo";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/components/ThemeProvider";
import { useCursor } from "@/components/CursorContext";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";
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
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const { setCursorType, setCursorText } = useCursor();
  const marqueeRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Handle scroll for navbar
  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });

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

  // Close sort dropdown on outside click or escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setIsSortOpen(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs text-muted uppercase tracking-[0.3em] mb-6">
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
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
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className={`shrink-0 text-current transition-transform duration-300 ${isCategoryOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  {isCategoryOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    className="text-text/90 shrink-0"
                                  >
                                    <path d="M2 6.2L4.6 8.6L10 3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
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
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        className={`text-text/70 transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""}`}
                      >
                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                  {isSortOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
                                  <svg
                                    width="14"
                                    height="14"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    className="text-text/90"
                                  >
                                    <path d="M2 6.2L4.6 8.6L10 3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
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
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className={`text-text/70 transition-transform duration-300 ${isSortOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {isSortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
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
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 12 12"
                                fill="none"
                                className="text-text/90"
                              >
                                <path d="M2 6.2L4.6 8.6L10 3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
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
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
            {filteredProjects.slice(0, 8).map((project, index) => {
            // Bento grid pattern - SAME AS HOMEPAGE
            const cardConfigs = [
              { colSpan: 'md:col-span-7 md:row-span-1', aspect: 'aspect-[4/3]' },  // Wide with aspect
              { colSpan: 'md:col-span-5 md:row-span-1', aspect: 'aspect-[4/3] md:aspect-auto' },  // Mobile aspect, desktop full height
              { colSpan: 'md:col-span-5 md:row-span-1', aspect: 'aspect-[4/3] md:aspect-auto' },  // Mobile aspect, desktop full height
              { colSpan: 'md:col-span-7 md:row-span-1', aspect: 'aspect-[4/3]' },  // Wide with aspect
              { colSpan: 'md:col-span-7 md:row-span-1', aspect: 'aspect-[4/3]' },  // Wide with aspect
              { colSpan: 'md:col-span-5 md:row-span-1', aspect: 'aspect-[4/3] md:aspect-auto' },  // Mobile aspect, desktop full height
              { colSpan: 'md:col-span-5 md:row-span-1', aspect: 'aspect-[4/3] md:aspect-auto' },  // Mobile aspect, desktop full height
              { colSpan: 'md:col-span-7 md:row-span-1', aspect: 'aspect-[4/3]' },  // Wide with aspect
            ];
            
            const config = cardConfigs[index];
            
            return (
              <motion.div
                key={project.slug}
                className={config.colSpan}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 * (index % 6),
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-4 focus-visible:ring-offset-bg rounded-3xl"
                  onMouseEnter={() => {
                    setCursorType("project");
                    setCursorText("View");
                  }}
                  onMouseLeave={() => {
                    setCursorType("default");
                    setCursorText("");
                  }}
                >
                  <div className="relative h-full rounded-3xl">
                    <div className={`bg-surface rounded-3xl ${config.aspect} ${config.aspect.includes('md:aspect-auto') ? 'md:h-full' : ''} relative overflow-hidden transition-all duration-300 z-10`}>
                      {/* Background - Image */}
                      <div className="absolute inset-0">
                        <ImageWithSkeleton
                          src={project.image || "/placeholder.jpg"}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        />
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500 ease-out" />
                      
                      {/* Blur layer */}
                      <div className="absolute inset-0 backdrop-blur-[0px] group-hover:backdrop-blur-lg group-focus-visible:backdrop-blur-lg transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" />

                      {/* Hover label */}
                      <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-300">
                        <div className={`rounded-full p-[1px] animated-gradient-border bg-gradient-to-br ${project.gradient}`}>
                          <div className="px-4 py-2 md:px-5 rounded-full bg-white text-black text-xs md:text-base font-medium tracking-wide">
                            <span className="font-sans">View &mdash; </span>
                            <span className="font-display italic">{project.title}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
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
              <button
                onClick={() => setSelectedCategory("All")}
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-stroke rounded-full hover:border-text/40 transition-all duration-500 overflow-visible focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ margin: '-2px' }}>
                  <span className="flex w-full h-full rounded-full bg-bg" />
                </span>
                <span className="text-sm text-text relative z-10">View All Projects</span>
              </button>
            </div>
          </motion.div>
        )}
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
                  className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-display italic text-text leading-none"
                >
                  LET'S WORK TOGETHER
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
              Have a project in mind? I'm always open to new ideas and collaborations.
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
              <span className="text-lg text-text relative z-10">hello@johnanderson.com</span>
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
            <div className="flex items-center gap-6 md:gap-8">
              <Link
                href="https://x.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text transition-colors hover:-translate-y-0.5 duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
              >
                Twitter
              </Link>
              <Link
                href="https://www.linkedin.com/in/yourprofile/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text transition-colors hover:-translate-y-0.5 duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
              >
                LinkedIn
              </Link>
              <Link
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text transition-colors hover:-translate-y-0.5 duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
              >
                Dribbble
              </Link>
              <Link
                href="https://github.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-text transition-colors hover:-translate-y-0.5 duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg rounded"
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
