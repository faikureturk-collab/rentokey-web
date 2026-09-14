export type Locale = "tr" | "en";

export const localeRoutes = [
  ["/", "/en"],
  ["/ucretsiz-dene", "/en/free-trial"],
  ["/okey-pilot", "/en/pilot"],
  ["/fiyatlandirma", "/en/pricing"],
  ["/arac-kiralama-programi", "/en/car-rental-software"],
  ["/arac-kiralama-rezervasyon-takvimi", "/en/car-rental-reservation-calendar"],
  ["/arac-kiralama-raporlama-ve-filo-analizi", "/en/car-rental-reporting-and-fleet-analytics"],
  ["/blog", "/en/blog"],
  [
    "/blog/arac-teslim-iade-surecini-dijitallestirmek",
    "/en/blog/digitise-car-rental-handover-return-process",
  ],
  ["/gizlilik-politikasi", "/en/privacy"],
  ["/kullanim-sartlari", "/en/terms"],
] as const;

export function alternateRoutes(path: string) {
  const clean = path.replace(/\/$/, "") || "/";
  return localeRoutes.find((pair) => pair.some((entry) => entry === clean));
}

export function languageHref(path: string, locale: Locale) {
  const pair = alternateRoutes(path);
  return pair ? pair[locale === "tr" ? 0 : 1] : locale === "tr" ? "/" : "/en";
}
