import RoRoShippingServicesQatar from "@/views/LandingPage/RoRoShippingServicesQatar";

export const metadata = {
  title: "RoRo Shipping Services in Qatar | ALSI Global",
  description: "RoRo Shipping Services in Qatar for vehicles, machinery, and rolling cargo with booking, port handling, customs, and delivery support.",
  alternates: {
    canonical: "https://www.alsiglobal.com/roro-shipping-services-qatar",
  },
  openGraph: {
    title: "RoRo Shipping Services in Qatar | ALSI Global",
    description: "RoRo Shipping Services in Qatar for vehicles, machinery, and rolling cargo with booking, port handling, customs, and delivery support.",
    url: "https://www.alsiglobal.com/roro-shipping-services-qatar",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "RoRo Shipping Services in Qatar | ALSI Global",
    description: "RoRo Shipping Services in Qatar for vehicles, machinery, and rolling cargo with booking, port handling, customs, and delivery support.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <RoRoShippingServicesQatar />;
}
