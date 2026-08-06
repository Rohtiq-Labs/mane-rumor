"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";
import { RevealGroup, RevealItem } from "@/lib/motion";

export const ServicesHelpCta = (): ReactElement => {
  const { dictionary } = useLocale();
  const { help } = dictionary.servicesPage;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="services-help relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden bg-ink px-[6vw] py-24 text-center text-paper"
      id="book"
      aria-labelledby="help-title"
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
            {help.label}
          </span>
        </RevealItem>
        <RevealItem tone="heading">
          <h2
            id="help-title"
            className="font-display font-normal tracking-[-0.01em] leading-[1.05] text-[clamp(2.4rem,6.5vw,5.2rem)] max-w-[16ch] mb-8"
          >
            {help.titleBefore}{" "}
            <em className="italic text-canvas">{help.titleEm}</em>{" "}
            {help.titleAfter}
          </h2>
        </RevealItem>
        <RevealItem tone="body">
          <p className="mb-12 max-w-[42ch] text-[1.05rem] leading-[1.7] text-[#B9AFA9]">
            {help.body}
          </p>
        </RevealItem>
        <RevealItem tone="button">
          <Button href="#" variant="light" aria-label={help.cta}>
            {help.cta}
          </Button>
        </RevealItem>
      </RevealGroup>
    </section>
  );
};
