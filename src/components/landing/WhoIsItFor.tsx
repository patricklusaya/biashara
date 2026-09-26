import { FadeIn } from "@/components/FadeIn";
import { whoIsItFor } from "@/content/landing";

export function WhoIsItFor() {
  return (
    <section className="border-b border-border bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight text-red sm:text-4xl">
            {whoIsItFor.heading}
          </h2>
          <p className="mt-3 text-[15px] text-body">{whoIsItFor.intro}</p>
        </FadeIn>

        <FadeIn delay={80}>
          <ul className="mt-8 space-y-0 divide-y divide-border rounded-xl border border-border bg-white">
            {whoIsItFor.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 px-4 py-3.5 text-[15px] text-ink sm:px-5"
              >
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent"
                  aria-hidden
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={120}>
          <p className="mt-6 rounded-lg border border-dashed border-border bg-white px-4 py-4 text-[15px] leading-relaxed text-body sm:px-5">
            {whoIsItFor.note}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
