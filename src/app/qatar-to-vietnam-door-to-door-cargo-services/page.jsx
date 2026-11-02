import QatarToVietnam from "@/views/LandingPage/QatarToVietnam";

export const metadata = {
  title: "International Cargo & Logistics Services from Qatar to Vietnam | ALSI",
  description: "ALSI Global delivers reliable cargo shipping and logistics services from Qatar to Vietnam, offering sea freight, air freight, customs clearance, freight forwarding, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/qatar-to-vietnam-door-to-door-cargo-services",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Qatar to Vietnam | ALSI",
    description: "ALSI Global delivers reliable cargo shipping and logistics services from Qatar to Vietnam, offering sea freight, air freight, customs clearance, freight forwarding, and project cargo solutions.",
    url: "https://www.alsiglobal.com/qatar-to-vietnam-door-to-door-cargo-services",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Qatar to Vietnam | ALSI",
    description: "ALSI Global delivers reliable cargo shipping and logistics services from Qatar to Vietnam, offering sea freight, air freight, customs clearance, freight forwarding, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <QatarToVietnam />;
}
