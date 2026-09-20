import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "@/components/layout/Header";

const mockSetTheme = jest.fn();

jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "dark", setTheme: mockSetTheme }),
}));

jest.mock("@next/third-parties/google", () => ({
  GoogleAnalytics: () => null,
  sendGAEvent: jest.fn(),
}));

describe("Header", () => {
  beforeEach(() => mockSetTheme.mockClear());

  it("exposes the mobile menu state to assistive technology", async () => {
    const user = userEvent.setup();
    render(<Header />);

    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAttribute("aria-controls", "mobile-nav");

    await user.click(toggle);

    const openToggle = screen.getByRole("button", { name: "Close menu" });
    expect(openToggle).toHaveAttribute("aria-expanded", "true");
    expect(document.getElementById("mobile-nav")).toBeInTheDocument();
  });

  it("closes the mobile menu with Escape and returns focus to the toggle", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    await user.keyboard("{Escape}");

    const toggle = screen.getByRole("button", { name: "Open menu" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveFocus();
    expect(document.getElementById("mobile-nav")).not.toBeInTheDocument();
  });

  it("closes the mobile menu after choosing a link", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: "Open menu" }));
    const mobileNav = document.getElementById("mobile-nav") as HTMLElement;
    await user.click(mobileNav.querySelector("a") as HTMLAnchorElement);

    expect(document.getElementById("mobile-nav")).not.toBeInTheDocument();
  });

  it("switches the theme when the toggle is used", async () => {
    const user = userEvent.setup();
    render(<Header />);

    await user.click(screen.getByRole("button", { name: "Toggle theme" }));

    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });
});
