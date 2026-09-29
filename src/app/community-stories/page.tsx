import type { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { SectionLabel } from "@/components/common/SectionLabel";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Community Stories",
  description: "Stories from the families and villages who now have water closer to home.",
  alternates: { canonical: "/community-stories" },
};

const stories = [
  {
    title: "Kot Abdullah",
    copy: "Built with local engineers, this well now gives a village of a thousand people access to a shared water point.",
    image: "/images/about-community.png",
    people: "1,120",
    year: "2023",
  },
  {
    title: "Chak Noor",
    copy: "A schoolyard well, planned with the community committee so children no longer leave class to fetch water.",
    image: "/images/featured-well.png",
    people: "860",
    year: "2024",
  },
  {
    title: "Thar Community",
    copy: "In the desert, a sealed well means a shorter walk, cooler mornings, and water families can trust.",
    image: "/images/how-it-works-photo.png",
    people: "1,450",
    year: "2025",
  },
];

export default function CommunityStoriesPage() {
  return (
    <>
      <PageHero
        label="Community Stories"
        title={
          <>
            The well is only
            <br />
            the beginning.
          </>
        }
        description="The real story is what happens after the water arrives in kitchens, classrooms, and ordinary days."
        image="/images/hero-home.png"
        imageAlt="Community members standing together near a completed water project"
        showSocial
      />

      <section className="bg-white px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-[1280px] gap-16">
          {stories.map((story, index) => (
            <article
              key={story.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative min-h-[360px] overflow-hidden rounded-[36px] bg-[#e2e2e2] lg:min-h-[420px]">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div>
                <SectionLabel>COMMUNITY STORY</SectionLabel>
                <h2 className="mt-6 font-display text-[36px] leading-[1.1] tracking-[-0.02em] text-heading md:text-[44px] md:leading-[48px]">
                  {story.title}
                </h2>
                <p className="mt-5 max-w-[460px] text-[16px] leading-7 text-paragraph">{story.copy}</p>
                <div className="mt-8 flex gap-10">
                  <div>
                    <p className="text-[28px] font-semibold tracking-[-0.56px] text-primary">{story.people}</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[1.76px] text-paragraph">
                      People reached
                    </p>
                  </div>
                  <div>
                    <p className="text-[28px] font-semibold tracking-[-0.56px] text-gold-deep">{story.year}</p>
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[1.76px] text-paragraph">
                      Project year
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
