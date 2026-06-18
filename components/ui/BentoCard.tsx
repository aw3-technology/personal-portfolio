"use client";

import { motion, type MotionProps } from "framer-motion";
import Link from "next/link";
import ImageWithSkeleton from "@/components/ImageWithSkeleton";
import { useCursor } from "@/components/CursorContext";
import type { Project } from "@/lib/projects";

export type BentoCardConfig = {
  colSpan: string;
  aspect: string;
};

export const homepageBentoConfigs: BentoCardConfig[] = [
  { colSpan: "md:col-span-7 md:row-span-1", aspect: "aspect-[4/3]" },
  { colSpan: "md:col-span-5 md:row-span-1", aspect: "aspect-[4/3] md:aspect-auto" },
  { colSpan: "md:col-span-5 md:row-span-1", aspect: "aspect-[4/3] md:aspect-auto" },
  { colSpan: "md:col-span-7 md:row-span-1", aspect: "aspect-[4/3]" },
];

export const portfolioBentoConfigs: BentoCardConfig[] = [
  ...homepageBentoConfigs,
  ...homepageBentoConfigs,
];

type BentoCardProps = {
  project: Project;
  config: BentoCardConfig;
  motionProps?: MotionProps;
  fallbackImageSrc?: string;
};

export default function BentoCard({
  project,
  config,
  motionProps,
  fallbackImageSrc,
}: BentoCardProps) {
  const { setCursorType, setCursorText } = useCursor();
  const imageSrc = project.image ?? fallbackImageSrc;
  const fillToHeight = config.aspect.includes("md:aspect-auto") ? "md:h-full" : "";

  return (
    <motion.div className={config.colSpan} {...motionProps}>
      <Link
        href={`/work/${project.slug}`}
        className="group block h-full focus-ring-lg rounded-3xl"
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
          <div
            className={`bg-surface border border-stroke rounded-3xl ${config.aspect} ${fillToHeight} relative overflow-hidden group-hover:border-transparent transition-all duration-300 z-10`}
          >
            <div className="absolute inset-0">
              {imageSrc ? (
                <ImageWithSkeleton
                  src={imageSrc}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              ) : (
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center p-6`}>
                  <span className="font-display italic text-text text-2xl md:text-4xl text-center leading-tight">
                    {project.title}
                  </span>
                </div>
              )}
            </div>

            <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-500 ease-out" />

            <div className="absolute inset-0 backdrop-blur-[0px] group-hover:backdrop-blur-lg group-focus-visible:backdrop-blur-lg transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" />

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
}
