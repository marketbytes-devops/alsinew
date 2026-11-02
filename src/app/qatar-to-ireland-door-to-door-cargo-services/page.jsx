import QatarToIreland from "@/views/LandingPage/QatarToIreland";

export const metadata = {
  title: "International Cargo & Logistics Services from Qatar to Ireland | ALSI",
  description: "ALSI Global delivers dependable cargo shipping and logistics services from Qatar to Ireland, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/qatar-to-ireland-door-to-door-cargo-services",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Qatar to Ireland | ALSI",
    description: "ALSI Global delivers dependable cargo shipping and logistics services from Qatar to Ireland, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/qatar-to-ireland-door-to-door-cargo-services",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Qatar to Ireland | ALSI",
    description: "ALSI Global delivers dependable cargo shipping and logistics services from Qatar to Ireland, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <QatarToIreland />;
}
