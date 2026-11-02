import Morocco from "@/views/LandingPage/Morocco";

export const metadata = {
  title: "International Cargo & Logistics Services from Oman to Morocco | ALSI",
  description: "ALSI Global provides reliable cargo shipping and logistics services from Oman to Morocco, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-oman-morocco",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Oman to Morocco | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Oman to Morocco, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-oman-morocco",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Oman to Morocco | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Oman to Morocco, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <Morocco />;
}
