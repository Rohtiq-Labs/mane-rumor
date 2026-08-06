"use client";

import { useReducedMotion } from "framer-motion";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";
import { RevealGroup, RevealItem } from "@/lib/motion";

export const ContactBooking = (): ReactElement => {
  const { dictionary } = useLocale();
  const { booking } = dictionary.contactPage;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="contact-booking relative flex min-h-[78vh] flex-col items-center justify-center overflow-hidden bg-ink px-[6vw] py-24 text-center text-paper"
      id="book"
      aria-labelledby="contact-booking-title"
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

      <RevealGroup className="relative z-[1] mx-auto flex max-w-[720px] flex-col items-center">
        <RevealItem tone="label">
          <span className="mb-6 block font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-canvas">
            {booking.label}
          </span>
        </RevealItem>
        <RevealItem tone="heading">
          <h2
            id="contact-booking-title"
            className="mb-6 font-display text-[clamp(2.4rem,6vw,4.6rem)] font-normal leading-[1.05] tracking-[-0.01em]"
          >
            {booking.title}
          </h2>
        </RevealItem>
        <RevealItem tone="body">
          <p className="mx-auto mb-12 max-w-[42ch] text-[1.05rem] leading-[1.7] text-[#B9AFA9]">
            {booking.body}
          </p>
        </RevealItem>
        <RevealItem tone="button">
          <Button href="#" variant="light" aria-label={booking.cta}>
            {booking.cta}
          </Button>
        </RevealItem>
      </RevealGroup>
    </section>
  );
};
