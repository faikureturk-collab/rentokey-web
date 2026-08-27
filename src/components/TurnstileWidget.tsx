"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";

type TurnstileOptions = {
  sitekey: string;
  action: string;
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
  siteKey,
  action,
  resetSignal,
  onTokenChange,
  onError,
}: {
  siteKey: string;
  action: string;
  resetSignal: number;
  onTokenChange: (token: string) => void;
  onError: (message: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const initialResetSignal = useRef(resetSignal);
  const onTokenChangeRef = useRef(onTokenChange);
  const onErrorRef = useRef(onError);
  const [scriptReady, setScriptReady] = useState(false);

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
      size: "flexible",
      callback: (token) => onTokenChangeRef.current(token),
      "expired-callback": () => {
        onTokenChangeRef.current("");
        if (widgetIdRef.current) window.turnstile?.reset(widgetIdRef.current);
      },
      "error-callback": () => {
        onTokenChangeRef.current("");
        onErrorRef.current("Güvenlik doğrulaması tamamlanamadı. Lütfen sayfayı yenileyip tekrar deneyin.");
        return true;
      },
    });
  }, [action, siteKey]);

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
      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-800">
        Güvenlik doğrulaması yapılandırılmadı. Lütfen daha sonra tekrar deneyin.
      </div>
    );
  }

  return (
    <div id="contact-form-turnstile" tabIndex={-1} aria-label="Güvenlik doğrulaması" className="min-h-[65px] outline-none">
      <Script
        id="cloudflare-turnstile"
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onReady={() => setScriptReady(true)}
      />
      <div ref={containerRef} className="w-full" />
    </div>
  );
}
