import TrialOnboarding from "@/components/TrialOnboarding";
import WhatsAppLink from "@/components/WhatsAppLink";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({title:"Start Your 21-Day Free Trial", description:"Create your RentOkey account in one step. Verify your email, set up your fleet and start your 21-day trial. No credit card required. English support available.",path:"/en/free-trial"});

export default function FreeTrialPage() {
  return <section className="bg-surface-soft/50"><div className="container-page grid items-start gap-10 py-12 sm:py-16 lg:grid-cols-2"><div className="lg:pt-10"><p className="text-xs font-bold uppercase tracking-widest text-brand-green-dark">Your fleet. Your team. Your trial.</p><h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">Start with a clearer working day.</h1><p className="mt-5 max-w-lg text-lg leading-relaxed text-brand-navy/60">Create your account, verify your email and set up your company in the app. Explore the core platform with your own vehicles for 21 days.</p><ul className="mt-7 space-y-3 text-sm text-brand-navy/70"><li>✓ No credit card or automatic charge</li><li>✓ Request first-import help within the first 48 hours</li><li>✓ Support in Turkish and English</li></ul><p className="mt-5 max-w-lg text-xs leading-relaxed text-brand-navy/55">Pilot and optional modules are separate; ask about trial access. Migration completion depends on your data. Verification emails and the application follow their own language settings.</p><div className="mt-7"><WhatsAppLink locale="en" /></div></div><TrialOnboarding locale="en" /></div></section>;
}
