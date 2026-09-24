import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { trackEvent } from "@/lib/analytics";
import {
  buyerTypes,
  designOptions,
  type Language,
  productOptions,
  quantityRanges,
  WHITE_LABEL_STORAGE_KEY,
  WHITE_LABEL_WHATSAPP,
} from "./data";
import { submitPartialWhiteLabelLead, submitWhiteLabelLead } from "./submitWhiteLabelLead";

interface Props {
  language: Language;
  buyerType: string;
  setBuyerType: (value: string) => void;
  requestedProduct: string;
}

const copy = {
  en: {
    heading: "TELL US WHAT YOU WANT TO BUILD.",
    intro: "Share the essentials. We will review the product, volume and destination before preparing your proposal.",
    steps: [
      ["What type of business is this for?", "Choose the closest fit"],
      ["What would you like to manufacture?", "Select all that apply"],
      ["What volume are you considering?", "Minimum order: 50 garments"],
      ["Where is your brand today?", "We adapt to your starting point"],
      ["Project and contact details", "Final step"],
    ],
    other: "Other",
    step: "Step",
    of: "of",
    back: "Back",
    continue: "Continue",
    choose: "Select an option to continue",
    reference: "Design or reference link (optional)",
    almost: "We have the core of your project. Add your details so our international team can review it.",
    fields: {
      name: "Name",
      company: "Company",
      role: "Role (optional)",
      phone: "WhatsApp with country code",
      email: "Business email",
      country: "Country",
      city: "City",
      target_date: "Target date",
      website: "Website or social profile (optional)",
    },
    submit: "REQUEST MY PROPOSAL",
    note: "A KOM international sales advisor will review your project and contact you.",
    success: "We received your project.",
    successText: "Our international team will review it and contact you.",
    whatsapp: "TALK TO US ON WHATSAPP",
    requiredName: "Enter your name",
    requiredCompany: "Enter your company name",
    invalidPhone: "Enter a valid number with country code",
    invalidEmail: "Enter a valid email",
    requiredCountry: "Enter your country",
    requiredCity: "Enter your city",
    requiredDate: "Tell us your target date",
    error: "We could not send your request. Please try again.",
  },
  es: {
    heading: "CUÉNTANOS QUÉ QUIERES PRODUCIR.",
    intro: "Comparte los datos esenciales. Revisaremos producto, volumen y destino antes de preparar tu propuesta.",
    steps: [
      ["¿Para qué tipo de empresa es el proyecto?", "Elige la opción más cercana"],
      ["¿Qué te gustaría fabricar?", "Puedes elegir varios"],
      ["¿Qué volumen estás considerando?", "Pedido mínimo: 50 prendas"],
      ["¿En qué etapa está tu marca?", "Nos adaptamos a tu punto de partida"],
      ["Datos del proyecto y contacto", "Último paso"],
    ],
    other: "Otro",
    step: "Paso",
    of: "de",
    back: "Atrás",
    continue: "Continuar",
    choose: "Selecciona una opción para continuar",
    reference: "Enlace de diseño o referencia (opcional)",
    almost: "Ya tenemos lo esencial de tu proyecto. Agrega tus datos para que nuestro equipo internacional lo revise.",
    fields: {
      name: "Nombre",
      company: "Empresa",
      role: "Cargo (opcional)",
      phone: "WhatsApp con código de país",
      email: "Correo corporativo",
      country: "País",
      city: "Ciudad",
      target_date: "Fecha objetivo",
      website: "Sitio web o red social (opcional)",
    },
    submit: "SOLICITAR MI PROPUESTA",
    note: "Un asesor de ventas internacionales de KOM revisará tu proyecto y te contactará.",
    success: "Recibimos tu proyecto.",
    successText: "Nuestro equipo internacional lo revisará y se pondrá en contacto contigo.",
    whatsapp: "HABLAR POR WHATSAPP",
    requiredName: "Escribe tu nombre",
    requiredCompany: "Escribe el nombre de tu empresa",
    invalidPhone: "Escribe un número válido con código de país",
    invalidEmail: "Escribe un correo válido",
    requiredCountry: "Indica tu país",
    requiredCity: "Indica tu ciudad",
    requiredDate: "Indica tu fecha objetivo",
    error: "No pudimos enviar tu solicitud. Intenta de nuevo.",
  },
};

const emailOk = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
const phoneOk = (value: string) => /^\+?[\d\s()-]{7,20}$/.test(value.trim());

const Option = ({ active, children, onClick }: { active: boolean; children: React.ReactNode; onClick: () => void }) => (
  <Button
    type="button"
    variant="ghost"
    onClick={onClick}
    className={cn(
      "h-auto min-h-14 justify-start whitespace-normal rounded-none border px-5 py-4 text-left text-sm font-medium",
      active ? "border-accent bg-accent text-accent-foreground hover:bg-accent-hover" : "border-border bg-background hover:border-foreground hover:bg-background",
    )}
  >
    {children}
  </Button>
);

const WhiteLabelQuoteForm = ({ language, buyerType, setBuyerType, requestedProduct }: Props) => {
  const t = copy[language];
  const [step, setStep] = useState(1);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [quantity, setQuantity] = useState("");
  const [design, setDesign] = useState("");
  const [referenceLink, setReferenceLink] = useState("");
  const [data, setData] = useState({ name: "", company: "", role: "", phone: "", email: "", country: "", city: "", target_date: "", website: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [restored, setRestored] = useState(false);
  const stateRef = useRef({ step: 1, sent: false });
  const partialSent = useRef(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(WHITE_LABEL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.buyerType) setBuyerType(parsed.buyerType);
        if (Array.isArray(parsed.selectedProducts)) setSelectedProducts(parsed.selectedProducts);
        if (parsed.quantity) setQuantity(parsed.quantity);
        if (parsed.design) setDesign(parsed.design);
        if (parsed.referenceLink) setReferenceLink(parsed.referenceLink);
        if (parsed.data) setData((current) => ({ ...current, ...parsed.data }));
        if (parsed.step > 1) setStep(Math.min(5, parsed.step));
      }
    } catch {
      // Storage can be unavailable in privacy modes.
    } finally {
      setRestored(true);
    }
  }, [setBuyerType]);

  useEffect(() => {
    if (!requestedProduct) return;
    setSelectedProducts((current) => current.includes(requestedProduct) ? current : [...current, requestedProduct]);
  }, [requestedProduct]);

  useEffect(() => {
    if (!restored || sent) return;
    localStorage.setItem(WHITE_LABEL_STORAGE_KEY, JSON.stringify({ step, buyerType, selectedProducts, quantity, design, referenceLink, data }));
  }, [restored, sent, step, buyerType, selectedProducts, quantity, design, referenceLink, data]);

  useEffect(() => {
    stateRef.current = { step, sent };
    trackEvent("white_label_step_view", { step, language });
  }, [step, sent, language]);

  useEffect(() => {
    const flush = () => {
      if (document.visibilityState !== "hidden" || stateRef.current.sent || partialSent.current) return;
      if (!emailOk(data.email) && !phoneOk(data.phone)) return;
      partialSent.current = true;
      trackEvent("white_label_abandon", { step: stateRef.current.step, language });
      void submitPartialWhiteLabelLead({
        step: stateRef.current.step,
        source: "landing-white-labelling",
        language,
        buyer_type: buyerType,
        products: selectedProducts.join(", "),
        quantity_range: quantity,
        design_status: design,
        target_date: data.target_date,
        reference_link: referenceLink,
        ...data,
      });
    };
    document.addEventListener("visibilitychange", flush);
    return () => document.removeEventListener("visibilitychange", flush);
  }, [buyerType, data, design, language, quantity, referenceLink, selectedProducts]);

  const next = () => setStep((current) => Math.min(5, current + 1));
  const canContinue = (step === 1 && !!buyerType) || (step === 2 && selectedProducts.length > 0) || (step === 3 && !!quantity) || (step === 4 && !!design);
  const labels = [...buyerTypes, { value: "other", en: "Other", es: "Otro" }];

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!data.name.trim()) nextErrors.name = t.requiredName;
    if (!data.company.trim()) nextErrors.company = t.requiredCompany;
    if (!phoneOk(data.phone)) nextErrors.phone = t.invalidPhone;
    if (!emailOk(data.email)) nextErrors.email = t.invalidEmail;
    if (!data.country.trim()) nextErrors.country = t.requiredCountry;
    if (!data.city.trim()) nextErrors.city = t.requiredCity;
    if (!data.target_date.trim()) nextErrors.target_date = t.requiredDate;
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    const lead = {
      source: "landing-white-labelling",
      language,
      buyer_type: buyerType,
      products: selectedProducts.join(", "),
      quantity_range: quantity,
      design_status: design,
      reference_link: referenceLink,
      ...data,
    };
    setSent(true);
    localStorage.removeItem(WHITE_LABEL_STORAGE_KEY);
    trackEvent("white_label_complete", { language, buyer_type: buyerType, quantity_range: quantity });
    void submitWhiteLabelLead(lead).catch(() => {
      toast.error(t.error);
      setSent(false);
    });
  };

  const field = (id: keyof typeof data, required = false, type = "text", placeholder?: string) => (
    <div className="space-y-1.5">
      <Label htmlFor={`white-label-${id}`} className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {t.fields[id]} {required && <span className="text-accent">*</span>}
      </Label>
      <Input
        id={`white-label-${id}`}
        type={type}
        value={data[id]}
        placeholder={placeholder}
        aria-invalid={!!errors[id]}
        className={cn("h-12 rounded-none", errors[id] && "border-destructive")}
        onChange={(event) => {
          setData((current) => ({ ...current, [id]: event.target.value }));
          if (errors[id]) setErrors((current) => ({ ...current, [id]: "" }));
        }}
      />
      {errors[id] && <p className="text-xs text-destructive">{errors[id]}</p>}
    </div>
  );

  return (
    <section id="quote" className="scroll-mt-24 bg-foreground py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-4xl border-2 border-accent bg-background p-6 sm:p-10 lg:p-14">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Private label inquiry</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tighter md:text-5xl">{t.heading}</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{t.intro}</p>

          {sent ? (
            <div className="mt-10 border border-border bg-kom-surface p-8 text-center sm:p-12">
              <CheckCircle2 className="mx-auto h-12 w-12 text-accent" />
              <h3 className="mt-5 text-2xl font-bold">{t.success}</h3>
              <p className="mt-3 text-muted-foreground">{t.successText}</p>
              <Button variant="kom" size="lg" className="mt-7 rounded-none" onClick={() => window.open(WHITE_LABEL_WHATSAPP, "_blank")}>
                <MessageCircle className="h-5 w-5" /> {t.whatsapp}
              </Button>
            </div>
          ) : (
            <div className="mt-10 border border-border p-5 sm:p-10">
              <div className="mb-3 flex items-baseline justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.step} {step} {t.of} 5</p>
                <p className="text-right text-xs text-muted-foreground">{t.steps[step - 1][1]}</p>
              </div>
              <div className="mb-8 flex gap-2">{[1, 2, 3, 4, 5].map((item) => <span key={item} className={cn("h-1 flex-1", item <= step ? "bg-accent" : "bg-border")} />)}</div>

              {step === 1 && <div className="space-y-5"><h3 className="text-xl font-bold">{t.steps[0][0]}</h3><div className="grid gap-3 sm:grid-cols-2">{labels.map((item) => <Option key={item.value} active={buyerType === item.value} onClick={() => { setBuyerType(item.value); trackEvent("white_label_buyer_select", { buyer_type: item.value, language }); next(); }}>{item[language]}</Option>)}</div></div>}
              {step === 2 && <div className="space-y-5"><h3 className="text-xl font-bold">{t.steps[1][0]}</h3><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{productOptions.map((item) => <Option key={item.value} active={selectedProducts.includes(item.value)} onClick={() => { setSelectedProducts((current) => current.includes(item.value) ? current.filter((value) => value !== item.value) : [...current, item.value]); trackEvent("white_label_product_select", { product: item.value, language }); }}>{item[language]}</Option>)}</div></div>}
              {step === 3 && <div className="space-y-5"><h3 className="text-xl font-bold">{t.steps[2][0]}</h3><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{quantityRanges.map((range) => <Option key={range} active={quantity === range} onClick={() => { setQuantity(range); next(); }}>{range}</Option>)}</div></div>}
              {step === 4 && <div className="space-y-5"><h3 className="text-xl font-bold">{t.steps[3][0]}</h3><div className="grid gap-3 sm:grid-cols-3">{designOptions.map((item) => <Option key={item.value} active={design === item.value} onClick={() => { setDesign(item.value); next(); }}>{item[language]}</Option>)}</div><div className="pt-2"><Label htmlFor="white-label-reference" className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t.reference}</Label><Input id="white-label-reference" type="url" value={referenceLink} onChange={(event) => setReferenceLink(event.target.value)} placeholder="https://" className="mt-1.5 h-12 rounded-none" /></div></div>}
              {step === 5 && <form onSubmit={submit} noValidate className="space-y-5"><div><h3 className="text-xl font-bold">{t.steps[4][0]}</h3><p className="mt-2 text-sm text-muted-foreground">{t.almost}</p></div><div className="grid gap-4 sm:grid-cols-2">{field("name", true)}{field("company", true)}{field("role")}{field("email", true, "email")}{field("phone", true, "tel", "+1 555 000 0000")}{field("country", true)}{field("city", true)}{field("target_date", true)}<div className="sm:col-span-2">{field("website", false, "url", "https://")}</div></div><Button variant="kom" size="lg" type="submit" className="h-12 w-full rounded-none">{t.submit}</Button><p className="text-center text-sm text-muted-foreground">{t.note}</p></form>}

              <div className="mt-8 flex items-center justify-between">
                <Button type="button" variant="ghost" onClick={() => setStep((current) => Math.max(1, current - 1))} className={cn("rounded-none text-muted-foreground", step === 1 && "invisible")}><ArrowLeft className="h-4 w-4" /> {t.back}</Button>
                {step < 5 && <Button type="button" variant="kom" className="rounded-none" onClick={() => canContinue ? next() : toast.error(t.choose)}>{t.continue} <ArrowRight className="h-4 w-4" /></Button>}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhiteLabelQuoteForm;