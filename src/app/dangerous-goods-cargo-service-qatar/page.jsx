import DangerousGoodsCargoQatar from "@/views/LandingPage/DangerousGoodsCargoQatar";

export const metadata = {
  title: "Dangerous Goods cargo service in Qatar | ALSI",
  description: "Dangerous Goods cargo service in Qatar for chemicals, batteries, and hazmat with compliant DG handling, documentation, and freight support.",
  alternates: {
    canonical: "https://www.alsiglobal.com/dangerous-goods-cargo-service-qatar",
  },
  openGraph: {
    title: "Dangerous Goods cargo service in Qatar | ALSI",
    description: "Dangerous Goods cargo service in Qatar for chemicals, batteries, and hazmat with compliant DG handling, documentation, and freight support.",
    url: "https://www.alsiglobal.com/dangerous-goods-cargo-service-qatar",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dangerous Goods cargo service in Qatar | ALSI",
    description: "Dangerous Goods cargo service in Qatar for chemicals, batteries, and hazmat with compliant DG handling, documentation, and freight support.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DangerousGoodsCargoQatar />;
}
