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
    <section
      id="formulario"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Ciclistas KOM en ruta"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/50" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            {isSubmitted ? (
              <div className="bg-background/10 backdrop-blur-xl border border-background/20 rounded-3xl p-8 md:p-10 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-background">
                  ¡Solicitud recibida!
                </h3>
                <p className="text-background/70">
                  Nuestro equipo revisará tu solicitud y se pondrá en contacto
                  contigo.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-background/10 backdrop-blur-xl border border-background/20 rounded-3xl p-6 md:p-8 space-y-4"
              >
                <h3 className="text-lg font-semibold text-background mb-2">
                  Solicita el catálogo
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Input
                      placeholder="Nombre y apellido *"
                      value={formData.nombre}
                      onChange={(e) => updateField("nombre", e.target.value)}
                      className={`bg-background/10 border-background/20 text-background placeholder:text-background/50 ${
                        errors.nombre ? "border-destructive" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Nombre de tienda"
                      value={formData.tienda}
                      onChange={(e) => updateField("tienda", e.target.value)}
                      className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Input
                    placeholder="Ciudad *"
                    value={formData.ciudad}
                    onChange={(e) => updateField("ciudad", e.target.value)}
                    className={`bg-background/10 border-background/20 text-background placeholder:text-background/50 ${
                      errors.ciudad ? "border-destructive" : ""
                    }`}
                  />
                  <Input
                    placeholder="País *"
                    value={formData.pais}
                    onChange={(e) => updateField("pais", e.target.value)}
                    className={`bg-background/10 border-background/20 text-background placeholder:text-background/50 ${
                      errors.pais ? "border-destructive" : ""
                    }`}
                  />
                </div>

                <Select
                  value={formData.tipoNegocio}
                  onValueChange={(v) => updateField("tipoNegocio", v)}
                >
                  <SelectTrigger
                    className={`bg-background/10 border-background/20 text-background ${
                      errors.tipoNegocio ? "border-destructive" : ""
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

                <div className="grid grid-cols-2 gap-3">
                  <Input
                    placeholder="WhatsApp *"
                    value={formData.whatsapp}
                    onChange={(e) => updateField("whatsapp", e.target.value)}
                    className={`bg-background/10 border-background/20 text-background placeholder:text-background/50 ${
                      errors.whatsapp ? "border-destructive" : ""
                    }`}
                  />
                  <Input
                    placeholder="Correo *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className={`bg-background/10 border-background/20 text-background placeholder:text-background/50 ${
                      errors.email ? "border-destructive" : ""
                    }`}
                  />
                </div>

                <Select
                  value={formData.vendeDeportivas}
                  onValueChange={(v) => updateField("vendeDeportivas", v)}
                >
                  <SelectTrigger
                    className={`bg-background/10 border-background/20 text-background ${
                      errors.vendeDeportivas ? "border-destructive" : ""
                    }`}
                  >
                    <SelectValue placeholder="¿Vendes marcas deportivas? *" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="si">Sí</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>

                <div className="flex items-start gap-3 pt-1">
                  <Checkbox
                    id="autoriza-hero"
                    checked={formData.autorizaDatos}
                    onCheckedChange={(checked) =>
                      updateField("autorizaDatos", !!checked)
                    }
                    className={`border-background/40 data-[state=checked]:bg-accent ${
                      errors.autorizaDatos ? "border-destructive" : ""
                    }`}
                  />

                  <Label
                    htmlFor="autoriza-hero"
                    className="text-xs text-background/60 leading-relaxed cursor-pointer"
                  >
                    Autorizo el tratamiento de mis datos personales según la
                    política de privacidad de KOM Sportswear. *
                  </Label>
                </div>

                <Button
                  variant="kom"
                  size="lg"
                  type="submit"
                  className="w-full text-base py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Solicitar Catálogo para Distribuidores
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>

          <div className="order-1 lg:order-2 space-y-8">
            <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-sm">
              Programa de distribuidores
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-background tracking-tight">
              Conviértete en
              <br />
              <span className="text-accent">distribuidor</span>
              <br />
              de KOM
            </h1>

            <p className="text-lg md:text-xl text-background/70 leading-relaxed max-w-lg">
              Vende una marca deportiva para ciclismo y running con diseño
              técnico, alto posicionamiento y potencial comercial.
            </p>

            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
              </span>
              <span className="text-sm text-accent font-medium tracking-wide">
                Selección activa — cupos limitados por ciudad
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {trustSignals.map((signal) => (
                <div key={signal.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <signal.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-background/80 text-sm font-medium">
                    {signal.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BHero;
