import { Lightbulb, PenLine, Shirt } from "lucide-react";
import img from "@/assets/b2b-store.jpg";

const cards = [
  { icon: Shirt, title: "Ya tengo diseño", text: "Lo adaptamos técnicamente para producción." },
  { icon: PenLine, title: "Tengo mi logo y una idea", text: "Nuestro equipo desarrolla la propuesta contigo." },
  { icon: Lightbulb, title: "No sé por dónde empezar", text: "Te ayudamos a construirla desde cero." },
];

const CustomDesignHelp = () => (
  <section className="bg-foreground py-20 text-background lg:py-28">
    <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
      <div className="space-y-8">
        <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">NO NECESITAS SABER DISEÑAR.</h2>
        <p className="text-lg text-background/70">Tú tienes la idea. Nosotros la convertimos en producto.</p>

        <div className="space-y-6 pt-2">
          {cards.map((c) => (
            <div key={c.title} className="flex gap-4 border-l-2 border-accent pl-5">
              <c.icon className="mt-1 h-5 w-5 shrink-0 text-accent" />
              <div>
                <h3 className="font-semibold">{c.title}</h3>
                <p className="text-sm text-background/60">{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-4 text-xs font-semibold uppercase tracking-[0.2em] text-background/50">
          <span>Idea</span>
          <span className="h-px w-8 bg-accent" />
          <span>Diseño</span>
          <span className="h-px w-8 bg-accent" />
          <span className="text-accent">Producto terminado</span>
        </div>
      </div>

      <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[3/4]">
        <img src={img} alt="Proceso de diseño de prendas personalizadas KOM" loading="lazy" className="h-full w-full object-cover" />
      </div>
    </div>
  </section>
);

export default CustomDesignHelp;
