/**
 * @jest-environment-options {"url": "https://sankhojjal-dev--pr-12-abc123.web.app/"}
 */
import { isAnalyticsEnabled } from "@/lib/analytics/enabled";

describe("isAnalyticsEnabled on a Firebase preview channel", () => {
  it("is off, so pull-request previews never pollute real analytics", () => {
    jest.replaceProperty(process.env, "NODE_ENV", "production");

    expect(isAnalyticsEnabled()).toBe(false);
  });
});
