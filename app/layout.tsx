import { AnalyticsConsent } from "@/components/analytics/AnalyticsConsent";
import { Providers } from "@/components/providers/Providers";
import { JsonLd } from "@/components/seo/JsonLd";
import { NoScriptFallback } from "@/components/seo/NoScriptFallback";
import { ResourceHints } from "@/components/seo/ResourceHints";
import { metadata as siteMetadata } from "@/lib/seo/metadata";
import "./globals.css";

export const metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-accent-orange focus:px-4 focus:py-2 focus:text-primary"
        >
          Skip to content
        </a>
        <ResourceHints />
        <Providers>{children}</Providers>
        <NoScriptFallback />
        <AnalyticsConsent />
      </body>
    </html>
  );
}
