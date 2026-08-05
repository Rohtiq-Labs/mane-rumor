"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { navLinks } from "@/data/nav";

export const Nav = (): ReactElement => {
  const { dictionary } = useLocale();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isServices = pathname === "/services";
  const isTransformations = pathname === "/transformations";
  const isContact = pathname === "/contact";
  const hasPageBookAnchor =
    isAbout || isServices || isTransformations || isContact;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-[6vw] py-8 mix-blend-difference text-white"
      aria-label="Primary"
    >
      <Link
        href="/"
        className="font-display font-medium text-[1.15rem] tracking-[0.02em]"
      >
        {dictionary.brand.name}
      </Link>
      <ul className="flex list-none gap-[1.1rem] max-[720px]:gap-[1rem] min-[721px]:gap-[2.2rem]">
        {navLinks.map((link) => {
          const href = isHome ? link.homeHref : link.href;
          const isActive =
            (link.labelKey === "about" && isAbout) ||
            (link.labelKey === "services" && isServices) ||
            (link.labelKey === "transformations" && isTransformations) ||
            (link.labelKey === "contact" && isContact);

          const bookHref =
            hasPageBookAnchor && link.labelKey === "book" ? "#book" : href;

          return (
            <li key={link.labelKey}>
              <Link
                href={bookHref}
                className={`font-label text-[0.58rem] min-[721px]:text-[0.7rem] tracking-[0.14em] uppercase font-semibold ${
                  isActive ? "opacity-100" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {dictionary.nav[link.labelKey]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
