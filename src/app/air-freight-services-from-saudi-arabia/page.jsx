import AirFreightSaudi from "@/views/LandingPage/AirFreightSaudi";

export const metadata = {
  title: "AirFreightSaudi | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/air-freight-services-from-saudi-arabia",
  },
  openGraph: {
    title: "AirFreightSaudi | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/air-freight-services-from-saudi-arabia",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AirFreightSaudi | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <AirFreightSaudi />;
}
