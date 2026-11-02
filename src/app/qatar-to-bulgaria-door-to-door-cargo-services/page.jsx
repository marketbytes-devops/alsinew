import QatarToBulgaria from "@/views/LandingPage/QatarToBulgaria";

export const metadata = {
  title: "Door to Door Cargo Services Qatar to Bulgaria | Alsi Global LLC",
  description: "ALSI Global provides reliable door to door courier and cargo services from Qatar to Bulgaria, helping individuals, businesses, traders, manufacturers, and project operators.",
  alternates: {
    canonical: "https://www.alsiglobal.com/qatar-to-bulgaria-door-to-door-cargo-services",
  },
  openGraph: {
    title: "Door to Door Cargo Services Qatar to Bulgaria | Alsi Global LLC",
    description: "ALSI Global provides reliable door to door courier and cargo services from Qatar to Bulgaria, helping individuals, businesses, traders, manufacturers, and project operators.",
    url: "https://www.alsiglobal.com/qatar-to-bulgaria-door-to-door-cargo-services",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Door to Door Cargo Services Qatar to Bulgaria | Alsi Global LLC",
    description: "ALSI Global provides reliable door to door courier and cargo services from Qatar to Bulgaria, helping individuals, businesses, traders, manufacturers, and project operators.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <QatarToBulgaria />;
}
