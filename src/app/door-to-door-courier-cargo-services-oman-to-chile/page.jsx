import Chile from "@/views/LandingPage/Chile";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to Chile | ALSI",
  description: "ALSI Global offers trusted cargo shipping and logistics services from Oman to Chile, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-oman-to-chile",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to Chile | ALSI",
    description: "ALSI Global offers trusted cargo shipping and logistics services from Oman to Chile, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-oman-to-chile",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to Chile | ALSI",
    description: "ALSI Global offers trusted cargo shipping and logistics services from Oman to Chile, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <Chile />;
}
