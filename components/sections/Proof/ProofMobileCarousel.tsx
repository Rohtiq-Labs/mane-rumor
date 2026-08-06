"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactElement,
} from "react";
import { easePremium, motionDuration } from "@/lib/motion";

const AUTO_ADVANCE_MS = 5200;
const RESUME_AFTER_MS = 2800;

export type ProofQuote = {
  text: string;
  who: string;
};

type ProofMobileCarouselProps = {
  quotes: ProofQuote[];
  label: string;
};

export const ProofMobileCarousel = ({
  quotes,
  label,
}: ProofMobileCarouselProps): ReactElement => {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const resumeTimerRef = useRef<number | null>(null);

  const count = quotes.length;
  const active = quotes[index] ?? quotes[0];

  const clearResumeTimer = useCallback((): void => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const goTo = useCallback(
    (next: number): void => {
      if (count === 0) {
        return;
      }
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const goNext = useCallback((): void => {
    goTo(index + 1);
  }, [goTo, index]);

  const goPrev = useCallback((): void => {
    goTo(index - 1);
  }, [goTo, index]);

  const pauseTemporarily = useCallback((): void => {
    setPaused(true);
    clearResumeTimer();
    resumeTimerRef.current = window.setTimeout(() => {
      setPaused(false);
      resumeTimerRef.current = null;
    }, RESUME_AFTER_MS);
  }, [clearResumeTimer]);

  useEffect(() => {
    if (prefersReducedMotion || paused || count < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, [prefersReducedMotion, paused, count]);

  useEffect(() => {
    return () => {
      clearResumeTimer();
    };
  }, [clearResumeTimer]);

  if (!active) {
    return <></>;
  }

  return (
    <div
      className="min-[641px]:hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div
        className="relative touch-[pan-y]"
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0]?.clientX ?? null;
          pauseTemporarily();
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) {
            return;
          }
          const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
          const delta = endX - touchStartX.current;
          touchStartX.current = null;
          if (Math.abs(delta) < 48) {
            return;
          }
          if (delta < 0) {
            goNext();
          } else {
            goPrev();
          }
        }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-hairline"
          aria-hidden="true"
        />

        <div className="relative min-h-[22rem] overflow-hidden py-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.blockquote
              key={active.text}
              className="flex h-full flex-col justify-between"
              initial={
                prefersReducedMotion ? false : { opacity: 0, y: 18 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                prefersReducedMotion ? undefined : { opacity: 0, y: -12 }
              }
              transition={{
                duration: motionDuration.section,
                ease: easePremium,
              }}
              aria-live="polite"
            >
              <p className="font-display italic font-normal text-[clamp(1.55rem,6.5vw,2.05rem)] leading-[1.35] tracking-[-0.01em] text-ink">
                {active.text}
              </p>
              <footer className="mt-10">
                <div
                  className="mb-5 h-px w-10 bg-oxblood/50"
                  aria-hidden="true"
                />
                <cite className="font-label text-[0.68rem] font-semibold not-italic uppercase tracking-[0.16em] text-oxblood">
                  {active.who}
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-hairline"
          aria-hidden="true"
        />
      </div>

      <div className="mt-8 flex items-center justify-between gap-6">
        <div
          className="flex flex-1 items-center gap-2"
          role="tablist"
          aria-label={label}
        >
          {quotes.map((quote, i) => (
            <button
              key={quote.who}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => {
                goTo(i);
                pauseTemporarily();
              }}
              className="group relative h-8 flex-1"
            >
              <span
                className={`absolute top-1/2 left-0 h-px w-full -translate-y-1/2 transition-colors duration-500 ${
                  i === index
                    ? "bg-oxblood/35"
                    : "bg-hairline group-hover:bg-body/40"
                }`}
              />
              {i === index && !prefersReducedMotion ? (
                <motion.span
                  key={`progress-${index}`}
                  className="absolute top-1/2 left-0 h-[2px] origin-left -translate-y-1/2 bg-oxblood"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: AUTO_ADVANCE_MS / 1000,
                    ease: "linear",
                  }}
                  style={{ width: "100%" }}
                />
              ) : i === index ? (
                <span className="absolute top-1/2 left-0 h-[2px] w-full -translate-y-1/2 bg-oxblood" />
              ) : null}
            </button>
          ))}
        </div>
        <span className="shrink-0 font-label text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-body">
          {String(index + 1).padStart(2, "0")}
          <span className="mx-1.5 text-hairline">/</span>
          {String(count).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};
