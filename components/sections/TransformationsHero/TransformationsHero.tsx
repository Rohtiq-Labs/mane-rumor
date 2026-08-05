"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { transformationsHeroImage } from "@/data/transformations";

export const TransformationsHero = (): ReactElement => {
  const { dictionary } = useLocale();
  const { hero } = dictionary.transformationsPage;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section
      ref={ref}
      className="transformations-hero relative flex h-[92vh] min-h-[580px] items-end overflow-hidden"
      id="top"
      aria-labelledby="transformations-hero-title"
    >
      <div className="absolute inset-0 overflow-hidden after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(38,35,34,0.18)_0%,rgba(38,35,34,0.08)_40%,rgba(38,35,34,0.68)_100%)] after:content-['']">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <Image
            src={transformationsHeroImage.src}
            alt={transformationsHeroImage.alt}
            fill
            priority
            className="object-cover saturate-[0.9] contrast-[1.02]"
            sizes="100vw"
          />
        </motion.div>
      </div>

      <div className="relative z-[2] w-full px-[6vw] pb-[7vw] text-paper">
        <motion.h1
          id="transformations-hero-title"
          className="font-display text-[clamp(2.8rem,8vw,6.4rem)] font-normal leading-[0.98] tracking-[-0.01em] max-w-[12ch]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.headlineLine1}
          <br />
          <em className="italic font-normal text-canvas">{hero.headlineLine2}</em>
        </motion.h1>
        <motion.p
          className="mt-7 max-w-[36ch] text-[1.05rem] leading-[1.7] text-canvas/90"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.support}
        </motion.p>
      </div>
    </section>
  );
};
