import Link from "next/link";
import { AlertTriangle, ArrowRight, CalendarClock, Check, Info, Minus } from "lucide-react";
import Button from "@/components/Button";
import CtaBanner from "@/components/CtaBanner";
import StructuredData from "@/components/StructuredData";
import { createPageMetadata } from "@/lib/seo";
import { englishCompliancePageStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Türkiye’s 2027 Car Rental Regulation — Compliance Page",
  description:
    "The regulation takes effect on 1 January 2027 and the authorisation certificate deadline is 1 July 2027. Requirement by requirement: what RentOkey does, and what it does not.",
  path: "/en/turkey-car-rental-regulation-2027",
});

const RESMI_GAZETE = "https://www.resmigazete.gov.tr/eskiler/2026/08/20260815-1.htm";
const BAKANLIK =
  "https://aydin.ticaret.gov.tr/haberler/ticaret-bakanligi-kiralik-araclarda-yetki-belgesi-arac-yasi-ve-kilometresi-depozito-tuketici-haklari-ve-filo-standartlarini-yeniden-duzenlendi";

const timeline = [
  { date: "1 January 2027", title: "The regulation takes effect", detail: "Requirements covering rental activity apply from this date onwards." },
  { date: "1 January 2027", title: "Rental Information System", detail: "The Motor Vehicle Rental Information System is expected to be established by this date." },
  { date: "1 July 2027", title: "Authorisation certificate deadline", detail: "The transition period for existing businesses to obtain an authorisation certificate ends here." },
  { date: "1 January 2028", title: "Minimum fleet requirements", detail: "The compliance window for minimum vehicle count and vehicle quality conditions." },
];

type Requirement = {
  title: string;
  detail: string;
  product: string | null;
  business: string;
};

const requirements: Requirement[] = [
  {
    title: "Vehicle age and mileage limits",
    detail: "Except for classic vehicles, cars older than 6 years cannot be rented out; the limit is 180,000 km, and 300,000 km for electric vehicles.",
    product: "Keeps vehicle age and current mileage in the fleet record, and lets you see every vehicle approaching the limit in one list.",
    business: "Deciding on vehicle renewal, disposal and investment.",
  },
  {
    title: "Maintenance and technical condition",
    detail: "Vehicles whose periodic maintenance is overdue, or that carry a major damage record, cannot be rented out.",
    product: "Shows maintenance records and upcoming maintenance or inspection dates alongside the reservation plan.",
    business: "Actually carrying out and documenting the maintenance.",
  },
  {
    title: "Deposit ceiling",
    detail: "For rentals of 1–6 days the deposit may not exceed 3 days of the rental fee; for 7–29 days it may not exceed 7 days of the rental fee.",
    product: "Tracks the deposit as a separate item from the rental fee and the outstanding balance.",
    business: "Updating contracts and collection policy to match these ceilings.",
  },
  {
    title: "Deposit refund window",
    detail: "The deposit must be refunded within 7 days after the vehicle is returned.",
    product: "Tracks the window from the return date and keeps pending refunds visible.",
    business: "Actually making the payment.",
  },
  {
    title: "Record keeping and reporting",
    detail: "Businesses are expected to keep records of rental activity and report vehicle tracking data through the information system.",
    product: "Keeps customer, vehicle, reservation and contract records in one place, complete and exportable to Excel.",
    business: "Filing the report and taking responsibility for the accuracy of what is filed.",
  },
  {
    title: "Authorisation certificate application",
    detail: "Businesses must obtain an authorisation certificate to operate; applications will run through the information system.",
    product: null,
    business: "Filing the application and meeting the documentation and premises requirements.",
  },
  {
    title: "Vocational qualification (Level 4)",
    detail: "A vocational qualification certificate is required for the person responsible for the business.",
    product: null,
    business: "The responsible manager obtaining the certificate.",
  },
  {
    title: "Minimum fleet size and composition",
    detail: "A minimum vehicle count that varies by region, plus a requirement to hold hybrid or electric vehicles in certain regions.",
    product: null,
    business: "Making the fleet investment and meeting registration conditions.",
  },
];

export default function EnglishCompliancePage() {
  return (
    <>
      <StructuredData data={englishCompliancePageStructuredData} />

      <div className="container-page pt-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-brand-navy/45">
          <Link href="/en" className="hover:text-brand-green-dark">Home</Link>
          <span aria-hidden>/</span>
          <span className="text-brand-navy/70">2027 compliance</span>
        </nav>
      </div>

      <section className="container-page pb-4 pt-8 sm:pt-12">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-4 py-1.5 text-sm font-semibold text-amber-700">
            <CalendarClock className="h-4 w-4" /> Transition period under way
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-brand-navy sm:text-4xl lg:text-5xl">
            Türkiye’s 2027 car rental regulation: where software helps, and where it does not
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-brand-navy/60 sm:text-base">
            The regulation takes effect on 1 January 2027, and existing businesses must obtain their authorisation
            certificate by 1 July 2027. This page does not restate the regulation — it puts{" "}
            <strong className="font-bold text-brand-navy">what RentOkey does and what it does not do</strong> next to
            each requirement.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-brand-blue/25 bg-brand-blue/[0.04] p-4">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
            <p className="text-sm leading-relaxed text-brand-navy/70">
              <strong className="font-bold text-brand-navy">This page covers legislation in Türkiye only.</strong> The
              dates and requirements here belong to the regulation coming into force in the Republic of Türkiye. If you
              operate in Northern Cyprus, do not treat this timeline as your legal obligation calendar; review local
              conditions separately with the relevant authorities.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="/en/free-trial" size="lg" icon className="w-full sm:w-auto">Try free for 21 days</Button>
            <Button href="/en/pricing" variant="secondary" size="lg" className="w-full sm:w-auto">
              See pricing
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-brand-navy sm:text-3xl">Transition timeline</h2>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-brand-navy/55">
          These dates serve different purposes. Not confusing the date the regulation takes effect with the application
          deadline is the first condition for building a sound preparation plan.
        </p>
        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {timeline.map((item, index) => (
            <li key={`${item.date}-${item.title}`} className="relative flex flex-col rounded-2xl border border-surface-border bg-white p-5">
              <span className="text-xs font-extrabold tracking-[0.12em] text-brand-navy/25">{String(index + 1).padStart(2, "0")}</span>
              <span className="mt-3 inline-flex w-fit rounded-full bg-brand-navy px-3 py-1 text-xs font-bold text-white">{item.date}</span>
              <h3 className="mt-3 text-base font-extrabold leading-snug text-brand-navy">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/55">{item.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="scroll-mt-24 border-y border-surface-border bg-surface-soft/60" id="requirement-by-requirement">
        <div className="container-page py-14 sm:py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-brand-green-dark">Requirement by requirement</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.03em] text-brand-navy sm:text-3xl">
              Where does it actually help?
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-navy/55">
              RentOkey plays no part in three of the eight items below, and we say so openly. What software can do is
              keep records in order and remind you of deadlines — not obtain certificates, buy vehicles or pass exams
              on your behalf.
            </p>
          </div>

          <div className="mt-9 grid gap-3 lg:grid-cols-2">
            {requirements.map((item) => (
              <article key={item.title} className="flex flex-col rounded-2xl border border-surface-border bg-white p-5 sm:p-6">
                <h3 className="text-base font-extrabold text-brand-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-navy/55">{item.detail}</p>

                <div className="mt-5 grid gap-3 border-t border-surface-border pt-4">
                  <div className="flex items-start gap-2.5">
                    {item.product ? (
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                        <Check className="h-3 w-3 text-brand-green-dark" strokeWidth={3} />
                      </span>
                    ) : (
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-navy/[0.06]">
                        <Minus className="h-3 w-3 text-brand-navy/35" strokeWidth={3} />
                      </span>
                    )}
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-navy/35">RentOkey</p>
                      <p className={`mt-1 text-sm leading-relaxed ${item.product ? "text-brand-navy/70" : "text-brand-navy/40"}`}>
                        {item.product ?? "No role in this item."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-50">
                      <AlertTriangle className="h-3 w-3 text-amber-600" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-brand-navy/35">What the business must do</p>
                      <p className="mt-1 text-sm leading-relaxed text-brand-navy/70">{item.business}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-14 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-brand-navy sm:text-3xl">Where to start</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-navy/55">
              It is healthier to build the plan forward from the time your gaps need, rather than backward from the
              final deadline. On the software side, the first step is completing the fleet record so that vehicles
              needing a decision can be separated early.
            </p>
            <ol className="mt-6 space-y-3">
              {[
                "Complete the missing age and mileage information in your fleet inventory.",
                "Collect vehicles approaching the limit in a separate list and assess renewal without detaching it from existing reservations.",
                "Separate deposit, rental fee and outstanding balance tracking from one another.",
                "Make sure records are exportable; the reporting process will expect complete data.",
              ].map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-navy text-[11px] font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-brand-navy/70">{step}</span>
                </li>
              ))}
            </ol>
            <Link
              href="/en/car-rental-software"
              className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-brand-green-dark hover:text-brand-navy"
            >
              See how the fleet record works <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="rounded-[24px] border border-surface-border bg-white p-6 sm:p-7">
            <h3 className="text-base font-extrabold text-brand-navy">Official sources</h3>
            <p className="mt-2 text-xs text-brand-navy/45">Both sources are published in Turkish.</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={RESMI_GAZETE} className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-green-dark" rel="noopener">
                  Official Gazette — Regulation on the Rental of Motor Land Vehicles
                </a>
              </li>
              <li>
                <a href={BAKANLIK} className="font-semibold text-brand-navy underline underline-offset-2 hover:text-brand-green-dark" rel="noopener">
                  Ministry of Trade — statement on the regulation
                </a>
              </li>
            </ul>
            <div className="mt-6 rounded-2xl bg-surface-soft p-4">
              <p className="text-sm font-bold text-brand-navy">Important</p>
              <p className="mt-2 text-sm leading-relaxed text-brand-navy/60">
                This page is general information and internal preparation guidance, not legal advice.{" "}
                <strong className="font-bold text-brand-navy">Using software does not by itself make you compliant.</strong>{" "}
                Before acting, confirm the current official text and your own circumstances with the relevant authority
                or your legal adviser.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner locale="en" />
    </>
  );
}
