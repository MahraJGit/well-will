import { SectionLabel } from "@/components/common/SectionLabel";
import Image from "next/image";

const steps = [
  {
    title: "Identify",
    copy: "Work with local partners to find communities where reliable water access is urgently needed.",
    icon: "/icons/step-identify.svg",
    iconSize: 22,
  },
  {
    title: "Survey",
    copy: "Visit the site to assess groundwater conditions, access routes, and community readiness.",
    icon: "/icons/step-survey.svg",
    iconSize: 22,
  },
  {
    title: "Drill",
    copy: "Professionally drill and construct a durable well suited to local ground conditions.",
    icon: "/icons/step-drill.svg",
    iconSize: 17,
  },
  {
    title: "Test",
    copy: "Check water quality and system performance before the well is opened for daily use.",
    icon: "/icons/step-test.svg",
    iconSize: 22,
  },
  {
    title: "Handover",
    copy: "Train caretakers and hand the completed well over to the community for lasting ownership.",
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
        <div className="mx-auto flex max-w-[600px] flex-col items-center text-center">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h2 className="mt-5 max-w-[18ch] font-display text-[34px] leading-[1.12] tracking-[-0.02em] text-footer sm:max-w-none sm:text-[40px] md:mt-6 md:text-[44px]">
            From Ground Survey to{" "}
            <em className="italic text-gold">Flowing Water.</em>
          </h2>
          <p className="mt-3 max-w-[460px] text-[15px] leading-7 text-paragraph md:mt-4 md:text-[16px]">
            Five clear stages take a site from first assessment to a community-owned water point.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-[1140px] gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#e2e2e2] sm:aspect-[3/4] sm:rounded-[32px] lg:aspect-auto lg:min-h-[560px]">
            <Image
              src="/images/how-it-works-photo-1.png"
              alt="Field engineers working on a community well"
              fill
              className="object-cover object-[45%_center]"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3 lg:content-stretch">
            {steps.map((step, index) => {
              const isLast = index === steps.length - 1;
              return (
                <article
                  key={step.title}
                  className={`flex flex-col rounded-[18px] bg-white px-3.5 py-3.5 shadow-[0_8px_24px_rgba(21,37,36,0.04)] sm:rounded-[20px] sm:px-4 sm:py-4 ${
                    isLast
                      ? "sm:col-span-2 sm:flex-row sm:items-start sm:gap-3"
                      : ""
                  }`}
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#e8f2f2]">
                    <Image
                      src={step.icon}
                      alt=""
                      width={Math.round(step.iconSize * 0.85)}
                      height={16}
                      className="h-4 w-auto"
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
