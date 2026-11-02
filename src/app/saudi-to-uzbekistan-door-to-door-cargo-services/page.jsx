import SaudiToUzbekistan from "@/views/LandingPage/SaudiToUzbekistan";

export const metadata = {
  title: "Door to Door Cargo Saudi to Uzbekistan | Alsi Global LLC",
  description: "Door to door courier and cargo services from Saudi to Uzbekistan with reliable road and air freight, customs clearance, and end-to-end logistics solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/saudi-to-uzbekistan-door-to-door-cargo-services",
  },
  openGraph: {
    title: "Door to Door Cargo Saudi to Uzbekistan | Alsi Global LLC",
    description: "Door to door courier and cargo services from Saudi to Uzbekistan with reliable road and air freight, customs clearance, and end-to-end logistics solutions.",
    url: "https://www.alsiglobal.com/saudi-to-uzbekistan-door-to-door-cargo-services",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Door to Door Cargo Saudi to Uzbekistan | Alsi Global LLC",
    description: "Door to door courier and cargo services from Saudi to Uzbekistan with reliable road and air freight, customs clearance, and end-to-end logistics solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <SaudiToUzbekistan />;
}
