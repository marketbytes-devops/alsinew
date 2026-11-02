import OmanToBhutan from "@/views/LandingPage/OmanToBhutan";

export const metadata = {
  title: "Door to Door Courier and Cargo Services from Oman to Bhutan | ALSI Global",
  description: "Door to door courier and cargo services from Oman to Bhutan with customs-led execution. ALSI Global manages pickup, export clearance, international transport, import clearance, and final delivery through structured logistics processes.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-oman-to-bhutan",
  },
  openGraph: {
    title: "Door to Door Courier and Cargo Services from Oman to Bhutan | ALSI Global",
    description: "Door to door courier and cargo services from Oman to Bhutan with customs-led execution. ALSI Global manages pickup, export clearance, international transport, import clearance, and final delivery through structured logistics processes.",
    url: "https://www.alsiglobal.com/door-to-door-courier-cargo-services-oman-to-bhutan",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Door to Door Courier and Cargo Services from Oman to Bhutan | ALSI Global",
    description: "Door to door courier and cargo services from Oman to Bhutan with customs-led execution. ALSI Global manages pickup, export clearance, international transport, import clearance, and final delivery through structured logistics processes.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <OmanToBhutan />;
}
