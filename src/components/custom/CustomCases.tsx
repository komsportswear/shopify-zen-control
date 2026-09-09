import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cases } from "./data";

interface Props {
  onQuote: () => void;
}

const CustomCases = ({ onQuote }: Props) => (
  <section id="casos" className="bg-foreground py-20 text-background lg:py-28">
    <div className="container mx-auto px-6">
      <h2 className="mb-4 max-w-2xl text-3xl font-bold tracking-tighter md:text-5xl">
        PROYECTOS QUE YA ESTÁN EN MOVIMIENTO.
      </h2>
      <p className="mb-12 max-w-xl text-background/60">
        Producimos para equipos, empresas y eventos en Colombia y fuera del país.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {cases.map((c) => (
          <article key={c.type} className="group">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={c.image}
                alt={`Proyecto personalizado KOM para ${c.type}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="pt-5">
              <span className="text-xs uppercase tracking-[0.2em] text-accent">{c.type}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12">
        <Button variant="kom" size="lg" className="px-8 py-6 text-base" onClick={onQuote}>
          QUIERO HACER ALGO ASÍ
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  </section>
);

export default CustomCases;
