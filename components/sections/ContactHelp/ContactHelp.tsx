"use client";

import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";

const ease = [0.22, 1, 0.36, 1] as const;

export const ContactHelp = (): ReactElement => {
  const { dictionary } = useLocale();
  const { help } = dictionary.contactPage;

  return (
    <section
      className="flex min-h-[75vh] flex-col items-center justify-center bg-ink px-[6vw] py-24 text-center text-paper"
      aria-labelledby="contact-help-title"
    >
      <motion.span
        className="mb-8 block font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-canvas"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
      >
        {help.label}
      </motion.span>
      <motion.h2
        id="contact-help-title"
        className="mb-8 max-w-[16ch] font-display text-[clamp(2.4rem,6.5vw,5rem)] font-normal leading-[1.05] tracking-[-0.01em]"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease }}
      >
        {help.title}
      </motion.h2>
      <motion.p
        className="mb-12 max-w-[42ch] text-[1.05rem] leading-[1.7] text-[#B9AFA9]"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.08, ease }}
      >
        {help.body}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.12, ease }}
      >
        <Button href="#book" variant="light" aria-label={help.cta}>
          {help.cta}
        </Button>
      </motion.div>
    </section>
  );
};
