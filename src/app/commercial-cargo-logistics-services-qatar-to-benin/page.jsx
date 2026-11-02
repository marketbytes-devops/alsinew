import QatarToBeninCargo from "@/views/LandingPage/QatarToBeninCargo";

export const metadata = {
  title: "Commercial Cargo Services from Qatar to Benin | ALSI Global",
  description: "Reliable commercial cargo and logistics services from Qatar to Benin. Air freight, sea freight, FCL/LCL shipping, project cargo, customs support & delivery.",
  alternates: {
    canonical: "https://www.alsiglobal.com/commercial-cargo-logistics-services-qatar-to-benin",
  },
  openGraph: {
    title: "Commercial Cargo Services from Qatar to Benin | ALSI Global",
    description: "Reliable commercial cargo and logistics services from Qatar to Benin. Air freight, sea freight, FCL/LCL shipping, project cargo, customs support & delivery.",
    url: "https://www.alsiglobal.com/commercial-cargo-logistics-services-qatar-to-benin",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Cargo Services from Qatar to Benin | ALSI Global",
    description: "Reliable commercial cargo and logistics services from Qatar to Benin. Air freight, sea freight, FCL/LCL shipping, project cargo, customs support & delivery.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <QatarToBeninCargo />;
}
