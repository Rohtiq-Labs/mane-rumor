"use client";

import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";

export const BookCta = (): ReactElement => {
  const { dictionary } = useLocale();
  const { book } = dictionary;

  return (
    <section
      className="cta flex min-h-[90vh] flex-col items-center justify-center bg-ink text-paper px-[6vw] py-24 text-center"
      id="book"
    >
      <span className="reveal font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-canvas mb-8 block">
        {book.label}
      </span>
      <h2 className="reveal font-display font-normal tracking-[-0.01em] leading-[1.05] text-[clamp(2.6rem,7vw,5.6rem)] max-w-[16ch] mb-12">
        {book.titleBefore}
        <br />
        {book.titleMid}{" "}
        <em className="italic text-canvas">{book.titleEm}</em>{" "}
        {book.titleAfter}
      </h2>
      <Button href="#" variant="light" aria-label={book.cta}>
        {book.cta}
      </Button>
    </section>
  );
};
