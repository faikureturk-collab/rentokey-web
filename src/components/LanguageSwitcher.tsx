"use client";

import { usePathname } from "next/navigation";
import { languageHref, type Locale } from "@/lib/locale";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  return (
    <nav aria-label={locale === "en" ? "Website language" : "Site dili"} className="flex shrink-0 rounded-full border border-surface-border p-1 text-xs font-bold">
      {(["tr", "en"] as const).map((language) => (
        <a key={language} href={languageHref(pathname, language)} hrefLang={language} lang={language}
          aria-current={locale === language ? "true" : undefined}
          aria-label={language === "en" ? "English" : "Türkçe"}
          className={`rounded-full px-2.5 py-2 focus-visible:outline-2 focus-visible:outline-brand-green ${locale === language ? "bg-brand-navy text-white" : "text-brand-navy/65 hover:bg-surface-soft"}`}>
          {language.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
