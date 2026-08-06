export type HeroSlide = {
  id: string;
  src: string;
  alt: string;
};

const HERO_DIR = "/assets/desktop-images/hero";

export const heroSlides: HeroSlide[] = [
  {
    id: "hero-01",
    src: `${HERO_DIR}/hero-01.jpeg`,
    alt: "Luxury hair transformation, editorial portrait",
  },
  {
    id: "hero-02",
    src: `${HERO_DIR}/hero-02.jpeg`,
    alt: "Dimensional color and finish, studio look",
  },
  {
    id: "hero-03",
    src: `${HERO_DIR}/hero-03.jpeg`,
    alt: "Handcrafted blonde detail",
  },
  {
    id: "hero-04",
    src: `${HERO_DIR}/hero-04.jpeg`,
    alt: "Rich brunette movement and shine",
  },
  {
    id: "hero-05",
    src: `${HERO_DIR}/hero-05.jpeg`,
    alt: "Signature Mane Rumor hair craft",
  },
];

/** Milliseconds between slide changes — rapid editorial pace */
export const HERO_SLIDE_INTERVAL_MS = 1100;
