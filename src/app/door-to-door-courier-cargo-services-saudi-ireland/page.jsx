import SaudiToIreland from "@/views/LandingPage/SaudiToIreland";

export const metadata = {
  title: "International Cargo & Logistics Services from Saudi to Ireland | ALSI",
  description: "ALSI Global provides professional cargo shipping and logistics services from Saudi to Ireland, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-saudi-ireland",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Saudi to Ireland | ALSI",
    description: "ALSI Global provides professional cargo shipping and logistics services from Saudi to Ireland, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-saudi-ireland",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Saudi to Ireland | ALSI",
    description: "ALSI Global provides professional cargo shipping and logistics services from Saudi to Ireland, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <SaudiToIreland />;
}
