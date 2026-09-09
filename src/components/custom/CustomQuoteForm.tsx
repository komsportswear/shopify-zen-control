import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { designOptions, productOptions, projectTypes, quantityRanges, WHATSAPP_URL } from "./data";
import { submitLead, submitPartialLead } from "./submitLead";
import { trackEvent } from "@/lib/analytics";

interface Props {
  projectType: string;
  setProjectType: (v: string) => void;
}

const STORAGE_KEY = "kom-cotizacion-personalizados";
const TOTAL_STEPS = 5;

const stepMeta = [
  { title: "¿Para quién es el proyecto?", hint: "Menos de 1 minuto" },
  { title: "¿Qué quieres personalizar?", hint: "Puedes elegir varios" },
  { title: "¿Cuántas unidades necesitas aproximadamente?", hint: "Un estimado es suficiente" },
  { title: "¿Ya tienes diseño?", hint: "Si no lo tienes, nosotros lo creamos" },
  { title: "Tus datos", hint: "Último paso" },
];

const typeLabel = (v: string) => projectTypes.find((t) => t.value === v)?.title ?? (v === "otro" ? "Otro" : "");

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

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const phoneOk = (v: string) => /^\+?[\d\s()-]{7,20}$/.test(v.trim());

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
    reference_link: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [restored, setRestored] = useState(false);
  const stateRef = useRef({ step: 1, sent: false });

  /* Recuperar avance guardado */
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const s = JSON.parse(raw);
      if (s.projectType) setProjectType(s.projectType);
      if (Array.isArray(s.selectedProducts)) setSelectedProducts(s.selectedProducts);
      if (s.quantity) setQuantity(s.quantity);
      if (s.design) setDesign(s.design);
      if (s.data) setData((d) => ({ ...d, ...s.data }));
      if (s.step && s.step > 1) {
        setStep(s.step);
        setStarted(true);
      }
    } catch {
      /* sin avance guardado */
    } finally {
      setRestored(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Guardar avance */
  useEffect(() => {
    if (!restored || sent) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ step, projectType, selectedProducts, quantity, design, data }),
    );
  }, [restored, sent, step, projectType, selectedProducts, quantity, design, data]);

  useEffect(() => {
    stateRef.current = { step, sent };
    if (started && !sent) trackEvent("wizard_step_view", { step });
  }, [step, sent, started]);

  /* Lead parcial: dejó contacto pero no envió */
  const partialSent = useRef(false);
  useEffect(() => {
    const flush = () => {
      if (document.visibilityState !== "hidden") return;
      const { step: s, sent: done } = stateRef.current;
      if (done || partialSent.current) return;
      if (!emailOk(data.email) && !phoneOk(data.phone)) return;
      partialSent.current = true;
      trackEvent("abandon_step", { step: s });
      void submitPartialLead({
        step: s,
        source: "landing-personalizados",
        project_type: projectType,
        products: selectedProducts.join(", "),
        quantity_range: quantity,
        design_status: design,
        ...data,
      });
    };
    document.addEventListener("visibilitychange", flush);
    return () => document.removeEventListener("visibilitychange", flush);
  }, [data, projectType, selectedProducts, quantity, design]);

  const begin = () => {
    if (!started) {
      setStarted(true);
      trackEvent("start_quote");
    }
  };

  const next = () => setStep((s) => Math.min(TOTAL_STEPS, s + 1));

  const toggleProduct = (p: string) => {
    begin();
    setSelectedProducts((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));
  };

  const canContinue =
    (step === 1 && !!projectType) ||
    (step === 2 && selectedProducts.length > 0) ||
    (step === 3 && !!quantity) ||
    (step === 4 && !!design);

  const chips = [typeLabel(projectType), selectedProducts.join(", "), quantity && `${quantity} unidades`, design]
    .filter(Boolean)
    .slice(0, 4) as string[];

  const validate = () => {
    const e: Record<string, string> = {};
    if (!data.name.trim()) e.name = "Cuéntanos tu nombre";
    if (!phoneOk(data.phone)) e.phone = "Escribe un WhatsApp válido, ej: +57 300 000 0000";
    if (!emailOk(data.email)) e.email = "Escribe un correo válido";
    if (!data.city.trim()) e.city = "Indícanos tu ciudad";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
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
      localStorage.removeItem(STORAGE_KEY);
      setSent(true);
    } catch {
      toast.error("Error al enviar. Intenta de nuevo.");
    } finally {
      setSending(false);
    }
  };

  const field = (
    id: keyof typeof data,
    label: string,
    props: { type?: string; required?: boolean; placeholder?: string } = {},
  ) => (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {label} {props.required && <span className="text-accent">*</span>}
      </Label>
      <Input
        id={id}
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        value={data[id]}
        onChange={(ev) => {
          setData({ ...data, [id]: ev.target.value });
          if (errors[id]) setErrors((prev) => ({ ...prev, [id]: "" }));
        }}
        aria-invalid={!!errors[id]}
        className={cn("h-12", errors[id] && "border-destructive")}
      />
      {errors[id] && <p className="text-xs text-destructive">{errors[id]}</p>}
    </div>
  );

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
              <p className="mt-3 text-muted-foreground">
                Nuestro equipo lo revisará y te contactará en menos de 24 horas hábiles.
              </p>
              <Button
                variant="kom"
                size="lg"
                className="mt-6 px-8 py-6 text-base"
                onClick={() => {
                  trackEvent("click_whatsapp");
                  window.open(WHATSAPP_URL, "_blank");
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                HABLAR AHORA POR WHATSAPP
              </Button>
            </div>
          ) : (
            <div className="mt-10 border border-border p-6 sm:p-10">
              <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Paso {step} de {TOTAL_STEPS}
                </p>
                <p className="text-xs text-muted-foreground">{stepMeta[step - 1].hint}</p>
              </div>

              <div className="mb-6 flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <span key={s} className={cn("h-1 flex-1 transition-colors", s <= step ? "bg-accent" : "bg-border")} />
                ))}
              </div>

              {chips.length > 0 && step > 1 && (
                <div className="mb-8 flex flex-wrap gap-2">
                  {chips.map((c) => (
                    <span
                      key={c}
                      className="border border-border bg-kom-surface px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}

              {step === 1 && (
                <div className="space-y-5">
                  <h3 className="text-xl font-bold">{stepMeta[0].title}</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[...projectTypes.map((t) => ({ value: t.value, title: t.title })), { value: "otro", title: "Otro" }].map((t) => (
                      <OptionButton
                        key={t.value}
                        active={projectType === t.value}
                        onClick={() => {
                          begin();
                          setProjectType(t.value);
                          next();
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
                  <h3 className="text-xl font-bold">{stepMeta[1].title}</h3>
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
                  <h3 className="text-xl font-bold">{stepMeta[2].title}</h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {quantityRanges.map((q) => (
                      <OptionButton
                        key={q}
                        active={quantity === q}
                        onClick={() => {
                          setQuantity(q);
                          next();
                        }}
                      >
                        {q}
                      </OptionButton>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-5">
                  <h3 className="text-xl font-bold">{stepMeta[3].title}</h3>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {designOptions.map((d) => (
                      <OptionButton
                        key={d}
                        active={design === d}
                        onClick={() => {
                          setDesign(d);
                          next();
                        }}
                      >
                        {d}
                      </OptionButton>
                    ))}
                  </div>
                  {field("reference_link", "Enlace a tu logo o referencia (opcional)", {
                    placeholder: "https://drive.google.com/...",
                  })}
                </div>
              )}

              {step === 5 && (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div>
                    <h3 className="text-xl font-bold">{stepMeta[4].title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Ya tenemos el 80% de tu proyecto. Solo faltan tus datos para enviarte la propuesta.
                    </p>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {field("name", "Nombre", { required: true })}
                    {field("company_team", "Empresa / equipo")}
                    {field("phone", "WhatsApp", { required: true, placeholder: "+57 300 000 0000" })}
                    {field("email", "Correo", { required: true, type: "email" })}
                    {field("city", "Ciudad", { required: true })}
                    {field("desired_date", "¿Para cuándo lo necesitas?")}
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

                {step < TOTAL_STEPS && (
                  <Button
                    variant="kom"
                    onClick={() => {
                      begin();
                      if (canContinue) next();
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
