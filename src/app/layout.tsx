import "./globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://radora.dev"),

  title: {
    default: "Radora | Software, Web & AI Studio",
    template: "%s | Radora",
  },

  description:
    "Radora builds modern websites, custom software, automation systems, and AI-powered digital solutions for growing businesses.",

  keywords: [
    "Radora",
    "Web Development",
    "Next.js",
    "React",
    "Software Development",
    "AI Automation",
    "Digital Products",
    "UI UX",
    "SEO",
  ],

  authors: [{ name: "Radora" }],
  creator: "Radora",
  publisher: "Radora",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Radora | Software, Web & AI Studio",
    description:
      "Modern websites, software engineering, automation, and AI solutions for businesses.",
    url: "https://radora.dev",
    siteName: "Radora",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Radora",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Radora | Software, Web & AI Studio",
    description:
      "Modern websites, software engineering, automation, and AI solutions for businesses.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  alternates: {
    canonical: "https://radora.dev",
    languages: {
      en: "https://radora.dev/en",
      fa: "https://radora.dev/fa",
    },
  },

  category: "technology",
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Radora",
      url: "https://radora.dev",
      logo: "https://radora.dev/logo.png",
      description:
        "Radora builds modern websites, custom software, automation systems, and AI-powered digital solutions.",
      sameAs: [
        "https://github.com/RadoraHQ",
        "https://linkedin.com/company/radora",
      ],
    },
    {
      "@type": "WebSite",
      name: "Radora",
      url: "https://radora.dev",
      inLanguage: ["en", "fa"],
      potentialAction: {
        "@type": "SearchAction",
        target: "https://radora.dev/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0B1220" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body
        className={`${geist.className} bg-[#0B1220] text-white antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
      </body>
    </html>
  );
}
