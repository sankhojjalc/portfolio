import { isAnalyticsEnabled } from "@/lib/analytics/enabled";

describe("isAnalyticsEnabled on localhost", () => {
  it("is off for local dev", () => {
    jest.replaceProperty(process.env, "NODE_ENV", "development");

    expect(isAnalyticsEnabled()).toBe(false);
  });

  it("is off for a production build served locally (e.g. a static preview of out/)", () => {
    jest.replaceProperty(process.env, "NODE_ENV", "production");

    expect(window.location.hostname).toBe("localhost");
    expect(isAnalyticsEnabled()).toBe(false);
  });
});
