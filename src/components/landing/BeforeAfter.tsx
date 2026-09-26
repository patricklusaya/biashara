import { FadeIn } from "@/components/FadeIn";
import { beforeAfter } from "@/content/landing";

function FlowColumn({
  title,
  steps,
  variant,
}: {
  title: string;
  steps: string[];
  variant: "before" | "after";
}) {
  const isAfter = variant === "after";

  return (
    <div
      className={`rounded-xl border p-5 sm:p-6 ${
        isAfter
          ? "border-accent/30 bg-white shadow-sm"
          : "border-border bg-surface"
      }`}
    >
      <h3
        className={`font-display text-xl font-bold tracking-wide ${
          isAfter ? "text-red" : "text-muted"
        }`}
      >
        {title}
      </h3>
      <ol className="mt-5 flex flex-col items-stretch">
        {steps.map((step, i) => (
          <li key={`${title}-${step}`} className="flex flex-col items-center">
            <div
              className={`w-full rounded-md px-3 py-2.5 text-center text-sm font-medium ${
                isAfter
                  ? "bg-ink text-white"
                  : "border border-border bg-white text-body"
              }`}
            >
              {step}
            </div>
            {i < steps.length - 1 && (
              <span
                className={`my-1 text-sm ${isAfter ? "text-accent" : "text-muted"}`}
                aria-hidden
              >
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section className="border-b border-border bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <FadeIn>
          <div className="grid gap-5 sm:grid-cols-2">
            <FlowColumn
              title={beforeAfter.before.title}
              steps={beforeAfter.before.steps}
              variant="before"
            />
            <FlowColumn
              title={beforeAfter.after.title}
              steps={beforeAfter.after.steps}
              variant="after"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
