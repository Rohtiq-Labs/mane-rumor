"use client";

import type { ReactElement, ReactNode } from "react";

type ContactPageClientProps = {
  children: ReactNode;
};

export const ContactPageClient = ({
  children,
}: ContactPageClientProps): ReactElement => {
  return <>{children}</>;
};
