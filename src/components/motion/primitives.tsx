"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
  type HTMLMotionProps,
  type Transition,
  type Variants,
} from "motion/react";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

export const revealTransition: Transition = {
  duration: 0.85,
  ease: EASE,
};

export const staggerTransition = (delayChildren = 0.08, staggerChildren = 0.1): Transition => ({
  delayChildren,
  staggerChildren,
});

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 },
};

const softRevealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const scaleRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 1.06 },
  visible: { opacity: 1, scale: 1 },
};

const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
  once?: boolean;
  variant?: "up" | "soft" | "fade" | "scale";
} & Omit<HTMLMotionProps<"div">, "children" | "variants" | "initial" | "animate" | "whileInView">;

export function Reveal({
  children,
  className,
  delay = 0,
  amount = 0.25,
  once = true,
  variant = "up",
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const variants =
    variant === "soft"
      ? softRevealVariants
      : variant === "fade"
        ? fadeVariants
        : variant === "scale"
          ? scaleRevealVariants
          : revealVariants;

  if (reduce) {
    return (
      <div className={className} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      transition={{ ...revealTransition, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const StaggerContext = createContext(false);

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  amount?: number;
  once?: boolean;
};

export function Stagger({
  children,
  className,
  delay = 0.06,
  stagger = 0.1,
  amount = 0.2,
  once = true,
}: StaggerProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <StaggerContext.Provider value={true}>
      <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, amount, margin: "0px 0px -6% 0px" }}
        variants={{
          hidden: {},
          visible: {
            transition: staggerTransition(delay, stagger),
          },
        }}
      >
        {children}
      </motion.div>
    </StaggerContext.Provider>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  variant?: "up" | "soft" | "fade" | "scale";
} & Omit<HTMLMotionProps<"div">, "children" | "variants">;

export function StaggerItem({
  children,
  className,
  variant = "up",
  ...rest
}: StaggerItemProps) {
  const inStagger = useContext(StaggerContext);
  const reduce = useReducedMotion();
  const variants =
    variant === "soft"
      ? softRevealVariants
      : variant === "fade"
        ? fadeVariants
        : variant === "scale"
          ? scaleRevealVariants
          : revealVariants;

  if (reduce || !inStagger) {
    return (
      <div className={className} {...(rest as React.HTMLAttributes<HTMLDivElement>)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      transition={revealTransition}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

type HeroRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/** Immediate entrance for above-the-fold hero content (not scroll-triggered). */
export function HeroReveal({ children, className, delay = 0, y = 28 }: HeroRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ...revealTransition, delay, duration: 0.9 }}
    >
      {children}
    </motion.div>
  );
}

type HeroMediaProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Premium hero media (stronger than competitor):
 * 1) entrance fade + blur clear + zoom settle
 * 2) slow continuous ken-burns "living" photo
 * 3) scroll parallax drift
 */
export function HeroMedia({ children, className }: HeroMediaProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const parallaxScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div
        className="absolute inset-[-5%] h-[110%] w-[110%] will-change-transform"
        style={{ y, scale: parallaxScale }}
      >
        <motion.div
          className="absolute inset-0 h-full w-full"
          initial={{ opacity: 0, scale: 1.18, filter: "blur(8px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.2, ease: EASE }}
        >
          <motion.div
            className="absolute inset-0 h-full w-full will-change-transform"
            animate={{
              scale: [1, 1.07, 1],
              x: ["0%", "1.4%", "0%"],
              y: ["0%", "-1%", "0%"],
            }}
            transition={{
              duration: 26,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

type MaskRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Clip-path text/mask reveal for premium headline entrances. */
export function MaskReveal({ children, className, delay = 0 }: MaskRevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ ...revealTransition, delay, duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

type ScrollCueProps = {
  href?: string;
  className?: string;
};

/** Bouncing scroll indicator for hero sections. */
export function ScrollCue({ href = "#content", className = "" }: ScrollCueProps) {
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={href}
      aria-label="Scroll to content"
      className={`absolute bottom-10 left-1/2 z-30 -translate-x-1/2 ${className}`}
      initial={reduce ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.6 }}
    >
      <span className="scroll-cue grid size-12 place-items-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path
            d="M4.5 6.75 9 11.25l4.5-4.5"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </motion.a>
  );
}

type FloatingWaveProps = {
  className?: string;
  src?: string;
};

/** Soft floating motion for decorative hero waves. */
export function FloatingWave({
  className,
  src = "/images/hero-wave.png",
}: FloatingWaveProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={className}
      animate={reduce ? undefined : { y: [0, -10, 0], x: [0, 8, 0] }}
      transition={
        reduce
          ? undefined
          : { duration: 10, repeat: Infinity, ease: "easeInOut" }
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" className="h-full w-full max-w-none" />
    </motion.div>
  );
}

type ZoomImageProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Direction the frame enters from */
  from?: "up" | "left" | "right";
  hoverScale?: number;
};

/**
 * Competitor-style image animation:
 * frame slides/scales into view, photo zooms from 1.12 → 1, then soft hover zoom.
 */
export function ZoomImage({
  children,
  className,
  delay = 0,
  from = "up",
  hoverScale = 1.05,
}: ZoomImageProps) {
  const reduce = useReducedMotion();
  const offset =
    from === "left" ? { x: -48, y: 24 } : from === "right" ? { x: 48, y: 24 } : { x: 0, y: 40 };

  if (reduce) {
    return <div className={`overflow-hidden ${className ?? ""}`}>{children}</div>;
  }

  return (
    <motion.div
      className={`group overflow-hidden ${className ?? ""}`}
      initial={{ opacity: 0, scale: 0.94, ...offset }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.95, delay, ease: EASE }}
    >
      <motion.div
        className="relative h-full min-h-full w-full will-change-transform"
        initial={{ scale: 1.14 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 1.35, delay: delay + 0.05, ease: EASE }}
        whileHover={{ scale: hoverScale }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

type CountUpProps = {
  value: string;
  className?: string;
};

/** Animates numeric prefixes like 50+, 15K+, 88%, 15 yrs. */
export function CountUp({ value, className }: CountUpProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? Number(match[1]) : NaN;
  const suffix = match?.[2] ?? "";
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (reduce || Number.isNaN(target)) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    let frame = 0;
    const duration = 1100;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Number.isInteger(target)
        ? Math.round(target * eased)
        : Math.round(target * eased * 10) / 10;
      setDisplay(`${current}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, suffix, target, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

type HoverLiftProps = {
  children: ReactNode;
  className?: string;
  y?: number;
};

export function HoverLift({ children, className, y = -6 }: HoverLiftProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      whileHover={{ y }}
      transition={{ type: "spring", stiffness: 320, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}
