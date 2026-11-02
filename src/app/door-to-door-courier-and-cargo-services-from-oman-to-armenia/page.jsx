import OmanToArmenia from "@/views/LandingPage/OmanToArmenia";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to Armenia | ALSI",
  description: "ALSI Global offers dependable cargo shipping and logistics services from Oman to Armenia, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-oman-to-armenia",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to Armenia | ALSI",
    description: "ALSI Global offers dependable cargo shipping and logistics services from Oman to Armenia, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-oman-to-armenia",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to Armenia | ALSI",
    description: "ALSI Global offers dependable cargo shipping and logistics services from Oman to Armenia, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToArmenia />;
}
