"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { aboutHeroImage } from "@/data/about";

const ease = [0.22, 1, 0.36, 1] as const;

export const AboutHero = (): ReactElement => {
  const { dictionary } = useLocale();
  const { brand } = dictionary;
  const { hero } = dictionary.aboutPage;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <section
      ref={ref}
      className="about-hero relative flex h-screen min-h-[640px] items-end overflow-hidden bg-ink"
      id="top"
      aria-labelledby="about-hero-title"
    >
      <div className="absolute inset-0 overflow-hidden after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(38,35,34,0.18)_0%,rgba(38,35,34,0.05)_38%,rgba(38,35,34,0.72)_100%)] after:content-['']">
        <motion.div
          className="absolute inset-0"
          style={{ y: imageY, scale: imageScale }}
        >
          <Image
            src={aboutHeroImage.src}
            alt={aboutHeroImage.alt}
            fill
            priority
            className="object-cover object-[center_20%] saturate-[0.92] contrast-[1.03]"
            sizes="100vw"
          />
        </motion.div>
      </div>

      <div className="relative z-[2] w-full px-[6vw] pb-[8vw] text-paper max-[640px]:pb-16">
        <motion.span
          className="mb-6 block font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-canvas"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease }}
        >
          {brand.name}
        </motion.span>
        <motion.h1
          id="about-hero-title"
          className="max-w-[12ch] font-display text-[clamp(3rem,9vw,7rem)] font-normal leading-[0.95] tracking-[-0.02em]"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
        >
          {hero.headlineLine1}
          <br />
          <em className="italic font-normal text-canvas">
            {hero.headlineLine2}
          </em>
        </motion.h1>
        <motion.p
          className="mt-8 max-w-[38ch] text-[1.05rem] leading-[1.7] text-canvas/90 max-[640px]:mt-6 max-[640px]:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.12, ease }}
        >
          {hero.support}
        </motion.p>
      </div>
    </section>
  );
};
