import AirFreightDubai from "@/views/LandingPage/AirFreightDubai";

export const metadata = {
  title: "AirFreightDubai | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/air-freight-services-from-dubai",
  },
  openGraph: {
    title: "AirFreightDubai | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/air-freight-services-from-dubai",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AirFreightDubai | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <AirFreightDubai />;
}
