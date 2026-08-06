"use client";

import type { ReactElement, ReactNode } from "react";
import { PageTransition } from "@/components/layout/PageTransition";

type HomePageClientProps = {
  children: ReactNode;
};

export const HomePageClient = ({
  children,
}: HomePageClientProps): ReactElement => {
  return <PageTransition>{children}</PageTransition>;
};
