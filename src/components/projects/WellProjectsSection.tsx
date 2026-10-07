"use client";

import { Button } from "@/components/common/Button";
import { SectionLabel } from "@/components/common/SectionLabel";
import { WellProjectCard } from "@/components/projects/WellProjectCard";
import { HoverLift, Reveal, Stagger, StaggerItem } from "@/components/motion/primitives";
import type { WellProject } from "@/lib/projects";

type Props = {
  label?: string;
  title?: string;
  projects: WellProject[];
  showViewAll?: boolean;
  sectionId?: string;
};

export function WellProjectsSection({
  label = "Completed Wells",
  title = "Wells built with families in Rahimyar Khan.",
  projects,
  showViewAll = false,
  sectionId,
}: Props) {
  return (
    <section
      id={sectionId}
      className="scroll-mt-28 bg-[#FDFBF7] px-5 py-16 md:px-10 md:py-20 lg:px-20 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-[1750px] flex-col items-start gap-10">
        <Reveal className="flex w-full max-w-[720px] flex-col items-start gap-5">
          <SectionLabel>{label}</SectionLabel>
          <h2 className="w-full font-display text-[36px] font-normal leading-[1.08] text-[#0A0705] md:text-[44px] lg:text-[48px]">
            {title}
          </h2>
        </Reveal>

        <Stagger className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4" stagger={0.1}>
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <HoverLift className="h-full">
                <WellProjectCard project={project} neu />
              </HoverLift>
            </StaggerItem>
          ))}
        </Stagger>

        {showViewAll ? (
          <Reveal delay={0.12} className="pt-2">
            <Button href="/projects" className="h-14">
              View all projects
            </Button>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
