import type { FaqItem } from "./faq";

export const englishFeatures = [
  ["Reservations & planning", "A live vehicle timeline, suitable vehicle suggestions and visibility into booking conflicts."],
  ["Pickups & returns", "Keep the next handover, return location and outstanding tasks together. Desktop planning, mobile operations."],
  ["Recommended Focus", "Spot incomplete payments and tight preparation or transfer windows before they disrupt the next booking."],
  ["Fleet & maintenance", "Track vehicles, maintenance records and insurance or document expiry alerts in one place."],
  ["Teams & permissions", "Unlimited users and branches, with access matched to each role, including corporate partners."],
  ["Finance & reporting", "Follow expenses, collections and occupancy. Review your operation by vehicle and branch."],
] as const;

export const englishFaq: FaqItem[] = [
  { question: "How does the 21-day free trial work?", answer: "Create an account with your name, email and password, then verify your email. Set up your company and fleet in the app. No credit card is required, and there is no automatic charge at the end of the trial." },
  { question: "Are all core features included?", answer: "Yes. Core features are the same for every fleet, with unlimited users and branches. The subscription price depends on vehicle count. RentOkey Pilot and other optional modules are sold separately." },
  { question: "Can you help us move our existing data?", answer: "You can import customer, reservation, fleet, expense and maintenance records from Excel or CSV. Request help with your first import within 48 hours of creating your trial account. This is the request window, not a promise to complete migration within 48 hours. Completion depends on file scope and data quality." },
  { question: "Is RentOkey Pilot included in the trial or base price?", answer: "Pilot is a separately purchased add-on and includes smart pricing suggestions. Ask our team about pricing and the scope available during your trial. The base subscription does not include Pilot." },
  { question: "Does Pilot make changes without my approval?", answer: "No. Review the suggested actions, reasons and estimated impact, then choose what to approve. Pilot only applies changes you confirm. Revenue estimates are not guaranteed income or profit." },
  { question: "Is English support available?", answer: "Yes. Our team provides support in Turkish and English by email and WhatsApp, seven days a week from 09:00 to 22:00 Türkiye time (UTC+3). During support hours we aim to give an initial response within one hour for operation-stopping issues and within four hours for other technical or usage questions. Resolution time depends on the issue.", whatsapp: true },
  { question: "Where is our data stored?", answer: "Primary application data is stored through Supabase on AWS in Ireland (eu-west-1), within the European Union. Data is protected in transit with HTTPS/TLS and encrypted at rest. Daily database backups are retained for seven days." },
  { question: "Can other rental companies see our records?", answer: "Company accounts are separated. Users access their own company data according to their permissions. Authorised RentOkey staff may access the necessary information for limited support or security investigations." },
  { question: "Which currency will we pay in?", answer: "The calculator shows Turkish lira (TRY), excluding VAT. Annual billing receives a 20% discount. Payments and subscription changes are currently managed with our team; there is no automatic card charge." },
];

export const englishPilotActions = {
  assignment: { title: "Reassign 3 bookings to suitable vehicles", reason: "Use available vehicles of the same class and branch to resolve maintenance conflicts.", calculation: "3 bookings × 4 days × TRY 2,400" },
  transfer: { title: "Use a ready alternative for a tight transfer", reason: "Fulfil a five-day booking without moving the customer's pickup time.", calculation: "1 booking × 5 days × TRY 3,200" },
  pricing: { title: "Reduce the three-day rate for 2 idle cars by 8%", reason: "Conditional on securing two new bookings. Smart pricing is part of Pilot.", calculation: "2 cars × 3 days × TRY 1,840" },
} as const;
