export const site = {
  name: "Well Will",
  shortName: "Well Will",
  url: "https://wellsofpunjab.org",
  email: "inquiry@wellwill.com",
  phone: "+92 330 2748777",
  locale: "en_PK",
  description:
    "We build safe, reliable water wells with communities across Punjab and stay with each project until the water is tested, flowing, and responsibly handed over.",
  location: {
    label: "WellWill",
    lines: ["Office # 4087, World Trade Center, Islamabad, Pakistan"],
    city: "Islamabad, Pakistan",
  },
  responseTime: "Within 2–3 working days",
  copyrightYear: 2026,
  tagline:
    "We build safe, reliable water wells with communities across Punjab and stay with each project until the water is tested, flowing, and responsibly handed over.",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    pinterest: "https://www.pinterest.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-work", label: "Our Work" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About Us" },
] as const;

export const footerNav = [
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Wells" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Impact" },
  { href: "/community-stories", label: "Stories" },
  { href: "/contact", label: "Contact" },
] as const;

export const footerResources = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "How It Works" },
  { href: "/about", label: "Transparency" },
  { href: "/contact", label: "FAQs" },
] as const;
