import { salonImage } from "@/data/images";

export type AboutTeamMember = {
  id:
    | "victoria"
    | "logen"
    | "alex"
    | "edith"
    | "michelle"
    | "selena";
  image: string;
  layout: "feature" | "wide" | "portrait" | "tall";
  /** Desktop grid column start (1–12). Omit for auto placement. */
  colStart?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
};

export const aboutHeroImage = {
  src: "/assets/Team/Victoria-Cantu.jpeg",
  alt: "Victoria Cantu, founder of Mane Rumor, editorial portrait",
};

export const aboutPhilosophyImage = {
  src: salonImage(28),
  alt: "Soft light across healthy dimensional hair",
};

export const aboutVictoriaImage = {
  src: "/assets/Team/Victoria-Cantu.jpeg",
  alt: "Victoria Cantu in the Mane Rumor atelier",
};

export const aboutValuesImages = {
  craft: {
    src: salonImage(29),
    alt: "Editorial hair craftsmanship detail",
  },
  atmosphere: {
    src: salonImage(30),
    alt: "Warm portrait in natural salon light",
  },
};

export const aboutExperienceIds = [
  "consultation",
  "plan",
  "transformation",
  "education",
  "relationship",
] as const;

export type AboutExperienceId = (typeof aboutExperienceIds)[number];

export const aboutValueIds = [
  "healthy",
  "personalized",
  "craftsmanship",
  "education",
  "confidence",
] as const;

export type AboutValueId = (typeof aboutValueIds)[number];

export const aboutTeam: AboutTeamMember[] = [
  {
    id: "victoria",
    image: "/assets/Team/Victoria-Cantu.jpeg",
    layout: "feature",
  },
  {
    id: "logen",
    image: "/assets/Team/Logen-Sjullie.jpeg",
    layout: "wide",
    colStart: 1,
  },
  {
    id: "alex",
    image: "/assets/Team/Alex-Roman.jpeg",
    layout: "portrait",
    colStart: 8,
  },
  {
    id: "edith",
    image: "/assets/Team/Edith-Moreno.jpeg",
    layout: "tall",
    colStart: 1,
  },
  {
    id: "michelle",
    image: "/assets/Team/Michelle-Crilly.jpeg",
    layout: "portrait",
    colStart: 7,
  },
  {
    id: "selena",
    image: "/assets/Team/Selena-Benavides.jpeg",
    layout: "wide",
    colStart: 3,
  },
];
