import { FadeIn } from "@/components/FadeIn";
import { transformation } from "@/content/landing";

export function Transformation() {
  return (
    <section className="border-b border-border bg-ink py-14 text-white sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight text-red sm:text-4xl">
            {transformation.heading}
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <ol className="mt-10 flex flex-col items-center gap-0">
            {transformation.steps.map((step, i) => (
              <li key={step} className="flex w-full max-w-sm flex-col items-center">
                <div className="w-full rounded-lg border border-white/15 bg-white/5 px-5 py-3.5 text-center">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                    Step {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 text-base font-bold tracking-wide sm:text-lg">
                    {step}
                  </p>
                </div>
                {i < transformation.steps.length - 1 && (
                  <span
                    className="my-1.5 text-lg font-light text-accent"
                    aria-hidden
                  >
                    ↓
                  </span>
                )}
              </li>
            ))}
          </ol>
        </FadeIn>

        <FadeIn delay={180}>
          <p className="mt-12 border-t border-white/10 pt-8 text-center font-display text-2xl font-bold leading-snug tracking-tight text-red sm:text-3xl">
            {transformation.statement}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
