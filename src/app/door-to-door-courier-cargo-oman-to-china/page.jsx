import OmanToChina from "@/views/LandingPage/OmanToChina";

export const metadata = {
  title: "Door to Door Cargo Services Oman to China | ALSI Global",
  description: "Secure door to door courier and cargo services from Oman to China. ALSI Global handles parcels, commercial cargo, customs clearance, and global freight delivery.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-oman-to-china",
  },
  openGraph: {
    title: "Door to Door Cargo Services Oman to China | ALSI Global",
    description: "Secure door to door courier and cargo services from Oman to China. ALSI Global handles parcels, commercial cargo, customs clearance, and global freight delivery.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-oman-to-china",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Door to Door Cargo Services Oman to China | ALSI Global",
    description: "Secure door to door courier and cargo services from Oman to China. ALSI Global handles parcels, commercial cargo, customs clearance, and global freight delivery.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToChina />;
}
