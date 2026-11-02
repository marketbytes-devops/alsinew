import France from "@/views/LandingPage/France";

export const metadata = {
  title: "International Cargo & Logistics Services from Saudi to France | ALSI",
  description: "ALSI Global delivers reliable cargo shipping and logistics services from Saudi to France, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-saudi-france",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Saudi to France | ALSI",
    description: "ALSI Global delivers reliable cargo shipping and logistics services from Saudi to France, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-saudi-france",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Saudi to France | ALSI",
    description: "ALSI Global delivers reliable cargo shipping and logistics services from Saudi to France, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <France />;
}
