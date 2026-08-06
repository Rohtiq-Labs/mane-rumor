"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";
import { easePremium, motionDuration } from "@/lib/motion";
import { HeroSlideshow } from "./HeroSlideshow";

export const Arrival = (): ReactElement => {
  const { dictionary } = useLocale();
  const { arrival, brand } = dictionary;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="arrival relative flex h-[70vh] min-h-[420px] min-[641px]:h-[70vh] min-[641px]:min-h-[70vh] items-end"
      id="top"
      aria-label={brand.name}
    >
      <HeroSlideshow />

      <div className="arrival-content relative z-[3] text-paper w-full px-[6vw] pb-[6vw] flex justify-between items-end gap-12 max-md:flex-col max-md:items-start pointer-events-none">
        <motion.h1
          className="font-display text-[clamp(3rem,9vw,7.2rem)] font-normal leading-[0.98] tracking-[-0.01em] max-w-[14ch]"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: motionDuration.heading,
            delay: 0.12,
            ease: easePremium,
          }}
        >
          {arrival.headlineBefore}
          <br />
          {arrival.headlineMid}{" "}
          <em className="italic font-normal text-canvas">{arrival.headlineEm}</em>{" "}
          {arrival.headlineAfter}
        </motion.h1>
        <motion.div
          className="arrival-cta shrink-0 text-right max-md:text-left pointer-events-auto"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: motionDuration.button,
            delay: 0.28,
            ease: easePremium,
          }}
        >
          <span className="font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-canvas mb-4 block">
            {brand.location}
          </span>
          <Button href="#book" variant="light">
            {arrival.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
