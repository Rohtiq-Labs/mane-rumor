"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useId,
  useState,
  type ReactElement,
} from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/context/LocaleContext";
import type { TransformationMeta } from "@/data/transformations";

type TransformationLightboxProps = {
  items: TransformationMeta[];
  activeId: string | null;
  onClose: () => void;
  onNavigate: (id: string) => void;
};

export const TransformationLightbox = ({
  items,
  activeId,
  onClose,
  onNavigate,
}: TransformationLightboxProps): ReactElement | null => {
  const { dictionary } = useLocale();
  const {
    lightbox,
    filters,
    featured,
    items: copy,
  } = dictionary.transformationsPage;
  const titleId = useId();
  const activeIndex = items.findIndex((item) => item.id === activeId);
  const active = activeIndex >= 0 ? items[activeIndex] : null;
  const [showBefore, setShowBefore] = useState(false);

  const goPrev = useCallback((): void => {
    if (items.length === 0 || activeIndex < 0) {
      return;
    }
    const nextIndex = (activeIndex - 1 + items.length) % items.length;
    onNavigate(items[nextIndex].id);
  }, [activeIndex, items, onNavigate]);

  const goNext = useCallback((): void => {
    if (items.length === 0 || activeIndex < 0) {
      return;
    }
    const nextIndex = (activeIndex + 1) % items.length;
    onNavigate(items[nextIndex].id);
  }, [activeIndex, items, onNavigate]);

  useEffect(() => {
    setShowBefore(false);
  }, [activeId]);

  useEffect(() => {
    if (!activeId) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        goPrev();
      }
      if (event.key === "ArrowRight") {
        goNext();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeId, goNext, goPrev, onClose]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/92 px-[4vw] py-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={onClose}
        >
          <motion.div
            className="relative grid w-full max-w-[1180px] gap-8 max-[900px]:max-h-[90vh] max-[900px]:overflow-y-auto min-[901px]:grid-cols-[1.35fr_0.9fr] min-[901px]:items-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-ink min-[901px]:aspect-[3/4] min-[901px]:max-h-[82vh]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${active.id}-${showBefore ? "before" : "after"}`}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  <Image
                    src={
                      showBefore && active.beforeSrc
                        ? active.beforeSrc
                        : active.afterSrc
                    }
                    alt={active.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 92vw, 55vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {active.beforeSrc && (
                <button
                  type="button"
                  onClick={() => setShowBefore((value) => !value)}
                  className="absolute bottom-5 left-5 bg-paper/90 px-3.5 py-2 font-label text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-ink backdrop-blur-sm transition-colors duration-300 hover:bg-paper"
                >
                  {showBefore ? featured.showAfter : featured.showBefore}
                </button>
              )}
            </div>

            <div className="text-paper max-[900px]:pb-4">
              <span className="mb-4 block font-label text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-canvas">
                {filters[active.category]}
              </span>
              <h2
                id={titleId}
                className="font-display text-[clamp(2rem,4vw,3.2rem)] font-normal leading-[1.05] tracking-[-0.01em]"
              >
                {copy[active.id]?.title}
              </h2>
              <p className="mt-5 max-w-[34ch] text-[1.02rem] leading-[1.7] text-[#C9BFB8]">
                {copy[active.id]?.goal}
              </p>

              <dl className="mt-8 space-y-4 border-t border-white/15 pt-8">
                <div>
                  <dt className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#8F857F]">
                    {lightbox.service}
                  </dt>
                  <dd className="mt-1.5 text-[0.98rem] text-paper">
                    {copy[active.id]?.service}
                  </dd>
                </div>
                {copy[active.id]?.stylist && (
                  <div>
                    <dt className="font-label text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#8F857F]">
                      {lightbox.stylist}
                    </dt>
                    <dd className="mt-1.5 text-[0.98rem] text-paper">
                      {copy[active.id]?.stylist}
                    </dd>
                  </div>
                )}
              </dl>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <Button href="#book" variant="light" onClick={onClose}>
                  {lightbox.cta}
                </Button>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={goPrev}
                    className="font-label text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#C9BFB8] transition-colors duration-300 hover:text-paper"
                    aria-label={lightbox.previous}
                  >
                    ←
                  </button>
                  <span className="font-label text-[0.65rem] tracking-[0.12em] text-[#8F857F]">
                    {activeIndex + 1} / {items.length}
                  </span>
                  <button
                    type="button"
                    onClick={goNext}
                    className="font-label text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#C9BFB8] transition-colors duration-300 hover:text-paper"
                    aria-label={lightbox.next}
                  >
                    →
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="absolute right-0 top-0 z-10 font-label text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#C9BFB8] transition-colors duration-300 hover:text-paper"
              aria-label={lightbox.close}
            >
              {lightbox.close}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
