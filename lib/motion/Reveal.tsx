"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactElement, ReactNode } from "react";
import {
  fadeUpVariants,
  imageRevealVariants,
  motionDistance,
  motionDuration,
  motionStagger,
  motionViewport,
  premiumTransition,
  staggerContainerVariants,
} from "./tokens";

type RevealTone = "section" | "heading" | "body" | "button" | "label";

const toneConfig: Record<
  RevealTone,
  { y: number; duration: number }
> = {
  section: { y: motionDistance.section, duration: motionDuration.section },
  heading: { y: motionDistance.heading, duration: motionDuration.heading },
  body: { y: motionDistance.body, duration: motionDuration.body },
  button: { y: motionDistance.button, duration: motionDuration.button },
  label: { y: motionDistance.body, duration: motionDuration.body },
};

type RevealProps = {
  children: ReactNode;
  className?: string;
  tone?: RevealTone;
  delay?: number;
};

export const Reveal = ({
  children,
  className,
  tone = "section",
  delay = 0,
}: RevealProps): ReactElement => {
  const prefersReducedMotion = useReducedMotion();
  const { y, duration } = toneConfig[tone];

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUpVariants(y)}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      transition={premiumTransition(duration, delay)}
    >
      {children}
    </motion.div>
  );
};

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export const RevealGroup = ({
  children,
  className,
  stagger = motionStagger,
}: RevealGroupProps): ReactElement => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={staggerContainerVariants(stagger)}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
    >
      {children}
    </motion.div>
  );
};

type RevealItemProps = {
  children: ReactNode;
  className?: string;
  tone?: RevealTone;
};

export const RevealItem = ({
  children,
  className,
  tone = "section",
}: RevealItemProps): ReactElement => {
  const prefersReducedMotion = useReducedMotion();
  const { y, duration } = toneConfig[tone];

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUpVariants(y)}
      transition={premiumTransition(duration)}
    >
      {children}
    </motion.div>
  );
};

type RevealImageProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Parent RevealGroup drives visibility when true */
  staggered?: boolean;
};

export const RevealImage = ({
  children,
  className,
  delay = 0,
  staggered = false,
}: RevealImageProps): ReactElement => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  if (staggered) {
    return (
      <motion.div
        className={className}
        variants={imageRevealVariants}
        transition={premiumTransition(motionDuration.image)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={imageRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={motionViewport}
      transition={premiumTransition(motionDuration.image, delay)}
    >
      {children}
    </motion.div>
  );
};
