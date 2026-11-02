import OmanToBenin from "@/views/LandingPage/OmanToBenin";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to Benin | ALSI",
  description: "ALSI Global provides trusted cargo shipping and logistics services from Oman to Benin, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-oman-benin",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to Benin | ALSI",
    description: "ALSI Global provides trusted cargo shipping and logistics services from Oman to Benin, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-oman-benin",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to Benin | ALSI",
    description: "ALSI Global provides trusted cargo shipping and logistics services from Oman to Benin, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToBenin />;
}
