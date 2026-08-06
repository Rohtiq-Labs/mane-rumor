"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { philosophyImage } from "@/data/gallery";
import { RevealGroup, RevealImage, RevealItem } from "@/lib/motion";

export const Philosophy = (): ReactElement => {
  const { dictionary } = useLocale();
  const { philosophy } = dictionary;

  return (
    <section
      className="philosophy bg-mist py-24 md:py-36 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center"
      id="philosophy"
    >
      <RevealGroup className="copy px-[6vw] max-[640px]:mb-10">
        <RevealItem tone="label">
          <span className="font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-oxblood mb-[1.6rem] block">
            {philosophy.label}
          </span>
        </RevealItem>
        <RevealItem tone="heading">
          <h2 className="font-display text-[clamp(2.4rem,4.6vw,4.1rem)] font-normal leading-[1.08] tracking-[-0.01em] mb-8">
            {philosophy.titleLine1}
            <br />
            {philosophy.titleLine2}
          </h2>
        </RevealItem>
        <RevealItem tone="body">
          <p className="text-[1.05rem] leading-[1.7] text-body max-w-[34ch]">
            {philosophy.body}
          </p>
        </RevealItem>
      </RevealGroup>
      <RevealImage className="visual group relative h-[60vh] md:h-[90vh] overflow-hidden">
        <Image
          src={philosophyImage.src}
          alt={philosophyImage.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 100vw, 45vw"
        />
      </RevealImage>
    </section>
  );
};
