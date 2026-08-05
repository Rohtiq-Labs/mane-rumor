"use client";

import type { ReactElement, ReactNode } from "react";
import { useManeRumorAnimations } from "@/lib/animations/use-mane-rumor-animations";

type HomePageClientProps = {
  children: ReactNode;
};

export const HomePageClient = ({
  children,
}: HomePageClientProps): ReactElement => {
  useManeRumorAnimations();
  return <>{children}</>;
};
