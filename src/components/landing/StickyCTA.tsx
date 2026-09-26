"use client";

import { CheckoutButton } from "@/components/CheckoutButton";
import { stickyCta } from "@/content/landing";

export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur-sm md:hidden">
      <CheckoutButton variant="sticky" fullWidth>
        {stickyCta.text}
      </CheckoutButton>
    </div>
  );
}
