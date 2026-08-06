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
};

export const aboutHeroImage = {
  src: "/assets/Team/Victoria-Cantu.jpeg",
  alt: "Victoria Cantu, founder of Mane Rumor, editorial portrait",
};

export const aboutPhilosophyImage = {
  src: salonImage(28),
  alt: "Soft light across healthy dimensional hair",
};

export const aboutTeam: AboutTeamMember[] = [
  {
    id: "victoria",
    image: "/assets/Team/Victoria-Cantu.jpeg",
  },
  {
    id: "logen",
    image: "/assets/Team/Logen-Sjullie.jpeg",
  },
  {
    id: "alex",
    image: "/assets/Team/Alex-Roman.jpeg",
  },
  {
    id: "edith",
    image: "/assets/Team/Edith-Moreno.jpeg",
  },
  {
    id: "michelle",
    image: "/assets/Team/Michelle-Crilly.jpeg",
  },
  {
    id: "selena",
    image: "/assets/Team/Selena-Benavides.jpeg",
  },
];
