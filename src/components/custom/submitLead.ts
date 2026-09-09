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
  reference_link?: string;
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

export const submitLead = async (lead: LeadPayload) => send({ ...lead });

/** Envío de lead incompleto: el usuario dejó contacto pero no terminó el formulario. */
export const submitPartialLead = async (lead: Partial<LeadPayload> & { step: number }) => {
  const { step, ...rest } = lead;
  await send({
    ...(rest as Record<string, string>),
    source: `${rest.source ?? "landing-personalizados"}-parcial`,
    status: "incompleto",
    last_step: String(step),
  });
};
