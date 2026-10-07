type Props = {
  children: React.ReactNode;
  tone?: "light" | "gold" | "neu";
};

export function SectionLabel({ children, tone = "gold" }: Props) {
  if (tone === "light") {
    return (
      <span className="inline-flex w-fit items-center rounded-full border border-white/26 bg-[rgba(27,31,63,0.16)] px-4 py-[7px] text-[14px] font-medium uppercase tracking-[-0.14px] text-white backdrop-blur-[8px]">
        {children}
      </span>
    );
  }

  if (tone === "neu") {
    return (
      <span className="neu-label inline-flex h-[38px] w-fit items-center rounded-full px-4 py-[7px] text-[16px] font-semibold leading-[22px] tracking-[-0.01em]">
        {children}
      </span>
    );
  }

  return (
    <span className="inline-flex h-[38px] w-fit items-center rounded-full border border-gold bg-[rgba(217,168,108,0.2)] px-4 py-[7px] text-[18px] font-semibold leading-[22px] tracking-[-0.01em] text-gold">
      {children}
    </span>
  );
}
