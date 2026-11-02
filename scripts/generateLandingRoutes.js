const fs = require('fs');
const path = require('path');

const landingRoutes = JSON.parse(fs.readFileSync(path.join(__dirname, 'landingRoutes.json'), 'utf8'));

console.log(`Processing ${landingRoutes.length} landing routes...`);

let generatedCount = 0;

for (const route of landingRoutes) {
  const slug = route.routePath.replace(/^\//, '').trim();
  if (!slug) continue;

  const appDir = path.join(__dirname, '../src/app', slug);
  if (!fs.existsSync(appDir)) {
    fs.mkdirSync(appDir, { recursive: true });
  }

  const pagePath = path.join(appDir, 'page.jsx');
  const viewFile = route.file.replace(/\\/g, '/');
  const compName = route.component;

  // Try to find the associated Data file to extract meta
  let meta = {
    title: `${compName} | ALSI Global`,
    description: `Comprehensive international courier and cargo logistics services with ALSI Global.`,
  };

  const viewFilePath = path.join(__dirname, '../src/views', `${viewFile}.jsx`);
  if (fs.existsSync(viewFilePath)) {
    const viewCode = fs.readFileSync(viewFilePath, 'utf8');
    // Find import ... from "./...Data.js"
    const dataImportMatch = viewCode.match(/import\s+([A-Za-z0-9_]+)\s+from\s+["'](\.\/[^"']+Data\.js)["']/i);
    if (dataImportMatch) {
      const dataRelPath = dataImportMatch[2];
      const dataFullPath = path.resolve(path.dirname(viewFilePath), dataRelPath);
      if (fs.existsSync(dataFullPath)) {
        try {
          const dataCode = fs.readFileSync(dataFullPath, 'utf8');
          // Extract title and description with regex
          const titleMatch = dataCode.match(/title:\s*["'`]([^"'`]+)["'`]/);
          const descMatch = dataCode.match(/description:\s*["'`]([^"'`]+)["'`]/);
          if (titleMatch) meta.title = titleMatch[1].trim();
          if (descMatch) meta.description = descMatch[1].trim();
        } catch (e) {
          // fallback to defaults
        }
      }
    }
  }

  // Escape any backticks or special characters in title and description
  const safeTitle = JSON.stringify(meta.title);
  const safeDesc = JSON.stringify(meta.description);
  const canonicalUrl = `https://www.alsiglobal.com/${slug}`;

  const content = `import ${compName} from "@/views/${viewFile}";

export const metadata = {
  title: ${safeTitle},
  description: ${safeDesc},
  alternates: {
    canonical: "${canonicalUrl}",
  },
  openGraph: {
    title: ${safeTitle},
    description: ${safeDesc},
    url: "${canonicalUrl}",
    images: ["/images/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: ${safeTitle},
    description: ${safeDesc},
    images: ["/images/og-preview.jpg"],
  },
};

export default function Page() {
  return <${compName} />;
}
`;

  fs.writeFileSync(pagePath, content, 'utf8');
  generatedCount++;
}

console.log(`Successfully generated ${generatedCount} Next.js landing route pages in src/app/!`);
