import OmanToPakistan from "@/views/LandingPage/OmanToPakistan";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to Pakistan | ALSI",
  description: "ALSI Global delivers trusted cargo shipping and logistics services from Oman to Pakistan, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-oman-to-pakistan",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to Pakistan | ALSI",
    description: "ALSI Global delivers trusted cargo shipping and logistics services from Oman to Pakistan, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-oman-to-pakistan",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to Pakistan | ALSI",
    description: "ALSI Global delivers trusted cargo shipping and logistics services from Oman to Pakistan, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToPakistan />;
}
