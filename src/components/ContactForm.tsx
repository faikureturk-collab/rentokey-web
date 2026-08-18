"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-surface-border bg-white p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-brand-green" />
        <h3 className="mt-4 text-lg font-bold text-brand-navy">Mesajınız alındı</h3>
        <p className="mt-2 text-sm text-brand-navy/55">
          En kısa sürede sizinle iletişime geçeceğiz.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-surface-border bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad" name="name" placeholder="Adınız Soyadınız" required />
        <Field label="E-posta" name="email" type="email" placeholder="ornek@sirket.com" required />
        <Field label="Firma" name="company" placeholder="Firma adı" />
        <Field label="Telefon" name="phone" placeholder="+90 5xx xxx xx xx" />
      </div>
      <div className="mt-5">
        <label className="mb-1.5 block text-sm font-medium text-brand-navy">Mesajınız</label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Size nasıl yardımcı olabiliriz?"
          className="w-full rounded-xl border border-surface-border px-4 py-3 text-sm text-brand-navy outline-none focus:border-brand-green"
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-brand-green px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-green-dark"
      >
        Mesaj gönder
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-brand-navy">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-surface-border px-4 py-2.5 text-sm text-brand-navy outline-none focus:border-brand-green"
      />
    </div>
  );
}
