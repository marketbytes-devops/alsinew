import DubaiToPakistan from "@/views/LandingPage/DubaiToPakistan";

export const metadata = {
  title: "International Cargo & Logistics Services from Dubai to Pakistan | ALSI",
  description: "ALSI Global offers trusted cargo shipping and logistics services from Dubai to Pakistan, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-dubai-to-pakistan",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Dubai to Pakistan | ALSI",
    description: "ALSI Global offers trusted cargo shipping and logistics services from Dubai to Pakistan, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-dubai-to-pakistan",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Dubai to Pakistan | ALSI",
    description: "ALSI Global offers trusted cargo shipping and logistics services from Dubai to Pakistan, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DubaiToPakistan />;
}
