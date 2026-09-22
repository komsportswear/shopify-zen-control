import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const stripRef = useRef<HTMLDivElement | null>(null);
  const thumbnailRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const touchStartX = useRef<number | null>(null);

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

  // Centra la miniatura activa dentro de la tira, sin desplazar la página.
  useEffect(() => {
    const strip = stripRef.current;
    const thumb = thumbnailRefs.current[active];
    if (!strip || !thumb) return;
    const max = strip.scrollWidth - strip.clientWidth;
    if (max <= 0) return;
    const target =
      strip.scrollLeft +
      (thumb.getBoundingClientRect().left - strip.getBoundingClientRect().left) -
      (strip.clientWidth - thumb.clientWidth) / 2;
    strip.scrollTo({ left: Math.min(Math.max(target, 0), max), behavior: "smooth" });
  }, [active]);

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
            className="group relative mx-auto aspect-[3/4] w-full max-w-[520px] touch-pan-y overflow-hidden bg-muted"
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
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0]?.clientX ?? null;
              setPaused(true);
            }}
            onTouchEnd={(e) => {
              const startX = touchStartX.current;
              const endX = e.changedTouches[0]?.clientX;
              touchStartX.current = null;
              setPaused(false);
              if (startX === null || endX === undefined) return;
              const distance = endX - startX;
              if (Math.abs(distance) < 48) return;
              go(distance < 0 ? active + 1 : active - 1);
            }}
            onTouchCancel={() => {
              touchStartX.current = null;
              setPaused(false);
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

            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => go(active - 1)}
              aria-label="Producto anterior"
              className="absolute left-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-none bg-background/85 text-foreground shadow-md backdrop-blur-sm hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => go(active + 1)}
              aria-label="Producto siguiente"
              className="absolute right-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-none bg-background/85 text-foreground shadow-md backdrop-blur-sm hover:bg-accent hover:text-accent-foreground"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
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
            <Button
              variant="kom"
              size="lg"
              onClick={onQuote}
              className="mt-6 h-12 w-full rounded-none px-8 text-sm font-bold tracking-[0.1em] sm:w-auto"
            >
              Cotizar este producto
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative -mx-6 mt-8 md:mx-0">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-background to-transparent md:hidden" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent md:hidden" />
          <div
            ref={stripRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:px-0 xl:grid xl:grid-cols-8 xl:gap-4 xl:overflow-visible xl:pb-0"
          >
            {products.map((p, i) => (
              <Button
                key={p.name}
                ref={(node) => {
                  thumbnailRefs.current[i] = node;
                }}
                type="button"
                variant="ghost"
                onClick={() => setActive(i)}
                aria-label={p.name}
                aria-current={i === active}
                className={`group/thumb relative h-auto aspect-[4/5] w-[7.25rem] shrink-0 snap-center overflow-hidden rounded-none border bg-muted p-0 text-left transition-[border-color,opacity,transform] duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 md:w-36 xl:w-auto ${
                  i === active
                    ? "border-accent opacity-100"
                    : "border-border opacity-65 hover:border-foreground/30 hover:opacity-100"
                }`}
              >
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className={`h-full w-full object-cover transition-transform duration-500 ${
                    i === active ? "scale-100" : "scale-[1.03] group-hover/thumb:scale-100"
                  }`}
                />
                <span className="absolute inset-x-0 bottom-0 flex min-h-10 items-center justify-center bg-foreground/90 px-2 py-1.5 text-center text-[10px] font-bold uppercase leading-tight tracking-[0.08em] text-background backdrop-blur-sm">
                  {p.short}
                </span>
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-0.5 bg-accent transition-transform duration-300 ${
                    i === active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Button>

            ))}
          </div>
        </div>

        <Button
          variant="link"
          onClick={onQuote}
          className="mt-7 h-auto whitespace-normal rounded-none p-0 text-left text-base font-semibold text-foreground underline-offset-4 hover:text-accent hover:underline md:mt-10"
        >
          ¿Buscas otro producto? Cuéntanos tu idea
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default CustomProducts;
