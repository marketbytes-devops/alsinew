import OmanToUkraine from "@/views/LandingPage/OmanToUkraine";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to Ukraine | ALSI",
  description: "ALSI Global delivers dependable cargo shipping and logistics services from Oman to Ukraine, providing air freight, sea freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-cargo-oman-to-ukraine-alsi",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to Ukraine | ALSI",
    description: "ALSI Global delivers dependable cargo shipping and logistics services from Oman to Ukraine, providing air freight, sea freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-cargo-oman-to-ukraine-alsi",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to Ukraine | ALSI",
    description: "ALSI Global delivers dependable cargo shipping and logistics services from Oman to Ukraine, providing air freight, sea freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToUkraine />;
}
