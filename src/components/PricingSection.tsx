"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Button from "./Button";
import { plans, YEARLY_DISCOUNT } from "@/lib/pricing";

export default function PricingSection({
  title = "İhtiyacınıza uygun paketi seçin",
  showHeading = true,
  id,
}: {
  title?: string;
  showHeading?: boolean;
  id?: string;
}) {
  const [yearly, setYearly] = useState(false);

  return (
    <section id={id} className="container-page scroll-mt-24 py-6 sm:py-10">
      {showHeading && (
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <h2 className="text-2xl font-extrabold text-brand-navy sm:text-3xl">{title}</h2>

          <div className="flex items-center gap-3">
            <span
              className={`text-sm font-medium ${!yearly ? "text-brand-navy" : "text-brand-navy/45"}`}
            >
              Aylık
            </span>
            <button
              role="switch"
              aria-checked={yearly}
              onClick={() => setYearly((v) => !v)}
              className={`relative h-7 w-12 shrink-0 rounded-full transition-colors ${
                yearly ? "bg-brand-green" : "bg-surface-border"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  yearly ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-sm font-medium ${yearly ? "text-brand-navy" : "text-brand-navy/45"}`}
            >
              Yıllık <span className="text-brand-green">%20</span> avantajlı
            </span>
          </div>
        </div>
      )}

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {plans.map((plan) => {
          const price = yearly
            ? Math.round(plan.monthlyPrice * (1 - YEARLY_DISCOUNT))
            : plan.monthlyPrice;

          return (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 ${
                plan.popular
                  ? "border-brand-green shadow-lg shadow-brand-green/10"
                  : "border-surface-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-7 rounded-full bg-brand-green px-3 py-1 text-xs font-bold text-white">
                  Popüler
                </span>
              )}
              <h3 className="text-lg font-bold text-brand-navy">{plan.name}</h3>
              <p className="mt-1 text-sm text-brand-navy/50">{plan.description}</p>

              <p className="mt-5 flex items-baseline gap-1">
                <span className="text-lg font-bold text-brand-navy">₺</span>
                <span className="text-3xl font-extrabold text-brand-navy">
                  {price.toLocaleString("tr-TR")}
                </span>
                <span className="text-sm text-brand-navy/45">/ay</span>
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-brand-green" />
                    <span className="text-sm text-brand-navy/70">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                href="/ucretsiz-dene"
                variant={plan.popular ? "primary" : "secondary"}
                className="mt-7 w-full"
              >
                Ücretsiz dene
              </Button>
            </div>
          );
        })}
      </div>
      <p className="mt-5 text-center text-xs text-brand-navy/40">Fiyatlara KDV dahil değildir.</p>
    </section>
  );
}
