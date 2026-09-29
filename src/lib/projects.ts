export type WellType = "Hand pump" | "Bore" | "Machine-drilled";

export type WellProject = {
  id: string;
  owner: string;
  location: string;
  familyMembers: number;
  wellType: WellType;
  estimatedCostAed: number;
  status: "completed";
};

const owners = [
  "Muhammad Akmal",
  "Riaz Ahmed",
  "Mehmood Khan",
  "Ghulam Shehbaz",
  "Ashoo Maai",
  "Haleema Bibi",
  "Bilal Qasim",
  "Imtiaz Ahmed",
  "Nazakat Ali",
  "Ayaz Ahmed",
  "Muhammad Jawaid",
  "Maqsood Khatoon",
  "Muhammad Shakeel",
  "Shabana Bibi",
  "Muhammad Ramazan",
  "Haseen Bibi",
  "Sakeena Maai",
  "Zafran Bibi",
  "Kalsoom Bibi",
  "Sakeena Bibi",
  "Saheena Bibi",
  "Muhammad Amjad",
] as const;

const wellTypes: WellType[] = ["Hand pump", "Bore", "Machine-drilled"];

/** Stable values derived from index so they do not change between renders. */
function familyMembersFor(index: number) {
  return (index % 5) + 4;
}

function costFor(index: number) {
  return 200 + ((index * 7) % 51);
}

export const wellProjects: WellProject[] = owners.map((owner, index) => ({
  id: `WW-RYK-${String(index + 1).padStart(3, "0")}`,
  owner,
  location: "Rahimyar Khan",
  familyMembers: familyMembersFor(index),
  wellType: wellTypes[index % wellTypes.length],
  estimatedCostAed: costFor(index),
  status: "completed",
}));

export const featuredWellProjects = wellProjects.slice(0, 4);
