import { WEBHOOK_URL } from "./data";
import { getUtmParams } from "@/lib/analytics";

export interface LeadPayload {
  source: string;
  project_type: string;
  products: string;
  quantity_range: string;
  design_status: string;
  desired_date: string;
  name: string;
  company_team: string;
  phone: string;
  email: string;
  city: string;
}

export const submitLead = async (lead: LeadPayload) => {
  const payload = new URLSearchParams({
    ...lead,
    ...getUtmParams(),
    created_at: new Date().toISOString(),
  });

  await fetch(WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
    body: payload.toString(),
  });
};
