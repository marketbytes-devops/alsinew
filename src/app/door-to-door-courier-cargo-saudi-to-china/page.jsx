import SaudiToChina from "@/views/LandingPage/SaudiToChina";

export const metadata = {
  title: "International Cargo & Logistics Services from Saudi to China | ALSI",
  description: "ALSI Global provides trusted cargo shipping and logistics services from Saudi to China, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-saudi-to-china",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Saudi to China | ALSI",
    description: "ALSI Global provides trusted cargo shipping and logistics services from Saudi to China, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-saudi-to-china",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Saudi to China | ALSI",
    description: "ALSI Global provides trusted cargo shipping and logistics services from Saudi to China, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <SaudiToChina />;
}
