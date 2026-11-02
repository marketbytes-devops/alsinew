import UaeToCuba from "@/views/LandingPage/UaeToCuba";

export const metadata = {
  title: "Door to Door Courier and Cargo Services from UAE to Cuba",
  description: "Ship cargo from UAE to Cuba with ALSI Global. Reliable door to door courier services, freight forwarding, customs clearance, and delivery solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-uae-to-cuba",
  },
  openGraph: {
    title: "Door to Door Courier and Cargo Services from UAE to Cuba",
    description: "Ship cargo from UAE to Cuba with ALSI Global. Reliable door to door courier services, freight forwarding, customs clearance, and delivery solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-uae-to-cuba",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Door to Door Courier and Cargo Services from UAE to Cuba",
    description: "Ship cargo from UAE to Cuba with ALSI Global. Reliable door to door courier services, freight forwarding, customs clearance, and delivery solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <UaeToCuba />;
}
