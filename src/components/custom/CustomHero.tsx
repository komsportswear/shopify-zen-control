import { ArrowRight, PenTool, Factory, Truck, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/b2b-hero.jpg";
import { trackEvent } from "@/lib/analytics";

const micro = [
  { icon: PenTool, label: "Diseño profesional" },
  { icon: Factory, label: "Producción especializada" },
  { icon: Truck, label: "Envíos a toda Colombia" },
  { icon: Handshake, label: "Acompañamiento total" },
];

interface Props {
  onQuote: () => void;
  onProjects: () => void;
}

const CustomHero = ({ onQuote, onProjects }: Props) => (
  <section className="relative flex min-h-[88vh] items-center overflow-hidden pt-16">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Equipo con uniformes personalizados KOM" className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
    </div>

    <div className="container relative z-10 mx-auto px-6 py-20">
      <div className="max-w-3xl space-y-8">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent sm:text-sm">
          Productos personalizados KOM
        </span>

        <h1 className="text-4xl font-bold leading-[0.95] tracking-tighter text-background sm:text-6xl lg:text-7xl">
          TU EQUIPO. TU EMPRESA. TU MARCA.
          <br />
          <span className="text-accent">HECHA PARA MOVERSE.</span>
        </h1>

        <p className="max-w-xl text-lg text-background/75 sm:text-xl">
          Uniformes, ropa deportiva y productos personalizados por KOM.
          <br />
          <strong className="font-semibold text-background">Desde 10 unidades en ropa deportiva.</strong>
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button
            variant="kom"
            size="lg"
            className="px-8 py-6 text-base"
            onClick={() => {
              trackEvent("click_cta_hero");
              onQuote();
            }}
          >
            COTIZAR MI PROYECTO
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="kom-white"
            size="lg"
            className="px-8 py-6 text-base"
            onClick={() => {
              trackEvent("view_projects");
              onProjects();
            }}
          >
            VER PROYECTOS REALES
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-6 sm:grid-cols-4">
          {micro.map((m) => (
            <div key={m.label} className="flex items-start gap-2">
              <m.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="text-sm text-background/70">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CustomHero;
