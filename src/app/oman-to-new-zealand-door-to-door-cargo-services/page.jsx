import OmanToNewZealand from "@/views/LandingPage/OmanToNewZealand";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to New Zealand | ALSI",
  description: "ALSI Global provides reliable cargo shipping and logistics services from Oman to New Zealand, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/oman-to-new-zealand-door-to-door-cargo-services",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to New Zealand | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Oman to New Zealand, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/oman-to-new-zealand-door-to-door-cargo-services",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to New Zealand | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Oman to New Zealand, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToNewZealand />;
}
