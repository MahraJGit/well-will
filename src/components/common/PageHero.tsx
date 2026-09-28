import Image from "next/image";
import { Button } from "./Button";
import { SectionLabel } from "./SectionLabel";
import { SocialLinks } from "./SocialLinks";

type Action = {
  href: string;
  label: string;
  variant?: "primary" | "ghost" | "muted";
};

type Props = {
  label: string;
  title: React.ReactNode;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  actions?: Action[];
  showSocial?: boolean;
  children?: React.ReactNode;
};

/**
 * Shared page hero — same height as About: screen height plus 120px, copy centered.
 * Gradient stays the original left-to-right fade.
 */
export function PageHero({
  label,
  title,
  description,
  image,
  imageAlt,
  imagePosition = "object-[72%_center]",
  actions,
  showSocial = true,
  children,
}: Props) {
  return (
    <section className="relative z-10 isolate h-[calc(100dvh+120px)] min-h-[760px] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className={`object-cover ${imagePosition}`}
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
          <SectionLabel tone="light">{label}</SectionLabel>

          <h1 className="mt-6 font-display text-[40px] font-normal leading-[0.94] tracking-[-0.01em] text-white md:text-[52px] md:leading-[0.94] lg:text-[64px] lg:leading-[60px]">
            {title}
          </h1>

          <p className="mt-5 max-w-[433px] font-sans text-[16px] font-medium leading-[22px] tracking-[-0.01em] text-white md:text-[18px]">
            {description}
          </p>

          {actions?.length ? (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {actions.map((action) => (
                <Button
                  key={action.href + action.label}
                  href={action.href}
                  variant={action.variant ?? "primary"}
                  showArrow={action.variant !== "ghost"}
                  className={
                    action.variant === "ghost"
                      ? "h-[51px] px-4 text-[16px] lg:w-[189px]"
                      : "h-14"
                  }
                >
                  {action.label}
                </Button>
              ))}
            </div>
          ) : null}

          {showSocial ? <SocialLinks className="mt-10" /> : null}

          {children}
        </div>
      </div>
    </section>
  );
}
