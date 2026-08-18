"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";

const reservationRows = [
  { plate: "34 ABC 123", color: "bg-emerald-500", left: 8, width: 26 },
  { plate: "34 DEF 456", color: "bg-sky-500", left: 42, width: 30 },
  { plate: "34 GHI 789", color: "bg-amber-500", left: 20, width: 24 },
  { plate: "34 JKL 012", color: "bg-violet-500", left: 46, width: 28 },
];

const overviewStats = [
  { label: "Toplam Araç", value: "128" },
  { label: "Dolu Araç", value: "96" },
  { label: "Bugünkü Rez.", value: "24" },
  { label: "Doluluk Oranı", value: "%75" },
];

const deliveryItems = [
  { name: "Azra Y. — 34 ABC 123", time: "Bugün 10:00", done: true },
  { name: "Mehmet K. — 06 DEF 456", time: "Bugün 11:30", done: true },
  { name: "Selin D. — 34 GHI 789", time: "Bugün 14:00", done: false },
  { name: "Ozan T. — 34 JKL 012", time: "Bugün 16:15", done: false },
];

const reportBars = [32, 52, 40, 68, 58, 78];

const userRows = [
  { name: "Azra Yılmaz", role: "Yönetici", color: "bg-brand-green" },
  { name: "Mehmet Kaya", role: "Operasyon", color: "bg-brand-blue" },
  { name: "Selin Demir", role: "Saha ekibi", color: "bg-violet-500" },
  { name: "Ozan Türk", role: "Muhasebe", color: "bg-amber-500" },
];

function PanelHeader() {
  return (
    <div className="mb-4 flex items-center justify-between">
      <span className="h-2.5 w-2.5 rounded-full bg-brand-navy/10" />
      <div className="h-8 w-40 rounded-lg bg-surface-soft" />
      <div className="flex gap-1.5">
        <span className="h-6 w-6 rounded-md bg-surface-soft" />
        <span className="h-6 w-6 rounded-md bg-surface-soft" />
      </div>
    </div>
  );
}

const slides = [
  {
    label: "Rezervasyon takvimi",
    content: (
      <div className="space-y-3">
        {reservationRows.map((row) => (
          <div key={row.plate} className="flex items-center gap-3">
            <span className="w-20 shrink-0 text-xs font-medium text-brand-navy/45">
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
    ),
  },
  {
    label: "Genel bakış",
    content: (
      <div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {overviewStats.map((stat) => (
            <div key={stat.label} className="rounded-xl border border-surface-border p-3">
              <p className="truncate text-[11px] text-brand-navy/45">{stat.label}</p>
              <p className="mt-1 text-lg font-extrabold text-brand-navy">{stat.value}</p>
            </div>
          ))}
        </div>
        <svg viewBox="0 0 100 30" className="mt-4 h-16 w-full" preserveAspectRatio="none">
          <polyline
            points="0,26 15,20 30,22 45,12 60,15 75,6 100,4"
            fill="none"
            stroke="var(--color-brand-blue)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    label: "Mobil saha",
    content: (
      <div className="space-y-2.5">
        {deliveryItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-xl border border-surface-border px-3.5 py-2.5"
          >
            <div className="flex items-center gap-2.5">
              <CheckCircle2
                className={`h-4 w-4 shrink-0 ${item.done ? "text-brand-green" : "text-brand-navy/20"}`}
              />
              <span className="text-xs font-medium text-brand-navy/75">{item.name}</span>
            </div>
            <span className="text-[11px] text-brand-navy/40">{item.time}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: "Raporlama",
    content: (
      <div className="flex items-center gap-6">
        <div className="flex h-36 flex-1 items-end gap-2.5">
          {reportBars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-md bg-brand-green/80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <svg viewBox="0 0 36 36" className="h-28 w-28 shrink-0">
          <circle cx="18" cy="18" r="16" fill="#E7EAF1" />
          <path d="M18 2 A16 16 0 0 1 33 14 L18 18Z" fill="#18B878" />
          <path d="M18 2 A16 16 0 0 1 18 34 L18 18Z" fill="#1769E0" />
        </svg>
      </div>
    ),
  },
  {
    label: "Kullanıcılar",
    content: (
      <div className="space-y-2.5">
        {userRows.map((user) => (
          <div
            key={user.name}
            className="flex items-center justify-between rounded-xl border border-surface-border px-3.5 py-2.5"
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
    ),
  },
];

const AUTO_ADVANCE_MS = 4000;

export default function ShowcaseCarousel() {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [active]);

  function goTo(index: number) {
    setActive(index);
  }

  return (
    <div className="relative">
      <div className="rounded-2xl border border-surface-border bg-white p-5 shadow-xl shadow-brand-navy/5">
        <PanelHeader />

        <div className="relative min-h-[190px] sm:min-h-[170px]">
          {slides.map((slide, i) => (
            <div
              key={slide.label}
              className={`transition-opacity duration-500 ease-in-out ${
                i === active
                  ? "relative opacity-100"
                  : "pointer-events-none absolute inset-0 opacity-0"
              }`}
              aria-hidden={i !== active}
            >
              {slide.content}
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-1.5">
          {slides.map((slide, i) => (
            <button
              key={slide.label}
              onClick={() => goTo(i)}
              aria-label={slide.label}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-5 bg-brand-green" : "w-1.5 bg-surface-border hover:bg-brand-navy/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
