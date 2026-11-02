import "./globals.css";
import Script from "next/script";
import Layout from "@/components/Layout";

export const metadata = {
  metadataBase: new URL("https://www.alsiglobal.com"),
  title: {
    default: "ALSI Global LLC - Comprehensive Logistics Solutions",
    template: "%s | ALSI Global",
  },
  description:
    "ALSI Global LLC: Your trusted partner for reliable, efficient, and seamless logistics services including customs clearance, freight forwarding, and warehousing across Oman, UAE, Qatar, and Saudi Arabia.",
  keywords: [
    "logistics solutions Oman",
    "customs clearance UAE",
    "freight forwarding Qatar",
    "warehousing Saudi Arabia",
    "project cargo services",
    "ALSI Global LLC",
  ],
  authors: [{ name: "ALSI Global LLC" }],
  creator: "ALSI Global LLC",
  publisher: "ALSI Global LLC",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  verification: {
    google: "Aq-845AsxVyLedLShH746BBiudQs9uJx-wag9EjqfC8",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.alsiglobal.com",
    siteName: "ALSI Global",
    title: "ALSI Global LLC - Comprehensive Logistics Solutions",
    description:
      "ALSI Global LLC: Your trusted partner for reliable, efficient, and seamless logistics services including customs clearance, freight forwarding, and warehousing across Oman, UAE, Qatar, and Saudi Arabia.",
    images: [
      {
        url: "/images/og-preview.jpg",
        width: 1200,
        height: 630,
        alt: "ALSI Global Logistics Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ALSI Global LLC - Comprehensive Logistics Solutions",
    description:
      "ALSI Global LLC: Your trusted partner for reliable, efficient, and seamless logistics services including customs clearance, freight forwarding, and warehousing.",
    images: ["/images/og-preview.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        {process.env.NODE_ENV === "production" && (
          <>
            {/* Google Tag Manager */}
            <Script
              id="gtm-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NTVRNF6T');`,
              }}
            />

            {/* Microsoft Clarity */}
            <Script
              id="clarity-script"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "ke1f3r2c8b");`,
              }}
            />

            {/* Google tag (gtag.js) */}
            <Script
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=G-TV46Y6L6V3"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-TV46Y6L6V3');`,
              }}
            />

            {/* Poptin */}
            <Script
              id="pixel-script-poptin"
              strategy="lazyOnload"
              src="https://cdn.popt.in/pixel.js?id=6ec3668313c4e"
            />
          </>
        )}
      </head>
      <body>
        {/* Tawk.to Chat Widget */}
        <Script
          id="tawk-to"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
if (window.tawkLoaded) return;
window.tawkLoaded = true;
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6590263c8d261e1b5f4d9c4b/1hithanq2';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`,
          }}
        />

        {process.env.NODE_ENV === "production" && (
          <>
            {/* Google Tag Manager (noscript) */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-NTVRNF6T"
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
              />
            </noscript>
          </>
        )}

        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
