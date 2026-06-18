import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/CaseStudyPage";
import { getProject, projects } from "@/lib/projects";

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

  const title = `${project.title} — Case Study`;
  const description = project.summary;
  const path = `/work/${project.slug}`;
  // Fall back to the site-wide generated OG image (app/opengraph-image.tsx)
  // when a project has no image of its own.
  const ogImage = project.caseStudyImage ?? project.image;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "article",
      ...(ogImage ? { images: [{ url: ogImage, alt: project.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
  };
}

export default function WorkCaseStudy({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyPage project={project} />;
}
