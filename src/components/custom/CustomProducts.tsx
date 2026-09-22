import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "./data";

interface Props {
  onQuote: () => void;
}

const INTERVAL = 5000;

const CustomProducts = ({ onQuote }: Props) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const go = useCallback((next: number) => {
    setActive((next + products.length) % products.length);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || paused || !visible) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % products.length);
    }, INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, visible]);

  const current = products[active];

  return (
    <section
      id="productos"
      ref={sectionRef}
      className="scroll-mt-24 bg-background py-20 lg:py-28"
    >
      <div className="container mx-auto px-6">
        <h2 className="mb-10 max-w-2xl text-3xl font-bold tracking-tighter md:text-5xl lg:mb-14">
          PERSONALIZA MUCHO MÁS QUE UN JERSEY.
        </h2>

        <div
          className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center lg:gap-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div
            className="group relative mx-auto aspect-[3/4] w-full max-w-[520px] overflow-hidden bg-muted"
            role="region"
            aria-roledescription="carrusel"
            aria-label="Productos personalizables"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") {
                e.preventDefault();
                go(active + 1);
              }
              if (e.key === "ArrowLeft") {
                e.preventDefault();
                go(active - 1);
              }
            }}
          >
            {products.map((p, i) => (
              <img
                key={p.name}
                src={p.image}
                alt={p.name}
                loading={i === 0 ? "eager" : "lazy"}
                aria-hidden={i !== active}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
                  i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}

            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Producto anterior"
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-background/80 p-3 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Producto siguiente"
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-background/80 p-3 text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div aria-live="polite">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              {String(active + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight md:text-4xl">
              {current.name}
            </h3>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-accent md:text-sm">
              {current.min}
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              {current.description}
            </p>
            <button
              onClick={onQuote}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-accent px-8 py-4 text-sm font-bold uppercase tracking-[0.1em] text-accent-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:w-auto"
            >
              Cotizar este producto
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="-mx-6 mt-8 overflow-x-auto px-6 lg:mx-0 lg:px-0">
          <div className="flex min-w-max gap-3 lg:grid lg:min-w-0 lg:grid-cols-8">
            {products.map((p, i) => (
              <button
                key={p.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={p.name}
                aria-current={i === active}
                className={`relative aspect-[3/4] w-20 shrink-0 overflow-hidden border-2 transition-all lg:w-auto ${
                  i === active
                    ? "border-accent opacity-100"
                    : "border-transparent opacity-50 hover:opacity-100"
                }`}
              >
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

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
};

export default CustomProducts;
