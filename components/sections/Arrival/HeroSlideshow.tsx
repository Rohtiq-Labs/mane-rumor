"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  useEffect,
  useState,
  type ReactElement,
} from "react";
import {
  HERO_SLIDE_INTERVAL_MS,
  heroSlides,
} from "@/data/hero-slides";

const easeLuxury = [0.65, 0, 0.35, 1] as const;

export const HeroSlideshow = (): ReactElement => {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion || heroSlides.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => {
        const next = (current + 1) % heroSlides.length;
        if (next === 0) {
          setCycle((value) => value + 1);
        }
        return next;
      });
    }, HERO_SLIDE_INTERVAL_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, [prefersReducedMotion]);

  const activeSlide = heroSlides[activeIndex] ?? heroSlides[0];

  return (
    <div
      className="frame absolute inset-0 overflow-hidden after:absolute after:inset-0 after:z-[1] after:bg-[linear-gradient(180deg,rgba(38,35,34,0.2)_0%,rgba(38,35,34,0.08)_42%,rgba(38,35,34,0.58)_100%)] after:content-['']"
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Base layer prevents empty flash between transitions */}
      <div className="absolute inset-0">
        <Image
          src={heroSlides[0].src}
          alt=""
          fill
          priority
          aria-hidden="true"
          className="object-cover saturate-[0.9] contrast-[1.03]"
          sizes="100vw"
        />
      </div>

      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={activeSlide.id}
          className="absolute inset-0"
          initial={
            prefersReducedMotion
              ? { opacity: 1 }
              : {
                  opacity: 0,
                  scale: 1.14,
                  clipPath: "inset(14% 10% 14% 10%)",
                  filter: "blur(8px)",
                }
          }
          animate={{
            opacity: 1,
            scale: 1.05,
            clipPath: "inset(0% 0% 0% 0%)",
            filter: "blur(0px)",
          }}
          exit={
            prefersReducedMotion
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  scale: 1.1,
                  clipPath: "inset(0% 0% 22% 0%)",
                  filter: "blur(3px)",
                }
          }
          transition={{
            duration: prefersReducedMotion ? 0.01 : 0.55,
            ease: easeLuxury,
          }}
        >
          <Image
            src={activeSlide.src}
            alt={activeSlide.alt}
            fill
            priority={activeIndex === 0}
            className="object-cover saturate-[0.9] contrast-[1.03]"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        key={`veil-${activeSlide.id}-${cycle}`}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-oxblood mix-blend-multiply"
        initial={{ opacity: prefersReducedMotion ? 0 : 0.2 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: easeLuxury }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 z-[2] flex gap-2.5 px-[6vw] pb-5"
        aria-hidden="true"
      >
        {heroSlides.map((slide, index) => {
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;

          return (
            <div
              key={slide.id}
              className="relative h-px flex-1 overflow-hidden bg-paper/20"
            >
              {isPast && <div className="absolute inset-0 bg-canvas/80" />}
              {isActive && (
                <motion.div
                  key={`fill-${cycle}-${activeIndex}`}
                  className="absolute inset-y-0 left-0 bg-canvas"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={
                    prefersReducedMotion
                      ? { duration: 0 }
                      : {
                          duration: HERO_SLIDE_INTERVAL_MS / 1000,
                          ease: "linear",
                        }
                  }
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
