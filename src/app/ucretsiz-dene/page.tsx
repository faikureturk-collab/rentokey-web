import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import Logo from "@/components/Logo";

export const metadata: Metadata = {
  title: "Ücretsiz dene",
  description: "Kredi kartı gerekmeden Rent Okey'i ücretsiz deneyin.",
};

const perks = [
  "1 gün içinde kurulum",
  "Kredi kartı gerekmez",
  "İstediğiniz zaman iptal edin",
];

export default function UcretsizDenePage() {
  return (
    <section className="bg-surface-soft/50 px-4 py-16">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Logo />
          <h1 className="mt-6 text-3xl font-extrabold leading-tight text-brand-navy sm:text-4xl">
            Rent Okey&apos;i 14 gün ücretsiz deneyin
          </h1>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-navy/55">
            Formu doldurun, ekibimiz hesabınızı hazırlasın ve operasyonunuzu tek platformdan
            yönetmeye hemen başlayın.
          </p>
          <ul className="mt-6 space-y-3">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green" />
                <span className="text-sm text-brand-navy/70">{perk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-surface-border bg-white p-8 shadow-sm">
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Field id="name" label="Ad Soyad" placeholder="Adınız Soyadınız" />
              <Field id="company" label="Firma" placeholder="Firma adı" />
            </div>
            <Field id="email" label="İş e-postası" type="email" placeholder="ornek@sirket.com" />
            <Field id="phone" label="Telefon" placeholder="+90 5xx xxx xx xx" />
            <div>
              <label htmlFor="fleet" className="mb-1.5 block text-sm font-medium text-brand-navy">
                Filo büyüklüğü
              </label>
              <select
                id="fleet"
                className="w-full rounded-xl border border-surface-border px-4 py-2.5 text-sm text-brand-navy outline-none focus:border-brand-green"
                defaultValue=""
              >
                <option value="" disabled>
                  Seçiniz
                </option>
                <option>1 - 10 araç</option>
                <option>11 - 50 araç</option>
                <option>51 - 200 araç</option>
                <option>200+ araç</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand-green py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
            >
              Ücretsiz denemeyi başlat
            </button>
            <p className="text-center text-xs text-brand-navy/40">
              Kredi kartı bilgisi istenmez. İstediğiniz zaman iptal edebilirsiniz.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-brand-navy">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-surface-border px-4 py-2.5 text-sm text-brand-navy outline-none focus:border-brand-green"
      />
    </div>
  );
}
