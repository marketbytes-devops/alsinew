import QatarToBarbados from "@/views/LandingPage/QatarToBarbados";

export const metadata = {
  title: "QatarToBarbados | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-qatar-barbados",
  },
  openGraph: {
    title: "QatarToBarbados | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-qatar-barbados",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "QatarToBarbados | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <QatarToBarbados />;
}
