import QatarToBahrain from "@/views/LandingPage/QatarToBahrain";

export const metadata = {
  title: "Door to Door Courier and Cargo Services from Qatar to Bahrain | ALSI Global",
  description: "Door to door courier and cargo services from Qatar to Bahrain executed through structured logistics, customs clearance, and regulated international transport with end-to-end procedural accountability.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-qatar-to-bahrain",
  },
  openGraph: {
    title: "Door to Door Courier and Cargo Services from Qatar to Bahrain | ALSI Global",
    description: "Door to door courier and cargo services from Qatar to Bahrain executed through structured logistics, customs clearance, and regulated international transport with end-to-end procedural accountability.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-qatar-to-bahrain",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Door to Door Courier and Cargo Services from Qatar to Bahrain | ALSI Global",
    description: "Door to door courier and cargo services from Qatar to Bahrain executed through structured logistics, customs clearance, and regulated international transport with end-to-end procedural accountability.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <QatarToBahrain />;
}
