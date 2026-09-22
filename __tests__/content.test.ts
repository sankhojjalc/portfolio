import fs from "node:fs";
import path from "node:path";
import { organizations } from "@/content/experience";
import { gaCategories } from "@/content/ga-categories";
import { enabledSections, navLinks, sections } from "@/content/sections";
import { site } from "@/content/site";
import { skillGroups } from "@/content/skills";

const publicFile = (webPath: string) => path.join(process.cwd(), "public", webPath);

describe("content integrity", () => {
  it("points at files that actually exist in /public", () => {
    for (const webPath of [site.avatarPath, site.resumePath, "/site.webmanifest", "/icon-32.png", "/apple-touch-icon.png", "/icon-192.png", "/icon-512.png"]) {
      expect(fs.existsSync(publicFile(webPath))).toBe(true);
    }
  });

  it("has well-formed contact details", () => {
    expect(site.email).toMatch(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
    expect(site.siteUrl).toMatch(/^https:\/\//);
  });

  it("derives navigation from the enabled sections only", () => {
    expect(new Set(sections.map((s) => s.id)).size).toBe(sections.length);
    expect(navLinks.map((link) => link.href)).toEqual(enabledSections.map((s) => `#${s.id}`));
  });

  it("has complete, unique, newest-first experience entries", () => {
    expect(new Set(organizations.map((o) => o.id)).size).toBe(organizations.length);
    for (const org of organizations) {
      expect(org.tasks.length).toBeGreaterThan(0);
      for (const task of org.tasks) {
        expect(task).not.toMatch(/\p{Extended_Pictographic}/u);
      }
    }
    expect(organizations[0].yearOfService).toMatch(/Present$/);
    expect(organizations.filter((o) => o.yearOfService.endsWith("Present"))).toHaveLength(1);
  });

  it("defines skill groups with items and theme-safe colours", () => {
    for (const group of skillGroups) {
      expect(group.items.length).toBeGreaterThan(0);
      expect(group.chip).toContain("[[data-theme=dark]_&]:");
    }
  });

  it("never lists the same skill twice", () => {
    const all = skillGroups.flatMap((group) => group.items.map((item) => item.toLowerCase()));

    expect(new Set(all).size).toBe(all.length);
  });

  it("keeps analytics category names unique", () => {
    const values = Object.values(gaCategories);
    expect(new Set(values).size).toBe(values.length);
  });
});
