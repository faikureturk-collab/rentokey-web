import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Giriş yap",
};

export default function GirisPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-surface-soft/50 px-4 py-16">
      <div className="w-full max-w-sm rounded-2xl border border-surface-border bg-white p-8 shadow-sm">
        <div className="flex justify-center">
          <Logo />
        </div>
        <h1 className="mt-6 text-center text-xl font-bold text-brand-navy">Hesabınıza giriş yapın</h1>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-brand-navy">
              E-posta
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="ornek@sirket.com"
              className="w-full rounded-xl border border-surface-border px-4 py-2.5 text-sm outline-none focus:border-brand-green"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-brand-navy">
              Şifre
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="••••••••"
              className="w-full rounded-xl border border-surface-border px-4 py-2.5 text-sm outline-none focus:border-brand-green"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-brand-green py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
          >
            Giriş yap
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-brand-navy/55">
          Hesabınız yok mu?{" "}
          <Link href="/ucretsiz-dene" className="font-semibold text-brand-navy hover:text-brand-green">
            Ücretsiz deneyin
          </Link>
        </p>
      </div>
    </section>
  );
}
