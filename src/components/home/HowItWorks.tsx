import { SectionLabel } from "@/components/common/SectionLabel";
import Image from "next/image";

const steps = [
  {
    title: "Identify",
    copy: "Find communities where reliable water access is needed.",
    icon: "/icons/step-identify.svg",
    iconSize: 25,
  },
  {
    title: "Survey",
    copy: "Assess the location and groundwater conditions.",
    icon: "/icons/step-survey.svg",
    iconSize: 25,
  },
  {
    title: "Drill",
    copy: "Professionally drill and construct the well.",
    icon: "/icons/step-drill.svg",
    iconSize: 19,
  },
  {
    title: "Test",
    copy: "Check water quality and system performance.",
    icon: "/icons/step-test.svg",
    iconSize: 25,
  },
  {
    title: "Handover",
    copy: "Provide the completed well to the community.",
    icon: "/icons/step-handover.svg",
    iconSize: 25,
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="pointer-events-none absolute left-[-1599px] top-[-911px] hidden h-[1941px] w-[3556px] opacity-30 lg:block">
        <Image src="/images/hero-wave.png" alt="" fill className="object-cover" sizes="3556px" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 py-16 md:px-10 md:py-20 min-[1440px]:h-[1019px] min-[1440px]:px-0 min-[1440px]:py-0">
        <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-5 text-center min-[1440px]:absolute min-[1440px]:left-[400px] min-[1440px]:top-20 min-[1440px]:gap-[23px]">
          <SectionLabel>HOW IT WORKS</SectionLabel>
          <h2 className="w-full font-display text-[36px] leading-[1.1] tracking-[-0.02em] text-footer md:text-[44px]">
            From Ground Survey to Flowing
            <br className="hidden sm:block" /> Water.
          </h2>
          <p className="max-w-[640px] text-[16px] leading-7 text-[#3a4c4a] md:text-[17px] md:leading-[30px]">
            Five clear stages take a site from first assessment to a community-owned water point.
          </p>
        </div>

        <div className="relative mt-12 overflow-hidden rounded-[40px] bg-white sm:rounded-[64px] min-[1440px]:absolute min-[1440px]:left-[243px] min-[1440px]:top-[358px] min-[1440px]:mt-0 min-[1440px]:h-[581px] min-[1440px]:w-[954px] min-[1440px]:rounded-tl-[113px] min-[1440px]:rounded-tr-[113px] min-[1440px]:rounded-br-[113px] min-[1440px]:rounded-bl-none">
          {/* Photo — visible on all breakpoints */}
          <div className="relative mx-auto mt-8 h-[240px] w-[min(90%,353px)] overflow-hidden rounded-t-[40px] border-4 border-white bg-[#e2e2e2] sm:h-[300px] min-[1440px]:absolute min-[1440px]:left-20 min-[1440px]:top-[49px] min-[1440px]:mt-0 min-[1440px]:h-[480px] min-[1440px]:w-[353px] min-[1440px]:rounded-t-[51px]">
            <Image
              src="/images/how-it-works-photo-1.png"
              alt="engineer drilling a well"
              fill
              className="object-cover object-[45%_center]"
              sizes="353px"
            />
          </div>

          <div className="absolute left-[495px] top-[49px] hidden h-[480px] w-[5px] rounded-[27px] bg-[#d7d7d0] min-[1440px]:block">
            <span className="absolute left-0 top-0 h-[86px] w-full rounded-[27px] bg-primary" />
          </div>

          <div className="flex flex-col gap-6 px-6 py-8 sm:gap-[26px] sm:px-8 sm:py-10 min-[1440px]:absolute min-[1440px]:left-[562px] min-[1440px]:top-[49px] min-[1440px]:w-[355px] min-[1440px]:p-0">
            {steps.map((step) => (
              <div key={step.title} className="flex items-start gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#dbe9ea]">
                  <Image
                    src={step.icon}
                    alt=""
                    width={step.iconSize}
                    height={24}
                    className="h-6 w-auto"
                  />
                </span>
                <div className="min-w-0 max-w-[280px]">
                  <h3 className="text-[18px] font-medium leading-[28px] text-footer sm:text-[20px] sm:leading-[30px]">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[18px] text-[#4e5e5d] sm:mt-2 sm:text-[15px] sm:leading-[17px]">
                    {step.copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
