"use client";

import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";

export const ServicesHelpCta = (): ReactElement => {
  const { dictionary } = useLocale();
  const { help } = dictionary.servicesPage;

  return (
    <section
      className="services-help flex min-h-[85vh] flex-col items-center justify-center bg-ink px-[6vw] py-24 text-center text-paper"
      id="book"
      aria-labelledby="help-title"
    >
      <span className="reveal font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-canvas mb-8 block">
        {help.label}
      </span>
      <h2
        id="help-title"
        className="reveal font-display font-normal tracking-[-0.01em] leading-[1.05] text-[clamp(2.4rem,6.5vw,5.2rem)] max-w-[16ch] mb-8"
      >
        {help.titleBefore}{" "}
        <em className="italic text-canvas">{help.titleEm}</em>{" "}
        {help.titleAfter}
      </h2>
      <p className="reveal mb-12 max-w-[42ch] text-[1.05rem] leading-[1.7] text-[#B9AFA9]">
        {help.body}
      </p>
      <Button href="#" variant="light" aria-label={help.cta}>
        {help.cta}
      </Button>
    </section>
  );
};
