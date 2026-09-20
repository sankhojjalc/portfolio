/**
 * @jest-environment-options {"url": "https://sankhojjal-dev.web.app/"}
 */
import { isAnalyticsEnabled } from "@/lib/analytics/enabled";

describe("isAnalyticsEnabled on the production hostname", () => {
  it("is on for a production build", () => {
    jest.replaceProperty(process.env, "NODE_ENV", "production");

    expect(isAnalyticsEnabled()).toBe(true);
  });

  it("is off for a non-production build even on the live hostname", () => {
    jest.replaceProperty(process.env, "NODE_ENV", "development");

    expect(isAnalyticsEnabled()).toBe(false);
  });
});
