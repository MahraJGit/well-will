import Image from "next/image";
import { Button } from "./Button";
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
 * Used by Services, Our Work, Projects, and Community Stories.
 */
export function PageHero({
  label,
  title,
  description,
  image,
  imageAlt,
  imagePosition = "object-[50%_45%]",
  actions,
  showSocial = false,
  children,
}: Props) {
  return (
    <section className="relative z-10 isolate h-[calc(100dvh+120px)] min-h-[760px] w-full overflow-hidden bg-black text-white">
      <div className="relative flex h-full w-full flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className={`object-cover ${imagePosition}`}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0) -7.12%, #000000 100%)",
            }}
          />
        </div>

        <div className="pointer-events-none absolute bottom-[-36px] left-1/2 z-[1] h-[1941px] w-[3556px] max-w-none -translate-x-1/2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/hero-wave.png" alt="" className="h-full w-full max-w-none" />
        </div>

        <div className="relative z-[2] flex w-full flex-col items-start px-5 py-28 md:px-10 lg:px-20">
          <span className="mb-6 inline-flex h-[26px] items-center rounded-full border border-[rgba(253,251,247,0.25)] bg-[rgba(253,251,247,0.15)] px-4 text-[13px] font-medium leading-4 text-[#FDFBF7]">
            {label}
          </span>

          <div className="flex w-full max-w-[768px] flex-col items-start gap-8">
            <h1 className="w-full font-display text-[40px] font-normal leading-[0.94] text-[#FDFBF7] md:text-[52px] lg:text-[64px] lg:leading-[60px]">
              {title}
            </h1>

            <p className="max-w-[576px] font-sans text-[16px] font-normal leading-[22px] text-white/85 md:text-[18px]">
              {description}
            </p>

            {actions?.length ? (
              <div className="flex flex-wrap items-center gap-4">
                {actions.map((action) => (
                  <Button
                    key={action.href + action.label}
                    href={action.href}
                    variant={action.variant ?? "primary"}
                    showArrow={action.variant !== "ghost"}
                    className={
                      action.variant === "ghost"
                        ? "h-[51px] w-auto px-4 text-[16px] lg:w-[189px]"
                        : "h-14"
                    }
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            ) : null}

            {showSocial ? <SocialLinks className="mt-2" /> : null}

            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
