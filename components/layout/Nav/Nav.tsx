"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactElement,
} from "react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useLocale } from "@/context/LocaleContext";
import { navLinks } from "@/data/nav";

export const Nav = (): ReactElement => {
  const { dictionary } = useLocale();
  const pathname = usePathname();
  const panelId = useId();
  const navRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navHeight, setNavHeight] = useState(120);

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";
  const isServices = pathname === "/services";
  const isTransformations = pathname === "/transformations";
  const isContact = pathname === "/contact";
  const hasPageBookAnchor =
    isAbout || isServices || isTransformations || isContact;

  const closeMenu = useCallback((): void => {
    setIsOpen(false);
  }, []);

  const toggleMenu = useCallback((): void => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    closeMenu();
    setIsHidden(false);
  }, [pathname, closeMenu]);

  useEffect(() => {
    const el = navRef.current;
    if (!el) {
      return;
    }

    const updateHeight = (): void => {
      setNavHeight(el.getBoundingClientRect().height);
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    setIsHidden(false);

    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeMenu]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const onScroll = (): void => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setIsScrolled(currentY > 16);

      if (isOpen) {
        setIsHidden(false);
        lastScrollY.current = currentY;
        return;
      }

      // Always reveal near the top of the page
      if (currentY < 64) {
        setIsHidden(false);
      } else if (delta > 8) {
        setIsHidden(true);
      } else if (delta < -8) {
        setIsHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isOpen]);

  const resolveHref = (link: (typeof navLinks)[number]): string => {
    const href = isHome ? link.homeHref : link.href;
    if (hasPageBookAnchor && link.labelKey === "book") {
      return "#book";
    }
    return href;
  };

  const isLinkActive = (labelKey: (typeof navLinks)[number]["labelKey"]): boolean => {
    return (
      (labelKey === "about" && isAbout) ||
      (labelKey === "services" && isServices) ||
      (labelKey === "transformations" && isTransformations) ||
      (labelKey === "contact" && isContact)
    );
  };

  return (
    <>
      <div style={{ height: navHeight }} aria-hidden="true" />

      <nav
        ref={navRef}
        className={`fixed top-0 right-0 left-0 z-[110] flex items-center justify-end min-[641px]:justify-between px-[6vw] py-6 min-h-[7.5rem] min-[641px]:min-h-0 min-[641px]:py-5 border-b will-change-transform transition-[transform,background-color,color,border-color,box-shadow] duration-[650ms] ease-[cubic-bezier(0.65,0,0.35,1)] motion-reduce:transition-none ${
          isHidden && !isOpen ? "-translate-y-full" : "translate-y-0"
        } ${
          isOpen
            ? "bg-ink text-paper border-transparent shadow-none"
            : isScrolled
              ? "bg-canvas/95 text-ink border-hairline shadow-[0_12px_40px_-28px_rgba(38,35,34,0.45)] backdrop-blur-[10px]"
              : "bg-canvas text-ink border-hairline shadow-none"
        }`}
        aria-label="Primary"
      >
        <Link
          href="/"
          className="absolute left-1/2 top-1/2 z-[120] block shrink-0 -translate-x-1/2 -translate-y-1/2 min-[641px]:static min-[641px]:left-auto min-[641px]:top-auto min-[641px]:translate-x-0 min-[641px]:translate-y-0"
          onClick={closeMenu}
          aria-label={dictionary.brand.name}
        >
          <BrandLogo
            alt={dictionary.brand.name}
            priority
            tone={isOpen ? "onDark" : "default"}
          />
        </Link>

        {/* Desktop links — ≥641px */}
        <ul className="hidden min-[641px]:flex list-none gap-[2.2rem]">
          {navLinks.map((link) => {
            const href = resolveHref(link);
            const isActive = isLinkActive(link.labelKey);

            return (
              <li key={link.labelKey}>
                <Link
                  href={href}
                  className={`relative font-label text-[0.7rem] tracking-[0.14em] uppercase font-semibold transition-colors duration-300 after:absolute after:bottom-[-0.35rem] after:left-0 after:h-px after:w-full after:origin-left after:bg-current after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive
                      ? "after:scale-x-100"
                      : "after:scale-x-0 hover:after:scale-x-100"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {dictionary.nav[link.labelKey]}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger — ≤640px */}
        <button
          type="button"
          className="relative z-[120] flex h-11 w-11 shrink-0 items-center justify-center min-[641px]:hidden"
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-label={isOpen ? dictionary.nav.closeMenu : dictionary.nav.openMenu}
          onClick={toggleMenu}
        >
          <span className="relative block h-[14px] w-[22px]" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-full bg-current transition-opacity duration-300 ease-out ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-px w-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Mobile overlay panel — ≤640px */}
      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        aria-label={dictionary.brand.name}
        className={`fixed inset-0 z-[105] min-[641px]:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-ink transition-opacity duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(116,47,45,0.28),transparent_55%)] transition-opacity duration-700 ease-out ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="relative flex h-full flex-col justify-between px-[6vw] pb-10 pt-[8.5rem]">
          <div
            className={`mb-10 h-px w-16 bg-oxblood origin-left transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] ${
              isOpen ? "scale-x-100" : "scale-x-0"
            }`}
            aria-hidden="true"
          />

          <ul className="flex flex-1 list-none flex-col justify-center gap-1">
            {navLinks.map((link, index) => {
              const href = resolveHref(link);
              const isActive = isLinkActive(link.labelKey);
              const delayMs = 80 + index * 70;

              return (
                <li
                  key={link.labelKey}
                  className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${delayMs}ms` : "0ms",
                  }}
                >
                  <Link
                    href={href}
                    onClick={closeMenu}
                    aria-current={isActive ? "page" : undefined}
                    className={`group flex items-baseline gap-4 border-b border-white/8 py-4 font-display text-[clamp(2rem,9vw,3.2rem)] font-normal leading-none tracking-[-0.01em] text-paper transition-colors duration-300 ${
                      isActive ? "text-canvas" : "hover:text-canvas"
                    }`}
                  >
                    <span className="font-label text-[0.62rem] tracking-[0.18em] text-oxblood uppercase">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="transition-transform duration-500 ease-out group-hover:translate-x-1">
                      {dictionary.nav[link.labelKey]}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div
            className={`flex items-center justify-between gap-4 font-label text-[0.65rem] tracking-[0.14em] uppercase text-[#B9AFA9] transition-all duration-700 ease-out ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? "420ms" : "0ms" }}
          >
            <span>{dictionary.brand.location}</span>
            <span>{dictionary.brand.handle}</span>
          </div>
        </div>
      </div>
    </>
  );
};
