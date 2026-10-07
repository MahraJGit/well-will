import { site } from "@/lib/site";

const items = [
  { href: site.social.facebook, label: "Facebook", src: "/icons/facebook.svg" },
  { href: site.social.instagram, label: "Instagram", src: "/icons/instagram.svg" },
  { href: site.social.pinterest, label: "Pinterest", src: "/icons/pinterest.svg" },
  { href: site.social.linkedin, label: "LinkedIn", src: "/icons/linkedin.svg" },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul
      className={`flex w-[200px] flex-row items-start gap-2 p-0 ${className}`}
    >
      {items.map(({ href, label, src }) => (
        <li key={label} className="shrink-0 list-none">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="social-chip box-border flex size-11 flex-row items-center justify-center rounded-full border border-white/80 backdrop-blur-[33.5px]"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(27, 31, 63, 0.16), rgba(27, 31, 63, 0.16)), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" width={24} height={24} className="size-6" />
          </a>
        </li>
      ))}
    </ul>
  );
}
