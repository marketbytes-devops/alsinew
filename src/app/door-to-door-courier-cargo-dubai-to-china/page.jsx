import DubaiToChina from "@/views/LandingPage/DubaiToChina";

export const metadata = {
  title: "DubaiToChina | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-dubai-to-china",
  },
  openGraph: {
    title: "DubaiToChina | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-dubai-to-china",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DubaiToChina | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DubaiToChina />;
}
