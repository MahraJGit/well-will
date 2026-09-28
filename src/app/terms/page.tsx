import type { Metadata } from "next";
import { Button } from "@/components/common/Button";

export const metadata: Metadata = {
  title: "Terms",
  description: "How to use the Wells of Punjab website and what a well request means.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="bg-[#FDFBF7] px-5 pb-24 pt-40 md:px-10">
      <div className="mx-auto max-w-[720px]">
        <h1 className="font-display text-[40px] leading-[1.1] text-[#0A0705] md:text-[52px]">Terms</h1>
        <div className="mt-8 space-y-5 font-sans text-[16px] leading-7 text-[#524D47]">
          <p>
            This website shares information about water projects built with communities. Submitting a
            request does not reserve a well and does not create a funding agreement.
          </p>
          <p>
            A team member reviews each request and replies within 2–3 working days. Project decisions
            are made with the community and the field team.
          </p>
          <p>Photos and writing on this site belong to Wells of Punjab unless a credit says otherwise.</p>
        </div>
        <div className="mt-10">
          <Button href="/">Back home</Button>
        </div>
      </div>
    </section>
  );
}
