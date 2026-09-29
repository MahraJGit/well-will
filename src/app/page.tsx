import type { Metadata } from "next";
import { CommunityStory } from "@/components/home/CommunityStory";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HomeHero } from "@/components/home/HomeHero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ImpactIntro } from "@/components/home/ImpactIntro";
import { OurReach, ReachStoryBand } from "@/components/home/OurReach";
import { SupportCta } from "@/components/home/SupportCta";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.name} | Building wells, changing lives`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ImpactIntro />
      <HowItWorks />
      <FeaturedProjects />
      <ReachStoryBand>
      <OurReach />
      <CommunityStory />
      </ReachStoryBand>
      <SupportCta />
    </>
  );
}
