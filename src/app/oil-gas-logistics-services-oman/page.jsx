import OilGasLogisticsServicesOman from "@/views/LandingPage/OilGasLogisticsServicesOman";

export const metadata = {
  title: "Oil & Gas Logistics Services in Oman | ALSI Global",
  description: "Coordinate oil and gas cargo in Oman with ALSI Global. Explore freight forwarding, project cargo, transportation and customs-clearance support.",
  alternates: {
    canonical: "https://www.alsiglobal.com/oil-gas-logistics-services-oman",
  },
  openGraph: {
    title: "Oil & Gas Logistics Services in Oman | ALSI Global",
    description: "Coordinate oil and gas cargo in Oman with ALSI Global. Explore freight forwarding, project cargo, transportation and customs-clearance support.",
    url: "https://www.alsiglobal.com/oil-gas-logistics-services-oman",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oil & Gas Logistics Services in Oman | ALSI Global",
    description: "Coordinate oil and gas cargo in Oman with ALSI Global. Explore freight forwarding, project cargo, transportation and customs-clearance support.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OilGasLogisticsServicesOman />;
}
