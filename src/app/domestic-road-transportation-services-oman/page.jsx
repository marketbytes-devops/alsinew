import DomesticRoadTransportationOman from "@/views/LandingPage/DomesticRoadTransportationOman";

export const metadata = {
  title: "Domestic Road Transportation & Freight Services Oman",
  description: "Need domestic road transportation services in Oman? Contact ALSI Global for road freight solutions for commercial, industrial and project cargo.",
  alternates: {
    canonical: "https://www.alsiglobal.com/domestic-road-transportation-services-oman",
  },
  openGraph: {
    title: "Domestic Road Transportation & Freight Services Oman",
    description: "Need domestic road transportation services in Oman? Contact ALSI Global for road freight solutions for commercial, industrial and project cargo.",
    url: "https://www.alsiglobal.com/domestic-road-transportation-services-oman",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Domestic Road Transportation & Freight Services Oman",
    description: "Need domestic road transportation services in Oman? Contact ALSI Global for road freight solutions for commercial, industrial and project cargo.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DomesticRoadTransportationOman />;
}
