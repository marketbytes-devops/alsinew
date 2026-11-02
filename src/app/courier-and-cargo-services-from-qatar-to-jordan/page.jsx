import QatarToJordan from "@/views/LandingPage/QatarToJordan";

export const metadata = {
  title: "QatarToJordan | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/courier-and-cargo-services-from-qatar-to-jordan",
  },
  openGraph: {
    title: "QatarToJordan | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/courier-and-cargo-services-from-qatar-to-jordan",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "QatarToJordan | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <QatarToJordan />;
}
