import QatarToPeru from "@/views/LandingPage/QatarToPeru";

export const metadata = {
  title: "Door to Door Courier and Cargo Services | Qatar to Peru",
  description: "Structured door to door courier and cargo services from Qatar to Peru covering pickup, multimodal transport, customs documentation and delivery coordination.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-qatar-peru",
  },
  openGraph: {
    title: "Door to Door Courier and Cargo Services | Qatar to Peru",
    description: "Structured door to door courier and cargo services from Qatar to Peru covering pickup, multimodal transport, customs documentation and delivery coordination.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-qatar-peru",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Door to Door Courier and Cargo Services | Qatar to Peru",
    description: "Structured door to door courier and cargo services from Qatar to Peru covering pickup, multimodal transport, customs documentation and delivery coordination.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <QatarToPeru />;
}
