import QatarToBotswana from "@/views/LandingPage/QatarToBotswana";

export const metadata = {
  title: "QatarToBotswana | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-qatar-to-botswana",
  },
  openGraph: {
    title: "QatarToBotswana | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-qatar-to-botswana",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "QatarToBotswana | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <QatarToBotswana />;
}
