import About from "@/views/About";

export const metadata = {
  title: "About Us | Freight Forwarding & Logistics in Oman | ALSI Global",
  description:
    "Learn about ALSI Global, your reliable logistics partner in Oman, UAE, Qatar, and Saudi Arabia providing comprehensive freight forwarding, customs, and warehousing.",
  keywords: [
    "about alsi global",
    "freight forwarding companies in oman",
    "freight forwarders in oman",
    "logistics oman",
  ],
  alternates: {
    canonical: "https://www.alsiglobal.com/about-us",
  },
  openGraph: {
    title: "About Us | Freight Forwarding & Logistics in Oman | ALSI Global",
    description:
      "ALSI, your reliable partner in freight forwarding companies and trusted freight forwarders in Oman, ensuring efficient and seamless cargo transportation.",
    url: "https://www.alsiglobal.com/about-us",
    images: ["/images/og-preview.jpg"],
  },
};

export default function AboutPage() {
  return <About />;
}

