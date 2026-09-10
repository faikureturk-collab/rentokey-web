import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@/app/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnalyticsProvider from "@/components/AnalyticsProvider";
import { SITE_URL, SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Car Rental & Fleet Management Software | Rent Okey", template: "%s | Rent Okey" },
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: `${SITE_URL}/en` }],
  robots: { index: true, follow: true },
  icons: { icon: "/icon.png", apple: "/apple-icon.png" },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="h-full antialiased"><body className="flex min-h-full flex-col bg-white text-brand-navy"><Header locale="en" /><main className="flex-1">{children}</main><Footer locale="en" /><AnalyticsProvider locale="en" /></body></html>;
}
