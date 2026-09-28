import type { Metadata } from "next";
import Image from "next/image";
import { ClockIcon, MailIcon, PinIcon } from "@/components/common/icons";
import { RequestWellForm } from "@/components/request/RequestWellForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Questions about our projects, partnerships, or requesting a well? Send a message and a real person will reply.",
  alternates: { canonical: "/contact" },
};

const details = [
  {
    icon: MailIcon,
    label: "Email",
    value: "hello@zarqawatertrust.org",
    href: "mailto:hello@zarqawatertrust.org",
  },
  {
    icon: PinIcon,
    label: "Field office",
    value: "Lahore, Punjab, Pakistan",
  },
  {
    icon: ClockIcon,
    label: "Response time",
    value: "Within 2–3 working days",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-[#FDFBF7]">
      <section className="relative isolate flex min-h-[460px] w-full items-center justify-center overflow-hidden bg-[#191919] lg:h-[537px]">
        <Image
          src="/images/about-community.png"
          alt="A quiet village water well at golden hour"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-[-10%] h-[280px] w-[480px] rounded-full bg-[rgba(0,133,134,0.25)] blur-[65px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 right-2 size-[480px] rounded-full bg-[rgba(230,129,66,0.15)] blur-[70px]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(0, 24, 25, 0.9) 0%, rgba(0, 24, 25, 0.6) 50%, rgba(0, 24, 25, 0.45) 100%)",
          }}
        />

        <div className="relative z-[1] flex w-full max-w-[1750px] flex-col items-center px-5 pb-16 pt-36 text-center lg:px-20 lg:pb-20 lg:pt-32">
          <span className="inline-flex h-[27px] items-center rounded-full border border-[rgba(253,251,247,0.25)] bg-[rgba(253,251,247,0.15)] px-4 text-[13px] font-medium leading-[13px] text-[#FDFBF7]">
            Get in touch
          </span>
          <h1 className="mt-4 font-display text-[40px] font-normal leading-none text-[#FDFBF7] md:text-[52px] lg:text-[60px] lg:leading-[60px]">
            Let&apos;s talk about <em className="italic text-gold">water.</em>
          </h1>
          <p className="mt-6 max-w-[576px] font-sans text-[16px] font-normal leading-[22px] text-[rgba(248,244,237,0.85)]">
            Questions about our projects, partnerships, or requesting a well? Send us a message and a
            real person will reply.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 lg:px-20 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1750px] items-start gap-12 xl:grid-cols-2 xl:gap-x-16">
          <div>
            <h2 className="font-display text-[32px] font-normal leading-10 text-[#0A0705] md:text-[36px]">
              We read every message.
            </h2>
            <p className="mt-5 max-w-[384px] font-sans text-[16px] font-normal leading-[22px] text-[#524D47]">
              Whether you want to request a well, partner with us, or simply understand our work better
              — we&apos;re glad you reached out.
            </p>

            <ul className="mt-7 flex flex-col gap-8">
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

          <RequestWellForm />
        </div>
      </section>
    </div>
  );
}
