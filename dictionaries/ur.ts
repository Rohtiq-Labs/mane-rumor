import type { Dictionary } from "./types";
import { en } from "./en";

// UR keys mirror EN; English placeholders until translation is ready.
export const ur: Dictionary = {
  ...en,
  brand: {
    ...en.brand,
    name: "مین رمر",
    location: "آسٹن، ٹیکساس",
  },
  nav: {
    experience: "تجربہ",
    about: "ہمارے بارے میں",
    transformations: "تبدیلیاں",
    services: "خدمات",
    contact: "رابطہ",
    book: "بک کریں",
  },
  arrival: {
    headlineBefore: "بال، ایک",
    headlineMid: "کو",
    headlineEm: "اعلیٰ",
    headlineAfter: "افواہ کی طرح۔",
    cta: "مشاورت شروع کریں",
  },
  philosophy: {
    label: "فلسفہ",
    titleLine1: "صحت مند بال اختتام نہیں۔",
    titleLine2: "یہاں سے آغاز ہوتا ہے۔",
    body: en.philosophy.body,
  },
  gallery: {
    label: "تبدیلیاں",
    title: en.gallery.title,
    caption: en.gallery.caption,
  },
  artist: {
    label: "آرٹسٹ سے ملیں",
    quote: en.artist.quote,
    body1: en.artist.body1,
    body2: en.artist.body2,
    signature: "— بانی، مین رمر",
  },
  journey: {
    label: "دستخطی تجربہ",
    title: "ایک رسم، جوڑ کر۔",
    steps: en.journey.steps,
  },
  expertise: {
    services: en.expertise.services,
  },
  proof: {
    quotes: en.proof.quotes,
  },
  book: {
    label: "آپ کی تبدیلی یہاں شروع ہوتی ہے",
    titleBefore: "کچھ بالوں کی کہانیاں",
    titleMid: "شروع ہوتی ہیں",
    titleEm: "ایک",
    titleAfter: "مشاورت سے۔",
    cta: "اپنی مشاورت بک کریں",
  },
  servicesPage: en.servicesPage,
  transformationsPage: en.transformationsPage,
  contactPage: en.contactPage,
  aboutPage: en.aboutPage,
  footer: {
    copyright: "مین رمر © 2026",
  },
};
