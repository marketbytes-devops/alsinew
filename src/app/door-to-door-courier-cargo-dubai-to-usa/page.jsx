import DubaiToUsa from "@/views/LandingPage/DubaiToUsa";

export const metadata = {
  title: "Cargo Shipping & Logistics Services from Dubai to USA | ALSI Global",
  description: "ALSI Global provides reliable cargo shipping and logistics services from Dubai to the USA, offering customized solutions for commercial, industrial, oversized, and project cargo.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-dubai-to-usa",
  },
  openGraph: {
    title: "Cargo Shipping & Logistics Services from Dubai to USA | ALSI Global",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Dubai to the USA, offering customized solutions for commercial, industrial, oversized, and project cargo.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-dubai-to-usa",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cargo Shipping & Logistics Services from Dubai to USA | ALSI Global",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Dubai to the USA, offering customized solutions for commercial, industrial, oversized, and project cargo.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DubaiToUsa />;
}
