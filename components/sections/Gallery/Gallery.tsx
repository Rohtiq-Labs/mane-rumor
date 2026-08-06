"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";
import { galleryPieces } from "@/data/gallery";
import { Reveal, RevealGroup, RevealImage, RevealItem } from "@/lib/motion";
import { GalleryMobileSlider } from "./GalleryMobileSlider";

export const Gallery = (): ReactElement => {
  const { dictionary } = useLocale();
  const { gallery } = dictionary;

  return (
    <section className="gallery bg-canvas px-[6vw] py-24 md:py-36" id="gallery">
      <RevealGroup className="head mb-12 md:mb-20">
        <RevealItem tone="label">
          <span className="font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-oxblood mb-[1.4rem] block">
            {gallery.label}
          </span>
        </RevealItem>
        <RevealItem tone="heading">
          <h2 className="font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal max-w-[16ch] tracking-[-0.01em]">
            {gallery.title}
          </h2>
        </RevealItem>
      </RevealGroup>

      <GalleryMobileSlider caption={gallery.caption} label={gallery.label} />

      <RevealGroup
        className="collage relative hidden min-[641px]:block md:h-[1180px]"
        stagger={0.08}
      >
        {galleryPieces.map((piece) => (
          <RevealImage
            key={piece.id}
            staggered
            className={`piece group relative h-[340px] w-full overflow-hidden shadow-[0_30px_60px_-30px_rgba(38,35,34,0.35)] md:absolute ${piece.className}`}
          >
            <Image
              src={piece.src}
              alt={piece.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="34vw"
            />
          </RevealImage>
        ))}
        <RevealItem tone="body">
          <p className="cap font-display italic text-[1.4rem] text-oxblood max-w-[16ch] md:absolute md:bottom-[840px] md:left-[44%]">
            {gallery.caption}
          </p>
        </RevealItem>
      </RevealGroup>

      <Reveal tone="button" className="mt-12 min-[641px]:mt-14" delay={0.08}>
        <Button href="/transformations" variant="dark">
          {gallery.cta}
        </Button>
      </Reveal>
    </section>
  );
};
