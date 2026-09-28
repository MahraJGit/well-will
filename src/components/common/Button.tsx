import Link from "next/link";

type Variant = "primary" | "ghost" | "muted";

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
  primary: "bg-primary text-white pl-5 pr-[3px] gap-2.5",
  ghost:
    "border border-white/26 px-5 text-white [background-image:linear-gradient(90deg,rgba(27,31,63,0.16),rgba(27,31,63,0.16)),linear-gradient(90deg,rgba(0,0,0,0.1),rgba(0,0,0,0.1))] backdrop-blur-[33.5px]",
  muted: "bg-[#e8e8e2] px-5 text-heading",
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
  const withArrow = showArrow && variant === "primary";

  const classes = [
    "inline-flex h-14 items-center justify-center rounded-[61px] font-sans text-[18px] font-medium leading-[1.3] tracking-[-0.36px]",
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      {withArrow ? (
        <span className="grid size-[50px] shrink-0 place-items-center rounded-full bg-gold text-white">
          <ArrowUpRightIcon className="size-5 text-white" />
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
