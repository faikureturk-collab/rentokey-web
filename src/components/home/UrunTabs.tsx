"use client";

import { useState, type ReactNode, type CSSProperties } from "react";
import { CheckCircle2 } from "lucide-react";

function PanelHeaderRow({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm font-bold text-brand-navy">{title}</span>
      <span className="text-xs font-semibold text-brand-green">{meta}</span>
    </div>
  );
}

function LocationPin({
  label,
  color,
  style,
}: {
  label: string;
  color: string;
  style: CSSProperties;
}) {
  return (
    <span
      className="absolute flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-brand-navy shadow-sm"
      style={style}
    >
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${color}`} />
      {label}
    </span>
  );
}

const fleetRows = [
  {
    title: "34 ROK 118 · iade",
    sub: "Havalimanı Dış Hatlar · 17:40",
    badge: "25 dk gecikme",
    badgeClass: "bg-amber-100 text-amber-700",
  },
  {
    title: "34 ROK 205 · teslim",
    sub: "Adrese teslim · Konyaaltı · 18:15",
    badge: "Yolda",
    badgeClass: "bg-brand-green/10 text-brand-green-dark",
  },
  {
    title: "34 ROK 311 · transfer",
    sub: "Lara → Merkez ofis · yarın 09:00",
    badge: "Planlandı",
    badgeClass: "bg-brand-blue/10 text-brand-blue",
  },
];

function FleetPanel() {
  return (
    <div>
      <PanelHeaderRow title="Lokasyon panosu" meta="4 lokasyon · 12 hareket" />
      <div className="relative mt-4 h-36 overflow-hidden rounded-xl bg-surface-soft">
        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
          <line x1="32%" y1="0" x2="32%" y2="100%" stroke="#E7EAF1" strokeWidth="1" />
          <line x1="68%" y1="0" x2="68%" y2="100%" stroke="#E7EAF1" strokeWidth="1" />
          <line x1="0" y1="55%" x2="100%" y2="55%" stroke="#E7EAF1" strokeWidth="1" />
        </svg>
        <LocationPin
          label="Havalimanı · 6 araç"
          color="bg-brand-green"
          style={{ left: "6%", top: "16%" }}
        />
        <LocationPin
          label="Lara · 3 araç"
          color="bg-amber-500"
          style={{ right: "6%", top: "12%" }}
        />
        <LocationPin
          label="Merkez ofis · 9 araç"
          color="bg-brand-blue"
          style={{ left: "34%", top: "62%" }}
        />
      </div>
      <div className="mt-4 space-y-2">
        {fleetRows.map((row) => (
          <div
            key={row.title}
            className="flex items-center justify-between rounded-xl border border-surface-border px-3 py-2.5"
          >
            <div>
              <p className="text-xs font-bold text-brand-navy">{row.title}</p>
              <p className="mt-0.5 text-[11px] text-brand-navy/45">{row.sub}</p>
            </div>
            <span className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-semibold ${row.badgeClass}`}>
              {row.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const days = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];
const ganttRows = [
  { plate: "34 ABC 123", color: "bg-emerald-500", left: 4, width: 32 },
  { plate: "34 DEF 456", color: "bg-sky-500", left: 46, width: 40 },
  { plate: "34 GHI 789", color: "bg-amber-500", left: 18, width: 24 },
  { plate: "34 JKL 012", color: "bg-violet-500", left: 60, width: 32 },
];

function SchedulePanel() {
  return (
    <div>
      <PanelHeaderRow title="Rezervasyon takvimi" meta="6 araç · bu hafta" />
      <div className="mt-4 grid grid-cols-7 gap-1 border-b border-surface-border pb-2">
        {days.map((day) => (
          <span key={day} className="text-center text-[10px] font-semibold text-brand-navy/40">
            {day}
          </span>
        ))}
      </div>
      <div className="mt-3 space-y-3">
        {ganttRows.map((row) => (
          <div key={row.plate} className="flex items-center gap-3">
            <span className="w-16 shrink-0 text-[11px] font-medium text-brand-navy/45">
              {row.plate}
            </span>
            <div className="relative h-5 w-full rounded-full bg-surface-soft">
              <div
                className={`absolute h-5 rounded-full ${row.color}`}
                style={{ left: `${row.left}%`, width: `${row.width}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const checklistItems = [
  { label: "Hasar fotoğrafları", done: true },
  { label: "Yakıt / km kontrolü", done: true },
  { label: "Temizlik onayı", done: false },
];

function MobilePanel() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[220px] rounded-[1.75rem] border-[6px] border-brand-navy bg-white p-3 shadow-lg">
        <div className="mx-auto h-1.5 w-10 rounded-full bg-brand-navy/15" />
        <p className="mt-3 text-xs font-bold text-brand-navy">Teslimat kontrolü</p>
        <p className="text-[10px] text-brand-navy/40">34 ROK 205 · Konyaaltı</p>
        <div className="mt-3 space-y-2">
          {checklistItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 rounded-lg bg-surface-soft px-2.5 py-2">
              <CheckCircle2
                className={`h-4 w-4 shrink-0 ${item.done ? "text-brand-green" : "text-brand-navy/20"}`}
              />
              <span className="text-[11px] font-medium text-brand-navy/70">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-dashed border-surface-border p-2">
          <svg viewBox="0 0 100 28" className="h-7 w-full">
            <path
              d="M4,20 C12,4 18,24 26,12 C32,4 38,22 46,14 C54,6 60,20 70,10 C78,4 84,18 96,8"
              fill="none"
              stroke="var(--color-brand-blue)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <p className="mt-1 text-center text-[9px] font-semibold text-brand-navy/35">İmza alındı</p>
        </div>
      </div>
    </div>
  );
}

const kpis = [
  { label: "Doluluk oranı", value: "%78" },
  { label: "Aylık gelir", value: "₺482K" },
  { label: "Ort. süre", value: "4.2 gün" },
];
const monthlyBars = [40, 55, 48, 66, 60, 82];
const months = ["Oca", "Şub", "Mar", "Nis", "May", "Haz"];

function ReportingPanel() {
  return (
    <div>
      <PanelHeaderRow title="Performans panosu" meta="Son 6 ay" />
      <div className="mt-4 grid grid-cols-3 gap-2">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="rounded-xl border border-surface-border p-2.5">
            <p className="truncate text-[10px] text-brand-navy/45">{kpi.label}</p>
            <p className="mt-1 text-sm font-extrabold text-brand-navy">{kpi.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex h-24 items-end gap-2.5">
        {monthlyBars.map((h, i) => (
          <div key={i} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
            <div className="w-full rounded-t-md bg-brand-green/80" style={{ height: `${h}%` }} />
            <span className="text-[9px] text-brand-navy/35">{months[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const userRows = [
  { name: "Azra Yılmaz", role: "Yönetici", color: "bg-brand-green" },
  { name: "Mehmet Kaya", role: "Operasyon", color: "bg-brand-blue" },
  { name: "Selin Demir", role: "Saha ekibi", color: "bg-violet-500" },
  { name: "Ozan Türk", role: "Muhasebe", color: "bg-amber-500" },
];

function UsersPanel() {
  return (
    <div>
      <PanelHeaderRow title="Kullanıcılar" meta="12 kullanıcı · 4 rol" />
      <div className="mt-4 space-y-2">
        {userRows.map((user) => (
          <div
            key={user.name}
            className="flex items-center justify-between rounded-xl border border-surface-border px-3 py-2.5"
          >
            <div className="flex items-center gap-2.5">
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${user.color}`}
              >
                {user.name.charAt(0)}
              </span>
              <span className="text-xs font-medium text-brand-navy/75">{user.name}</span>
            </div>
            <span className="rounded-full bg-surface-soft px-2.5 py-1 text-[11px] font-medium text-brand-navy/55">
              {user.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

type Tab = {
  pill: string;
  title: string;
  description: string;
  bullets: string[];
  panel: ReactNode;
};

const tabs: Tab[] = [
  {
    pill: "Filo takibi",
    title: "Filo yönetimi",
    description:
      "Araçlarınızı, sözleşmelerinizi, bakım ve muayene takvimini tek ekrandan izleyin. Hangi aracın nerede, kimde ve hangi durumda olduğunu her an bilin.",
    bullets: [
      "Araç bazlı sözleşme ve belge takibi",
      "Bakım / muayene hatırlatmaları",
      "Konum ve durum geçmişi",
    ],
    panel: <FleetPanel />,
  },
  {
    pill: "Zaman çizelgesi",
    title: "Rezervasyon ve takvim",
    description:
      "Canlı Gantt zaman çizelgesiyle çakışmasız planlama yapın. Rezervasyonları oluşturun, değiştirin ve tüm ekibinizle eş zamanlı takip edin.",
    bullets: [
      "Sürükle-bırak Gantt takvimi",
      "Otomatik çakışma uyarıları",
      "Online rezervasyon entegrasyonu",
    ],
    panel: <SchedulePanel />,
  },
  {
    pill: "Mobil saha",
    title: "Mobil saha uygulaması",
    description:
      "Teslimat ve iade işlemlerini sahada dijitalleştirin. Hasar, yakıt ve km kontrollerini fotoğraflı olarak saniyeler içinde kaydedin.",
    bullets: [
      "Çevrimdışı çalışabilme",
      "Fotoğraflı hasar tespit tutanağı",
      "Dijital imza ile teslim/iade onayı",
    ],
    panel: <MobilePanel />,
  },
  {
    pill: "Raporlama",
    title: "Raporlama ve analiz",
    description:
      "Kârlılık, doluluk oranı ve araç bazlı performans raporlarına anında ulaşın; verilerinize dayanarak daha doğru kararlar alın.",
    bullets: [
      "Gerçek zamanlı doluluk ve gelir raporları",
      "Araç ve şube bazlı karşılaştırmalar",
      "Excel'e dışa aktarma",
    ],
    panel: <ReportingPanel />,
  },
  {
    pill: "Kullanıcılar",
    title: "Kullanıcı ve rol yönetimi",
    description:
      "Ekibinizi rol bazlı yetkilerle sisteme davet edin. Kim neyi görebilir, neyi değiştirebilir — siz belirleyin, güvenle paylaşın.",
    bullets: [
      "Rol bazlı erişim (yönetici, operasyon, saha, muhasebe)",
      "Aktivite ve değişiklik geçmişi",
      "Sınırsız kullanıcı daveti",
    ],
    panel: <UsersPanel />,
  },
];

export default function UrunTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  const count = String(tabs.length).padStart(2, "0");

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <span className="inline-flex rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
            Özellikler
          </span>
          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-brand-navy sm:text-3xl">
            Beş modül, tek platform.
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((t, i) => (
            <button
              key={t.pill}
              onClick={() => setActive(i)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                i === active
                  ? "border-brand-green bg-brand-green/10 text-brand-green"
                  : "border-surface-border text-brand-navy/60 hover:border-brand-navy/20"
              }`}
            >
              {t.pill}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 border-t border-surface-border" />

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <span className="text-sm font-semibold text-brand-navy/35">
            {String(active + 1).padStart(2, "0")} / {count}
          </span>
          <h3 className="mt-3 text-2xl font-extrabold text-brand-navy sm:text-3xl">{tab.title}</h3>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-navy/55">{tab.description}</p>
          <ul className="mt-5 space-y-3">
            {tab.bullets.map((bullet) => (
              <li key={bullet} className="flex items-center gap-2.5">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-green" />
                <span className="text-sm text-brand-navy/70">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-surface-border bg-white p-5 shadow-xl shadow-brand-navy/5">
          {tab.panel}
        </div>
      </div>
    </div>
  );
}
