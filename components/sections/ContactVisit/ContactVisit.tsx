"use client";

import { motion } from "framer-motion";
import type { ReactElement } from "react";
import { useLocale } from "@/context/LocaleContext";
import { contactDetails } from "@/data/contact";
import {
  easePremium,
  motionDuration,
  motionViewport,
} from "@/lib/motion";

export const ContactVisit = (): ReactElement => {
  const { dictionary } = useLocale();
  const { visit } = dictionary.contactPage;
  const { address, phone, email, hours } = contactDetails;

  return (
    <section
      className="bg-paper px-[6vw] py-[clamp(4.5rem,12vw,8.5rem)]"
      aria-labelledby="contact-visit-title"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-[clamp(3rem,8vw,5.5rem)] min-[641px]:grid-cols-2">
        <div>
          <motion.span
            className="mb-5 block font-label text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-oxblood"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={motionViewport}
            transition={{ duration: motionDuration.body, ease: easePremium }}
          >
            {visit.label}
          </motion.span>
          <motion.h2
            id="contact-visit-title"
            className="mb-[clamp(2.5rem,6vw,3.75rem)] max-w-[12ch] font-display text-[clamp(2.2rem,5vw,3.8rem)] font-normal leading-[1.05] tracking-[-0.01em] text-ink"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={motionViewport}
            transition={{ duration: motionDuration.heading, ease: easePremium }}
          >
            {visit.title}
          </motion.h2>

          <div className="flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={motionViewport}
              transition={{
                duration: motionDuration.body,
                delay: 0.08,
                ease: easePremium,
              }}
            >
              <p className="mb-3 font-label text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-oxblood">
                {visit.addressLabel}
              </p>
              <p className="text-[1.05rem] leading-[1.7] text-body">
                <a
                  href={address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-ink"
                >
                  {address.line1}
                  <br />
                  {address.line2}
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={motionViewport}
              transition={{
                duration: motionDuration.body,
                delay: 0.12,
                ease: easePremium,
              }}
            >
              <p className="mb-3 font-label text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-oxblood">
                {visit.hoursLabel}
              </p>
              <ul className="flex list-none flex-col gap-3 text-[1.05rem] leading-[1.7] text-body">
                {hours.map((row) => {
                  const copy = visit.hours[row.id];
                  return (
                    <li
                      key={row.id}
                      className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-b border-hairline pb-3 last:border-b-0 last:pb-0"
                    >
                      <span>{copy.days}</span>
                      <span className="text-ink">{copy.time}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-10 min-[480px]:grid-cols-2"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={motionViewport}
              transition={{
                duration: motionDuration.body,
                delay: 0.16,
                ease: easePremium,
              }}
            >
              <div>
                <p className="mb-3 font-label text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-oxblood">
                  {visit.phoneLabel}
                </p>
                <a
                  href={phone.href}
                  className="text-[1.05rem] leading-[1.7] text-body transition-colors duration-300 hover:text-ink"
                >
                  {phone.display}
                </a>
              </div>
              <div>
                <p className="mb-3 font-label text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-oxblood">
                  {visit.emailLabel}
                </p>
                <a
                  href={email.href}
                  className="break-all text-[1.05rem] leading-[1.7] text-body transition-colors duration-300 hover:text-ink"
                >
                  {email.display}
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="relative min-h-[320px] w-full overflow-hidden border border-hairline min-[641px]:min-h-[520px] min-[641px]:sticky min-[641px]:top-28"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={motionViewport}
          transition={{ duration: motionDuration.image, ease: easePremium }}
        >
          <iframe
            title={visit.mapLabel}
            src={address.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 grayscale-[0.28] sepia-[0.18] contrast-[0.96] brightness-[1.02] saturate-[0.85]"
            allowFullScreen
          />
          <a
            href={address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 z-[1] bg-paper/95 px-4 py-2.5 font-label text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-ink transition-colors duration-300 hover:bg-paper hover:text-oxblood"
          >
            {visit.openMap}
          </a>
        </motion.div>
      </div>
    </section>
  );
};
