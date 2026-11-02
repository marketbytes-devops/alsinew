import ProjectCargoIndia from "@/views/LandingPage/ProjectCargoIndia";

export const metadata = {
  title: "ProjectCargoIndia | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/project-cargo-services-in-india",
  },
  openGraph: {
    title: "ProjectCargoIndia | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/project-cargo-services-in-india",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProjectCargoIndia | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <ProjectCargoIndia />;
}
