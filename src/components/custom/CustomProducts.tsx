import { ArrowRight } from "lucide-react";
import { products } from "./data";

interface Props {
  onQuote: () => void;
}

const CustomProducts = ({ onQuote }: Props) => (
  <section id="productos" className="scroll-mt-24 bg-background py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <h2 className="mb-10 max-w-2xl text-3xl font-bold tracking-tighter md:text-5xl lg:mb-14">
        PERSONALIZA MUCHO MÁS QUE UN JERSEY.
      </h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4">
      {products.map((p) => (
        <div key={p.name} className="group relative aspect-[3/4] overflow-hidden">
          <img
            src={p.image}
            alt={p.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-transparent opacity-90" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <h3 className="text-lg font-bold leading-tight tracking-tight text-background md:text-2xl">{p.name}</h3>
            <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-accent md:text-xs">
              {p.min}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="container mx-auto px-6">
      <button
        onClick={onQuote}
        className="mt-10 inline-flex items-center gap-2 text-base font-semibold text-foreground underline-offset-4 hover:text-accent hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        ¿Buscas otro producto? Cuéntanos tu idea
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  </section>
);

export default CustomProducts;
