import DedicatedPage from "@/views/Services/DedicatedPage";

export async function generateMetadata({ params }) {
  const { name } = await params;

  try {
    const res = await fetch(`https://www.alsibackend.com/api/service/services/${name}/`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      const stripHtml = (html) => (html ? html.replace(/<[^>]*>/g, "") : "");
      const title = stripHtml(data.service_title || data.title || name);
      const description = stripHtml(data.content_paragraphs || "").substring(0, 160) || `Reliable ${title} logistics services across Oman, UAE, Qatar, and Saudi Arabia from ALSI Global.`;
      const imageUrl = data.banner_image || data.image || "https://www.alsiglobal.com/images/og-preview.jpg";

      return {
        title: `${title} | ALSI Global`,
        description,
        alternates: {
          canonical: `https://www.alsiglobal.com/services/${name}`,
        },
        openGraph: {
          title: `${title} | ALSI Global`,
          description,
          url: `https://www.alsiglobal.com/services/${name}`,
          images: [imageUrl],
        },
      };
    }
  } catch (e) {
    // fallback
  }

  return {
    title: "Services | ALSI Global",
  };
}

export default function ServiceDetailPage() {
  return <DedicatedPage />;
}
