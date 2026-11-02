import UaeToLibya from "@/views/LandingPage/UaeToLibya";

export const metadata = {
  title: "Door to Door Courier and Cargo Services from UAE to Libya",
  description: "ALSI Global offers door to door courier and cargo services from UAE to Libya with air freight, sea freight, customs support, and delivery solutions.",
  alternates: {
    canonical: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-uae-to-libya",
  },
  openGraph: {
    title: "Door to Door Courier and Cargo Services from UAE to Libya",
    description: "ALSI Global offers door to door courier and cargo services from UAE to Libya with air freight, sea freight, customs support, and delivery solutions.",
    url: "https://www.alsiglobal.com/door-to-door-courier-and-cargo-services-from-uae-to-libya",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Door to Door Courier and Cargo Services from UAE to Libya",
    description: "ALSI Global offers door to door courier and cargo services from UAE to Libya with air freight, sea freight, customs support, and delivery solutions.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <UaeToLibya />;
}
