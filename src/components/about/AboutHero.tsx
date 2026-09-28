import Image from "next/image";

/**
 * About Us hero — a little taller than the screen, copy vertically centered.
 * Left gradient matches the original frame: solid dark behind the copy, clear photo on the right.
 */
export function AboutHero() {
  return (
    <section className="relative z-10 isolate h-[calc(100dvh+120px)] min-h-[760px] w-full overflow-hidden bg-[#001819] text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-about-team.jpg"
          alt="Field engineers in safety gear standing in front of a drilling rig"
          fill
          priority
          unoptimized
          className="object-cover object-[center_42%]"
          sizes="100vw"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #001819 16.17%, rgba(0, 24, 25, 0.55) 40%, rgba(255, 255, 255, 0) 70.02%)",
          }}
        />
      </div>

      {/* Water 3 — torn edge sits on the bottom of the viewport */}
      <div className="pointer-events-none absolute bottom-[-36px] left-1/2 z-[4] h-[1941px] w-[3556px] max-w-none -translate-x-1/2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/hero-wave.png" alt="" className="h-full w-full max-w-none" />
      </div>

      <div className="relative z-[5] flex h-full items-center px-5 py-28 md:px-10 lg:px-32">
        <div className="max-w-[760px]">
          <span className="inline-flex h-[26px] items-center rounded-full border border-[rgba(253,251,247,0.25)] bg-[rgba(253,251,247,0.15)] px-4 text-[13px] font-medium leading-4 text-[#FDFBF7]">
            ABOUT US
          </span>

          <h1 className="mt-6 max-w-[920px] font-display text-[40px] font-normal italic leading-[0.94] text-white md:text-[52px] lg:text-[64px] lg:leading-[60px]">
            <span className="text-[#D9A86C]">Water</span> Should Never
            <br />
            Be Out of Reach.
          </h1>

          <p className="mt-8 max-w-[700px] font-sans text-[18px] font-normal leading-7 text-[rgba(248,244,237,0.8)] md:text-[24px] md:leading-9 lg:text-[32px] lg:leading-[44px]">
            We are a small team of engineers, organisers, and neighbours working to make safe water
            an ordinary part of daily life in rural communities.
          </p>
        </div>
      </div>
    </section>
  );
}
