"use client";

import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { journeySteps } from "@/data/journey";

export const Journey = (): ReactElement => {
  const { dictionary } = useLocale();
  const { journey } = dictionary;

  return (
    <section className="journey relative bg-mist px-[6vw] py-24 md:py-36" id="journey">
      <div className="head text-center mb-16 md:mb-24">
        <span className="reveal font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-oxblood mb-[1.4rem] block">
          {journey.label}
        </span>
        <h2 className="reveal font-display text-[clamp(2.2rem,4.2vw,3.6rem)] font-normal tracking-[-0.01em]">
          {journey.title}
        </h2>
      </div>
      <div className="journey-line relative mx-auto max-w-[900px]">
        <div className="spine absolute left-[6px] top-0 bottom-0 w-px bg-hairline max-[760px]:left-[6px] min-[761px]:left-1/2 min-[761px]:-translate-x-1/2">
          <div className="fill absolute top-0 left-0 w-full h-0 bg-oxblood" id="spineFill" />
        </div>

        {journeySteps.map((step, index) => {
          const copy = journey.steps[index];
          const isSideA = step.contentSide === "a";

          return (
            <div
              key={step.id}
              className="step relative mb-[4.5rem] grid grid-cols-[30px_1fr] gap-4 min-[761px]:grid-cols-[1fr_60px_1fr] min-[761px]:items-center min-[761px]:gap-0"
            >
              <div
                className={`side a max-[760px]:hidden min-[761px]:px-[2.4rem] ${
                  isSideA
                    ? "min-[761px]:text-right"
                    : "min-[761px]:invisible"
                }`}
              >
                {isSideA && (
                  <>
                    <span className="font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-oxblood mb-2.5 block">
                      {copy.label}
                    </span>
                    <h3 className="font-display font-normal text-[1.7rem] mb-2">
                      {copy.title}
                    </h3>
                    <p className="text-body text-[0.95rem] leading-[1.6]">{copy.body}</p>
                  </>
                )}
              </div>

              <div className="dot relative z-[2] mx-0 mt-1.5 h-[11px] w-[11px] rounded-full border border-oxblood bg-paper min-[761px]:mx-auto min-[761px]:mt-0" />

              <div
                className={`side b max-[760px]:col-start-2 max-[760px]:px-0 max-[760px]:text-left max-[760px]:visible min-[761px]:px-[2.4rem] ${
                  isSideA ? "min-[761px]:invisible" : "min-[761px]:visible"
                }`}
              >
                {!isSideA && (
                  <>
                    <span className="font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-oxblood mb-2.5 block">
                      {copy.label}
                    </span>
                    <h3 className="font-display font-normal text-[1.7rem] mb-2">
                      {copy.title}
                    </h3>
                    <p className="text-body text-[0.95rem] leading-[1.6]">{copy.body}</p>
                  </>
                )}
                {/* Mobile: always show content in side b column */}
                {isSideA && (
                  <div className="min-[761px]:hidden">
                    <span className="font-label font-semibold uppercase tracking-[0.18em] text-[0.72rem] text-oxblood mb-2.5 block">
                      {copy.label}
                    </span>
                    <h3 className="font-display font-normal text-[1.7rem] mb-2">
                      {copy.title}
                    </h3>
                    <p className="text-body text-[0.95rem] leading-[1.6]">{copy.body}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
