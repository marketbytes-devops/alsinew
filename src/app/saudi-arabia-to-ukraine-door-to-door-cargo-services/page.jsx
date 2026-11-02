import SaudiArabiaToUkraine from "@/views/LandingPage/SaudiArabiaToUkraine";

export const metadata = {
  title: "International Cargo & Logistics Services from Saudi Arabia to Ukraine | ALSI",
  description: "ALSI Global provides trusted cargo shipping and logistics services from Saudi Arabia to Ukraine, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/saudi-arabia-to-ukraine-door-to-door-cargo-services",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Saudi Arabia to Ukraine | ALSI",
    description: "ALSI Global provides trusted cargo shipping and logistics services from Saudi Arabia to Ukraine, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/saudi-arabia-to-ukraine-door-to-door-cargo-services",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Saudi Arabia to Ukraine | ALSI",
    description: "ALSI Global provides trusted cargo shipping and logistics services from Saudi Arabia to Ukraine, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <SaudiArabiaToUkraine />;
}
