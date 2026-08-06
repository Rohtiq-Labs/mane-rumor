"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  type ReactElement,
} from "react";
import { useLocale } from "@/context/LocaleContext";
import { aboutTeam } from "@/data/about";
import { Reveal, RevealGroup, RevealItem } from "@/lib/motion";

const AUTO_SCROLL_PX = 0.45;
const RESUME_AFTER_MS = 2400;

export const AboutTeam = (): ReactElement => {
  const { dictionary } = useLocale();
  const { team } = dictionary.aboutPage;
  const prefersReducedMotion = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const isTouchingRef = useRef(false);
  const resumeTimerRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);

  const clearResumeTimer = useCallback((): void => {
    if (resumeTimerRef.current !== null) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const pauseMotion = useCallback((): void => {
    isPausedRef.current = true;
    clearResumeTimer();
  }, [clearResumeTimer]);

  const resumeMotionSoon = useCallback((): void => {
    clearResumeTimer();
    resumeTimerRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
      resumeTimerRef.current = null;
    }, RESUME_AFTER_MS);
  }, [clearResumeTimer]);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const media = window.matchMedia("(max-width: 640px)");

    const tick = (): void => {
      const scroller = scrollerRef.current;
      if (
        scroller &&
        media.matches &&
        !isPausedRef.current &&
        !isTouchingRef.current
      ) {
        const halfWidth = scroller.scrollWidth / 2;
        scroller.scrollLeft += AUTO_SCROLL_PX;
        if (scroller.scrollLeft >= halfWidth) {
          scroller.scrollLeft -= halfWidth;
        }
      }
      rafRef.current = window.requestAnimationFrame(tick);
    };

    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
      clearResumeTimer();
    };
  }, [prefersReducedMotion, clearResumeTimer]);

  const loopMembers = [...aboutTeam, ...aboutTeam];

  return (
    <section
      className="about-team overflow-hidden bg-canvas py-20 min-[641px]:py-14"
      id="team"
      aria-labelledby="about-team-title"
    >
      <Reveal tone="heading" className="mb-12 px-[6vw] min-[641px]:mb-8">
        <h2
          id="about-team-title"
          className="font-display text-[clamp(2.4rem,5vw,3.2rem)] font-normal leading-[1.05] tracking-[-0.02em] text-ink"
        >
          {team.title}
        </h2>
      </Reveal>

      {/* Mobile — ≤640px: horizontal sliding marquee */}
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto overscroll-x-contain px-[6vw] pb-2 scrollbar-none touch-[pan-x_pan-y] min-[641px]:hidden"
        aria-label={team.title}
        onTouchStart={() => {
          isTouchingRef.current = true;
          pauseMotion();
        }}
        onTouchEnd={() => {
          isTouchingRef.current = false;
          resumeMotionSoon();
        }}
        onTouchCancel={() => {
          isTouchingRef.current = false;
          resumeMotionSoon();
        }}
      >
        {loopMembers.map((member, index) => {
          const copy = team.members[member.id];
          const isClone = index >= aboutTeam.length;

          return (
            <figure
              key={`${member.id}-${index}`}
              className="w-[58vw] shrink-0"
              aria-hidden={isClone}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={isClone ? "" : copy.name}
                  fill
                  className="object-cover object-top saturate-[0.92] contrast-[1.02]"
                  sizes="58vw"
                  draggable={false}
                />
              </div>
              <figcaption className="mt-4 font-display text-[clamp(1.15rem,2.5vw,1.45rem)] font-normal tracking-[-0.01em] text-ink">
                {copy.name}
              </figcaption>
            </figure>
          );
        })}
      </div>

      {/* Desktop — ≥641px: fixed row of all 6 */}
      <RevealGroup
        className="hidden list-none grid-cols-6 gap-5 px-[6vw] min-[641px]:grid"
        stagger={0.08}
      >
        {aboutTeam.map((member) => {
          const copy = team.members[member.id];

          return (
            <RevealItem key={member.id}>
              <figure>
                <div className="group relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={copy.name}
                    fill
                    className="object-cover object-top saturate-[0.92] contrast-[1.02] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    sizes="16vw"
                  />
                </div>
                <figcaption className="mt-2.5 font-display text-[1.05rem] font-normal tracking-[-0.01em] text-ink">
                  {copy.name}
                </figcaption>
              </figure>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
};
