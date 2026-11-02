import GalleryDedicatedPage from "@/views/Gallery/DedicatedPage";

export async function generateMetadata({ params }) {
  const { name } = await params;

  try {
    const res = await fetch(`https://www.alsibackend.com/api/gallery/gallery-entries/${name}/`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      const stripHtml = (html) => (html ? html.replace(/<[^>]*>/g, "") : "");
      const title = stripHtml(data.main_title || data.title || "Gallery Event");
      const description = `Explore gallery photos and highlights from ${title} events and logistics operations.`;
      const imageUrl = data.image || "https://www.alsiglobal.com/images/og-preview.jpg";

      return {
        title: `${title} | ALSI Global`,
        description,
        alternates: {
          canonical: `https://www.alsiglobal.com/gallery/${name}`,
        },
        openGraph: {
          title: `${title} | ALSI Global`,
          description,
          url: `https://www.alsiglobal.com/gallery/${name}`,
          images: [imageUrl],
        },
      };
    }
  } catch (e) {
    // fallback
  }

  return {
    title: "Gallery | ALSI Global",
  };
}

export default function GalleryDetailPage() {
  return <GalleryDedicatedPage />;
}
