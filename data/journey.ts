export type JourneyStepMeta = {
  id: string;
  contentSide: "a" | "b";
};

export const journeySteps: JourneyStepMeta[] = [
  { id: "consultation", contentSide: "a" },
  { id: "plan", contentSide: "b" },
  { id: "application", contentSide: "a" },
  { id: "transformation", contentSide: "b" },
  { id: "aftercare", contentSide: "a" },
];
