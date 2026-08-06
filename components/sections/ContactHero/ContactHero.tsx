"use client";

import type { ReactElement } from "react";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { useLocale } from "@/context/LocaleContext";
import { contactHeroImage } from "@/data/contact";

export const ContactHero = (): ReactElement => {
  const { dictionary } = useLocale();
  const { hero } = dictionary.contactPage;

  return (
    <InnerPageHero
      label={hero.label}
      titleLine1={hero.titleLine1}
      titleLine2={hero.titleLine2}
      support={hero.support}
      image={contactHeroImage}
      cta={
        hero.cta
          ? { label: hero.cta, href: "#book" }
          : undefined
      }
    />
  );
};
