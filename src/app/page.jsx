import Home from "@/views/Home";

export const metadata = {
  title: "Logistics Services and Shipping Companies in Muscat, Oman | ALSI Global",
  description:
    "ALSI Global LLC offers comprehensive logistics solutions including customs clearance, freight forwarding, warehousing, and project cargo services across Oman, UAE, Qatar, and Saudi Arabia.",
  keywords: [
    "logistics solutions",
    "customs clearance",
    "freight forwarding",
    "warehousing",
    "ALSI Global LLC",
    "Oman logistics",
  ],
  alternates: {
    canonical: "https://www.alsiglobal.com",
  },
  openGraph: {
    title: "ALSI Global LLC - Comprehensive Logistics Solutions",
    description:
      "ALSI Global LLC offers comprehensive logistics solutions including customs clearance, freight forwarding, warehousing, and project cargo services across Oman, UAE, Qatar, and Saudi Arabia.",
    url: "https://www.alsiglobal.com",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <Home />;
}

