import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "@/styles/globals.css";
import { CursorProvider } from "@/components/CursorContext";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import AppWrapper from "@/components/AppWrapper";

const bodyFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body"
});

const displayFont = Instrument_Serif({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: "400",
});

const siteUrl = "https://yourportfolio.com"; // [REPLACE THIS] Update with your domain

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "John Anderson",
  url: siteUrl,
  jobTitle: "Product Designer & Developer",
  description: "Product-focused designer and developer crafting premium, modern digital experiences.",
  sameAs: [
    "https://dribbble.com/", // [REPLACE THIS] Update with your Dribbble URL
    "https://github.com/yourprofile", // [REPLACE THIS] Update with your GitHub URL
    "https://linkedin.com/in/yourprofile", // [REPLACE THIS] Update with your LinkedIn URL
  ],
  knowsAbout: ["UI Design", "UX Design", "Product Design", "Design Systems", "Web Development"],
};

export const metadata: Metadata = {
  title: "John Anderson — Product Designer & Developer",
  description: "Product-focused designer and developer crafting premium, modern digital experiences.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "John Anderson — Product Designer & Developer",
    description: "Product-focused designer and developer crafting premium, modern digital experiences.",
    url: siteUrl,
    siteName: "John Anderson",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "John Anderson — Product Designer & Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Anderson — Product Designer & Developer",
    description: "Product-focused designer and developer crafting premium, modern digital experiences.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <head>
        {/* Preconnect to Google Fonts for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body bg-bg text-text selection:bg-accent selection:text-white">
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-text focus:text-bg focus:rounded-full focus:outline-none"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <CursorProvider>
            <CustomCursor />
            <AppWrapper>
              {children}
              <BackToTop />
            </AppWrapper>
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
