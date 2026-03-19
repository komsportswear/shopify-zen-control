import { useState } from "react";
import {
  ArrowRight,
  Loader2,
  CheckCircle2,
  Award,
  Package,
  Headphones,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import heroImg from "@/assets/b2b-hero.jpg";

const trustSignals = [
  { icon: Award, label: "Marca especializada" },
  { icon: Package, label: "Producto premium" },
  { icon: Headphones, label: "Soporte comercial" },
  { icon: TrendingUp, label: "Crecimiento" },
];

interface FormData {
  nombre: string;
  tienda: string;
  ciudad: string;
  pais: string;
  tipoNegocio: string;
  whatsapp: string;
  email: string;
  vendeDeportivas: string;
  autorizaDatos: boolean;
}

const initialFormData: FormData = {
  nombre: "",
  tienda: "",
  ciudad: "",
  pais: "",
  tipoNegocio: "",
  whatsapp: "",
  email: "",
  vendeDeportivas: "",
  autorizaDatos: false,
};

const B2BHero = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.nombre.trim()) newErrors.nombre = "Requerido";
    if (!formData.ciudad.trim()) newErrors.ciudad = "Requerido";
    if (!formData.pais.trim()) newErrors.pais = "Requerido";
    if (!formData.tipoNegocio) newErrors.tipoNegocio = "Requerido";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "Requerido";

    if (!formData.email.trim()) {
      newErrors.email = "Requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Email inválido";
    }

    if (!formData.vendeDeportivas) newErrors.vendeDeportivas = "Requerido";
    if (!formData.autorizaDatos) newErrors.autorizaDatos = "Debes aceptar";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Completa los campos requeridos");
      return;
    }

    setIsSubmitting(true);

    try {
      const WEBHOOK_URL =
        "https://script.google.com/macros/s/AKfycbwZMgAB3SzuXuJF3bZEpsQoNTuaYWiyQndQslI03uKbmn8rsk6AmI0yVa92shNsihbyOw/exec";

      const payload = new URLSearchParams({
        nombre: formData.nombre.trim(),
        tienda: formData.tienda.trim(),
        ciudad: formData.ciudad.trim(),
        pais: formData.pais.trim(),
        tipoNegocio: formData.tipoNegocio,
        whatsapp: formData.whatsapp.trim(),
        email: formData.email.trim(),
        vendeDeportivas: formData.vendeDeportivas,
        autorizaDatos: formData.autorizaDatos ? "si" : "no",
      });

      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: payload.toString(),
      });

      setIsSubmitted(true);
      setFormData(initialFormData);
      toast.success("¡Solicitud enviada!");
    } catch (error) {
      console.error("Error enviando formulario:", error);
      toast.error("Error al enviar. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <section id="formulario" className="relative overflow-hidden w-full">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Ciclistas KOM en ruta"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/55" />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 py-16 sm:max-w-[640px] md:max-w-none md:px-6 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          
          {/* TEXTO - En móviles pasa a ser order-2 (abajo), en escritorio es order-1 (izquierda) */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8 px-1 md:px-0">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent sm:text-sm">
              Programa de distribuidores
            </span>

            <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-background sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Conviértete en
              <br />
              <span className="text-accent">distribuidor</span>
              <br />
              de KOM
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-background/70 sm:text-lg md:text-xl">
              Vende una marca deportiva para ciclismo y running con diseño
              técnico, alto posicionamiento y potencial comercial.
            </p>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-accent sm:text-sm">
                Selección activa — cupos limitados por ciudad
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2 sm:gap-4 sm:pt-4">
              {trustSignals.map((signal) => (
                <div key={signal.label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent/15">
                    <signal.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-background/80">
                    {signal.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* FORMULARIO - En móviles pasa a ser order-1 (arriba), en escritorio es order-2 (derecha) */}
          <div className="order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
            {isSubmitted ? (
              <div className="rounded-2xl border border-background/20 bg-background/10 p-6 text-center backdrop-blur-xl sm:rounded-3xl sm:p-8 md:p-10 w-full">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/20 sm:h-16 sm:w-16">
                  <CheckCircle2 className="h-7 w-7 text-accent sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-xl font-bold text-background sm:text-2xl">
                  ¡Solicitud recibida!
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-background/70 sm:text-base">
                  Nuestro equipo revisará tu solicitud y se pondrá en contacto
                  contigo.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-xl border border-background/20 bg-background/10 p-5 backdrop-blur-xl sm:rounded-3xl sm:p-6 md:p-8 w-full box-border"
              >
                <h3 className="mb-2 text-lg font-semibold text-background">
                  Solicita el catálogo
                </h3>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 w-full">
                  <div className="w-full">
                    <Input
                      placeholder="Nombre y apellido *"
                      value={formData.nombre}
                      onChange={(e) => updateField("nombre", e.target.value)}
                      className={`h-11 w-full bg-background/10 text-background placeholder:text-background/50 ${
                        errors.nombre
                          ? "border-destructive"
                          : "border-background/20"
                      }`}
                    />
                  </div>

                  <div className="w-full">
                    <Input
                      placeholder="Nombre de tienda"
                      value={formData.tienda}
                      onChange={(e) => updateField("tienda", e.target.value)}
                      className="h-11 w-full border-background/20 bg-background/10 text-background placeholder:text-background/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 w-full">
                  <Input
                    placeholder="Ciudad *"
                    value={formData.ciudad}
                    onChange={(e) => updateField("ciudad", e.target.value)}
                    className={`h-11 w-full bg-background/10 text-background placeholder:text-background/50 ${
                      errors.ciudad
                        ? "border-destructive"
                        : "border-background/20"
                    }`}
                  />

                  <Input
                    placeholder="País *"
                    value={formData.pais}
                    onChange={(e) => updateField("pais", e.target.value)}
                    className={`h-11 w-full bg-background/10 text-background placeholder:text-background/50 ${
                      errors.pais
                        ? "border-destructive"
                        : "border-background/20"
                    }`}
                  />
                </div>

                <div className="w-full">
                  <Select
                    value={formData.tipoNegocio}
                    onValueChange={(v) => updateField("tipoNegocio", v)}
                  >
                    <SelectTrigger
                      className={`h-11 w-full bg-background/10 text-background ${
                        errors.tipoNegocio
                          ? "border-destructive"
                          : "border-background/20"
                      }`}
                    >
                      <SelectValue placeholder="Tipo de negocio *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tienda-deportiva">
                        Tienda deportiva
                      </SelectItem>
                      <SelectItem value="tienda-ciclismo">
                        Tienda de ciclismo
                      </SelectItem>
                      <SelectItem value="concept-store">Concept store</SelectItem>
                      <SelectItem value="distribuidor">
                        Distribuidor regional
                      </SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="emprendedor">
                        Emprendedor independiente
                      </SelectItem>
                      <SelectItem value="otro">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 w-full">
                  <Input
                    placeholder="WhatsApp *"
                    value={formData.whatsapp}
                    onChange={(e) => updateField("whatsapp", e.target.value)}
                    className={`h-11 w-full bg-background/10 text-background placeholder:text-background/50 ${
                      errors.whatsapp
                        ? "border-destructive"
                        : "border-background/20"
                    }`}
                  />

                  <Input
                    placeholder="Correo *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={`h-11 w-full bg-background/10 text-background placeholder:text-background/50 ${
                      errors.email
                        ? "border-destructive"
                        : "border-background/20"
                    }`}
                  />
                </div>

                <div className="w-full">
                  <Select
                    value={formData.vendeDeportivas}
                    onValueChange={(v) => updateField("vendeDeportivas", v)}
                  >
                    <SelectTrigger
                      className={`h-11 w-full bg-background/10 text-background ${
                        errors.vendeDeportivas
                          ? "border-destructive"
                          : "border-background/20"
                      }`}
                    >
                      <SelectValue placeholder="¿Vendes marcas deportivas? *" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="si">Sí</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start gap-3 pt-1 w-full">
                  <Checkbox
                    id="autoriza-hero"
                    checked={formData.autorizaDatos}
                    onCheckedChange={(checked) =>
                      updateField("autorizaDatos", !!checked)
                    }
                    className={`mt-0.5 shrink-0 border-background/40 data-[state=checked]:bg-accent ${
                      errors.autorizaDatos ? "border-destructive" : ""
                    }`}
                  />

                  <Label
                    htmlFor="autoriza-hero"
                    className="text-xs leading-tight text-background/60 cursor-pointer sm:text-sm"
                  >
                    Autorizo el tratamiento de mis datos personales según la
                    política de privacidad de KOM Sportswear. *
                  </Label>
                </div>

                <Button
                  variant="kom"
                  size="lg"
                  type="submit"
                  className="w-full py-4 h-auto min-h-[3.5rem] text-sm font-bold sm:text-base whitespace-normal text-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
                      <span>Solicitar Catálogo para Distribuidores</span>
                      <ArrowRight className="h-4 w-4 md:h-5 md:w-5 shrink-0" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default B2BHero;
