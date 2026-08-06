"use client";

import type { ReactElement, ReactNode } from "react";
import { PageTransition } from "@/components/layout/PageTransition";

type TransformationsPageClientProps = {
  children: ReactNode;
};

export const TransformationsPageClient = ({
  children,
}: TransformationsPageClientProps): ReactElement => {
  return <PageTransition>{children}</PageTransition>;
};
