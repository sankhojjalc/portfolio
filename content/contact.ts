import { gaCategories } from "./ga-categories";
import { site } from "./site";

export type ContactTone = "orange" | "blue";

interface ContactMethod {
  id: "email" | "linkedin";
  title: string;
  value: string;
  cta: string;
  href: string;
  tone: ContactTone;
  ga: { category: string; action: string; label: string };
}

export const contactMethods: ContactMethod[] = [
  {
    id: "email",
    title: "Say Hello",
    value: site.email,
    cta: "Send Email",
    href: `mailto:${site.email}`,
    tone: "orange",
    ga: { category: gaCategories.viewContactInfo, action: "Contact Method Clicked", label: "Email" },
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    value: "Connect with me",
    cta: "Visit Profile",
    href: site.linkedInUrl,
    tone: "blue",
    ga: { category: gaCategories.viewLinkedIn, action: "LinkedIn Clicked", label: "Contact Section" },
  },
];
