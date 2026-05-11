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

const siteUrl = "https://willschulz.me";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "William Schulz",
  url: siteUrl,
  jobTitle: "Software Developer, Designer, Creative & Founder",
  description: "Software developer, designer, creative, and founder building modern digital experiences.",
  sameAs: [
    "https://github.com/aw3-technology",
    "https://www.linkedin.com/in/will-schulz/",
    "https://x.com/aw3_xyz",
    "https://www.instagram.com/will_parkerr/",
    "https://www.facebook.com/will.schulz/",
    "https://calendly.com/will-schulz-aw3/30min",
  ],
  knowsAbout: ["Software Development", "Product Design", "UI Design", "UX Design", "Web Development", "Founder"],
};

export const metadata: Metadata = {
  title: "William Schulz — Developer, Designer, Creative, Founder",
  description: "Software developer, designer, creative, and founder building modern digital experiences.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "William Schulz — Developer, Designer, Creative, Founder",
    description: "Software developer, designer, creative, and founder building modern digital experiences.",
    url: siteUrl,
    siteName: "William Schulz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "William Schulz — Developer, Designer, Creative, Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "William Schulz — Developer, Designer, Creative, Founder",
    description: "Software developer, designer, creative, and founder building modern digital experiences.",
    images: ["/og-image.png"],
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
