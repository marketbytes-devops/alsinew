import QatarToCroatiaCargo from "@/views/LandingPage/QatarToCroatiaCargo";

export const metadata = {
  title: "Commercial Cargo Services from Qatar to Croatia | ALSI Global",
  description: "Reliable commercial cargo and logistics services from Qatar to Croatia. Air freight, sea freight, FCL/LCL, project cargo, customs support and delivery.",
  alternates: {
    canonical: "https://www.alsiglobal.com/commercial-cargo-logistics-services-qatar-to-croatia",
  },
  openGraph: {
    title: "Commercial Cargo Services from Qatar to Croatia | ALSI Global",
    description: "Reliable commercial cargo and logistics services from Qatar to Croatia. Air freight, sea freight, FCL/LCL, project cargo, customs support and delivery.",
    url: "https://www.alsiglobal.com/commercial-cargo-logistics-services-qatar-to-croatia",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Cargo Services from Qatar to Croatia | ALSI Global",
    description: "Reliable commercial cargo and logistics services from Qatar to Croatia. Air freight, sea freight, FCL/LCL, project cargo, customs support and delivery.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <QatarToCroatiaCargo />;
}
