import EnglishLegal from "@/components/english/EnglishLegal";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({title:"Privacy Policy",description:"How Rent Okey collects, uses and protects personal information.",path:"/en/privacy",index:false});
export default function PrivacyPage() {return <EnglishLegal title="Privacy Policy" original="/gizlilik-politikasi" sections={[
  ["1. Information collected","Rent Okey may collect personal information such as your first and last name, email address, phone number and company details to provide our services."],
  ["2. Purpose of processing","Information is used to create your account, provide our services, respond to support requests and meet our legal obligations."],
  ["3. Data security","Your information is transmitted over encrypted connections and protected against unauthorised access through technical and organisational measures."],
  ["4. Analytics and traffic-source measurement","With your consent, Google Analytics 4 is used to measure which channels bring visits, the pages viewed and steps in the free-trial journey. First-touch source, campaign parameters, referring domain and landing page may be kept in first-party browser storage. Your name, email address, phone number and password are not sent to analytics. You can change your choice at any time through Cookie preferences in the footer."],
  ["5. Your rights","Under Türkiye’s Personal Data Protection Law (KVKK), you have rights to access, correct and delete your data and to object to processing. Send requests to hello@rentokey.com."],
  ["6. Contact","For questions about our Privacy Policy, contact hello@rentokey.com."],
]} />;}
