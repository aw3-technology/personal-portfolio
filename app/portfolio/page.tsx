"use client";

import { useState, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";
import BackToTop from "@/components/BackToTop";
import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import { ChevronDown } from "@/components/Icons";
import BentoCard, { portfolioBentoConfigs } from "@/components/ui/BentoCard";
import GradientButton from "@/components/ui/GradientButton";
import GradientBorderRing from "@/components/ui/GradientBorderRing";
import GlassMenu, { GlassMenuOption } from "@/components/ui/GlassMenu";
import PageHero from "@/components/ui/PageHero";
import SortDropdown from "@/components/ui/SortDropdown";
import { useDismissable } from "@/lib/hooks/useDismissable";
import { easing, fadeUpSm, smoothTransition } from "@/lib/animations";

const categories = ["All", "Venture Studio", "Cloud Infrastructure", "Open Source", "Web3", "AI", "Fintech", "Legal Tech"];

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
  const sortRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Close the sort/category dropdowns on outside click or escape
  useDismissable(sortRef, () => setIsSortOpen(false));
  useDismissable(categoryRef, () => setIsCategoryOpen(false));

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
        <PageHero
          eyebrow="Portfolio"
          title={<>All <span className="font-display italic">Work</span></>}
          subtitle="A collection of selected projects spanning product design, web development, and design systems."
          className="mb-12 md:mb-16"
        />

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
                  <GradientBorderRing active={selectedCategory === "All"} />
                  <span className="relative z-10">All</span>
                </button>

                {/* Category dropdown - mobile only */}
                <div className="relative group" ref={categoryRef}>
                  <GradientBorderRing active={selectedCategory !== "All"} />
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
                  
                  <AnimatePresence>
                    {isCategoryOpen && (
                      <GlassMenu align="left" width="w-max min-w-[220px]">
                        <ul role="listbox" aria-label="Category options" className="relative z-10 p-2">
                          {categories.filter((cat) => cat !== "All").map((cat) => (
                            <GlassMenuOption
                              key={cat}
                              isActive={cat === selectedCategory}
                              onClick={() => {
                                setSelectedCategory(cat);
                                setIsCategoryOpen(false);
                              }}
                            >
                              {cat}
                            </GlassMenuOption>
                          ))}
                        </ul>
                      </GlassMenu>
                    )}
                  </AnimatePresence>
                </div>

                {/* Sort Dropdown - Mobile only (in same row) */}
                <SortDropdown
                  ref={sortRef}
                  options={sortOptions}
                  value={sortBy}
                  onChange={(value) => {
                    setSortBy(value);
                    setIsSortOpen(false);
                  }}
                  isOpen={isSortOpen}
                  onToggle={() => setIsSortOpen((prev) => !prev)}
                  wrapperClassName="relative group overflow-visible shrink-0 ml-auto"
                  buttonTextClass="text-xs"
                />
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
                    <GradientBorderRing active={selectedCategory === cat} />
                    <span className="relative z-10">{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Dropdown - Desktop only */}
            <SortDropdown
              options={sortOptions}
              value={sortBy}
              onChange={(value) => {
                setSortBy(value);
                setIsSortOpen(false);
              }}
              isOpen={isSortOpen}
              onToggle={() => setIsSortOpen((prev) => !prev)}
              wrapperClassName="hidden md:block relative group overflow-visible"
              buttonTextClass="text-sm"
            />
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
              {filteredProjects.map((project, index) => (
                <BentoCard
                  key={project.slug}
                  project={project}
                  config={portfolioBentoConfigs[index % portfolioBentoConfigs.length]}
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
      <ContactFooter />
    </main>
  );
}
