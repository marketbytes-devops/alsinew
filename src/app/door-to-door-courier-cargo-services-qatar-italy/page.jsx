import Italy from "@/views/LandingPage/Italy";

export const metadata = {
  title: "International Cargo & Logistics Services from Qatar to Italy | ALSI",
  description: "ALSI Global delivers reliable cargo shipping and logistics services from Qatar to Italy, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-qatar-italy",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Qatar to Italy | ALSI",
    description: "ALSI Global delivers reliable cargo shipping and logistics services from Qatar to Italy, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-qatar-italy",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Qatar to Italy | ALSI",
    description: "ALSI Global delivers reliable cargo shipping and logistics services from Qatar to Italy, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <Italy />;
}
