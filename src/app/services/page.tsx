import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/common/PageHero";
import { SectionLabel } from "@/components/common/SectionLabel";
import { CountUp, Reveal, Stagger, StaggerItem, ZoomImage } from "@/components/motion/primitives";
import { WellProjectsSection } from "@/components/projects/WellProjectsSection";
import { ReviewsSection } from "@/components/work/ReviewsSection";
import { featuredWellProjects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Every well starts with a clear understanding of the community it will serve — from planning and construction to testing and handover.",
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

export type ServicesIntroProps = {
  label: string;
  title: ReactNode;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
};

export type ServicesProcessStep = {
  num: string;
  title: string;
  copy: string;
  pad?: string;
};

function ProcessStepCard({ step }: { step: ServicesProcessStep }) {
  return (
    <article className="neu-card flex h-full flex-col items-start rounded-[28px] p-6 md:p-8">
      <p className="w-full font-display text-[56px] font-normal leading-none text-[rgba(0,133,134,0.6)] lg:text-[72px] lg:leading-[72px]">
        {step.num}
      </p>
      <h3 className="mt-7 w-full font-display text-[26px] font-normal leading-9 text-[#0A0705] lg:text-[30px] lg:leading-9">
        {step.title}
      </h3>
      <p className="mt-4 w-full font-sans text-[16px] font-normal leading-[26px] text-[#524D47]">
        {step.copy}
      </p>
    </article>
  );
}

export type ServicesProcessProps = {
  label: string;
  title: ReactNode;
  steps: ServicesProcessStep[];
};

export type ServicesCtaProps = {
  title: string;
  description: string;
  buttonLabel: string;
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
    "Thoughtful planning. Practical solutions. Lasting access — support that covers the journey from need to water.",
  image: "/images/hero-services.jpg",
  imageAlt:
    "Children gather at a village hand pump under a wooden pavilion as water flows into a basin",
  primaryAction: { href: "/fund-a-well", label: "Request a Well" },
  secondaryAction: { href: "/projects", label: "View Projects" },
};

const defaultIntro: ServicesIntroProps = {
  label: "What Goes Into Every Well",
  title: (
    <>
      Thoughtful planning. Practical solutions.{" "}
      <em className="italic text-gold">Lasting access.</em>
    </>
  ),
  paragraphs: [
    "Every well starts with a clear understanding of the community it will serve. We consider the location, local conditions, expected use, and practical requirements before work begins.",
    "From planning and construction to testing and handover, each stage is designed to create a water point that communities can use and care for with confidence.",
  ],
  image: "/images/water-bottles.png",
  imageAlt:
    "A boy drinks clean water from a new well while a field engineer and community look on",
};

const defaultProcess: ServicesProcessProps = {
  label: "Our Water Services",
  title: (
    <>
      Support that covers the journey from need to <em className="italic">access.</em>
    </>
  ),
  steps: [
    {
      num: "01",
      title: "Community Assessment",
      copy: "We listen to local communities and understand their water access challenges.",
      pad: "xl:pt-0",
    },
    {
      num: "02",
      title: "Site Survey",
      copy: "We assess the proposed location and surrounding conditions before construction begins.",
      pad: "xl:pt-16",
    },
    {
      num: "03",
      title: "Well Construction",
      copy: "We coordinate the construction of wells suited to the local environment and community needs.",
      pad: "xl:pt-32",
    },
    {
      num: "04",
      title: "Water Testing",
      copy: "We check the completed water point before it becomes part of the community's daily routine.",
      pad: "xl:pt-16",
    },
    {
      num: "05",
      title: "Handover & Care",
      copy: "We guide local caretakers on basic maintenance and responsible use after completion.",
      pad: "xl:pt-0",
    },
  ],
};

const defaultCta: ServicesCtaProps = {
  title: "Need a Reliable Water Source?",
  description:
    "If your community is facing limited or unreliable water access, tell us about the need. Our team can review the request and guide you through the next steps.",
  buttonLabel: "Request a Well",
};

export type ServicesAudienceProps = {
  label: string;
  title: ReactNode;
  items: { title: string; copy: string }[];
};

const defaultAudiences: ServicesAudienceProps = {
  label: "Who We Work With",
  title: (
    <>
      Water access starts with understanding who{" "}
      <em className="italic text-gold">needs it.</em>
    </>
  ),
  items: [
    {
      title: "Rural Communities",
      copy: "We work with communities where safe and reliable water is difficult to access.",
    },
    {
      title: "Local Leaders",
      copy: "Community representatives help us understand local needs and practical challenges.",
    },
    {
      title: "Families",
      copy: "Households can share their water access concerns and help identify areas where support is needed.",
    },
    {
      title: "Community Partners",
      copy: "Local partners can help connect projects with the people and places that need them most.",
    },
  ],
};

const stats = [
  { value: "50+", label: "Wells Built" },
  { value: "20+", label: "Communities Reached" },
  { value: "15K+", label: "People Supported" },
  { value: "100%", label: "Projects Verified" },
];

export function ServicesView({
  hero = defaultHero,
  intro = defaultIntro,
  process = defaultProcess,
  audiences = defaultAudiences,
  cta = defaultCta,
}: {
  hero?: ServicesHeroProps;
  intro?: ServicesIntroProps;
  process?: ServicesProcessProps;
  audiences?: ServicesAudienceProps | null;
  cta?: ServicesCtaProps;
}) {
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

      {/* Intro */}
      <section
        id="after-hero"
        className="scroll-mt-28 bg-[#FDFBF7] px-5 pb-16 pt-10 md:px-10 md:pb-20 lg:px-14 lg:pb-20 lg:pt-0"
      >
        <div className="mx-auto flex max-w-[1750px] flex-col items-start gap-10 xl:flex-row xl:items-center xl:gap-x-12 xl:pb-20">
          <ZoomImage
            from="left"
            hoverScale={1.03}
            className="relative h-auto w-full max-w-[602px] shrink-0 overflow-hidden rounded-[28px] xl:h-[600px] xl:w-[602px]"
          >
            <Image
              src={intro.image ?? "/images/water-bottles.png"}
              alt={
                intro.imageAlt ??
                "A boy drinks clean water from a new well while a field engineer and community look on"
              }
              width={603}
              height={674}
              className="w-full object-cover"
              priority
            />
          </ZoomImage>

          <Reveal delay={0.12} className="flex min-w-0 flex-1 flex-col items-start gap-5 px-0 md:px-6 lg:max-w-[1100px] lg:px-12">
            <SectionLabel>{intro.label}</SectionLabel>
            <h2 className="max-w-[1004px] font-display text-[36px] font-normal leading-[1.08] text-[#0A0705] md:text-[44px] lg:text-[48px]">
              {intro.title}
            </h2>
            {intro.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[1004px] font-sans text-[16px] font-normal leading-7 text-[#524D47] md:text-[18px] md:leading-7"
              >
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Impact stats — Figma dark bar + left rules */}
      <section className="w-full bg-[#001819] text-white">
        <Stagger className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-10 px-5 py-14 md:px-10 md:py-16 lg:grid-cols-4 lg:gap-0 lg:px-20" stagger={0.08}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="border-l border-white/35 pl-5 md:pl-6 lg:pl-[25px]">
              <p className="font-sans text-[40px] font-semibold leading-none tracking-[-0.03em] text-white md:text-[48px] lg:text-[56px] lg:leading-[56px] lg:tracking-[-1.68px]">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-3 text-[11px] font-bold uppercase leading-[18px] tracking-[0.12em] text-white md:mt-4 md:text-[12px]">
                {stat.label}
              </p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Process */}
      <section className="relative isolate overflow-hidden bg-[#F8F4ED] px-5 py-16 md:px-10 md:py-20 lg:px-20 lg:py-32">
        <div className="relative z-[1] mx-auto flex w-full max-w-[1750px] flex-col items-start gap-12 lg:gap-16">
          <Reveal className="flex w-full max-w-[672px] flex-col items-start gap-6">
            <SectionLabel>{process.label}</SectionLabel>
            <h2 className="w-full font-display text-[36px] font-normal leading-[1.08] text-[#0A0705] md:text-[44px] lg:text-[48px]">
              {process.title}
            </h2>
          </Reveal>

          {process.steps.length === 5 ? (
            <Stagger
              className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-5 xl:items-start xl:gap-5"
              stagger={0.1}
            >
              {process.steps.map((step) => (
                <StaggerItem key={step.num} className={step.pad ?? ""}>
                  <ProcessStepCard step={step} />
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <Stagger
              className="flex w-full flex-col items-start gap-5 lg:flex-row lg:justify-center lg:gap-6"
              stagger={0.12}
            >
              {process.steps.map((step) => (
                <StaggerItem
                  key={step.num}
                  className={`w-full flex-1 md:max-w-[557px] ${step.pad ?? ""}`}
                >
                  <ProcessStepCard step={step} />
                </StaggerItem>
              ))}
            </Stagger>
          )}
        </div>

        {/* Water 3 — decorative wave */}
        <div className="pointer-events-none absolute bottom-[-40px] right-[-40%] z-[2] h-[120%] w-[220%] opacity-90 lg:right-[-787px] lg:h-[1941px] lg:w-[3556px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-wave.png" alt="" className="h-full w-full max-w-none" />
        </div>
      </section>

      {/* Featured Projects */}
      <WellProjectsSection
        label="Featured Projects"
        title="Wells in the ground, water in daily life."
        projects={featuredWellProjects}
        showViewAll
      />

      <ReviewsSection />

      {audiences ? (
        <section className="bg-[#F8F4ED]">
          <div className="mx-auto w-full max-w-[1750px] px-5 py-16 md:px-10 md:py-20 lg:px-20 lg:py-24">
            <Reveal>
              <SectionLabel>{audiences.label}</SectionLabel>
              <h2 className="mt-5 max-w-[640px] font-display text-[36px] font-normal leading-[1.08] text-[#0A0705] md:text-[44px] lg:text-[48px]">
                {audiences.title}
              </h2>
            </Reveal>

            <Stagger
              className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-14 xl:grid-cols-4 xl:gap-x-6"
              stagger={0.1}
            >
              {audiences.items.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-px w-full bg-[#DFD8CC]" />
                  <h3 className="mt-7 font-display text-[24px] font-normal leading-8 text-[#0A0705]">
                    {item.title}
                  </h3>
                  <p className="mt-[18px] max-w-[424px] font-sans text-[14px] font-normal leading-[23px] text-[#524D47]">
                    {item.copy}
                  </p>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      ) : null}

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

        <Reveal className="relative z-[1] mx-auto flex w-full max-w-[896px] flex-col items-center gap-4 px-6 py-16 lg:h-full lg:justify-center lg:py-20">
          <h2 className="max-w-[679px] text-center font-display text-[36px] font-normal leading-none text-[#FDFBF7] md:text-[48px] lg:text-[60px] lg:leading-[60px]">
            {cta.title}
          </h2>
          <p className="max-w-[646px] text-center font-sans text-[16px] font-normal leading-7 text-[rgba(248,244,237,0.85)] md:text-[18px] md:leading-7">
            {cta.description}
          </p>
          <div className="pt-6 lg:pt-10">
            <Link
              href="/fund-a-well"
              className="btn-motion inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#E68142] px-8 font-sans text-[14px] font-medium leading-5 tracking-[0.35px] text-[#FDFBF7]"
            >
              {cta.buttonLabel}
              <span aria-hidden className="text-[14px] leading-none">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}

export default function ServicesPage() {
  return <ServicesView />;
}
