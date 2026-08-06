"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactElement, ReactNode } from "react";
import { easePremium, motionDuration } from "@/lib/motion";

type PageTransitionProps = {
  children: ReactNode;
};

export const PageTransition = ({
  children,
}: PageTransitionProps): ReactElement => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: motionDuration.page,
        ease: easePremium,
      }}
    >
      {children}
    </motion.div>
  );
};
