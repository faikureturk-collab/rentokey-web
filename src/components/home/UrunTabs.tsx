"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import FleetDemo from "@/components/FleetDemo";
import {
  AlertTriangle,
  ArrowUpRight,
  Banknote,
  CalendarRange,
  CarFront,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileWarning,
  ShieldCheck,
  UsersRound,
  WalletCards,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const operationRows = [
  { time: "10:30", plate: "34 ROK 118", name: "Selim K.", place: "İstanbul Havalimanı", action: "Teslim et", color: "bg-brand-blue" },
  { time: "11:15", plate: "34 ROK 205", name: "Ayşe D.", place: "Merkez Şube", action: "Teslim al", color: "bg-[#705DE8]" },
  { time: "12:00", plate: "Araç atanmadı", name: "Yeni rezervasyon", place: "Öneri: 34 ROK 311 · Kadıköy", action: "Öneriyi ata", color: "bg-brand-green" },
];

function OperationPanel({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  return (
    <div className="overflow-hidden rounded-2xl border border-surface-border bg-white shadow-2xl shadow-black/10">
      <div className="flex items-center justify-between border-b border-surface-border px-4 py-3.5 sm:px-5">
        <div className="flex items-center gap-2.5"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green-dark"><ClipboardCheck className="h-4 w-4" /></span><span className="text-sm font-bold text-brand-navy">{en ? "Today’s operation" : "Bugünkü operasyon"}</span></div>
        <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-700">{en ? "8 actions remaining" : "8 işlem kaldı"}</span>
      </div>
      <div className="divide-y divide-surface-border px-4 sm:px-5">
        {operationRows.map((row) => (
          <div key={`${row.time}-${row.plate}`} className="grid grid-cols-[44px_1fr] gap-3 py-3.5 sm:grid-cols-[52px_1fr_auto] sm:items-center">
            <span className="text-xs font-extrabold text-brand-blue">{row.time}</span>
            <div className="min-w-0">
              <p className="truncate text-xs font-bold text-brand-navy">{row.plate} · {row.name}</p>
              <p className="mt-0.5 truncate text-[10px] text-brand-navy/40">{row.place}</p>
            </div>
            <span className={`col-start-2 flex w-fit items-center gap-1.5 rounded-lg px-3 py-2 text-[10px] font-bold text-white sm:col-start-auto ${row.color}`}>
              <CarFront className="h-3.5 w-3.5" /> {row.action}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-surface-border bg-surface-soft px-4 py-3 text-[10px] font-medium text-brand-navy/50 sm:px-5">
        <Clock3 className="h-3.5 w-3.5 text-brand-green" /> {en ? "Next action in 22 minutes" : "En yakın işlem 22 dakika içinde"}
      </div>
    </div>
  );
}

const fleetStats = [
  { label: "Kirada", value: "38", color: "text-brand-blue", bar: "bg-brand-blue" },
  { label: "Müsait", value: "24", color: "text-brand-green-dark", bar: "bg-brand-green" },
  { label: "Bakımda", value: "5", color: "text-amber-700", bar: "bg-amber-500" },
  { label: "Rezerve", value: "3", color: "text-[#705DE8]", bar: "bg-[#705DE8]" },
];

function FleetPanel({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  return (
    <div className="overflow-hidden rounded-2xl border border-surface-border bg-white shadow-2xl shadow-black/10">
      <div className="flex items-center justify-between border-b border-surface-border px-4 py-3.5 sm:px-5">
        <div className="flex items-center gap-2.5"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue"><CarFront className="h-4 w-4" /></span><span className="text-sm font-bold text-brand-navy">{en ? "Fleet status" : "Filo durumu"}</span></div>
        <span className="text-[11px] font-semibold text-brand-navy/40">70 {en ? "vehicles" : "araç"}</span>
      </div>
      <div className="grid grid-cols-2 gap-2 p-4 sm:grid-cols-4 sm:p-5">
        {fleetStats.map((stat) => (
          <div key={stat.label} className="rounded-xl bg-surface-soft p-3">
            <p className={`text-xl font-extrabold ${stat.color}`}>{stat.value}</p>
            <p className="mt-0.5 text-[10px] font-medium text-brand-navy/45">{en ? ({ Kirada: "Rented", Müsait: "Available", Bakımda: "Maintenance", Rezerve: "Reserved" } as Record<string,string>)[stat.label] : stat.label}</p>
            <div className="mt-2 h-1 rounded-full bg-white"><div className={`h-1 w-2/3 rounded-full ${stat.bar}`} /></div>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4 sm:px-5 sm:pb-5">
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-navy/35">{en ? "Upcoming alerts" : "Yaklaşan uyarılar"}</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between rounded-xl border border-amber-200 bg-amber-50/60 px-3 py-2.5"><div className="flex items-center gap-2.5"><FileWarning className="h-4 w-4 text-amber-600" /><div><p className="text-[11px] font-bold text-brand-navy">34 ROK 311 · Kasko</p><p className="text-[9px] text-brand-navy/40">8 gün içinde sona eriyor</p></div></div><span className="text-[10px] font-bold text-amber-700">İncele</span></div>
          <div className="flex items-center justify-between rounded-xl border border-surface-border px-3 py-2.5"><div className="flex items-center gap-2.5"><Wrench className="h-4 w-4 text-brand-blue" /><div><p className="text-[11px] font-bold text-brand-navy">34 ROK 426 · Periyodik bakım</p><p className="text-[9px] text-brand-navy/40">450 km kaldı</p></div></div><span className="text-[10px] font-bold text-brand-blue">Planla</span></div>
        </div>
      </div>
    </div>
  );
}

function FinancePanel({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  const bars = [42, 58, 52, 72, 66, 86];
  return (
    <div className="overflow-hidden rounded-2xl border border-surface-border bg-white shadow-2xl shadow-black/10">
      <div className="flex items-center justify-between border-b border-surface-border px-4 py-3.5 sm:px-5">
        <div className="flex items-center gap-2.5"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green/10 text-brand-green-dark"><WalletCards className="h-4 w-4" /></span><span className="text-sm font-bold text-brand-navy">{en ? "Revenue and expense view" : "Gelir ve gider görünümü"}</span></div>
        <span className="text-[11px] font-semibold text-brand-navy/40">{en ? "This month" : "Bu ay"}</span>
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-[1fr_1.1fr] sm:p-5">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-1">
          <div className="rounded-xl bg-brand-navy p-3.5 text-white"><div className="flex items-center gap-2 text-[10px] text-white/55"><Banknote className="h-3.5 w-3.5" /> Tahsil edilen</div><p className="mt-2 text-xl font-extrabold">₺482.600</p><p className="mt-1 text-[9px] font-medium text-brand-green">Geçen aya göre +%12</p></div>
          <div className="rounded-xl border border-surface-border p-3.5"><p className="text-[10px] text-brand-navy/45">Bekleyen ödeme</p><p className="mt-2 text-lg font-extrabold text-brand-navy">₺64.200</p><p className="mt-1 text-[9px] text-amber-600">7 rezervasyon</p></div>
        </div>
        <div className="rounded-xl bg-surface-soft p-4">
          <div className="flex items-end justify-between"><div><p className="text-[10px] text-brand-navy/40">Aylık performans</p><p className="mt-1 text-sm font-bold text-brand-navy">Gelir eğilimi</p></div><span className="text-[10px] font-bold text-brand-green-dark">+%18</span></div>
          <div className="mt-5 flex h-24 items-end gap-2">
            {bars.map((height, index) => <div key={index} className="flex h-full flex-1 items-end"><div className={`w-full rounded-t ${index === bars.length - 1 ? "bg-brand-green" : "bg-brand-blue/20"}`} style={{ height: `${height}%` }} /></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

const roleRows = [
  { role: "Sistem Yöneticisi", scope: "Ana yönetim rolü", color: "bg-brand-navy" },
  { role: "Şube Müdürü", scope: "Şube kapsamı", color: "bg-brand-blue" },
  { role: "Saha / Müşteri Temsilcisi", scope: "Saha akışları", color: "bg-brand-green" },
  { role: "Teknik & Operasyon", scope: "Teknik süreçler", color: "bg-amber-500" },
  { role: "B2B / Kurumsal Ortak", scope: "Kurumsal erişim", color: "bg-[#705DE8]" },
];

function ManagementPanel({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  return (
    <div className="overflow-hidden rounded-2xl border border-surface-border bg-white shadow-2xl shadow-black/10">
      <div className="flex items-center justify-between border-b border-surface-border px-4 py-3.5 sm:px-5">
        <div className="flex items-center gap-2.5"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue"><ShieldCheck className="h-4 w-4" /></span><span className="text-sm font-bold text-brand-navy">{en ? "Role and page access" : "Pozisyon ve sayfa erişimi"}</span></div>
        <span className="text-[11px] font-semibold text-brand-navy/40">{en ? "5 role profiles" : "5 rol profili"}</span>
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-[1.05fr_.95fr] sm:p-5">
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.12em] text-brand-navy/35">{en ? "Ready-made roles" : "Hazır pozisyonlar"}</p>
          <div className="space-y-1.5">
            {roleRows.map((item, index) => (
              <div key={item.role} className="flex items-center justify-between gap-3 rounded-xl border border-surface-border px-3 py-2">
                <div className="flex min-w-0 items-center gap-2.5"><span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[8px] font-bold text-white ${item.color}`}>{String(index + 1).padStart(2, "0")}</span><span className="truncate text-[10px] font-semibold text-brand-navy sm:text-[11px]">{item.role}</span></div>
                <span className="shrink-0 rounded-full bg-surface-soft px-2 py-1 text-[8px] font-medium text-brand-navy/45">{item.scope}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-brand-navy p-4 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green"><ShieldCheck className="h-4 w-4" /></span>
          <p className="mt-5 text-sm font-extrabold">{en ? "See only what the role needs." : "İşi kadarını görür."}</p>
          <p className="mt-2 text-[10px] leading-relaxed text-white/50">{en ? "Pages and permitted actions are separated for each role." : "Her pozisyon için gösterilecek sayfalar ve yapılabilecek işlemler ayrıştırılır."}</p>
          <div className="mt-5 space-y-2 border-t border-white/10 pt-4">
            <div className="flex items-center gap-2 text-[9px] text-white/55"><CheckCircle2 className="h-3.5 w-3.5 text-brand-green" /> Sayfa bazlı erişim</div>
            <div className="flex items-center gap-2 text-[9px] text-white/55"><CheckCircle2 className="h-3.5 w-3.5 text-brand-green" /> Pozisyona uygun görünüm</div>
          </div>
        </div>
      </div>
    </div>
  );
}

type Tab = {
  eyebrow: string;
  navTitle: string;
  navDescription: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
  panel: ReactNode;
};

const tabs: Tab[] = [
  {
    eyebrow: "Planlama",
    navTitle: "Rezervasyon & takvim",
    navDescription: "Uygunluğu görün, çakışmayı önleyin.",
    title: "70 araç. Aradığınız plan birkaç dokunuş uzakta.",
    description: "Aşağıdaki örnekte plaka arayın, sınıf ve şubeye göre filtreleyin. Çakışan rezervasyon için uygun aracı bulun ve örnek atamayı onaylayın.",
    bullets: ["7, 14 günlük ve aylık görünüm", "Uygunluk kriterlerine göre araç önerisi", "Çakışma ve araçsız rezervasyon uyarıları"],
    icon: CalendarRange,
    panel: <FleetDemo />,
  },
  {
    eyebrow: "Operasyon",
    navTitle: "Teslim & iade",
    navDescription: "Sıradaki işi ve aksiyonu gösterin.",
    title: "Ekip, sıradaki işini aramak zorunda kalmaz.",
    description: "Günün teslim ve iadeleri saat sırasına göre tek kuyrukta görünür. Genel arama ve merkezi bildirimler, ilgili araç veya rezervasyona hangi sayfada olursanız olun hızla ulaşmanızı sağlar.",
    bullets: ["Önceliğe göre operasyon kuyruğu", "Teslim et, teslim al ve önerilen aracı ata", "Masaüstü, tablet ve mobilde aynı iş mantığı"],
    icon: ClipboardCheck,
    panel: <OperationPanel />,
  },
  {
    eyebrow: "Filo",
    navTitle: "Araç, bakım & belgeler",
    navDescription: "Filonun durumunu ve riskleri izleyin.",
    title: "Aracın durumu kadar, yaklaşan riski de görün.",
    description: "Kirada, müsait ve bakımda olan araçları anlık izleyin. Sigorta, kasko, vergi ve egzoz emisyon sürelerini operasyonu aksatmadan takip edin.",
    bullets: ["Araçların tek bakışta durum dağılımı", "Bakım ve kilometre hatırlatmaları", "Belge bitiş tarihleri için erken uyarı"],
    icon: CarFront,
    panel: <FleetPanel />,
  },
  {
    eyebrow: "Finans",
    navTitle: "Gider & tahsilat",
    navDescription: "Paranın nereden geldiğini görün.",
    title: "Rezervasyondan tahsilata kadar finansal görünürlük.",
    description: "Ödenen ve bekleyen tutarları rezervasyonlarla birlikte takip edin. Bakım maliyetini otomatik gidere dönüştürün, tekrarlayan giderleri planlayın ve performansı dönemler arasında karşılaştırın.",
    bullets: ["Ödeme durumu ve bekleyen tahsilatlar", "Rezervasyon ve araç bazlı giderler", "Gelir, doluluk ve dönem karşılaştırmaları"],
    icon: WalletCards,
    panel: <FinancePanel />,
  },
  {
    eyebrow: "Yönetim",
    navTitle: "Ekip & raporlar",
    navDescription: "Yetkiyi paylaşın, sonucu ölçün.",
    title: "Doğru bilgi, doğru ekip üyesinin önünde.",
    description: "Sistem Yöneticisi ana rolünün altında Şube Müdürü, Saha / Müşteri Temsilcisi, Teknik & Operasyon ve B2B / Kurumsal Ortak pozisyonlarını tanımlayın. Her ekip üyesi yalnız yetkili olduğu sayfa ve işlemleri görsün.",
    bullets: ["Bir ana rol ve dört operasyon pozisyonu", "Pozisyona göre sayfa yetkilendirmesi", "Her kullanıcı için daha sade çalışma alanı"],
    icon: UsersRound,
    panel: <ManagementPanel />,
  },
];

const englishCopy: Record<string, string> = {
  "Ürünün kalbi": "The heart of the product",
  "Beş ayrı araç değil.": "Not five separate tools.",
  "Tek operasyon akışı.": "One operation flow.",
  "Rezervasyondan iadeye, bakım uyarısından tahsilata kadar ekibiniz aynı veriyle ve aynı çalışma düzeniyle ilerler.": "From reservation to return, maintenance alerts to collections, your team works with the same data and the same operating flow.",
  "Planlama": "Planning",
  "Rezervasyon & takvim": "Reservations & timeline",
  "Uygunluğu görün, çakışmayı önleyin.": "See availability and prevent conflicts.",
  "70 araç. Aradığınız plan birkaç dokunuş uzakta.": "70 vehicles. The plan you need is a few clicks away.",
  "Aşağıdaki örnekte plaka arayın, sınıf ve şubeye göre filtreleyin. Çakışan rezervasyon için uygun aracı bulun ve örnek atamayı onaylayın.": "Search by plate, filter by class and branch, find a suitable vehicle for a conflicting reservation and approve the sample assignment.",
  "7, 14 günlük ve aylık görünüm": "7-day, 14-day and monthly views",
  "Uygunluk kriterlerine göre araç önerisi": "Vehicle suggestions based on availability criteria",
  "Çakışma ve araçsız rezervasyon uyarıları": "Conflict and unassigned reservation alerts",
  "Operasyon": "Operations",
  "Teslim & iade": "Handovers & returns",
  "Sıradaki işi ve aksiyonu gösterin.": "Show the next task and action.",
  "Ekip, sıradaki işini aramak zorunda kalmaz.": "The team never has to search for the next task.",
  "Günün teslim ve iadeleri saat sırasına göre tek kuyrukta görünür. Genel arama ve merkezi bildirimler, ilgili araç veya rezervasyona hangi sayfada olursanız olun hızla ulaşmanızı sağlar.": "The day’s handovers and returns appear in one time-ordered queue. Global search and central notifications take you to the relevant vehicle or reservation from any page.",
  "Önceliğe göre operasyon kuyruğu": "Priority-based operation queue",
  "Teslim et, teslim al ve önerilen aracı ata": "Hand over, receive and assign the suggested vehicle",
  "Masaüstü, tablet ve mobilde aynı iş mantığı": "The same operating logic on desktop, tablet and mobile",
  "Filo": "Fleet",
  "Araç, bakım & belgeler": "Vehicles, maintenance & documents",
  "Filonun durumunu ve riskleri izleyin.": "Monitor fleet status and risks.",
  "Aracın durumu kadar, yaklaşan riski de görün.": "See upcoming risks as clearly as vehicle status.",
  "Kirada, müsait ve bakımda olan araçları anlık izleyin. Sigorta, kasko, vergi ve egzoz emisyon sürelerini operasyonu aksatmadan takip edin.": "Monitor rented, available and in-maintenance vehicles live. Track insurance, comprehensive cover, tax and emissions deadlines without interrupting operations.",
  "Araçların tek bakışta durum dağılımı": "Vehicle status distribution at a glance",
  "Bakım ve kilometre hatırlatmaları": "Maintenance and mileage reminders",
  "Belge bitiş tarihleri için erken uyarı": "Early alerts for document deadlines",
  "Finans": "Finance",
  "Gider & tahsilat": "Expenses & collections",
  "Paranın nereden geldiğini görün.": "See where the money comes from.",
  "Rezervasyondan tahsilata kadar finansal görünürlük.": "Financial visibility from reservation to collection.",
  "Ödenen ve bekleyen tutarları rezervasyonlarla birlikte takip edin. Bakım maliyetini otomatik gidere dönüştürün, tekrarlayan giderleri planlayın ve performansı dönemler arasında karşılaştırın.": "Track paid and pending amounts with reservations. Turn maintenance cost into an expense, plan recurring expenses and compare performance across periods.",
  "Ödeme durumu ve bekleyen tahsilatlar": "Payment status and pending collections",
  "Rezervasyon ve araç bazlı giderler": "Expenses by reservation and vehicle",
  "Gelir, doluluk ve dönem karşılaştırmaları": "Revenue, occupancy and period comparisons",
  "Yönetim": "Management",
  "Ekip & raporlar": "Team & reports",
  "Yetkiyi paylaşın, sonucu ölçün.": "Share access and measure results.",
  "Doğru bilgi, doğru ekip üyesinin önünde.": "The right information in front of the right team member.",
  "Sistem Yöneticisi ana rolünün altında Şube Müdürü, Saha / Müşteri Temsilcisi, Teknik & Operasyon ve B2B / Kurumsal Ortak pozisyonlarını tanımlayın. Her ekip üyesi yalnız yetkili olduğu sayfa ve işlemleri görsün.": "Define Branch Manager, Field / Customer Representative, Technical & Operations and B2B / Corporate Partner roles under the System Administrator. Each team member sees only authorised pages and actions.",
  "Bir ana rol ve dört operasyon pozisyonu": "One main role and four operation roles",
  "Pozisyona göre sayfa yetkilendirmesi": "Page permissions by role",
  "Her kullanıcı için daha sade çalışma alanı": "A simpler workspace for every user",
};

export default function UrunTabs({ locale = "tr" }: { locale?: "tr" | "en" }) {
  const en = locale === "en";
  const t = (value: string) => en ? (englishCopy[value] ?? value) : value;
  const [active, setActive] = useState(0);
  useEffect(() => {
    const showFleet = () => setActive(0);
    window.addEventListener("rentokey:show-fleet-demo", showFleet);
    return () => window.removeEventListener("rentokey:show-fleet-demo", showFleet);
  }, []);
  const tab = tabs[active];
  const activePanel = [
    <FleetDemo key="fleet" locale={locale} />,
    <OperationPanel key="operations" locale={locale} />,
    <FleetPanel key="fleet-status" locale={locale} />,
    <FinancePanel key="finance" locale={locale} />,
    <ManagementPanel key="management" locale={locale} />,
  ][active];

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[1fr_0.78fr] lg:items-end">
        <div>
          <span className="inline-flex rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green-dark">{t("Ürünün kalbi")}</span>
          <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl">{t("Beş ayrı araç değil.")} <span className="text-brand-green">{t("Tek operasyon akışı.")}</span></h2>
        </div>
        <p className="max-w-xl text-[15px] leading-relaxed text-brand-navy/55 lg:justify-self-end">{t("Rezervasyondan iadeye, bakım uyarısından tahsilata kadar ekibiniz aynı veriyle ve aynı çalışma düzeniyle ilerler.")}</p>
      </div>

      <div className="mt-8 overflow-hidden rounded-[28px] border border-brand-navy/10 bg-brand-navy shadow-2xl shadow-brand-navy/10">
        <div className="bg-[#f4f7fa] p-3 sm:p-4 lg:p-5">
          <div className="flex gap-2 overflow-x-auto">
            {tabs.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === active;
              return (
                <button key={item.navTitle} type="button" onClick={() => setActive(index)} aria-pressed={isActive} className={`group flex min-h-[64px] min-w-[165px] flex-1 items-center gap-3 rounded-2xl border p-3.5 text-left transition-all ${isActive ? "border-brand-green/30 bg-white shadow-lg shadow-brand-navy/5" : "border-transparent hover:border-brand-navy/10 hover:bg-white/70"}`}>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-colors ${isActive ? "bg-brand-green text-white" : "bg-white text-brand-navy/45 group-hover:text-brand-navy"}`}><Icon className="h-5 w-5" /></span>
                  <span className="min-w-0 flex-1"><span className={`block text-[10px] font-bold uppercase tracking-[0.12em] ${isActive ? "text-brand-green-dark" : "text-brand-navy/35"}`}>{String(index + 1).padStart(2, "0")} · {t(item.eyebrow)}</span><span className="mt-0.5 block text-[13px] font-extrabold text-brand-navy">{t(item.navTitle)}</span><span className="mt-0.5 hidden truncate text-[10px] text-brand-navy/40 sm:block">{t(item.navDescription)}</span></span>
                  <ArrowUpRight className={`h-4 w-4 shrink-0 transition-colors ${isActive ? "text-brand-green" : "text-brand-navy/20"}`} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden px-3 py-6 sm:px-6 sm:py-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-green/10 blur-3xl" />
          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-green">{t(tab.eyebrow)}</span>
            <h3 className="mt-3 max-w-2xl text-2xl font-extrabold leading-tight tracking-[-0.025em] text-white sm:text-3xl">{t(tab.title)}</h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/55 sm:text-[15px]">{t(tab.description)}</p>
            <div className="mt-4 grid gap-2 sm:grid-cols-3">
              {tab.bullets.map((bullet) => <div key={bullet} className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/[0.045] p-3"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" /><span className="text-[11px] leading-relaxed text-white/70">{t(bullet)}</span></div>)}
            </div>
            <div className="mt-5">{activePanel}</div>
            <Link href={en ? "/en/free-trial" : "/ucretsiz-dene"} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-brand-green transition-colors hover:text-white">{en ? "Try it with your own fleet" : "Kendi filonuzla deneyin"} <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-brand-navy/45">
        <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-brand-green" /> {en ? "No duplicate data entry" : "Tekrar veri girişi yok"}</span>
        <span className="flex items-center gap-1.5"><AlertTriangle className="h-3.5 w-3.5 text-amber-500" /> {en ? "Risks become actions" : "Riskler aksiyona dönüşür"}</span>
        <span className="flex items-center gap-1.5"><UsersRound className="h-3.5 w-3.5 text-brand-blue" /> {en ? "The whole team in one flow" : "Tüm ekip aynı akışta"}</span>
      </div>
    </div>
  );
}
