"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import type { TransformationMeta } from "@/data/transformations";

type TransformationCardProps = {
  item: TransformationMeta;
  index: number;
  onOpen: (id: string) => void;
};

const shellClass: Record<TransformationMeta["layout"], string> = {
  hero: "min-[641px]:col-span-12",
  portrait: "min-[641px]:col-span-5",
  landscape: "min-[641px]:col-span-7 min-[641px]:mt-24",
  offset: "min-[641px]:col-span-5 min-[641px]:col-start-8 min-[641px]:-mt-16",
};

const imageClass: Record<TransformationMeta["layout"], string> = {
  hero: "aspect-[4/5] min-[641px]:aspect-[16/10]",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[5/4] min-[641px]:aspect-[16/10]",
  offset: "aspect-[4/5]",
};

export const TransformationCard = ({
  item,
  index,
  onOpen,
}: TransformationCardProps): ReactElement => {
  const { dictionary } = useLocale();
  const { filters, featured, items } = dictionary.transformationsPage;
  const copy = items[item.id];
  const isHero = item.layout === "hero";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 36 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20, scale: 0.98 }}
      transition={{
        duration: 0.55,
        delay: index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative max-[640px]:mb-4 ${shellClass[item.layout]}`}
    >
      <button
        type="button"
        onClick={() => onOpen(item.id)}
        className={`w-full text-left outline-none focus-visible:ring-2 focus-visible:ring-oxblood focus-visible:ring-offset-4 focus-visible:ring-offset-paper ${
          isHero
            ? "min-[641px]:grid min-[641px]:grid-cols-12 min-[641px]:items-end min-[641px]:gap-10"
            : "block"
        }`}
        aria-label={`${featured.viewDetails}: ${copy?.title ?? item.alt}`}
      >
        <div
          className={`relative overflow-hidden bg-mist ${imageClass[item.layout]} ${
            isHero ? "min-[641px]:col-span-8" : ""
          }`}
        >
          <Image
            src={item.afterSrc}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes={
              item.layout === "hero"
                ? "(max-width: 640px) 100vw, 66vw"
                : "(max-width: 640px) 100vw, 42vw"
            }
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(38,35,34,0.35)_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 max-[640px]:opacity-40" />
          <span className="absolute bottom-4 left-4 font-label text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-paper opacity-0 transition-opacity duration-500 group-hover:opacity-100 max-[640px]:opacity-100">
            {featured.beforeAfter}
          </span>
        </div>

        <div
          className={`mt-5 ${
            isHero ? "min-[641px]:col-span-4 min-[641px]:mt-0 min-[641px]:pb-2" : ""
          }`}
        >
          <span className="mb-2.5 block font-label text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-oxblood">
            {filters[item.category]}
          </span>
          <h3 className="font-display text-[clamp(1.35rem,2.2vw,1.75rem)] font-normal text-ink transition-transform duration-500 group-hover:translate-x-1">
            {copy?.title}
          </h3>
          <p className="mt-2.5 max-w-[34ch] text-[0.95rem] leading-[1.65] text-body">
            {copy?.goal}
          </p>
        </div>
      </button>
    </motion.article>
  );
};
