import TemperatureControlledFreightQatar from "@/views/LandingPage/TemperatureControlledFreightQatar";

export const metadata = {
  title: "Temperature Controlled freight in Qatar | ALSI",
  description: "Temperature controlled freight in Qatar for food, pharma, and perishables with monitored storage, reefer transport, and cold chain support.",
  alternates: {
    canonical: "https://www.alsiglobal.com/temperature-controlled-freight-qatar",
  },
  openGraph: {
    title: "Temperature Controlled freight in Qatar | ALSI",
    description: "Temperature controlled freight in Qatar for food, pharma, and perishables with monitored storage, reefer transport, and cold chain support.",
    url: "https://www.alsiglobal.com/temperature-controlled-freight-qatar",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Temperature Controlled freight in Qatar | ALSI",
    description: "Temperature controlled freight in Qatar for food, pharma, and perishables with monitored storage, reefer transport, and cold chain support.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <TemperatureControlledFreightQatar />;
}
