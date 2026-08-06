"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, type ReactElement } from "react";
import { Button } from "@/components/ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

export type InnerPageHeroProps = {
  label?: string;
  titleLine1: string;
  titleLine2?: string;
  support: string;
  image: {
    src: string;
    alt: string;
  };
  cta?: {
    label: string;
    href: string;
  };
  /** Mobile-only hero height. Desktop stays 70vh. */
  mobileHeight?: "60vh" | "70vh";
};

export const InnerPageHero = ({
  label,
  titleLine1,
  titleLine2,
  support,
  image,
  cta,
  mobileHeight = "70vh",
}: InnerPageHeroProps): ReactElement => {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["0%", "12%"],
  );

  return (
    <section
      ref={ref}
      id="top"
      aria-labelledby="inner-hero-title"
      className={`relative overflow-hidden bg-canvas min-[641px]:h-[70vh] min-[641px]:min-h-[70vh] ${
        mobileHeight === "60vh"
          ? "h-[60vh] min-h-[360px] max-[640px]:h-[60vh] max-[640px]:min-h-[360px]"
          : "h-[70vh] min-h-[480px] max-[640px]:min-h-[520px]"
      }`}
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          className="scale-105 object-cover object-[center_20%] saturate-[0.9] contrast-[1.02] max-[640px]:object-[center_18%] min-[641px]:object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Desktop: soft left wash */}
      <div
        className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(105deg,rgba(245,230,223,0.94)_0%,rgba(245,230,223,0.82)_36%,rgba(245,230,223,0.35)_62%,rgba(38,35,34,0.28)_100%)] min-[641px]:block"
        aria-hidden="true"
      />

      {/* Mobile: bottom editorial panel for readable premium type */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(245,230,223,0.12)_0%,rgba(245,230,223,0.2)_38%,rgba(245,230,223,0.78)_68%,rgba(245,230,223,0.96)_100%)] min-[641px]:hidden"
        aria-hidden="true"
      />

      <div className="relative z-[1] flex h-full items-end px-[6vw] pb-[clamp(2.25rem,7vh,3.5rem)] pt-24 max-[640px]:pb-[clamp(2.5rem,8vh,3.75rem)] min-[641px]:items-center min-[641px]:pb-0 min-[641px]:pt-0">
        <div className="w-full max-w-[34rem] max-[640px]:max-w-[22rem]">
          {label ? (
            <>
              <motion.span
                className="mb-5 block font-label text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-oxblood max-[640px]:mb-4 min-[641px]:mb-6 min-[641px]:text-[0.72rem] min-[641px]:tracking-[0.18em]"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease }}
              >
                {label}
              </motion.span>

              <motion.div
                className="mb-6 h-px w-12 origin-left bg-oxblood/40 max-[640px]:mb-5 min-[641px]:mb-8 min-[641px]:w-14"
                initial={prefersReducedMotion ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
                aria-hidden="true"
              />
            </>
          ) : null}

          <motion.h1
            id="inner-hero-title"
            className="font-display text-[clamp(2.85rem,11vw,3.4rem)] font-normal leading-[0.98] tracking-[-0.03em] text-ink min-[641px]:text-[clamp(2.6rem,6.5vw,4.8rem)] min-[641px]:leading-[1.02] min-[641px]:tracking-[-0.02em]"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.08, ease }}
          >
            {titleLine1}
            {titleLine2 ? (
              <>
                <br />
                <em className="italic font-normal text-oxblood">{titleLine2}</em>
              </>
            ) : null}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-[28ch] text-[0.98rem] leading-[1.65] tracking-[0.01em] text-ink/75 max-[640px]:mt-4 min-[641px]:mt-8 min-[641px]:max-w-[40ch] min-[641px]:text-[1.05rem] min-[641px]:leading-[1.75] min-[641px]:text-body"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.16, ease }}
          >
            {support}
          </motion.p>

          {cta ? (
            <motion.div
              className="mt-8 max-[640px]:mt-7 min-[641px]:mt-10"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.24, ease }}
            >
              <Button href={cta.href} variant="dark" aria-label={cta.label}>
                {cta.label}
              </Button>
            </motion.div>
          ) : null}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[1] h-px bg-hairline" aria-hidden="true" />
    </section>
  );
};
