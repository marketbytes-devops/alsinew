import DubaiToCubaCargo from "@/views/LandingPage/DubaiToCubaCargo";

export const metadata = {
  title: "Commercial Cargo and Logistics Services from Dubai to Cuba",
  description: "Ship commercial cargo from Dubai to Cuba with ALSI Global. Air & sea freight, FCL/LCL shipping, customs support, and reliable logistics solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/commercial-cargo-logistics-services-dubai-to-cuba",
  },
  openGraph: {
    title: "Commercial Cargo and Logistics Services from Dubai to Cuba",
    description: "Ship commercial cargo from Dubai to Cuba with ALSI Global. Air & sea freight, FCL/LCL shipping, customs support, and reliable logistics solutions.",
    url: "https://www.alsiglobal.com/commercial-cargo-logistics-services-dubai-to-cuba",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Cargo and Logistics Services from Dubai to Cuba",
    description: "Ship commercial cargo from Dubai to Cuba with ALSI Global. Air & sea freight, FCL/LCL shipping, customs support, and reliable logistics solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DubaiToCubaCargo />;
}
