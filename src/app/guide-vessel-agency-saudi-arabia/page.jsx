import GuideVesselAgencySaudiArabia from "@/views/LandingPage/GuideVesselAgencySaudiArabia";

export const metadata = {
  title: "GuideVesselAgencySaudiArabia | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/guide-vessel-agency-saudi-arabia",
  },
  openGraph: {
    title: "GuideVesselAgencySaudiArabia | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/guide-vessel-agency-saudi-arabia",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GuideVesselAgencySaudiArabia | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <GuideVesselAgencySaudiArabia />;
}
