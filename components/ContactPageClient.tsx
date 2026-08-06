"use client";

import type { ReactElement, ReactNode } from "react";
import { PageTransition } from "@/components/layout/PageTransition";

type ContactPageClientProps = {
  children: ReactNode;
};

export const ContactPageClient = ({
  children,
}: ContactPageClientProps): ReactElement => {
  return <PageTransition>{children}</PageTransition>;
};
