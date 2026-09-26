import { FadeIn } from "@/components/FadeIn";
import { curriculum } from "@/content/landing";

export function Curriculum() {
  return (
    <section className="border-b border-border bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight text-red sm:text-4xl">
            {curriculum.heading}
          </h2>
        </FadeIn>

        <div className="mt-10 space-y-6">
          {curriculum.modules.map((mod, i) => (
            <FadeIn key={mod.number} delay={i * 50}>
              <article className="rounded-xl border border-border bg-surface p-5 sm:p-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-bold tracking-widest text-accent">
                    MODULE {mod.number}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-red">
                  {mod.title}
                </h3>
                {"isFlow" in mod && mod.isFlow ? (
                  <p className="mt-4 rounded-lg bg-ink px-4 py-3 text-center text-sm font-semibold tracking-wide text-white sm:text-base">
                    {mod.topics[0]}
                  </p>
                ) : (
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {mod.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2 text-[15px] text-body"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/40" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={100}>
          <p className="mt-8 text-sm leading-relaxed text-muted">
            {curriculum.disclaimer}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
