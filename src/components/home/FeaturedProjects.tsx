import { Button } from "@/components/common/Button";
import { SectionLabel } from "@/components/common/SectionLabel";
import { WellProjectCard } from "@/components/projects/WellProjectCard";
import { featuredWellProjects } from "@/lib/projects";

export function FeaturedProjects() {
  return (
    <section className="bg-white">
      <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-20 md:px-10 lg:px-20 lg:pb-[80px] lg:pt-20">
        <div className="max-w-[614px]">
          <SectionLabel>FEATURED WELL PROJECTS</SectionLabel>
          <h2 className="mt-8 font-display text-[36px] leading-[1.08] tracking-[-0.01em] text-heading sm:text-[44px] md:text-[52px] lg:text-[64px] lg:leading-[1.05]">
            See where water is making a difference
          </h2>
          <p className="mt-8 max-w-[540px] text-[16px] leading-normal tracking-[-0.16px] text-paragraph">
            We work with local communities across Punjab to build reliable water
            wells where they&apos;re needed most. From identifying the right
            location to construction and completion, every project is focused on
            creating safe, lasting access to water.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4">
          {featuredWellProjects.map((project) => (
            <WellProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-10">
          <Button href="/projects" className="h-14">
            View all projects
          </Button>
        </div>
      </div>
    </section>
  );
}
