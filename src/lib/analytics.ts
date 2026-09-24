export type EventName =
  | "click_cta_hero"
  | "select_project_type"
  | "click_cta_diseno"
  | "start_quote"
  | "complete_quote"
  | "click_whatsapp"
  | "view_projects"
  | "wizard_step_view"
  | "abandon_step"
  | "white_label_language_change"
  | "white_label_cta"
  | "white_label_buyer_select"
  | "white_label_product_select"
  | "white_label_step_view"
  | "white_label_complete"
  | "white_label_abandon";

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
