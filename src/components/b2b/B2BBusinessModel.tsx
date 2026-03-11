import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import textureImg from "@/assets/b2b-texture.jpg";

const benefits = [
  "Precios preferenciales para canal distribuidor",
  "Diferencial claro frente al precio público",
  "Producto con alto valor percibido",
  "Marca atractiva para nichos deportivos especializados",
  "Posibilidad de crecimiento conjunto",
];

const distributorReceives = [
  "Acceso a portafolio mayorista",
  "Condiciones comerciales exclusivas",
  "Material de apoyo para ventas",
  "Acompañamiento comercial",
  "Posibilidad de construir relación a largo plazo",
];

const metrics = [
  { value: "[COP X]", label: "Pedido mínimo desde" },
  { value: "[X%]", label: "Margen estimado desde" },
  { value: "[X días]", label: "Tiempo de activación" },
  { value: "Colombia / Latam", label: "Cobertura" },
];

const B2BBusinessModel = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="modelo-comercial" className="py-24 lg:py-32 bg-kom-surface">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + metrics */}
          <div className="space-y-8">
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <img src={textureImg} alt="Detalle de producto KOM" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-2 gap-4">
                  {metrics.map((m) => (
                    <div key={m.label} className="text-background">
                      <div className="text-2xl font-bold">{m.value}</div>
                      <div className="text-sm text-background/70">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 leading-tight">
                Una oportunidad real de negocio para crecer con una marca de alto valor percibido
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Buscamos aliados que quieran construir una relación comercial sostenible, rentable y alineada con una marca con visión de largo plazo.
              </p>
            </div>

            <div className="space-y-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-foreground">{b}</span>
                </div>
              ))}
            </div>

            {/* Highlighted panel */}
            <div className="bg-foreground rounded-2xl p-8 space-y-4">
              <h3 className="text-xl font-semibold text-background">Lo que recibe un distribuidor KOM</h3>
              <div className="space-y-3">
                {distributorReceives.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-background/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button variant="kom" size="lg" className="text-base" onClick={scrollToForm}>
              Quiero aplicar
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BBusinessModel;
