"use client";

import { AnimatePresence } from "framer-motion";
import { useMemo, useState, type ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import {
  transformations,
  type TransformationFilter,
} from "@/data/transformations";
import { TransformationCard } from "./TransformationCard";
import { TransformationFilterNav } from "./TransformationFilterNav";
import { TransformationLightbox } from "./TransformationLightbox";

export const FeaturedTransformations = (): ReactElement => {
  const { dictionary } = useLocale();
  const { featured } = dictionary.transformationsPage;
  const [filter, setFilter] = useState<TransformationFilter>("all");
  const [activeId, setActiveId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") {
      return transformations;
    }
    return transformations.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <section
      className="featured-transformations bg-paper"
      id="work"
      aria-labelledby="featured-label"
    >
      <div className="px-[6vw] pt-16 pb-4 max-[640px]:pt-12 min-[641px]:pt-20 min-[641px]:pb-6">
        <span
          id="featured-label"
          className="font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-oxblood"
        >
          {featured.label}
        </span>
      </div>

      <div className="sticky top-16 z-30">
        <TransformationFilterNav active={filter} onChange={setFilter} />
      </div>

      <div className="px-[6vw] py-12 max-[640px]:py-8 min-[641px]:py-20">
        <div className="max-[640px]:block min-[641px]:grid min-[641px]:grid-cols-12 min-[641px]:gap-x-8 min-[641px]:gap-y-20">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <div
                key={item.id}
                className={
                  index % 2 === 1
                    ? "max-[640px]:-mx-[6vw] max-[640px]:bg-canvas max-[640px]:px-[6vw] max-[640px]:py-10 min-[641px]:contents"
                    : "max-[640px]:py-2 min-[641px]:contents"
                }
              >
                <TransformationCard
                  item={item}
                  index={index}
                  onOpen={setActiveId}
                />
              </div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <TransformationLightbox
        items={filtered}
        activeId={activeId}
        onClose={() => setActiveId(null)}
        onNavigate={setActiveId}
      />
    </section>
  );
};
