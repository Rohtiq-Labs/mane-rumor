"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { testimonials } from "@/data/testimonials";

export const Proof = (): ReactElement => {
  const { dictionary } = useLocale();
  const { proof } = dictionary;

  return (
    <section className="proof bg-mist px-[6vw] py-24 md:py-36" id="proof">
      {proof.quotes.map((quote, index) => (
        <div
          key={testimonials[index]?.id ?? index}
          className={`quote-block reveal mx-auto max-w-[1000px] py-12 md:py-20 ${
            index < proof.quotes.length - 1 ? "border-b border-hairline" : ""
          }`}
        >
          <p className="font-display italic font-normal text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.35] text-ink mb-[1.8rem]">
            {quote.text}
          </p>
          <span className="who font-label text-[0.72rem] tracking-[0.14em] uppercase text-oxblood font-semibold">
            {quote.who}
          </span>
        </div>
      ))}
    </section>
  );
};
