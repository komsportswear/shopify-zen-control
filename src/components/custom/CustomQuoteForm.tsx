import { useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { designOptions, productOptions, projectTypes, quantityRanges } from "./data";
import { submitLead } from "./submitLead";
import { trackEvent } from "@/lib/analytics";

interface Props {
  projectType: string;
  setProjectType: (v: string) => void;
}

const OptionButton = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "border px-5 py-4 text-left text-sm font-medium transition-colors",
      active
        ? "border-accent bg-accent text-accent-foreground"
        : "border-border bg-background hover:border-foreground",
    )}
  >
    {children}
  </button>
);

const CustomQuoteForm = ({ projectType, setProjectType }: Props) => {
  const [step, setStep] = useState(1);
  const [started, setStarted] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [quantity, setQuantity] = useState("");
  const [design, setDesign] = useState("");
  const [data, setData] = useState({
    name: "",
    company_team: "",
    phone: "",
    email: "",
    city: "",
    desired_date: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const begin = () => {
    if (!started) {
      setStarted(true);
      trackEvent("start_quote");
    }
  };

  const toggleProduct = (p: string) => {
    begin();
    setSelectedProducts((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));
  };

  const canContinue =
    (step === 1 && !!projectType) ||
    (step === 2 && selectedProducts.length > 0) ||
    (step === 3 && !!quantity) ||
    (step === 4 && !!design);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!data.name.trim() || !data.phone.trim() || !data.email.trim() || !data.city.trim()) {
      toast.error("Completa los campos requeridos");
      return;
    }
    setSending(true);
    try {
      await submitLead({
        source: "landing-personalizados",
        project_type: projectType,
        products: selectedProducts.join(", "),
        quantity_range: quantity,
        design_status: design,
        ...data,
      });
      trackEvent("complete_quote", { project_type: projectType, quantity_range: quantity });
      setSent(true);
    } catch {
      toast.error("Error al enviar. Intenta de nuevo.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="cotizar" className="scroll-mt-20 bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">CUÉNTANOS QUÉ TIENES EN MENTE.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Recibe una propuesta personalizada según producto, cantidad y necesidades de tu proyecto.
          </p>

          {sent ? (
            <div className="mt-10 border border-border bg-kom-surface p-10 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
              <h3 className="mt-5 text-2xl font-bold">¡Recibimos tu proyecto!</h3>
              <p className="mt-3 text-muted-foreground">Nuestro equipo lo revisará y te contactará.</p>
            </div>
          ) : (
            <div className="mt-10 border border-border p-6 sm:p-10">
              <div className="mb-8 flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className={cn("h-1 flex-1", s <= step ? "bg-accent" : "bg-border")} />
                ))}
              </div>

              {step === 1 && (
                <div className="space-y-5">
                  <h3 className="text-xl font-bold">¿Para quién es el proyecto?</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[...projectTypes.map((t) => ({ value: t.value, title: t.title })), { value: "otro", title: "Otro" }].map((t) => (
                      <OptionButton
                        key={t.value}
                        active={projectType === t.value}
                        onClick={() => {
                          begin();
                          setProjectType(t.value);
                        }}
                      >
                        {t.title}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5">
                  <h3 className="text-xl font-bold">¿Qué quieres personalizar?</h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {productOptions.map((p) => (
                      <OptionButton key={p} active={selectedProducts.includes(p)} onClick={() => toggleProduct(p)}>
                        {p}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-5">
                  <h3 className="text-xl font-bold">¿Cuántas unidades necesitas aproximadamente?</h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {quantityRanges.map((q) => (
                      <OptionButton key={q} active={quantity === q} onClick={() => setQuantity(q)}>
                        {q}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-5">
                  <h3 className="text-xl font-bold">¿Ya tienes diseño?</h3>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {designOptions.map((d) => (
                      <OptionButton key={d} active={design === d} onClick={() => setDesign(d)}>
                        {d}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {step === 5 && (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold">Tus datos</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Input
                      placeholder="Nombre *"
                      value={data.name}
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                      className="h-12"
                    />
                    <Input
                      placeholder="Empresa / equipo"
                      value={data.company_team}
                      onChange={(e) => setData({ ...data, company_team: e.target.value })}
                      className="h-12"
                    />
                    <Input
                      placeholder="WhatsApp *"
                      value={data.phone}
                      onChange={(e) => setData({ ...data, phone: e.target.value })}
                      className="h-12"
                    />
                    <Input
                      placeholder="Email *"
                      type="email"
                      value={data.email}
                      onChange={(e) => setData({ ...data, email: e.target.value })}
                      className="h-12"
                    />
                    <Input
                      placeholder="Ciudad *"
                      value={data.city}
                      onChange={(e) => setData({ ...data, city: e.target.value })}
                      className="h-12"
                    />
                    <Input
                      placeholder="¿Para cuándo lo necesitas? (opcional)"
                      value={data.desired_date}
                      onChange={(e) => setData({ ...data, desired_date: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <Button variant="kom" size="lg" type="submit" disabled={sending} className="w-full py-6 text-base">
                    {sending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : null}
                    RECIBIR MI PROPUESTA
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    Un asesor de KOM revisará tu proyecto y te contactará para preparar una propuesta.
                  </p>
                </form>
              )}

              <div className="mt-8 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep((s) => Math.max(1, s - 1))}
                  className={cn(
                    "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground",
                    step === 1 && "invisible",
                  )}
                >
                  <ArrowLeft className="h-4 w-4" /> Atrás
                </button>

                {step < 5 && (
                  <Button
                    variant="kom"
                    onClick={() => {
                      begin();
                      if (canContinue) setStep((s) => s + 1);
                      else toast.error("Selecciona una opción para continuar");
                    }}
                  >
                    Continuar <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CustomQuoteForm;
