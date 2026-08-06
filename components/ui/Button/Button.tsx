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
      ? "text-paper border-paper hover:bg-paper hover:text-ink hover:shadow-[0_14px_28px_-18px_rgba(255,252,250,0.55)]"
      : "text-oxblood border-oxblood hover:bg-oxblood hover:text-paper hover:shadow-[0_14px_28px_-18px_rgba(116,47,45,0.55)]";

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      className={`inline-block font-label font-semibold text-[0.72rem] tracking-[0.14em] uppercase px-[2.3rem] py-[1.05rem] border transition-[background-color,color,transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 ${variantClasses} ${className}`}
    >
      {children}
    </a>
  );
};
