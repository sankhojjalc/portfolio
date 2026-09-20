"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { getConsent } from "./consent";
import { isAnalyticsEnabled } from "./enabled";

interface GAEventParams {
  category: string;
  action: string;
  label?: string;
}

// event_category / event_label are the parameter names the original site (react-ga4) sent,
// so existing reports keep working.
export const gaEvent = ({ category, action, label }: GAEventParams): void => {
  if (!isAnalyticsEnabled() || getConsent() !== "granted") return;
  sendGAEvent("event", action, { event_category: category, event_label: label });
};
