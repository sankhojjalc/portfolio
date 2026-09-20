export type SectionId = "about" | "experience" | "projects" | "writing" | "contact";

interface NavLink {
  name: string;
  href: string;
  gaLabel: string;
}

interface SectionConfig {
  id: SectionId;
  label: string;
  gaLabel: string;
  enabled: boolean;
}

// Order here is the on-page order. Set `enabled: true` to publish a section.
export const sections: SectionConfig[] = [
  { id: "about", label: "About", gaLabel: "About", enabled: true },
  { id: "experience", label: "Experience", gaLabel: "WorkEx", enabled: true },
  { id: "projects", label: "Projects", gaLabel: "Projects", enabled: false },
  { id: "writing", label: "Writing", gaLabel: "Writing", enabled: false },
  { id: "contact", label: "Contact", gaLabel: "Contacts", enabled: true },
];

export const enabledSections = sections.filter((section) => section.enabled);

export const isSectionEnabled = (id: SectionId): boolean =>
  enabledSections.some((section) => section.id === id);

export const navLinks: NavLink[] = enabledSections.map(({ id, label, gaLabel }) => ({
  name: label,
  href: `#${id}`,
  gaLabel,
}));
