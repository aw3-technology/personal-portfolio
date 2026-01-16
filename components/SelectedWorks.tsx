"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { projects, Project } from "@/lib/projects";
import { useCursor } from "@/components/CursorContext";

export default function SelectedWorks() {

  return (
    <section id="work" className="bg-bg relative z-10 py-16 md:py-24 overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 px-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div>
            <span className="inline-flex items-center gap-2 text-xs text-muted uppercase tracking-[0.3em] mb-4">
              <span className="w-8 h-px bg-stroke" />
              Selected Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-text leading-[1.1]">
              Featured <span className="font-display italic">projects</span>
            </h2>
            <p className="text-muted text-sm md:text-base mt-3 max-w-md">
              A selection of projects I&apos;ve worked on, from concept to launch.
            </p>
          </div>
          <Link 
            href="/portfolio"
            className="group relative hidden md:inline-flex items-center gap-3 px-5 py-3 bg-bg border-2 border-stroke rounded-full text-sm text-muted transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg overflow-visible"
          >
            {/* Gradient border ring - only outline */}
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ margin: '-2px' }}>
              <span className="flex w-full h-full rounded-full bg-bg" />
            </span>
            <span className="relative z-10 group-hover:text-text transition-colors duration-300">View all work</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform relative z-10">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 px-2">
          {projects.slice(0, 4).map((project, index) => (
            <BentoCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
        <div className="mt-12 px-2 md:hidden flex justify-center">
          <Link 
            href="/portfolio"
            className="group relative inline-flex w-fit items-center justify-center gap-3 px-6 py-3 bg-bg border-2 border-stroke rounded-full text-sm text-muted transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-text/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg overflow-visible"
          >
            {/* Gradient border ring - only outline */}
            <span className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ margin: '-2px' }}>
              <span className="flex w-full h-full rounded-full bg-bg" />
            </span>
            <span className="relative z-10 group-hover:text-text transition-colors duration-300">View all work</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform relative z-10">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

const BentoCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const { setCursorType, setCursorText } = useCursor();

  // Bento grid configurations - varied sizes
  const cardConfigs = [
    { colSpan: 'md:col-span-7 md:row-span-1', aspect: 'aspect-[4/3]' },
    { colSpan: 'md:col-span-5 md:row-span-1', aspect: 'aspect-[4/3] md:aspect-auto' },
    { colSpan: 'md:col-span-5 md:row-span-1', aspect: 'aspect-[4/3] md:aspect-auto' },
    { colSpan: 'md:col-span-7 md:row-span-1', aspect: 'aspect-[4/3]' },
  ];

  const config = cardConfigs[index % cardConfigs.length];

  return (
    <motion.div
      className={`${config.colSpan}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
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
          <motion.div 
            className={`bg-surface border border-stroke rounded-3xl ${config.aspect} ${config.aspect.includes('md:aspect-auto') ? 'md:h-full' : ''} relative overflow-hidden group-hover:border-transparent transition-all duration-300 z-10`}
          >
          {/* Background - Image or Gradient Placeholder */}
          <div className="absolute inset-0">
          {project.image ? (
            <ImageWithSkeleton
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          ) : (
            <>
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
            </>
          )}
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
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};
