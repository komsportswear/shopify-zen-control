import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  nombre: string;
  empresa: string;
  ciudad: string;
  pais: string;
  tipoNegocio: string;
  instagram: string;
  whatsapp: string;
  email: string;
  vendeDeportivas: string;
  categoriasActuales: string;
  canalVenta: string;
  motivacion: string;
  volumenEstimado: string;
  autorizaDatos: boolean;
}

const initialFormData: FormData = {
  nombre: "",
  empresa: "",
  ciudad: "",
  pais: "",
  tipoNegocio: "",
  instagram: "",
  whatsapp: "",
  email: "",
  vendeDeportivas: "",
  categoriasActuales: "",
  canalVenta: "",
  motivacion: "",
  volumenEstimado: "",
  autorizaDatos: false,
};

const B2BApplicationForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.nombre.trim()) newErrors.nombre = "Campo requerido";
    if (!formData.empresa.trim()) newErrors.empresa = "Campo requerido";
    if (!formData.ciudad.trim()) newErrors.ciudad = "Campo requerido";
    if (!formData.pais.trim()) newErrors.pais = "Campo requerido";
    if (!formData.tipoNegocio) newErrors.tipoNegocio = "Selecciona una opción";
    if (!formData.whatsapp.trim()) newErrors.whatsapp = "Campo requerido";
    if (!formData.email.trim()) {
      newErrors.email = "Campo requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Email inválido";
    }
    if (!formData.vendeDeportivas) newErrors.vendeDeportivas = "Selecciona una opción";
    if (!formData.canalVenta) newErrors.canalVenta = "Selecciona una opción";
    if (!formData.autorizaDatos) newErrors.autorizaDatos = "Debes aceptar la autorización";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    setIsSubmitting(true);
    // Simulate submission — replace with CRM/API integration
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Solicitud enviada con éxito");
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

  if (isSubmitted) {
    return (
      <section id="formulario" className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-10 w-10 text-accent" />
            </div>
            <h2 className="text-3xl font-bold">¡Solicitud recibida!</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Gracias por tu interés en distribuir KOM. Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo si encontramos afinidad comercial.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Aplica para ser distribuidor KOM
            </h2>
            <p className="text-lg text-muted-foreground">
              Cuéntanos sobre tu negocio y evaluaremos si existe fit comercial para construir juntos.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 bg-kom-surface rounded-2xl p-8 md:p-12 border border-border">
            {/* Personal */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre completo *</Label>
                <Input id="nombre" value={formData.nombre} onChange={(e) => updateField("nombre", e.target.value)} className={errors.nombre ? "border-destructive" : ""} maxLength={100} />
                {errors.nombre && <p className="text-sm text-destructive">{errors.nombre}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="empresa">Nombre de empresa o tienda *</Label>
                <Input id="empresa" value={formData.empresa} onChange={(e) => updateField("empresa", e.target.value)} className={errors.empresa ? "border-destructive" : ""} maxLength={100} />
                {errors.empresa && <p className="text-sm text-destructive">{errors.empresa}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="ciudad">Ciudad *</Label>
                <Input id="ciudad" value={formData.ciudad} onChange={(e) => updateField("ciudad", e.target.value)} className={errors.ciudad ? "border-destructive" : ""} maxLength={100} />
                {errors.ciudad && <p className="text-sm text-destructive">{errors.ciudad}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="pais">País *</Label>
                <Input id="pais" value={formData.pais} onChange={(e) => updateField("pais", e.target.value)} className={errors.pais ? "border-destructive" : ""} maxLength={100} />
                {errors.pais && <p className="text-sm text-destructive">{errors.pais}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Tipo de negocio *</Label>
                <Select value={formData.tipoNegocio} onValueChange={(v) => updateField("tipoNegocio", v)}>
                  <SelectTrigger className={errors.tipoNegocio ? "border-destructive" : ""}><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="tienda-deportiva">Tienda deportiva</SelectItem>
                    <SelectItem value="tienda-ciclismo">Tienda de ciclismo</SelectItem>
                    <SelectItem value="concept-store">Concept store</SelectItem>
                    <SelectItem value="distribuidor">Distribuidor regional</SelectItem>
                    <SelectItem value="ecommerce">E-commerce</SelectItem>
                    <SelectItem value="emprendedor">Emprendedor independiente</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
                {errors.tipoNegocio && <p className="text-sm text-destructive">{errors.tipoNegocio}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="instagram">Instagram o sitio web</Label>
                <Input id="instagram" placeholder="@tutienda o www.tutienda.com" value={formData.instagram} onChange={(e) => updateField("instagram", e.target.value)} maxLength={200} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp *</Label>
                <Input id="whatsapp" placeholder="+57 300 000 0000" value={formData.whatsapp} onChange={(e) => updateField("whatsapp", e.target.value)} className={errors.whatsapp ? "border-destructive" : ""} maxLength={20} />
                {errors.whatsapp && <p className="text-sm text-destructive">{errors.whatsapp}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico *</Label>
                <Input id="email" type="email" value={formData.email} onChange={(e) => updateField("email", e.target.value)} className={errors.email ? "border-destructive" : ""} maxLength={255} />
                {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
              </div>
            </div>

            {/* Business info */}
            <div className="border-t border-border pt-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>¿Actualmente vendes marcas deportivas? *</Label>
                  <Select value={formData.vendeDeportivas} onValueChange={(v) => updateField("vendeDeportivas", v)}>
                    <SelectTrigger className={errors.vendeDeportivas ? "border-destructive" : ""}><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="si">Sí</SelectItem>
                      <SelectItem value="no">No</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.vendeDeportivas && <p className="text-sm text-destructive">{errors.vendeDeportivas}</p>}
                </div>
                <div className="space-y-2">
                  <Label>¿Tienes tienda física, e-commerce o ambas? *</Label>
                  <Select value={formData.canalVenta} onValueChange={(v) => updateField("canalVenta", v)}>
                    <SelectTrigger className={errors.canalVenta ? "border-destructive" : ""}><SelectValue placeholder="Seleccionar" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fisica">Tienda física</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="ambas">Ambas</SelectItem>
                      <SelectItem value="redes">Solo redes sociales</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.canalVenta && <p className="text-sm text-destructive">{errors.canalVenta}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="categorias">¿Qué categorías vendes hoy?</Label>
                <Input id="categorias" placeholder="Ej: Ciclismo, running, outdoor..." value={formData.categoriasActuales} onChange={(e) => updateField("categoriasActuales", e.target.value)} maxLength={300} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivacion">¿Por qué te interesa distribuir KOM?</Label>
                <Textarea id="motivacion" rows={3} value={formData.motivacion} onChange={(e) => updateField("motivacion", e.target.value)} maxLength={1000} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="volumen">Volumen estimado o expectativa de compra inicial</Label>
                <Input id="volumen" placeholder="Ej: 50-100 unidades" value={formData.volumenEstimado} onChange={(e) => updateField("volumenEstimado", e.target.value)} maxLength={200} />
              </div>
            </div>

            {/* Data consent + submit */}
            <div className="border-t border-border pt-8 space-y-6">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="autoriza"
                  checked={formData.autorizaDatos}
                  onCheckedChange={(checked) => updateField("autorizaDatos", !!checked)}
                  className={errors.autorizaDatos ? "border-destructive" : ""}
                />
                <Label htmlFor="autoriza" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  Autorizo el tratamiento de mis datos personales de acuerdo con la política de privacidad de KOM Sportswear para fines comerciales y de comunicación. *
                </Label>
              </div>
              {errors.autorizaDatos && <p className="text-sm text-destructive">{errors.autorizaDatos}</p>}

              <Button variant="kom" size="lg" type="submit" className="w-full text-base py-6" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><Loader2 className="h-5 w-5 animate-spin mr-2" /> Enviando...</>
                ) : (
                  <>Quiero ser distribuidor <ArrowRight className="ml-2 h-5 w-5" /></>
                )}
              </Button>

              <p className="text-sm text-center text-muted-foreground">
                Nuestro equipo revisará tu solicitud y se pondrá en contacto contigo si encontramos afinidad comercial.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default B2BApplicationForm;
