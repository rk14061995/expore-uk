import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Explore the Wonders of the United Kingdom | Travel & Destinations",
  description: "Discover iconic landmarks, natural wonders, and cultural gems across the United Kingdom. Explore cities like London, Edinburgh, and beyond with travel guides, tips, and itineraries.",
  keywords: "United Kingdom travel, UK destinations, London travel, Edinburgh, Stonehenge, UK tourism, UK landmarks, best places to visit in UK, UK adventures",
  author: "exploreuk",
  robots: "index, follow",  // Makes sure search engines index and follow links.
  twitter: {
    card: "summary_large_image",
    site: "@your_twitter_handle",  // Add your Twitter handle if available.
    title: "Explore the Wonders of the United Kingdom",
    description: "Discover iconic landmarks and hidden gems in the United Kingdom. Plan your adventure to the UK with our travel guides.",
    image: "URL_to_image"  // Add an image for Twitter preview, preferably 1200x675px.
  },
  openGraph: {
    type: "website",
    url: "https://www.exploreuk.online",  // Replace with your site's URL.
    title: "Explore the Wonders of the United Kingdom",
    description: "From the historic landmarks of London to the stunning landscapes of Scotland, explore the UK with our comprehensive travel guides.",
    image: "URL_to_image",  // Image for social media preview (1200x630px).
    site_name: "Explore the United Kingdom"
  },
  icons: {
    icon: "/favicon.ico",  // Path to your favicon.
    apple: "/apple-touch-icon.png"  // Path to your Apple touch icon.
  },
  viewport: "width=device-width, initial-scale=1.0", // Ensures mobile responsiveness.
  charset: "UTF-8",  // For proper character encoding.
  lang: "en", // Set the language of the website.
  canonical: "https://www.exploreuk.online"  // Set the canonical URL for your homepage to avoid duplicate content.
};

// AdSense script
const adsenseScript = `
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "YOUR_ADSENSE_CLIENT_ID",
    enable_page_level_ads: true
  });
`;
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CDRR5CBCQL"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CDRR5CBCQL');
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

         {/* Google AdSense Script */}
         <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <script dangerouslySetInnerHTML={{ __html: adsenseScript }} />

        {/* jQuery and Bootstrap JS */}
        <Script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
