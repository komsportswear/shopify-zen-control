import { Check, ArrowRight, Store, Bike, Mountain, Rocket, MapPin, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import textureImg from "@/assets/b2b-texture.jpg";

const profiles = [
  { icon: Store, label: "Tiendas deportivas especializadas" },
  { icon: Bike, label: "Tiendas de ciclismo" },
  { icon: Mountain, label: "Concept stores activas / outdoor" },
  { icon: Rocket, label: "Emprendedores con canal comercial validado" },
  { icon: MapPin, label: "Distribuidores regionales" },
  { icon: Megaphone, label: "Aliados con comunidad o influencia real" },
];

const distributorBenefits = [
  "Precios preferenciales para distribuidores",
  "En KOM no competimos con nuestros distribuidores mediante descuentos agresivos. Protegemos su rentabilidad y el valor de la marca.",
  "Producto con alto valor percibido",
  "Material de apoyo y acompañamiento comercial",
  "Posibilidad de crecimiento conjunto a largo plazo",
];

const metrics = [
  { value: "[COP X]", label: "Pedido mínimo" },
  { value: "[X%]", label: "Margen estimado" },
  { value: "[X días]", label: "Activación" },
  { value: "COL / Latam", label: "Cobertura" },
];


const B2BValueProposition = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="modelo-comercial" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent font-semibold tracking-[0.15em] uppercase text-sm">El modelo</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 mb-6 leading-tight">
            Una oportunidad real de negocio con una marca de alto valor percibido
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            KOM no es solo ropa deportiva. Es una marca con identidad, diseño y funcionalidad. Buscamos aliados que quieran construir una relación comercial sostenible y rentable.
          </p>
        </div>

        {/* ¿A quién buscamos? */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {profiles.map((p) => (
            <div key={p.label} className="flex items-center gap-4 p-5 rounded-2xl bg-kom-surface border border-border">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <p.icon className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm font-semibold">{p.label}</span>
            </div>
          ))}
        </div>

        {/* Split layout: image + benefits + profiles */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Image with metrics */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/5] relative">
              <img src={textureImg} alt="Detalle de producto KOM" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-2 gap-4">
                  {metrics.map((m) => (
                    <div key={m.label} className="text-background">
                      <div className="text-2xl font-bold">{m.value}</div>
                      <div className="text-xs text-background/60 uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-3xl -z-10" />
          </div>

          {/* Benefits + Profiles */}
          <div className="space-y-10">
            <div className="space-y-8">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight">Lo que recibe un distribuidor KOM</h3>
              <div className="space-y-4">
                {distributorBenefits.map((b) => (
                  <div key={b} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <span className="text-foreground text-lg">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal profiles as compact list */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-muted-foreground uppercase tracking-wider text-sm">¿A quién buscamos?</h4>
              <div className="space-y-3">
                {profiles.map((p) => (
                  <div key={p.label} className="flex items-center gap-3 py-2 border-b border-border last:border-b-0">
                    <p.icon className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="kom" size="lg" className="text-base" onClick={scrollToForm}>
              Solicitar catálogo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BValueProposition;
