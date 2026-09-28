import { SectionLabel } from "@/components/common/SectionLabel";

export function OurReach() {
  return (
    <section className="relative w-full overflow-x-clip bg-white">
      {/* Soft Water wash — full viewport, no L/R gap */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-screen -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse 42% 70% at 0% 85%, rgba(241,240,234,0.95) 0%, rgba(241,240,234,0) 70%)," +
            "radial-gradient(ellipse 36% 55% at 100% 90%, rgba(241,240,234,0.7) 0%, rgba(241,240,234,0) 68%)," +
            "radial-gradient(ellipse 85% 38% at 50% 100%, #f1f0ea 0%, rgba(241,240,234,0) 58%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-28 pt-16 md:px-10 md:pb-32 min-[1440px]:h-[990px] min-[1440px]:px-0 min-[1440px]:pb-0 min-[1440px]:pt-0">
        <div className="min-[1440px]:absolute min-[1440px]:left-20 min-[1440px]:top-20">
          <SectionLabel>OUR REACH</SectionLabel>
        </div>

        <h2 className="mt-8 max-w-[614px] font-display text-[36px] font-normal leading-[1.1] tracking-[-0.01em] text-heading md:text-[44px] md:leading-[47px] min-[1440px]:absolute min-[1440px]:left-20 min-[1440px]:top-[151px] min-[1440px]:mt-0">
          Clean Water Across
          <br />
          <em className="italic text-gold">Pakistan &amp; UAE</em>
        </h2>

        {/* Map 1280×606 @ 80,304 — Figma exact */}
        <div className="relative mt-10 w-full min-[1440px]:absolute min-[1440px]:left-20 min-[1440px]:top-[304px] min-[1440px]:mt-0 min-[1440px]:h-[606px] min-[1440px]:w-[min(1280px,calc(100%-10rem))]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/our-reach-map.png?v=5"
            alt="Map showing wells and partner communities across Pakistan, the UAE, and beyond"
            width={1280}
            height={606}
            className="h-auto w-full select-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Soft organic cream wave — joins Community Story, full bleed, no map crop */}
      <svg
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 z-20 h-[120px] w-screen -translate-x-1/2 text-cream md:h-[160px] lg:h-[200px]"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        <path d="M0 88C120 48 200 140 320 108C460 68 520 160 680 120C820 84 880 36 1000 72C1140 118 1220 168 1340 128C1388 108 1420 88 1440 84V200H0V88Z" />
        <path
          d="M0 108C140 70 220 150 360 118C500 84 560 168 720 132C860 98 920 52 1040 88C1160 128 1240 170 1360 140C1400 128 1424 112 1440 108V200H0V108Z"
          opacity="0.65"
        />
      </svg>
    </section>
  );
}

/** Full-bleed cream under Our Reach → Community Story (attached, no side inset). */
export function ReachStoryBand({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full overflow-x-clip bg-cream">
      <div className="relative z-10">{children}</div>
    </div>
  );
}
