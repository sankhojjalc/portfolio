import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

// Resolves to true right after hydration. Useful for keeping a value out of
// the static HTML (e.g. a link crawlers/scrapers shouldn't see in page source)
// without a server/client hydration mismatch.
export function useHasMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
