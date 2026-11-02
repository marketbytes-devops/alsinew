import UaeToUganda from "@/views/LandingPage/UaeToUganda";

export const metadata = {
  title: "International Cargo & Logistics Services from UAE to Uganda | ALSI",
  description: "ALSI Global provides reliable cargo shipping and logistics services from UAE to Uganda, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/uae-to-uganda-door-to-door-courier-cargo-services",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from UAE to Uganda | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from UAE to Uganda, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/uae-to-uganda-door-to-door-courier-cargo-services",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from UAE to Uganda | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from UAE to Uganda, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <UaeToUganda />;
}
