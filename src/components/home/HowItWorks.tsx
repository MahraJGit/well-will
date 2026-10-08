"use client";

import { SectionLabel } from "@/components/common/SectionLabel";
import { HoverLift, Reveal, Stagger, StaggerItem, ZoomImage } from "@/components/motion/primitives";
import Image from "next/image";

const steps = [
  {
    title: "Community Assessment",
    copy: "We listen to local communities and understand their water access challenges.",
    icon: "/icons/step-identify.svg",
    iconSize: 22,
  },
  {
    title: "Site Survey",
    copy: "We assess the proposed location and surrounding conditions before construction begins.",
    icon: "/icons/step-survey.svg",
    iconSize: 22,
  },
  {
    title: "Well Construction",
    copy: "We coordinate the construction of wells suited to the local environment and community needs.",
    icon: "/icons/step-drill.svg",
    iconSize: 17,
  },
  {
    title: "Water Testing",
    copy: "We check the completed water point before it becomes part of the community's daily routine.",
    icon: "/icons/step-test.svg",
    iconSize: 22,
  },
  {
    title: "Handover & Care",
    copy: "We guide local caretakers on basic maintenance and responsible use after completion.",
    icon: "/icons/step-handover.svg",
    iconSize: 22,
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-[1600px] -translate-x-1/2 opacity-25 lg:block">
        <Image src="/images/hero-wave.png" alt="" fill className="object-cover" sizes="1600px" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 py-14 md:px-10 md:py-16 lg:py-20">
        <Reveal className="mx-auto flex max-w-[600px] flex-col items-center text-center">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h2 className="mt-5 max-w-[18ch] font-display text-[34px] leading-[1.12] tracking-[-0.02em] text-footer sm:max-w-none sm:text-[40px] md:mt-6 md:text-[44px]">
            Support that covers the journey from need to{" "}
            <em className="italic text-gold">access.</em>
          </h2>
          <p className="mt-3 max-w-[460px] text-[15px] leading-7 text-paragraph md:mt-4 md:text-[16px]">
            Five clear stages take a site from first assessment to a community-owned water point.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 grid max-w-[1140px] gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-5">
          <ZoomImage
            from="left"
            hoverScale={1.04}
            className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#e2e2e2] sm:aspect-[3/4] sm:rounded-[32px] lg:aspect-auto lg:min-h-[560px]"
          >
            <Image
              src="/images/how-it-works-photo-1.png"
              alt="Field engineers working on a community well"
              fill
              className="object-cover object-[45%_center]"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </ZoomImage>

          <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:content-stretch" stagger={0.09}>
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              return (
                <StaggerItem key={step.title} className={isLast ? "sm:col-span-2" : undefined}>
                  <HoverLift className="group h-full">
                    <article
                      className={`neu-card flex h-full flex-col rounded-[20px] px-4 py-4 ${
                        isLast ? "sm:flex-row sm:items-start sm:gap-3" : ""
                      }`}
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[rgba(18,107,114,0.1)]">
                        <Image
                          src={step.icon}
                          alt=""
                          width={Math.round(step.iconSize * 0.85)}
                          height={16}
                          className="h-4 w-auto max-w-none"
                          style={{ width: "auto", height: "16px" }}
                        />
                      </span>
                      <div className={isLast ? "mt-2.5 sm:mt-0.5" : "mt-2.5"}>
                        <h3 className="text-[15px] font-medium leading-none text-footer sm:text-[16px]">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-[12px] leading-[1.45] text-paragraph sm:text-[13px]">
                          {step.copy}
                        </p>
                      </div>
                    </article>
                  </HoverLift>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
