"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { setConsent, useConsent } from "@/lib/analytics/consent";
import { isAnalyticsEnabled } from "@/lib/analytics/enabled";
import { site } from "@/content/site";

export function AnalyticsConsent() {
  const consent = useConsent();

  if (consent === "unknown" || !isAnalyticsEnabled()) return null;

  return (
    <>
      {consent === "granted" && <GoogleAnalytics gaId={site.gaId} />}
      {consent === null && (
        <section
          aria-labelledby="consent-title"
          className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-xl rounded-2xl border border-glass bg-secondary p-5 shadow-xl"
        >
          <h2 id="consent-title" className="font-semibold mb-1">
            Analytics cookies
          </h2>
          <p className="text-sm text-text-secondary">
            I use Google Analytics to understand how visitors use this site. It only runs if you
            accept, and you can change your choice any time from the footer.
          </p>
          <div className="mt-4 flex gap-3">
            <button
              onClick={() => setConsent("granted")}
              className="px-5 py-2 rounded-full bg-accent-orange text-primary text-sm font-semibold hover:opacity-90 transition"
            >
              Accept
            </button>
            <button
              onClick={() => setConsent("denied")}
              className="px-5 py-2 rounded-full border border-glass text-sm font-semibold hover:bg-white/10 transition"
            >
              Decline
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export function CookieSettingsButton() {
  const consent = useConsent();

  if (consent === "unknown" || !isAnalyticsEnabled()) return null;

  return (
    <p className="mt-2">
      <button
        onClick={() => setConsent(null)}
        className="underline underline-offset-2 hover:text-accent-orange transition"
      >
        Cookie settings
      </button>
    </p>
  );
}
