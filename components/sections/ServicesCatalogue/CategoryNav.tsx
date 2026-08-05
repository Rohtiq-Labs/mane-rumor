"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactElement,
} from "react";
import { serviceCatalogue } from "@/data/service-catalog";

type CategoryNavProps = {
  ariaLabel: string;
  labels: Record<string, string>;
  activeId: string;
  onSelect: (id: string) => void;
};

export const CategoryNav = ({
  ariaLabel,
  labels,
  activeId,
  onSelect,
}: CategoryNavProps): ReactElement => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const onScroll = (): void => {
      const nav = scrollerRef.current?.parentElement;
      if (!nav) {
        return;
      }
      setIsStuck(nav.getBoundingClientRect().top <= 64);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) {
      return;
    }

    const activeButton = scroller.querySelector<HTMLButtonElement>(
      `[data-category-id="${activeId}"]`,
    );
    if (!activeButton) {
      return;
    }

    const target =
      activeButton.offsetLeft -
      scroller.clientWidth / 2 +
      activeButton.clientWidth / 2;

    scroller.scrollTo({
      left: Math.max(0, target),
      behavior: "smooth",
    });
  }, [activeId]);

  return (
    <nav
      className={`sticky top-16 z-40 border-b border-hairline transition-[background,box-shadow] duration-400 max-[640px]:block min-[641px]:hidden ${
        isStuck ? "bg-paper/95 shadow-[0_8px_24px_rgba(38,35,34,0.04)] backdrop-blur-md" : "bg-paper"
      }`}
      aria-label={ariaLabel}
    >
      <div
        ref={scrollerRef}
        className="flex gap-1 overflow-x-auto px-[5vw] py-3 scrollbar-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {serviceCatalogue.map((category) => {
          const isActive = category.id === activeId;

          return (
            <button
              key={category.id}
              type="button"
              data-category-id={category.id}
              onClick={() => onSelect(category.id)}
              className={`shrink-0 whitespace-nowrap px-3.5 py-2 font-label text-[0.65rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                isActive
                  ? "text-oxblood"
                  : "text-body hover:text-ink"
              }`}
              aria-current={isActive ? "true" : undefined}
            >
              {labels[category.id] ?? category.navLabel}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="mt-1.5 block h-px w-full bg-oxblood"
                />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};
