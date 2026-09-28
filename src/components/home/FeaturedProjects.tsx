import { SectionLabel } from "@/components/common/SectionLabel";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Well #024",
    location: "Chakwal, Punjab",
    image: "/images/featured-well.png",
  },
  {
    title: "Well #024",
    location: "Chakwal, Punjab",
    image: "/images/featured-well.png",
  },
  {
    title: "Well #024",
    location: "Chakwal, Punjab",
    image: "/images/featured-well.png",
  },
];

export function FeaturedProjects() {
  return (
    <section className="bg-white">
      <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-20 md:px-10 lg:px-20 lg:pb-[80px] lg:pt-20">
        <div className="max-w-[614px]">
          <SectionLabel>FEATURED WELL PROJECTS</SectionLabel>
          <h2 className="mt-8 font-display text-[36px] leading-[1.08] tracking-[-0.01em] text-heading sm:text-[44px] md:text-[52px] lg:text-[64px] lg:leading-[1.05]">
            See where water is making a difference
          </h2>
          <p className="mt-8 max-w-[540px] text-[16px] leading-normal tracking-[-0.16px] text-paragraph">
            We work with local communities across Punjab to build reliable water
            wells where they&apos;re needed most. From identifying the right
            location to construction and completion, every project is focused on
            creating safe, lasting access to water.
          </p>
        </div>

        {/* Three cards — Figma row */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <Link
              key={`${project.title}-${index}`}
              href="/our-work"
              aria-label={`View ${project.title}`}
              className="group relative block aspect-[406/520] overflow-hidden rounded-[28px] bg-[#e2e2e2]"
            >
              <Image
                src={project.image}
                alt={`${project.title} in ${project.location}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 406px"
                priority={index === 0}
              />

              {/* Bottom readability gradient (on top of any baked-in gradient) */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 100%)",
                }}
              />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 px-6 pb-6">
                <h3 className="text-[23px] font-semibold leading-[34.5px] text-white">
                  {project.title}
                </h3>
                <div className="mb-1 flex min-w-0 max-w-[55%] items-center gap-2 text-white">
                  <Image
                    src="/icons/pin.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 brightness-0 invert"
                  />
                  <p className="text-[10px] font-medium uppercase leading-tight tracking-[0.12em] sm:text-[11px]">
                    {project.location}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
