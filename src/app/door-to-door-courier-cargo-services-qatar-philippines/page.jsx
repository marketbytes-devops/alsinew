import Philippines from "@/views/LandingPage/Philippines";

export const metadata = {
  title: "International Cargo & Logistics Services from Qatar to Philippines | ALSI",
  description: "ALSI Global provides reliable cargo shipping and logistics services from Qatar to Philippines, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-qatar-philippines",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Qatar to Philippines | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Qatar to Philippines, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-qatar-philippines",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Qatar to Philippines | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Qatar to Philippines, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <Philippines />;
}
