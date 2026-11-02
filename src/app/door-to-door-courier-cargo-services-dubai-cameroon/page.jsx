import DubaiToCameroon from "@/views/LandingPage/DubaiToCameroon";

export const metadata = {
  title: "International Cargo & Logistics Services from Dubai to Cameroon | ALSI",
  description: "ALSI Global offers reliable cargo shipping and logistics services from Dubai to Cameroon, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-dubai-cameroon",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Dubai to Cameroon | ALSI",
    description: "ALSI Global offers reliable cargo shipping and logistics services from Dubai to Cameroon, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-dubai-cameroon",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Dubai to Cameroon | ALSI",
    description: "ALSI Global offers reliable cargo shipping and logistics services from Dubai to Cameroon, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DubaiToCameroon />;
}
