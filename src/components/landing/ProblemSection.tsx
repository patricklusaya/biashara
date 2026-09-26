import { FadeIn } from "@/components/FadeIn";
import { problem } from "@/content/landing";

export function ProblemSection() {
  return (
    <section className="border-b border-border bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight text-red sm:text-4xl">
            {problem.heading}
          </h2>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-white p-5 shadow-sm sm:p-6">
            <ol className="flex min-w-[520px] flex-col gap-0 sm:min-w-0">
              {problem.flow.map((step, i) => (
                <li key={step} className="flex items-start gap-3">
                  <div className="flex w-8 shrink-0 flex-col items-center">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-xs font-bold text-muted">
                      {i + 1}
                    </span>
                    {i < problem.flow.length - 1 && (
                      <span className="my-1 h-4 w-px bg-border" aria-hidden />
                    )}
                  </div>
                  <p
                    className={`pt-1.5 text-[15px] leading-snug ${
                      i === problem.flow.length - 1
                        ? "font-semibold text-accent"
                        : "text-ink"
                    }`}
                  >
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-8 space-y-3">
            <p className="text-[15px] leading-relaxed text-body sm:text-base">
              {problem.tolerance}
            </p>
            <p className="text-[15px] font-bold leading-relaxed text-red sm:text-lg">
              {problem.breakingPoint}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={160}>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {problem.pains.map((pain) => (
              <li
                key={pain}
                className="flex items-start gap-3 rounded-lg border border-border bg-white px-4 py-3.5 text-[15px] text-ink"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                {pain}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
