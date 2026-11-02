import OmanToGermanyCargo from "@/views/LandingPage/OmanToGermanyCargo";

export const metadata = {
  title: "Cargo Shipping & Logistics Services from Oman to Germany | ALSI Global",
  description: "ALSI Global provides reliable cargo shipping and logistics services from Oman to Germany, offering customized solutions for commercial, industrial, oversized, and project cargo.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-oman-germany",
  },
  openGraph: {
    title: "Cargo Shipping & Logistics Services from Oman to Germany | ALSI Global",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Oman to Germany, offering customized solutions for commercial, industrial, oversized, and project cargo.",
    url: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-oman-germany",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cargo Shipping & Logistics Services from Oman to Germany | ALSI Global",
    description: "ALSI Global provides reliable cargo shipping and logistics services from Oman to Germany, offering customized solutions for commercial, industrial, oversized, and project cargo.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToGermanyCargo />;
}
