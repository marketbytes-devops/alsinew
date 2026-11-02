import OmanToAlgeria from "@/views/LandingPage/OmanToAlgeria";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to Algeria | ALSI",
  description: "ALSI Global offers professional cargo shipping and logistics services from Oman to Algeria, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-cargo-services-oman-to-algeria",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to Algeria | ALSI",
    description: "ALSI Global offers professional cargo shipping and logistics services from Oman to Algeria, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-cargo-services-oman-to-algeria",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to Algeria | ALSI",
    description: "ALSI Global offers professional cargo shipping and logistics services from Oman to Algeria, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToAlgeria />;
}
