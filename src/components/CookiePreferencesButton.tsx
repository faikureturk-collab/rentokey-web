"use client";

export default function CookiePreferencesButton({ locale }: { locale: "tr" | "en" }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("rentokey:open-cookie-preferences"))}
      className="hover:text-white"
    >
      {locale === "en" ? "Cookie preferences" : "Çerez tercihleri"}
    </button>
  );
}
