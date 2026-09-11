"use client";

import { formCopy } from "@/lib/form-copy";
import type { Locale } from "@/lib/locale";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

type TurnstileOptions = {
  sitekey: string;
  action: string;
  language: "tr" | "en";
  theme: "auto" | "light" | "dark";
  size: "normal" | "flexible" | "compact";
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": (errorCode: string) => boolean;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileOptions) => string;
  reset: (widgetId: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export default function TurnstileWidget({
  locale = "tr",
  siteKey,
  action,
  containerId = "contact-form-turnstile",
  resetSignal,
  onTokenChange,
  onError,
}: {
  locale?: Locale;
  siteKey: string;
  action: string;
  containerId?: string;
  resetSignal: number;
  onTokenChange: (token: string) => void;
  onError: (message: string) => void;
}) {
  const t = useCallback((text: string) => formCopy(text, locale), [locale]);
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const initialResetSignal = useRef(resetSignal);
  const onTokenChangeRef = useRef(onTokenChange);
  const onErrorRef = useRef(onError);
  const [scriptReady, setScriptReady] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || shouldLoad) return;

    if (!("IntersectionObserver" in window)) {
      const timer = setTimeout(() => setShouldLoad(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "400px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [shouldLoad]);

  useEffect(() => {
    onTokenChangeRef.current = onTokenChange;
    onErrorRef.current = onError;
  }, [onError, onTokenChange]);

  const renderWidget = useCallback(() => {
    if (!siteKey || !containerRef.current || !window.turnstile || widgetIdRef.current) return;

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action,
      theme: "auto",
      language: locale,
      size: "flexible",
      callback: (token) => onTokenChangeRef.current(token),
      "expired-callback": () => {
        onTokenChangeRef.current("");
        if (widgetIdRef.current) window.turnstile?.reset(widgetIdRef.current);
      },
      "error-callback": () => {
        onTokenChangeRef.current("");
        onErrorRef.current(t("Güvenlik doğrulaması tamamlanamadı. Lütfen sayfayı yenileyip tekrar deneyin."));
        return true;
      },
    });
  }, [action, siteKey, locale, t]);

  useEffect(() => {
    if (scriptReady) renderWidget();

    return () => {
      if (widgetIdRef.current) {
        window.turnstile?.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget, scriptReady]);

  useEffect(() => {
    if (resetSignal === initialResetSignal.current || !widgetIdRef.current) return;
    onTokenChangeRef.current("");
    window.turnstile?.reset(widgetIdRef.current);
  }, [resetSignal]);

  if (!siteKey) {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800">{t("Güvenlik doğrulaması yapılandırılmadı. Lütfen daha sonra tekrar deneyin.")}</div>
    );
  }

  return (
    <div id={containerId} tabIndex={-1} aria-label={t("Güvenlik doğrulaması")} className="min-h-[65px] outline-none">
      {shouldLoad && (
        <Script
          id="cloudflare-turnstile"
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="lazyOnload"
          onReady={() => setScriptReady(true)}
        />
      )}
      <div ref={containerRef} className="w-full" />
    </div>
  );
}
