import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { sendGAEvent } from "@next/third-parties/google";
import { AnalyticsConsent, CookieSettingsButton } from "@/components/analytics/AnalyticsConsent";
import { gaEvent } from "@/lib/analytics/gaEvent";
import { getConsent, setConsent } from "@/lib/analytics/consent";
import { isAnalyticsEnabled } from "@/lib/analytics/enabled";
import { site } from "@/content/site";

jest.mock("@next/third-parties/google", () => {
  const { createElement } = jest.requireActual("react");
  return {
    GoogleAnalytics: ({ gaId }: { gaId: string }) =>
      createElement("div", { "data-testid": "ga", "data-ga-id": gaId }),
    sendGAEvent: jest.fn(),
  };
});

jest.mock("@/lib/analytics/enabled", () => ({ isAnalyticsEnabled: jest.fn() }));

const banner = () => screen.queryByRole("region", { name: "Analytics cookies" });

describe("Analytics consent on the live site", () => {
  beforeEach(() => {
    jest.mocked(isAnalyticsEnabled).mockReturnValue(true);
    act(() => setConsent(null));
    window.localStorage.clear();
    jest.mocked(sendGAEvent).mockClear();
  });

  it("asks first and does not load Google Analytics before a choice", () => {
    render(<AnalyticsConsent />);

    expect(banner()).toBeInTheDocument();
    expect(screen.queryByTestId("ga")).not.toBeInTheDocument();
  });

  it("loads Google Analytics with the configured id only after Accept", async () => {
    const user = userEvent.setup();
    render(<AnalyticsConsent />);

    await user.click(screen.getByRole("button", { name: "Accept" }));

    expect(getConsent()).toBe("granted");
    expect(screen.getByTestId("ga")).toHaveAttribute("data-ga-id", site.gaId);
    expect(banner()).not.toBeInTheDocument();
  });

  it("never loads Google Analytics after Decline and remembers the choice", async () => {
    const user = userEvent.setup();
    render(<AnalyticsConsent />);

    await user.click(screen.getByRole("button", { name: "Decline" }));

    expect(getConsent()).toBe("denied");
    expect(screen.queryByTestId("ga")).not.toBeInTheDocument();
    expect(banner()).not.toBeInTheDocument();
  });

  it("lets a visitor change their mind from the footer link", async () => {
    const user = userEvent.setup();
    render(
      <>
        <AnalyticsConsent />
        <CookieSettingsButton />
      </>,
    );

    await user.click(screen.getByRole("button", { name: "Accept" }));
    await user.click(screen.getByRole("button", { name: "Cookie settings" }));

    expect(banner()).toBeInTheDocument();
  });

  it("only sends events after consent, using the original event_category/event_label params", () => {
    gaEvent({ category: "CAT", action: "Action" });
    expect(sendGAEvent).not.toHaveBeenCalled();

    act(() => setConsent("denied"));
    gaEvent({ category: "CAT", action: "Action" });
    expect(sendGAEvent).not.toHaveBeenCalled();

    act(() => setConsent("granted"));
    gaEvent({ category: "CAT", action: "Action", label: "L" });
    expect(sendGAEvent).toHaveBeenCalledWith("event", "Action", {
      event_category: "CAT",
      event_label: "L",
    });
  });
});

describe("Analytics outside the live site (local dev, local builds, previews)", () => {
  beforeEach(() => {
    jest.mocked(isAnalyticsEnabled).mockReturnValue(false);
    act(() => setConsent("granted"));
    jest.mocked(sendGAEvent).mockClear();
  });

  it("shows no banner, no cookie link and never loads Google Analytics, even with stored consent", () => {
    render(
      <>
        <AnalyticsConsent />
        <CookieSettingsButton />
      </>,
    );

    expect(banner()).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Cookie settings" })).not.toBeInTheDocument();
    expect(screen.queryByTestId("ga")).not.toBeInTheDocument();
  });

  it("sends no events even when consent was granted", () => {
    gaEvent({ category: "CAT", action: "Action", label: "L" });

    expect(sendGAEvent).not.toHaveBeenCalled();
  });
});
