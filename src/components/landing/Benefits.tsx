import { FadeIn } from "@/components/FadeIn";
import { benefits } from "@/content/landing";

export function Benefits() {
  return (
    <section className="border-b border-border bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight text-red sm:text-4xl">
            {benefits.heading}
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {benefits.items.map((item, i) => (
            <FadeIn key={item.number} delay={i * 40}>
              <article className="h-full border-t-2 border-accent pt-4">
                <span className="text-xs font-bold tracking-widest text-muted">
                  {item.number}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold leading-snug text-red">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
