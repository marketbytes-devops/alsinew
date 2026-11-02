import Israel from "@/views/LandingPage/Israel";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to Israel | ALSI",
  description: "ALSI Global provides dependable cargo shipping and logistics services from Oman to Israel, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-oman-to-israel",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to Israel | ALSI",
    description: "ALSI Global provides dependable cargo shipping and logistics services from Oman to Israel, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-oman-to-israel",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to Israel | ALSI",
    description: "ALSI Global provides dependable cargo shipping and logistics services from Oman to Israel, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <Israel />;
}
