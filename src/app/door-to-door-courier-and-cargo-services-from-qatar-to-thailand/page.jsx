import Thailand from "@/views/LandingPage/Thailand";

export const metadata = {
  title: "International Cargo & Logistics Services from Qatar to Thailand | ALSI",
  description: "ALSI Global offers reliable cargo shipping and logistics services from Qatar to Thailand, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-qatar-to-thailand",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Qatar to Thailand | ALSI",
    description: "ALSI Global offers reliable cargo shipping and logistics services from Qatar to Thailand, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-qatar-to-thailand",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Qatar to Thailand | ALSI",
    description: "ALSI Global offers reliable cargo shipping and logistics services from Qatar to Thailand, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <Thailand />;
}

