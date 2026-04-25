"use client";

import { useEffect, useRef } from "react";
import { testimonials } from "./content";

const avatarClasses = {
  primary: "bg-primary/18 text-primary",
  secondary: "bg-secondary/18 text-secondary",
  tertiary: "bg-tertiary/18 text-tertiary",
};

function Icon({ name, className = "h-4 w-4" }) {
  const shared = {
    "aria-hidden": true,
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.8",
    viewBox: "0 0 24 24",
  };

  switch (name) {
    case "star":
      return (
        <svg {...shared}>
          <path
            d="m12 3 2.7 5.4 6 .9-4.3 4.2 1 5.9-5.4-2.8-5.4 2.8 1-5.9L3.3 9.3l6-.9L12 3Z"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      );
    case "arrow-left":
      return (
        <svg {...shared}>
          <path d="m15 6-6 6 6 6" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...shared}>
          <path d="m9 6 6 6-6 6" />
        </svg>
      );
    default:
      return null;
  }
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
        {eyebrow}
      </div>
      <h2 className="font-heading text-3xl leading-tight tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-on-surface-variant sm:text-lg">
        {description}
      </p>
    </div>
  );
}

export function TestimonialsSection() {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let ticking = false;

    function updateParallax() {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const shift = (progress - 0.5) * 120;

      section.style.setProperty("--testimonial-shift", `${shift.toFixed(2)}px`);
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;

      ticking = true;
      window.requestAnimationFrame(updateParallax);
    }

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function slide(direction) {
    if (!sliderRef.current) return;

    const amount = sliderRef.current.clientWidth * 0.9;

    sliderRef.current.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  }

  function handleCardMove(event) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 14;
    const rotateX = (0.5 - y / rect.height) * 14;

    card.style.setProperty("--rotate-x", `${rotateX.toFixed(2)}deg`);
    card.style.setProperty("--rotate-y", `${rotateY.toFixed(2)}deg`);
    card.style.setProperty("--glow-x", `${((x / rect.width) * 100).toFixed(2)}%`);
    card.style.setProperty("--glow-y", `${((y / rect.height) * 100).toFixed(2)}%`);
    card.style.setProperty("--card-lift", "-10px");
  }

  function resetCardMove(event) {
    const card = event.currentTarget;

    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
    card.style.setProperty("--glow-x", "50%");
    card.style.setProperty("--glow-y", "50%");
    card.style.setProperty("--card-lift", "0px");
  }

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="sr-anchor section-shell section-pad relative [--testimonial-shift:0px]"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-12 top-28 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
          style={{
            transform:
              "translate3d(0, calc(var(--testimonial-shift, 0px) * -0.35), 0)",
          }}
        />
        <div
          className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"
          style={{
            transform:
              "translate3d(0, calc(var(--testimonial-shift, 0px) * 0.25), 0)",
          }}
        />
      </div>
      <div className="flex items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Customer Love"
          title={
            <>
              Dipercaya oleh <span className="text-secondary">10,000+ Kreator</span>
            </>
          }
          description="Bukan sekadar tampil keren, tetapi membantu pebisnis kecil menagih lebih percaya diri dan lebih konsisten."
        />
      </div>
      <div className="mt-10 flex items-center justify-end gap-3">
        <button
          aria-label="Slide testimonial ke kiri"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-on-surface-variant transition-colors hover:border-primary/40 hover:text-white"
          onClick={() => slide("prev")}
          type="button"
        >
          <Icon className="h-4 w-4" name="arrow-left" />
        </button>
        <button
          aria-label="Slide testimonial ke kanan"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-on-surface-variant transition-colors hover:border-primary/40 hover:text-white"
          onClick={() => slide("next")}
          type="button"
        >
          <Icon className="h-4 w-4" name="arrow-right" />
        </button>
      </div>
      <div
        ref={sliderRef}
        className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
      >
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="tilt-card group relative min-w-[18.75rem] snap-start rounded-[2rem] sm:min-w-[22rem] lg:min-w-[24rem]"
            onMouseLeave={resetCardMove}
            onMouseMove={handleCardMove}
          >
            <div className="glass-panel tilt-card-inner relative overflow-hidden rounded-[2rem] p-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at var(--glow-x, 50%) var(--glow-y, 50%), rgba(192,193,255,0.18), transparent 36%)",
                }}
              />
              <div className="relative translate-z-6">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon key={index} className="h-4 w-4" name="star" />
                  ))}
                </div>
                <p className="mt-6 text-base leading-8 text-on-surface-variant">
                  “{testimonial.quote}”
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full font-semibold ${avatarClasses[testimonial.accent]}`}
                  >
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonial.name}</p>
                    <p className="text-sm text-on-surface-variant">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
