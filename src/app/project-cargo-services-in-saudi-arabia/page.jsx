import ProjectCargoSaudi from "@/views/LandingPage/ProjectCargoSaudi";

export const metadata = {
  title: "ProjectCargoSaudi | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/project-cargo-services-in-saudi-arabia",
  },
  openGraph: {
    title: "ProjectCargoSaudi | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/project-cargo-services-in-saudi-arabia",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProjectCargoSaudi | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <ProjectCargoSaudi />;
}
