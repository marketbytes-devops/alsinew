import QatarToCostaRicaCargo from "@/views/LandingPage/QatarToCostaRicaCargo";

export const metadata = {
  title: "Commercial Cargo Services from Qatar to Costa Rica | ALSI Global",
  description: "Reliable cargo and logistics services from Qatar to Costa Rica, including air freight, sea freight, FCL/LCL shipping, customs support and final delivery.",
  alternates: {
    canonical: "https://www.alsiglobal.com/commercial-cargo-logistics-services-qatar-to-costa-rica",
  },
  openGraph: {
    title: "Commercial Cargo Services from Qatar to Costa Rica | ALSI Global",
    description: "Reliable cargo and logistics services from Qatar to Costa Rica, including air freight, sea freight, FCL/LCL shipping, customs support and final delivery.",
    url: "https://www.alsiglobal.com/commercial-cargo-logistics-services-qatar-to-costa-rica",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Cargo Services from Qatar to Costa Rica | ALSI Global",
    description: "Reliable cargo and logistics services from Qatar to Costa Rica, including air freight, sea freight, FCL/LCL shipping, customs support and final delivery.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <QatarToCostaRicaCargo />;
}
