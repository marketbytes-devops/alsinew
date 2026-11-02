import DubaiToBelgium from "@/views/LandingPage/DubaiToBelgium";

export const metadata = {
  title: "International Cargo & Logistics Services from Dubai to Belgium | ALSI",
  description: "ALSI Global delivers trusted cargo shipping and logistics services from Dubai to Belgium, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-dubai-belgium",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Dubai to Belgium | ALSI",
    description: "ALSI Global delivers trusted cargo shipping and logistics services from Dubai to Belgium, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-dubai-belgium",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Dubai to Belgium | ALSI",
    description: "ALSI Global delivers trusted cargo shipping and logistics services from Dubai to Belgium, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DubaiToBelgium />;
}
