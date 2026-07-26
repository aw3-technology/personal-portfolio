import type { Exploration } from "./explorations";
import type { CaseStudyBlock, CaseStudyLayout, Project } from "./projects";
import { projects } from "./projects";

// Collect every image a project references — its hero card image, its
// case-study hero, and every image block inside the case study — in reading
// order, de-duplicated so a hero that reappears in the body only shows once.
function collectProjectImages(project: Project): { src: string; label: string }[] {
  const seen = new Set<string>();
  const images: { src: string; label: string }[] = [];

  const add = (src: string | undefined, label: string) => {
    if (src && !seen.has(src)) {
      seen.add(src);
      images.push({ src, label });
    }
  };

  add(project.image, project.title);
  add(project.caseStudyImage, project.title);

  const visitBlock = (block: CaseStudyBlock) => {
    if (block.type === "image") {
      add(block.src, block.label || project.title);
    }
  };

  project.caseStudy?.blocks.forEach(visitBlock);
  project.caseStudy?.layout?.forEach((section: CaseStudyLayout) => {
    switch (section.type) {
      case "split":
        section.content.forEach(visitBlock);
        section.media?.forEach(visitBlock);
        break;
      case "grid":
        section.items.forEach(visitBlock);
        break;
      case "stack":
        section.blocks.forEach(visitBlock);
        break;
      // "timeline" has no image blocks.
    }
  });

  return images;
}

// Every work-page image, grouped by project in portfolio order. Drives the
// full /gallery page so it always reflects all case-study imagery.
export const galleryItems: Exploration[] = projects
  .flatMap((project) =>
    collectProjectImages(project).map((img) => ({ project, img }))
  )
  .map(({ project, img }, index) => ({
    id: index + 1,
    title: img.label,
    category: project.category,
    gradient: project.gradient,
    span: "md:col-span-2 md:row-span-2",
    // Unused for items that have an image; present to satisfy the type.
    mockup: "dashboard",
    image: img.src,
  }));
