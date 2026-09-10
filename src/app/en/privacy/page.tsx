import EnglishLegal from "@/components/english/EnglishLegal";
import { createPageMetadata } from "@/lib/seo";
export const metadata = createPageMetadata({title:"Privacy Policy",description:"How Rent Okey collects, uses and protects personal information.",path:"/en/privacy",index:false});
export default function PrivacyPage() {return <EnglishLegal title="Privacy Policy" original="/gizlilik-politikasi" sections={[
  ["1. Information collected","Rent Okey may collect personal information such as your first and last name, email address, phone number and company details to provide our services."],
  ["2. Purpose of processing","Information is used to create your account, provide our services, respond to support requests and meet our legal obligations."],
  ["3. Data security","Your information is transmitted over encrypted connections and protected against unauthorised access through technical and organisational measures."],
  ["4. Your rights","Under Türkiye’s Personal Data Protection Law (KVKK), you have rights to access, correct and delete your data and to object to processing. Send requests to hello@rentokey.com."],
  ["5. Contact","For questions about our Privacy Policy, contact hello@rentokey.com."],
]} />;}
