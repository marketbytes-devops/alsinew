import OmanToCroatia from "@/views/LandingPage/OmanToCroatia";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to croatia",
  description: "ALSI Global provides reliable cargo shipping and logistics services from Oman to Croatia, including air freight, sea freight, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-oman-to-croatia",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to croatia",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Oman to Croatia, including air freight, sea freight, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-oman-to-croatia",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to croatia",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Oman to Croatia, including air freight, sea freight, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToCroatia />;
}
