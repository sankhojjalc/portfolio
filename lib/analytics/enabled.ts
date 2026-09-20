import { site } from "@/content/site";

// Analytics only runs on the live site: a production build served from site.siteUrl's host.
// Local dev, locally served builds and Firebase preview channels never report.
export const isAnalyticsEnabled = (): boolean =>
  process.env.NODE_ENV === "production" &&
  typeof window !== "undefined" &&
  window.location.hostname === new URL(site.siteUrl).hostname;
