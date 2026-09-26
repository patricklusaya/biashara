"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { faq } from "@/content/landing";

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-4 py-4 text-left sm:py-5"
      >
        <span className="text-[15px] font-semibold leading-snug text-ink sm:text-base">
          {question}
        </span>
        <span
          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-sm text-muted transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 text-[15px] leading-relaxed text-body sm:pb-5">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-b border-border bg-surface py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold tracking-tight text-red sm:text-4xl">
            {faq.heading}
          </h2>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mt-8 rounded-xl border border-border bg-white px-4 sm:px-6">
            {faq.items.map((item, i) => (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                open={openIndex === i}
                onToggle={() =>
                  setOpenIndex((prev) => (prev === i ? null : i))
                }
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
