import { ArrowRightLeft, CheckCircle2, ShieldCheck } from "lucide-react";
import Button from "@/components/Button";
import PilotRulesSection from "@/components/PilotRulesSection";
import StructuredData from "@/components/StructuredData";
import PilotSection from "@/components/home/PilotSection";
import { createPageMetadata } from "@/lib/seo";
import { createPilotPageStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata({ title: "RentOkey Pilot | Car Rental Operation Optimisation", description: "The RentOkey Pilot rule engine turns preparation, maintenance, pricing, branch capacity, vehicle transfer, renewal, expense and mileage signals into user-approved suggestions.", path: "/en/pilot" });

const steps = [
  { number: "01", title: "Evaluates the operation", description: "Reads reservation, vehicle, maintenance, collection, pricing, location and time data together." },
  { number: "02", title: "Shows the solution and impact", description: "Explains the reason and estimated financial or operational impact for every suggestion." },
  { number: "03", title: "Applies it with your approval", description: "Applies vehicle assignment, pricing and related task changes only for the actions you select." },
];

export default function PilotPage() {
  return <>
    <StructuredData data={createPilotPageStructuredData("en")} />
    <PilotSection headingLevel="h1" standalone locale="en" />
    <PilotRulesSection locale="en" />
    <section className="border-y border-surface-border bg-surface-soft/55"><div className="container-page py-16 sm:py-24"><div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
      <div><span className="inline-flex items-center gap-2 rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green-dark"><ShieldCheck className="h-4 w-4" /> Human-approved design</span><h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-brand-navy sm:text-4xl">Decision support without taking control away.</h2><p className="mt-4 text-[15px] leading-relaxed text-brand-navy/55">RentOkey Pilot does not make uncontrolled changes. The user selects suggestions individually, reviews their impact and gives final approval before the plan is applied.</p></div>
      <div className="grid gap-4 sm:grid-cols-3">{steps.map((step) => <article key={step.number} className="rounded-[22px] border border-surface-border bg-white p-6"><span className="text-xs font-extrabold text-brand-green">{step.number}</span><h3 className="mt-4 text-base font-extrabold text-brand-navy">{step.title}</h3><p className="mt-2.5 text-sm leading-relaxed text-brand-navy/50">{step.description}</p></article>)}</div>
    </div></div></section>
    <section className="bg-white"><div className="container-page py-16 sm:py-24"><div className="overflow-hidden rounded-[28px] bg-brand-navy p-7 text-white sm:p-10"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/15 px-3 py-1 text-[11px] font-bold text-brand-green"><CheckCircle2 className="h-3.5 w-3.5" /> Available paid add-on</span><h2 className="mt-4 text-2xl font-extrabold tracking-[-0.025em] sm:text-3xl">Add RentOkey Pilot to your operation.</h2><p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">Pilot is an active add-on purchased separately from the core subscription. Contact our team for scope and pricing.</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Button href="/en#contact" size="lg" icon>Get pricing</Button><Button href="/en/free-trial" variant="secondary" size="lg">Try RentOkey</Button></div></div><p className="mt-7 flex items-center gap-2 border-t border-white/10 pt-5 text-xs text-white/40"><ArrowRightLeft className="h-3.5 w-3.5 text-brand-green" /> Added separately to your core subscription.</p></div></div></section>
  </>;
}
