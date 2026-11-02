import QatarToIraq from "@/views/LandingPage/QatarToIraq";

export const metadata = {
  title: "QatarToIraq | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/qatar-to-iraq-door-to-door-cargo-services",
  },
  openGraph: {
    title: "QatarToIraq | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/qatar-to-iraq-door-to-door-cargo-services",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "QatarToIraq | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <QatarToIraq />;
}
