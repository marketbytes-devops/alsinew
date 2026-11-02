import DubaiToBhutan from "@/views/LandingPage/DubaiToBhutan";

export const metadata = {
  title: "DubaiToBhutan | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-dubai-bhutan",
  },
  openGraph: {
    title: "DubaiToBhutan | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-dubai-bhutan",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DubaiToBhutan | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DubaiToBhutan />;
}
