import { CheckoutButton } from "@/components/CheckoutButton";
import { FadeIn } from "@/components/FadeIn";
import { finalCta } from "@/content/landing";

export function FinalCTA() {
  return (
    <section className="border-b border-border bg-ink py-16 text-white sm:py-24">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-6">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight text-red sm:text-4xl">
            {finalCta.headline}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-white/75 sm:text-base">
            {finalCta.text}
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <CheckoutButton className="min-w-[220px]">
              {finalCta.cta}
            </CheckoutButton>
            <p className="max-w-md text-sm leading-relaxed text-white/55">
              {finalCta.note}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
