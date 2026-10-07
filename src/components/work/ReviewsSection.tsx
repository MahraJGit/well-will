"use client";

import { SectionLabel } from "@/components/common/SectionLabel";
import { Reveal } from "@/components/motion/primitives";
import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    quote:
      "Before the well, my daughters walked more than an hour every morning. Now the water is close to home, and they stay in school.",
    name: "Ayesha Bibi",
    role: "Mother, Rahimyar Khan",
  },
  {
    quote:
      "The team surveyed carefully, trained our caretakers, and returned to check the water quality. It still feels like our well, not someone else's project.",
    name: "Imran Hussain",
    role: "Village Committee Lead",
  },
  {
    quote:
      "We asked for help and they listened first. The hand pump is simple to maintain, and families from nearby streets use it every day.",
    name: "Sakeena Maai",
    role: "Community Elder",
  },
  {
    quote:
      "Supporting this work was clear and transparent. We saw photos from the site and knew exactly where the water would reach.",
    name: "Omar Farooq",
    role: "Well Sponsor, UAE",
  },
  {
    quote:
      "Our schoolyard well changed the day for children. They drink safely at break and no longer leave class to fetch water.",
    name: "Farah Naz",
    role: "Primary School Teacher",
  },
  {
    quote:
      "I used to wake before dawn to queue at a distant hand pump. Having clean water in our lane has given our family time and dignity back.",
    name: "Haleema Bibi",
    role: "Resident, Kot Abdullah",
  },
  {
    quote:
      "As a local engineer, I appreciated how carefully they matched the design to our soil. The well has run reliably through two dry seasons.",
    name: "Bilal Qasim",
    role: "Field Engineer Partner",
  },
  {
    quote:
      "The handover training was practical. We know who checks the pump, how to keep the area clean, and when to call for support.",
    name: "Nazakat Ali",
    role: "Well Caretaker",
  },
  {
    quote:
      "Our mosque committee helped choose the site. Neighbors from three streets share it peacefully, and guests always find water for wudu.",
    name: "Ghulam Shehbaz",
    role: "Mosque Committee Member",
  },
  {
    quote:
      "I sponsored a well for my parents' village. Seeing my mother fill a vessel at the new pump was the most meaningful gift I have given.",
    name: "Sara Khan",
    role: "Donor, Dubai",
  },
  {
    quote:
      "Women in our settlement no longer walk alone after dark for water. The well sits under a light, and evenings feel safer for everyone.",
    name: "Shabana Bibi",
    role: "Community Organizer",
  },
  {
    quote:
      "They documented every stage — survey, drilling, testing — so our donors could follow along. That openness made it easy to ask others to give.",
    name: "Hassan Raza",
    role: "Fundraising Partner",
  },
];

function ArrowIcon({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path
        d={direction === "prev" ? "M12.5 5L7.5 10L12.5 15" : "M7.5 5L12.5 10L7.5 15"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ReviewsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  function updateArrows() {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    setCanPrev(el.scrollLeft > 4);
    setCanNext(maxScroll > 4 && el.scrollLeft < maxScroll - 4);
  }

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const frame = requestAnimationFrame(updateArrows);
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);

    const observer = new ResizeObserver(updateArrows);
    observer.observe(el);

    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
      observer.disconnect();
    };
  }, []);

  function scrollByCard(direction: "prev" | "next") {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-review-card]");
    const amount = card ? card.offsetWidth + 16 : Math.round(el.clientWidth * 0.85);
    el.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  }

  return (
    <section className="bg-white px-5 py-16 md:px-10 md:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1750px] flex-col gap-8 md:gap-10">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[640px]">
            <SectionLabel>Community Voices</SectionLabel>
            <h2 className="mt-5 font-display text-[36px] font-normal leading-[1.08] text-[#0A0705] md:text-[44px] lg:text-[48px]">
              Words from the people{" "}
              <em className="italic text-gold">closest to the water.</em>
            </h2>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard("prev")}
              disabled={!canPrev}
              aria-label="Previous reviews"
              className="grid size-12 place-items-center rounded-full border-2 border-[#001819] bg-white text-[#001819] transition enabled:hover:bg-[#001819] enabled:hover:text-white disabled:border-[#DFD8CC] disabled:text-[#B8B2A8]"
            >
              <ArrowIcon direction="prev" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard("next")}
              disabled={!canNext}
              aria-label="Next reviews"
              className="grid size-12 place-items-center rounded-full border-2 border-[#001819] bg-[#001819] text-white transition enabled:hover:bg-[#003638] disabled:border-[#DFD8CC] disabled:bg-[#E8E4DC] disabled:text-[#B8B2A8]"
            >
              <ArrowIcon direction="next" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div
            ref={scrollerRef}
            className="-mx-5 flex gap-4 overflow-x-auto scroll-smooth px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory md:-mx-10 md:px-10 lg:-mx-20 lg:px-20 [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((review) => (
              <article
                key={review.name}
                data-review-card
                className="neu-card flex w-[300px] shrink-0 snap-start flex-col rounded-[28px] px-6 py-7 sm:w-[340px]"
              >
                <span aria-hidden className="font-display text-[48px] leading-none text-gold">
                  “
                </span>
                <p className="mt-2 flex-1 font-sans text-[15px] leading-7 text-[#524D47] md:text-[16px]">
                  {review.quote}
                </p>
                <div className="mt-8 border-t border-[rgba(196,186,170,0.35)] pt-5">
                  <p className="font-sans text-[15px] font-semibold text-[#0A0705]">{review.name}</p>
                  <p className="mt-1 text-[12px] uppercase tracking-[1.4px] text-[#6E6862]">
                    {review.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
