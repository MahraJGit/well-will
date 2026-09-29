import { PinIcon } from "@/components/common/icons";
import type { WellProject } from "@/lib/projects";

type Props = {
  project: WellProject;
  /** Tighter meta layout for narrow grids (e.g. homepage featured). */
  compact?: boolean;
};

export function WellProjectCard({ project, compact = false }: Props) {
  return (
    <article className="flex h-full flex-col gap-5 rounded-[28px] border border-[#DFD8CC] bg-[#FDFBF7] px-6 py-7">
      {compact ? (
        <div className="flex flex-col gap-1.5">
          <span className="font-sans text-[11px] font-semibold uppercase leading-4 tracking-[1.4px] text-[#005256]">
            {project.id}
          </span>
          <span className="font-sans text-[11px] font-medium uppercase leading-4 tracking-[1.2px] text-[#C7672F]">
            {project.wellType}
          </span>
        </div>
      ) : (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="font-sans text-[12px] font-semibold uppercase leading-4 tracking-[1.8px] text-[#005256]">
            {project.id}
          </span>
          <span className="text-[#DFD8CC]" aria-hidden>
            ·
          </span>
          <span className="font-sans text-[12px] font-medium uppercase leading-4 tracking-[1.4px] text-[#C7672F]">
            {project.wellType}
          </span>
        </div>
      )}

      <div>
        <h3 className="font-display text-[26px] font-normal leading-8 text-[#0A0705] md:text-[28px]">
          {project.owner}
        </h3>
        <div className="mt-3 flex items-center gap-2 text-[#6E6862]">
          <PinIcon className="size-[15px] shrink-0 text-[#006C6F]" />
          <span className="font-sans text-[14px] leading-5">{project.location}</span>
        </div>
      </div>

      <div className="mt-auto grid grid-cols-2 gap-4 border-t border-[#EEE8DE] pt-5">
        <div>
          <p className="font-display text-[28px] font-normal leading-8 text-[#005256]">
            {project.familyMembers}
          </p>
          <p className="mt-1 text-[11px] font-normal uppercase leading-4 tracking-[1.6px] text-[#6E6862]">
            Family members
          </p>
        </div>
        <div>
          <p className="font-display text-[28px] font-normal leading-8 text-[#26211C]">
            {project.estimatedCostAed}{" "}
            <span className="text-[16px] tracking-normal">AED</span>
          </p>
          <p className="mt-1 text-[11px] font-normal uppercase leading-4 tracking-[1.6px] text-[#6E6862]">
            Est. cost
          </p>
        </div>
      </div>
    </article>
  );
}
