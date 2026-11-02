import Market from "@/views/Market";

export const metadata = {
  title: "Market Updates | ALSI Global",
  description:
    "Stay informed with our latest market updates for valuable insights and informed decisions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/market-updates",
  },
  openGraph: {
    title: "Market Updates | ALSI Global",
    description:
      "Stay informed with our latest market updates for valuable insights and informed decisions.",
    url: "https://www.alsiglobal.com/market-updates",
    images: ["/images/og-preview.jpg"],
  },
};

export default function MarketUpdatesPage() {
  return <Market />;
}

