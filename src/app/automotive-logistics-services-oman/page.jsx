import AutomotiveLogisticsServicesOman from "@/views/LandingPage/AutomotiveLogisticsServicesOman";

export const metadata = {
  title: "Automotive Logistics Services in Oman | ALSI Global",
  description: "Arrange vehicle and automotive cargo movement in Oman with ALSI Global. Explore road transport, RoRo shipping, freight forwarding and customs support.",
  alternates: {
    canonical: "https://www.alsiglobal.com/automotive-logistics-services-oman",
  },
  openGraph: {
    title: "Automotive Logistics Services in Oman | ALSI Global",
    description: "Arrange vehicle and automotive cargo movement in Oman with ALSI Global. Explore road transport, RoRo shipping, freight forwarding and customs support.",
    url: "https://www.alsiglobal.com/automotive-logistics-services-oman",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automotive Logistics Services in Oman | ALSI Global",
    description: "Arrange vehicle and automotive cargo movement in Oman with ALSI Global. Explore road transport, RoRo shipping, freight forwarding and customs support.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <AutomotiveLogisticsServicesOman />;
}
