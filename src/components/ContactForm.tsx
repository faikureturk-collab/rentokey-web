"use client";

import type { FormEvent } from "react";
import { ArrowUpRight, Mail } from "lucide-react";

const topics = [
  "Paket ve fiyatlandırma",
  "14 günlük ücretsiz deneme",
  "CSV ile veri aktarımı",
  "Ürün hakkında bilgi",
  "Teknik destek",
];

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const value = (key: string) => String(data.get(key) ?? "").trim();
    const name = value("name");
    const company = value("company");
    const topic = value("topic");
    const subject = `Rent Okey | ${topic} | ${company || name}`;
    const body = [
      `Konu: ${topic}`,
      `Ad Soyad: ${name}`,
      `E-posta: ${value("email")}`,
      `Firma: ${company || "Belirtilmedi"}`,
      `Telefon: ${value("phone") || "Belirtilmedi"}`,
      `Filo büyüklüğü: ${value("fleetSize") || "Belirtilmedi"}`,
      "",
      "Mesaj:",
      value("message"),
    ].join("\n");

    window.location.href = `mailto:hello@rentokey.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-surface-border bg-white p-6 shadow-sm shadow-brand-navy/5 sm:p-8"
    >
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-green">Bize yazın</p>
        <h3 className="mt-2 text-xl font-extrabold text-brand-navy">İhtiyacınızı kısaca anlatın</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-navy/55">
          Konuyu seçin; bilgileriniz e-posta uygulamanızda hazır bir mesaj olarak açılsın.
        </p>
      </div>

      <div className="mb-5">
        <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-brand-navy">
          Görüşme konusu
        </label>
        <select id="topic" name="topic" required className="form-control">
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad" name="name" placeholder="Adınız Soyadınız" required />
        <Field label="E-posta" name="email" type="email" placeholder="ornek@sirket.com" required />
        <Field label="Firma" name="company" placeholder="Firma adı" />
        <Field label="Telefon" name="phone" type="tel" placeholder="+90 5xx xxx xx xx" />
      </div>

      <div className="mt-5">
        <label htmlFor="fleetSize" className="mb-1.5 block text-sm font-medium text-brand-navy">
          Filo büyüklüğü
        </label>
        <select id="fleetSize" name="fleetSize" className="form-control">
          <option value="">Seçmek istemiyorum</option>
          <option value="1–10 araç">1–10 araç</option>
          <option value="11–30 araç">11–30 araç</option>
          <option value="31–70 araç">31–70 araç</option>
          <option value="70+ araç">70+ araç</option>
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-brand-navy">
          Mesajınız
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Size nasıl yardımcı olabiliriz?"
          className="form-control min-h-28 resize-y"
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-green/20 transition-colors hover:bg-brand-green-dark"
        >
          E-posta taslağını aç
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.4} />
        </button>
        <span className="inline-flex items-center gap-1.5 text-xs leading-relaxed text-brand-navy/45">
          <Mail className="h-3.5 w-3.5 shrink-0" />
          Mesaj, siz onaylamadan gönderilmez.
        </span>
      </div>
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
        className="form-control"
      />
    </div>
  );
}
