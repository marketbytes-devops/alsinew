import SaudiToIndia from "@/views/LandingPage/SaudiToIndia";

export const metadata = {
  title: "SaudiToIndia | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-saudi-india",
  },
  openGraph: {
    title: "SaudiToIndia | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-saudi-india",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaudiToIndia | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <SaudiToIndia />;
}
