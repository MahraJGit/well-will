import type { Metadata } from "next";
import { ServicesView } from "@/app/services/page";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Our work does not end when construction is complete. We focus on what happens after the water starts flowing.",
  alternates: { canonical: "/our-work" },
};

export default function OurWorkPage() {
  return (
    <ServicesView
      hero={{
        label: "OUR WORK",
        title: (
          <>
            <span className="block">Beyond the</span>
            <span className="block">
              Construction <em className="italic">Site.</em>
            </span>
          </>
        ),
        description:
          "A well becomes part of everyday community life — cared for locally, used daily, and kept useful over time.",
        image: "/images/our-work-bg.png",
        imageAlt: "Hands catching clean water from a village tap beside green fields",
        imagePosition: "object-[72%_center]",
        primaryAction: { href: "/fund-a-well", label: "Request a Well" },
        secondaryAction: { href: "/projects", label: "Browse Projects" },
      }}
      intro={{
        label: "Beyond the Construction Site",
        title: (
          <>
            A well becomes part of everyday{" "}
            <em className="italic text-gold">community life.</em>
          </>
        ),
        paragraphs: [
          "Our work does not end when construction is complete. We focus on what happens after the water starts flowing, how families use the well, who looks after it, and what helps it remain useful over time.",
          "By involving local people throughout the process, each project becomes more than a completed structure. It becomes a shared community resource.",
        ],
      }}
      process={{
        label: "What Shapes Our Work",
        title: (
          <>
            Every community has different <em className="italic">needs.</em>
          </>
        ),
        steps: [
          {
            num: "01",
            title: "Local Needs",
            copy: "We consider how people currently access water and what challenges they face every day.",
            pad: "pb-0 lg:pb-32",
          },
          {
            num: "02",
            title: "Site Conditions",
            copy: "The location and surrounding ground conditions help guide the right approach for each project.",
            pad: "py-0 lg:py-16",
          },
          {
            num: "03",
            title: "Long Term Care",
            copy: "Local caretakers receive practical guidance to help keep the well clean, functional, and cared for.",
            pad: "pt-0 lg:pt-32",
          },
        ],
      }}
      audiences={null}
    />
  );
}
