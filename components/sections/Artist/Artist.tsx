"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { artistImage } from "@/data/gallery";

export const Artist = (): ReactElement => {
  const { dictionary } = useLocale();
  const { artist } = dictionary;

  return (
    <section
      className="artist bg-ink text-paper grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr]"
      id="artist"
    >
      <div className="portrait relative h-[70vh] md:h-full md:min-h-screen overflow-hidden">
        <Image
          src={artistImage.src}
          alt={artistImage.alt}
          fill
          className="object-cover grayscale-[0.15] contrast-[1.05]"
          sizes="(max-width: 900px) 100vw, 45vw"
        />
      </div>
      <div className="story flex flex-col justify-center px-[6vw] py-20 md:py-36 md:pl-[5vw]">
        <span className="reveal font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-canvas mb-[1.6rem] block">
          {artist.label}
        </span>
        <blockquote className="reveal font-display italic font-normal text-[clamp(1.7rem,3.1vw,2.6rem)] leading-[1.3] tracking-[-0.005em] mb-[2.4rem] max-w-[22ch]">
          {artist.quote}
        </blockquote>
        <p className="reveal text-[#D9D2CE] text-base leading-[1.8] max-w-[38ch] mb-3">
          {artist.body1}
        </p>
        <p className="reveal text-[#D9D2CE] text-base leading-[1.8] max-w-[38ch] mb-3">
          {artist.body2}
        </p>
        <span className="reveal mt-[2.6rem] font-display text-[1.05rem] italic text-canvas">
          {artist.signature}
        </span>
      </div>
    </section>
  );
};
