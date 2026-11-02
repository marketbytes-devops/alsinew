import WarehouseDistributionQatar from "@/views/LandingPage/WarehouseDistributionQatar";

export const metadata = {
  title: "Warehouse and Distribution service in Qatar | ALSI",
  description: "Warehouse and Distribution service in Qatar for secure storage, inventory control, fulfillment, and reliable delivery support.",
  alternates: {
    canonical: "https://www.alsiglobal.com/warehouse-distribution-service-qatar",
  },
  openGraph: {
    title: "Warehouse and Distribution service in Qatar | ALSI",
    description: "Warehouse and Distribution service in Qatar for secure storage, inventory control, fulfillment, and reliable delivery support.",
    url: "https://www.alsiglobal.com/warehouse-distribution-service-qatar",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warehouse and Distribution service in Qatar | ALSI",
    description: "Warehouse and Distribution service in Qatar for secure storage, inventory control, fulfillment, and reliable delivery support.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <WarehouseDistributionQatar />;
}
