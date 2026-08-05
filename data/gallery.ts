import { salonImage } from "@/data/images";

export type GalleryPiece = {
  id: string;
  src: string;
  alt: string;
  className: string;
};

export const galleryPieces: GalleryPiece[] = [
  {
    id: "p1",
    src: salonImage(1),
    alt: "Luxury blonde balayage transformation",
    className: "md:w-[34%] md:h-[520px] md:top-0 md:left-0",
  },
  {
    id: "p2",
    src: salonImage(2),
    alt: "Dimensional brunette color detail",
    className: "md:w-[28%] md:h-[340px] md:top-[60px] md:left-[38%]",
  },
  {
    id: "p3",
    src: salonImage(3),
    alt: "Hand-tied extension application",
    className: "md:w-[30%] md:h-[620px] md:top-0 md:right-0",
  },
  {
    id: "p4",
    src: salonImage(4),
    alt: "Healthy curly hair styling",
    className: "md:w-[24%] md:h-[300px] md:top-[560px] md:left-[6%]",
  },
  {
    id: "p5",
    src: salonImage(5),
    alt: "Editorial portrait, finished hair look",
    className: "md:w-[32%] md:h-[420px] md:top-[440px] md:left-[34%]",
  },
];

export const galleryHeroImage = {
  src: salonImage(6),
  alt: "Rich dimensional hair color, close editorial detail",
};

export const philosophyImage = {
  src: salonImage(7),
  alt: "Close detail of healthy hair texture",
};

export const artistImage = {
  src: salonImage(8),
  alt: "Portrait of the founder at work",
};
