import DubaiToNepal from "@/views/LandingPage/DubaiToNepal";

export const metadata = {
  title: "International Cargo & Logistics Services from Dubai to Nepal | ALSI",
  description: "ALSI Global offers reliable cargo shipping and logistics services from Dubai to Nepal, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-dubai-to-nepal",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Dubai to Nepal | ALSI",
    description: "ALSI Global offers reliable cargo shipping and logistics services from Dubai to Nepal, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-dubai-to-nepal",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Dubai to Nepal | ALSI",
    description: "ALSI Global offers reliable cargo shipping and logistics services from Dubai to Nepal, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DubaiToNepal />;
}
