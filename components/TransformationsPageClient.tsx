"use client";

import type { ReactElement, ReactNode } from "react";

type TransformationsPageClientProps = {
  children: ReactNode;
};

export const TransformationsPageClient = ({
  children,
}: TransformationsPageClientProps): ReactElement => {
  return <>{children}</>;
};
