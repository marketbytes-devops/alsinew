import Turkey from "@/views/LandingPage/Turkey";

export const metadata = {
  title: "International Cargo & Logistics Services from Saudi to Turkey | ALSI",
  description: "ALSI Global delivers reliable cargo shipping and logistics services from Saudi to Turkey, offering sea freight, air freight, customs clearance, freight forwarding, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/courier-and-cargo-services-saudi-to-turkey",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Saudi to Turkey | ALSI",
    description: "ALSI Global delivers reliable cargo shipping and logistics services from Saudi to Turkey, offering sea freight, air freight, customs clearance, freight forwarding, and project cargo solutions.",
    url: "https://www.alsiglobal.com/courier-and-cargo-services-saudi-to-turkey",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Saudi to Turkey | ALSI",
    description: "ALSI Global delivers reliable cargo shipping and logistics services from Saudi to Turkey, offering sea freight, air freight, customs clearance, freight forwarding, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <Turkey />;
}
