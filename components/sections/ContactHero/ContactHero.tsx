"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";
import { contactHeroImage } from "@/data/contact";

export const ContactHero = (): ReactElement => {
  const { dictionary } = useLocale();
  const { contactPage, brand } = dictionary;
  const { hero } = contactPage;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section
      ref={ref}
      className="contact-hero relative flex h-screen min-h-[640px] items-end overflow-hidden"
      id="top"
      aria-labelledby="contact-hero-title"
    >
      <div className="absolute inset-0 overflow-hidden after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(38,35,34,0.2)_0%,rgba(38,35,34,0.08)_42%,rgba(38,35,34,0.68)_100%)] after:content-['']">
        <motion.div
          className="absolute inset-0"
          style={{ y: imageY, scale: imageScale }}
        >
          <Image
            src={contactHeroImage.src}
            alt={contactHeroImage.alt}
            fill
            priority
            className="object-cover saturate-[0.9] contrast-[1.02]"
            sizes="100vw"
          />
        </motion.div>
      </div>

      <div className="relative z-[2] w-full px-[6vw] pb-[7vw] text-paper">
        <motion.span
          className="mb-6 block font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-canvas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {brand.name}
        </motion.span>
        <div className="flex items-end justify-between gap-12 max-md:flex-col max-md:items-start">
          <div className="max-w-[16ch]">
            <motion.h1
              id="contact-hero-title"
              className="font-display text-[clamp(2.8rem,8vw,6.4rem)] font-normal leading-[0.98] tracking-[-0.01em]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {hero.headlineBefore}
              <br />
              <em className="italic font-normal text-canvas">
                {hero.headlineEm}
              </em>
            </motion.h1>
            <motion.p
              className="mt-7 max-w-[34ch] text-[1.05rem] leading-[1.7] text-canvas/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {hero.support}
            </motion.p>
          </div>
          <motion.div
            className="shrink-0 pb-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Button href="#book" variant="light">
              {hero.cta}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
