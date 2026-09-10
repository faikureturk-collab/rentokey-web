import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

function load(relative) {
  const source = fs.readFileSync(new URL(relative, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } });
  const exports = {};
  vm.runInNewContext(outputText, { exports });
  return exports;
}
const pricing = load("../src/lib/pricing.ts");
const fleet = load("../src/lib/fleet-demo.ts");
const homeOperation = load("../src/lib/home-operation-demo.ts");
const pilot = load("../src/lib/pilot-demo.ts");

test("70 araç: aylık, yıllık karşılık, toplam ve döküm tutarlılığı", () => {
  const monthly = pricing.computeMonthlyPrice(70);
  assert.equal(monthly, 7240);
  assert.equal(monthly * (1 - pricing.YEARLY_DISCOUNT), 5792);
  assert.equal(monthly * (1 - pricing.YEARLY_DISCOUNT) * 12, 69504);
  assert.equal(pricing.computePriceBreakdown(70).reduce((sum, item) => sum + item.amount, 0), monthly);
});
test("Kademelerde sıçrama yok; geçersiz araç sayıları reddedilir", () => {
  for (const [count, delta] of [[16, 100], [41, 75], [81, 65]]) assert.equal(pricing.computeMonthlyPrice(count) - pricing.computeMonthlyPrice(count - 1), delta);
  for (const count of [0, -1, 151, 1.5, NaN, Infinity]) assert.equal(pricing.computeMonthlyPrice(count), null);
  for (let count = 1; count <= 150; count++) assert.equal(pricing.computePriceBreakdown(count).reduce((sum, item) => sum + item.amount, 0), pricing.computeMonthlyPrice(count));
});
test("Örnek filo 70 benzersiz araç ve tutarlı durum sayıları içerir", () => {
  assert.equal(fleet.fleetVehicles.length, 70);
  assert.equal(new Set(fleet.fleetVehicles.map((item) => item.plate)).size, 70);
  for (const [status, count] of [["Kirada", 54], ["Müsait", 10], ["Bakımda", 4], ["Hazırlanıyor", 2]]) assert.equal(fleet.fleetVehicles.filter((item) => item.status === status).length, count);
});
test("Ana sayfa operasyon demosu 20 benzersiz araç ve geçerli rezervasyonlar içerir", () => {
  assert.equal(homeOperation.homeDemoVehicles.length, 20);
  assert.equal(new Set(homeOperation.homeDemoVehicles.map((item) => item.plate)).size, 20);
  const plates = new Set(homeOperation.homeDemoVehicles.map((item) => item.plate));
  for (const booking of homeOperation.homeDemoBookings) {
    assert.equal(plates.has(booking.plate), true);
    assert.ok(booking.start >= 0 && booking.start + booking.span <= 14);
  }
});
test("Çakışma uygun aynı sınıf/şube aracına çözülür, tarihler korunur", () => {
  const booking = fleet.fleetBookings.find((item) => item.id === "R-2401");
  assert.ok(fleet.fleetBookings.some((other) => other.id !== booking.id && other.vehicle === booking.vehicle && fleet.overlaps(other, booking)));
  const candidate = fleet.fleetVehicles.find((vehicle) => fleet.canAssign(vehicle, booking, fleet.fleetBookings));
  assert.equal(candidate.id, 2);
  const updated = fleet.fleetBookings.map((item) => item.id === booking.id ? { ...item, vehicle: candidate.id } : item);
  assert.equal(updated.find((item) => item.id === booking.id).start, booking.start);
  assert.equal(updated.find((item) => item.id === booking.id).end, booking.end);
  assert.equal(updated.filter((item) => item.vehicle === candidate.id && fleet.overlaps(item, booking)).length, 1);
  assert.equal(fleet.canAssign({ ...candidate, category: "SUV" }, booking, fleet.fleetBookings), false);
  assert.equal(fleet.canAssign({ ...candidate, branch: "Ercan" }, booking, fleet.fleetBookings), false);
  assert.equal(fleet.canAssign({ ...candidate, status: "Bakımda" }, booking, fleet.fleetBookings), false);
});
test("Pilot geliri tahsilattan ayrıdır ve bütün seçim toplamları geçerlidir", () => {
  assert.equal(pilot.pilotDemo.actions[0].amount, 3 * 4 * 2400);
  assert.equal(pilot.pilotDemo.actions[1].amount, 5 * 3200);
  assert.equal(pilot.pilotDemo.actions[2].amount, 2 * 3 * 2000 * .92);
  assert.equal(pilot.pilotPotential, 55840);
  assert.equal(pilot.pilotDemo.baseline + pilot.pilotPotential, 223840);
  for (let mask = 0; mask < 8; mask++) {
    const total = pilot.pilotDemo.actions.filter((_, index) => mask & 1 << index).reduce((sum, item) => sum + item.amount, 0);
    assert.ok(total >= 0 && total <= 55840);
  }
});
