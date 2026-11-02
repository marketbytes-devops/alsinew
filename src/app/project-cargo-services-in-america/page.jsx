import ProjectCargoAmerica from "@/views/LandingPage/ProjectCargoAmerica";

export const metadata = {
  title: "ProjectCargoAmerica | ALSI Global",
  description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/project-cargo-services-in-america",
  },
  openGraph: {
    title: "ProjectCargoAmerica | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    url: "https://www.alsiglobal.com/project-cargo-services-in-america",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProjectCargoAmerica | ALSI Global",
    description: "Comprehensive international courier and cargo logistics services with ALSI Global.",
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <ProjectCargoAmerica />;
}
