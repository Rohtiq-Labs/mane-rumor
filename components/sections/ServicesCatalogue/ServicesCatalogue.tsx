"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactElement,
} from "react";
import { useLocale } from "@/context/LocaleContext";
import { serviceCatalogue } from "@/data/service-catalog";
import { Reveal, RevealGroup, RevealItem } from "@/lib/motion";
import { CategoryNav } from "./CategoryNav";
import { ServiceRow } from "./ServiceRow";

export const ServicesCatalogue = (): ReactElement => {
  const { dictionary } = useLocale();
  const { catalogue, categories } = dictionary.servicesPage;
  const [activeId, setActiveId] = useState(serviceCatalogue[0]?.id ?? "");
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    serviceCatalogue.forEach((category) => {
      const el = sectionRefs.current[category.id];
      if (!el) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            setActiveId(category.id);
          }
        },
        {
          rootMargin: "-35% 0px -50% 0px",
          threshold: 0,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToCategory = (id: string): void => {
    const el = sectionRefs.current[id];
    if (!el) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const top = el.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
    setActiveId(id);
  };

  const navLabels = Object.fromEntries(
    serviceCatalogue.map((category) => [
      category.id,
      categories[category.id]?.title.split("•")[0]?.trim() ?? category.navLabel,
    ]),
  );

  return (
    <section
      className="services-catalogue bg-paper"
      id="services"
      aria-labelledby="catalogue-label"
    >
      <div className="px-[6vw] pt-20 pb-10 max-[640px]:pt-16 max-[640px]:pb-6 min-[641px]:pt-28 min-[641px]:pb-16">
        <Reveal tone="label">
          <span
            id="catalogue-label"
            className="font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-oxblood"
          >
            {catalogue.label}
          </span>
        </Reveal>
      </div>

      <CategoryNav
        ariaLabel={catalogue.navAria}
        labels={navLabels}
        activeId={activeId}
        onSelect={scrollToCategory}
      />

      <div className="relative mx-auto max-w-[1200px] min-[641px]:grid min-[641px]:grid-cols-[180px_minmax(0,1fr)] min-[641px]:gap-12 min-[641px]:px-[6vw] min-[641px]:pb-28">
        <aside className="hidden min-[641px]:block">
          <nav className="sticky top-28" aria-label={catalogue.navAria}>
            <ul className="list-none space-y-4 border-l border-hairline pl-5">
              {serviceCatalogue.map((category) => {
                const copy = categories[category.id];
                const isActive = activeId === category.id;

                return (
                  <li key={category.id}>
                    <button
                      type="button"
                      onClick={() => scrollToCategory(category.id)}
                      className={`text-left font-label text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                        isActive ? "text-oxblood" : "text-body hover:text-ink"
                      }`}
                      aria-current={isActive ? "true" : undefined}
                    >
                      {copy?.title.split("•")[0]?.trim() ?? category.navLabel}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        <div>
          {serviceCatalogue.map((category, categoryIndex) => {
            const copy = categories[category.id];
            if (!copy) {
              return null;
            }

            const isAlt = categoryIndex % 2 === 1;

            return (
              <article
                key={category.id}
                id={`category-${category.id}`}
                ref={(node) => {
                  sectionRefs.current[category.id] = node;
                }}
                className={`scroll-mt-32 max-[640px]:px-[5vw] max-[640px]:py-12 min-[641px]:scroll-mt-28 min-[641px]:py-16 ${
                  isAlt
                    ? "max-[640px]:bg-canvas min-[641px]:rounded-sm min-[641px]:bg-canvas min-[641px]:px-10"
                    : "max-[640px]:bg-paper min-[641px]:px-2"
                }`}
              >
                <RevealGroup className="mb-8 max-w-[36ch] max-[640px]:mb-6 min-[641px]:mb-12">
                  <RevealItem tone="heading">
                    <h2 className="font-display text-[clamp(1.85rem,3.4vw,2.75rem)] font-normal leading-[1.08] tracking-[-0.01em] text-ink">
                      {copy.title}
                    </h2>
                  </RevealItem>
                  <RevealItem tone="body">
                    <p className="mt-4 text-[0.98rem] leading-[1.7] text-body">
                      {copy.description}
                    </p>
                  </RevealItem>
                </RevealGroup>

                <RevealGroup className="list-none" stagger={0.08}>
                  {category.services.map((service) => {
                    const serviceCopy = copy.services[service.id];
                    if (!serviceCopy) {
                      return null;
                    }

                    return (
                      <RevealItem key={service.id}>
                        <ServiceRow
                          name={serviceCopy.name}
                          description={serviceCopy.description}
                          price={service.price}
                          startingAtLabel={catalogue.startingAt}
                          bookLabel={catalogue.book}
                          bookHref="#book"
                        />
                      </RevealItem>
                    );
                  })}
                </RevealGroup>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
