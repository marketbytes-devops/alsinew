import DubaiToIndia from "@/views/LandingPage/DubaiToIndia";

export const metadata = {
  title: "International Cargo & Logistics Services from Dubai to India | ALSI",
  description: "ALSI Global offers trusted cargo shipping and logistics services from Dubai to India, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-dubai-to-india",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Dubai to India | ALSI",
    description: "ALSI Global offers trusted cargo shipping and logistics services from Dubai to India, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-dubai-to-india",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Dubai to India | ALSI",
    description: "ALSI Global offers trusted cargo shipping and logistics services from Dubai to India, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DubaiToIndia />;
}
