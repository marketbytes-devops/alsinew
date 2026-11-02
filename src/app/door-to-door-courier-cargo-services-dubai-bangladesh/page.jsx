import DubaiToBangladesh from "@/views/LandingPage/DubaiToBangladesh";

export const metadata = {
  title: "International Cargo & Logistics Services from Dubai to Bangladesh | ALSI",
  description: "ALSI Global provides reliable cargo shipping and logistics services from Dubai to Bangladesh, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-dubai-bangladesh",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Dubai to Bangladesh | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Dubai to Bangladesh, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-dubai-bangladesh",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Dubai to Bangladesh | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Dubai to Bangladesh, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DubaiToBangladesh />;
}
