"use client";

import type { ReactElement } from "react";

type ServiceRowProps = {
  name: string;
  description: string;
  price: string;
  startingAtLabel: string;
  bookLabel: string;
  bookHref: string;
};

export const ServiceRow = ({
  name,
  description,
  price,
  startingAtLabel,
  bookLabel,
  bookHref,
}: ServiceRowProps): ReactElement => {
  const priceDisplay =
    price === "Free" ? price : `${startingAtLabel} ${price}`;

  return (
    <div className="service-row group relative border-t border-hairline last:border-b">
      <a
        href={bookHref}
        className="service-row-link block py-7 outline-none focus-visible:bg-mist/50 max-[640px]:py-6 min-[641px]:py-9"
        aria-label={`${bookLabel} ${name}`}
      >
        {/* Desktop — catalogue row */}
        <div className="hidden min-[641px]:block">
          <div className="flex items-baseline justify-between gap-8">
            <h3 className="service-row-title font-display text-[clamp(1.25rem,1.8vw,1.55rem)] font-normal text-ink transition-transform duration-500 ease-out group-hover:translate-x-1.5">
              {name}
            </h3>
            <div className="flex shrink-0 items-baseline gap-8">
              <p className="service-row-price font-label text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-body transition-colors duration-500 group-hover:text-oxblood">
                {priceDisplay}
              </p>
              <span className="service-row-book inline-flex items-center gap-1.5 font-label text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-oxblood/50 transition-colors duration-500 group-hover:text-oxblood group-focus-within:text-oxblood">
                <span>{bookLabel}</span>
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-1.5 group-focus-within:translate-x-1.5"
                >
                  →
                </span>
              </span>
            </div>
          </div>
          <p className="mt-3 max-w-[52ch] text-[0.95rem] leading-[1.65] text-body">
            {description}
          </p>
        </div>

        {/* Mobile — stacked reading layout */}
        <div className="min-[641px]:hidden">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-[1.2rem] font-normal leading-[1.2] text-ink">
              {name}
            </h3>
            <span
              aria-hidden="true"
              className="mt-1 shrink-0 font-label text-[0.7rem] font-semibold text-oxblood"
            >
              →
            </span>
          </div>
          <p className="mt-2.5 text-[0.92rem] leading-[1.65] text-body">
            {description}
          </p>
          <p className="mt-3.5 font-label text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-oxblood">
            {priceDisplay}
          </p>
        </div>
      </a>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-oxblood transition-[width] duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"
      />
    </div>
  );
};
