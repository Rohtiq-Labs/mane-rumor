"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { resultsImagery } from "@/data/transformations";
import {
  easePremium,
  motionDuration,
  motionViewport,
} from "@/lib/motion";

export const ResultsStatements = (): ReactElement => {
  const { dictionary } = useLocale();
  const { results } = dictionary.transformationsPage;
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
      className="results-statements bg-canvas px-[6vw] py-24 max-[640px]:py-16 min-[641px]:py-32"
      id="results"
      aria-labelledby="results-label"
    >
      <motion.span
        id="results-label"
        className="mb-14 block font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-oxblood max-[640px]:mb-10"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={motionViewport}
        transition={{ duration: motionDuration.body, ease: easePremium }}
      >
        {results.label}
      </motion.span>

      <div className="mx-auto max-w-[1100px]">
        {results.lines.map((line, index) => {
          const showImage = index === 1 || index === 3;

          return (
            <div key={line}>
              <motion.h2
                className={`font-display font-normal tracking-[-0.02em] text-ink ${
                  index % 2 === 0
                    ? "text-left text-[clamp(2.6rem,7vw,5.8rem)]"
                    : "text-right text-[clamp(2.4rem,6.5vw,5.2rem)] italic"
                }`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={motionViewport}
                transition={{
                  duration: motionDuration.heading,
                  ease: easePremium,
                }}
              >
                {line}
              </motion.h2>

              {showImage && (
                <motion.div
                  className={`group relative my-10 overflow-hidden max-[640px]:my-8 max-[640px]:h-[42vh] min-[641px]:my-14 min-[641px]:h-[48vh] ${
                    index === 1
                      ? "ml-0 mr-auto max-w-[520px]"
                      : "ml-auto mr-0 max-w-[480px]"
                  }`}
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, y: 18, scale: 1.03 }
                  }
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={motionViewport}
                  transition={{
                    duration: motionDuration.image,
                    ease: easePremium,
                  }}
                >
                  <motion.div className="absolute inset-0" style={{ y: imageY }}>
                    <Image
                      src={
                        index === 1
                          ? resultsImagery.healthy
                          : resultsImagery.finish
                      }
                      alt=""
                      fill
                      className="object-cover scale-110 transition-transform duration-700 ease-out group-hover:scale-[1.12]"
                      sizes="(max-width: 640px) 90vw, 520px"
                      aria-hidden="true"
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
