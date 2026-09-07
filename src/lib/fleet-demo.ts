export type FleetVehicle = { id: number; plate: string; model: string; category: string; branch: string; status: string };
export type FleetBooking = { id: string; vehicle: number; start: number; end: number; label: string };
export const fleetCategories = ["Ekonomi", "Konfor", "SUV"];
export const fleetBranches = ["Girne", "Ercan", "Lefkoşa"];
export const fleetVehicles: FleetVehicle[] = Array.from({ length: 70 }, (_, index) => ({
  id: index + 1,
  plate: `ZRO ${String(index + 1).padStart(3, "0")}`,
  model: index < 30 ? (index % 2 ? "Toyota Yaris" : "Renault Clio") : index < 55 ? "Toyota Corolla" : "Peugeot 2008",
  category: index < 30 ? "Ekonomi" : index < 55 ? "Konfor" : "SUV",
  branch: fleetBranches[Math.floor(index / 2) % 3],
  status: index === 1 || index >= 55 && index < 64 ? "Müsait" : index >= 64 && index < 68 ? "Bakımda" : index >= 68 ? "Hazırlanıyor" : "Kirada",
}));
export const fleetBookings: FleetBooking[] = fleetVehicles.flatMap((vehicle) =>
  vehicle.status === "Kirada" ? [{ id: `R-${1000 + vehicle.id}`, vehicle: vehicle.id, start: 0, end: 2 + vehicle.id % 4, label: vehicle.id % 9 === 0 ? "Aylık kiralama" : `R-${1000 + vehicle.id}` }] :
  vehicle.status === "Müsait" && vehicle.id !== 2 ? [{ id: `R-${2000 + vehicle.id}`, vehicle: vehicle.id, start: 4, end: 7, label: "Yaklaşan" }] : []
);
fleetBookings.push({ id: "R-2401", vehicle: 1, start: 2, end: 5, label: "R-2401 · Çakışma" });
export function overlaps(a: Pick<FleetBooking, "start" | "end">, b: Pick<FleetBooking, "start" | "end">) { return a.start < b.end && b.start < a.end; }
export function canAssign(target: FleetVehicle, booking: FleetBooking, bookings: FleetBooking[]) {
  const source = fleetVehicles.find((vehicle) => vehicle.id === booking.vehicle)!;
  return target.id !== source.id && target.category === source.category && target.branch === source.branch &&
    target.status !== "Bakımda" && target.status !== "Hazırlanıyor" &&
    !bookings.some((other) => other.id !== booking.id && other.vehicle === target.id && overlaps(other, booking));
}
