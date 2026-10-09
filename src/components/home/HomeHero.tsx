"use client";

import { Button } from "@/components/common/Button";
import { SectionLabel } from "@/components/common/SectionLabel";
import { SocialLinks } from "@/components/common/SocialLinks";
import {
  FloatingWave,
  HeroMedia,
  HeroReveal,
  MaskReveal,
  ScrollCue,
} from "@/components/motion/primitives";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative z-10 isolate h-[calc(100dvh+120px)] min-h-[760px] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <HeroMedia className="absolute inset-0">
          <Image
            src="/images/hero-home.png"
            alt="Field engineer checking a drilling rig while clean water flows from a newly installed pipe"
            fill
            priority
            className="object-cover object-[72%_center]"
            sizes="100vw"
          />
        </HeroMedia>
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #000000 13.63%, rgba(255, 255, 255, 0) 84.15%)",
          }}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <FloatingWave className="pointer-events-none absolute bottom-[-36px] left-1/2 z-10 h-[1941px] w-[3556px] max-w-none -translate-x-1/2" />

      <div className="relative z-20 flex h-full items-center px-5 py-28 md:px-10 lg:px-20">
        <div className="max-w-[884px]">
          <HeroReveal delay={0.05}>
            <SectionLabel tone="light">HOME</SectionLabel>
          </HeroReveal>

          <h1 className="mt-6 font-display text-[40px] font-normal leading-[1.05] tracking-[-0.01em] text-white md:text-[52px] lg:text-[64px] lg:leading-[60px]">
            <MaskReveal delay={0.16}>
              <span className="block">
                Building <em className="italic text-gold">Wells</em>.
              </span>
            </MaskReveal>
            <MaskReveal delay={0.28}>
              <span className="block">Changing Lives</span>
            </MaskReveal>
            <MaskReveal delay={0.4}>
              <span className="block">
                Through <em className="italic text-gold">Fresh Water.</em>
              </span>
            </MaskReveal>
          </h1>

          <HeroReveal delay={0.52}>
            <p className="mt-5 max-w-[433px] font-sans text-[16px] font-medium leading-[22px] tracking-[-0.01em] text-white md:text-[18px]">
              Making safe, reliable water accessible to communities around the world.
            </p>
          </HeroReveal>

          <HeroReveal delay={0.64}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/fund-a-well" className="h-14">
                Request a Well
              </Button>
              <Button
                href="/services"
                variant="ghost"
                showArrow={false}
                className="px-4 text-[16px]"
              >
                Explore Our Services
              </Button>
            </div>
          </HeroReveal>

          <HeroReveal delay={0.76}>
            <SocialLinks className="mt-10" />
          </HeroReveal>
        </div>
      </div>

      <ScrollCue href="#impact" />
    </section>
  );
}
