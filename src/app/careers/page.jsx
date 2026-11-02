import Career from "@/views/Career";

export const metadata = {
  title: "Careers | ALSI Global",
  description:
    "Take the next step in your career with us. Explore opportunities and grow professionally.",
  alternates: {
    canonical: "https://www.alsiglobal.com/careers",
  },
  openGraph: {
    title: "Careers | ALSI Global",
    description:
      "Take the next step in your career with us. Explore opportunities and grow professionally.",
    url: "https://www.alsiglobal.com/careers",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | ALSI Global",
    description:
      "Take the next step in your career with us. Explore opportunities and grow professionally at ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function CareersPage() {
  return <Career />;
}

