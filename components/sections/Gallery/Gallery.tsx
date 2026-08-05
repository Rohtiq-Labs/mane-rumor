"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { galleryPieces } from "@/data/gallery";

export const Gallery = (): ReactElement => {
  const { dictionary } = useLocale();
  const { gallery } = dictionary;

  return (
    <section className="gallery bg-canvas px-[6vw] py-24 md:py-36" id="gallery">
      <div className="head mb-12 md:mb-20">
        <span className="reveal font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-oxblood mb-[1.4rem] block">
          {gallery.label}
        </span>
        <h2 className="reveal font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal max-w-[16ch] tracking-[-0.01em]">
          {gallery.title}
        </h2>
      </div>
      <div className="collage relative flex flex-col gap-[1.4rem] md:block md:h-[1180px]">
        {galleryPieces.map((piece) => (
          <div
            key={piece.id}
            className={`piece reveal relative h-[340px] w-full overflow-hidden shadow-[0_30px_60px_-30px_rgba(38,35,34,0.35)] md:absolute ${piece.className}`}
          >
            <Image
              src={piece.src}
              alt={piece.alt}
              fill
              className="object-cover"
              sizes="(max-width: 900px) 100vw, 34vw"
            />
          </div>
        ))}
        <p className="cap reveal font-display italic text-[1.4rem] text-oxblood max-w-[16ch] md:absolute md:bottom-[840px] md:left-[44%]">
          {gallery.caption}
        </p>
      </div>
    </section>
  );
};
