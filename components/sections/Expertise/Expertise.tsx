"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";
import { services } from "@/data/services";
import { Reveal, RevealGroup, RevealItem } from "@/lib/motion";

export const Expertise = (): ReactElement => {
  const { dictionary } = useLocale();
  const { expertise } = dictionary;

  return (
    <section
      className="expertise bg-mist px-[6vw] py-20 min-[641px]:py-28"
      id="expertise"
      aria-labelledby="expertise-title"
    >
      <RevealGroup className="mb-12 max-w-[34rem] min-[641px]:mb-16">
        <RevealItem tone="label">
          <span className="font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-oxblood mb-5 block">
            {expertise.label}
          </span>
        </RevealItem>
        <RevealItem tone="heading">
          <h2
            id="expertise-title"
            className="font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal leading-[1.08] tracking-[-0.01em] mb-5"
          >
            {expertise.title}
          </h2>
        </RevealItem>
        <RevealItem tone="body">
          <p className="text-body text-[1.05rem] leading-[1.7] max-w-[36ch]">
            {expertise.support}
          </p>
        </RevealItem>
      </RevealGroup>

      <RevealGroup className="list-none border-b border-hairline" stagger={0.1}>
        {services.map((service, index) => {
          const copy = expertise.services[index];
          if (!copy) {
            return null;
          }

          return (
            <RevealItem key={service.id}>
              <Link
                href="/services"
                className="group grid grid-cols-[2.4rem_1fr_5.25rem] items-center gap-3 border-t border-hairline py-6 transition-colors duration-400 hover:border-oxblood/40 min-[641px]:grid-cols-[4rem_1fr_11rem] min-[641px]:gap-8 min-[641px]:py-8"
                aria-label={copy.name}
              >
                <span className="font-label text-[0.62rem] tracking-[0.16em] text-oxblood uppercase min-[641px]:text-[0.7rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <div className="flex flex-col gap-1.5 min-[641px]:flex-row min-[641px]:flex-wrap min-[641px]:items-baseline min-[641px]:gap-x-6 min-[641px]:gap-y-2">
                    <h3 className="font-display text-[clamp(1.35rem,5.5vw,2.6rem)] font-normal leading-none tracking-[-0.01em] text-ink transition-colors duration-400 group-hover:text-oxblood">
                      {copy.name}
                    </h3>
                    <span
                      className="hidden h-px flex-1 bg-hairline transition-colors duration-400 group-hover:bg-oxblood/35 min-[900px]:block"
                      aria-hidden="true"
                    />
                    <p className="font-display italic text-[0.95rem] leading-snug text-body min-[641px]:text-[1.05rem]">
                      {copy.line}
                    </p>
                  </div>
                </div>

                <div className="relative h-[4.5rem] w-[5.25rem] overflow-hidden justify-self-end shadow-[0_16px_32px_-20px_rgba(38,35,34,0.4)] min-[641px]:h-[7.5rem] min-[641px]:w-[11rem]">
                  <Image
                    src={service.src}
                    alt={service.alt}
                    fill
                    className="object-cover saturate-[0.92] contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 84px, 176px"
                  />
                </div>
              </Link>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal tone="button" className="mt-12 min-[641px]:mt-14" delay={0.08}>
        <Button href="/services" variant="dark">
          {expertise.cta}
        </Button>
      </Reveal>
    </section>
  );
};
