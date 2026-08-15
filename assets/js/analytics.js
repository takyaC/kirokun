import { init, trackEvent } from "https://cdn.jsdelivr.net/npm/@aptabase/web@0.5.0/+esm";

const config = window.kirokunAnalyticsConfig;

if (config?.appKey) {
  init(config.appKey, { appVersion: config.appVersion });

  const params = new URLSearchParams(window.location.search);
  let referrerHost = "direct";

  if (document.referrer) {
    try {
      referrerHost = new URL(document.referrer).hostname || "direct";
    } catch (_error) {
      referrerHost = "unknown";
    }
  }

  trackEvent("page_view", {
    path: window.location.pathname,
    referrer_host: referrerHost,
    utm_source: params.get("utm_source") || "none",
    utm_medium: params.get("utm_medium") || "none",
    utm_campaign: params.get("utm_campaign") || "none"
  });

  document.querySelectorAll("[data-analytics-event]").forEach((element) => {
    element.addEventListener("click", () => {
      trackEvent(element.dataset.analyticsEvent, {
        cta_location: element.dataset.analyticsLocation || "unknown"
      });
    });
  });
}
