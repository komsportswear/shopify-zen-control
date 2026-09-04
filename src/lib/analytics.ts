type EventName =
  | "click_cta_hero"
  | "select_project_type"
  | "start_quote"
  | "complete_quote"
  | "click_whatsapp"
  | "view_projects";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export const trackEvent = (event: EventName, params: Record<string, unknown> = {}) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
};

export const getUtmParams = () => {
  const p = new URLSearchParams(window.location.search);
  return {
    utm_source: p.get("utm_source") ?? "",
    utm_medium: p.get("utm_medium") ?? "",
    utm_campaign: p.get("utm_campaign") ?? "",
  };
};
