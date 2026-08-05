"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";
import { galleryHeroImage } from "@/data/gallery";

export const Arrival = (): ReactElement => {
  const { dictionary } = useLocale();
  const { arrival, brand } = dictionary;

  return (
    <section
      className="arrival relative flex h-screen min-h-[640px] items-end"
      id="top"
      aria-label={brand.name}
    >
      <div className="frame absolute inset-0 overflow-hidden after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(38,35,34,0.15)_0%,rgba(38,35,34,0.05)_40%,rgba(38,35,34,0.55)_100%)] after:content-['']">
        <Image
          src={galleryHeroImage.src}
          alt={galleryHeroImage.alt}
          fill
          priority
          className="object-cover saturate-[0.9] contrast-[1.02] scale-[1.08]"
          sizes="100vw"
        />
      </div>
      <div className="arrival-content relative z-[2] text-paper w-full px-[6vw] pb-[6vw] flex justify-between items-end gap-12 max-md:flex-col max-md:items-start">
        <h1 className="font-display text-[clamp(3rem,9vw,7.2rem)] font-normal leading-[0.98] tracking-[-0.01em] max-w-[14ch]">
          {arrival.headlineBefore}
          <br />
          {arrival.headlineMid}{" "}
          <em className="italic font-normal text-canvas">{arrival.headlineEm}</em>{" "}
          {arrival.headlineAfter}
        </h1>
        <div className="arrival-cta shrink-0 text-right max-md:text-left">
          <span className="font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-canvas mb-4 block">
            {brand.location}
          </span>
          <Button href="#book" variant="light">
            {arrival.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};
