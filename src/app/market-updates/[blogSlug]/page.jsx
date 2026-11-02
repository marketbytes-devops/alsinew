import MainMarket from "@/views/Market/UiComponents/MainMarket";

export async function generateMetadata({ params }) {
  const { blogSlug } = await params;
  try {
    const backendUrl = (process.env.API_BACKEND_URL || 'https://www.alsibackend.com/api').replace(/\/+$/, '');
    const res = await fetch(`${backendUrl}/market/blog-entries/${blogSlug}/`, {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      const stripHtml = (html) => (html ? html.replace(/<[^>]*>/g, "") : "");
      const title = stripHtml(data.main_title || data.blog_title || "Market Update");
      const description = stripHtml(data.description || "").substring(0, 160);
      const imageUrl = data.image
        ? data.image.startsWith("http")
          ? data.image
          : `https://www.alsibackend.com${data.image}`
        : "https://www.alsiglobal.com/images/og-preview.jpg";

      return {
        title: `${title} | ALSI Global`,
        description,
        alternates: {
          canonical: `https://www.alsiglobal.com/market-updates/${blogSlug}`,
        },
        openGraph: {
          title: `${title} | ALSI Global`,
          description,
          url: `https://www.alsiglobal.com/market-updates/${blogSlug}`,
          images: [imageUrl],
        },
        twitter: {
          card: "summary_large_image",
          title: `${title} | ALSI Global`,
          description,
          images: [imageUrl],
        },
      };
    }
  } catch (e) {
    // Fallback if fetch fails
  }

  return {
    title: "Market Updates | ALSI Global",
    description: "Stay informed with our latest market updates from ALSI Global.",
  };
}

export default function MarketDetailPage() {
  return <MainMarket />;
}
