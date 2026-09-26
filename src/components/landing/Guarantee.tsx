import { FadeIn } from "@/components/FadeIn";
import { guarantee } from "@/content/landing";

export function Guarantee() {
  return (
    <section className="border-b border-border bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <FadeIn>
          <div className="rounded-xl border border-border bg-surface px-5 py-8 sm:px-8 sm:py-10">
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-red sm:text-4xl">
              {guarantee.heading}
            </h2>
            <div className="mt-6 space-y-5">
              {guarantee.paragraphs.map((p) => (
                <p
                  key={p}
                  className="text-center text-[15px] leading-relaxed text-body sm:text-base"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
