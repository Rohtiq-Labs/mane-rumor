import { salonImage } from "@/data/images";

export type ServiceMeta = {
  id: string;
  src: string;
  alt: string;
};

export const services: ServiceMeta[] = [
  {
    id: "blondes",
    src: salonImage(9),
    alt: "Luxury blonde balayage",
  },
  {
    id: "brunettes",
    src: salonImage(10),
    alt: "Dimensional brunette",
  },
  {
    id: "extensions",
    src: salonImage(11),
    alt: "Hand-tied extensions",
  },
  {
    id: "curly",
    src: salonImage(12),
    alt: "Healthy curly hair",
  },
];
