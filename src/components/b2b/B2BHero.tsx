import { ArrowRight, ChevronDown, Award, Package, Headphones, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/b2b-hero.jpg";

const trustSignals = [
  { icon: Award, label: "Marca especializada" },
  { icon: Package, label: "Producto premium" },
  { icon: Headphones, label: "Soporte comercial" },
  { icon: TrendingUp, label: "Oportunidad de crecimiento" },
];

const B2BHero = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToModel = () => {
    document.getElementById("modelo-comercial")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Ciclistas KOM en ruta de montaña" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="max-w-2xl space-y-8">
          <div className="space-y-2">
            <span className="inline-block text-accent font-semibold tracking-[0.2em] uppercase text-sm">
              Programa de distribuidores
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-background tracking-tight">
            Conviértete en distribuidor de KOM
          </h1>

          <p className="text-lg md:text-xl text-background/80 leading-relaxed max-w-xl">
            Lleva a tu tienda una marca de apparel deportivo premium para ciclismo y running, con diseño técnico, identidad fuerte y alto potencial comercial.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button variant="kom" size="lg" className="text-base px-8 py-6" onClick={scrollToForm}>
              Quiero aplicar como distribuidor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="kom-white" size="lg" className="text-base px-8 py-6" onClick={scrollToModel}>
              Conocer el modelo comercial
            </Button>
          </div>
        </div>
      </div>

      {/* Trust signals bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-foreground/60 backdrop-blur-md border-t border-background/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {trustSignals.map((signal) => (
              <div
                key={signal.label}
                className="flex items-center gap-3 py-5 px-4 border-r border-background/10 last:border-r-0"
              >
                <signal.icon className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-background/90 text-sm font-medium">{signal.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <ChevronDown className="h-6 w-6 text-background/50" />
      </div>
    </section>
  );
};

export default B2BHero;
