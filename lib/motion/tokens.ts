import type { Transition, Variants } from "framer-motion";

export const easePremium = [0.22, 1, 0.36, 1] as const;

export const motionViewport = {
  once: true,
  amount: 0.2,
} as const;

export const motionDuration = {
  section: 0.95,
  heading: 0.95,
  body: 0.85,
  button: 0.8,
  image: 1.1,
  page: 0.45,
} as const;

export const motionDistance = {
  section: 28,
  heading: 24,
  body: 18,
  button: 14,
  image: 18,
} as const;

export const motionStagger = 0.1;

export const premiumTransition = (
  duration: number,
  delay = 0,
): Transition => ({
  duration,
  delay,
  ease: easePremium,
});

export const fadeUpVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0 },
});

export const imageRevealVariants: Variants = {
  hidden: { opacity: 0, y: motionDistance.image, scale: 1.03 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export const staggerContainerVariants = (
  stagger: number = motionStagger,
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: 0.04,
    },
  },
});
