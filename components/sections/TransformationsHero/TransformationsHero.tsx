"use client";

import type { ReactElement } from "react";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { useLocale } from "@/context/LocaleContext";
import { transformationsHeroImage } from "@/data/transformations";

export const TransformationsHero = (): ReactElement => {
  const { dictionary } = useLocale();
  const { hero } = dictionary.transformationsPage;

  return (
    <InnerPageHero
      label={hero.label || undefined}
      titleLine1={hero.titleLine1}
      titleLine2={hero.titleLine2}
      support={hero.support}
      image={transformationsHeroImage}
      mobileHeight="60vh"
    />
  );
};
