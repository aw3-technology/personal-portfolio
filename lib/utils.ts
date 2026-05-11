import type { CaseStudyBlock } from "@/lib/projects";

export type ImageBlock = Extract<CaseStudyBlock, { type: "image" }>;

export type RenderBlock =
  | CaseStudyBlock
  | { type: "imageGroup"; blocks: ImageBlock[] };

export function groupCaseStudyBlocks(blocks: CaseStudyBlock[]): RenderBlock[] {
  const grouped: RenderBlock[] = [];
  let buffer: ImageBlock[] = [];

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
}
