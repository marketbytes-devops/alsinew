import Industries from "@/views/Industries";

export const metadata = {
  title: "Industries We Cater | ALSI Global",
  description:
    "Discover the industries we cater to for tailored solutions that meet your specific needs.",
  alternates: {
    canonical: "https://www.alsiglobal.com/industries",
  },
  openGraph: {
    title: "Industries We Cater | ALSI Global",
    description:
      "Discover the industries we cater to for tailored solutions that meet your specific needs.",
    url: "https://www.alsiglobal.com/industries",
    images: ["/images/og-preview.jpg"],
  },
};

export default function IndustriesPage() {
  return <Industries />;
}

