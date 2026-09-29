import type { Metadata } from "next";
import type { SVGProps } from "react";
import Image from "next/image";
import { AboutHero } from "@/components/about/AboutHero";
import { Button } from "@/components/common/Button";
import { ClockIcon } from "@/components/common/icons";
import { SectionLabel } from "@/components/common/SectionLabel";

function CommunityIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="8.2" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="15.8" cy="8.4" r="1.9" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3.8 17.2c.5-2.4 2.2-3.6 4.4-3.6s3.9 1.2 4.4 3.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M13.2 14.1c1.5-.4 3.2.1 4.1 1.5.6.9 1.1 1.6 1.7 1.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EyeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3.2 12S6.4 7.2 12 7.2 20.8 12 20.8 12 17.6 16.8 12 16.8 3.2 12 3.2 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function SproutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 20V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M12 13c0-3.2 2.2-5.2 5.6-5.4-0.2 3.2-2.4 5.2-5.6 5.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.2c0-2.4-1.8-4-4.6-4.2.2 2.5 2 4 4.6 4.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: "About Us",
  description:
    "We are a small team of engineers, organisers, and neighbours working to make safe water an ordinary part of daily life.",
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Community First",
    copy: "Every project begins with the people who will live with it. Their needs shape what we build.",
    icon: CommunityIcon,
  },
  {
    title: "Transparency",
    copy: "Supporters can follow each project from the first survey to a working, flowing well.",
    icon: EyeIcon,
  },
  {
    title: "Sustainability",
    copy: "We design for repair, training, and local ownership so water keeps flowing for years.",
    icon: SproutIcon,
  },
  {
    title: "Lasting Impact",
    copy: "We measure success in decades of reliable access, not in wells alone.",
    icon: ClockIcon,
  },
];

const workSteps = [
  {
    n: "1",
    label: "Step 01",
    title: "Identify",
    copy: "We find communities where clean water access is limited, listening to local families and leaders.",
  },
  {
    n: "2",
    label: "Step 02",
    title: "Build",
    copy: "Working with trusted local teams, we construct sustainable wells suited to the land.",
  },
  {
    n: "3",
    label: "Step 03",
    title: "Sustain",
    copy: "Training and maintenance keep reliable water flowing for years, not just for a season.",
  },
];

const supportStats = [
  { value: "88%", copy: "Of every contribution goes directly to water projects" },
  { value: "100%", copy: "Of projects published with photos and progress updates" },
  { value: "15 yrs", copy: "Target lifespan for each well, with local maintenance" },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      {/* Why We Started — Figma: 560px, left 80 / right 82, staggered images */}
      <section className="relative z-[1] bg-[#FDFBF7] px-5 pb-16 pt-10 md:px-10 md:pb-20 lg:px-20 lg:pb-[60px] lg:pt-0">
        <div className="relative mx-auto flex min-h-0 w-full max-w-[1750px] flex-col gap-12 xl:h-[560px] xl:flex-row xl:items-stretch xl:gap-0">
          {/* Copy */}
          <div className="relative z-[1] flex w-full max-w-[620px] flex-col xl:pt-[93px]">
            <SectionLabel>The Problem</SectionLabel>

            <h2 className="mt-8 max-w-[620px] font-display text-[36px] font-normal leading-none text-[#0A0705] md:text-[44px] lg:mt-[32px] lg:text-[48px] lg:leading-[48px]">
              Clean water is still a daily struggle.
            </h2>

            <p className="mt-6 max-w-[520px] font-sans text-[16px] font-normal leading-[22px] text-[#667371] lg:mt-[22.75px]">
              In many communities, families spend hours every day walking to collect water. The nearest
              safe source is often far from home, and the journey pulls children out of school and
              parents away from work.
            </p>

            <p className="mt-5 max-w-[540px] font-sans text-[16px] font-normal leading-[22px] text-[#667371] lg:mt-[32.25px]">
              Without a reliable well nearby, people rely on distant or unsafe sources. Time that
              could go to learning, earning, and care is lost to a basic need that should already be
              close at hand.
            </p>
          </div>

          {/* Images — elders 420px top-right + girl 280×397 overlapping @ top 280 */}
          <div className="relative mx-auto h-[360px] w-full max-w-[640px] shrink-0 sm:h-[440px] xl:absolute xl:right-0 xl:top-0 xl:mx-0 xl:h-[560px] xl:w-[calc(100%-620px)] xl:max-w-[900px]">
            {/* Elders — Figma container: height 420, radius 28, right-aligned */}
            <div className="absolute right-0 top-0 h-[220px] w-[78%] overflow-hidden rounded-[28px] bg-[#e2e2e2] sm:h-[280px] xl:h-[420px] xl:w-[calc(100%-172px)]">
              <Image
                src="/images/about-elders.jpg"
                alt="Community elders discussing plans beside a water well site"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, 620px"
                priority
              />
            </div>

            {/* Girl — Figma: 280px tall, ~398px wide, top 280, 4px #FDFBF7 border */}
            <div className="absolute bottom-0 left-0 z-[1] h-[160px] w-[55%] overflow-hidden rounded-[28px] border-4 border-[#FDFBF7] bg-[#e2e2e2] sm:h-[220px] xl:bottom-auto xl:left-0 xl:top-[280px] xl:h-[280px] xl:w-[398px]">
              <Image
                src="/images/about-girl-water.jpg"
                alt="A young girl carrying clean water home along a village path"
                fill
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 60vw, 398px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leader vision */}
      <section className="bg-[#F8F4ED]">
        <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center gap-10 px-5 py-16 text-center md:px-10 lg:flex-row lg:items-center lg:gap-16 lg:py-20 lg:text-left">
          <figure className="w-full max-w-[300px] shrink-0 lg:max-w-[340px]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#e2e2e2]">
              <Image
                src="/images/ceo.webp"
                alt="Muhammad Bin Majid of WellWill"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 300px, 340px"
              />
            </div>
            <figcaption className="mt-5 text-center lg:text-left">
              <p className="font-display text-[24px] font-normal leading-8 text-[#0A0705]">
                Muhammad Bin Majid
              </p>
              <p className="mt-1 font-sans text-[13px] font-normal uppercase tracking-[2.4px] text-[#C7672F]">
                MBM · Leadership
              </p>
            </figcaption>
          </figure>

          <div className="min-w-0 max-w-[640px]">
            <div className="flex justify-center lg:justify-start">
              <SectionLabel>OUR VISION</SectionLabel>
            </div>
            <h2 className="mt-5 font-display text-[32px] font-normal leading-[1.15] text-heading md:text-[40px] lg:mt-6 lg:text-[44px] lg:leading-[48px]">
              Every act of kindness can grow into lasting change.
            </h2>
            <div className="mt-7 space-y-5 font-sans text-[16px] font-normal leading-[26px] text-[#524D47] md:text-[17px] md:leading-[28px]">
              <p>
                Muhammad Bin Majid&apos;s (MBM) vision is to build a world where every act of kindness
                can grow into lasting change. He believes that meaningful impact begins with simple
                ideas, empowered people, and a willingness to take action.
              </p>
              <p>
                Through WellWill, his ambition is to inspire a new generation of changemakers,
                connect communities across borders, and turn compassion into practical solutions,
                starting with access to safe, reliable water and expanding into initiatives that help
                people and communities live healthier, stronger, and more hopeful lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our values — Figma 1910×668, four columns from left 72 */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1910px] px-5 py-16 md:px-10 lg:px-[72px] lg:pb-24 lg:pt-[109px] min-[1400px]:h-[668px] min-[1400px]:pb-[72px]">
          <SectionLabel>OUR VALUES</SectionLabel>
          <h2 className="mt-6 max-w-[585px] font-display text-[36px] font-normal leading-[1.05] text-heading md:text-[44px] lg:mt-[25px] lg:text-[48px] lg:leading-[48px]">
            The <em className="italic text-gold">principles</em> behind every well.
          </h2>

          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:mt-[58px] xl:grid-cols-4 xl:gap-x-5">
            {values.map((item) => (
              <li key={item.title}>
                <div className="grid size-12 place-items-center rounded-full bg-primary text-white">
                  <item.icon className="size-5" />
                </div>
                <div className="mt-8 h-px w-full bg-[#DFD8CC]" />
                <h3 className="mt-7 font-display text-[24px] font-normal leading-8 text-[#0A0705]">
                  {item.title}
                </h3>
                <p className="mt-[18px] max-w-[424px] font-sans text-[14px] font-normal leading-[23px] text-paragraph">
                  {item.copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we work — Figma 1910×715.5, #F8F4ED, three steps on a divider */}
      <section className="bg-[#F8F4ED]">
        <div className="mx-auto w-full max-w-[1910px] px-5 py-16 md:px-10 lg:min-h-[716px] lg:px-[72px] lg:pb-16 lg:pt-[125px]">
          <SectionLabel>HOW WE WORK</SectionLabel>
          <h2 className="mt-2 max-w-[650px] font-display text-[36px] font-normal leading-[1.05] text-[#0A0705] md:text-[44px] lg:mt-[9px] lg:text-[48px] lg:leading-[48px]">
            From a community&apos;s request to a lasting well.
          </h2>

          <div className="relative mt-14 lg:mt-[74px]">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-6 hidden h-px bg-[#DFD8CC] xl:block"
            />
            <ol className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-16">
            {workSteps.map((step) => (
              <li key={step.n} className="relative">
                <div className="relative z-[1] grid size-12 place-items-center rounded-full bg-[#006C6F] font-sans text-[14px] font-semibold leading-5 text-[#FDFBF7]">
                  {step.n}
                </div>
                <p className="mt-7 font-sans text-[12px] font-normal uppercase leading-4 tracking-[3.6px] text-[#C7672F]">
                  {step.label}
                </p>
                <h3 className="mt-[13px] font-display text-[30px] font-normal leading-9 text-[#0A0705]">
                  {step.title}
                </h3>
                <p className="mt-5 max-w-[378px] font-sans text-[16px] font-normal leading-[26px] text-[#524D47]">
                  {step.copy}
                </p>
              </li>
            ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Support transparency — image 643×560, stats #005256 */}
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1910px] items-center gap-10 px-5 py-16 md:px-10 xl:grid-cols-[minmax(0,643px)_minmax(0,1fr)] xl:gap-x-[80px] xl:px-20 xl:py-[36px]">
          <div className="relative h-[420px] overflow-hidden rounded-[28px] sm:h-[500px] lg:h-[560px]">
            <Image
              src="/images/about-engineer.png"
              alt="A field engineer recording notes beside a finished water well"
              fill
              className="object-cover object-[center_30%]"
              sizes="(max-width: 1024px) 100vw, 643px"
            />
          </div>

          <div className="min-w-0 lg:pt-[32px]">
            <h2 className="max-w-[960px] font-display text-[36px] font-normal leading-[1.05] text-[#0A0705] md:text-[44px] lg:text-[48px] lg:leading-[48px]">
              You should always know where your support goes.
            </h2>
            <p className="mt-8 max-w-[960px] font-sans text-[16px] font-normal leading-7 text-[#524D47] md:text-[18px] md:leading-7">
              Every contribution is tied to a real project with a real location, budget, and timeline.
              Supporters can follow each well from survey to completion — and after that, through the
              years of care that keep it flowing.
            </p>

            <dl className="mt-8 max-w-[960px]">
              {supportStats.map((stat, index) => (
                <div
                  key={stat.value}
                  className={`grid grid-cols-[112px_minmax(0,1fr)] items-center gap-4 py-6 sm:grid-cols-[128px_minmax(0,1fr)] ${
                    index === 0 ? "pt-2" : "border-t border-[#EEE8DE]"
                  }`}
                >
                  <dt className="font-display text-[32px] font-normal leading-10 text-[#005256] sm:text-[36px]">
                    {stat.value}
                  </dt>
                  <dd className="font-sans text-[16px] font-normal leading-6 text-[#524D47]">{stat.copy}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Closing CTA — Figma 548px, dusk photo, gold italic heading */}
      <section className="relative isolate flex min-h-[420px] w-full items-center justify-center overflow-hidden lg:h-[548px]">
        <Image
          src="/images/about-community.png"
          alt="A family walking home past a village water well at dusk"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0, 24, 25, 0.75) 0%, rgba(0, 24, 25, 0.65) 50%, rgba(0, 24, 25, 0.85) 100%)",
          }}
        />
        <div className="relative z-[1] flex w-full max-w-[963px] flex-col items-center px-5 py-16 text-center">
          <h2 className="font-display text-[40px] font-normal italic leading-[1.05] md:text-[52px] lg:text-[60px] lg:leading-[60px]">
            <span className="text-gold">Be Part</span>{" "}
            <span className="text-white">of Something That Lasts.</span>
          </h2>
          <p className="mt-7 max-w-[642px] font-sans text-[16px] font-normal leading-[22px] text-[rgba(248,244,237,0.85)] md:text-[18px]">
            A well built today keeps giving for years. Your support becomes part of that long story.
          </p>
          <div className="mt-12">
            <Button href="/fund-a-well" className="h-14">
              Request a Well
            </Button>
          </div>
        </div>
      </section>

    </>
  );
}
