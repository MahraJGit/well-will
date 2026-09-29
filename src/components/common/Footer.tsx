import Link from "next/link";
import { footerNav, footerResources, site } from "@/lib/site";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  YoutubeIcon,
} from "./icons";
import Image from "next/image";

const footerSocial = [
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: site.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: site.social.youtube, label: "YouTube", Icon: YoutubeIcon },
] as const;

export function Footer() {
  return (
    <footer className="bg-footer font-footer text-[#f7f7f2]">
      {/* Figma footer: 1440×500, padding 80 */}
      <div className="mx-auto flex max-w-[1440px] flex-col justify-between px-5 py-16 md:px-10 lg:px-20 lg:py-20">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,374px)_minmax(0,1fr)] xl:items-start xl:gap-16">
          {/* Brand column */}
          <div className="max-w-[374px]">
            <Link href="/">
              <div>
                <Image src="/images/logo.svg" alt={site.name} width={160} height={160} />
              </div>
            </Link>

            <p className="mt-6 text-[15px] leading-[26px] text-[rgba(230,230,223,0.8)]">
              {site.tagline}
            </p>

            <ul className="mt-6 flex items-center gap-3">
              {footerSocial.map(({ href, label, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid size-10 place-items-center rounded-full bg-white/[0.08] text-white transition-colors hover:bg-white/12"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Nav columns — Figma: Navigate 163 / Resources 163 / Contact 202, gap 58 */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[2.2px] text-gold-soft">
                Navigate
              </p>
              <nav className="mt-6 flex flex-col gap-[14px]">
                {footerNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[15px] leading-[22.5px] text-[rgba(247,247,242,0.92)] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[2.2px] text-gold-soft">
                Resources
              </p>
              <nav className="mt-6 flex flex-col gap-[14px]">
                {footerResources.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[15px] leading-[22.5px] text-[rgba(247,247,242,0.92)] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="col-span-2 md:col-span-1">
              <p className="text-[11px] font-bold uppercase tracking-[2.2px] text-gold-soft">
                Contact
              </p>
              <div className="mt-6 space-y-4 text-[15px] leading-6 text-[rgba(247,247,242,0.92)]">
                <div className="flex items-start gap-3">
                  <PinIcon className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                  <p>
                    {site.location.label}
                    <br />
                    {site.location.lines.join(", ")}
                    <br />
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-white">
                    {site.phone}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 size-4 shrink-0 text-gold-deep" />
                  <a href={`mailto:${site.email}`} className="break-all hover:text-white">
                    {site.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7 text-[13px] leading-[19.5px] text-[rgba(215,215,208,0.7)]">
          <p>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
