"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
} from "lucide-react";

type FormState = {
  fullName: string;
  email: string;
  password: string;
  company: string;
  country: string;
  fleetSize: string;
  phone: string;
  accepted: boolean;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  password: "",
  company: "",
  country: "Türkiye",
  fleetSize: "",
  phone: "",
  accepted: false,
};

export default function TrialOnboarding() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<FormState>(initialForm);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }
    setForm((current) => ({ ...current, password: "" }));
    setStep(3);
  }

  if (step === 3) {
    return (
      <div className="rounded-[28px] border border-surface-border bg-white p-6 shadow-2xl shadow-brand-navy/10 sm:p-9" aria-live="polite">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green-dark">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-brand-green-dark">Onboarding tamamlandı</p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.025em] text-brand-navy sm:text-3xl">Çalışma alanınız açılmaya hazır.</h2>
        <p className="mt-4 text-sm leading-relaxed text-brand-navy/55">
          {form.company} için 14 günlük deneme akışı tamamlandı. Gerçek hesap oluşturma servisi bağlandığında kullanıcı bu ekrandan doğrudan Rent Okey çalışma alanına geçecek.
        </p>
        <div className="mt-6 rounded-2xl bg-surface-soft p-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-navy"><Mail className="h-4 w-4 text-brand-blue" /> {form.email}</div>
          <p className="mt-2 text-[11px] leading-relaxed text-brand-navy/45">Hesap doğrulama ve giriş bağlantısı bu adrese gönderilecek.</p>
        </div>
        <a href="https://app.rentokey.com" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-green-dark">
          Rent Okey&apos;e geç <ArrowRight className="h-4 w-4" />
        </a>
        <button type="button" onClick={() => { setForm(initialForm); setStep(1); }} className="mt-3 w-full py-2 text-xs font-semibold text-brand-navy/45 hover:text-brand-navy">Akışı yeniden başlat</button>
      </div>
    );
  }

  return (
    <div className="rounded-[28px] border border-surface-border bg-white p-5 shadow-2xl shadow-brand-navy/10 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-green-dark">14 günlük ücretsiz deneme</p>
          <h2 className="mt-2 text-xl font-extrabold tracking-[-0.02em] text-brand-navy sm:text-2xl">{step === 1 ? "Hesabınızı oluşturun" : "Firmanızı tanımlayın"}</h2>
        </div>
        <span className="rounded-full bg-surface-soft px-3 py-1.5 text-[11px] font-bold text-brand-navy/45">{step} / 2</span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-2">
        <div className={`h-1.5 rounded-full ${step >= 1 ? "bg-brand-green" : "bg-surface-border"}`} />
        <div className={`h-1.5 rounded-full ${step >= 2 ? "bg-brand-green" : "bg-surface-border"}`} />
      </div>

      <form onSubmit={handleSubmit} className="mt-7">
        {step === 1 ? (
          <div className="space-y-4">
            <Field label="Ad soyad" htmlFor="fullName">
              <input id="fullName" autoComplete="name" required value={form.fullName} onChange={(event) => updateField("fullName", event.target.value)} placeholder="Adınız Soyadınız" className="form-control" />
            </Field>
            <Field label="İş e-postası" htmlFor="email">
              <input id="email" type="email" autoComplete="email" required value={form.email} onChange={(event) => updateField("email", event.target.value)} placeholder="ornek@firmaniz.com" className="form-control" />
            </Field>
            <Field label="Şifre" htmlFor="password" helper="En az 8 karakter kullanın.">
              <div className="relative">
                <input id="password" type={showPassword ? "text" : "password"} autoComplete="new-password" minLength={8} required value={form.password} onChange={(event) => updateField("password", event.target.value)} placeholder="Güçlü bir şifre oluşturun" className="form-control form-control-action" />
                <button type="button" onClick={() => setShowPassword((visible) => !visible)} aria-label={showPassword ? "Şifreyi gizle" : "Şifreyi göster"} className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-navy/35 hover:text-brand-navy">
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </Field>
            <button type="submit" className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-green-dark">
              Devam edin <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <Field label="Firma adı" htmlFor="company">
              <input id="company" autoComplete="organization" required value={form.company} onChange={(event) => updateField("company", event.target.value)} placeholder="Firmanızın adı" className="form-control" />
            </Field>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Ülke / bölge" htmlFor="country">
                <select id="country" required value={form.country} onChange={(event) => updateField("country", event.target.value)} className="form-control">
                  <option>Türkiye</option>
                  <option>KKTC</option>
                </select>
              </Field>
              <Field label="Filo büyüklüğü" htmlFor="fleetSize">
                <select id="fleetSize" required value={form.fleetSize} onChange={(event) => updateField("fleetSize", event.target.value)} className="form-control">
                  <option value="" disabled>Seçiniz</option>
                  <option>1 – 10 araç</option>
                  <option>11 – 30 araç</option>
                  <option>31 – 70 araç</option>
                  <option>71+ araç</option>
                </select>
              </Field>
            </div>
            <Field label="Telefon" htmlFor="phone" helper="İsteğe bağlı — yalnız kurulum desteği için.">
              <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={(event) => updateField("phone", event.target.value)} placeholder="+90 5xx xxx xx xx" className="form-control" />
            </Field>
            <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-surface-soft p-3.5">
              <input type="checkbox" required checked={form.accepted} onChange={(event) => updateField("accepted", event.target.checked)} className="mt-0.5 h-4 w-4 accent-[#18b878]" />
              <span className="text-[11px] leading-relaxed text-brand-navy/55"><Link href="/kullanim-sartlari" className="font-semibold text-brand-navy underline">Kullanım Şartları</Link> ve <Link href="/gizlilik-politikasi" className="font-semibold text-brand-navy underline">Gizlilik Politikası</Link>&apos;nı kabul ediyorum.</span>
            </label>
            <div className="flex flex-col-reverse gap-3 sm:flex-row">
              <button type="button" onClick={() => setStep(1)} className="inline-flex items-center justify-center gap-2 rounded-full border border-surface-border px-5 py-3.5 text-sm font-bold text-brand-navy hover:border-brand-navy/20"><ArrowLeft className="h-4 w-4" /> Geri</button>
              <button type="submit" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-green-dark">14 günlük denemeyi başlat <ArrowRight className="h-4 w-4" /></button>
            </div>
          </div>
        )}
      </form>

      <div className="mt-6 flex items-center justify-center gap-2 border-t border-surface-border pt-5 text-[10px] font-medium text-brand-navy/40">
        <LockKeyhole className="h-3.5 w-3.5 text-brand-green" /> Kredi kartı ve ödeme bilgisi istenmez
      </div>
    </div>
  );
}

function Field({ label, htmlFor, helper, children }: { label: string; htmlFor: string; helper?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-bold text-brand-navy">{label}</label>
      {children}
      {helper && <p className="mt-1.5 text-[10px] text-brand-navy/35">{helper}</p>}
    </div>
  );
}
