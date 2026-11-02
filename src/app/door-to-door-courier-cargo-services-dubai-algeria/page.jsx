import DubaiToAlgeria from "@/views/LandingPage/DubaiToAlgeria";

export const metadata = {
  title: "International Cargo & Logistics Services from Dubai to Algeria | ALSI",
  description: "ALSI Global delivers reliable cargo shipping and logistics services from Dubai to Algeria, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-dubai-algeria",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Dubai to Algeria | ALSI",
    description: "ALSI Global delivers reliable cargo shipping and logistics services from Dubai to Algeria, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-dubai-algeria",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Dubai to Algeria | ALSI",
    description: "ALSI Global delivers reliable cargo shipping and logistics services from Dubai to Algeria, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DubaiToAlgeria />;
}
