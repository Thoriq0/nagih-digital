import Link from "next/link";

export const metadata = {
  title: "Login",
  description: "Masuk ke NagihClient untuk mengelola invoice dan pembayaran.",
};

function PreviewMetric({ label, value, tone = "text-primary" }) {
  return (
    <div className="rounded-[1.25rem] border border-white/8 bg-white/[0.03] p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
        {label}
      </p>
      <p className={`mt-2 font-heading text-2xl tracking-[-0.03em] ${tone}`}>
        {value}
      </p>
    </div>
  );
}

function LoginField({ label, type, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-white">{label}</span>
      <input
        className="w-full rounded-2xl border border-white/8 bg-surface-container px-4 py-3 text-sm text-white outline-none placeholder:text-on-surface-variant/55"
        placeholder={placeholder}
        type={type}
      />
    </label>
  );
}

export default function LoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-8 h-[24rem] w-[24rem] rounded-full bg-primary/12 blur-3xl" />
        <div className="absolute right-[-6rem] top-1/4 h-[22rem] w-[22rem] rounded-full bg-secondary/10 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/3 h-[20rem] w-[20rem] rounded-full bg-tertiary/10 blur-3xl" />
      </div>

      <header className="section-shell flex items-center justify-between py-6">
        <Link
          href="/"
          className="font-heading text-lg font-bold tracking-[-0.04em] text-white"
        >
          NagihClient
        </Link>
        <Link
          href="/"
          className="inline-flex items-center rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:text-white"
        >
          Kembali ke landing page
        </Link>
      </header>

      <section className="section-shell flex min-h-[calc(100vh-5.5rem)] items-center py-10 sm:py-14">
        <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/18 bg-primary/6 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-primary">
              Secure Access
            </div>
            <h1 className="mt-6 font-heading text-4xl leading-[0.96] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.4rem]">
              Masuk dan lanjutkan kontrol cashflow bisnis Anda.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-on-surface-variant sm:text-lg">
              Pantau invoice aktif, follow-up pembayaran, dan ringkas seluruh
              aktivitas penagihan dari satu dashboard yang rapi.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <PreviewMetric label="UMKM Aktif" value="10K+" tone="text-secondary" />
              <PreviewMetric label="On-Time Paid" value="98%" />
              <PreviewMetric label="Reminder Terkirim" value="24/7" tone="text-tertiary" />
            </div>

            <div className="glass-panel mt-8 rounded-[2rem] p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                Kenapa NagihClient
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-on-surface-variant">
                <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  Akses cepat ke dashboard invoice, status pembayaran, dan
                  antrean reminder harian.
                </li>
                <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  Pengalaman kerja yang dibuat ringkas untuk freelancer, studio,
                  dan tim kecil.
                </li>
                <li className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                  Visual tetap premium agar proses follow-up ke klien terasa
                  lebih profesional.
                </li>
              </ul>
            </div>
          </div>

          <div className="glass-panel rounded-[2rem] p-6 sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                  Member Access
                </p>
                <h2 className="mt-3 font-heading text-3xl tracking-[-0.04em] text-white">
                  Masuk ke Dashboard
                </h2>
              </div>
              <div className="rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                Verified Session
              </div>
            </div>

            <form className="mt-8 space-y-5">
              <LoginField
                label="Email"
                placeholder="nama@bisnisanda.com"
                type="email"
              />
              <LoginField
                label="Password"
                placeholder="Masukkan password"
                type="password"
              />

              <div className="flex items-center justify-between gap-4 text-sm">
                <label className="flex items-center gap-3 text-on-surface-variant">
                  <input
                    className="h-4 w-4 rounded border-white/10 bg-surface-container accent-primary"
                    type="checkbox"
                  />
                  <span>Ingat perangkat ini</span>
                </label>
                <span className="text-on-surface-variant/70">Lupa password?</span>
              </div>

              <button
                className="inline-flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-4 text-sm font-semibold text-on-primary shadow-[0_20px_40px_rgba(128,131,255,0.2)] transition-transform duration-200 hover:-translate-y-0.5"
                type="button"
              >
                Masuk ke akun
              </button>
            </form>

            <div className="mt-8 border-t border-white/8 pt-6">
              <div className="rounded-[1.5rem] border border-white/8 bg-black/16 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                  Quick Access
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    <p className="text-xs text-on-surface-variant">Workspace</p>
                    <p className="mt-1 text-sm font-medium text-white">
                      nagihclient.id
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    <p className="text-xs text-on-surface-variant">Support</p>
                    <p className="mt-1 text-sm font-medium text-white">24/7 Assistance</p>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-center text-sm text-on-surface-variant">
                Belum punya akun? Hubungi tim kami untuk aktivasi workspace baru.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
