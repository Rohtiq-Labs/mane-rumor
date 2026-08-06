"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  type ReactElement,
} from "react";
import { galleryPieces } from "@/data/gallery";

const cardRhythm = [
  "h-[52vh] w-[72vw]",
  "h-[44vh] w-[62vw]",
  "h-[56vh] w-[68vw]",
  "h-[46vh] w-[58vw]",
  "h-[50vh] w-[70vw]",
] as const;

const AUTO_ADVANCE_MS = 3000;
const RESUME_AFTER_MS = 2500;

type GalleryMobileSliderProps = {
  caption: string;
  label: string;
};

export const GalleryMobileSlider = ({
  caption,
  label,
}: GalleryMobileSliderProps): ReactElement => {
  const prefersReducedMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const resumeTimerRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const isTouchingRef = useRef(false);

  const clearResumeTimer = useCallback((): void => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const pauseAutoplay = useCallback((): void => {
    isPausedRef.current = true;
    clearResumeTimer();
  }, [clearResumeTimer]);

  const resumeAutoplaySoon = useCallback((): void => {
    clearResumeTimer();
    resumeTimerRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
      resumeTimerRef.current = null;
    }, RESUME_AFTER_MS);
  }, [clearResumeTimer]);

  const scrollByCard = useCallback(
    (direction: 1 | -1): void => {
      const scroller = scrollerRef.current;
      if (!scroller) {
        return;
      }

      const cards = Array.from(
        scroller.querySelectorAll<HTMLElement>("[data-gallery-card]"),
      );
      if (cards.length === 0) {
        return;
      }

      const scrollerCenter = scroller.scrollLeft + scroller.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - scrollerCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      let nextIndex = closestIndex + direction;
      if (nextIndex >= cards.length) {
        nextIndex = 0;
      }
      if (nextIndex < 0) {
        nextIndex = cards.length - 1;
      }

      const target = cards[nextIndex];
      if (!target) {
        return;
      }

      scroller.scrollTo({
        left:
          target.offsetLeft - (scroller.clientWidth - target.offsetWidth) / 2,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    },
    [prefersReducedMotion],
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    // Autoplay on by default
    const timer = window.setInterval(() => {
      if (isPausedRef.current || isTouchingRef.current) {
        return;
      }
      scrollByCard(1);
    }, AUTO_ADVANCE_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, [prefersReducedMotion, scrollByCard]);

  useEffect(() => {
    return () => {
      clearResumeTimer();
    };
  }, [clearResumeTimer]);

  return (
    <div className="min-[641px]:hidden">
      <div
        ref={scrollerRef}
        className="relative -mx-[6vw] flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain px-[6vw] py-2 scrollbar-none touch-pan-x"
        aria-label={label}
        aria-roledescription="carousel"
        onTouchStart={() => {
          isTouchingRef.current = true;
          pauseAutoplay();
        }}
        onTouchEnd={() => {
          isTouchingRef.current = false;
          resumeAutoplaySoon();
        }}
        onTouchCancel={() => {
          isTouchingRef.current = false;
          resumeAutoplaySoon();
        }}
        onPointerDown={(event) => {
          if (event.pointerType !== "touch") {
            return;
          }
          isTouchingRef.current = true;
          pauseAutoplay();
        }}
        onPointerUp={(event) => {
          if (event.pointerType !== "touch") {
            return;
          }
          isTouchingRef.current = false;
          resumeAutoplaySoon();
        }}
      >
        {galleryPieces.map((piece, index) => {
          const rhythm = cardRhythm[index % cardRhythm.length];

          return (
            <figure
              key={piece.id}
              data-gallery-card
              className={`relative shrink-0 snap-center overflow-hidden shadow-[0_28px_50px_-28px_rgba(38,35,34,0.45)] ${rhythm}`}
            >
              <Image
                src={piece.src}
                alt={piece.alt}
                fill
                className="pointer-events-none select-none object-cover saturate-[0.92] contrast-[1.03]"
                sizes="75vw"
                draggable={false}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(38,35,34,0.28)_100%)]"
                aria-hidden="true"
              />
            </figure>
          );
        })}
      </div>

      <p className="mt-8 font-display italic text-[1.25rem] leading-snug text-oxblood max-w-[18ch]">
        {caption}
      </p>
    </div>
  );
};
