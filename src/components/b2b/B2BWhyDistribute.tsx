import { Check, ArrowRight, Layers, Palette, Users, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import textureImg from "@/assets/b2b-texture.jpg";

const highlights = [
  { icon: Layers, title: "Producto técnico premium", desc: "Prendas especializadas para ciclismo y running, con foco en clima frío y alto rendimiento." },
  { icon: Palette, title: "Marca con identidad fuerte", desc: "Propuesta visual sólida que vende mejor en punto físico y digital." },
  { icon: Users, title: "Comunidad deportiva activa", desc: "Conecta con ciclistas y runners que valoran calidad y estética." },
  { icon: RefreshCw, title: "Alta rotación y recompra", desc: "Productos con potencial de compra recurrente por parte del cliente final." },
];

const distributorBenefits = [
  "Precios preferenciales para distribuidores",
  "Diferencial claro frente al precio público",
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

const B2BWhyDistribute = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="modelo-comercial" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Top: headline + highlights */}
        <div className="max-w-3xl mb-16">
          <span className="text-accent font-semibold tracking-[0.15em] uppercase text-sm">El modelo</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 mb-6 leading-tight">
            Una oportunidad real de negocio con una marca de alto valor percibido
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            KOM no es solo ropa deportiva. Es una marca con identidad, diseño y funcionalidad. Buscamos aliados que quieran construir una relación comercial sostenible y rentable.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((h) => (
            <div key={h.title} className="group relative p-8 rounded-3xl bg-kom-surface hover:bg-foreground transition-all duration-500 cursor-default">
              <div className="w-12 h-12 rounded-2xl bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-6 transition-colors">
                <h.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-background transition-colors">{h.title}</h3>
              <p className="text-sm text-muted-foreground group-hover:text-background/60 transition-colors leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom: split layout with image + benefits */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/10 rounded-3xl -z-10" />
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">Lo que recibe un distribuidor KOM</h3>
            <div className="space-y-4">
              {distributorBenefits.map((b) => (
                <div key={b} className="flex items-start gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-accent" />
                  </div>
                  <span className="text-foreground text-lg">{b}</span>
                </div>
              ))}
            </div>

            <div className="bg-foreground rounded-2xl p-8 space-y-3">
              <p className="text-background/90 leading-relaxed">
                Acceso a portafolio mayorista, condiciones comerciales exclusivas y la posibilidad de construir una relación a largo plazo con una marca en crecimiento.
              </p>
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

export default B2BWhyDistribute;
