import { salonImage } from "@/data/images";

export type ServiceItemMeta = {
  id: string;
  price: string;
};

export type ServiceCategoryMeta = {
  id: string;
  navLabel: string;
  services: ServiceItemMeta[];
};

export const serviceCatalogue: ServiceCategoryMeta[] = [
  {
    id: "consultations",
    navLabel: "Consultations",
    services: [
      { id: "consultation", price: "Free" },
      { id: "extension-consultation", price: "Free" },
    ],
  },
  {
    id: "color",
    navLabel: "Color",
    services: [
      { id: "gloss", price: "$75+" },
      { id: "gloss-haircut", price: "$125+" },
      { id: "all-over-color", price: "$110+" },
      { id: "all-over-color-haircut", price: "$160+" },
      { id: "root-color", price: "$85+" },
      { id: "root-color-ends", price: "$118+" },
      { id: "root-color-haircut", price: "$135+" },
      { id: "color-melt", price: "$90+" },
      { id: "color-melt-haircut", price: "$140+" },
      { id: "reverse-balayage", price: "$90+" },
      { id: "reverse-balayage-haircut", price: "$140+" },
    ],
  },
  {
    id: "blonding",
    navLabel: "Blonding",
    services: [
      { id: "bleach-tone", price: "$315+" },
      { id: "bleach-tone-haircut", price: "$400+" },
      { id: "mini-custom", price: "$100+" },
      { id: "mini-custom-haircut", price: "$150+" },
      { id: "partial-custom", price: "$175+" },
      { id: "partial-custom-haircut", price: "$225+" },
      { id: "full-custom", price: "$225+" },
      { id: "full-custom-haircut", price: "$275+" },
      { id: "face-frame", price: "$220+" },
      { id: "face-frame-haircut", price: "$305+" },
      { id: "money-piece", price: "$85+" },
      { id: "money-piece-haircut", price: "$135+" },
      { id: "full-highlight", price: "$355+" },
      { id: "full-highlight-haircut", price: "$440+" },
      { id: "half-highlight", price: "$285+" },
      { id: "half-highlight-haircut", price: "$370+" },
      { id: "partial-highlight", price: "$190+" },
      { id: "full-balayage", price: "$355+" },
      { id: "full-balayage-haircut", price: "$440+" },
      { id: "half-balayage", price: "$305+" },
      { id: "half-balayage-haircut", price: "$390+" },
    ],
  },
  {
    id: "cuts-styling",
    navLabel: "Cuts & Styling",
    services: [
      { id: "blow-dry", price: "$65+" },
      { id: "blow-dry-style", price: "$50+" },
      { id: "blow-dry-iron", price: "$75+" },
      { id: "haircut-treatment", price: "$100+" },
      { id: "womens-haircut", price: "$65+" },
      { id: "mens-haircut", price: "$50+" },
      { id: "mens-haircut-beard", price: "$70+" },
      { id: "mens-haircut-beard-brows", price: "$80+" },
      { id: "curly-mens-haircut", price: "$55+" },
      { id: "curly-cut", price: "$95+" },
      { id: "curly-blow-dry", price: "$70+" },
      { id: "kids-haircut", price: "$45+" },
      { id: "bang-trim", price: "$20+" },
    ],
  },
  {
    id: "extensions",
    navLabel: "Extensions",
    services: [
      { id: "extension-install", price: "$250+" },
      { id: "extension-move-up", price: "$125+" },
    ],
  },
  {
    id: "reiki",
    navLabel: "Reiki",
    services: [
      { id: "reiki-standard", price: "$125" },
      { id: "reiki-soul-tie", price: "$185" },
      { id: "reiki-love-magnet", price: "$250+" },
      { id: "reiki-siren", price: "$300+" },
    ],
  },
];

export const servicesHeroImage = {
  src: salonImage(27),
  alt: "Editorial hair detail in soft natural light",
};
