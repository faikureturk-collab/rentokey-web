import ReportingPage from "@/components/ReportingPage";
import StructuredData from "@/components/StructuredData";
import { reportingPages } from "@/lib/reporting";
import { createPageMetadata } from "@/lib/seo";
import { createReportingPageStructuredData } from "@/lib/structured-data";

const content = reportingPages.tr;

export const metadata = createPageMetadata({
  title: content.title,
  description: content.description,
  path: content.path,
});

export default function ReportingAndFleetAnalyticsPage() {
  return (
    <>
      <StructuredData data={createReportingPageStructuredData(content)} />
      <ReportingPage content={content} />
    </>
  );
}
