import { Button } from "@/components/common/Button";
import Image from "next/image";

export function SupportCta() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative mx-auto max-w-[1440px] px-5 py-16 md:px-10 min-[1440px]:h-[737px] min-[1440px]:px-0 min-[1440px]:py-0">
        <div className="min-[1440px]:absolute min-[1440px]:left-[45px] min-[1440px]:top-[238px] min-[1440px]:w-[685px]">
          <h2 className="max-w-[685px] font-display text-[36px] leading-[1.1] tracking-[-0.02em] text-heading md:text-[48px] md:leading-[1.05] lg:text-[56px] lg:leading-[58.5px] lg:tracking-[-0.56px]">
            Together, We Can
            <br />
            Bring <em className="italic text-gold">Water</em> Closer
          </h2>
          <p className="mt-6 max-w-[547px] text-[16px] leading-[22px] text-paragraph lg:mt-[32px]">
            Help create lasting access to clean, safe water for communities that need it most.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 lg:mt-[32px]">
            <Button href="/fund-a-well" className="h-[48px] !text-[16px] [&>span:last-child]:size-[43px]">
              Request a Well
            </Button>
            <Button
              href="/our-work"
              variant="muted"
              showArrow={false}
              className="h-[45px] px-5 text-[15px]"
            >
              See Our Impact
            </Button>
          </div>
        </div>

        <div className="relative mt-10 aspect-[4/5] max-h-[520px] overflow-hidden rounded-[32px] bg-[#e2e2e2] sm:aspect-auto sm:h-[420px] min-[1440px]:absolute min-[1440px]:left-[757px] min-[1440px]:top-8 min-[1440px]:mt-0 min-[1440px]:h-[674px] min-[1440px]:w-[602px] min-[1440px]:max-h-none">
          <Image
            src="/images/how-it-works-photo.png"
            alt="A child drinks clean water as a field engineer and community look on"
            fill
            className="object-cover object-[45%_center]"
            sizes="(max-width: 1024px) 100vw, 602px"
          />
        </div>
      </div>
    </section>
  );
}
