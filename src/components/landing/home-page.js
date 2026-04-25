import Link from "next/link";
import {
  featureCards,
  footerLinks,
  navItems,
  stats,
  steps,
} from "./content";
import { DashboardPreviewSection } from "./dashboard-preview-section";
import { PricingSection } from "./pricing-section";
import { TestimonialsSection } from "./testimonials-section";
import {
  ScrollEffectsLoader,
} from "./lazy-sections";

const toneClasses = {
  primary: "text-primary",
  secondary: "text-secondary",
  tertiary: "text-tertiary",
};

const paymentMethods = [
  { label: "QRIS", icon: "qris", tone: "text-primary" },
  { label: "VA", icon: "bank", tone: "text-secondary" },
  { label: "Card", icon: "card", tone: "text-tertiary" },
];

function Icon({ name, className = "h-5 w-5" }) {
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
    case "bolt":
      return (
        <svg {...shared}>
          <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...shared}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "play":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="m10 8 6 4-6 4Z" fill="currentColor" stroke="none" />
        </svg>
      );
    case "document":
      return (
        <svg {...shared}>
          <path d="M8 3h6l4 4v14H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
          <path d="M14 3v4h4" />
          <path d="M9.5 12h5" />
          <path d="M9.5 16h5" />
        </svg>
      );
    case "chat":
      return (
        <svg {...shared}>
          <path d="M7 18.5 3.5 20l1.5-4.5A8.5 8.5 0 1 1 20.5 12 8.5 8.5 0 0 1 7 18.5Z" />
          <path d="M8.5 10h7" />
          <path d="M8.5 13.5h5" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...shared}>
          <path d="M4 20h16" />
          <path d="M7 16v-4" />
          <path d="M12 16V8" />
          <path d="M17 16v-7" />
        </svg>
      );
    case "qris":
      return (
        <svg {...shared}>
          <rect x="4" y="4" width="6" height="6" rx="1" />
          <rect x="14" y="4" width="6" height="6" rx="1" />
          <rect x="4" y="14" width="6" height="6" rx="1" />
          <path d="M14 14h2v2h-2z" fill="currentColor" stroke="none" />
          <path d="M18 14h2v6h-2" />
          <path d="M14 18h4" />
        </svg>
      );
    case "bank":
      return (
        <svg {...shared}>
          <path d="m3 9 9-5 9 5" />
          <path d="M5 10v8" />
          <path d="M9 10v8" />
          <path d="M15 10v8" />
          <path d="M19 10v8" />
          <path d="M3 20h18" />
        </svg>
      );
    case "card":
      return (
        <svg {...shared}>
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M3 10h18" />
          <path d="M7 15h4" />
        </svg>
      );
    case "check":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8.5 12.5 2.5 2.5 4.5-5" />
        </svg>
      );
    case "x":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="m9 9 6 6" />
          <path d="m15 9-6 6" />
        </svg>
      );
    case "globe":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
        </svg>
      );
    case "at":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="4" />
          <path d="M16 12v2a2 2 0 0 0 4 0v-2a8 8 0 1 0-2.3 5.7" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg {...shared}>
          <path d="M16.7 14.2c-.3.8-1.6 1.5-2.2 1.6-.6.1-1.4.2-4.2-1-2.6-1.1-4.3-3.8-4.4-3.9-.1-.2-1-1.3-1-2.5 0-1.1.6-1.8.8-2.1.2-.2.4-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.3.1.5 0 .6l-.4.6-.4.5c-.1.1-.2.3 0 .6.2.3.8 1.4 1.7 2.2 1.2 1.1 2.2 1.4 2.5 1.6.3.2.5.1.7-.1l1-1.2c.2-.2.4-.3.7-.2l1.9.9c.3.1.5.2.5.4s0 .7-.3 1.4Z" />
          <path d="M12 3a9 9 0 0 0-7.6 13.8L3 21l4.4-1.2A9 9 0 1 0 12 3Z" />
        </svg>
      );
    default:
      return null;
  }
}

function SectionHeading({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-on-surface-variant">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="font-heading text-3xl leading-tight tracking-[-0.03em] text-balance sm:text-4xl lg:text-[2.8rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-on-surface-variant sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function PrimaryLink({ href, children, icon }) {
  return (
    <a href={href} className="primary-button">
      <span>{children}</span>
      {icon ? <Icon className="h-4 w-4" name={icon} /> : null}
    </a>
  );
}

function SecondaryLink({ href, children, icon }) {
  return (
    <a href={href} className="secondary-button">
      {icon ? <Icon className="h-4 w-4" name={icon} /> : null}
      <span>{children}</span>
    </a>
  );
}

function MenuIcon({ className = "h-5 w-5" }) {
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
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

function TopNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[rgba(6,14,32,0.72)] backdrop-blur-xl">
      <div className="section-shell flex h-[4.5rem] items-center justify-between gap-3 sm:gap-6">
        <a
          href="#top"
          className="min-w-0 flex-1 truncate font-heading text-base font-bold tracking-[-0.04em] text-white sm:flex-none sm:text-lg"
        >
          NagihClient
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-on-surface-variant transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/login"
            className="text-sm font-medium text-on-surface-variant transition-colors hover:text-white"
          >
            Login
          </Link>
          <PrimaryLink href="#pricing">Get Started</PrimaryLink>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-on-primary shadow-[0_16px_35px_rgba(128,131,255,0.22)]"
          >
            Start
          </a>
          <details className="group relative">
            <summary className="flex h-10 w-10 shrink-0 list-none items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-on-surface-variant transition-colors hover:text-white [&::-webkit-details-marker]:hidden">
              <MenuIcon />
            </summary>
            <div className="absolute right-0 top-[calc(100%+0.75rem)] w-64 rounded-[1.5rem] border border-white/10 bg-[rgba(6,14,32,0.96)] p-3 shadow-[0_20px_50px_rgba(2,8,20,0.45)] backdrop-blur-xl">
              <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-on-surface-variant transition-colors hover:bg-white/[0.05] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <Link
                  href="/login"
                  className="rounded-xl px-3 py-3 text-sm font-medium text-on-surface-variant transition-colors hover:bg-white/[0.05] hover:text-white"
                >
                  Login
                </Link>
                <a
                  href="#pricing"
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-on-primary shadow-[0_16px_35px_rgba(128,131,255,0.22)]"
                >
                  Get Started
                </a>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function HeroPreview() {
  return (
    <div className="hero-shell mt-16">
      <div className="parallax-soft absolute inset-x-8 top-0 h-28 rounded-full bg-primary/14 blur-3xl" />
      <div className="parallax-drift absolute bottom-8 left-8 h-32 w-32 rounded-full bg-secondary/16 blur-3xl" />
      <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="glass-panel rounded-[1.75rem] p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4 border-b border-white/8 pb-4">
            <div>
              <p className="text-sm text-on-surface-variant">Overview</p>
              <p className="mt-1 font-heading text-2xl tracking-[-0.03em] text-white">
                Cashflow terkendali
              </p>
            </div>
            <div className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
              +18.4% bulan ini
            </div>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <MetricCard label="Outstanding" value="Rp 18,6 jt" tone="primary" />
            <MetricCard label="Paid this week" value="Rp 7,2 jt" tone="secondary" />
            <MetricCard label="Due soon" value="6 invoice" tone="tertiary" />
          </div>
          <div className="mt-5 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.4rem] border border-white/8 bg-black/16 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                    Reminder Queue
                  </p>
                  <p className="mt-1 text-sm text-white">
                    Pengingat otomatis hari ini
                  </p>
                </div>
                <div className="rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-primary">
                  08 jadwal
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  ["PT Sinar Fajar", "Jatuh tempo besok", "WhatsApp"],
                  ["Kedai Ruang", "Overdue 3 hari", "Escalate"],
                  ["Studio Cipta", "Follow-up sore ini", "Email"],
                ].map(([client, note, channel]) => (
                  <div
                    key={client}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-medium text-white">{client}</p>
                      <p className="text-xs text-on-surface-variant">{note}</p>
                    </div>
                    <span className="rounded-full bg-secondary/12 px-2.5 py-1 text-[0.68rem] font-semibold text-secondary">
                      {channel}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[1.4rem] border border-white/8 bg-gradient-to-br from-white/6 to-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                Invoice Snapshot
              </p>
              <div className="mt-4 rounded-[1.4rem] border border-primary/14 bg-surface-container p-4 shadow-[0_16px_50px_rgba(5,8,18,0.35)]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-heading text-lg text-white">INV-2024-082</p>
                    <p className="text-sm text-on-surface-variant">Creative Retainer</p>
                  </div>
                  <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Draft
                  </div>
                </div>
                <div className="mt-6 space-y-3 text-sm text-on-surface-variant">
                  <div className="flex items-center justify-between">
                    <span>Klien</span>
                    <span className="text-white">Siska Mariani</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Jatuh tempo</span>
                    <span className="text-white">05 Nov 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Total</span>
                    <span className="font-mono text-base text-white">Rp 7.200.000</span>
                  </div>
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3">
                    <p className="text-xs text-on-surface-variant">Status</p>
                    <p className="mt-1 font-medium text-secondary">Siap kirim</p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3">
                    <p className="text-xs text-on-surface-variant">Metode</p>
                    <p className="mt-1 font-medium text-white">QRIS + VA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="glass-panel rounded-[1.75rem] p-5">
            <div className="flex items-center justify-between">
              <p className="font-heading text-xl tracking-[-0.03em] text-white">
                Payment Signals
              </p>
              <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-on-surface-variant">
                Real-time
              </span>
            </div>
            <div className="mt-5 space-y-4">
              {[
                {
                  label: "Lunas tepat waktu",
                  width: "w-[84%]",
                  tone: "bg-secondary",
                },
                { label: "Perlu follow-up", width: "w-[52%]", tone: "bg-primary" },
                { label: "Tertunda", width: "w-[28%]", tone: "bg-tertiary" },
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-on-surface-variant">{item.label}</span>
                    <span className="text-white">{item.width.slice(3, -2)}%</span>
                  </div>
                  <div className="h-2.5 rounded-full bg-white/6">
                    <div className={`h-full rounded-full ${item.tone} ${item.width}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-panel rounded-[1.75rem] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#25D366]/12 text-[#25D366]">
                <Icon className="h-5 w-5" name="whatsapp" />
              </div>
              <div>
                <p className="font-medium text-white">WhatsApp Reminder</p>
                <p className="text-sm text-on-surface-variant">
                  Dijadwalkan otomatis setiap jatuh tempo
                </p>
              </div>
            </div>
            <div className="mt-4 rounded-[1.4rem] border border-white/8 bg-black/18 p-4">
              <p className="text-sm text-on-surface-variant">Pesan hari ini</p>
              <p className="mt-2 text-sm leading-6 text-white/90">
                Halo Kak Maya, invoice bulan Oktober dengan total Rp 7.200.000
                akan jatuh tempo besok. Link pembayaran aktif dan siap digunakan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, tone }) {
  return (
    <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">{label}</p>
      <p className={`mt-2 font-heading text-xl tracking-[-0.03em] ${toneClasses[tone]}`}>
        {value}
      </p>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="section-shell section-pad pt-16 sm:pt-20 lg:pt-28">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/18 bg-primary/6 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary">
          <Icon className="h-3.5 w-3.5" name="bolt" />
          Baru: Integrasi WhatsApp otomatis
        </div>
        <h1 className="mt-6 font-heading text-4xl leading-[0.96] tracking-[-0.05em] text-balance text-white sm:text-5xl lg:text-[4.8rem]">
          Stop Lupa Nagih Client. Mulai Terima Bayaran Tepat Waktu.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-on-surface-variant sm:text-lg">
          Invoice generator modern yang dirancang untuk freelancer dan UMKM
          Indonesia. Kirim invoice profesional dan pengingat WhatsApp otomatis
          dalam hitungan detik.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <PrimaryLink href="#pricing" icon="arrow-right">
            Mulai Tagih Gratis
          </PrimaryLink>
          <SecondaryLink href="#preview" icon="play">
            Lihat Demo
          </SecondaryLink>
        </div>
      </div>
      <HeroPreview />
    </section>
  );
}

function StatsSection() {
  return (
    <section className="border-y border-white/6 bg-black/10">
      <div className="section-shell grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-[1.5rem] border border-white/6 bg-white/[0.02] px-6 py-5 text-center"
          >
            <div className={`font-heading text-3xl tracking-[-0.04em] ${toneClasses[stat.tone]}`}>
              {stat.value}
            </div>
            <p className="mt-2 text-sm text-on-surface-variant">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeatureArtwork() {
  return (
    <div className="relative mt-10 min-h-56 overflow-hidden rounded-[1.75rem] border border-white/8 bg-black/18 p-5">
      <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-primary/18 blur-3xl" />
      <div className="absolute -bottom-8 left-8 h-32 w-32 rounded-full bg-secondary/18 blur-3xl" />
      <div className="relative grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[1.4rem] border border-white/8 bg-surface-container p-4">
          <div className="flex items-center justify-between border-b border-white/8 pb-3">
            <div>
              <p className="font-heading text-lg text-white">Invoice Draft</p>
              <p className="text-xs text-on-surface-variant">Template modern</p>
            </div>
            <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
              Ready
            </span>
          </div>
          <div className="mt-4 space-y-3">
            {[
              ["Client", "Andra Studio"],
              ["Service", "Brand Identity Sprint"],
              ["Due Date", "24 Okt 2024"],
              ["Subtotal", "Rp 4.500.000"],
            ].map(([label, value]) => (
              <div key={label} className="flex items-center justify-between text-sm">
                <span className="text-on-surface-variant">{label}</span>
                <span className="text-white">{value}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.03] p-3">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-on-surface-variant">
              <span>Methods</span>
              <span>Auto-enabled</span>
            </div>
            <div className="mt-3 flex gap-3">
              {paymentMethods.map((method) => (
                <div
                  key={method.label}
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/8 bg-black/18 px-3 py-3 text-sm text-white"
                >
                  <Icon className={`h-4 w-4 ${method.tone}`} name={method.icon} />
                  <span>{method.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
              Workflow
            </p>
            <div className="mt-4 space-y-3">
              {["Generate invoice", "Kirim via email atau WhatsApp", "Monitor status bayar"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/8 bg-black/16 px-4 py-3 text-sm text-white"
                  >
                    <Icon className="h-4 w-4 text-secondary" name="check" />
                    <span>{item}</span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="rounded-[1.4rem] border border-white/8 bg-gradient-to-br from-primary/12 to-transparent p-4">
            <p className="font-heading text-lg text-white">Template siap kirim</p>
            <p className="mt-2 text-sm leading-6 text-on-surface-variant">
              Visual invoice tetap premium tanpa perlu desain manual berulang
              setiap kali closing project.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PaymentArtwork() {
  return (
    <div className="mt-10 lg:mt-0">
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/8 bg-black/18 p-5 shadow-[0_28px_70px_rgba(4,10,26,0.28)]">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-8 left-6 h-24 w-24 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                Checkout Flow
              </p>
              <p className="mt-1 font-heading text-xl tracking-[-0.03em] text-white">
                Payment link siap kirim
              </p>
            </div>
            <div className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
              Auto route
            </div>
          </div>

          <div className="mt-5 rounded-[1.4rem] border border-white/8 bg-surface-container p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-on-surface-variant">Invoice total</p>
                <p className="mt-1 font-heading text-3xl tracking-[-0.04em] text-white">
                  Rp 7,2 jt
                </p>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-2 text-right">
                <p className="text-xs text-on-surface-variant">Status</p>
                <p className="mt-1 text-sm font-semibold text-primary">Ready to pay</p>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {paymentMethods.map((method, index) => (
                <div
                  key={method.label}
                  className={`flex items-center justify-between rounded-2xl border border-white/8 px-4 py-3 ${
                    index === 0 ? "bg-primary/8" : "bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/8 bg-black/18">
                      <Icon className={`h-5 w-5 ${method.tone}`} name={method.icon} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{method.label}</p>
                      <p className="text-xs text-on-surface-variant">
                        {index === 0
                          ? "Paling cepat untuk UMKM"
                          : index === 1
                            ? "Cocok untuk nominal besar"
                            : "Untuk pembayaran korporat"}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-on-surface-variant">
                    {index === 0 ? "48%" : index === 1 ? "32%" : "20%"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {[
              ["Settle", "1.2 hari"],
              ["Success", "98.4%"],
              ["Methods", "3 aktif"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/8 bg-white/[0.03] px-3 py-3"
              >
                <p className="text-xs text-on-surface-variant">{label}</p>
                <p className="mt-1 font-heading text-lg tracking-[-0.03em] text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturesSection() {
  const [primaryFeature, whatsappFeature, trackingFeature, paymentFeature] =
    featureCards;

  return (
    <section id="features" className="sr-anchor section-shell section-pad relative">
      <div className="parallax-soft absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      <SectionHeading
        centered
        eyebrow="Core Features"
        title={
          <>
            Fitur Cerdas untuk <span className="text-primary">Bisnis Pintar</span>
          </>
        }
        description="Setiap section dirancang untuk membantu Anda mengirim, memantau, dan menagih tanpa drama administratif."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-12">
        <article className="glass-panel md:col-span-8 rounded-[2rem] p-6 sm:p-8">
          <div className="max-w-xl">
            <div className={`feature-icon ${toneClasses[primaryFeature.tone]}`}>
              <Icon className="h-7 w-7" name={primaryFeature.icon} />
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-on-surface-variant">
              {primaryFeature.eyebrow}
            </p>
            <h3 className="mt-3 font-heading text-2xl tracking-[-0.03em] text-white">
              {primaryFeature.title}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-on-surface-variant">
              {primaryFeature.description}
            </p>
          </div>
          <FeatureArtwork />
        </article>

        {[whatsappFeature, trackingFeature].map((feature) => (
          <article
            key={feature.id}
            className="glass-panel md:col-span-4 rounded-[2rem] p-6 sm:p-8"
          >
            <div className={`feature-icon ${toneClasses[feature.tone]}`}>
              <Icon className="h-7 w-7" name={feature.icon} />
            </div>
            <p className="mt-6 text-xs uppercase tracking-[0.22em] text-on-surface-variant">
              {feature.eyebrow}
            </p>
            <h3 className="mt-3 font-heading text-2xl tracking-[-0.03em] text-white">
              {feature.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-on-surface-variant">
              {feature.description}
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-black/18 p-4">
              {feature.id === "whatsapp-reminder" ? (
                <div className="space-y-3">
                  {[
                    ["H-1", "Reminder sopan sebelum due date"],
                    ["H+0", "Follow-up otomatis saat jatuh tempo"],
                    ["H+3", "Escalation jika invoice belum dibayar"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-secondary">
                        {label}
                      </p>
                      <p className="mt-1 text-sm text-white">{value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {[
                    ["Invoice aktif", "24", "w-[78%]"],
                    ["Perlu reminder", "08", "w-[42%]"],
                    ["Sudah lunas", "16", "w-[64%]"],
                  ].map(([label, value, width]) => (
                    <div key={label} className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-sm text-on-surface-variant">{label}</p>
                        <p className="mt-1 font-heading text-2xl tracking-[-0.03em] text-white">
                          {value}
                        </p>
                      </div>
                      <div className="w-24">
                        <div className="mb-2 h-2 rounded-full bg-white/6">
                          <div className={`h-full rounded-full bg-gradient-to-r from-primary to-secondary ${width}`} />
                        </div>
                        <div className="h-2 rounded-full bg-white/6">
                          <div className={`h-full rounded-full bg-white/18 ${width}`} />
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                          Collection rate
                        </p>
                        <p className="mt-1 font-heading text-xl tracking-[-0.03em] text-white">
                          72%
                        </p>
                      </div>
                      <div className="h-14 w-14 rounded-full border border-secondary/20 bg-secondary/10 p-1">
                        <div className="flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-black/18 text-sm font-semibold text-secondary">
                          +12%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}

        <article className="glass-panel md:col-span-8 rounded-[2rem] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className={`feature-icon ${toneClasses[paymentFeature.tone]}`}>
                <Icon className="h-7 w-7" name={paymentFeature.icon} />
              </div>
              <p className="mt-6 text-xs uppercase tracking-[0.22em] text-on-surface-variant">
                {paymentFeature.eyebrow}
              </p>
              <h3 className="mt-3 font-heading text-2xl tracking-[-0.03em] text-white">
                {paymentFeature.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-7 text-on-surface-variant">
                {paymentFeature.description}
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Aktifkan QRIS, VA, dan kartu kredit dalam satu link pembayaran",
                  "Pelanggan otomatis diarahkan ke metode yang paling familiar",
                  "Settlement dan status bayar langsung tampil di dashboard",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white"
                  >
                    <Icon className="h-4 w-4 text-secondary" name="check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <PaymentArtwork />
          </div>
        </article>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="section-shell section-pad relative overflow-hidden">
      <SectionHeading
        centered
        eyebrow="Simple Workflow"
        title="3 Langkah Mudah Mulai Nagih"
        description="Alur dibuat singkat supaya tim kecil sekalipun bisa langsung pakai tanpa onboarding yang melelahkan."
      />
      <div className="relative mt-14 grid gap-8 md:grid-cols-3">
        <div className="pointer-events-none absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent md:block" />
        {steps.map((step) => (
          <article
            key={step.number}
            className="glass-panel relative rounded-[2rem] p-8 text-center"
          >
            <div
              className={`mx-auto flex h-20 w-20 items-center justify-center rounded-[1.5rem] border border-white/8 bg-black/16 font-heading text-3xl ${
                toneClasses[step.tone]
              }`}
            >
              {step.number}
            </div>
            <h3 className="mt-6 font-heading text-2xl tracking-[-0.03em] text-white">
              {step.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-on-surface-variant">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section
      id="cta"
      className="sr-anchor section-shell px-5 pt-10 pb-4 sm:px-10 sm:pt-12 sm:pb-6 lg:px-16 lg:pt-16 lg:pb-8"
    >
      <div className="glass-panel relative overflow-hidden rounded-[2.5rem] px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.24em] text-on-surface-variant">
            Ready to launch
          </p>
          <h2 className="mt-4 font-heading text-3xl tracking-[-0.04em] text-white sm:text-4xl lg:text-[3.4rem]">
            Mulai Tagih Lebih Mudah Hari Ini
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-on-surface-variant sm:text-lg">
            Tinggalkan cara lama yang bikin pusing. Bergabunglah dengan ribuan
            pebisnis cerdas lainnya yang ingin cashflow lebih rapi.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex items-center gap-3 rounded-[1.1rem] bg-[#25D366] px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_40px_rgba(37,211,102,0.22)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <Icon className="h-5 w-5" name="whatsapp" />
              Daftar via WhatsApp
            </a>
            <SecondaryLink href="#pricing">Coba Gratis 14 Hari</SecondaryLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/6 bg-[rgba(4,10,24,0.72)] py-8 backdrop-blur-xl sm:py-10">
      <div className="section-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <a
            href="#top"
            className="font-heading text-lg font-bold tracking-[-0.04em] text-primary"
          >
            NagihClient
          </a>
          <p className="mt-3 text-sm text-on-surface-variant">
            © {year} NagihClient. Empowering Indonesian UMKM.
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm text-on-surface-variant">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-secondary"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex gap-3">
          {[
            ["globe", "#top", "Website placeholder"],
            ["at", "#cta", "Support placeholder"],
          ].map(([icon, href, label]) => (
            <a
              key={label}
              aria-label={label}
              href={href}
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-on-surface-variant transition-colors hover:border-primary/40 hover:text-white"
            >
              <Icon className="h-4 w-4" name={icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function LandingPage() {
  return (
    <div id="top" className="relative isolate overflow-x-clip">
      <ScrollEffectsLoader />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-on-primary"
      >
        Lewati ke konten
      </a>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="parallax-drift absolute left-0 top-0 h-[36rem] w-[36rem] rounded-full bg-primary/12 blur-3xl" />
        <div className="parallax-soft absolute right-[-6rem] top-[22rem] h-[28rem] w-[28rem] rounded-full bg-secondary/12 blur-3xl" />
        <div className="parallax-drift absolute bottom-0 left-[15%] h-[24rem] w-[24rem] translate-y-1/3 rounded-full bg-tertiary/10 blur-3xl" />
      </div>
      <TopNav />
      <main id="content">
        <HeroSection />
        <StatsSection />
        <FeaturesSection />
        <DashboardPreviewSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
