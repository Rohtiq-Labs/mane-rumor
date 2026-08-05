"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";
import { servicesHeroImage } from "@/data/service-catalog";

export const ServicesHero = (): ReactElement => {
  const { dictionary } = useLocale();
  const { servicesPage, brand } = dictionary;
  const { hero } = servicesPage;

  return (
    <section
      className="services-hero relative flex h-screen min-h-[640px] items-end"
      id="top"
      aria-label={hero.headlineBefore}
    >
      <div className="frame absolute inset-0 overflow-hidden after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(38,35,34,0.2)_0%,rgba(38,35,34,0.08)_45%,rgba(38,35,34,0.62)_100%)] after:content-['']">
        <Image
          src={servicesHeroImage.src}
          alt={servicesHeroImage.alt}
          fill
          priority
          className="object-cover saturate-[0.88] contrast-[1.03] scale-[1.08]"
          sizes="100vw"
        />
      </div>
      <div className="relative z-[2] w-full px-[6vw] pb-[6vw] text-paper">
        <span className="font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-canvas mb-6 block">
          {brand.name}
        </span>
        <div className="flex items-end justify-between gap-12 max-md:flex-col max-md:items-start">
          <div className="max-w-[18ch]">
            <h1 className="font-display text-[clamp(3rem,8.5vw,6.8rem)] font-normal leading-[0.98] tracking-[-0.01em]">
              {hero.headlineBefore}
              <br />
              <em className="italic font-normal text-canvas">{hero.headlineEm}</em>{" "}
              {hero.headlineAfter}
            </h1>
            <p className="mt-6 max-w-[34ch] text-[1.05rem] leading-[1.65] text-canvas/90">
              {hero.support}
            </p>
          </div>
          <div className="shrink-0 pb-1">
            <Button href="#book" variant="light">
              {hero.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
