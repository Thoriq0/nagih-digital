"use client";

import dynamic from "next/dynamic";
import { startTransition, useEffect, useRef, useState } from "react";
import {
  DashboardPreviewSkeleton,
  PricingSectionSkeleton,
  TestimonialsSectionSkeleton,
} from "./section-skeletons";

const loadDashboardPreviewSection = () =>
  import("./dashboard-preview-section").then(
    (mod) => mod.DashboardPreviewSection
  );

const loadPricingSection = () =>
  import("./pricing-section").then((mod) => mod.PricingSection);

const loadTestimonialsSection = () =>
  import("./testimonials-section").then((mod) => mod.TestimonialsSection);

const DashboardPreviewSection = dynamic(
  loadDashboardPreviewSection,
  {
    loading: () => <DashboardPreviewSkeleton />,
  }
);

const PricingSection = dynamic(loadPricingSection, {
  loading: () => <PricingSectionSkeleton />,
});

const TestimonialsSection = dynamic(loadTestimonialsSection, {
  loading: () => <TestimonialsSectionSkeleton />,
});

const ScrollEffects = dynamic(
  () => import("./scroll-effects").then((mod) => mod.ScrollEffects),
  {
    ssr: false,
  }
);

function DeferredSection({
  children,
  fallback,
  rootMargin = "320px 0px",
  targetId,
  preload,
}) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      return undefined;
    }

    function revealSection() {
      preload?.();

      startTransition(() => {
        setIsVisible(true);
      });
    }

    function matchesTarget(hash) {
      return hash === `#${targetId}`;
    }

    function handleDocumentClick(event) {
      const trigger = event.target.closest(`a[href="#${targetId}"]`);

      if (!trigger) {
        return;
      }

      revealSection();
    }

    function handleHashChange() {
      if (!matchesTarget(window.location.hash)) {
        return;
      }

      revealSection();
    }

    if (matchesTarget(window.location.hash)) {
      revealSection();
      return undefined;
    }

    document.addEventListener("click", handleDocumentClick);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [isVisible, preload, targetId]);

  useEffect(() => {
    if (isVisible || !containerRef.current) {
      return undefined;
    }

    if (typeof IntersectionObserver === "undefined") {
      startTransition(() => {
        setIsVisible(true);
      });

      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting) {
          return;
        }

        startTransition(() => {
          setIsVisible(true);
        });

        observer.disconnect();
      },
      { rootMargin }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isVisible, rootMargin]);

  return <div ref={containerRef}>{isVisible ? children : fallback}</div>;
}

export function ScrollEffectsLoader() {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    const activate = () => {
      startTransition(() => {
        setIsIdle(true);
      });
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(activate, { timeout: 1200 });

      return () => {
        window.cancelIdleCallback(idleId);
      };
    }

    const timeoutId = window.setTimeout(activate, 180);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return isIdle ? <ScrollEffects /> : null;
}

export function DashboardPreviewSectionDeferred() {
  return (
    <DeferredSection
      fallback={<DashboardPreviewSkeleton />}
      preload={loadDashboardPreviewSection}
      rootMargin="280px 0px"
      targetId="preview"
    >
      <DashboardPreviewSection />
    </DeferredSection>
  );
}

export function PricingSectionDeferred() {
  return (
    <DeferredSection
      fallback={<PricingSectionSkeleton />}
      preload={loadPricingSection}
      rootMargin="240px 0px"
      targetId="pricing"
    >
      <PricingSection />
    </DeferredSection>
  );
}

export function TestimonialsSectionDeferred() {
  return (
    <DeferredSection
      fallback={<TestimonialsSectionSkeleton />}
      preload={loadTestimonialsSection}
      rootMargin="220px 0px"
      targetId="testimonials"
    >
      <TestimonialsSection />
    </DeferredSection>
  );
}
