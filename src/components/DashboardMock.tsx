import {
  LayoutGrid,
  CalendarClock,
  CalendarDays,
  Car,
  Truck,
  BarChart3,
  Users,
  UserCog,
  Settings,
  Search,
  Bell,
  Menu,
} from "lucide-react";
import Image from "next/image";

const navItems = [
  { label: "Genel Bakış", icon: LayoutGrid, active: true },
  { label: "Rezervasyonlar", icon: CalendarClock },
  { label: "Takvim", icon: CalendarDays },
  { label: "Araçlar", icon: Car },
  { label: "Teslimatlar", icon: Truck },
  { label: "Raporlar", icon: BarChart3 },
  { label: "Müşteriler", icon: Users },
  { label: "Kullanıcılar", icon: UserCog },
  { label: "Ayarlar", icon: Settings },
];

const stats = [
  { label: "Toplam Araç", value: "128" },
  { label: "Dolu Araç", value: "96" },
  { label: "Bugünkü Rezervasyon", value: "24" },
  { label: "Doluluk Oranı", value: "%75" },
];

const ganttRows = [
  { plate: "34 ABC 123", color: "bg-emerald-500", left: 6, width: 24 },
  { plate: "06 DEF 456", color: "bg-sky-500", left: 22, width: 20 },
  { plate: "34 GHI 789", color: "bg-teal-500", left: 34, width: 24 },
  { plate: "34 JKL 012", color: "bg-amber-500", left: 40, width: 22 },
  { plate: "07 MNO 345", color: "bg-violet-500", left: 54, width: 26 },
];

const deliveries = [
  { name: "AZRA Y.", plate: "34 ABC 123", time: "Bugün 10:00" },
  { name: "MEHMET K.", plate: "06 DEF 456", time: "Bugün 11:30" },
  { name: "SELİN D.", plate: "34 GHI 789", time: "Bugün 14:00" },
];

export default function DashboardMock() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-[26px] border border-surface-border bg-white shadow-2xl shadow-brand-navy/10">
        <div className="flex">
          <aside className="hidden w-[170px] shrink-0 bg-brand-navy-deep px-3 py-4 sm:block">
            <div className="mb-4 flex items-center gap-1.5 px-1.5">
              <Image
                src="/logo/rentokey-icon-white.png"
                alt=""
                width={19}
                height={14}
                aria-hidden
              />
              <span className="text-[13px] font-bold text-white">
                Rent <span className="text-brand-green">Okey</span>
              </span>
            </div>
            <nav className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11px] font-medium ${
                    item.active
                      ? "bg-brand-green text-white"
                      : "text-white/55"
                  }`}
                >
                  <item.icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2} />
                  <span className="truncate">{item.label}</span>
                </div>
              ))}
            </nav>
          </aside>

          <div className="flex-1 min-w-0 bg-surface-soft/40 p-4 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-[15px] font-bold text-brand-navy">Genel Bakış</h3>
              <div className="flex items-center gap-2 text-brand-navy/50">
                <Search className="h-3.5 w-3.5" />
                <Bell className="h-3.5 w-3.5" />
                <Menu className="h-3.5 w-3.5 sm:hidden" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-surface-border bg-white p-2.5"
                >
                  <p className="truncate text-[10px] text-brand-navy/50">{stat.label}</p>
                  <p className="mt-1 text-base font-bold text-brand-navy">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 rounded-xl border border-surface-border bg-white p-3">
              <p className="mb-3 text-[11px] font-semibold text-brand-navy">
                Canlı Gantt Zaman Çizelgesi
              </p>
              <div className="space-y-2">
                {ganttRows.map((row) => (
                  <div key={row.plate} className="flex items-center gap-2">
                    <span className="hidden w-16 shrink-0 text-[9px] font-medium text-brand-navy/50 sm:block">
                      {row.plate}
                    </span>
                    <div className="relative h-4 w-full rounded-full bg-surface-soft">
                      <div
                        className={`absolute h-4 rounded-full ${row.color}`}
                        style={{ left: `${row.left}%`, width: `${row.width}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <div className="rounded-xl border border-surface-border bg-white p-3">
                <p className="mb-2 text-[11px] font-semibold text-brand-navy">
                  Yaklaşan Teslimatlar
                </p>
                <div className="space-y-2">
                  {deliveries.map((d) => (
                    <div key={d.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-[8px] font-bold text-brand-green">
                          {d.name.charAt(0)}
                        </span>
                        <span className="truncate text-[10px] font-medium text-brand-navy/70">
                          {d.name}
                        </span>
                      </div>
                      <span className="shrink-0 text-[9px] text-brand-navy/40">{d.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden rounded-xl border border-surface-border bg-white p-3 sm:block">
                <div className="mb-1 flex items-center justify-between">
                  <p className="text-[11px] font-semibold text-brand-navy">Doluluk Oranı</p>
                  <p className="text-[11px] font-bold text-brand-green">%75</p>
                </div>
                <svg viewBox="0 0 100 30" className="h-10 w-full" preserveAspectRatio="none">
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
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -right-3 hidden w-[130px] rounded-[22px] border-4 border-brand-navy-deep bg-brand-navy-deep shadow-xl sm:block md:w-[150px]">
        <div className="overflow-hidden rounded-[16px] bg-white">
          <div className="bg-brand-navy-deep px-3 py-2.5">
            <p className="text-[10px] font-semibold text-white">Genel Bakış</p>
          </div>
          <div className="space-y-1.5 p-2">
            <div className="flex items-center justify-between rounded-lg bg-surface-soft px-2 py-1.5">
              <span className="text-[8px] text-brand-navy/50">Dolu Araç</span>
              <span className="text-[9px] font-bold text-brand-navy">%75</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-surface-soft px-2 py-1.5">
              <span className="text-[8px] text-brand-navy/50">Bugünkü Rez.</span>
              <span className="text-[9px] font-bold text-brand-navy">24</span>
            </div>
            <p className="pt-1 text-[8px] font-semibold text-brand-navy/70">
              Yaklaşan Teslimatlar
            </p>
            {deliveries.slice(0, 2).map((d) => (
              <div key={d.name} className="flex items-center gap-1 px-0.5">
                <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-[6px] font-bold text-brand-green">
                  {d.name.charAt(0)}
                </span>
                <span className="truncate text-[7px] text-brand-navy/60">{d.name}</span>
              </div>
            ))}
            <div className="flex justify-center gap-1.5 pt-2 pb-0.5">
              {[Menu, Car, CalendarDays].map((Icon, i) => (
                <span
                  key={i}
                  className={`flex h-4 w-4 items-center justify-center rounded-full ${
                    i === 1 ? "bg-brand-green text-white" : "text-brand-navy/30"
                  }`}
                >
                  <Icon className="h-2.5 w-2.5" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
