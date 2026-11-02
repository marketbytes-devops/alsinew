import ShipSpareLogisticsQatar from "@/views/LandingPage/ShipSpareLogisticsQatar";

export const metadata = {
  title: "Ship Spare Logistics service in Qatar | ALSI",
  description: "Reliable ship spare logistics service in Qatar with customs clearance, freight, storage, and vessel delivery support. Get a quote.",
  alternates: {
    canonical: "https://www.alsiglobal.com/ship-spare-logistics-service-qatar",
  },
  openGraph: {
    title: "Ship Spare Logistics service in Qatar | ALSI",
    description: "Reliable ship spare logistics service in Qatar with customs clearance, freight, storage, and vessel delivery support. Get a quote.",
    url: "https://www.alsiglobal.com/ship-spare-logistics-service-qatar",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ship Spare Logistics service in Qatar | ALSI",
    description: "Reliable ship spare logistics service in Qatar with customs clearance, freight, storage, and vessel delivery support. Get a quote.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <ShipSpareLogisticsQatar />;
}
