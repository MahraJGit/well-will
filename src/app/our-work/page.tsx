import type { Metadata } from "next";
import { ServicesView } from "@/app/services/page";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "See how sustainable water projects help communities across Punjab gain reliable access to clean, safe water.",
  alternates: { canonical: "/our-work" },
};

export default function OurWorkPage() {
  return <ServicesView />;
}
