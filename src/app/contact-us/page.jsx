import Contact from "@/views/Contact";

export const metadata = {
  title: "Contact Us Today | ALSI Global",
  description:
    "Get in touch with us today for all your inquiries and assistance needs.",
  alternates: {
    canonical: "https://www.alsiglobal.com/contact-us",
  },
  openGraph: {
    title: "Contact Us Today | ALSI Global",
    description:
      "Get in touch with us today for all your inquiries and assistance needs.",
    url: "https://www.alsiglobal.com/contact-us",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us Today | ALSI Global",
    description:
      "Get in touch with us today for all your logistics inquiries and assistance needs across Oman, UAE, Qatar, and Saudi Arabia.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function ContactPage() {
  return <Contact />;
}

