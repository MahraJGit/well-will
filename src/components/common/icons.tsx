import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function LogoMark({ className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 56 40"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d="M16.2 8.4c0 3.4-2.5 5.8-5.4 5.8S5.4 11.8 5.4 8.4 7.9 2.6 10.8 2.6s5.4 2.4 5.4 5.8Z"
        fill="#E8D5B0"
      />
      <path
        d="M21.8 21.2c-1.2-4.6-4.8-7.4-9.2-7.4-4.3 0-8 2.9-9.2 7.4-.3 1.2.5 2.1 1.6 2.1h15.2c1.1 0 1.9-.9 1.6-2.1Z"
        fill="#E8D5B0"
      />
      <path
        d="M50.6 8.4c0 3.4-2.5 5.8-5.4 5.8s-5.4-2.4-5.4-5.8S42.3 2.6 45.2 2.6s5.4 2.4 5.4 5.8Z"
        fill="#E8D5B0"
      />
      <path
        d="M54.4 21.2c-1.2-4.6-4.8-7.4-9.2-7.4-4.3 0-8 2.9-9.2 7.4-.3 1.2.5 2.1 1.6 2.1h15.2c1.1 0 1.9-.9 1.6-2.1Z"
        fill="#E8D5B0"
      />
      <path
        d="M8 27.5c6.4 7.8 16.2 11.2 20 11.2s13.6-3.4 20-11.2"
        stroke="#C9A36A"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ArrowRight({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true" {...props}>
      <path
        d="M3 8h10M9.2 4.2 13 8l-3.8 3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FacebookIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.2 8.4V6.7c0-.7.5-1 1.1-1h1.6V3h-2.7C11.8 3 11 5 11 6.6v1.8H9v2.7h2V21h3.2v-9.9h2.4l.4-2.7h-2.8Z" />
    </svg>
  );
}

export function InstagramIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function PinterestIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.2 3.2c-4.6 0-7.4 3-7.4 6.8 0 2.3 1.2 4.4 3.3 5.1.2.1.4 0 .4-.2l.3-1.2c0-.2 0-.3-.1-.4-.7-.8-.9-1.8-.9-2.9 0-3 2.4-5.7 6.2-5.7 3.4 0 5.8 2.1 5.8 5.3 0 3.6-1.8 6.1-4.3 6.1-1.3 0-2.3-1.1-2-2.4.4-1.4 1.1-3 1.1-4 0-.9-.5-1.7-1.6-1.7-1.3 0-2.3 1.3-2.3 3.1 0 1.1.4 1.9.4 1.9l-1.5 6.2c-.4 1.8-.1 4.1-.1 4.3 0 .1.1.1.2 0 .8-1.1 1.4-3.1 1.6-4.3l.7-2.6c.4.7 1.5 1.3 2.6 1.3 3.5 0 6-3.2 6-7.5 0-4-3.4-7.1-8.1-7.1Z" />
    </svg>
  );
}

export function LinkedinIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.1 9.3H4.4V20h2.7V9.3ZM5.7 4C4.8 4 4 4.8 4 5.8s.8 1.8 1.7 1.8 1.8-.8 1.8-1.8S6.7 4 5.7 4ZM20 20h-2.7v-5.6c0-1.6-.6-2.5-1.9-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20H11v-7.4c0-1.4 0-2.5-.1-3.3h2.6l.1 1.6h.1c.5-.9 1.7-2 3.6-2 2.4 0 4.3 1.6 4.3 5.1V20Z" />
    </svg>
  );
}

export function YoutubeIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.4 4.6 12 4.6 12 4.6s-7.4 0-9.4.5A3 3 0 0 0 .5 7.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c2 .5 9.4.5 9.4.5s7.4 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-4.8ZM9.6 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

export function MailIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true" {...props}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PhoneIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.2 3.8h2.1l1 4.2-1.4 1.4a12.6 12.6 0 0 0 5.1 5.1l1.4-1.4 4.2 1v2.1c0 .9-.7 1.7-1.6 1.8-7.1.7-13-5.2-12.3-12.3.1-.9.9-1.6 1.8-1.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PinIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 21s6.2-5.1 6.2-10.2A6.2 6.2 0 0 0 12 4.6a6.2 6.2 0 0 0-6.2 6.2C5.8 15.9 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10.6" r="2.1" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ClockIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8.2V12l2.8 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function CheckIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true" {...props}>
      <path d="m3.2 8.2 3.1 3.1 6.5-6.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true" {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true" {...props}>
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}
