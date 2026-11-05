import { CheckoutButton } from "@/components/CheckoutButton";
import { OfferDeadline } from "@/components/landing/OfferDeadline";
import { SalesVideo } from "@/components/landing/SalesVideo";
import { hero } from "@/content/landing";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #d4d4d4 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14">
        {/* Main header — top center */}
        <div className="mb-8 text-center">
          <h1 className="font-display text-[2.35rem] font-bold leading-[1.1] tracking-tight text-red sm:text-5xl sm:leading-[1.08]">
            {hero.headline}
          </h1>
          <p className="mt-4 text-lg font-bold leading-snug tracking-wide text-red sm:text-2xl">
            {hero.subheadline}
          </p>
        </div>

        {/* Video */}
        <SalesVideo embedded />

        {/* CTA */}
        <div className="mt-6 flex flex-col items-center gap-2 text-center">
          <CheckoutButton className="w-full sm:w-auto">
            {hero.cta}
          </CheckoutButton>
          <p className="text-xl font-bold tracking-tight text-red sm:text-2xl">
            {hero.price}
          </p>
          <OfferDeadline />
          <p className="max-w-md text-sm leading-relaxed text-muted">
            {hero.ctaNote}
          </p>
        </div>

        {/* Extra details */}
        <p className="mt-10 text-center text-[15px] leading-relaxed text-body sm:text-base">
          {hero.support}
        </p>
      </div>
    </section>
  );
}
