"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { aboutVictoriaImage } from "@/data/about";

const ease = [0.22, 1, 0.36, 1] as const;

export const AboutVictoria = (): ReactElement => {
  const { dictionary } = useLocale();
  const { victoria } = dictionary.aboutPage;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);

  return (
    <section
      ref={ref}
      className="about-victoria bg-ink text-paper"
      id="victoria"
      aria-labelledby="about-victoria-title"
    >
      <div className="grid grid-cols-1 min-[641px]:grid-cols-[0.92fr_1.08fr]">
        <div className="relative h-[72vh] overflow-hidden max-[640px]:h-[62vh] min-[641px]:h-auto min-[641px]:min-h-screen">
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            <Image
              src={aboutVictoriaImage.src}
              alt={aboutVictoriaImage.alt}
              fill
              className="scale-110 object-cover object-[center_15%] grayscale-[0.12] contrast-[1.04]"
              sizes="(max-width: 640px) 100vw, 48vw"
            />
          </motion.div>
        </div>

        <div className="flex flex-col justify-center px-[6vw] py-20 max-[640px]:py-16 min-[641px]:py-32 min-[641px]:pl-[5vw] min-[641px]:pr-[8vw]">
          <motion.span
            className="mb-5 block font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-canvas"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease }}
          >
            {victoria.label}
          </motion.span>
          <motion.h2
            id="about-victoria-title"
            className="mb-2 font-display text-[clamp(2.4rem,5vw,4rem)] font-normal tracking-[-0.015em]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease }}
          >
            {victoria.name}
          </motion.h2>
          <motion.p
            className="mb-10 font-label text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#B9AFA9]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
          >
            {victoria.role}
          </motion.p>
          <motion.blockquote
            className="mb-10 max-w-[22ch] font-display text-[clamp(1.55rem,2.8vw,2.35rem)] italic font-normal leading-[1.3]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.08, ease }}
          >
            &ldquo;{victoria.quote}&rdquo;
          </motion.blockquote>
          <div className="max-w-[40ch] space-y-4 text-[1.02rem] leading-[1.8] text-[#D9D2CE]">
            {[victoria.body1, victoria.body2, victoria.body3].map(
              (paragraph, index) => (
                <motion.p
                  key={paragraph.slice(0, 24)}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1 + index * 0.06,
                    ease,
                  }}
                >
                  {paragraph}
                </motion.p>
              ),
            )}
          </div>
          <motion.span
            className="mt-12 font-display text-[1.35rem] italic text-canvas"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2, ease }}
          >
            {victoria.signature}
          </motion.span>
        </div>
      </div>
    </section>
  );
};
