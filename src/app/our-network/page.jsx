import Network from "@/views/Network";

export const metadata = {
  title: "Our Logistics and Shipping Network | ALSI Global",
  description:
    "Explore the efficiency of our logistics and shipping network for customized solutions to optimize your operations.",
  alternates: {
    canonical: "https://www.alsiglobal.com/our-network",
  },
  openGraph: {
    title: "Our Logistics and Shipping Network | ALSI Global",
    description:
      "Explore the efficiency of our logistics and shipping network for customized solutions to optimize your operations.",
    url: "https://www.alsiglobal.com/our-network",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Logistics and Shipping Network | ALSI Global",
    description:
      "Explore the efficiency of our logistics and shipping network for customized solutions across Oman, UAE, Qatar, and Saudi Arabia.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function OurNetworkPage() {
  return <Network />;
}

