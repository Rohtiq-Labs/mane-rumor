import Image from "next/image";
import type { ReactElement } from "react";

const LOGO_SRC = "/assets/logo/mane-rumor-logo-removebg-preview.png";

type BrandLogoProps = {
  alt: string;
  priority?: boolean;
  className?: string;
  /** Use on dark surfaces (footer, open mobile menu) */
  tone?: "default" | "onDark";
};

export const BrandLogo = ({
  alt,
  priority = false,
  className = "",
  tone = "default",
}: BrandLogoProps): ReactElement => {
  const toneClass =
    tone === "onDark"
      ? "brightness-0 invert opacity-95"
      : "";

  return (
    <Image
      src={LOGO_SRC}
      alt={alt}
      width={480}
      height={144}
      priority={priority}
      className={`h-[5.75rem] w-auto max-w-[78vw] object-contain min-[641px]:h-20 min-[641px]:max-w-none ${toneClass} ${className}`}
    />
  );
};
