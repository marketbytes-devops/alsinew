import EventLogisticsServicesQatar from "@/views/LandingPage/EventLogisticsServicesQatar";

export const metadata = {
  title: "Event Logistics Services in Qatar | ALSI Global",
  description: "Event Logistics Services in Qatar for exhibitions, conferences, and live events with freight, customs, cargo handling, and transport support.",
  alternates: {
    canonical: "https://www.alsiglobal.com/event-logistics-services-qatar",
  },
  openGraph: {
    title: "Event Logistics Services in Qatar | ALSI Global",
    description: "Event Logistics Services in Qatar for exhibitions, conferences, and live events with freight, customs, cargo handling, and transport support.",
    url: "https://www.alsiglobal.com/event-logistics-services-qatar",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Logistics Services in Qatar | ALSI Global",
    description: "Event Logistics Services in Qatar for exhibitions, conferences, and live events with freight, customs, cargo handling, and transport support.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <EventLogisticsServicesQatar />;
}
