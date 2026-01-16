import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/CaseStudyPage";
import { getProject } from "@/lib/projects";

export default function WorkCaseStudy({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  return <CaseStudyPage project={project} />;
}
