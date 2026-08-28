"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Eye,
  EyeOff,
  LoaderCircle,
  LockKeyhole,
  Mail,
} from "lucide-react";
import { createTrialAccount, getTrialSignupErrorMessage } from "@/lib/trial-signup";

type FormState = {
  fullName: string;
  email: string;
  password: string;
  accepted: boolean;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  password: "",
  accepted: false,
};

const APP_URL = "https://app.rentokey.com/";

export default function TrialOnboarding() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isComplete = submittedEmail.length > 0;

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrorMessage("");
  }

  function resetForm() {
    setForm(initialForm);
    setSubmittedEmail("");
    setErrorMessage("");
    setShowPassword(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage("");

    const email = form.email.trim().toLowerCase();
    const fullName = form.fullName.trim();

    try {
      await createTrialAccount({
        email,
        password: form.password,
        fullName,
      });

      setForm((current) => ({ ...current, password: "" }));
      setSubmittedEmail(email);
    } catch (error) {
      setErrorMessage(getTrialSignupErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isComplete) {
    return (
      <div
        className="rounded-[28px] border border-surface-border bg-white p-6 shadow-2xl shadow-brand-navy/10 sm:p-9"
        aria-live="polite"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green-dark">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-brand-green-dark">
          Hesabınız oluşturuldu
        </p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.025em] text-brand-navy sm:text-3xl">
          E-posta adresinizi doğrulayın.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-brand-navy/55">
          <span className="font-semibold text-brand-navy/70">mail.rentokey.com</span> üzerinden
          gönderdiğimiz doğrulama bağlantısına tıklayın. Ardından Rent Okey&apos;e giriş yaparken
          firma adınızı ve filo büyüklüğünüzü tanımlayabilirsiniz.
        </p>
        <div className="mt-6 rounded-2xl bg-surface-soft p-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-navy">
            <Mail className="h-4 w-4 text-brand-blue" /> {submittedEmail}
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-brand-navy/45">
            E-posta birkaç dakika içinde görünmezse spam veya gereksiz klasörünü de kontrol edin.
          </p>
        </div>
        <a
          href={APP_URL}
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-green-dark"
        >
          Rent Okey girişine git <ArrowRight className="h-4 w-4" />
        </a>
        <button
          type="button"
          onClick={resetForm}
          className="mt-3 w-full py-2 text-xs font-semibold text-brand-navy/45 hover:text-brand-navy"
        >
          Farklı bir e-posta ile başvur
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-[28px] border border-surface-border bg-white p-5 shadow-2xl shadow-brand-navy/10 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-green-dark">
            21 günlük ücretsiz deneme
          </p>
          <h2 className="mt-2 text-xl font-extrabold tracking-[-0.02em] text-brand-navy sm:text-2xl">
            Hesabınızı oluşturun
          </h2>
        </div>
        <span className="rounded-full bg-surface-soft px-3 py-1.5 text-[11px] font-bold text-brand-navy/45">
          Tek adım
        </span>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-brand-navy/45">
        Firma ve filo bilgilerinizi e-posta doğrulamasından sonra uygulamada tanımlayacaksınız.
      </p>

      <form onSubmit={handleSubmit} className="mt-6" aria-busy={isSubmitting}>
        <div className="space-y-4">
          <Field label="Ad soyad" htmlFor="fullName">
            <input
              id="fullName"
              autoComplete="name"
              minLength={2}
              maxLength={100}
              required
              disabled={isSubmitting}
              value={form.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              placeholder="Adınız Soyadınız"
              className="form-control disabled:cursor-wait disabled:opacity-60"
            />
          </Field>
          <Field label="İş e-postası" htmlFor="email">
            <input
              id="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={254}
              required
              disabled={isSubmitting}
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="ornek@firmaniz.com"
              className="form-control disabled:cursor-wait disabled:opacity-60"
            />
          </Field>
          <Field label="Şifre" htmlFor="password" helper="En az 8 karakter kullanın.">
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                minLength={8}
                maxLength={72}
                required
                disabled={isSubmitting}
                value={form.password}
                onChange={(event) => updateField("password", event.target.value)}
                placeholder="Güçlü bir şifre oluşturun"
                className="form-control form-control-action disabled:cursor-wait disabled:opacity-60"
              />
              <button
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                disabled={isSubmitting}
                aria-label={showPassword ? "Şifreyi gizle" : "Şifreyi göster"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-navy/35 hover:text-brand-navy disabled:opacity-40"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </Field>

          <label className="flex cursor-pointer items-start gap-3 rounded-xl bg-surface-soft p-3.5">
            <input
              type="checkbox"
              required
              disabled={isSubmitting}
              checked={form.accepted}
              onChange={(event) => updateField("accepted", event.target.checked)}
              className="mt-0.5 h-4 w-4 accent-[#18b878]"
            />
            <span className="text-[11px] leading-relaxed text-brand-navy/55">
              <Link href="/kullanim-sartlari" className="font-semibold text-brand-navy underline">
                Kullanım Şartları
              </Link>{" "}
              ve{" "}
              <Link href="/gizlilik-politikasi" className="font-semibold text-brand-navy underline">
                Gizlilik Politikası
              </Link>
              &apos;nı kabul ediyorum.
            </span>
          </label>

          {errorMessage && (
            <div
              role="alert"
              className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-3.5 text-xs leading-relaxed text-red-700"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-green-dark disabled:cursor-wait disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <LoaderCircle className="h-4 w-4 animate-spin" /> Hesap oluşturuluyor
              </>
            ) : (
              <>
                Ücretsiz hesabı oluştur <ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 flex items-center justify-center gap-2 border-t border-surface-border pt-5 text-[10px] font-medium text-brand-navy/40">
        <LockKeyhole className="h-3.5 w-3.5 text-brand-green" /> Kredi kartı ve ödeme bilgisi
        istenmez
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  helper,
  children,
}: {
  label: string;
  htmlFor: string;
  helper?: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-bold text-brand-navy">
        {label}
      </label>
      {children}
      {helper && <p className="mt-1.5 text-[10px] text-brand-navy/35">{helper}</p>}
    </div>
  );
}
