"use client";

import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import {
  transformationFilters,
  type TransformationFilter,
} from "@/data/transformations";

type TransformationFilterNavProps = {
  active: TransformationFilter;
  onChange: (filter: TransformationFilter) => void;
};

export const TransformationFilterNav = ({
  active,
  onChange,
}: TransformationFilterNavProps): ReactElement => {
  const { dictionary } = useLocale();
  const { filters } = dictionary.transformationsPage;

  return (
    <nav
      className="border-b border-hairline bg-paper"
      aria-label={filters.aria}
    >
      <ul className="flex list-none gap-1 overflow-x-auto px-[6vw] py-5 scrollbar-none max-[640px]:gap-0 min-[641px]:justify-center min-[641px]:gap-2">
        {transformationFilters.map((filter) => {
          const isActive = active === filter;
          const label = filters[filter];

          return (
            <li key={filter} className="shrink-0">
              <button
                type="button"
                onClick={() => onChange(filter)}
                className={`relative px-4 py-2.5 font-label text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-400 max-[640px]:px-3 ${
                  isActive ? "text-oxblood" : "text-body hover:text-ink"
                }`}
                aria-pressed={isActive}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="transformation-filter-underline"
                    className="absolute bottom-0 left-4 right-4 h-px bg-oxblood max-[640px]:left-3 max-[640px]:right-3"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
