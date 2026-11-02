import UaeToHaiti from "@/views/LandingPage/UaeToHaiti";

export const metadata = {
  title: "Door to Door Courier and Cargo Services from UAE to Haiti | ALSI Global",
  description: "Reliable door to door courier and cargo services from UAE to Haiti. Air freight, sea freight, customs support, freight forwarding, and end-to-end logistics solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-uae-to-haiti",
  },
  openGraph: {
    title: "Door to Door Courier and Cargo Services from UAE to Haiti | ALSI Global",
    description: "Reliable door to door courier and cargo services from UAE to Haiti. Air freight, sea freight, customs support, freight forwarding, and end-to-end logistics solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-uae-to-haiti",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Door to Door Courier and Cargo Services from UAE to Haiti | ALSI Global",
    description: "Reliable door to door courier and cargo services from UAE to Haiti. Air freight, sea freight, customs support, freight forwarding, and end-to-end logistics solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <UaeToHaiti />;
}
