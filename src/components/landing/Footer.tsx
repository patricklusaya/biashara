import { SITE, WHATSAPP_URL } from "@/lib/config";
import { footer } from "@/content/landing";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface pb-24 pt-10 md:pb-10">
      <div className="mx-auto flex max-w-3xl flex-col gap-6 px-5 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-ink">{footer.brand}</p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            <a href={footer.privacyHref} className="hover:text-ink">
              {footer.privacy}
            </a>
            <a href={footer.termsHref} className="hover:text-ink">
              {footer.terms}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              {footer.contact}: 255 658 128 120
            </a>
          </nav>
        </div>
        <p className="text-xs text-muted">
          © {year} {SITE.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
