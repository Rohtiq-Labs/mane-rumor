"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useManeRumorAnimations = (): void => {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(".reveal", { opacity: 1, y: 0 });
      document.querySelectorAll(".stitch").forEach((el) => {
        el.classList.add("run");
      });
      const spineFill = document.getElementById("spineFill");
      if (spineFill) {
        spineFill.style.height = "100%";
      }
      gsap.set(".arrival .frame img", { scale: 1 });
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

      gsap.utils.toArray<HTMLElement>(".stitch").forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          onEnter: () => el.classList.add("run"),
        });
      });

      gsap.to("#spineFill", {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: ".journey-line",
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      gsap.to(".arrival .frame img", {
        scale: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".arrival",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.utils.toArray<HTMLElement>(".collage .piece").forEach((el, i) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 1,
          delay: i * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".gallery",
            start: "top 60%",
          },
        });
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
};
