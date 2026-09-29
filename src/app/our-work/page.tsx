import type { Metadata } from "next";
import { ServicesView } from "@/app/services/page";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "See the wells we build with communities, from first survey to water that stays close to home for years.",
  alternates: { canonical: "/our-work" },
};

export default function OurWorkPage() {
  return (
    <ServicesView
      hero={{
        label: "OUR WORK",
        title: (
          <>
            <span className="block">Wells in the ground.</span>
            <span className="block">
              Water in <em className="italic">daily life.</em>
            </span>
          </>
        ),
        description:
          "Follow the projects we build with communities: surveyed with care, constructed locally, and sustained long after the ribbons come down.",
        image: "/images/our-work-bg.png",
        imageAlt: "Hands catching clean water from a village tap beside green fields",
        imagePosition: "object-[72%_center]",
        primaryAction: { href: "/fund-a-well", label: "Request a Well" },
        secondaryAction: { href: "/projects", label: "Browse Projects" },
      }}
    />
  );
}
