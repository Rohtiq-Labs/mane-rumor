"use client";

import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";

export const TransformationsCta = (): ReactElement => {
  const { dictionary } = useLocale();
  const { cta } = dictionary.transformationsPage;

  return (
    <section
      className="transformations-cta flex min-h-[70vh] flex-col items-center justify-center bg-ink px-[6vw] py-24 text-center text-paper"
      id="book"
      aria-labelledby="transformations-cta-title"
    >
      <motion.h2
        id="transformations-cta-title"
        className="mb-12 max-w-[14ch] font-display text-[clamp(2.4rem,6.5vw,5rem)] font-normal leading-[1.05] tracking-[-0.01em]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        {cta.title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Button href="#" variant="light" aria-label={cta.button}>
          {cta.button}
        </Button>
      </motion.div>
    </section>
  );
};
