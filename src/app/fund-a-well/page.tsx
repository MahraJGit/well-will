import type { Metadata } from "next";
import type { ReactNode, SVGProps } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckIcon, ClockIcon, MailIcon, PinIcon } from "@/components/common/icons";
import { SectionLabel } from "@/components/common/SectionLabel";
import { HeroReveal, Reveal, Stagger, StaggerItem, ZoomImage } from "@/components/motion/primitives";
import { RequestWellForm } from "@/components/request/RequestWellForm";

export const metadata: Metadata = {
  title: "Request a Well",
  description: "Turn your support into clean water for families and communities across Punjab.",
  alternates: { canonical: "/fund-a-well" },
};

const points = [
  "Tell us where water is needed",
  "A team member reviews every request",
  "We reply within 2–3 working days",
];

function StrokeIcon({ children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden className="size-5" {...props}>
      {children}
    </svg>
  );
}

const created = [
  {
    title: "Well Construction",
    copy: "Drilling, casing, and a sealed platform engineered to last.",
    icon: (
      <StrokeIcon>
        <path d="M14.2 4.2h4.2v2.6a3.4 3.4 0 0 1-3.4 3.4h-.8V4.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M6.2 14.2 13.4 7M6.2 14.2 4.4 19.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </StrokeIcon>
    ),
  },
  {
    title: "Materials",
    copy: "Quality pumps, pipes, and concrete sourced responsibly.",
    icon: (
      <StrokeIcon>
        <circle cx="12" cy="12" r="7.2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      </StrokeIcon>
    ),
  },
  {
    title: "Local Implementation",
    copy: "Skilled local teams hired and paid fairly to build it.",
    icon: (
      <StrokeIcon>
        <path d="M12 5.2 19.2 18.2H4.8L12 5.2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </StrokeIcon>
    ),
  },
  {
    title: "Community Access",
    copy: "Safe, shared access designed around everyday village life.",
    icon: (
      <StrokeIcon>
        <circle cx="9" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="15.4" cy="9.6" r="1.8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4.8 17.6c.6-2.2 2.2-3.4 4.2-3.4s3.6 1.2 4.2 3.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M13.2 14.6c1.2-.5 2.4-.4 3.6.4 1 .7 1.6 1.6 1.9 2.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </StrokeIcon>
    ),
  },
  {
    title: "Long-Term Use",
    copy: "Training and maintenance so the water keeps flowing.",
    icon: (
      <StrokeIcon>
        <circle cx="12" cy="12" r="7.4" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 8.2V12l2.6 1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </StrokeIcon>
    ),
  },
];

const details = [
  {
    icon: MailIcon,
    label: "Email",
    value: "inquiry@wellwill.com",
    href: "mailto:inquiry@wellwill.com",
  },
  {
    icon: PinIcon,
    label: "Field office",
    value: "WellWill Office # 4087, World Trade Center, Islamabad, Pakistan",
  },
  {
    icon: ClockIcon,
    label: "Response time",
    value: "Within 2–3 working days",
  },
];

const sideDots = [
  { top: "9%", size: 7 },
  { top: "25%", size: 13 },
  { top: "42%", size: 9 },
  { top: "59%", size: 16 },
  { top: "76%", size: 10 },
  { top: "93%", size: 12 },
];

export default function FundAWellPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#001819_0%,#000000_70%)] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              "repeating-radial-gradient(circle at 16% 22%, rgba(253,251,247,0.07) 0 1px, transparent 1px 72px), repeating-radial-gradient(circle at 86% 82%, rgba(253,251,247,0.05) 0 1px, transparent 1px 88px)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-[26%] h-72 w-[480px] rounded-full bg-[rgba(0,133,134,0.25)] blur-[65px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -right-24 size-[480px] rounded-full bg-[rgba(230,129,66,0.15)] blur-[70px]"
        />
        {sideDots.map((dot) => (
          <span
            key={`l-${dot.top}`}
            aria-hidden
            className="pointer-events-none absolute left-6 rounded-full bg-[rgba(253,251,247,0.15)] lg:left-10"
            style={{ top: dot.top, width: dot.size, height: dot.size }}
          />
        ))}
        {sideDots.map((dot) => (
          <span
            key={`r-${dot.top}`}
            aria-hidden
            className="pointer-events-none absolute right-6 rounded-full bg-[rgba(253,251,247,0.15)] lg:right-10"
            style={{ top: dot.top, width: dot.size, height: dot.size }}
          />
        ))}

        <div className="relative z-[1] mx-auto grid w-full max-w-[1910px] items-center gap-12 px-5 pb-28 pt-36 md:px-10 xl:min-h-[883px] xl:grid-cols-[minmax(0,1fr)_minmax(600px,680px)] xl:gap-12 xl:px-16 xl:pb-24 xl:pt-28">
          <div>
            <HeroReveal>
              <span className="inline-flex h-[26px] items-center rounded-full border border-[rgba(253,251,247,0.25)] bg-[rgba(253,251,247,0.15)] px-4 text-[13px] font-medium leading-4 text-[#FDFBF7]">
                REQUEST A WELL
              </span>
            </HeroReveal>
            <HeroReveal delay={0.12}>
              <h1 className="mt-8 max-w-[970px] font-display text-[40px] font-normal leading-[1.05] text-[#FDFBF7] sm:text-[48px] md:text-[56px] lg:text-[64px] lg:leading-[1.02]">
                Turn Your
                <br className="min-[480px]:hidden" /> <em className="italic text-gold">Support Into</em>
                <br />
                <span className="whitespace-nowrap">
                  <em className="italic text-gold">Clean</em> Water.
                </span>
              </h1>
            </HeroReveal>
            <HeroReveal delay={0.24}>
              <p className="mt-8 max-w-[440px] font-sans text-[16px] font-normal leading-[22px] text-[rgba(248,244,237,0.85)] md:text-[18px]">
                Help bring safe, reliable water closer to families and communities.
              </p>
            </HeroReveal>
            <HeroReveal delay={0.34}>
              <ul className="mt-8 flex flex-col gap-4">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 font-sans text-[16px] leading-6 text-[rgba(248,244,237,0.85)]"
                  >
                    <CheckIcon className="size-[18px] shrink-0 text-white" />
                    {point}
                  </li>
                ))}
              </ul>
            </HeroReveal>
          </div>
          <HeroReveal delay={0.2}>
            <RequestWellForm elevated />
          </HeroReveal>
        </div>
      </section>

      <section className="relative bg-[#F8F4ED] px-5 py-16 md:px-10 lg:px-[81px] lg:py-[90px]">
        <div className="relative mx-auto grid w-full max-w-[1750px] items-start gap-12 xl:grid-cols-2 xl:gap-x-16">
          <Reveal>
            <SectionLabel>WHAT YOUR SUPPORT CREATES</SectionLabel>
            <h2 className="mt-8 max-w-[600px] font-display text-[36px] font-normal leading-[1.05] text-[#0A0705] md:text-[44px] lg:text-[48px]">
              From contribution to a filled container at the well.
            </h2>
            <p className="mt-4 max-w-[414px] font-sans text-[16px] font-normal leading-[22px] text-[#524D47]">
              Every part of a well — and the care it needs — is made possible by support like yours.
            </p>
            <ZoomImage
              delay={0.1}
              from="left"
              className="relative mt-9 h-[280px] overflow-hidden rounded-[28px] sm:h-[360px] xl:mt-[38px] xl:h-[420px]"
            >
              <Image
                src="/images/work-3.jpg"
                alt="Local builders laying the concrete base of a new water well"
                fill
                className="object-cover object-[center_30%]"
                sizes="(max-width: 1024px) 100vw, 676px"
              />
            </ZoomImage>
          </Reveal>

          <Stagger className="flex flex-col lg:pt-2" stagger={0.08}>
            {created.map((item) => (
              <StaggerItem
                key={item.title}
                className="flex items-start gap-6 border-t border-[rgba(223,216,204,0.7)] py-[29px] first:border-t-0 first:pt-2"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#D5F4F2] text-[#005256]">
                  {item.icon}
                </span>
                <div>
                  <h3 className="font-display text-[24px] font-normal leading-8 text-[#0A0705]">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-sans text-[16px] font-normal leading-6 text-[#524D47]">
                    {item.copy}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-[#FDFBF7] px-5 py-16 md:px-10 lg:px-20 lg:py-20">
        <div className="mx-auto w-full max-w-[1750px]">
          <div>
            <h2 className="font-display text-[32px] font-normal leading-10 text-[#0A0705] md:text-[36px]">
              We read every message.
            </h2>
            <p className="mt-5 max-w-[384px] font-sans text-[16px] font-normal leading-[22px] text-[#524D47]">
              Whether you want to request a well, partner with us, or simply understand our work better
              — we&apos;re glad you reached out.
            </p>
            <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#D5F4F2] text-[#005256]">
                    <Icon className="size-[18px]" />
                  </span>
                  <div>
                    <p className="font-sans text-[12px] font-normal uppercase leading-4 text-[#6E6862]">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 block font-sans text-[16px] font-normal leading-6 text-[#17120D]"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-1 font-sans text-[16px] font-normal leading-6 text-[#17120D]">
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative isolate flex min-h-[420px] w-full items-center justify-center overflow-hidden lg:h-[475px]">
        <Image
          src="/images/about-community.png"
          alt="Rural landscape with a working water well at golden hour"
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
        <div className="relative z-[1] flex max-w-[720px] flex-col items-center px-5 py-16 text-center">
          <h2 className="font-display text-[40px] font-normal leading-none text-[#FDFBF7] md:text-[52px] lg:text-[60px] lg:leading-[60px]">
            Together, We Can
            <br />
            Bring Water Closer.
          </h2>
          <p className="mt-6 max-w-[652px] font-sans text-[16px] font-normal leading-7 text-[rgba(248,244,237,0.85)] md:text-[18px]">
            One request can become part of a change a community feels every day.
          </p>
          <Link
            href="#request"
            className="btn-motion mt-8 inline-flex h-[52px] items-center justify-center gap-2 rounded-full bg-[#E68142]/92 px-7 font-sans text-[14px] font-medium leading-5 tracking-[0.35px] text-[#FDFBF7] hover:bg-[#E68142]"
          >
            Request a Well
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
