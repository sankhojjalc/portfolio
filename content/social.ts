import { gaCategories } from "./ga-categories";
import { site } from "./site";

export type SocialId = "github" | "linkedin" | "email";

interface SocialLink {
  id: SocialId;
  label: string;
  href: string;
  external: boolean;
  ga: { category: string; action: string };
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: site.githubUrl,
    external: true,
    ga: { category: gaCategories.viewGithub, action: "GitHub Clicked" },
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: site.linkedInUrl,
    external: true,
    ga: { category: gaCategories.viewLinkedIn, action: "LinkedIn Clicked" },
  },
  {
    id: "email",
    label: "Email",
    href: `mailto:${site.email}`,
    external: false,
    ga: { category: gaCategories.viewContactInfo, action: "Email Clicked" },
  },
];
