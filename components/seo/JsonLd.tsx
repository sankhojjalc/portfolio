import { buildJsonLd } from "@/lib/seo/jsonLd";

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
    />
  );
}
