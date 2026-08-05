"use client";

import Image from "next/image";
import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { services } from "@/data/services";

export const Expertise = (): ReactElement => {
  const { dictionary } = useLocale();
  const { expertise } = dictionary;

  return (
    <section className="expertise bg-canvas" id="expertise">
      {services.map((service, index) => {
        const copy = expertise.services[index];
        const isEven = index % 2 === 1;

        return (
          <div
            key={service.id}
            className={`service grid grid-cols-1 min-h-0 border-t border-hairline md:grid-cols-2 md:min-h-[88vh]`}
            style={isEven ? { direction: "rtl" } : undefined}
          >
            <div className="img relative h-[60vh] md:h-auto overflow-hidden">
              <Image
                src={service.src}
                alt={service.alt}
                fill
                className="object-cover"
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>
            <div
              className="txt flex flex-col justify-center px-[6vw] py-14 md:py-[5vw]"
              style={isEven ? { direction: "ltr" } : undefined}
            >
              <span className="num reveal font-label font-semibold uppercase tracking-[0.14em] text-[0.72rem] text-body mb-[1.4rem] block">
                {copy.label}
              </span>
              <h3 className={`reveal mb-[1.6rem] ${service.titleClass}`}>
                {copy.title}
              </h3>
              <p className="reveal text-body text-base leading-[1.75] max-w-[34ch]">
                {copy.body}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};
