import { Check, Sparkles } from "lucide-react";
import Button from "./Button";

export default function CtaBanner({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  return (
    <section className="container-page pb-20 sm:pb-28">
      <div className="relative overflow-hidden rounded-[32px] bg-brand-navy-deep px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
        <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-brand-blue/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-brand-green/20 blur-3xl" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-green">
              <Sparkles className="h-3.5 w-3.5" />
              {en ? "A 21-day trial with real operations" : "21 günlük gerçek operasyon denemesi"}
            </span>
            <h2 className="mt-5 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-[34px]">
              {en ? "Try RentOkey with your own fleet and team." : "Rent Okey’i kendi filonuz ve ekibinizle deneyin."}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-[15px]">
              {en ? "Plan reservations, review suitable vehicle suggestions and manage the operation queue from one screen. Decide on your subscription at the end of the trial." : "Rezervasyonlarınızı planlayın, uygun araç önerisini görün ve operasyon kuyruğunu tek ekrandan yönetin. Aboneliğinize deneme sonunda karar verin."}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-white/70 sm:text-sm">
              {(en ? ["No credit card", "No setup fee", "Request migration support within 48 hours"] : ["Kredi kartı gerekmez", "Kurulum ücreti yok", "İlk 48 saat içinde aktarım desteği talebi"]).map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-brand-green" strokeWidth={2.5} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex min-w-52 flex-col gap-3">
            <Button href={en ? "/en/free-trial" : "/ucretsiz-dene"} size="lg" icon className="w-full">
              {en ? "Start free trial" : "Ücretsiz denemeyi başlat"}
            </Button>
            <Button href={en ? "/en#contact" : "/#iletisim"} variant="secondary" size="lg" className="w-full border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10">
              {en ? "Talk to the team" : "Ekiple görüş"}
            </Button>
            <p className="text-center text-xs text-white/45">{en ? "Create an account in about 2 minutes" : "Yaklaşık 2 dakikada hesap oluşturun"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
