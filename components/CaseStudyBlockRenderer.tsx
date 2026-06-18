"use client";

import { motion } from "framer-motion";
import type { CaseStudyLayout } from "@/lib/projects";
import type { ImageBlock, RenderBlock } from "@/lib/utils";
import type { TextProcessor } from "./TextProcessor";
import ImageWithSkeleton from "./ImageWithSkeleton";
import { expoTransition, fadeUpSm, viewportOnceLoose } from "@/lib/animations";

type Aspect = NonNullable<ImageBlock["aspect"]>;

export function renderImageBlock(
  block: ImageBlock,
  index: number,
  aspectOverride?: Aspect
) {
  const aspectKey = aspectOverride ?? block.aspect;
  const aspectClass =
    aspectKey === "4/3"
      ? "aspect-[4/3]"
      : aspectKey === "3/2"
        ? "aspect-[3/2]"
        : aspectKey === "square"
          ? "aspect-square"
          : "aspect-video";

  const roundedClass =
    block.rounded === "none"
      ? "rounded-none"
      : block.rounded === "sm"
        ? "rounded-sm"
        : block.rounded === "md"
          ? "rounded-md"
          : block.rounded === "lg"
            ? "rounded-lg"
            : block.rounded === "xl"
              ? "rounded-xl"
              : "rounded-2xl";

  const fitClass = block.fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div key={`block-${index}`} className="h-full">
      <div
        className={`w-full h-full ${aspectClass} bg-surface ${roundedClass} border border-stroke overflow-hidden relative group`}
      >
        {block.src ? (
          <ImageWithSkeleton
            src={block.src}
            alt={block.alt ?? block.label}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className={`${fitClass} group-hover:scale-105 transition-transform duration-500 ease-out`}
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
}

export function renderHeadingBlock(
  heading: string | undefined,
  textProcessor: TextProcessor
) {
  if (!heading) {
    return null;
  }

  return (
    <h2 className="text-3xl md:text-display-md lg:text-5xl text-text leading-[1.08]">
      {textProcessor.renderHeadingText(heading)}
    </h2>
  );
}

export function renderCaseStudyBlock(
  block: RenderBlock,
  index: number,
  textProcessor: TextProcessor
) {
  switch (block.type) {
    case "heading": {
      const HeadingTag = block.level === 3 ? "h3" : "h2";
      const headingClass =
        block.level === 3
          ? "text-2xl md:text-[2rem] text-text"
          : "text-3xl md:text-display-md text-text";
      const headingParts = block.text.split("—");

      return (
        <div key={`block-${index}`} className="space-y-4">
          {block.eyebrow && (
            <span className="section-eyebrow text-caption text-muted/80 tracking-[0.32em]">
              <span className="section-divider" />
              {block.eyebrow}
            </span>
          )}
          <HeadingTag className={`${headingClass} leading-[1.08]`}>
            {headingParts.length > 1 ? (
              <>
                {textProcessor.renderHeadingText(headingParts[0].trim())}{" "}
                <span className="font-display italic">
                  {textProcessor.renderHeadingText(
                    headingParts.slice(1).join("—").trim(),
                    false
                  )}
                </span>
              </>
            ) : (
              textProcessor.renderHeadingText(block.text)
            )}
          </HeadingTag>
        </div>
      );
    }
    case "paragraph":
      return (
        <p
          key={`block-${index}`}
          className="text-base md:text-lead text-muted leading-[1.8] max-w-3xl"
        >
          {block.text}
        </p>
      );
    case "list":
      return (
        <ul key={`block-${index}`} className="space-y-3 max-w-3xl">
          {block.items.map((item, itemIndex) => (
            <li
              key={`block-${index}-item-${itemIndex}`}
              className="flex items-start gap-3 text-base md:text-lead text-muted leading-[1.75]"
            >
              <span className="text-accent text-sm mt-0.5 flex-shrink-0">→</span>
              <span>{item}</span>
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
            initial={fadeUpSm.hidden}
            whileInView={fadeUpSm.visible}
            viewport={viewportOnceLoose}
            transition={expoTransition()}
            className="w-full py-12 md:py-14 border-y border-stroke my-12"
          >
            <div className="flex flex-col items-center gap-3 text-center">
              {block.label && (
                <span className="eyebrow-label inline-flex items-center gap-2">
                  <span className="w-6 h-px bg-stroke" />
                  {block.label}
                  <span className="w-6 h-px bg-stroke" />
                </span>
              )}

              <h3 className="text-3xl md:text-display-md lg:text-5xl text-text leading-[1.08] max-w-2xl">
                <span className="font-display italic">{block.text}</span>
              </h3>
            </div>
          </motion.div>
        );
      }

      return (
        <motion.div
          key={`block-${index}`}
          initial={fadeUpSm.hidden}
          whileInView={fadeUpSm.visible}
          viewport={viewportOnceLoose}
          transition={expoTransition()}
          className="w-full pl-6 md:pl-8 border-l-2 border-accent my-12 max-w-4xl"
        >
          <p className="text-xl md:text-[1.6rem] text-text/90 leading-[1.6] italic">
            "{block.text}"
          </p>
        </motion.div>
      );
    }
    case "image":
      return renderImageBlock(block, index);
    case "imageGroup": {
      const columnClass =
        block.blocks.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2";
      const aspectOverride: Aspect = block.blocks.every(
        (item) => item.aspect === block.blocks[0].aspect
      )
        ? (block.blocks[0].aspect ?? "video")
        : "video";

      return (
        <div
          key={`block-${index}`}
          className={`grid grid-cols-1 ${columnClass} gap-10 md:gap-12`}
        >
          {block.blocks.map((imageBlock, imageIndex) =>
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
}

export function renderLayoutSection(
  layout: CaseStudyLayout,
  index: number,
  textProcessor: TextProcessor
) {
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
              {renderHeadingBlock(layout.heading, textProcessor)}
              {layout.content.map((block, blockIndex) =>
                renderCaseStudyBlock(
                  block,
                  index * 1000 + blockIndex,
                  textProcessor
                )
              )}
            </div>
          </div>
          <div className={isFlipped ? "md:order-1" : ""}>
            <div className="flex flex-col gap-6 md:gap-8">
              {layout.media?.map((block, blockIndex) =>
                renderCaseStudyBlock(
                  block,
                  index * 1000 + blockIndex + 100,
                  textProcessor
                )
              )}
            </div>
          </div>
        </section>
      );
    }
    case "grid":
      return (
        <section
          key={`layout-${index}`}
          className="flex flex-col gap-10 md:gap-14"
        >
          {renderHeadingBlock(layout.heading, textProcessor)}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-5 md:gap-8 auto-rows-[240px]">
            {layout.items.map((block, itemIndex) => {
              const bentoPatterns = [
                "col-span-2 md:col-span-4 md:row-span-2",
                "col-span-1 md:col-span-2 md:row-span-1",
                "col-span-1 md:col-span-2 md:row-span-2",
              ];
              const pattern = bentoPatterns[itemIndex % bentoPatterns.length];

              return (
                <div
                  key={`grid-${index}-${itemIndex}`}
                  className={pattern}
                >
                  {renderCaseStudyBlock(
                    block,
                    index * 1000 + itemIndex,
                    textProcessor
                  )}
                </div>
              );
            })}
          </div>
        </section>
      );
    case "timeline":
      return (
        <section
          key={`layout-${index}`}
          className="flex flex-col gap-8 md:gap-12"
        >
          {renderHeadingBlock(layout.heading, textProcessor)}
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

                <p className="text-caption text-muted/80 uppercase tracking-[0.3em] mb-4">
                  Step {stepIndex + 1}
                </p>

                <h3 className="text-lg md:text-[1.35rem] text-text mb-2">
                  <span className="font-display italic">{step.title}</span>
                </h3>
                <p className="text-sm md:text-[1.02rem] text-muted leading-[1.7]">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      );
    case "stack":
      return (
        <section
          key={`layout-${index}`}
          className="flex flex-col gap-8 md:gap-12"
        >
          {renderHeadingBlock(layout.heading, textProcessor)}
          <div className="flex flex-col gap-6 md:gap-8">
            {layout.blocks.map((block, blockIndex) =>
              renderCaseStudyBlock(
                block,
                index * 1000 + blockIndex,
                textProcessor
              )
            )}
          </div>
        </section>
      );
    default:
      return null;
  }
}
