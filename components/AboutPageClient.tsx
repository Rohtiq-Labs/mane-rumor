"use client";

import type { ReactElement, ReactNode } from "react";
import { PageTransition } from "@/components/layout/PageTransition";

type AboutPageClientProps = {
  children: ReactNode;
};

export const AboutPageClient = ({
  children,
}: AboutPageClientProps): ReactElement => {
  return <PageTransition>{children}</PageTransition>;
};
