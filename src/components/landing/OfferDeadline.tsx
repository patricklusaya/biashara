"use client";

import { useEffect, useState } from "react";
import { offerDeadline } from "@/content/landing";

function remaining(endsAt: string) {
  const diff = new Date(endsAt).getTime() - Date.now();
  if (diff <= 0) return null;
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

const units = [
  { key: "days", label: "Siku" },
  { key: "hours", label: "Masaa" },
  { key: "minutes", label: "Dakika" },
  { key: "seconds", label: "Sekunde" },
] as const;

export function OfferDeadline({ tone = "light" }: { tone?: "light" | "dark" }) {
  const [time, setTime] = useState(() => remaining(offerDeadline.endsAt));

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(remaining(offerDeadline.endsAt));
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const box =
    tone === "dark"
      ? "border-white/15 bg-white/5 text-white"
      : "border-red/20 bg-white text-ink";

  return (
    <div className="mt-1 flex flex-col items-center gap-3">
      <p className="text-sm font-bold uppercase tracking-wide text-red sm:text-base">
        {time
          ? `${offerDeadline.label} ${offerDeadline.dateLabel}`
          : offerDeadline.ended}
      </p>
      {time && (
        <div className="grid grid-cols-4 gap-2">
          {units.map((unit) => (
            <div
              key={unit.key}
              className={`min-w-[4.25rem] rounded-lg border px-2 py-2 text-center ${box}`}
            >
              <p className="font-display text-xl font-bold tabular-nums leading-none text-red sm:text-2xl">
                {String(time[unit.key]).padStart(2, "0")}
              </p>
              <p className={`mt-1 text-[11px] ${tone === "dark" ? "text-white/60" : "text-muted"}`}>
                {unit.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
