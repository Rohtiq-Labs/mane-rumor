"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { aboutValuesImages } from "@/data/about";

const ease = [0.22, 1, 0.36, 1] as const;

export const AboutValues = (): ReactElement => {
  const { dictionary } = useLocale();
  const { values } = dictionary.aboutPage;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section
      ref={ref}
      className="about-values bg-canvas px-[6vw] py-28 max-[640px]:py-20 min-[641px]:py-36"
      id="values"
      aria-labelledby="about-values-title"
    >
      <motion.span
        className="mb-6 block font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-oxblood"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
      >
        {values.label}
      </motion.span>
      <motion.h2
        id="about-values-title"
        className="mb-16 max-w-[14ch] font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-normal leading-[1.05] tracking-[-0.015em] text-ink max-[640px]:mb-12 min-[641px]:mb-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease }}
      >
        {values.title}
      </motion.h2>

      <div className="mx-auto max-w-[1100px]">
        {values.items.map((item, index) => {
          const showImage = index === 1 || index === 3;

          return (
            <div key={item}>
              <motion.p
                className={`font-display font-normal tracking-[-0.02em] text-ink ${
                  index % 2 === 0
                    ? "text-left text-[clamp(2.4rem,6.8vw,5.6rem)]"
                    : "text-right text-[clamp(2.2rem,6.2vw,5rem)] italic"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.85, ease }}
              >
                {item}
              </motion.p>

              {showImage && (
                <motion.div
                  className={`relative my-10 overflow-hidden max-[640px]:my-8 max-[640px]:h-[40vh] min-[641px]:my-14 min-[641px]:h-[46vh] ${
                    index === 1
                      ? "ml-0 mr-auto max-w-[500px]"
                      : "ml-auto mr-0 max-w-[460px]"
                  }`}
                  initial={{ opacity: 0, clipPath: "inset(12% 12% 12% 12%)" }}
                  whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{ duration: 1, ease }}
                >
                  <motion.div className="absolute inset-0" style={{ y: imageY }}>
                    <Image
                      src={
                        index === 1
                          ? aboutValuesImages.craft.src
                          : aboutValuesImages.atmosphere.src
                      }
                      alt={
                        index === 1
                          ? aboutValuesImages.craft.alt
                          : aboutValuesImages.atmosphere.alt
                      }
                      fill
                      className="scale-110 object-cover"
                      sizes="(max-width: 640px) 90vw, 500px"
                    />
                  </motion.div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
