export const iconNames = [
  "appointment",
  "contact",
  "craniosacral",
  "location",
  "massage",
  "mat",
  "person",
  "reformer",
  "services",
  "structure",
  "time",
] as const;

export type IconName = (typeof iconNames)[number];
