import OmanToAndorra from "@/views/LandingPage/OmanToAndorra";

export const metadata = {
  title: "Door to Door Courier and Cargo Services from Oman to Andorra | ALSI Global",
  description: "Reliable door to door courier and cargo services from Oman to Andorra. Air freight, road freight, customs clearance, commercial cargo, personal effects shipping, and end-to-end logistics solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-oman-to-andorra",
  },
  openGraph: {
    title: "Door to Door Courier and Cargo Services from Oman to Andorra | ALSI Global",
    description: "Reliable door to door courier and cargo services from Oman to Andorra. Air freight, road freight, customs clearance, commercial cargo, personal effects shipping, and end-to-end logistics solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-oman-to-andorra",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Door to Door Courier and Cargo Services from Oman to Andorra | ALSI Global",
    description: "Reliable door to door courier and cargo services from Oman to Andorra. Air freight, road freight, customs clearance, commercial cargo, personal effects shipping, and end-to-end logistics solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToAndorra />;
}
