import EnglishLegal from "@/components/english/EnglishLegal";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({title:"Terms of Use",description:"Terms for using Rent Okey car rental management software.",path:"/en/terms",index:false});
export default function TermsPage() {return <EnglishLegal title="Terms of Use" original="/kullanim-sartlari" sections={[
  ["1. Scope of service","Rent Okey is a cloud software service for car rental businesses to manage their fleet, reservations and field operations."],
  ["2. Account responsibility","You are responsible for keeping your login details confidential and for all activity carried out through your account."],
  ["3. Payments and billing","Your subscription is calculated according to vehicle count and billed monthly or annually. Optional modules and services may be charged separately. Prices exclude VAT."],
  ["4. Cancellation","You may cancel the service at any time. After cancellation, your data is retained for a period consistent with applicable legislation and then deleted."],
  ["5. Limitation of liability","Rent Okey does not guarantee uninterrupted or error-free service, but works continuously to improve service quality."],
]} />;}
