import type { ReactElement } from "react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
  "aria-label"?: string;
  onClick?: () => void;
};

export const Button = ({
  href,
  children,
  variant = "light",
  className = "",
  "aria-label": ariaLabel,
  onClick,
}: ButtonProps): ReactElement => {
  const variantClasses =
    variant === "light"
      ? "text-paper border-paper hover:bg-paper hover:text-ink"
      : "text-oxblood border-oxblood hover:bg-oxblood hover:text-paper";

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`inline-block font-label font-semibold text-[0.72rem] tracking-[0.14em] uppercase px-[2.3rem] py-[1.05rem] border transition-[background,color] duration-400 ease-in-out ${variantClasses} ${className}`}
    >
      {children}
    </a>
  );
};
