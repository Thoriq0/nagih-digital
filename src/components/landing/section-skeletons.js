function SkeletonBlock({ className = "" }) {
  return <div aria-hidden="true" className={`skeleton-surface ${className}`} />;
}

function SkeletonSectionHeading({ centered = false }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <SkeletonBlock className="mx-auto mb-4 h-8 w-36 rounded-full" />
      <SkeletonBlock
        className={`h-12 w-full rounded-[1.25rem] ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
      />
      <SkeletonBlock
        className={`mt-4 h-5 w-full rounded-full ${centered ? "mx-auto max-w-xl" : "max-w-xl"}`}
      />
      <SkeletonBlock
        className={`mt-3 h-5 w-4/5 rounded-full ${centered ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
      />
    </div>
  );
}

function SkeletonTableRow() {
  return (
    <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-4 border-t border-white/6 px-6 py-5 lg:grid-cols-[1.7fr_1fr_1fr_0.8fr]">
      <div className="flex items-center gap-3">
        <SkeletonBlock className="h-11 w-11 rounded-full" />
        <div className="flex-1 space-y-2">
          <SkeletonBlock className="h-4 w-32 rounded-full" />
          <SkeletonBlock className="h-3.5 w-24 rounded-full" />
        </div>
      </div>
      <SkeletonBlock className="h-4 w-24 rounded-full" />
      <SkeletonBlock className="h-4 w-20 rounded-full" />
      <SkeletonBlock className="hidden h-8 w-24 rounded-full justify-self-end lg:block" />
    </div>
  );
}

function SkeletonPlanCard({ featured = false }) {
  return (
    <article
      className={`glass-panel relative flex h-full flex-col rounded-[2rem] p-8 ${
        featured ? "border-primary/18 bg-surface-high" : ""
      }`}
    >
      <SkeletonBlock className="h-4 w-24 rounded-full" />
      <div className="mt-5 flex items-end gap-2">
        <SkeletonBlock className="h-10 w-28 rounded-[1rem]" />
        <SkeletonBlock className="h-4 w-14 rounded-full" />
      </div>
      <SkeletonBlock className="mt-4 h-4 w-full rounded-full" />
      <SkeletonBlock className="mt-3 h-4 w-3/4 rounded-full" />
      <div className="mt-8 space-y-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex items-center gap-3">
            <SkeletonBlock className="h-4 w-4 rounded-full" />
            <SkeletonBlock className="h-4 flex-1 rounded-full" />
          </div>
        ))}
      </div>
      <SkeletonBlock className="mt-10 h-12 w-full rounded-2xl" />
    </article>
  );
}

function SkeletonTestimonialCard() {
  return (
    <article className="glass-panel min-w-[18.75rem] rounded-[2rem] p-8 sm:min-w-[22rem] lg:min-w-[24rem]">
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <SkeletonBlock key={index} className="h-4 w-4 rounded-full" />
        ))}
      </div>
      <SkeletonBlock className="mt-6 h-4 w-full rounded-full" />
      <SkeletonBlock className="mt-3 h-4 w-full rounded-full" />
      <SkeletonBlock className="mt-3 h-4 w-5/6 rounded-full" />
      <div className="mt-8 flex items-center gap-4">
        <SkeletonBlock className="h-12 w-12 rounded-full" />
        <div className="space-y-2">
          <SkeletonBlock className="h-4 w-28 rounded-full" />
          <SkeletonBlock className="h-3.5 w-20 rounded-full" />
        </div>
      </div>
    </article>
  );
}

export function DashboardPreviewSkeleton() {
  return (
    <section
      id="preview"
      aria-busy="true"
      className="sr-anchor section-pad bg-surface-lowest/36"
    >
      <div className="section-shell">
        <SkeletonSectionHeading centered />
        <div className="glass-panel mt-14 overflow-hidden rounded-[2rem]">
          <div className="flex flex-col gap-4 border-b border-white/8 bg-white/[0.03] px-5 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <SkeletonBlock key={index} className="h-10 w-28 rounded-xl" />
              ))}
            </div>
            <SkeletonBlock className="h-10 w-full rounded-xl sm:w-72" />
          </div>
          <div className="px-6 py-4">
            <div className="grid grid-cols-[1.5fr_1fr_1fr] gap-4 text-[0.68rem] uppercase tracking-[0.24em] text-on-surface-variant lg:grid-cols-[1.7fr_1fr_1fr_0.8fr]">
              <SkeletonBlock className="h-3 w-16 rounded-full" />
              <SkeletonBlock className="h-3 w-16 rounded-full" />
              <SkeletonBlock className="h-3 w-20 rounded-full" />
              <SkeletonBlock className="hidden h-3 w-16 rounded-full justify-self-end lg:block" />
            </div>
          </div>
          <div>
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonTableRow key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingSectionSkeleton() {
  return (
    <section id="pricing" aria-busy="true" className="sr-anchor section-pad bg-black/18">
      <div className="section-shell">
        <SkeletonSectionHeading centered />
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-2xl border border-white/8 bg-surface-container p-1">
            <SkeletonBlock className="h-10 w-28 rounded-xl" />
            <SkeletonBlock className="h-10 w-32 rounded-xl" />
          </div>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <SkeletonPlanCard />
          <SkeletonPlanCard featured />
          <SkeletonPlanCard />
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSectionSkeleton() {
  return (
    <section
      id="testimonials"
      aria-busy="true"
      className="sr-anchor section-shell section-pad relative"
    >
      <SkeletonSectionHeading centered />
      <div className="mt-10 flex items-center justify-end gap-3">
        <SkeletonBlock className="h-11 w-11 rounded-2xl" />
        <SkeletonBlock className="h-11 w-11 rounded-2xl" />
      </div>
      <div className="mt-8 flex gap-6 overflow-hidden pb-2">
        <SkeletonTestimonialCard />
        <div className="hidden sm:block">
          <SkeletonTestimonialCard />
        </div>
        <div className="hidden lg:block">
          <SkeletonTestimonialCard />
        </div>
      </div>
    </section>
  );
}
