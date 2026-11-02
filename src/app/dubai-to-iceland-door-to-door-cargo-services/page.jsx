import DubaiToIceland from "@/views/LandingPage/DubaiToIceland";

export const metadata = {
  title: "Door to Door Courier and Cargo Services from Dubai to Iceland | Alsi",
  description: "Reliable door to door courier and cargo services from Dubai to Iceland with air freight, sea freight, customs clearance, cargo consolidation, shipment tracking, and global logistics support.",
  alternates: {
    canonical: "https://www.alsiglobal.com/dubai-to-iceland-door-to-door-cargo-services",
  },
  openGraph: {
    title: "Door to Door Courier and Cargo Services from Dubai to Iceland | Alsi",
    description: "Reliable door to door courier and cargo services from Dubai to Iceland with air freight, sea freight, customs clearance, cargo consolidation, shipment tracking, and global logistics support.",
    url: "https://www.alsiglobal.com/dubai-to-iceland-door-to-door-cargo-services",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Door to Door Courier and Cargo Services from Dubai to Iceland | Alsi",
    description: "Reliable door to door courier and cargo services from Dubai to Iceland with air freight, sea freight, customs clearance, cargo consolidation, shipment tracking, and global logistics support.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DubaiToIceland />;
}
