"use client";

import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";

const ease = [0.22, 1, 0.36, 1] as const;

export const AboutCta = (): ReactElement => {
  const { dictionary } = useLocale();
  const { cta } = dictionary.aboutPage;

  return (
    <section
      className="about-cta flex min-h-[78vh] flex-col items-center justify-center bg-ink px-[6vw] py-24 text-center text-paper"
      id="book"
      aria-labelledby="about-cta-title"
    >
      <motion.h2
        id="about-cta-title"
        className="mb-12 max-w-[16ch] font-display text-[clamp(2.4rem,6.5vw,5rem)] font-normal leading-[1.05] tracking-[-0.015em]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease }}
      >
        {cta.line1}
        <br />
        <em className="mt-2 inline-block italic font-normal text-canvas">
          {cta.line2}
        </em>
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.1, ease }}
      >
        <Button href="/contact#book" variant="light" aria-label={cta.button}>
          {cta.button}
        </Button>
      </motion.div>
    </section>
  );
};
