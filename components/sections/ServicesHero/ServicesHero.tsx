"use client";

import type { ReactElement } from "react";
import { InnerPageHero } from "@/components/sections/InnerPageHero";
import { useLocale } from "@/context/LocaleContext";
import { servicesHeroImage } from "@/data/service-catalog";

export const ServicesHero = (): ReactElement => {
  const { dictionary } = useLocale();
  const { hero } = dictionary.servicesPage;

  return (
    <InnerPageHero
      label={hero.label || undefined}
      titleLine1={hero.titleLine1}
      titleLine2={hero.titleLine2}
      support={hero.support}
      image={servicesHeroImage}
      mobileHeight="60vh"
      cta={
        hero.cta
          ? { label: hero.cta, href: "#services" }
          : undefined
      }
    />
  );
};
