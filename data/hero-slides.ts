import { salonImage } from "@/data/images";

export type HeroSlide = {
  id: string;
  src: string;
  alt: string;
};

const DESKTOP_HERO_DIR = "/assets/desktop-images/hero";

/** Desktop hero — ≥641px. Do not reuse for mobile. */
export const heroSlides: HeroSlide[] = [
  {
    id: "hero-01",
    src: `${DESKTOP_HERO_DIR}/hero-01.jpeg`,
    alt: "Luxury hair transformation, editorial portrait",
  },
  {
    id: "hero-02",
    src: `${DESKTOP_HERO_DIR}/hero-02.jpeg`,
    alt: "Dimensional color and finish, studio look",
  },
  {
    id: "hero-03",
    src: `${DESKTOP_HERO_DIR}/hero-03.jpeg`,
    alt: "Handcrafted blonde detail",
  },
  {
    id: "hero-04",
    src: `${DESKTOP_HERO_DIR}/hero-04.jpeg`,
    alt: "Rich brunette movement and shine",
  },
  {
    id: "hero-05",
    src: `${DESKTOP_HERO_DIR}/hero-05.jpeg`,
    alt: "Signature Mane Rumor hair craft",
  },
];

/** Mobile hero — ≤640px. Sources from mane-rumor-images only. */
export const mobileHeroSlides: HeroSlide[] = [
  {
    id: "mobile-hero-01",
    src: salonImage(1),
    alt: "Luxury blonde balayage transformation",
  },
  {
    id: "mobile-hero-02",
    src: salonImage(3),
    alt: "Hand-tied extension application",
  },
  {
    id: "mobile-hero-03",
    src: salonImage(8),
    alt: "Editorial portrait, finished hair look",
  },
  {
    id: "mobile-hero-04",
    src: salonImage(14),
    alt: "Dimensional color and soft finish",
  },
  {
    id: "mobile-hero-05",
    src: salonImage(22),
    alt: "Signature Mane Rumor hair craft",
  },
];

/** Milliseconds between slide changes — rapid editorial pace */
export const HERO_SLIDE_INTERVAL_MS = 1100;
