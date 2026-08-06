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
    openMenu: "مینو کھولیں",
    closeMenu: "مینو بند کریں",
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
    previous: "پچھلی تبدیلی",
    next: "اگلی تبدیلی",
    cta: "تمام تبدیلیاں دیکھیں",
  },
  artist: {
    label: "آرٹسٹ سے ملیں",
    quote: en.artist.quote,
    body1: en.artist.body1,
    body2: en.artist.body2,
    signature: "— بانی، مین رمر",
    cta: "ہمارے بارے میں",
  },
  expertise: {
    label: "دستخطی خدمات",
    title: "جو ہم کرتے ہیں، ارادے کے ساتھ۔",
    support:
      "کاریگری کے چار ستون — آپ کے بالوں کے لیے، کبھی فارمولے سے نہیں۔",
    cta: "تمام خدمات دیکھیں",
    services: en.expertise.services,
  },
  proof: {
    label: "کلائنٹ کی آوازیں",
    title: "افواہ، تصدیق شدہ۔",
    support: "ایماندار رنگ۔ پائیدار ایکسٹینشنز۔ اپائنٹمنٹس جو رکھنے کے قابل ہیں۔",
    quotes: en.proof.quotes,
  },
  book: {
    label: "آپ کی تبدیلی یہاں شروع ہوتی ہے",
    titleBefore: "کچھ بالوں کی کہانیاں",
    titleMid: "شروع ہوتی ہیں",
    titleEm: "ایک",
    titleAfter: "مشاورت سے۔",
    cta: "اپنی مشاورت بک کریں",
    pageCta: "رابطہ کریں",
  },
  servicesPage: en.servicesPage,
  transformationsPage: en.transformationsPage,
  contactPage: en.contactPage,
  aboutPage: en.aboutPage,
  footer: {
    copyright: "مین رمر © 2026",
  },
};
