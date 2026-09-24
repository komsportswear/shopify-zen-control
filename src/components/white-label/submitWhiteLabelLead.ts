import { WEBHOOK_URL } from "@/components/custom/data";
import { getUtmParams } from "@/lib/analytics";

export interface WhiteLabelLead {
  source: string;
  language: string;
  buyer_type: string;
  products: string;
  quantity_range: string;
  design_status: string;
  target_date: string;
  name: string;
  company: string;
  role: string;
  phone: string;
  email: string;
  country: string;
  city: string;
  website: string;
  reference_link: string;
}

const send = async (fields: Record<string, string>) => {
  const payload = new URLSearchParams({
    ...fields,
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

export const submitWhiteLabelLead = (lead: WhiteLabelLead) => send({ ...lead });

export const submitPartialWhiteLabelLead = (lead: Partial<WhiteLabelLead> & { step: number }) => {
  const { step, ...rest } = lead;
  return send({
    ...(rest as Record<string, string>),
    source: "landing-white-labelling-partial",
    status: "incomplete",
    last_step: String(step),
  });
};