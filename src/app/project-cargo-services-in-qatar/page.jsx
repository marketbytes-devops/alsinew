import ProjectCargoQatar from "@/views/LandingPage/ProjectCargoQatar";

export const metadata = {
  title: "ProjectCargoQatar | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/project-cargo-services-in-qatar",
  },
  openGraph: {
    title: "ProjectCargoQatar | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/project-cargo-services-in-qatar",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProjectCargoQatar | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <ProjectCargoQatar />;
}
