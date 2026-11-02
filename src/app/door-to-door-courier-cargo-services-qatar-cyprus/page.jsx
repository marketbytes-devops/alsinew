import QatarToCyprus from "@/views/LandingPage/QatarToCyprus";

export const metadata = {
  title: "International Cargo & Logistics Services from Qatar to Cyprus | ALSI",
  description: "ALSI Global offers reliable cargo shipping and logistics services from Qatar to Cyprus, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-qatar-cyprus",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Qatar to Cyprus | ALSI",
    description: "ALSI Global offers reliable cargo shipping and logistics services from Qatar to Cyprus, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-qatar-cyprus",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Qatar to Cyprus | ALSI",
    description: "ALSI Global offers reliable cargo shipping and logistics services from Qatar to Cyprus, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <QatarToCyprus />;
}
