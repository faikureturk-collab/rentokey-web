import ProductSeoPage from "@/components/ProductSeoPage";
import StructuredData from "@/components/StructuredData";
import { productPages } from "@/lib/product-pages";
import { createPageMetadata } from "@/lib/seo";
import { createProductPageStructuredData } from "@/lib/structured-data";

const content = productPages.tr.calendar;

export const metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: content.path,
});

export default function ReservationCalendarPage() {
  return (
    <>
      <StructuredData data={createProductPageStructuredData(content)} />
      <ProductSeoPage content={content} />
    </>
  );
}

