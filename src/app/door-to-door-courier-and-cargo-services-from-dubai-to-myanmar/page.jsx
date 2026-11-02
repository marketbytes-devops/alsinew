import Myanmar from "@/views/LandingPage/Myanmar";

export const metadata = {
  title: "International Cargo & Logistics Services from Dubai to Myanmar | ALSI",
  description: "ALSI Global provides reliable cargo shipping and logistics services from Dubai to Myanmar, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-dubai-to-myanmar",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Dubai to Myanmar | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Dubai to Myanmar, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-dubai-to-myanmar",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Dubai to Myanmar | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Dubai to Myanmar, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <Myanmar />;
}
