"use client";

import { useState } from "react";
import { canAssign, fleetVehicles, fleetBookings, fleetCategories, fleetBranches } from "@/lib/fleet-demo";

const labels: Record<string,string> = { Ekonomi: "Economy", Konfor: "Comfort", SUV: "SUV", Kirada: "On rent", Müsait: "Available", Bakımda: "Maintenance", Hazırlanıyor: "Preparing" };

export default function EnglishFleetDemo() {
  const [query,setQuery] = useState("");
  const [category,setCategory] = useState("");
  const [branch,setBranch] = useState("");
  const [status,setStatus] = useState("");
  const [bookings,setBookings] = useState(fleetBookings);
  const [confirm,setConfirm] = useState(false);
  const conflict = bookings.find(b => b.id === "R-2401")!;
  const target = fleetVehicles[1];
  const resolved = conflict.vehicle === target.id;
  const vehicles = fleetVehicles.filter(v => `${v.plate} ${v.model}`.toLowerCase().includes(query.toLowerCase()) && (!category || v.category === category) && (!branch || v.branch === branch) && (!status || v.status === status));
  return <div className="overflow-hidden rounded-3xl border border-surface-border bg-white shadow-xl shadow-brand-navy/5">
    <div className="border-b border-surface-border p-5 sm:p-6"><div className="flex flex-wrap justify-between gap-3"><h3 className="text-lg font-extrabold">Reservation timeline</h3><span className="text-xs font-semibold text-brand-navy/50">70 synthetic vehicles · illustrative week</span></div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_auto]"><input aria-label="Search vehicles" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search plate or model" className="form-control" /><select aria-label="Vehicle class" value={category} onChange={e => setCategory(e.target.value)} className="form-control"><option value="">All classes</option>{fleetCategories.map(c => <option key={c} value={c}>{labels[c]}</option>)}</select><select aria-label="Branch" value={branch} onChange={e => setBranch(e.target.value)} className="form-control"><option value="">All branches</option>{fleetBranches.map(b => <option key={b}>{b}</option>)}</select><select aria-label="Vehicle status" value={status} onChange={e => setStatus(e.target.value)} className="form-control"><option value="">All statuses</option>{["Kirada","Müsait","Bakımda","Hazırlanıyor"].map(s => <option key={s} value={s}>{labels[s]}</option>)}</select><button type="button" onClick={() => {setQuery("");setCategory("");setBranch("");setStatus("");}} className="rounded-xl border border-surface-border px-4 py-2 text-sm font-semibold">Clear</button></div>
    </div>
    <div className="max-h-[420px] overflow-auto" tabIndex={0} role="region" aria-label="Scrollable vehicle timeline">
      <div className="min-w-[780px] text-xs"><div className="sticky top-0 z-20 grid grid-cols-[190px_1fr] border-b border-surface-border bg-surface-soft font-bold"><div className="p-3">Vehicle / branch</div><div className="grid grid-cols-7">{["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(day => <div key={day} className="border-l border-surface-border p-3 text-center">{day}</div>)}</div></div>
        {vehicles.map(v => <div key={v.id} className="grid grid-cols-[190px_1fr] border-b border-surface-border"><div className="sticky left-0 z-10 bg-white px-3 py-2"><p className="font-bold">{v.plate} <span className="ml-2 font-normal text-brand-navy/50">{labels[v.status]}</span></p><p className="mt-1 text-[10px] text-brand-navy/50">{v.model} · {v.branch}</p></div><div className="relative min-h-14 bg-[linear-gradient(to_right,transparent_calc(100%-1px),#e2e8f0_0)] bg-[length:14.2857%_100%]">{bookings.filter(b => b.vehicle === v.id).map(b => <div key={b.id} style={{left:`${b.start / 7 * 100}%`,width:`${(b.end - b.start) / 7 * 100}%`,top:b.id === "R-2401" && !resolved?28:5}} className={`absolute truncate rounded-md px-2 py-1 text-[10px] font-semibold text-white ${b.id === "R-2401" && !resolved ? "bg-red-600" : b.start > 0 ? "bg-emerald-600" : "bg-brand-blue"}`}>{b.id}{b.label === "Aylık kiralama" ? " · Monthly rental" : b.id === "R-2401" && !resolved ? " · Conflict" : ""}</div>)}</div></div>)}
        {!vehicles.length && <p className="p-6">No vehicles match these filters.</p>}
      </div>
    </div>
    <div className="flex flex-wrap items-center justify-between gap-4 bg-surface-soft p-5"><p role="status" className="text-sm">{resolved ? "R-2401 reassigned in this demo. No real data changed." : "R-2401 overlaps another booking. A suitable alternative is available."} <span className="text-brand-navy/50">{vehicles.length} of 70 vehicles shown.</span></p><button type="button" onClick={() => resolved ? (setBookings(fleetBookings),setConfirm(false)) : setConfirm(true)} className="rounded-full bg-brand-navy px-4 py-3 text-sm font-bold text-white">{resolved ? "Reset demo" : "Review alternative"}</button></div>
    {confirm && <div className="border-t border-surface-border p-5"><p className="text-sm">Move R-2401 to ZRO 002? Same class and branch; the booking period is available. This changes demo data only.</p><div className="mt-3 flex gap-3"><button type="button" onClick={() => {if(canAssign(target,conflict,bookings))setBookings(s => s.map(b => b.id === conflict.id ? {...b,vehicle:target.id} : b));setConfirm(false);}} className="rounded-full bg-brand-green-dark px-5 py-3 text-sm font-bold text-white">Confirm reassignment</button><button type="button" onClick={() => setConfirm(false)} className="px-4 text-sm">Cancel</button></div></div>}
  </div>;
}
