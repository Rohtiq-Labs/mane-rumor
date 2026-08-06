"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactElement } from "react";
import { easePremium, motionViewport } from "@/lib/motion";

export const Stitch = (): ReactElement => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="stitch run" aria-hidden="true" />
    );
  }

  return (
    <div className="stitch relative" aria-hidden="true">
      <motion.span
        className="absolute top-[-1px] left-0 h-[2px] origin-left bg-oxblood"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={motionViewport}
        transition={{ duration: 1.2, ease: easePremium }}
        style={{ width: "100%" }}
      />
    </div>
  );
};
