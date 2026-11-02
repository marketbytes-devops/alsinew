import OmanToBelarus from "@/views/LandingPage/OmanToBelarus";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to Belarus | ALSI",
  description: "ALSI Global delivers trusted cargo shipping and logistics services from Oman to Belarus, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-oman-belarus",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to Belarus | ALSI",
    description: "ALSI Global delivers trusted cargo shipping and logistics services from Oman to Belarus, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-oman-belarus",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to Belarus | ALSI",
    description: "ALSI Global delivers trusted cargo shipping and logistics services from Oman to Belarus, providing sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToBelarus />;
}
