import { render, screen, within } from "@testing-library/react";
import { configureAxe } from "jest-axe";
import Home from "@/app/page";
import { site } from "@/content/site";
import { organizations } from "@/content/experience";

jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "dark", setTheme: jest.fn() }),
}));

jest.mock("@next/third-parties/google", () => ({
  GoogleAnalytics: () => null,
  sendGAEvent: jest.fn(),
}));

jest.mock("@/lib/hooks/useTypewriter", () => ({
  useTypewriter: (text: string) => ({ displayText: text, isDone: true }),
}));

const axe = configureAxe({ rules: { "color-contrast": { enabled: false } } });

describe("Home page smoke test", () => {
  it("renders the hero with the visitor-facing identity", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(site.userName);
    expect(screen.getByRole("img", { name: /portrait/i })).toHaveAttribute("src", site.avatarPath);
    expect(screen.getByRole("link", { name: /resume/i })).toHaveAttribute("href", site.resumePath);
  });

  it("shows only the enabled sections in the primary navigation", () => {
    render(<Home />);

    const nav = screen.getByRole("navigation", { name: "Primary" });
    const labels = within(nav)
      .getAllByRole("link")
      .map((link) => link.textContent);

    expect(labels).toEqual(expect.arrayContaining(["About", "Experience", "Contact"]));
    expect(labels).not.toContain("Projects");
    expect(labels).not.toContain("Writing");
  });

  it("does not render hidden sections", () => {
    const { container } = render(<Home />);

    expect(container.querySelector("#about")).toBeInTheDocument();
    expect(container.querySelector("#experience")).toBeInTheDocument();
    expect(container.querySelector("#contact")).toBeInTheDocument();
    expect(container.querySelector("#projects")).not.toBeInTheDocument();
    expect(container.querySelector("#writing")).not.toBeInTheDocument();
  });

  it("lists experience newest first and marks only the current job", () => {
    const { container } = render(<Home />);

    const names = Array.from(container.querySelectorAll("#experience h3")).map((h) => h.textContent);
    expect(names).toEqual(organizations.map((org) => org.name));
    expect(screen.getAllByText("Current")).toHaveLength(1);
    expect(names[0]).toBe("Sber Bank");
  });

  it("has no in-page link pointing at a missing section", () => {
    const { container } = render(<Home />);

    const anchors = Array.from(container.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    const dead = anchors
      .map((a) => a.getAttribute("href") as string)
      .filter((href) => href.length > 1 && !container.querySelector(href));

    expect(anchors.length).toBeGreaterThan(0);
    expect(dead).toEqual([]);
  });

  it("has no detectable accessibility violations (structure, names, roles)", async () => {
    const { container } = render(<Home />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
