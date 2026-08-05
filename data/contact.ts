import { salonImage } from "@/data/images";

export type ContactHours = {
  id: "weekday" | "sunday";
};

export const contactDetails = {
  address: {
    line1: "122 Sheraton Ave.",
    line2: "Austin, TX 78745",
    mapsQuery: "122 Sheraton Ave, Austin, TX 78745",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=122+Sheraton+Ave,+Austin,+TX+78745",
    embedUrl:
      "https://maps.google.com/maps?q=122+Sheraton+Ave,+Austin,+TX+78745&z=15&output=embed",
  },
  phone: {
    display: "(512) 555-0188",
    href: "tel:+15125550188",
  },
  email: {
    display: "hello@manerumor.com",
    href: "mailto:hello@manerumor.com",
  },
  hours: [
    { id: "weekday" as const },
    { id: "sunday" as const },
  ],
};

export const contactHeroImage = {
  src: salonImage(26),
  alt: "Warm boutique salon interior with soft natural light",
};
