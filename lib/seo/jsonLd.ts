import { organizations } from "@/content/experience";
import { site } from "@/content/site";

export function buildJsonLd() {
  const personId = `${site.siteUrl}#person`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.userName,
        jobTitle: site.role,
        description: site.description,
        image: {
          "@type": "ImageObject",
          "@id": `${site.siteUrl}#personImage`,
          url: `${site.siteUrl}${site.avatarPath}`,
          width: 850,
          height: 850,
        },
        sameAs: [site.linkedInUrl, site.githubUrl],
        knowsAbout: [
          "Artificial Intelligence",
          "Large Language Models",
          "Retrieval-Augmented Generation",
          "AI Agents",
          "Python",
          "React",
          "Next.js",
          "TypeScript",
          "Full Stack Development",
        ],
        worksFor: organizations.map((org) => ({
          "@type": "Organization",
          name: org.name,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${site.siteUrl}#website`,
        url: site.siteUrl,
        name: `${site.userName} - Portfolio`,
        description: site.description,
        mainEntity: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.siteUrl}#profilepage`,
        url: site.siteUrl,
        mainEntity: { "@id": personId },
      },
    ],
  };
}
