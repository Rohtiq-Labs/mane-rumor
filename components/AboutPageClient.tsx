"use client";

import type { ReactElement, ReactNode } from "react";

type AboutPageClientProps = {
  children: ReactNode;
};

export const AboutPageClient = ({
  children,
}: AboutPageClientProps): ReactElement => {
  return <>{children}</>;
};
