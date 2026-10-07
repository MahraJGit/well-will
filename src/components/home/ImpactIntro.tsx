"use client";

import { Button } from "@/components/common/Button";
import { SectionLabel } from "@/components/common/SectionLabel";
import { CountUp, Reveal, Stagger, StaggerItem, ZoomImage } from "@/components/motion/primitives";
import Image from "next/image";

const stats = [
  { value: "50+", label: "Wells Built", color: "text-primary-deep" },
  { value: "20+", label: "Communities Reached", color: "text-gold-deep" },
  { value: "15K+", label: "People Supported", color: "text-stat-blue" },
  { value: "100%", label: "Projects Verified", color: "text-stat-ink" },
];

function StatBlock({
  stat,
  valueClass,
  labelClass,
}: {
  stat: (typeof stats)[number];
  valueClass: string;
  labelClass: string;
}) {
  return (
    <div className="h-[90px] border-l border-line pl-[25px]">
      <p className={`${valueClass} ${stat.color}`}>
        <CountUp value={stat.value} />
      </p>
      <p className={labelClass}>{stat.label}</p>
    </div>
  );
}

export function ImpactIntro() {
  return (
    <section id="impact" className="relative z-0 scroll-mt-28 bg-white">
      {/* Exact 1440 artboard layout */}
      <div className="relative mx-auto hidden h-[914px] max-w-[1440px] overflow-hidden min-[1440px]:block">
        <ZoomImage
          from="left"
          className="absolute left-20 top-20 h-[459px] w-[310px] rounded-[4px] bg-[#e2e2e2]"
        >
          <Image
            src="/images/well-flowing.png"
            alt="Community members gathering at a village water point"
            fill
            className="object-cover object-[70%_center]"
            sizes="310px"
          />
        </ZoomImage>
        <ZoomImage
          delay={0.12}
          from="left"
          className="absolute left-[328px] top-[253px] h-[459px] w-[353px] rounded-t-[51px] border-4 border-white bg-[#e2e2e2]"
        >
          <Image
            src="/images/engineer-working.png"
            alt="A child drinks clean water while a field engineer looks on"
            fill
            className="object-cover"
            sizes="353px"
          />
        </ZoomImage>
        <div className="absolute left-[737px] top-[240px] w-[614px]">
          <Reveal>
            <SectionLabel>ABOUT US</SectionLabel>
            <h2 className="mt-[36px] max-w-[614px] font-display text-[44px] leading-[45px] tracking-[-0.44px] text-heading">
              <em className="italic text-gold">Water</em> Should Never Be Out of Reach.
            </h2>
            <p className="mt-8 max-w-[579px] text-[16px] leading-normal tracking-[-0.16px] text-paragraph">
              We work with local communities across Punjab to build reliable water wells where
              they&apos;re needed most. From identifying the right location to construction and
              completion, every project is focused on creating safe, lasting access to water.
            </p>
            <Button href="/about" className="mt-8">
              Discover Our Story
            </Button>
          </Reveal>
        </div>
        <Stagger className="absolute left-20 top-[744px] grid w-[1280px] grid-cols-4" stagger={0.08}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <StatBlock
                stat={stat}
                valueClass="text-[56px] font-semibold leading-[56px] tracking-[-1.68px]"
                labelClass="mt-4 text-[12px] font-bold uppercase leading-[18px] tracking-[1.92px] text-paragraph"
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* Responsive fallback below 1440 */}
      <div className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 min-[1440px]:hidden">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="relative mx-auto h-[280px] w-full max-w-[420px] sm:h-[420px]">
            <ZoomImage
              from="left"
              className="absolute left-0 top-0 h-[68%] w-[52%] rounded-[4px] bg-[#e2e2e2]"
            >
              <Image src="/images/about-community.png" alt="" fill className="object-cover" sizes="220px" />
            </ZoomImage>
            <ZoomImage
              delay={0.12}
              from="right"
              className="absolute bottom-0 right-0 h-[72%] w-[62%] rounded-t-[40px] border-4 border-white bg-[#e2e2e2]"
            >
              <Image src="/images/about-engineer.png" alt="" fill className="object-cover" sizes="260px" />
            </ZoomImage>
          </div>
          <Reveal delay={0.1}>
            <SectionLabel>ABOUT US</SectionLabel>
            <h2 className="mt-8 font-display text-[40px] leading-[44px] tracking-[-0.4px] text-heading">
              <em className="italic text-gold">Water</em> Should Never Be Out of Reach.
            </h2>
            <p className="mt-6 max-w-[540px] text-[16px] leading-normal text-paragraph">
              We work with local communities across Punjab to build reliable water wells where
              they&apos;re needed most. From identifying the right location to construction and
              completion, every project is focused on creating safe, lasting access to water.
            </p>
            <Button href="/about" className="mt-8">
              Discover Our Story
            </Button>
          </Reveal>
        </div>
        <Stagger className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4" stagger={0.08}>
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="border-l border-line pl-5">
                <p className={`text-[40px] font-semibold leading-none tracking-[-1.2px] ${stat.color}`}>
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-3 text-[11px] font-bold uppercase leading-snug tracking-[0.08em] text-paragraph">
                  {stat.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
