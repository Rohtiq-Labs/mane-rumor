"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";
import { artistImage } from "@/data/gallery";
import { RevealGroup, RevealImage, RevealItem } from "@/lib/motion";

export const Artist = (): ReactElement => {
  const { dictionary } = useLocale();
  const { artist } = dictionary;

  return (
    <section className="artist bg-ink text-paper" id="artist">
      {/* Mobile — ≤640px: heading, quote, image, description */}
      <div className="min-[641px]:hidden">
        <RevealGroup className="px-[6vw] pt-20 pb-10">
          <RevealItem tone="label">
            <span className="font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-canvas mb-[1.6rem] block">
              {artist.label}
            </span>
          </RevealItem>
          <RevealItem tone="heading">
            <blockquote className="font-display italic font-normal text-[clamp(1.7rem,8vw,2.4rem)] leading-[1.3] tracking-[-0.005em] max-w-[22ch]">
              {artist.quote}
            </blockquote>
          </RevealItem>
        </RevealGroup>

        <RevealImage className="portrait group relative h-[70vh] overflow-hidden">
          <Image
            src={artistImage.src}
            alt={artistImage.alt}
            fill
            className="object-cover grayscale-[0.15] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            sizes="100vw"
          />
        </RevealImage>

        <RevealGroup className="px-[6vw] pt-10 pb-20">
          <RevealItem tone="body">
            <p className="text-[#D9D2CE] text-base leading-[1.8] max-w-[38ch] mb-3">
              {artist.body1}
            </p>
          </RevealItem>
          <RevealItem tone="body">
            <p className="text-[#D9D2CE] text-base leading-[1.8] max-w-[38ch] mb-3">
              {artist.body2}
            </p>
          </RevealItem>
          <RevealItem tone="body">
            <span className="mt-[2.6rem] block font-display text-[1.05rem] italic text-canvas">
              {artist.signature}
            </span>
          </RevealItem>
          <RevealItem tone="button" className="mt-10">
            <Button href="/about" variant="light">
              {artist.cta}
            </Button>
          </RevealItem>
        </RevealGroup>
      </div>

      {/* Desktop — ≥641px: portrait left, full story right */}
      <div className="hidden min-[641px]:grid min-[641px]:grid-cols-[0.85fr_1.15fr]">
        <RevealImage className="portrait group relative h-full min-h-screen overflow-hidden">
          <Image
            src={artistImage.src}
            alt={artistImage.alt}
            fill
            className="object-cover grayscale-[0.15] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            sizes="45vw"
          />
        </RevealImage>
        <RevealGroup className="story flex flex-col justify-center px-[6vw] py-36 pl-[5vw]">
          <RevealItem tone="label">
            <span className="font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-canvas mb-[1.6rem] block">
              {artist.label}
            </span>
          </RevealItem>
          <RevealItem tone="heading">
            <blockquote className="font-display italic font-normal text-[clamp(1.7rem,3.1vw,2.6rem)] leading-[1.3] tracking-[-0.005em] mb-[2.4rem] max-w-[22ch]">
              {artist.quote}
            </blockquote>
          </RevealItem>
          <RevealItem tone="body">
            <p className="text-[#D9D2CE] text-base leading-[1.8] max-w-[38ch] mb-3">
              {artist.body1}
            </p>
          </RevealItem>
          <RevealItem tone="body">
            <p className="text-[#D9D2CE] text-base leading-[1.8] max-w-[38ch] mb-3">
              {artist.body2}
            </p>
          </RevealItem>
          <RevealItem tone="body">
            <span className="mt-[2.6rem] font-display text-[1.05rem] italic text-canvas">
              {artist.signature}
            </span>
          </RevealItem>
          <RevealItem tone="button" className="mt-10">
            <Button href="/about" variant="light">
              {artist.cta}
            </Button>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
};
