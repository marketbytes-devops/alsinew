import OmanToIndia from "@/views/LandingPage/OmanToIndia";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to India | ALSI",
  description: "ALSI Global provides trusted cargo shipping and logistics services from Oman to India, delivering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-oman-to-india",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to India | ALSI",
    description: "ALSI Global provides trusted cargo shipping and logistics services from Oman to India, delivering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-oman-to-india",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to India | ALSI",
    description: "ALSI Global provides trusted cargo shipping and logistics services from Oman to India, delivering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToIndia />;
}
