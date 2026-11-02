import Gallery from "@/views/Gallery";

export const metadata = {
  title: "Gallery | ALSI Global",
  description:
    "Explore our gallery showcasing projects, solutions, and highlights from ALSI Global.",
  alternates: {
    canonical: "https://www.alsiglobal.com/gallery",
  },
  openGraph: {
    title: "Gallery | ALSI Global",
    description:
      "Explore our gallery showcasing projects, solutions, and highlights from ALSI Global.",
    url: "https://www.alsiglobal.com/gallery",
    images: ["/images/og-preview.jpg"],
  },
};

export default function GalleryPage() {
  return <Gallery />;
}

