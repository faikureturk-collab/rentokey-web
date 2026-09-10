import { GroupGlossyIcon, ShieldBoltIcon, TimerIcon, QuickLearnIcon } from "@/components/icons/ColorIcons";

const statsTr = [
  {
    icon: GroupGlossyIcon,
    value: "Bugün",
    label: "Öncelikli operasyon kuyruğu",
    hint: "Teslim, iade, risk ve belgeler",
  },
  {
    icon: TimerIcon,
    value: "Canlı",
    label: "Rezervasyon zaman çizelgesi",
    hint: "Boşluklar ve araç atamaları",
  },
  {
    icon: ShieldBoltIcon,
    value: "3 ekran",
    label: "Masaüstü, tablet ve mobil",
    hint: "Ofiste planla, sahada tamamla",
  },
  {
    icon: QuickLearnIcon,
    value: "21 gün",
    label: "Ücretsiz gerçek deneme",
    hint: "Kredi kartı gerekmez",
  },
];

const statsEn = [
  { icon: GroupGlossyIcon, value: "Today", label: "Priority operation queue", hint: "Handovers, returns, risks and documents" },
  { icon: TimerIcon, value: "Live", label: "Reservation timeline", hint: "Availability and vehicle assignments" },
  { icon: ShieldBoltIcon, value: "3 screens", label: "Desktop, tablet and mobile", hint: "Plan at the office, complete in the field" },
  { icon: QuickLearnIcon, value: "21 days", label: "Real free trial", hint: "No credit card required" },
];

export default function StatsBar({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const stats = locale === "en" ? statsEn : statsTr;
  return (
    <section className="container-page -mt-4 sm:mt-0">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 rounded-3xl border border-surface-border bg-white p-6 shadow-sm shadow-brand-navy/5 sm:p-8 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-surface-border">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-3 lg:justify-center lg:px-6">
            <stat.icon size={40} />
            <div>
              <p className="text-xl font-extrabold leading-tight text-brand-navy">{stat.value}</p>
              <p className="text-sm font-semibold text-brand-navy/70">{stat.label}</p>
              <p className="text-xs text-brand-navy/45">{stat.hint}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
