"use client";

import { Button } from "@/components/common/Button";
import { SectionLabel } from "@/components/common/SectionLabel";
import { Reveal, ZoomImage } from "@/components/motion/primitives";
import Image from "next/image";

export function CommunityStory() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-[-1497px] z-0 hidden h-[1941px] w-[3556px] opacity-35 lg:block"
        style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}
      >
        <Image src="/images/hero-wave.png" alt="" fill className="object-cover" sizes="3556px" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-5 py-16 md:px-10 md:py-20 xl:h-[957px] xl:gap-14 xl:px-0 xl:py-20">
        <Reveal className="flex w-full max-w-[640px] flex-col items-center gap-[23px] text-center">
          <SectionLabel>COMMUNITY STORY</SectionLabel>
          <h2 className="w-full font-display text-[36px] font-normal leading-[1.12] tracking-[-0.02em] text-footer md:text-[44px] md:leading-[1.12]">
            A better everyday life.
          </h2>
        </Reveal>

        <Reveal
          delay={0.12}
          className="relative w-full max-w-[1108px] overflow-hidden rounded-[40px] bg-white shadow-[0px_20px_40px_rgba(0,0,0,0.04)] sm:rounded-[56px] xl:h-[581px] xl:rounded-tl-[70px] xl:rounded-tr-[70px] xl:rounded-br-[70px] xl:rounded-bl-none"
        >
          <ZoomImage className="relative mx-auto mt-8 h-[320px] w-[92%] max-w-[520px] xl:hidden">
            <Image
              src="/images/community-story-layout-preview.png"
              alt="Community members celebrating clean water from a new well"
              fill
              className="object-contain object-left-top"
              sizes="92vw"
              priority
            />
          </ZoomImage>

          <div className="absolute inset-0 hidden xl:block">
            <ZoomImage
              delay={0.15}
              from="left"
              className="absolute left-20 top-[49px] z-0 h-[480px] w-[353px] overflow-hidden rounded-3xl bg-[#E2E2E2]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/story-frame-main.png"
                alt="Engineer helping a child drink from a new community well"
                width={353}
                height={480}
                className="block h-full w-full object-cover"
              />
            </ZoomImage>

            <ZoomImage
              delay={0.28}
              from="up"
              className="absolute left-[200px] top-[354px] z-[1] h-[213px] w-[296px] overflow-hidden rounded-[15px] bg-[#E2E2E2]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/story-frame-bot.png"
                alt="Child drinking clean water from a pipe"
                width={296}
                height={213}
                className="block h-full w-full object-cover"
              />
            </ZoomImage>

            <ZoomImage
              delay={0.22}
              from="right"
              className="absolute left-[326px] top-[34px] z-[2] h-[188px] w-[256px] overflow-hidden rounded-[17px] bg-[#E2E2E2]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/story-frame-top.png"
                alt="Hands catching clean flowing water"
                width={256}
                height={188}
                className="block h-full w-full object-cover"
              />
            </ZoomImage>
          </div>

          <Reveal delay={0.2} className="relative z-10 px-8 pb-12 pt-6 xl:absolute xl:left-[620px] xl:top-[210px] xl:w-[373px] xl:p-0">
            <h3 className="max-w-[306px] font-display text-[28px] font-normal leading-8 tracking-[-0.88px] text-heading md:text-[32px] md:leading-8">
              More Than a Well. A Better Everyday Life.
            </h3>
            <p className="mt-5 max-w-[373px] text-[16px] font-normal leading-5 tracking-[-0.88px] text-paragraph">
              For families in this Punjab village, clean water is now closer to home. A new
              community well means less time spent searching for water and more time for everyday
              life, family, and opportunity.
            </p>
            <Button
              href="/community-stories"
              className="mt-10 h-14 w-full max-w-[232px] justify-between pl-5 pr-[3px] xl:absolute xl:left-0 xl:top-[263px] xl:mt-0"
            >
              Read Their Story
            </Button>
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
