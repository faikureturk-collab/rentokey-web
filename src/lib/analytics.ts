export const ANALYTICS_CONSENT_KEY = "rentokey_analytics_consent";
export const ATTRIBUTION_STORAGE_KEY = "rentokey_first_touch";

export type AnalyticsConsent = "granted" | "denied";

export type Attribution = {
  version: 1;
  source: string;
  medium: string;
  campaign?: string;
  content?: string;
  term?: string;
  referrerHost?: string;
  landingPage: string;
  firstSeenAt: string;
};

type EventValue = string | number | boolean | undefined;
type AnalyticsEvent =
  | "trial_cta_click"
  | "trial_form_start"
  | "sign_up"
  | "contact_form_start"
  | "generate_lead";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function clean(value: string | null, maxLength = 100) {
  return value?.trim().slice(0, maxLength) || undefined;
}

function classifyReferrer(hostname: string) {
  const host = hostname.toLowerCase().replace(/^www\./, "");
  if (!host) return { source: "direct", medium: "none" };
  if (host === "chatgpt.com" || host.endsWith(".chatgpt.com") || host === "chat.openai.com") {
    return { source: "chatgpt", medium: "ai_referral" };
  }
  if (host === "claude.ai" || host.endsWith(".claude.ai")) {
    return { source: "claude", medium: "ai_referral" };
  }
  if (host.includes("google.")) return { source: "google", medium: "organic" };
  if (host === "bing.com" || host.endsWith(".bing.com")) return { source: "bing", medium: "organic" };
  if (host === "linkedin.com" || host.endsWith(".linkedin.com") || host === "lnkd.in") {
    return { source: "linkedin", medium: "social" };
  }
  return { source: host.slice(0, 100), medium: "referral" };
}

function normaliseSource(source: string) {
  const value = source.toLowerCase().replace(/^www\./, "");
  if (value === "chatgpt.com" || value === "chat.openai.com" || value === "openai") return "chatgpt";
  if (value === "claude.ai" || value === "anthropic") return "claude";
  if (value.startsWith("google")) return "google";
  if (value.startsWith("bing")) return "bing";
  if (value === "linkedin.com" || value === "lnkd.in") return "linkedin";
  return value;
}

export function createAttribution(currentUrl: string, referrer: string, now = new Date()): Attribution {
  const url = new URL(currentUrl);
  let referrerHost = "";

  try {
    referrerHost = referrer ? new URL(referrer).hostname : "";
  } catch {
    referrerHost = "";
  }

  const inferred = classifyReferrer(referrerHost);
  const utmSource = clean(url.searchParams.get("utm_source"));
  const utmMedium = clean(url.searchParams.get("utm_medium"));

  return {
    version: 1,
    source: utmSource ? normaliseSource(utmSource) : inferred.source,
    medium: utmMedium?.toLowerCase() || inferred.medium,
    campaign: clean(url.searchParams.get("utm_campaign")),
    content: clean(url.searchParams.get("utm_content")),
    term: clean(url.searchParams.get("utm_term")),
    referrerHost: clean(referrerHost, 160),
    landingPage: url.pathname.slice(0, 240) || "/",
    firstSeenAt: now.toISOString(),
  };
}

export function getAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
  return value === "granted" || value === "denied" ? value : null;
}

export function setAnalyticsConsent(consent: AnalyticsConsent) {
  window.localStorage.setItem(ANALYTICS_CONSENT_KEY, consent);
  window.dispatchEvent(new Event("rentokey:analytics-consent-change"));
}

export function captureFirstTouch() {
  if (typeof window === "undefined") return null;

  const existing = window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
  if (existing) {
    try {
      return JSON.parse(existing) as Attribution;
    } catch {
      window.localStorage.removeItem(ATTRIBUTION_STORAGE_KEY);
    }
  }

  const attribution = createAttribution(window.location.href, document.referrer);
  window.localStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(attribution));
  return attribution;
}

export function getAttribution() {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(ATTRIBUTION_STORAGE_KEY);
  if (!stored) return null;

  try {
    return JSON.parse(stored) as Attribution;
  } catch {
    return null;
  }
}

export function trackEvent(name: AnalyticsEvent, parameters: Record<string, EventValue> = {}) {
  if (typeof window === "undefined" || getAnalyticsConsent() !== "granted" || !window.gtag) return;

  const attribution = getAttribution();
  window.gtag("event", name, {
    ...parameters,
    ...(attribution
      ? {
          first_touch_source: attribution.source,
          first_touch_medium: attribution.medium,
          first_touch_campaign: attribution.campaign,
          first_touch_landing_page: attribution.landingPage,
        }
      : {}),
  });
}
