import SaudiArabiaCustomsClearance from "@/views/LandingPage/SaudiArabiaCustomsClearance";

export const metadata = {
  title: "Saudi Arabia Customs Clearance Services | ALSI Global",
  description: "Avoid delays with expert customs clearance in Saudi Arabia. ZATCA, FASAH, SABER, SFDA, and duty support for importers and exporters.",
  alternates: {
    canonical: "https://www.alsiglobal.com/saudi-arabia-customs-clearance",
  },
  openGraph: {
    title: "Saudi Arabia Customs Clearance Services | ALSI Global",
    description: "Avoid delays with expert customs clearance in Saudi Arabia. ZATCA, FASAH, SABER, SFDA, and duty support for importers and exporters.",
    url: "https://www.alsiglobal.com/saudi-arabia-customs-clearance",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saudi Arabia Customs Clearance Services | ALSI Global",
    description: "Avoid delays with expert customs clearance in Saudi Arabia. ZATCA, FASAH, SABER, SFDA, and duty support for importers and exporters.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <SaudiArabiaCustomsClearance />;
}
