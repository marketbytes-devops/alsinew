import DubaiToUruguay from "@/views/LandingPage/DubaiToUruguay";

export const metadata = {
  title: "Cargo Shipping & Logistics Services from Dubai to Uruguay | ALSI Global",
  description: "Reliable cargo shipping and logistics services from Dubai to Uruguay for commercial, industrial, oversized, and project cargo. Get tailored freight solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/dubai-to-uruguay-door-to-door-cargo-services",
  },
  openGraph: {
    title: "Cargo Shipping & Logistics Services from Dubai to Uruguay | ALSI Global",
    description: "Reliable cargo shipping and logistics services from Dubai to Uruguay for commercial, industrial, oversized, and project cargo. Get tailored freight solutions.",
    url: "https://www.alsiglobal.com/dubai-to-uruguay-door-to-door-cargo-services",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cargo Shipping & Logistics Services from Dubai to Uruguay | ALSI Global",
    description: "Reliable cargo shipping and logistics services from Dubai to Uruguay for commercial, industrial, oversized, and project cargo. Get tailored freight solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DubaiToUruguay />;
}
