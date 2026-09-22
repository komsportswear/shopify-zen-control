import { ArrowRight, PenTool, Factory, Truck, Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/b2b-hero.jpg";
import heroVideo from "@/assets/banner-personalizados.mp4";
import heroVideoMobile from "@/assets/banner-personalizados-mobile.mp4";
import heroVideoMobilePoster from "@/assets/banner-personalizados-mobile-poster.jpg";
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
  <section className="relative overflow-hidden bg-foreground pt-20 md:flex md:min-h-[640px] md:items-center lg:min-h-[78vh]">
    <div className="relative aspect-square w-full md:absolute md:inset-0 md:aspect-auto">
      <video
        className="h-full w-full object-cover md:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={heroVideoMobilePoster}
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={heroVideoMobile} type="video/mp4" />
      </video>
      <video
        className="hidden h-full w-full object-cover object-center md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={heroImg}
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-transparent to-foreground md:bg-gradient-to-r md:from-foreground/95 md:via-foreground/85 md:to-foreground/45" />
    </div>

    <div className="container relative z-10 mx-auto -mt-px px-6 pb-8 pt-7 sm:pb-12 md:mt-0 md:py-16 lg:py-24">
      <div className="max-w-xl space-y-6 lg:max-w-2xl lg:space-y-8">
        <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-accent sm:text-sm">
          Productos personalizados KOM
        </span>

        <h1 className="text-[2.1rem] font-bold leading-[0.95] tracking-tighter text-background sm:text-5xl lg:text-6xl xl:text-7xl">
          TU EQUIPO. TU EMPRESA. TU MARCA.
          <br />
          <span className="text-accent">HECHA PARA MOVERSE.</span>
        </h1>

        <p className="max-w-xl text-base text-background/80 sm:text-lg lg:text-xl">
          Uniformes, ropa deportiva y productos personalizados por KOM.
          <br className="hidden sm:block" />
          <strong className="font-semibold text-background"> Desde 10 unidades en ropa deportiva.</strong>
        </p>

        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Button
            variant="kom"
            size="lg"
            className="w-full px-8 py-6 text-base sm:w-auto"
            onClick={() => {
              trackEvent("click_cta_hero");
              onQuote();
            }}
          >
            COTIZAR MI PROYECTO
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <button
            type="button"
            className="group inline-flex items-center gap-2 py-2 text-sm font-semibold uppercase tracking-wide text-background underline-offset-8 hover:text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            onClick={() => {
              trackEvent("view_projects");
              onProjects();
            }}
          >
            VER PRODUCTOS
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-background/15 pt-6 sm:grid-cols-4">
          {micro.map((m) => (
            <div key={m.label} className="flex items-start gap-2">
              <m.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span className="text-xs leading-snug text-background/75 sm:text-sm">{m.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CustomHero;
