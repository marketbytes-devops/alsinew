import AirFreightQatar from "@/views/LandingPage/AirFreightQatar";

export const metadata = {
  title: "AirFreightQatar | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/air-freight-services-from-qatar",
  },
  openGraph: {
    title: "AirFreightQatar | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/air-freight-services-from-qatar",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AirFreightQatar | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <AirFreightQatar />;
}
