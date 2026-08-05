"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useServicesPageAnimations = (): void => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(".reveal", { opacity: 1, y: 0 });
      gsap.set(".services-hero .frame img", { scale: 1 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        });
      });

      gsap.to(".services-hero .frame img", {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".services-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
};
