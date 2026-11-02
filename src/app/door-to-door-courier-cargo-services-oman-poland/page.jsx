import OmanToPoland from "@/views/LandingPage/OmanToPoland";

export const metadata = {
  title: "Door to Door Courier and Cargo Services | Oman to Poland",
  description: "Reliable door to door courier and cargo services from Oman to Poland with structured freight management, customs support, and multimodal transport solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-oman-poland",
  },
  openGraph: {
    title: "Door to Door Courier and Cargo Services | Oman to Poland",
    description: "Reliable door to door courier and cargo services from Oman to Poland with structured freight management, customs support, and multimodal transport solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-oman-poland",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Door to Door Courier and Cargo Services | Oman to Poland",
    description: "Reliable door to door courier and cargo services from Oman to Poland with structured freight management, customs support, and multimodal transport solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToPoland />;
}
