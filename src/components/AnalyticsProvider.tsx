"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import {
  captureFirstTouch,
  getAnalyticsConsent,
  setAnalyticsConsent,
  trackEvent,
  type AnalyticsConsent,
} from "@/lib/analytics";
import type { Locale } from "@/lib/locale";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

export default function AnalyticsProvider({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const gaInitialised = useRef(false);
  const consent = useSyncExternalStore(
    (onChange) => {
      window.addEventListener("rentokey:analytics-consent-change", onChange);
      return () => window.removeEventListener("rentokey:analytics-consent-change", onChange);
    },
    () => getAnalyticsConsent() ?? "unset",
    () => "pending",
  );
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    const openPreferences = () => setPreferencesOpen(true);
    window.addEventListener("rentokey:open-cookie-preferences", openPreferences);
    return () => window.removeEventListener("rentokey:open-cookie-preferences", openPreferences);
  }, []);

  useEffect(() => {
    if (!measurementId || consent !== "granted") return;
    captureFirstTouch();
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag(..._args: unknown[]) {
      window.dataLayer?.push(arguments);
    };
    if (!gaInitialised.current) {
      window.gtag("js", new Date());
      window.gtag("consent", "update", { analytics_storage: "granted" });
      window.gtag("config", measurementId, {
        send_page_view: false,
        anonymize_ip: true,
        linker: { domains: ["rentokey.com", "www.rentokey.com", "app.rentokey.com"] },
      });
      gaInitialised.current = true;
    }
    window.gtag("event", "page_view", {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [consent, pathname]);

  useEffect(() => {
    if (!measurementId || consent !== "granted") return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a") : null;
      if (!(target instanceof HTMLAnchorElement)) return;
      const href = new URL(target.href, window.location.href);
      if (href.origin !== window.location.origin) return;
      if (href.pathname !== "/ucretsiz-dene" && href.pathname !== "/en/free-trial") return;

      const section = target.closest("section[id]")?.id || (pathname === "/" || pathname === "/en" ? "header" : "page");
      trackEvent("trial_cta_click", { locale, cta_location: section });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [consent, locale, pathname]);

  if (!measurementId) return null;

  const choose = (value: AnalyticsConsent) => {
    if (value === "denied" && consent === "granted") {
      window.gtag?.("consent", "update", { analytics_storage: "denied" });
      document.cookie.split(";").forEach((cookie) => {
        const name = cookie.split("=")[0]?.trim();
        if (!name?.startsWith("_ga") && name !== "_gid" && name !== "_gat") return;
        document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
        document.cookie = `${name}=; Max-Age=0; path=/; domain=.rentokey.com; SameSite=Lax`;
      });
    }
    setAnalyticsConsent(value);
    setPreferencesOpen(false);
  };

  const showPreferences = consent === "unset" || preferencesOpen;

  return (
    <>
      {consent === "granted" && (
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
      )}

      {showPreferences && (
        <div className="fixed inset-x-3 bottom-3 z-[100] mx-auto max-w-3xl rounded-2xl border border-surface-border bg-white p-4 shadow-2xl shadow-brand-navy/20 sm:flex sm:items-center sm:gap-5 sm:p-5" role="dialog" aria-label={locale === "en" ? "Analytics preferences" : "Analitik tercihleri"}>
          <p className="text-xs leading-relaxed text-brand-navy/65 sm:flex-1">
            {locale === "en"
              ? "With your permission, we use Google Analytics to understand which channels bring visitors to Rent Okey and improve the trial journey. We never send your name, email, phone number or password to analytics."
              : "İzninizle, ziyaretçilerin Rent Okey’e hangi kanallardan geldiğini anlamak ve deneme sürecini iyileştirmek için Google Analytics kullanıyoruz. Ad, e-posta, telefon veya şifrenizi analitiğe göndermiyoruz."}
          </p>
          <div className="mt-3 flex shrink-0 gap-2 sm:mt-0">
            <button type="button" onClick={() => choose("denied")} className="rounded-full border border-surface-border px-4 py-2 text-xs font-semibold text-brand-navy hover:bg-surface-soft">
              {locale === "en" ? "Decline" : "Reddet"}
            </button>
            <button type="button" onClick={() => choose("granted")} className="rounded-full bg-brand-green px-4 py-2 text-xs font-semibold text-white hover:bg-brand-green-dark">
              {locale === "en" ? "Allow analytics" : "Analitiğe izin ver"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
