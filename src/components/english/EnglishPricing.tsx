"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import Button from "@/components/Button";
import { BASE_FEE, RATE_BANDS, SELF_SERVICE_MAX_VEHICLES, YEARLY_DISCOUNT, computeMonthlyPrice } from "@/lib/pricing";

const money = (amount: number) => new Intl.NumberFormat("en-GB", { style: "currency", currency: "TRY", maximumFractionDigits: 0 }).format(amount);

export default function EnglishPricing() {
  const [count, setCount] = useState("70");
  const [yearly, setYearly] = useState(true);
  const monthly = computeMonthlyPrice(Number(count));
  const price = monthly === null ? null : Math.round(monthly * (yearly ? 1 - YEARLY_DISCOUNT : 1));
  return (
    <section id="pricing" className="scroll-mt-24 border-y border-surface-border bg-surface-soft/50 py-16 sm:py-20">
      <div className="container-page">
        <p className="text-sm font-bold text-brand-green-dark">Clear pricing, room to grow</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Pay for your fleet size. Keep the core features.</h2>
        <p className="mt-4 max-w-2xl text-brand-navy/60">Unlimited users and branches. RentOkey Pilot and optional modules are priced separately.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-surface-border bg-white p-6 sm:p-8">
            <label htmlFor="en-fleet-count" className="block text-sm font-bold">Number of vehicles</label>
            <input id="en-fleet-count" type="number" min="1" max={SELF_SERVICE_MAX_VEHICLES} step="1" value={count} onChange={e => setCount(e.target.value)} className="form-control mt-3" />
            <div className="mt-3 flex flex-wrap gap-2">{[10, 30, 70, 150].map(n => <button type="button" key={n} onClick={() => setCount(String(n))} aria-pressed={count === String(n)} className={`rounded-full border px-4 py-2 text-sm ${count === String(n) ? "bg-brand-navy text-white" : "border-surface-border"}`}>{n} cars</button>)}</div>
            <div className="mt-6 flex gap-2 rounded-xl bg-surface-soft p-1">{[false,true].map(annual => <button type="button" key={String(annual)} aria-pressed={yearly === annual} onClick={() => setYearly(annual)} className={`flex-1 rounded-lg px-3 py-3 text-sm font-bold ${yearly === annual ? "bg-white shadow-sm" : "text-brand-navy/50"}`}>{annual ? "Yearly · save 20%" : "Monthly"}</button>)}</div>
            <div aria-live="polite" className="mt-7">
              <p className="text-4xl font-extrabold">{price === null ? "Let’s talk" : money(price)}{price !== null && <span className="text-sm font-normal text-brand-navy/60"> / month</span>}</p>
              <p className="mt-3 text-sm text-brand-navy/60">{price === null ? `Enter 1–${SELF_SERVICE_MAX_VEHICLES} whole vehicles. For larger fleets, request a quote.` : yearly ? `${money(price * 12)} billed annually. Monthly equivalent shown above.` : "Billed monthly."} All prices in TRY, excluding VAT.</p>
            </div>
            {monthly !== null && <details className="mt-5 border-t border-surface-border pt-4 text-sm"><summary className="cursor-pointer font-semibold">How your price is calculated</summary><ul className="mt-3 space-y-2"><li>Base fee: {money(BASE_FEE)}</li>{RATE_BANDS.filter(b => Number(count) >= b.from).map(b => <li key={b.from}>Vehicles {b.from}–{Math.min(Number(count), b.to)}: {Math.min(Number(count), b.to) - b.from + 1} × {money(b.rate)}</li>)}<li>Monthly subtotal: {money(monthly)}</li>{yearly && <li>Annual discount: 20% · annual total: {money(price! * 12)}</li>}</ul></details>}
            <div className="mt-6"><Button href={price === null ? "/en#contact" : "/en/free-trial"} icon>{price === null ? "Request a quote" : "Start your 21-day free trial"}</Button></div>
            <p className="mt-3 text-xs leading-relaxed text-brand-navy/50">No credit card required. Payments and changes are handled with our team; no automatic card charge.</p>
          </div>
          <div className="rounded-3xl bg-brand-navy p-6 text-white sm:p-8">
            <h3 className="text-2xl font-extrabold">Included in the core subscription</h3>
            <ul className="mt-6 space-y-4">{["Reservations, timeline and suitable vehicle suggestions", "Fleet, handovers, returns and maintenance alerts", "Recommended Focus and operational risk tracking", "Unlimited users and branches with role-based access", "Expenses, collections and vehicle / branch reports", "Excel / CSV imports and reservation confirmations", "Mobile operations and corporate partner access"].map(item => <li key={item} className="flex gap-3 text-sm leading-relaxed"><Check aria-hidden="true" className="h-5 w-5 shrink-0 text-brand-green" />{item}</li>)}</ul>
            <div className="mt-8 border-t border-white/15 pt-6"><h4 className="font-bold">Need more?</h4><p className="mt-2 text-sm leading-relaxed text-white/65">Add RentOkey Pilot for operation plans and smart pricing suggestions. Enterprise Support offers dedicated support and onboarding assistance as an optional service.</p><a href="/en#contact" className="mt-4 inline-block font-semibold text-brand-green underline underline-offset-4">Discuss add-ons and support</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
