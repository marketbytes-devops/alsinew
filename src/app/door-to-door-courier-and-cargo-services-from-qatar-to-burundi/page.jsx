import QatarToBurundi from "@/views/LandingPage/QatarToBurundi";

export const metadata = {
  title: "International Cargo & Logistics Services from Qatar to Burundi | ALSI",
  description: "ALSI Global provides reliable cargo shipping and logistics services from Qatar to Burundi, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-qatar-to-burundi",
  },
  openGraph: {
    title: "International Cargo & Logistics Services from Qatar to Burundi | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Qatar to Burundi, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-qatar-to-burundi",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "International Cargo & Logistics Services from Qatar to Burundi | ALSI",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Qatar to Burundi, offering sea freight, air freight, freight forwarding, customs clearance, and project cargo solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <QatarToBurundi />;
}
