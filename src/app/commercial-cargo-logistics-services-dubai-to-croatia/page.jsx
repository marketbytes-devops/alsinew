import DubaiToCroatiaCargo from "@/views/LandingPage/DubaiToCroatiaCargo";

export const metadata = {
  title: "Commercial Cargo and Logistics Services from Dubai to Croatia",
  description: "Commercial cargo services from Dubai to Croatia. Air & sea freight, FCL/LCL shipping, customs support, and project logistics by ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/commercial-cargo-logistics-services-dubai-to-croatia",
  },
  openGraph: {
    title: "Commercial Cargo and Logistics Services from Dubai to Croatia",
    description: "Commercial cargo services from Dubai to Croatia. Air & sea freight, FCL/LCL shipping, customs support, and project logistics by ALSI Global.",
    url: "https://www.alsiglobal.com/commercial-cargo-logistics-services-dubai-to-croatia",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Cargo and Logistics Services from Dubai to Croatia",
    description: "Commercial cargo services from Dubai to Croatia. Air & sea freight, FCL/LCL shipping, customs support, and project logistics by ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <DubaiToCroatiaCargo />;
}
