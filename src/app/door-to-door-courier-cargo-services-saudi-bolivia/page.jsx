import SaudiToBolivia from "@/views/LandingPage/SaudiToBolivia";

export const metadata = {
  title: "International Cargo & Logistics Services from Saudi to Bolivia | ALSI",
  description: "ALSI Global delivers professional cargo shipping and logistics services from Saudi to Bolivia, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-saudi-bolivia",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Saudi to Bolivia | ALSI",
    description: "ALSI Global delivers professional cargo shipping and logistics services from Saudi to Bolivia, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-saudi-bolivia",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Saudi to Bolivia | ALSI",
    description: "ALSI Global delivers professional cargo shipping and logistics services from Saudi to Bolivia, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <SaudiToBolivia />;
}
