"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { aboutPhilosophyImage } from "@/data/about";
import {
  easePremium,
  motionDuration,
  motionViewport,
} from "@/lib/motion";

export const AboutPhilosophy = (): ReactElement => {
  const { dictionary } = useLocale();
  const { philosophy } = dictionary.aboutPage;
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["6%", "-6%"],
  );

  return (
    <section
      ref={ref}
      className="about-philosophy bg-paper px-[6vw] py-28 max-[640px]:py-20 min-[641px]:py-36"
      id="story"
      aria-labelledby="about-story-label"
    >
      <motion.span
        id="about-story-label"
        className="mb-16 block font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-oxblood max-[640px]:mb-12"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={motionViewport}
        transition={{ duration: motionDuration.body, ease: easePremium }}
      >
        {philosophy.label}
      </motion.span>

      <div className="grid grid-cols-1 items-end gap-16 min-[641px]:grid-cols-[1.15fr_0.85fr] min-[641px]:gap-12">
        <div className="space-y-10 max-[640px]:space-y-8">
          {philosophy.statements.map((statement, index) => (
            <motion.p
              key={statement}
              className={`font-display font-normal tracking-[-0.02em] text-ink ${
                index === 1
                  ? "text-[clamp(2.4rem,6.5vw,5.2rem)] italic leading-[1.05] min-[641px]:ml-[8%]"
                  : "text-[clamp(2.2rem,5.8vw,4.6rem)] leading-[1.08]"
              } ${index === 2 ? "min-[641px]:max-w-[14ch]" : "max-w-[16ch]"}`}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={motionViewport}
              transition={{
                duration: motionDuration.heading,
                delay: index * 0.1,
                ease: easePremium,
              }}
            >
              {statement}
            </motion.p>
          ))}
          <motion.p
            className="max-w-[36ch] pt-4 text-[1.05rem] leading-[1.75] text-body"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={motionViewport}
            transition={{
              duration: motionDuration.body,
              delay: 0.2,
              ease: easePremium,
            }}
          >
            {philosophy.closing}
          </motion.p>
        </div>

        <motion.div
          className="group relative h-[58vh] overflow-hidden max-[640px]:h-[48vh] min-[641px]:h-[78vh]"
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 18, scale: 1.03 }
          }
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={motionViewport}
          transition={{ duration: motionDuration.image, ease: easePremium }}
        >
          <motion.div className="absolute inset-0" style={{ y: imageY }}>
            <Image
              src={aboutPhilosophyImage.src}
              alt={aboutPhilosophyImage.alt}
              fill
              className="scale-110 object-cover transition-transform duration-700 ease-out group-hover:scale-[1.12]"
              sizes="(max-width: 640px) 100vw, 42vw"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
