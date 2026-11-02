import Bahrain from "@/views/LandingPage/Bahrain";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to Bahrain | ALSI",
  description: "ALSI Global delivers reliable cargo shipping and logistics services from Oman to Bahrain, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-oman-to-bahrain",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to Bahrain | ALSI",
    description: "ALSI Global delivers reliable cargo shipping and logistics services from Oman to Bahrain, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-oman-to-bahrain",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to Bahrain | ALSI",
    description: "ALSI Global delivers reliable cargo shipping and logistics services from Oman to Bahrain, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <Bahrain />;
}

