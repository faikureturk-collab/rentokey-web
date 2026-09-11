"use client";

import { formCopy } from "@/lib/form-copy";
import type { Locale } from "@/lib/locale";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
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
import { trackEvent } from "@/lib/analytics";
import TurnstileWidget from "./TurnstileWidget";

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
const GOOGLE_AUTH_URL = "https://app.rentokey.com/auth/google";
const TURNSTILE_ACTION = "signup-form";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

export default function TrialOnboarding({ locale = "tr" }: { locale?: Locale }) {
  const t = (text: string) => formCopy(text, locale);
  const [form, setForm] = useState<FormState>(initialForm);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetSignal, setTurnstileResetSignal] = useState(0);
  const formStarted = useRef(false);
  const isComplete = submittedEmail.length > 0;

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    if (!formStarted.current) {
      formStarted.current = true;
      trackEvent("trial_form_start", { locale });
    }
    setForm((current) => ({ ...current, [key]: value }));
    setErrorMessage("");
  }

  function resetForm() {
    setForm(initialForm);
    setSubmittedEmail("");
    setErrorMessage("");
    setShowPassword(false);
    setTurnstileToken("");
    setTurnstileResetSignal((current) => current + 1);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;
    if (!turnstileToken) {
      setErrorMessage(t("Lütfen güvenlik doğrulamasını tamamlayın."));
      document.getElementById("trial-signup-turnstile")?.focus();
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    const email = form.email.trim().toLowerCase();
    const fullName = form.fullName.trim();

    try {
      await createTrialAccount({
        email,
        password: form.password,
        fullName,
        locale,
        turnstileToken,
      });

      setForm((current) => ({ ...current, password: "" }));
      setSubmittedEmail(email);
      trackEvent("sign_up", { method: "email", locale });
    } catch (error) {
      setErrorMessage(getTrialSignupErrorMessage(error, locale));
    } finally {
      setIsSubmitting(false);
      setTurnstileResetSignal((current) => current + 1);
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
        <p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-brand-green-dark">{t("Hesabınız oluşturuldu")}</p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.025em] text-brand-navy sm:text-3xl">{t("E-posta adresinizi doğrulayın.")}</h2>
        <p className="mt-4 text-sm leading-relaxed text-brand-navy/55">
          <span className="font-semibold text-brand-navy/70">mail.rentokey.com</span>{" "}{t("üzerinden gönderdiğimiz doğrulama bağlantısına tıklayın. Ardından Rent Okey&apos;e giriş yaparken firma adınızı ve filo büyüklüğünüzü tanımlayabilirsiniz.")}</p>
        <div className="mt-6 rounded-2xl bg-surface-soft p-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-brand-navy">
            <Mail className="h-4 w-4 text-brand-blue" /> {submittedEmail}
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-brand-navy/45">{t("E-posta birkaç dakika içinde görünmezse spam veya gereksiz klasörünü de kontrol edin.")}</p>
        </div>
        <a
          href={APP_URL}
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-green-dark"
        >{t("Rent Okey girişine git")}<ArrowRight className="h-4 w-4" />
        </a>
        <button
          type="button"
          onClick={resetForm}
          className="mt-3 w-full py-2 text-xs font-semibold text-brand-navy/45 hover:text-brand-navy"
        >{t("Farklı bir e-posta ile başvur")}</button>
      </div>
    );
  }

  return (
    <div className="rounded-[28px] border border-surface-border bg-white p-5 shadow-2xl shadow-brand-navy/10 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-green-dark">{t("21 günlük ücretsiz deneme")}</p>
          <h2 className="mt-2 text-xl font-extrabold tracking-[-0.02em] text-brand-navy sm:text-2xl">{t("Hesabınızı oluşturun")}</h2>
        </div>
        <span className="rounded-full bg-surface-soft px-3 py-1.5 text-[11px] font-bold text-brand-navy/45">{t("Tek adım")}</span>
      </div>

      <p className="mt-3 text-xs leading-relaxed text-brand-navy/45">{t("Firma ve filo bilgilerinizi e-posta doğrulamasından sonra uygulamada tanımlayacaksınız.")}</p>

      <div className="mt-6">
        <a
          href={`${GOOGLE_AUTH_URL}?locale=${locale}&source=rentokey-web`}
          onClick={() =>
            trackEvent("trial_cta_click", {
              locale,
              method: "google",
              placement: "free_trial_form",
            })
          }
          className="inline-flex min-h-11 w-full items-center justify-center gap-3 rounded-full border border-[#747775] bg-white px-5 py-3 text-sm font-semibold text-[#1f1f1f] transition-colors hover:bg-[#f8f9fa]"
        >
          <GoogleIcon />
          {locale === "en" ? "Sign up with Google" : "Google ile ücretsiz hesap oluştur"}
        </a>
        <p className="mt-2.5 text-center text-[10px] leading-relaxed text-brand-navy/40">
          {locale === "en" ? "By continuing, you agree to the " : "Devam ederek "}
          <Link
            href={locale === "en" ? "/en/terms" : "/kullanim-sartlari"}
            className="font-semibold text-brand-navy/60 underline"
          >
            {t("Kullanım Şartları")}
          </Link>{" "}
          {locale === "en" ? "and " : "ve "}
          <Link
            href={locale === "en" ? "/en/privacy" : "/gizlilik-politikasi"}
            className="font-semibold text-brand-navy/60 underline"
          >
            {t("Gizlilik Politikası")}
          </Link>
          {locale === "en" ? "." : "'nı kabul etmiş olursunuz."}
        </p>
      </div>

      <div className="my-5 flex items-center gap-3" aria-hidden="true">
        <span className="h-px flex-1 bg-surface-border" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-navy/35">
          {locale === "en" ? "or continue with email" : "veya e-posta ile devam edin"}
        </span>
        <span className="h-px flex-1 bg-surface-border" />
      </div>

      <form onSubmit={handleSubmit} aria-busy={isSubmitting}>
        <div className="space-y-4">
          <Field label={t("Ad soyad")} htmlFor="fullName">
            <input
              id="fullName"
              autoComplete="name"
              minLength={2}
              maxLength={100}
              required
              disabled={isSubmitting}
              value={form.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              placeholder={t("Adınız Soyadınız")}
              className="form-control disabled:cursor-wait disabled:opacity-60"
            />
          </Field>
          <Field label={t("İş e-postası")} htmlFor="email">
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
              placeholder={t("ornek@firmaniz.com")}
              className="form-control disabled:cursor-wait disabled:opacity-60"
            />
          </Field>
          <Field label={t("Şifre")} htmlFor="password" helper={t("En az 8 karakter kullanın.")}>
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
                placeholder={t("Güçlü bir şifre oluşturun")}
                className="form-control form-control-action disabled:cursor-wait disabled:opacity-60"
              />
              <button
                type="button"
                onClick={() => setShowPassword((visible) => !visible)}
                disabled={isSubmitting}
                aria-label={showPassword ? t("Şifreyi gizle") : t("Şifreyi göster")}
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
              {locale === "en" && "I agree to the "}
              <Link href={locale === "en" ? "/en/terms" : "/kullanim-sartlari"} className="font-semibold text-brand-navy underline">{t("Kullanım Şartları")}</Link>{" "}{t("ve")}{" "}
              <Link href={locale === "en" ? "/en/privacy" : "/gizlilik-politikasi"} className="font-semibold text-brand-navy underline">{t("Gizlilik Politikası")}</Link>{t("&apos;nı kabul ediyorum.")}</span>
          </label>

          <TurnstileWidget
            locale={locale}
            siteKey={TURNSTILE_SITE_KEY}
            action={TURNSTILE_ACTION}
            containerId="trial-signup-turnstile"
            resetSignal={turnstileResetSignal}
            onTokenChange={setTurnstileToken}
            onError={setErrorMessage}
          />

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
                <LoaderCircle className="h-4 w-4 animate-spin" />{t("Hesap oluşturuluyor")}</>
            ) : (
              <>{t("Ücretsiz hesabı oluştur")}<ArrowRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>

      <div className="mt-6 flex items-center justify-center gap-2 border-t border-surface-border pt-5 text-[10px] font-medium text-brand-navy/40">
        <LockKeyhole className="h-3.5 w-3.5 text-brand-green" />{t("Kredi kartı ve ödeme bilgisi istenmez")}</div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-[18px] w-[18px] shrink-0" viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.9-2.26 5.36-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
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
