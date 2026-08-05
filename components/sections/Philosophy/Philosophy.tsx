"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { philosophyImage } from "@/data/gallery";

export const Philosophy = (): ReactElement => {
  const { dictionary } = useLocale();
  const { philosophy } = dictionary;

  return (
    <section
      className="philosophy bg-mist py-24 md:py-36 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] items-center"
      id="philosophy"
    >
      <div className="copy px-[6vw] max-md:order-2 max-md:mt-12">
        <span className="reveal font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-oxblood mb-[1.6rem] block">
          {philosophy.label}
        </span>
        <h2 className="reveal font-display text-[clamp(2.4rem,4.6vw,4.1rem)] font-normal leading-[1.08] tracking-[-0.01em] mb-8">
          {philosophy.titleLine1}
          <br />
          {philosophy.titleLine2}
        </h2>
        <p className="reveal text-[1.05rem] leading-[1.7] text-body max-w-[34ch]">
          {philosophy.body}
        </p>
      </div>
      <div className="visual relative order-first md:order-none h-[60vh] md:h-[90vh] overflow-hidden">
        <Image
          src={philosophyImage.src}
          alt={philosophyImage.alt}
          fill
          className="object-cover"
          sizes="(max-width: 900px) 100vw, 45vw"
        />
      </div>
    </section>
  );
};
