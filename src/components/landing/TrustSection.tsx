import { FadeIn } from "@/components/FadeIn";
import { trust } from "@/content/landing";

export function TrustSection() {
  return (
    <section className="border-b border-border bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight text-red sm:text-4xl">
            {trust.heading}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-body sm:text-base">
            {trust.lead}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-body sm:text-base">
            {trust.body}
          </p>
          <p className="mt-6 rounded-lg bg-ink px-5 py-4 text-center font-display text-lg font-bold tracking-wide text-red sm:text-xl">
            {trust.flow}
          </p>
          <p className="mt-6 text-[15px] leading-relaxed text-body sm:text-base">
            {trust.closing}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
