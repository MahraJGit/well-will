import type { Metadata } from "next";
import { Inter, Manrope, Radley } from "next/font/google";
import { Footer } from "@/components/common/Footer";
import { Header } from "@/components/common/Header";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Radley({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-radley",
  display: "swap",
});

const footer = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: {
    icon: {
      url: "/images/well-will-favicon.svg",
      type: "image/svg+xml",
    },
  },
  title: {
    default: `${site.name} | Clean water for rural Punjab`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "water wells",
    "Punjab",
    "clean water",
    "Well Will",
    "rural communities",
    "Pakistan",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: site.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
  };

  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${footer.variable}`}>
      <body className="overflow-x-clip font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
