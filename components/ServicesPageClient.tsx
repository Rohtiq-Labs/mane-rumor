"use client";

import type { ReactElement, ReactNode } from "react";
import { useServicesPageAnimations } from "@/lib/animations/use-services-page-animations";

type ServicesPageClientProps = {
  children: ReactNode;
};

export const ServicesPageClient = ({
  children,
}: ServicesPageClientProps): ReactElement => {
  useServicesPageAnimations();
  return <>{children}</>;
};
