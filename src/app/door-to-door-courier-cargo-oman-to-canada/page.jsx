import OmanToCanada from "@/views/LandingPage/OmanToCanada";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to Canada | ALSI",
  description: "ALSI Global offers reliable cargo shipping and logistics services from Oman to Canada, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-oman-to-canada",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to Canada | ALSI",
    description: "ALSI Global offers reliable cargo shipping and logistics services from Oman to Canada, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-oman-to-canada",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to Canada | ALSI",
    description: "ALSI Global offers reliable cargo shipping and logistics services from Oman to Canada, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToCanada />;
}
