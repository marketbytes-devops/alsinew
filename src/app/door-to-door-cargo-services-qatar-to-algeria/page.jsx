import QatarToAlgeria from "@/views/LandingPage/QatarToAlgeria";

export const metadata = {
  title: "QatarToAlgeria | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-cargo-services-qatar-to-algeria",
  },
  openGraph: {
    title: "QatarToAlgeria | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/door-to-door-cargo-services-qatar-to-algeria",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "QatarToAlgeria | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <QatarToAlgeria />;
}
