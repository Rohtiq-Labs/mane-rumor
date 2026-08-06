"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";
import { RevealGroup, RevealItem } from "@/lib/motion";

export const BookCta = (): ReactElement => {
  const { dictionary } = useLocale();
  const { book } = dictionary;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="cta relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-ink text-paper px-[6vw] py-24 text-center"
      id="book"
    >
      {!prefersReducedMotion && (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/assets/videos/back-cta.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
      )}
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(38,35,34,0.55)_0%,rgba(38,35,34,0.72)_50%,rgba(38,35,34,0.82)_100%)]"
        aria-hidden="true"
      />

      <RevealGroup className="relative z-[1] flex flex-col items-center">
        <RevealItem tone="label">
          <span className="font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-canvas mb-8 block">
            {book.label}
          </span>
        </RevealItem>
        <RevealItem tone="heading">
          <h2 className="font-display font-normal tracking-[-0.01em] leading-[1.05] text-[clamp(2.6rem,7vw,5.6rem)] max-w-[16ch] mb-12">
            {book.titleBefore}
            <br />
            {book.titleMid}{" "}
            <em className="italic text-canvas">{book.titleEm}</em>{" "}
            {book.titleAfter}
          </h2>
        </RevealItem>
        <RevealItem
          tone="button"
          className="flex flex-col items-center gap-4 min-[641px]:flex-row min-[641px]:gap-5"
        >
          <Button href="/contact" variant="light" aria-label={book.cta}>
            {book.cta}
          </Button>
          <Button href="/contact" variant="light" aria-label={book.pageCta}>
            {book.pageCta}
          </Button>
        </RevealItem>
      </RevealGroup>
    </section>
  );
};
