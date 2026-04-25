"use client";

import { useMemo, useState } from "react";
import { dashboardRows } from "./content";

const tabs = [
  { id: "all", label: "Semua" },
  { id: "unpaid", label: "Belum Bayar" },
  { id: "paid", label: "Lunas" },
];

const accentBadgeClasses = {
  indigo: "bg-primary/16 text-primary",
  teal: "bg-secondary/16 text-secondary",
  violet: "bg-violet-400/16 text-violet-300",
};

const statusClasses = {
  success:
    "border-secondary/20 bg-secondary-container/12 text-secondary shadow-[0_0_30px_rgba(79,219,200,0.12)]",
  warning:
    "border-tertiary/20 bg-tertiary-container/12 text-tertiary shadow-[0_0_30px_rgba(255,81,106,0.12)]",
  danger:
    "border-error/20 bg-error-container/12 text-error shadow-[0_0_30px_rgba(255,180,171,0.12)]",
};

function Icon({ className = "h-4 w-4" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.2-4.2" />
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

function matchesTab(row, activeTab) {
  if (activeTab === "paid") return row.tone === "success";
  if (activeTab === "unpaid") return row.tone !== "success";
  return true;
}

export function DashboardPreviewSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [query, setQuery] = useState("");

  const filteredRows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return dashboardRows.filter((row) => {
      if (!matchesTab(row, activeTab)) return false;
      if (!normalizedQuery) return true;

      const haystack = [row.name, row.company, row.status, row.amount]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [activeTab, query]);

  return (
    <section id="preview" className="sr-anchor section-pad bg-surface-lowest/36">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Live Preview"
          title="Pantau Bisnis Anda Dalam Sekejap"
          description="Tampilan ringkas dengan fokus pada angka yang penting, status pembayaran, dan action berikutnya."
        />
        <div className="glass-panel mt-14 overflow-hidden rounded-[2rem]">
          <div className="flex flex-col gap-4 border-b border-white/8 bg-white/[0.03] px-5 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div
              aria-label="Filter status invoice"
              className="flex flex-wrap gap-3"
              role="tablist"
            >
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    aria-pressed={isActive}
                    className={`rounded-xl border px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "border-primary/10 bg-primary text-on-primary"
                        : "border-white/8 bg-white/[0.03] text-on-surface hover:bg-white/[0.06]"
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
            <label className="relative block">
              <span className="sr-only">Cari klien</span>
              <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface-variant" />
              <input
                aria-label="Cari klien"
                className="w-full rounded-xl border border-white/8 bg-surface-container px-10 py-2.5 text-sm text-white outline-none transition focus:border-primary/40 focus:ring-2 focus:ring-primary/15 sm:w-72"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Cari klien..."
                type="search"
                value={query}
              />
            </label>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/6 bg-white/[0.02] text-[0.68rem] uppercase tracking-[0.24em] text-on-surface-variant">
                  <th className="px-6 py-4 font-semibold">Klien</th>
                  <th className="px-6 py-4 font-semibold">Jumlah</th>
                  <th className="px-6 py-4 font-semibold">Jatuh Tempo</th>
                  <th className="px-6 py-4 text-right font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/6">
                {filteredRows.length > 0 ? (
                  filteredRows.map((row) => (
                    <tr key={row.name} className="transition-colors hover:bg-white/[0.02]">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-full font-semibold ${accentBadgeClasses[row.accent]}`}
                          >
                            {row.initials}
                          </div>
                          <div>
                            <p className="font-medium text-white">{row.name}</p>
                            <p className="text-xs text-on-surface-variant">{row.company}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 font-medium text-white">{row.amount}</td>
                      <td className="px-6 py-5 text-on-surface-variant">{row.dueDate}</td>
                      <td className="px-6 py-5 text-right">
                        <span
                          className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusClasses[row.tone]}`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="px-6 py-10 text-center text-sm text-on-surface-variant" colSpan="4">
                      Tidak ada invoice yang cocok dengan filter saat ini.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
