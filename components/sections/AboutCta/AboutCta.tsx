"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";
import { RevealGroup, RevealItem } from "@/lib/motion";

export const AboutCta = (): ReactElement => {
  const { dictionary } = useLocale();
  const { cta } = dictionary.aboutPage;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="about-cta relative flex min-h-[78vh] flex-col items-center justify-center overflow-hidden bg-ink px-[6vw] py-24 text-center text-paper"
      id="book"
      aria-labelledby="about-cta-title"
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
        <RevealItem tone="heading">
          <h2
            id="about-cta-title"
            className="mb-12 max-w-[16ch] font-display text-[clamp(2.4rem,6.5vw,5rem)] font-normal leading-[1.05] tracking-[-0.015em]"
          >
            {cta.line1}
            <br />
            <em className="mt-2 inline-block italic font-normal text-canvas">
              {cta.line2}
            </em>
          </h2>
        </RevealItem>
        <RevealItem tone="button">
          <Button href="/contact#book" variant="light" aria-label={cta.button}>
            {cta.button}
          </Button>
        </RevealItem>
      </RevealGroup>
    </section>
  );
};
