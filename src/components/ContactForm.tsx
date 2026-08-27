"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, LoaderCircle, Send, ShieldCheck } from "lucide-react";

const CONTACT_ENDPOINT = "https://app.rentokey.com/api/iletisim-formu-gonder";

const topics = [
  { value: "paket-ve-fiyatlandirma", label: "Paket ve fiyatlandırma" },
  { value: "veri-aktarimi", label: "Veri aktarımı" },
  { value: "kullanici-yetkileri", label: "Kullanıcı yetkileri" },
  { value: "kurulum", label: "Kurulum" },
  { value: "diger", label: "Diğer" },
];

const fleetSizes = [
  { value: "1-5", label: "1–5 araç" },
  { value: "6-10", label: "6–10 araç" },
  { value: "11-25", label: "11–25 araç" },
  { value: "26-50", label: "26–50 araç" },
  { value: "51-100", label: "51–100 araç" },
  { value: "100+", label: "100+ araç" },
  { value: "belirtmek-istemiyorum", label: "Belirtmek istemiyorum" },
];

type FormStatus = "idle" | "sending" | "success" | "error";

type ApiResponse = {
  error?: string;
  field?: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? "").trim();

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic: value("topic"),
          fullName: value("fullName"),
          email: value("email"),
          company: value("company"),
          phone: value("phone"),
          fleetSize: value("fleetSize"),
          message: value("message"),
          website: value("website"),
        }),
      });

      const result: ApiResponse = await response.json().catch(() => ({}));

      if (!response.ok) {
        const message =
          response.status === 429
            ? "Çok sayıda talep gönderdiniz. Lütfen daha sonra tekrar deneyin."
            : result.error || "Mesaj gönderilemedi. Lütfen bilgilerinizi kontrol edip tekrar deneyin.";

        setStatus("error");
        setFeedback(message);

        if (response.status === 400 && result.field) {
          requestAnimationFrame(() => {
            const field = form.elements.namedItem(result.field ?? "");
            if (field instanceof HTMLElement) field.focus();
          });
        }

        return;
      }

      form.reset();
      setStatus("success");
      setFeedback("Mesajınızı aldık. En kısa sürede sizinle iletişime geçeceğiz.");
    } catch {
      setStatus("error");
      setFeedback("Mesaj gönderilemedi. Bağlantınızı kontrol edip tekrar deneyin.");
    }
  }

  function clearFeedback() {
    if (status === "success" || status === "error") {
      setStatus("idle");
      setFeedback("");
    }
  }

  const sending = status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      onInput={clearFeedback}
      aria-busy={sending}
      className="relative rounded-[28px] border border-surface-border bg-white p-6 shadow-sm shadow-brand-navy/5 sm:p-8"
    >
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-green">Bize yazın</p>
        <h3 className="mt-2 text-xl font-extrabold text-brand-navy">İhtiyacınızı kısaca anlatın</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-navy/55">
          Formu gönderin; talebiniz doğrudan Rent Okey ekibine iletilsin.
        </p>
      </div>

      <div className="mb-5">
        <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-brand-navy">
          Görüşme konusu
        </label>
        <select id="topic" name="topic" required className="form-control">
          {topics.map((topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Ad Soyad" name="fullName" placeholder="Adınız Soyadınız" required minLength={2} maxLength={120} />
        <Field label="E-posta" name="email" type="email" placeholder="ornek@sirket.com" required maxLength={254} />
        <Field label="Firma" name="company" placeholder="Firma adı" maxLength={160} />
        <Field label="Telefon" name="phone" type="tel" placeholder="+90 5xx xxx xx xx" maxLength={40} />
      </div>

      <div className="mt-5">
        <label htmlFor="fleetSize" className="mb-1.5 block text-sm font-medium text-brand-navy">
          Filo büyüklüğü
        </label>
        <select id="fleetSize" name="fleetSize" className="form-control" defaultValue="belirtmek-istemiyorum">
          {fleetSizes.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
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
          minLength={10}
          maxLength={3000}
          placeholder="Size nasıl yardımcı olabiliriz?"
          className="form-control min-h-28 resize-y"
        />
      </div>

      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-7 py-3 text-sm font-semibold text-white shadow-sm shadow-brand-green/20 transition-colors hover:bg-brand-green-dark disabled:cursor-wait disabled:opacity-70"
        >
          {sending ? (
            <>
              Gönderiliyor…
              <LoaderCircle className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Mesajı gönder
              <Send className="h-4 w-4" strokeWidth={2.4} />
            </>
          )}
        </button>
        <span className="inline-flex items-center gap-1.5 text-xs leading-relaxed text-brand-navy/45">
          <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
          Bilgileriniz yalnızca talebinizi yanıtlamak için kullanılır.
        </span>
      </div>

      {feedback && (
        <div
          role={status === "error" ? "alert" : "status"}
          className={`mt-5 flex items-start gap-2.5 rounded-xl border px-4 py-3 text-sm leading-relaxed ${
            status === "error"
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-brand-green/20 bg-brand-green/5 text-brand-green-dark"
          }`}
        >
          {status === "error" ? (
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          ) : (
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          )}
          <span>{feedback}</span>
        </div>
      )}

      <p className="mt-4 text-[11px] leading-relaxed text-brand-navy/40">
        Formu gönderdiğinizde bilgileriniz talebinizi yanıtlamak amacıyla işlenir. Ayrıntılar için{" "}
        <Link href="/gizlilik-politikasi" className="font-semibold text-brand-navy/60 underline underline-offset-2 hover:text-brand-green-dark">
          Gizlilik ve KVKK metnini
        </Link>{" "}
        inceleyebilirsiniz.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  minLength,
  maxLength,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
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
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );
}
