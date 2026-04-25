"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const shouldReduceMotion = prefersReducedMotion.matches;

    if (shouldReduceMotion) {
      root.style.setProperty("--scroll-y", "0px");
      root.style.setProperty("--scroll-y-soft", "0px");
      root.style.setProperty("--scroll-tilt", "0deg");
    }

    function handleAnchorClick(event) {
      const trigger = event.target.closest('a[href^="#"]');

      if (!trigger) return;

      const targetId = trigger.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "start",
      });

      window.history.pushState(null, "", targetId);
    }

    let ticking = false;

    function update() {
      if (shouldReduceMotion) {
        root.style.setProperty("--scroll-y", "0px");
        root.style.setProperty("--scroll-y-soft", "0px");
        root.style.setProperty("--scroll-tilt", "0deg");
        ticking = false;
        return;
      }

      const scrollY = window.scrollY || 0;

      root.style.setProperty("--scroll-y", `${(scrollY * -0.08).toFixed(2)}px`);
      root.style.setProperty("--scroll-y-soft", `${(scrollY * -0.04).toFixed(2)}px`);
      root.style.setProperty("--scroll-tilt", `${(scrollY * 0.003).toFixed(2)}deg`);
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    document.addEventListener("click", handleAnchorClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}
