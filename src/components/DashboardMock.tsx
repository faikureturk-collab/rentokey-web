"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AlertTriangle,
  ArrowRight,
  ArrowRightLeft,
  Bell,
  CalendarDays,
  CarFront,
  Check,
  Clock3,
  LayoutDashboard,
  MapPin,
  Search,
  Sparkles,
  WalletCards,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type DemoId = "today" | "planning" | "focus";

const demoTabs: { id: DemoId; label: string; mobileLabel: string; icon: LucideIcon }[] = [
  { id: "today", label: "Bugünkü operasyon", mobileLabel: "Bugün", icon: LayoutDashboard },
  { id: "planning", label: "Planlama", mobileLabel: "Planlama", icon: CalendarDays },
  { id: "focus", label: "Önerilen odak", mobileLabel: "Odak", icon: Sparkles },
];

const operations = [
  { time: "10:30", plate: "34 ROK 118", detail: "Selim Kaya · İstanbul Havalimanı", action: "Teslim et", tone: "blue" },
  { time: "11:15", plate: "34 ROK 205", detail: "Ayşe Demir · Merkez Şube", action: "Teslim al", tone: "purple" },
  { time: "12:00", plate: "Araç atanmadı", detail: "Yeni rezervasyon · Kadıköy", action: "Öneriyi ata", tone: "green" },
];

const scheduleRows = [
  { plate: "34 ROK 118", model: "Renault Clio", left: 2, width: 38, label: "Selim Kaya · 10:30", tone: "blue" },
  { plate: "34 ROK 205", model: "Fiat Egea", left: 30, width: 45, label: "Ayşe Demir · 4 gün", tone: "green" },
  { plate: "34 ROK 311", model: "Toyota Corolla", left: 58, width: 29, label: "İade · 17:45", tone: "purple" },
  { plate: "34 ROK 426", model: "Peugeot 2008", left: 8, width: 62, label: "Aylık kiralama", tone: "navy" },
  { plate: "34 ROK 512", model: "Dacia Duster", left: 72, width: 24, label: "Müsait", tone: "soft" },
];

const toneStyles = {
  blue: "bg-brand-blue text-white",
  green: "bg-brand-green text-white",
  purple: "bg-[#705de8] text-white",
  navy: "bg-brand-navy-soft text-white",
  soft: "border border-dashed border-brand-green/50 bg-brand-green/5 text-brand-green-dark",
};

export default function DashboardMock() {
  const [active, setActive] = useState<DemoId>("today");

  return (
    <div id="hero-demo" className="scroll-mt-24" data-testid="interactive-product-preview">
      <div className="hidden md:block">
        <div className="overflow-hidden rounded-[26px] border border-brand-navy/15 bg-brand-navy-deep shadow-[0_28px_80px_-24px_rgba(6,21,44,0.38)]">
          <div className="flex min-h-14 items-center gap-3 border-b border-white/10 px-4 py-2.5">
            <div className="flex shrink-0 items-center gap-2.5 pr-1">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white">
                <Image src="/logo/rentokey-icon.svg" alt="" width={22} height={17} aria-hidden />
              </span>
              <div className="hidden xl:block">
                <p className="text-[11px] font-extrabold text-white">Rent Okey</p>
                <p className="text-[8px] text-white/40">Demo operasyonu</p>
              </div>
            </div>

            <DemoTabList active={active} setActive={setActive} />

            <div className="ml-auto flex shrink-0 items-center gap-1.5">
              <button type="button" aria-label="Ara" className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/55">
                <Search className="h-3.5 w-3.5" />
              </button>
              <button type="button" aria-label="Bildirimler" className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-white/55">
                <Bell className="h-3.5 w-3.5" />
                <i className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-red-400" />
              </button>
            </div>
          </div>

          <div className="bg-[#f3f6fa] p-3.5 lg:p-4">
            <DesktopScene active={active} />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[390px] md:hidden">
        <div className="overflow-hidden rounded-[28px] border border-brand-navy/15 bg-white shadow-[0_24px_70px_-24px_rgba(6,21,44,0.4)]">
          <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-soft">
                <Image src="/logo/rentokey-icon.svg" alt="" width={22} height={17} aria-hidden />
              </span>
              <div>
                <p className="text-xs font-extrabold text-brand-navy">Operasyon Merkezi</p>
                <p className="flex items-center gap-1 text-[9px] text-brand-navy/40"><i className="h-1.5 w-1.5 rounded-full bg-brand-green" /> Canlı demo</p>
              </div>
            </div>
            <Bell className="h-4 w-4 text-brand-navy/45" />
          </div>

          <div className="grid grid-cols-3 border-b border-surface-border bg-surface-soft p-1.5" role="tablist" aria-label="Mobil ürün demosu">
            {demoTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab.id)}
                  className={`flex items-center justify-center gap-1.5 rounded-lg px-2 py-2 text-[10px] font-bold transition-all ${isActive ? "bg-white text-brand-navy shadow-sm" : "text-brand-navy/40"}`}
                >
                  <Icon className={`h-3.5 w-3.5 ${isActive ? "text-brand-green" : ""}`} />
                  {tab.mobileLabel}
                </button>
              );
            })}
          </div>

          <div className="min-h-[430px] bg-[#f3f6fa] p-4">
            <MobileScene active={active} />
          </div>
        </div>
      </div>

      <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs font-medium text-brand-navy/45">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
        Sekmeleri seçerek ürün akışını inceleyin · Örnek veriler
      </p>
    </div>
  );
}

function DemoTabList({ active, setActive }: { active: DemoId; setActive: (id: DemoId) => void }) {
  return (
    <div className="flex min-w-0 items-center gap-1" role="tablist" aria-label="Ürün demosu">
      {demoTabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = active === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => setActive(tab.id)}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-[10px] font-bold transition-all lg:px-3 lg:text-[11px] ${isActive ? "bg-white text-brand-navy shadow-sm" : "text-white/50 hover:bg-white/5 hover:text-white/80"}`}
          >
            <Icon className={`h-3.5 w-3.5 ${isActive ? "text-brand-green" : ""}`} />
            <span className="hidden lg:inline">{tab.label}</span>
            <span className="lg:hidden">{tab.mobileLabel}</span>
          </button>
        );
      })}
    </div>
  );
}

function DesktopScene({ active }: { active: DemoId }) {
  return (
    <div role="tabpanel" className="min-h-[440px] overflow-hidden rounded-2xl border border-surface-border bg-white">
      {active === "today" && <DesktopToday />}
      {active === "planning" && <DesktopPlanning />}
      {active === "focus" && <DesktopFocus />}
    </div>
  );
}

function SceneHeader({ eyebrow, title, detail, action }: { eyebrow: string; title: string; detail: string; action?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-surface-border px-4 py-3.5 lg:px-5">
      <div>
        <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-brand-green-dark">{eyebrow}</p>
        <h3 className="mt-0.5 text-sm font-extrabold text-brand-navy lg:text-base">{title}</h3>
        <p className="mt-0.5 text-[9px] text-brand-navy/40 lg:text-[10px]">{detail}</p>
      </div>
      {action && (
        <button type="button" className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand-blue px-3 py-2 text-[10px] font-bold text-white shadow-sm shadow-brand-blue/20">
          <span className="text-sm leading-none">+</span> {action}
        </button>
      )}
    </div>
  );
}

function DesktopToday() {
  return (
    <div>
      <SceneHeader eyebrow="23 Ağustos Pazar" title="Bugün ne yapılması gerektiği net." detail="Öncelik ve saate göre canlı operasyon görünümü" action="Rezervasyon ekle" />
      <div className="grid grid-cols-4 gap-2 border-b border-surface-border bg-surface-soft/60 p-3 lg:gap-3 lg:p-4">
        <Metric label="Teslim" value="2" meta="Bugün" tone="blue" icon={CarFront} />
        <Metric label="İade" value="3" meta="Bugün" tone="green" icon={ArrowRightLeft} />
        <Metric label="Filo durumu" value="54" meta="10 müsait" tone="navy" icon={CalendarDays} />
        <Metric label="Risk" value="2" meta="Aksiyon bekliyor" tone="amber" icon={AlertTriangle} />
      </div>
      <div className="grid gap-3 p-3 lg:grid-cols-[1.25fr_.75fr] lg:p-4">
        <div className="overflow-hidden rounded-xl border border-surface-border">
          <div className="flex items-center justify-between bg-surface-soft px-3 py-2.5">
            <p className="text-[10px] font-extrabold text-brand-navy">Operasyon kuyruğu</p>
            <span className="rounded-full bg-amber-50 px-2 py-1 text-[8px] font-bold text-amber-700">8 bekleyen</span>
          </div>
          <div className="divide-y divide-surface-border px-3">
            {operations.map((item) => (
              <div key={item.time} className="grid grid-cols-[36px_1fr_auto] items-center gap-2.5 py-3">
                <span className="text-[10px] font-extrabold text-brand-blue">{item.time}</span>
                <div className="min-w-0">
                  <p className="truncate text-[10px] font-bold text-brand-navy lg:text-[11px]">{item.plate}</p>
                  <p className="mt-0.5 truncate text-[8px] text-brand-navy/40 lg:text-[9px]">{item.detail}</p>
                </div>
                <button type="button" className={`rounded-lg px-2.5 py-2 text-[8px] font-bold lg:text-[9px] ${toneStyles[item.tone as keyof typeof toneStyles]}`}>
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-brand-navy p-3.5 text-white">
          <div className="flex items-center justify-between">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-green/15 text-brand-green"><Sparkles className="h-4 w-4" /></span>
            <span className="rounded-full bg-white/10 px-2 py-1 text-[8px] font-bold text-white/55">ÖNERİLEN ODAK</span>
          </div>
          <p className="mt-4 text-xs font-extrabold">Aracı şimdiden atayın</p>
          <p className="mt-1.5 text-[9px] leading-relaxed text-white/50">Teslim yaklaşıyor; rezervasyonda henüz araç bulunmuyor.</p>
          <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-2.5">
            <p className="text-[8px] text-white/40">Uygun araç önerisi</p>
            <p className="mt-1 text-[10px] font-bold">34 ROK 311 · Corolla</p>
          </div>
          <button type="button" className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-green py-2.5 text-[9px] font-bold text-white">
            <CarFront className="h-3.5 w-3.5" /> Öneriyi ata
          </button>
        </div>
      </div>
    </div>
  );
}

function DesktopPlanning() {
  return (
    <div>
      <SceneHeader eyebrow="Canlı filo planı" title="Boşluğu görün, rezervasyonu doğru araca yerleştirin." detail="7 günlük sadeleştirilmiş zaman çizelgesi" action="Rezervasyon ekle" />
      <div className="p-3 lg:p-4">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 rounded-lg border border-surface-border px-3 py-2 text-[9px] text-brand-navy/35">
            <Search className="h-3 w-3" /> Plaka veya araç modeli ara
          </div>
          <div className="flex gap-1.5 text-[8px] font-bold">
            <span className="rounded-full bg-brand-blue/10 px-2 py-1 text-brand-blue">Kirada 38</span>
            <span className="rounded-full bg-brand-green/10 px-2 py-1 text-brand-green-dark">Müsait 24</span>
            <span className="rounded-full bg-amber-50 px-2 py-1 text-amber-700">Bakımda 5</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-surface-border">
          <div className="grid grid-cols-[88px_1fr] border-b border-surface-border bg-surface-soft text-[8px] font-bold text-brand-navy/40 lg:grid-cols-[108px_1fr]">
            <span className="px-3 py-2.5">Araç</span>
            <div className="grid grid-cols-7 text-center">
              {["Bugün", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"].map((day) => <span key={day} className="border-l border-surface-border py-2.5">{day}</span>)}
            </div>
          </div>
          <div className="divide-y divide-surface-border">
            {scheduleRows.map((row) => (
              <div key={row.plate} className="grid grid-cols-[88px_1fr] items-center lg:grid-cols-[108px_1fr]">
                <div className="px-3 py-2">
                  <p className="truncate text-[9px] font-extrabold text-brand-navy lg:text-[10px]">{row.plate}</p>
                  <p className="truncate text-[7px] text-brand-navy/35 lg:text-[8px]">{row.model}</p>
                </div>
                <div
                  className="relative h-12 border-l border-surface-border"
                  style={{ backgroundImage: "repeating-linear-gradient(to right, transparent 0, transparent calc(14.285% - 1px), #e7eaf1 calc(14.285% - 1px), #e7eaf1 14.285%)" }}
                >
                  <button
                    type="button"
                    className={`absolute inset-y-2 flex items-center overflow-hidden rounded-md px-2 text-[8px] font-bold ${toneStyles[row.tone as keyof typeof toneStyles]}`}
                    style={{ left: `${row.left}%`, width: `${row.width}%` }}
                  >
                    <span className="truncate">{row.label}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-xl border border-brand-green/20 bg-brand-green/5 px-3 py-2.5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-green text-white"><Check className="h-3.5 w-3.5" /></span>
            <div><p className="text-[9px] font-bold text-brand-navy">34 ROK 512 seçildi · 27–30 Ağustos</p><p className="text-[8px] text-brand-navy/40">Araç bu tarihlerde müsait</p></div>
          </div>
          <button type="button" className="rounded-lg bg-brand-green px-3 py-2 text-[8px] font-bold text-white">Hızlı rezervasyon</button>
        </div>
      </div>
    </div>
  );
}

function DesktopFocus() {
  return (
    <div>
      <SceneHeader eyebrow="Önerilen odak" title="Ekranda yeri olmayan riskleri, gecikmeden önce görün." detail="Rezervasyon, ödeme, araç, lokasyon ve zaman verileri birlikte değerlendirilir" />
      <div className="grid gap-3 p-3 lg:grid-cols-[1.08fr_.92fr] lg:p-4">
        <div className="space-y-3">
          <FocusCard
            icon={WalletCards}
            tone="amber"
            label="ÖDEME BAKİYESİ"
            title="Teslim tamamlandı, ₺8.400 bakiye bekliyor"
            detail="34 ROK 205 · Rezervasyon #RO-1842"
            action="Ödemeyi görüntüle"
          />
          <FocusCard
            icon={Clock3}
            tone="red"
            label="HAZIRLIK SÜRESİ YETERSİZ"
            title="İki rezervasyon arasında yalnızca 35 dakika var"
            detail="Temizlik ve Girne–Lefkoşa transferi için süre kalmıyor"
            action="Planı düzenle"
          />
          <FocusCard
            icon={CarFront}
            tone="green"
            label="ARAÇ ATANMAMIŞ"
            title="Yarın 10:00 teslimi için uygun araç hazır"
            detail="Öneri: 34 ROK 311 · Toyota Corolla"
            action="Öneriyi ata"
          />
        </div>

        <div className="rounded-xl bg-brand-navy p-4 text-white">
          <span className="inline-flex rounded-full bg-brand-green/15 px-2.5 py-1 text-[8px] font-bold text-brand-green">NEDEN ŞİMDİ?</span>
          <h4 className="mt-4 text-sm font-extrabold">Operasyon verileri aynı noktada buluştu.</h4>
          <p className="mt-2 text-[9px] leading-relaxed text-white/48">Sabit bir belge uyarısı değil; yaklaşan işin koşullarından oluşan aksiyon önerisi.</p>
          <div className="mt-5 space-y-2">
            {[{ icon: CalendarDays, text: "Arka arkaya iki rezervasyon" }, { icon: MapPin, text: "Farklı teslim noktaları" }, { icon: Wrench, text: "Temizlik süresi ihtiyacı" }].map((item, index) => (
              <div key={item.text} className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/5 px-3 py-2.5">
                <item.icon className="h-3.5 w-3.5 text-brand-green" />
                <span className="text-[9px] text-white/65">{item.text}</span>
                {index < 2 && <ArrowRight className="ml-auto h-3 w-3 text-white/25" />}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 rounded-lg bg-brand-green px-3 py-2.5">
            <Sparkles className="h-4 w-4" />
            <p className="text-[9px] font-bold">Gecikme oluşmadan planı değiştirin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value, meta, tone, icon: Icon }: { label: string; value: string; meta: string; tone: "blue" | "green" | "navy" | "amber"; icon: LucideIcon }) {
  const styles = {
    blue: "bg-brand-blue/8 text-brand-blue",
    green: "bg-brand-green/8 text-brand-green-dark",
    navy: "bg-brand-navy/5 text-brand-navy",
    amber: "bg-amber-50 text-amber-700",
  };
  return (
    <div className="rounded-xl border border-surface-border bg-white p-2.5 lg:p-3">
      <div className="flex items-center gap-1.5 text-[8px] font-bold uppercase tracking-[0.08em] text-brand-navy/35"><Icon className="h-3 w-3" /> {label}</div>
      <div className="mt-2 flex items-baseline gap-1.5"><span className={`text-lg font-extrabold lg:text-xl ${styles[tone].split(" ").at(-1)}`}>{value}</span><span className="text-[8px] text-brand-navy/40">{meta}</span></div>
      <div className={`mt-2 h-1 w-full rounded-full ${styles[tone].split(" ")[0]}`}><div className={`h-1 w-2/3 rounded-full ${tone === "blue" ? "bg-brand-blue" : tone === "green" ? "bg-brand-green" : tone === "amber" ? "bg-amber-500" : "bg-brand-navy"}`} /></div>
    </div>
  );
}

function FocusCard({ icon: Icon, tone, label, title, detail, action }: { icon: LucideIcon; tone: "amber" | "red" | "green"; label: string; title: string; detail: string; action: string }) {
  const toneStyle = {
    amber: "bg-amber-50 text-amber-700",
    red: "bg-red-50 text-red-600",
    green: "bg-brand-green/10 text-brand-green-dark",
  }[tone];
  return (
    <div className="flex items-start gap-3 rounded-xl border border-surface-border p-3">
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${toneStyle}`}><Icon className="h-4 w-4" /></span>
      <div className="min-w-0 flex-1"><p className="text-[8px] font-bold tracking-[0.1em] text-brand-navy/35">{label}</p><p className="mt-1 text-[10px] font-extrabold leading-snug text-brand-navy lg:text-[11px]">{title}</p><p className="mt-1 text-[8px] text-brand-navy/40 lg:text-[9px]">{detail}</p></div>
      <button type="button" className="shrink-0 rounded-lg border border-surface-border px-2.5 py-2 text-[8px] font-bold text-brand-blue">{action}</button>
    </div>
  );
}

function MobileScene({ active }: { active: DemoId }) {
  if (active === "planning") return <MobilePlanning />;
  if (active === "focus") return <MobileFocus />;
  return <MobileToday />;
}

function MobileTitle({ eyebrow, title, meta }: { eyebrow: string; title: string; meta: string }) {
  return (
    <div className="mb-4">
      <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-brand-green-dark">{eyebrow}</p>
      <h3 className="mt-1 text-lg font-extrabold leading-tight text-brand-navy">{title}</h3>
      <p className="mt-1 text-[10px] text-brand-navy/40">{meta}</p>
    </div>
  );
}

function MobileToday() {
  return (
    <div>
      <MobileTitle eyebrow="23 Ağustos Pazar" title="Sıradaki işlemler" meta="Öncelik ve saate göre" />
      <div className="mb-3 grid grid-cols-3 gap-2">
        {[{ value: "2", label: "Teslim", color: "text-brand-blue" }, { value: "3", label: "İade", color: "text-brand-green-dark" }, { value: "2", label: "Risk", color: "text-amber-700" }].map((item) => (
          <div key={item.label} className="rounded-xl border border-surface-border bg-white p-2.5"><p className={`text-lg font-extrabold ${item.color}`}>{item.value}</p><p className="text-[8px] text-brand-navy/40">{item.label}</p></div>
        ))}
      </div>
      <div className="space-y-2.5">
        {operations.map((item) => (
          <div key={item.time} className="rounded-xl border border-surface-border bg-white p-3">
            <div className="flex items-start justify-between gap-2"><div><p className="text-[9px] font-extrabold text-brand-blue">{item.time}</p><p className="mt-1 text-[11px] font-extrabold text-brand-navy">{item.plate}</p><p className="mt-0.5 text-[8px] text-brand-navy/40">{item.detail}</p></div><button type="button" className={`rounded-lg px-2.5 py-2 text-[8px] font-bold ${toneStyles[item.tone as keyof typeof toneStyles]}`}>{item.action}</button></div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MobilePlanning() {
  return (
    <div>
      <MobileTitle eyebrow="Hızlı planlama" title="Araç ve tarihi seçin" meta="Boş günlerden rezervasyon oluşturun" />
      <div className="rounded-xl border border-surface-border bg-white p-3">
        <div className="flex items-center justify-between"><div><p className="text-xs font-extrabold text-brand-navy">34 ROK 512</p><p className="text-[9px] text-brand-navy/40">Dacia Duster · Ekonomi</p></div><span className="rounded-full bg-brand-green/10 px-2 py-1 text-[8px] font-bold text-brand-green-dark">MÜSAİT</span></div>
        <div className="mt-4 grid grid-cols-7 gap-1 text-center">
          {["27", "28", "29", "30", "31", "01", "02"].map((day, index) => <button type="button" key={day} className={`rounded-lg py-2 text-[9px] font-bold ${index >= 1 && index <= 3 ? "bg-brand-green text-white" : "bg-surface-soft text-brand-navy/45"}`}>{day}</button>)}
        </div>
        <div className="mt-4 rounded-xl bg-brand-green/5 p-3"><p className="text-[9px] font-bold text-brand-green-dark">28–30 Ağustos seçildi</p><p className="mt-1 text-[8px] text-brand-navy/40">Araç bu tarihlerde müsait ve çakışma bulunmuyor.</p></div>
        <button type="button" className="mt-3 w-full rounded-xl bg-brand-blue py-3 text-[10px] font-bold text-white">Hızlı rezervasyon oluştur</button>
      </div>
      <div className="mt-3 flex items-center gap-2 rounded-xl border border-surface-border bg-white p-3"><ArrowRightLeft className="h-4 w-4 text-brand-blue" /><p className="text-[9px] leading-relaxed text-brand-navy/55">Rezervasyonu daha sonra başka bir uygun araca taşıyabilirsiniz.</p></div>
    </div>
  );
}

function MobileFocus() {
  return (
    <div>
      <MobileTitle eyebrow="Önerilen odak" title="Gecikmeden önce aksiyon alın" meta="Operasyon verilerinden oluşan öneriler" />
      <div className="space-y-3">
        <MobileFocusCard icon={WalletCards} label="ÖDEME BAKİYESİ" title="₺8.400 bakiye bekliyor" detail="Teslim tamamlandı · Rezervasyon #RO-1842" action="Ödemeyi gör" tone="amber" />
        <MobileFocusCard icon={Clock3} label="HAZIRLIK SÜRESİ" title="Yalnızca 35 dakika var" detail="Temizlik ve transfer süresi yetersiz" action="Planı düzenle" tone="red" />
        <MobileFocusCard icon={CarFront} label="ARAÇ ATANMAMIŞ" title="Uygun araç bulundu" detail="34 ROK 311 · Toyota Corolla" action="Öneriyi ata" tone="green" />
      </div>
    </div>
  );
}

function MobileFocusCard({ icon: Icon, label, title, detail, action, tone }: { icon: LucideIcon; label: string; title: string; detail: string; action: string; tone: "amber" | "red" | "green" }) {
  const styles = { amber: "bg-amber-50 text-amber-700", red: "bg-red-50 text-red-600", green: "bg-brand-green/10 text-brand-green-dark" }[tone];
  return (
    <div className="rounded-xl border border-surface-border bg-white p-3">
      <div className="flex items-start gap-2.5"><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${styles}`}><Icon className="h-4 w-4" /></span><div><p className="text-[8px] font-bold tracking-[0.1em] text-brand-navy/35">{label}</p><p className="mt-1 text-[11px] font-extrabold text-brand-navy">{title}</p><p className="mt-1 text-[8px] text-brand-navy/40">{detail}</p></div></div>
      <button type="button" className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-brand-navy py-2.5 text-[9px] font-bold text-white">{action}<ArrowRight className="h-3 w-3" /></button>
    </div>
  );
}
