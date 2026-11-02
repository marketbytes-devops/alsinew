import DubaiToEthiopiaCargo from "@/views/LandingPage/DubaiToEthiopiaCargo";

export const metadata = {
  title: "International Cargo & Logistics Services from Dubai to Ethiopia | ALSI",
  description: "ALSI Global provides dependable cargo shipping and logistics services from Dubai to Ethiopia, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-dubai-to-ethiopia",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Dubai to Ethiopia | ALSI",
    description: "ALSI Global provides dependable cargo shipping and logistics services from Dubai to Ethiopia, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-dubai-to-ethiopia",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Dubai to Ethiopia | ALSI",
    description: "ALSI Global provides dependable cargo shipping and logistics services from Dubai to Ethiopia, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DubaiToEthiopiaCargo />;
}
