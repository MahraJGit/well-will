import type { Metadata } from "next";
import { Button } from "@/components/common/Button";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Well Will uses the details you share when you request a well or contact us.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="bg-[#FDFBF7] px-5 pb-24 pt-40 md:px-10">
      <div className="mx-auto max-w-[720px]">
        <h1 className="font-display text-[40px] leading-[1.1] text-[#0A0705] md:text-[52px]">Privacy Policy</h1>
        <div className="mt-8 space-y-5 font-sans text-[16px] leading-7 text-[#524D47]">
          <p>
            When you request a well or send a message, we collect the details you type into the form:
            your name, your father&apos;s name, address, phone number, CNIC or ID number, community, and
            village or city.
          </p>
          <p>
            We use that information only to review the request and reply. We do not sell personal
            information, and we do not use it for advertising.
          </p>
          <p>
            To ask about a message you sent, email inquiry@wellwill.com. A team member replies
            within 2–3 working days.
          </p>
        </div>
        <div className="mt-10">
          <Button href="/contact">Contact us</Button>
        </div>
      </div>
    </section>
  );
}
