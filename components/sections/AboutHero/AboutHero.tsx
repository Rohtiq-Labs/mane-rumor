"use client";

import type { ReactElement } from "react";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { useLocale } from "@/context/LocaleContext";
import { aboutHeroImage } from "@/data/about";

export const AboutHero = (): ReactElement => {
  const { dictionary } = useLocale();
  const { hero } = dictionary.aboutPage;

  return (
    <InnerPageHero
      label={hero.label || undefined}
      titleLine1={hero.titleLine1}
      titleLine2={hero.titleLine2}
      support={hero.support}
      image={aboutHeroImage}
      mobileHeight="60vh"
    />
  );
};
