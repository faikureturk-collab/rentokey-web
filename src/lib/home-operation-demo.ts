export type HomeDemoVehicle = {
  plate: string;
  model: string;
  category: "Ekonomi" | "Konfor" | "SUV";
  status: "Kirada" | "Müsait" | "Bakımda" | "Hazırlanıyor";
  branch: "Merkez" | "Havalimanı" | "Girne";
};

export type HomeDemoBooking = {
  plate: string;
  labelTr: string;
  labelEn: string;
  start: number;
  span: number;
  tone: "blue" | "green" | "navy" | "amber";
};

export const homeDemoVehicles: HomeDemoVehicle[] = [
  { plate: "ROK 101", model: "Toyota Yaris", category: "Ekonomi", status: "Kirada", branch: "Merkez" },
  { plate: "ROK 102", model: "Renault Clio", category: "Ekonomi", status: "Kirada", branch: "Havalimanı" },
  { plate: "ROK 103", model: "Fiat Egea", category: "Ekonomi", status: "Kirada", branch: "Merkez" },
  { plate: "ROK 104", model: "Hyundai i20", category: "Ekonomi", status: "Müsait", branch: "Havalimanı" },
  { plate: "ROK 105", model: "Peugeot 208", category: "Ekonomi", status: "Kirada", branch: "Havalimanı" },
  { plate: "ROK 106", model: "Citroën C3", category: "Ekonomi", status: "Kirada", branch: "Merkez" },
  { plate: "ROK 107", model: "Opel Corsa", category: "Ekonomi", status: "Hazırlanıyor", branch: "Girne" },
  { plate: "ROK 108", model: "Dacia Sandero", category: "Ekonomi", status: "Kirada", branch: "Merkez" },
  { plate: "ROK 201", model: "Toyota Corolla", category: "Konfor", status: "Kirada", branch: "Havalimanı" },
  { plate: "ROK 202", model: "Skoda Octavia", category: "Konfor", status: "Kirada", branch: "Merkez" },
  { plate: "ROK 203", model: "VW Passat", category: "Konfor", status: "Bakımda", branch: "Girne" },
  { plate: "ROK 204", model: "Honda Civic", category: "Konfor", status: "Kirada", branch: "Havalimanı" },
  { plate: "ROK 205", model: "Renault Megane", category: "Konfor", status: "Müsait", branch: "Merkez" },
  { plate: "ROK 206", model: "Peugeot 408", category: "Konfor", status: "Kirada", branch: "Girne" },
  { plate: "ROK 301", model: "Peugeot 2008", category: "SUV", status: "Kirada", branch: "Merkez" },
  { plate: "ROK 302", model: "Nissan Qashqai", category: "SUV", status: "Kirada", branch: "Havalimanı" },
  { plate: "ROK 303", model: "Hyundai Tucson", category: "SUV", status: "Müsait", branch: "Girne" },
  { plate: "ROK 304", model: "Dacia Duster", category: "SUV", status: "Kirada", branch: "Merkez" },
  { plate: "ROK 305", model: "Toyota C-HR", category: "SUV", status: "Kirada", branch: "Havalimanı" },
  { plate: "ROK 306", model: "Kia Sportage", category: "SUV", status: "Kirada", branch: "Girne" },
];

export const homeDemoBookings: HomeDemoBooking[] = [
  { plate: "ROK 101", labelTr: "R-2510 · Kiralama", labelEn: "R-2510 · Rental", start: 0, span: 4, tone: "blue" },
  { plate: "ROK 102", labelTr: "R-2511 · Kiralama", labelEn: "R-2511 · Rental", start: 2, span: 4, tone: "green" },
  { plate: "ROK 103", labelTr: "Aylık kiralama", labelEn: "Monthly rental", start: 0, span: 12, tone: "navy" },
  { plate: "ROK 105", labelTr: "R-2514 · Kiralama", labelEn: "R-2514 · Rental", start: 4, span: 5, tone: "green" },
  { plate: "ROK 106", labelTr: "R-2516 · Kiralama", labelEn: "R-2516 · Rental", start: 0, span: 7, tone: "blue" },
  { plate: "ROK 107", labelTr: "Temizlik / hazırlık", labelEn: "Cleaning / preparation", start: 0, span: 2, tone: "amber" },
  { plate: "ROK 108", labelTr: "R-2518 · Kiralama", labelEn: "R-2518 · Rental", start: 3, span: 6, tone: "blue" },
  { plate: "ROK 201", labelTr: "R-2520 · Kiralama", labelEn: "R-2520 · Rental", start: 1, span: 8, tone: "green" },
  { plate: "ROK 202", labelTr: "R-2521 · Kiralama", labelEn: "R-2521 · Rental", start: 5, span: 5, tone: "blue" },
  { plate: "ROK 203", labelTr: "Periyodik bakım", labelEn: "Scheduled maintenance", start: 1, span: 3, tone: "amber" },
  { plate: "ROK 204", labelTr: "R-2523 · Kiralama", labelEn: "R-2523 · Rental", start: 0, span: 6, tone: "navy" },
  { plate: "ROK 206", labelTr: "R-2525 · Kiralama", labelEn: "R-2525 · Rental", start: 7, span: 5, tone: "green" },
  { plate: "ROK 301", labelTr: "R-2530 · Kiralama", labelEn: "R-2530 · Rental", start: 0, span: 10, tone: "blue" },
  { plate: "ROK 302", labelTr: "R-2531 · Kiralama", labelEn: "R-2531 · Rental", start: 3, span: 7, tone: "green" },
  { plate: "ROK 304", labelTr: "R-2533 · Kiralama", labelEn: "R-2533 · Rental", start: 0, span: 5, tone: "blue" },
  { plate: "ROK 305", labelTr: "R-2534 · Kiralama", labelEn: "R-2534 · Rental", start: 8, span: 4, tone: "green" },
  { plate: "ROK 306", labelTr: "Aylık kiralama", labelEn: "Monthly rental", start: 0, span: 14, tone: "navy" },
];
