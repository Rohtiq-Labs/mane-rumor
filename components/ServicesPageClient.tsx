"use client";

import type { ReactElement, ReactNode } from "react";
import { PageTransition } from "@/components/layout/PageTransition";

type ServicesPageClientProps = {
  children: ReactNode;
};

export const ServicesPageClient = ({
  children,
}: ServicesPageClientProps): ReactElement => {
  return <PageTransition>{children}</PageTransition>;
};
