import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/common/PageHero";
import { SectionLabel } from "@/components/common/SectionLabel";
import { WellProjectsSection } from "@/components/projects/WellProjectsSection";
import { featuredWellProjects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From identifying need to building and sustaining wells, see how we bring reliable clean water to communities.",
  alternates: { canonical: "/services" },
};

export type ServicesHeroProps = {
  label: string;
  title: ReactNode;
  description: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  primaryAction: { href: string; label: string };
  secondaryAction: { href: string; label: string };
};

const defaultHero: ServicesHeroProps = {
  label: "OUR SERVICES",
  title: (
    <>
      <span className="block">Clean Water.</span>
      <span className="block">
        Lasting <em className="italic">Change.</em>
      </span>
    </>
  ),
  description:
    "We identify need, build lasting wells with local teams, and stay for the training and care that keep water flowing.",
  image: "/images/hero-services.jpg",
  imageAlt:
    "Children gather at a village hand pump under a wooden pavilion as water flows into a basin",
  primaryAction: { href: "/fund-a-well", label: "Request a Well" },
  secondaryAction: { href: "/projects", label: "View Projects" },
};

const stats = [
  { value: "50+", label: "Wells Built" },
  { value: "20+", label: "Communities Reached" },
  { value: "15K+", label: "People Supported" },
  { value: "100%", label: "Projects Verified" },
];

const processSteps = [
  {
    num: "01",
    title: "Identify",
    copy: "We find communities where clean water access is limited, listening to local families and leaders.",
    pad: "pb-0 lg:pb-32",
  },
  {
    num: "02",
    title: "Build",
    copy: "Working with trusted local teams, we construct sustainable wells suited to the land and the people.",
    pad: "py-0 lg:py-16",
  },
  {
    num: "03",
    title: "Sustain",
    copy: "Training and maintenance keep reliable water flowing for years, not just for a season.",
    pad: "pt-0 lg:pt-32",
  },
];

export function ServicesView({ hero = defaultHero }: { hero?: ServicesHeroProps }) {
  return (
    <>
      <PageHero
        label={hero.label}
        title={hero.title}
        description={hero.description}
        image={hero.image ?? "/images/hero-services.jpg"}
        imageAlt={
          hero.imageAlt ??
          "Children gather at a village hand pump under a wooden pavilion as water flows into a basin"
        }
        imagePosition={hero.imagePosition}
        actions={[
          { href: hero.primaryAction.href, label: hero.primaryAction.label },
          {
            href: hero.secondaryAction.href,
            label: hero.secondaryAction.label,
            variant: "ghost",
          },
        ]}
      />

      {/* Intro — Figma: image 602×674 + Impact Introduction */}
      <section className="bg-[#FDFBF7] px-5 pb-16 pt-10 md:px-10 md:pb-20 lg:px-14 lg:pb-20 lg:pt-0">
        <div className="mx-auto flex max-w-[1750px] flex-col items-start gap-10 xl:flex-row xl:items-center xl:gap-x-12 xl:pb-20">
          <div className="relative h-auto w-full max-w-[602px] shrink-0 xl:h-[674px] xl:w-[602px]">
            <Image
              src="/images/impact-intro.png"
              alt="A boy drinks clean water from a new well while a field engineer and community look on"
              width={603}
              height={674}
              className="h-auto w-full xl:h-[674px] xl:w-[602px]"
              priority
            />
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-start gap-5 px-0 md:px-6 lg:max-w-[1100px] lg:px-12">
            <SectionLabel>Impact Introduction</SectionLabel>
            <h2 className="max-w-[1004px] font-display text-[36px] font-normal leading-[1.08] text-[#0A0705] md:text-[44px] lg:text-[48px]">
              We don&apos;t drop wells.{" "}
              <em className="italic text-gold">We build them with people.</em>
            </h2>
            <p className="max-w-[1004px] font-sans text-[16px] font-normal leading-7 text-[#524D47] md:text-[18px] md:leading-7">
              Every project starts by understanding a community — how far they travel for water,
              what the land can support, and what will keep a well working for years. We survey,
              plan, and listen before a single stone is laid.
            </p>
            <p className="max-w-[1004px] font-sans text-[15px] font-normal leading-[26px] text-[#524D47] md:text-[16px]">
              Then we build with trusted local teams, using materials and methods suited to the
              place. Finally, we train local caretakers so access to safe water is sustained, not
              temporary.
            </p>
          </div>
        </div>
      </section>

      {/* Impact stats — Figma dark bar + left rules */}
      <section className="w-full bg-[#001819] text-white">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-10 px-5 py-14 md:px-10 md:py-16 lg:grid-cols-4 lg:gap-0 lg:px-20">
          {stats.map((stat) => (
            <div key={stat.label} className="border-l border-white/35 pl-5 md:pl-6 lg:pl-[25px]">
              <p className="font-sans text-[40px] font-semibold leading-none tracking-[-0.03em] text-white md:text-[48px] lg:text-[56px] lg:leading-[56px] lg:tracking-[-1.68px]">
                {stat.value}
              </p>
              <p className="mt-3 text-[11px] font-bold uppercase leading-[18px] tracking-[0.12em] text-white md:mt-4 md:text-[12px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process — Figma: #F8F4ED, 128/80 pad, staggered 01–03, Water 3 wave */}
      <section className="relative isolate overflow-hidden bg-[#F8F4ED] px-5 py-16 md:px-10 md:py-20 lg:px-20 lg:py-32">
        <div className="relative z-[1] mx-auto flex w-full max-w-[1750px] flex-col items-start gap-12 lg:gap-16">
          <div className="flex w-full max-w-[672px] flex-col items-start gap-6">
            <SectionLabel>How We Create Impact</SectionLabel>
            <h2 className="w-full font-display text-[36px] font-normal leading-[1.08] text-[#0A0705] md:text-[44px] lg:text-[48px]">
              From first survey to a <em className="italic">flowing</em> well.
            </h2>
          </div>

          <div className="flex w-full flex-col items-start gap-12 lg:flex-row lg:justify-center lg:gap-10">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className={`flex w-full flex-1 flex-col items-start md:max-w-[557px] ${step.pad}`}
              >
                <p className="w-full font-display text-[56px] font-normal leading-none text-[rgba(0,133,134,0.6)] lg:text-[72px] lg:leading-[72px]">
                  {step.num}
                </p>
                <div className="mt-8 w-full border-t border-[#DFD8CC]" />
                <h3 className="mt-7 w-full font-display text-[26px] font-normal leading-9 text-[#0A0705] lg:text-[30px] lg:leading-9">
                  {step.title}
                </h3>
                <p className="mt-4 w-full font-sans text-[16px] font-normal leading-[26px] text-[#524D47]">
                  {step.copy}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Water 3 — decorative wave */}
        <div className="pointer-events-none absolute bottom-[-40px] right-[-40%] z-[2] h-[120%] w-[220%] opacity-90 lg:right-[-787px] lg:h-[1941px] lg:w-[3556px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-wave.png" alt="" className="h-full w-full max-w-none" />
        </div>
      </section>

      {/* CTA band — village photo, dark gradient, orange Request a Well */}
      <section className="relative isolate flex h-auto min-h-[320px] w-full flex-col items-center overflow-hidden lg:h-[402px] lg:min-h-0">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-services.jpg"
            alt=""
            fill
            className="object-cover object-[50%_40%]"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 24, 25, 0.75) 0%, rgba(0, 24, 25, 0.65) 50%, rgba(0, 24, 25, 0.85) 100%)",
            }}
          />
        </div>

        <div className="relative z-[1] mx-auto flex w-full max-w-[896px] flex-col items-center gap-4 px-6 py-16 lg:h-full lg:justify-center lg:py-20">
          <h2 className="max-w-[679px] text-center font-display text-[36px] font-normal leading-none text-[#FDFBF7] md:text-[48px] lg:text-[60px] lg:leading-[60px]">
            Help Build the Next Well.
          </h2>
          <p className="max-w-[646px] text-center font-sans text-[16px] font-normal leading-7 text-[rgba(248,244,237,0.85)] md:text-[18px] md:leading-7">
            Every request moves a community one step closer to water that is safe, close, and
            dependable.
          </p>
          <div className="pt-6 opacity-90 lg:pt-10">
            <Link
              href="/fund-a-well"
              className="inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#E68142] px-8 font-sans text-[14px] font-medium leading-5 tracking-[0.35px] text-[#FDFBF7] transition-opacity hover:opacity-90"
            >
              Request a Well
              <span aria-hidden className="text-[14px] leading-none">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <WellProjectsSection
        label="Featured Projects"
        title="Wells in the ground, water in daily life."
        projects={featuredWellProjects}
        showViewAll
      />
    </>
  );
}

export default function ServicesPage() {
  return <ServicesView />;
}
