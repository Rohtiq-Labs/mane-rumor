"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { testimonials } from "@/data/testimonials";
import { RevealGroup, RevealItem } from "@/lib/motion";

export const Proof = (): ReactElement => {
  const { dictionary } = useLocale();
  const { proof } = dictionary;

  return (
    <section
      className="proof bg-mist px-[6vw] py-20 min-[641px]:py-28"
      id="proof"
      aria-labelledby="proof-title"
    >
      <RevealGroup className="mb-12 max-w-[34rem] min-[641px]:mb-16">
        <RevealItem tone="label">
          <span className="font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-oxblood mb-5 block">
            {proof.label}
          </span>
        </RevealItem>
        <RevealItem tone="heading">
          <h2
            id="proof-title"
            className="font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal leading-[1.08] tracking-[-0.01em] mb-5"
          >
            {proof.title}
          </h2>
        </RevealItem>
        <RevealItem tone="body">
          <p className="text-body text-[1.05rem] leading-[1.7] max-w-[36ch]">
            {proof.support}
          </p>
        </RevealItem>
      </RevealGroup>

      <RevealGroup stagger={0.12}>
        {proof.quotes.map((quote, index) => (
          <RevealItem
            key={testimonials[index]?.id ?? index}
            className={`quote-block mx-auto max-w-[1000px] py-12 md:py-20 ${
              index < proof.quotes.length - 1 ? "border-b border-hairline" : ""
            }`}
          >
            <p className="font-display italic font-normal text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.35] text-ink mb-[1.8rem]">
              {quote.text}
            </p>
            <span className="who font-label text-[0.72rem] tracking-[0.14em] uppercase text-oxblood font-semibold">
              {quote.who}
            </span>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
};
