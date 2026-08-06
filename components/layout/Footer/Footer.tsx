"use client";

import Link from "next/link";
import type { ReactElement } from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useLocale } from "@/context/LocaleContext";
import { RevealGroup, RevealItem } from "@/lib/motion";

export const Footer = (): ReactElement => {
  const { dictionary } = useLocale();

  return (
    <footer className="border-t border-white/8 bg-ink px-[6vw] py-12 text-[#B9AFA9]">
      <RevealGroup className="flex flex-col items-start justify-between gap-8 min-[641px]:flex-row min-[641px]:items-center">
        <RevealItem tone="button">
          <Link
            href="/"
            className="shrink-0"
            aria-label={dictionary.brand.name}
          >
            <BrandLogo alt={dictionary.brand.name} tone="onDark" />
          </Link>
        </RevealItem>

        <RevealItem
          tone="body"
          className="flex flex-wrap items-center gap-x-8 gap-y-3 font-label text-[0.7rem] uppercase tracking-[0.08em]"
        >
          <span>{dictionary.footer.copyright}</span>
          <span>{dictionary.brand.location}</span>
          <span>{dictionary.brand.handle}</span>
        </RevealItem>
      </RevealGroup>
    </footer>
  );
};
