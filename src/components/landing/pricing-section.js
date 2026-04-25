"use client";

import { useState } from "react";
import { plans } from "./content";

const billingModes = [
  { id: "monthly", label: "Bulanan" },
  { id: "yearly", label: "Tahunan", note: "Hemat 20%" },
];

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

  if (name === "check") {
    return (
      <svg {...shared}>
        <circle cx="12" cy="12" r="9" />
        <path d="m8.5 12.5 2.5 2.5 4.5-5" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <circle cx="12" cy="12" r="9" />
      <path d="m9 9 6 6" />
      <path d="m15 9-6 6" />
    </svg>
  );
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

export function PricingSection() {
  const [billingMode, setBillingMode] = useState("monthly");

  return (
    <section id="pricing" className="sr-anchor section-pad bg-black/18">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Pricing"
          title="Pilih Paket Kesuksesanmu"
          description="Mulai dari paket gratis untuk solo freelancer sampai paket agency untuk tim yang butuh kontrol lebih rapi."
        />
        <div className="mt-8 flex justify-center">
          <div
            aria-label="Pilih periode billing"
            className="inline-flex items-center gap-1 rounded-2xl border border-white/8 bg-surface-container p-1"
            role="tablist"
          >
            {billingModes.map((mode) => {
              const isActive = billingMode === mode.id;

              return (
                <button
                  key={mode.id}
                  aria-pressed={isActive}
                  className={`rounded-xl px-5 py-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-primary text-on-primary"
                      : "text-on-surface-variant hover:text-white"
                  }`}
                  onClick={() => setBillingMode(mode.id)}
                  type="button"
                >
                  {mode.label}
                  {mode.note ? (
                    <span className={isActive ? "text-on-primary/75" : "text-secondary"}>
                      {" "}
                      ({mode.note})
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const billing = plan.billing[billingMode];

            return (
              <article
                key={plan.name}
                className={`relative flex h-full flex-col rounded-[2rem] p-8 ${
                  plan.featured
                    ? "glass-panel border-primary/18 bg-surface-high"
                    : "glass-panel"
                }`}
              >
                {plan.badge ? (
                  <div className="absolute right-8 top-0 -translate-y-1/2 rounded-full bg-primary px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.24em] text-on-primary">
                    {plan.badge}
                  </div>
                ) : null}
                <div>
                  <p
                    className={`text-[0.7rem] font-semibold uppercase tracking-[0.24em] ${
                      plan.featured ? "text-primary" : "text-on-surface-variant"
                    }`}
                  >
                    {plan.label}
                  </p>
                  <div className="mt-4 flex items-end gap-1">
                    {billing.prefix ? (
                      <span className="pb-1 font-heading text-2xl text-white">
                        {billing.prefix}
                      </span>
                    ) : null}
                    <span className="font-heading text-5xl tracking-[-0.05em] text-white">
                      {billing.price}
                    </span>
                    {billing.suffix ? (
                      <span className="pb-1 text-sm text-on-surface-variant">
                        {billing.suffix}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                    {billing.description}
                  </p>
                </div>
                <ul className="mt-8 flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.label}
                      className={`flex items-start gap-3 text-sm ${
                        feature.included
                          ? "text-white"
                          : "text-on-surface-variant/60 line-through"
                      }`}
                    >
                      <Icon
                        className={`mt-0.5 h-4 w-4 flex-none ${
                          feature.included ? "text-primary" : "text-on-surface-variant/60"
                        }`}
                        name={feature.included ? "check" : "x"}
                      />
                      <span>{feature.label}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.ctaHref}
                  className={`mt-10 inline-flex items-center justify-center rounded-2xl px-5 py-4 text-sm font-semibold transition-transform duration-200 ${
                    plan.featured
                      ? "bg-primary text-on-primary shadow-[0_20px_40px_rgba(128,131,255,0.2)] hover:-translate-y-0.5"
                      : "border border-white/10 bg-white/[0.03] text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {plan.ctaLabel}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
