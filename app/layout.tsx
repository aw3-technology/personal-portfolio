import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "@/styles/globals.css";
import { CursorProvider } from "@/components/CursorContext";
import CustomCursor from "@/components/CustomCursor";
import BackToTop from "@/components/BackToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import AppWrapper from "@/components/AppWrapper";
import { socialLinks } from "@/lib/social";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESCRIPTION } from "@/lib/site";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Software Developer, Designer, Creative & Founder",
  description: SITE_DESCRIPTION,
  sameAs: socialLinks.map((social) => social.href),
  knowsAbout: ["Software Development", "Product Design", "UI Design", "UX Design", "Web Development", "Founder"],
};

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
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
