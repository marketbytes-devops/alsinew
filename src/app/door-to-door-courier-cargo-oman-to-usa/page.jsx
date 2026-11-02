import OmanToUsa from "@/views/LandingPage/OmanToUsa";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to USA | ALSI",
  description: "ALSI Global provides reliable cargo shipping and logistics services from Oman to the USA, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-oman-to-usa",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to USA | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Oman to the USA, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-oman-to-usa",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to USA | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Oman to the USA, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToUsa />;
}
