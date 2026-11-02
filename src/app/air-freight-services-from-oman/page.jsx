import AirFreightOman from "@/views/LandingPage/AirFreightOman";

export const metadata = {
  title: "AirFreightOman | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/air-freight-services-from-oman",
  },
  openGraph: {
    title: "AirFreightOman | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/air-freight-services-from-oman",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AirFreightOman | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <AirFreightOman />;
}
