import OmanToCyprusCargo from "@/views/LandingPage/OmanToCyprusCargo";

export const metadata = {
  title: "Commercial Cargo Services from Oman to Cyprus | ALSI Global",
  description: "Commercial cargo services from Oman to Cyprus with air, sea freight, FCL/LCL and logistics support.",
  alternates: {
    canonical: "https://www.alsiglobal.com/commercial-cargo-oman-cyprus",
  },
  openGraph: {
    title: "Commercial Cargo Services from Oman to Cyprus | ALSI Global",
    description: "Commercial cargo services from Oman to Cyprus with air, sea freight, FCL/LCL and logistics support.",
    url: "https://www.alsiglobal.com/commercial-cargo-oman-cyprus",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Cargo Services from Oman to Cyprus | ALSI Global",
    description: "Commercial cargo services from Oman to Cyprus with air, sea freight, FCL/LCL and logistics support.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToCyprusCargo />;
}
