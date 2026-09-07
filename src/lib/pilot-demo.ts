/** Illustrative booking revenue, not observed customer results or profit. */
export const pilotDemo = {
  period: "Önümüzdeki 7 gün",
  baseline: 168000,
  outstanding: 18400,
  actions: [
    { id: "assignment", title: "3 rezervasyonu uygun sınıftaki araçlara yeniden ata", reason: "Bakım çakışması olan araçların yerine aynı şubedeki uygun alternatifler", calculation: "3 rezervasyon × 4 gün × ₺2.400", amount: 28800, kind: "Korunabilecek gelir" },
    { id: "transfer", title: "Transferi yetişmeyen teslim için hazır alternatif araç kullan", reason: "Müşterinin teslim saatini değiştirmeden 5 günlük rezervasyonu karşıla", calculation: "1 rezervasyon × 5 gün × ₺3.200", amount: 16000, kind: "Korunabilecek gelir" },
    { id: "pricing", title: "2 boş araç için 3 günlük fiyatı %8 indir", reason: "Akıllı fiyat önerisi · Yalnızca iki yeni rezervasyon oluşursa", calculation: "2 araç × 3 gün × ₺1.840 (₺2.000 yerine)", amount: 11040, kind: "Koşullu yeni gelir" },
  ],
};
export const pilotPotential = pilotDemo.actions.reduce((total, item) => total + item.amount, 0);
export const formatTry = (value: number) => `₺${value.toLocaleString("tr-TR")}`;
