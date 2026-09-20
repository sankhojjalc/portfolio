import { useSyncExternalStore } from "react";
import { site } from "@/content/site";

type Consent = "granted" | "denied" | null;

const STORAGE_KEY = "analytics-consent";
const listeners = new Set<() => void>();

export function getConsent(): Consent {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

export function setConsent(value: Consent): void {
  try {
    if (value === null) window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // storage unavailable (e.g. private mode): consent only lasts for this page view
  }
  (window as unknown as Record<string, boolean>)[`ga-disable-${site.gaId}`] = value !== "granted";
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void): () => void {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

export function useConsent(): Consent | "unknown" {
  return useSyncExternalStore<Consent | "unknown">(subscribe, getConsent, () => "unknown");
}
