import type { Metadata } from "next";
import { site } from "@/content/site";

const title = `${site.userName} - ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title,
  description: site.description,
  keywords: [
    "AI Engineer",
    "LLM Engineer",
    "Generative AI",
    "RAG",
    "AI Agents",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: site.userName }],
  creator: site.userName,
  publisher: site.userName,
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
  alternates: { canonical: site.siteUrl },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.siteUrl,
    siteName: `${site.userName} - Portfolio`,
    title,
    description: site.description,
    images: [{ url: site.avatarPath, width: 850, height: 850, alt: site.userName }],
  },
  twitter: {
    card: "summary",
    title,
    description: site.description,
    creator: site.twitterHandle,
    images: [site.avatarPath],
  },
  icons: {
    icon: [{ url: "/icon-32.png", sizes: "32x32", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: `${site.userName} - Portfolio`,
  },
  formatDetection: { telephone: false },
};
