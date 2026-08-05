"use client";

import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { aboutExperienceIds } from "@/data/about";

const ease = [0.22, 1, 0.36, 1] as const;

export const AboutExperience = (): ReactElement => {
  const { dictionary } = useLocale();
  const { experience } = dictionary.aboutPage;

  return (
    <section
      className="about-experience bg-paper px-[6vw] py-28 max-[640px]:py-20 min-[641px]:py-36"
      id="experience"
      aria-labelledby="about-experience-title"
    >
      <div className="mb-20 text-center max-[640px]:mb-14 min-[641px]:mb-28">
        <motion.span
          className="mb-5 block font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-oxblood"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          {experience.label}
        </motion.span>
        <motion.h2
          id="about-experience-title"
          className="mx-auto max-w-[14ch] font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-normal leading-[1.05] tracking-[-0.015em] text-ink"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease }}
        >
          {experience.title}
        </motion.h2>
      </div>

      <ol className="relative mx-auto max-w-[720px] list-none">
        <div
          className="absolute left-[11px] top-3 bottom-3 w-px bg-hairline max-[640px]:left-[11px] min-[641px]:left-1/2 min-[641px]:-translate-x-1/2"
          aria-hidden="true"
        />

        {aboutExperienceIds.map((id, index) => {
          const step = experience.steps[index];
          const number = String(index + 1).padStart(2, "0");
          const isEven = index % 2 === 1;

          return (
            <motion.li
              key={id}
              className="relative mb-16 grid grid-cols-[28px_1fr] gap-5 last:mb-0 max-[640px]:mb-14 min-[641px]:mb-20 min-[641px]:grid-cols-[1fr_56px_1fr] min-[641px]:items-center min-[641px]:gap-0"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.8, delay: index * 0.04, ease }}
            >
              <div
                className={`max-[640px]:hidden min-[641px]:px-8 ${
                  isEven
                    ? "min-[641px]:invisible"
                    : "min-[641px]:text-right"
                }`}
              >
                {!isEven && (
                  <StepCopy number={number} title={step.title} body={step.body} />
                )}
              </div>

              <div className="relative z-[2] mt-1.5 h-3 w-3 rounded-full border border-oxblood bg-paper min-[641px]:mx-auto min-[641px]:mt-0" />

              <div
                className={`max-[640px]:col-start-2 min-[641px]:px-8 ${
                  isEven ? "" : "min-[641px]:invisible"
                }`}
              >
                {isEven && (
                  <StepCopy number={number} title={step.title} body={step.body} />
                )}
                {!isEven && (
                  <div className="min-[641px]:hidden">
                    <StepCopy
                      number={number}
                      title={step.title}
                      body={step.body}
                    />
                  </div>
                )}
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
};

type StepCopyProps = {
  number: string;
  title: string;
  body: string;
};

const StepCopy = ({ number, title, body }: StepCopyProps): ReactElement => {
  return (
    <>
      <span className="mb-3 block font-label text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-oxblood">
        {number}
      </span>
      <h3 className="mb-3 font-display text-[clamp(1.6rem,2.8vw,2.2rem)] font-normal tracking-[-0.01em] text-ink">
        {title}
      </h3>
      <p className="max-w-[32ch] text-[0.98rem] leading-[1.7] text-body">
        {body}
      </p>
    </>
  );
};
