import { Button } from "@/components/common/Button";
import { SectionLabel } from "@/components/common/SectionLabel";
import { SocialLinks } from "@/components/common/SocialLinks";
import Image from "next/image";

export function HomeHero() {
  return (
    <section className="relative z-10 isolate h-[calc(100dvh+120px)] min-h-[760px] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-home.png"
          alt="Field engineer checking a drilling rig while clean water flows from a newly installed pipe"
          fill
          priority
          className="object-cover object-[72%_center]"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #000000 13.63%, rgba(255, 255, 255, 0) 84.15%)",
          }}
        />
      </div>

      <div className="pointer-events-none absolute bottom-[-36px] left-1/2 z-10 h-[1941px] w-[3556px] max-w-none -translate-x-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-wave.png" alt="" className="h-full w-full max-w-none" />
      </div>

      <div className="relative z-20 flex h-full items-center px-5 py-28 md:px-10 lg:px-20">
        <div className="max-w-[884px]">
          <SectionLabel tone="light">HOME</SectionLabel>

          <h1 className="mt-6 font-display text-[40px] font-normal leading-[1.05] tracking-[-0.01em] text-white md:text-[52px] lg:text-[64px] lg:leading-[60px]">
            Building <em className="italic">Wells</em>.
            <br />
            Changing Lives
            <br />
            Through <em className="italic">Fresh Water.</em>
          </h1>

          <p className="mt-5 max-w-[433px] font-sans text-[16px] font-medium leading-[22px] tracking-[-0.01em] text-white md:text-[18px]">
            Bringing safe, reliable water closer to communities across Punjab—one well at a time.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/fund-a-well" className="h-14">
              Request a Well
            </Button>
            <Button
              href="/services"
              variant="ghost"
              showArrow={false}
              className="h-[51px] px-4 text-[16px] lg:w-[189px]"
            >
              Explore Our Services
            </Button>
          </div>

          <SocialLinks className="mt-10" />
        </div>
      </div>
    </section>
  );
}
