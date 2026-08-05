import Image from "next/image";
import type { ReactElement } from "react";

type BrandLogoProps = {
  alt: string;
  priority?: boolean;
  className?: string;
  size?: "nav" | "footer";
};

const sizeMap = {
  nav: {
    width: 52,
    height: 52,
    className: "h-11 w-11 min-[721px]:h-12 min-[721px]:w-12",
  },
  footer: {
    width: 72,
    height: 72,
    className: "h-14 w-14 min-[721px]:h-16 min-[721px]:w-16",
  },
} as const;

export const BrandLogo = ({
  alt,
  priority = false,
  className = "",
  size = "nav",
}: BrandLogoProps): ReactElement => {
  const dimensions = sizeMap[size];

  return (
    <Image
      src="/assets/logo/logo.jpg"
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      priority={priority}
      className={`object-cover ${dimensions.className} ${className}`}
    />
  );
};
