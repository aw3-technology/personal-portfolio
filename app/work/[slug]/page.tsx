import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/CaseStudyPage";
import { getProject, projects } from "@/lib/projects";
import { buildArticleMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);

  if (!project) {
    return {
      title: "Case Study Not Found",
      robots: { index: false, follow: false },
    };
  }

  // Fall back to the site-wide generated OG image (app/opengraph-image.png)
  // when a project has no image of its own.
  const ogImage = project.caseStudyImage ?? project.image;

  return buildArticleMetadata({
    title: `${project.title} — Case Study`,
    description: project.summary,
    path: `/work/${project.slug}`,
    image: ogImage,
  });
}

export default function WorkCaseStudy({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyPage project={project} />;
}
