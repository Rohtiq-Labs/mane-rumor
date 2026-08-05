import { salonImage } from "@/data/images";

export type ServiceMeta = {
  id: string;
  src: string;
  alt: string;
  titleClass: string;
};

export const services: ServiceMeta[] = [
  {
    id: "blondes",
    src: salonImage(9),
    alt: "Luxury blonde balayage",
    titleClass: "font-display text-[clamp(2.6rem,5.4vw,4.6rem)] font-normal leading-[0.98]",
  },
  {
    id: "brunettes",
    src: salonImage(10),
    alt: "Dimensional brunette",
    titleClass:
      "font-display text-[clamp(2.2rem,4.4vw,3.6rem)] font-normal italic leading-[0.98]",
  },
  {
    id: "extensions",
    src: salonImage(11),
    alt: "Hand-tied extensions",
    titleClass:
      "font-display text-[clamp(2rem,3.6vw,3rem)] font-normal uppercase tracking-[0.02em] leading-[0.98]",
  },
  {
    id: "curly",
    src: salonImage(12),
    alt: "Healthy curly hair",
    titleClass:
      "font-display text-[clamp(2.6rem,5.4vw,4.6rem)] font-light leading-[0.98]",
  },
];
