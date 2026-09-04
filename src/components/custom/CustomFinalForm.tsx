import { useState } from "react";
import { CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { projectTypes, quantityRanges, WHATSAPP_URL } from "./data";
import { submitLead } from "./submitLead";
import { trackEvent } from "@/lib/analytics";

const CustomFinalForm = ({ projectType }: { projectType: string }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    project_type: projectType,
    quantity_range: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.email.trim() || !form.project_type || !form.quantity_range) {
      toast.error("Completa los campos requeridos");
      return;
    }
    setSending(true);
    try {
      await submitLead({
        source: "landing-personalizados-final",
        project_type: form.project_type,
        products: "",
        quantity_range: form.quantity_range,
        design_status: "",
        desired_date: "",
        name: form.name,
        company_team: "",
        phone: form.phone,
        email: form.email,
        city: "",
      });
      trackEvent("complete_quote", { project_type: form.project_type, quantity_range: form.quantity_range });
      setSent(true);
    } catch {
      toast.error("Error al enviar. Intenta de nuevo.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="bg-foreground py-20 text-background lg:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">¿LISTO PARA CREAR EL TUYO?</h2>
          <p className="mt-4 text-background/70">
            Cuéntanos qué necesitas y nuestro equipo te ayudará a convertirlo en producto.
          </p>
        </div>

        {sent ? (
          <div className="mx-auto mt-10 max-w-2xl border border-background/20 bg-background/5 p-10 text-center">
            <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
            <h3 className="mt-5 text-2xl font-bold">¡Recibimos tu proyecto!</h3>
            <p className="mt-3 text-background/70">Nuestro equipo lo revisará y te contactará.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <Input
                placeholder="Nombre *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="h-12 border-background/20 bg-background/10 text-background placeholder:text-background/50"
              />
              <Input
                placeholder="WhatsApp *"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="h-12 border-background/20 bg-background/10 text-background placeholder:text-background/50"
              />
              <Input
                placeholder="Email *"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="h-12 border-background/20 bg-background/10 text-background placeholder:text-background/50"
              />
              <Select value={form.quantity_range} onValueChange={(v) => setForm({ ...form, quantity_range: v })}>
                <SelectTrigger className="h-12 border-background/20 bg-background/10 text-background">
                  <SelectValue placeholder="Cantidad aproximada *" />
                </SelectTrigger>
                <SelectContent>
                  {quantityRanges.map((q) => (
                    <SelectItem key={q} value={q}>
                      {q} unidades
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Select value={form.project_type} onValueChange={(v) => setForm({ ...form, project_type: v })}>
              <SelectTrigger className="h-12 border-background/20 bg-background/10 text-background">
                <SelectValue placeholder="Tipo de proyecto *" />
              </SelectTrigger>
              <SelectContent>
                {projectTypes.map((t) => (
                  <SelectItem key={t.value} value={t.value}>
                    {t.title}
                  </SelectItem>
                ))}
                <SelectItem value="otro">Otro</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="kom" size="lg" type="submit" disabled={sending} className="w-full py-6 text-base">
              {sending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
              COTIZAR MI PROYECTO
            </Button>

            <button
              type="button"
              onClick={() => {
                trackEvent("click_whatsapp");
                window.open(WHATSAPP_URL, "_blank");
              }}
              className="mx-auto flex items-center gap-2 pt-2 text-sm text-background/70 hover:text-accent"
            >
              <MessageCircle className="h-4 w-4" />
              ¿Prefieres hablar directamente? Escríbenos por WhatsApp.
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default CustomFinalForm;
