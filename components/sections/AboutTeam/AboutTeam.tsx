"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { aboutTeam, type AboutTeamMember } from "@/data/about";

const ease = [0.22, 1, 0.36, 1] as const;

const colStartClass: Record<NonNullable<AboutTeamMember["colStart"]>, string> =
  {
    1: "min-[641px]:col-start-1",
    2: "min-[641px]:col-start-2",
    3: "min-[641px]:col-start-3",
    4: "min-[641px]:col-start-4",
    5: "min-[641px]:col-start-5",
    6: "min-[641px]:col-start-6",
    7: "min-[641px]:col-start-7",
    8: "min-[641px]:col-start-8",
  };

const layoutClass = (layout: AboutTeamMember["layout"]): string => {
  switch (layout) {
    case "feature":
      return "min-[641px]:col-span-12 min-[641px]:grid min-[641px]:grid-cols-12 min-[641px]:gap-10";
    case "wide":
      return "min-[641px]:col-span-7";
    case "tall":
      return "min-[641px]:col-span-5";
    case "portrait":
    default:
      return "min-[641px]:col-span-5";
  }
};

const imageHeightClass = (layout: AboutTeamMember["layout"]): string => {
  switch (layout) {
    case "feature":
      return "h-[68vh] max-[640px]:h-[56vh] min-[641px]:h-[78vh]";
    case "wide":
      return "h-[48vh] max-[640px]:h-[46vh] min-[641px]:h-[52vh]";
    case "tall":
      return "h-[58vh] max-[640px]:h-[50vh] min-[641px]:h-[68vh]";
    case "portrait":
    default:
      return "h-[52vh] max-[640px]:h-[48vh] min-[641px]:h-[58vh]";
  }
};

export const AboutTeam = (): ReactElement => {
  const { dictionary } = useLocale();
  const { team } = dictionary.aboutPage;

  return (
    <section
      className="about-team bg-canvas px-[6vw] py-28 max-[640px]:py-20 min-[641px]:py-36"
      id="team"
      aria-labelledby="about-team-title"
    >
      <div className="mb-16 max-[640px]:mb-12 min-[641px]:mb-24">
        <motion.span
          className="mb-5 block font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-oxblood"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          {team.label}
        </motion.span>
        <motion.h2
          id="about-team-title"
          className="max-w-[12ch] font-display text-[clamp(2.6rem,6vw,5rem)] font-normal leading-[1.02] tracking-[-0.02em] text-ink"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease }}
        >
          {team.title}
        </motion.h2>
      </div>

      <ul className="grid list-none grid-cols-1 gap-14 max-[640px]:gap-16 min-[641px]:grid-cols-12 min-[641px]:gap-x-8 min-[641px]:gap-y-20">
        {aboutTeam.map((member, index) => {
          const copy = team.members[member.id];
          const isFeature = member.layout === "feature";
          const startClass = member.colStart
            ? colStartClass[member.colStart]
            : "";

          return (
            <motion.li
              key={member.id}
              className={`group ${layoutClass(member.layout)} ${startClass}`}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{
                duration: 0.9,
                delay: Math.min(index * 0.05, 0.2),
                ease,
              }}
            >
              {isFeature ? (
                <>
                  <div
                    className={`relative col-span-7 overflow-hidden ${imageHeightClass(member.layout)}`}
                  >
                    <Image
                      src={member.image}
                      alt={copy.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, 58vw"
                    />
                  </div>
                  <div className="col-span-5 flex flex-col justify-end max-[640px]:mt-6 min-[641px]:pb-6">
                    <h3 className="font-display text-[clamp(2rem,3.5vw,3rem)] font-normal tracking-[-0.01em] text-ink">
                      {copy.name}
                    </h3>
                    <p className="mt-3 max-w-[28ch] font-label text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-body">
                      {copy.role}
                    </p>
                    <Link
                      href="/contact#book"
                      className="mt-8 inline-block w-fit border-b border-oxblood pb-1 font-label text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-oxblood transition-opacity duration-400 hover:opacity-70"
                    >
                      {team.bookCta}
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`relative overflow-hidden ${imageHeightClass(member.layout)}`}
                  >
                    <Image
                      src={member.image}
                      alt={copy.name}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.045]"
                      sizes="(max-width: 640px) 100vw, 48vw"
                    />
                  </div>
                  <div
                    className={`mt-5 max-[640px]:mt-4 ${
                      member.colStart && member.colStart >= 7
                        ? "min-[641px]:text-right min-[641px]:ml-auto"
                        : ""
                    }`}
                  >
                    <h3 className="font-display text-[clamp(1.55rem,2.4vw,2.1rem)] font-normal tracking-[-0.01em] text-ink">
                      {copy.name}
                    </h3>
                    <p
                      className={`mt-2 max-w-[26ch] font-label text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-body ${
                        member.colStart && member.colStart >= 7
                          ? "min-[641px]:ml-auto"
                          : ""
                      }`}
                    >
                      {copy.role}
                    </p>
                    <Link
                      href="/contact#book"
                      className={`mt-5 inline-block w-fit border-b border-transparent pb-1 font-label text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-oxblood transition-[border-color,opacity] duration-400 hover:border-oxblood ${
                        member.colStart && member.colStart >= 7
                          ? "min-[641px]:ml-auto"
                          : ""
                      }`}
                    >
                      {team.bookCta}
                    </Link>
                  </div>
                </>
              )}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};
