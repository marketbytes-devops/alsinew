import Kuwait from "@/views/LandingPage/Kuwait";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to Kuwait | ALSI",
  description: "ALSI Global provides dependable cargo shipping and logistics services from Oman to Kuwait, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-oman-kuwait",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to Kuwait | ALSI",
    description: "ALSI Global provides dependable cargo shipping and logistics services from Oman to Kuwait, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-oman-kuwait",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to Kuwait | ALSI",
    description: "ALSI Global provides dependable cargo shipping and logistics services from Oman to Kuwait, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <Kuwait />;
}
