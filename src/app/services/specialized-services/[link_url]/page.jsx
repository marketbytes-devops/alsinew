import SpecializedDedicatedPage from "@/views/Services/UiComponents/SpecializedDedicatedPage";

export async function generateMetadata({ params }) {
  const { link_url } = await params;
  const cleanLinkUrl = (link_url || "").replace(/^\uFEFF/, "");

  try {
    const res = await fetch(`https://www.alsibackend.com/api/service/specialized-entries/${cleanLinkUrl}`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      const stripHtml = (html) => (html ? html.replace(/<[^>]*>/g, "") : "");
      const title = stripHtml(data.service_title || data.title || "Specialized Service");
      const description = stripHtml(data.content_paragraphs || "").substring(0, 160) || `Comprehensive logistics solutions for ${title} from ALSI Global.`;
      const imageUrl = data.banner_image || data.image || "https://www.alsiglobal.com/images/og-preview.jpg";

      return {
        title: `${title} | ALSI Global`,
        description,
        alternates: {
          canonical: `https://www.alsiglobal.com/services/specialized-services/${cleanLinkUrl}`,
        },
        openGraph: {
          title: `${title} | ALSI Global`,
          description,
          url: `https://www.alsiglobal.com/services/specialized-services/${cleanLinkUrl}`,
          images: [imageUrl],
        },
      };
    }
  } catch (e) {
    // fallback
  }

  return {
    title: "Specialized Services | ALSI Global",
  };
}

export default function SpecializedServiceDetailPage() {
  return <SpecializedDedicatedPage />;
}
