"use client";

import { CHECKOUT_URL } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

type CheckoutButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "sticky";
  fullWidth?: boolean;
};

export function CheckoutButton({
  children,
  className = "",
  variant = "primary",
  fullWidth = false,
}: CheckoutButtonProps) {
  function handleClick() {
    trackEvent("InitiateCheckout", {
      content_name: "Digital Product Sales System",
      content_category: "course",
    });
    window.location.href = CHECKOUT_URL;
  }

  const base =
    "inline-flex items-center justify-center gap-2 font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-60";

  const variants = {
    primary:
      "rounded-lg bg-accent px-7 py-3.5 text-[15px] text-white shadow-sm hover:bg-accent-hover hover:shadow-md",
    sticky:
      "rounded-lg bg-accent px-5 py-3.5 text-[15px] text-white shadow-lg hover:bg-accent-hover",
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${base} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
