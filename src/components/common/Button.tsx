import Link from "next/link";

type Variant = "primary" | "ghost" | "muted" | "neu" | "neu-primary";

type Props = {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white pl-5 pr-[3px] gap-2.5 shadow-[0_10px_24px_rgba(18,107,114,0.28)]",
  ghost:
    "border border-white/26 px-5 text-white [background-image:linear-gradient(90deg,rgba(27,31,63,0.16),rgba(27,31,63,0.16)),linear-gradient(90deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1))] backdrop-blur-[33.5px]",
  muted: "bg-[#e8e8e2] px-5 text-heading",
  neu: "neu-btn px-5",
  "neu-primary": "neu-btn-primary pl-5 pr-[3px] gap-2.5",
};

function ArrowUpRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <path
        d="M5 15L15 5M15 5H7.5M15 5V12.5"
        stroke="#FFFFFF"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  showArrow = true,
  className = "",
  type = "button",
  onClick,
}: Props) {
  const withArrow = showArrow && (variant === "primary" || variant === "neu-primary");

  const classes = [
    "btn-motion inline-flex h-14 items-center justify-center rounded-[61px] font-sans text-[18px] font-medium leading-[1.3] tracking-[-0.36px]",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <span className="btn-roll relative inline-block overflow-hidden whitespace-nowrap leading-[1.3]">
        <span className="btn-roll-track relative block">
          <span className="block">{children}</span>
          <span className="absolute left-0 top-full block" aria-hidden>
            {children}
          </span>
        </span>
      </span>
      {withArrow ? (
        <span className="btn-arrow relative size-[50px] shrink-0 overflow-hidden rounded-full bg-gold text-white">
          <span className="btn-arrow-track relative block size-full">
            <span className="grid size-full place-items-center">
              <ArrowUpRightIcon className="size-5 text-white" />
            </span>
            <span className="absolute left-0 top-full grid size-full place-items-center" aria-hidden>
              <ArrowUpRightIcon className="size-5 text-white" />
            </span>
          </span>
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}
