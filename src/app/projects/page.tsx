import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { WellProjectsSection } from "@/components/projects/WellProjectsSection";
import { wellProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse completed wells in Rahimyar Khan, each listed with owner, well type, household size, and estimated cost.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="PROJECTS"
        title={
          <>
            <span className="block">Every well tells</span>
            <span className="block">
              a story of <em className="italic">access restored.</em>
            </span>
          </>
        }
        description="Completed wells across Rahimyar Khan, each built with a family and listed with type, household size, and estimated cost."
        image="/images/project-bg.png"
        imageAlt="Community members and a field engineer at a multi-tap water station beside green fields"
        imagePosition="object-[55%_40%]"
        actions={[
          { href: "/fund-a-well", label: "Request a Well" },
          { href: "/contact", label: "Get in Touch", variant: "ghost" },
        ]}
      />

      <WellProjectsSection
        label="All Projects"
        title="Completed wells in World."
        projects={wellProjects}
      />
    </>
  );
}
