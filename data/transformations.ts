import { salonImage } from "@/data/images";

export type TransformationCategory =
  | "blondes"
  | "brunettes"
  | "extensions"
  | "curly";

export type TransformationLayout =
  | "hero"
  | "portrait"
  | "landscape"
  | "offset";

export type TransformationMeta = {
  id: string;
  category: TransformationCategory;
  layout: TransformationLayout;
  afterSrc: string;
  beforeSrc?: string;
  alt: string;
  stylistKey?: "founder" | "artist";
};

export const transformationFilters = [
  "all",
  "blondes",
  "brunettes",
  "extensions",
  "curly",
] as const;

export type TransformationFilter = (typeof transformationFilters)[number];

export const transformationsHeroImage = {
  src: salonImage(13),
  alt: "Finished luxury blonde hair transformation",
};

export const transformations: TransformationMeta[] = [
  {
    id: "soft-dimensional-blonde",
    category: "blondes",
    layout: "hero",
    afterSrc: salonImage(14),
    beforeSrc: salonImage(15),
    alt: "Soft dimensional blonde transformation",
    stylistKey: "founder",
  },
  {
    id: "rich-brunette-depth",
    category: "brunettes",
    layout: "portrait",
    afterSrc: salonImage(16),
    beforeSrc: salonImage(17),
    alt: "Dimensional brunette with rich depth",
    stylistKey: "artist",
  },
  {
    id: "hand-tied-length",
    category: "extensions",
    layout: "landscape",
    afterSrc: salonImage(18),
    beforeSrc: salonImage(19),
    alt: "Hand-tied extension length and density",
    stylistKey: "founder",
  },
  {
    id: "curl-defined-cut",
    category: "curly",
    layout: "offset",
    afterSrc: salonImage(20),
    alt: "Custom curly cut with healthy definition",
    stylistKey: "artist",
  },
  {
    id: "lived-in-blonde",
    category: "blondes",
    layout: "portrait",
    afterSrc: salonImage(21),
    alt: "Lived-in blonde with soft face frame",
    stylistKey: "founder",
  },
  {
    id: "glossy-brunette-melt",
    category: "brunettes",
    layout: "landscape",
    afterSrc: salonImage(22),
    alt: "Glossy brunette color melt",
    stylistKey: "artist",
  },
  {
    id: "extension-volume",
    category: "extensions",
    layout: "offset",
    afterSrc: salonImage(23),
    alt: "Seamless extension volume and movement",
    stylistKey: "founder",
  },
];

export const resultsImagery = {
  healthy: salonImage(24),
  finish: salonImage(25),
};
