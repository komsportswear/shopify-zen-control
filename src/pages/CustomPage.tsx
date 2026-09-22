import { useEffect, useState } from "react";
import { ArrowRight, Menu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import komLogo from "@/assets/kom-logo.png";
import CustomHero from "@/components/custom/CustomHero";
import CustomTrust from "@/components/custom/CustomTrust";
import CustomProjectTypes from "@/components/custom/CustomProjectTypes";
import CustomDesignHelp from "@/components/custom/CustomDesignHelp";
import CustomProducts from "@/components/custom/CustomProducts";
import CustomQuoteForm from "@/components/custom/CustomQuoteForm";
import CustomPricing from "@/components/custom/CustomPricing";
import CustomQuality from "@/components/custom/CustomQuality";
import CustomProcess from "@/components/custom/CustomProcess";
import CustomFAQ from "@/components/custom/CustomFAQ";
import CustomFinalForm from "@/components/custom/CustomFinalForm";
import CustomFooter from "@/components/custom/CustomFooter";
import { WHATSAPP_URL } from "@/components/custom/data";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { href: "#proyectos-tipo", label: "Proyectos" },
  { href: "#productos", label: "Productos" },
  { href: "#calidad", label: "Calidad" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
];

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-background/10 bg-foreground/95 backdrop-blur-md" : "border-transparent bg-foreground/40 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              aria-label="Abrir menú"
              className="-ml-2 flex h-11 w-11 items-center justify-center text-background/80 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 border-background/10 bg-foreground p-0">
            <div className="p-6">
              <img src={komLogo} alt="KOM Sportswear" className="h-14" />
            </div>
            <nav className="flex flex-col gap-1 p-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-[44px] items-center px-3 text-base font-medium text-background/80 transition-colors hover:bg-background/5 hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-background/80 transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="/" className="absolute left-1/2 -translate-x-1/2" aria-label="KOM Sportswear">
          <img src={komLogo} alt="KOM Sportswear" className="h-12 md:h-14" />
        </a>

        <Button variant="kom" size="sm" className="shrink-0" onClick={() => scrollTo("cotizar")}>
          Cotizar <ArrowRight className="ml-1 hidden h-4 w-4 sm:inline" />
        </Button>
      </div>
    </header>
  );
};

const CustomPage = () => {
  const [projectType, setProjectType] = useState("");
  const [inProgress, setInProgress] = useState(false);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    document.title = "Ropa deportiva personalizada | KOM Sportswear";
    const desc =
      "Uniformes y ropa deportiva personalizada desde 10 unidades para equipos, empresas, eventos y marcas. Diseño, producción y entrega con KOM Sportswear.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", desc);

    try {
      setInProgress(!!localStorage.getItem("kom-cotizacion-personalizados"));
    } catch {
      /* almacenamiento no disponible */
    }
  }, []);

  // La barra fija inferior solo aparece una vez superada la banda de cifras.
  useEffect(() => {
    const trust = document.getElementById("confianza");
    if (!trust) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const bottom = trust.getBoundingClientRect().bottom;
      setShowBar((prev) => (bottom <= 0 ? true : bottom > 24 ? false : prev));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const goToForm = (type?: string) => {
    if (type) setProjectType(type);
    scrollTo("cotizar");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CustomHero onQuote={() => goToForm()} onProjects={() => scrollTo("productos")} />
        <CustomTrust />
        <CustomProjectTypes onSelect={(v) => goToForm(v)} />
        <CustomDesignHelp onQuote={() => goToForm()} />
        <CustomProducts onQuote={() => goToForm()} />
        <CustomQuoteForm projectType={projectType} setProjectType={setProjectType} />
        <CustomPricing />
        <CustomQuality />
        <CustomProcess />
        <CustomFAQ />
        <CustomFinalForm onQuote={() => goToForm()} />
      </main>
      <CustomFooter />

      {/* WhatsApp flotante (escritorio) */}
      <button
        type="button"
        aria-label="Escríbenos por WhatsApp"
        onClick={() => {
          trackEvent("click_whatsapp");
          window.open(WHATSAPP_URL, "_blank");
        }}
        className="fixed bottom-8 right-8 z-40 hidden h-14 w-14 items-center justify-center bg-accent text-accent-foreground shadow-lg transition-transform hover:scale-105 md:flex"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* CTA sticky mobile: aparece al superar la banda de cifras */}
      <div
        aria-hidden={!showBar}
        className={`fixed bottom-0 left-0 right-0 z-40 flex items-center gap-2 border-t border-border bg-background p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 ease-out motion-reduce:transition-none md:hidden ${
          showBar ? "translate-y-0" : "pointer-events-none translate-y-full"
        }`}
      >
        <Button variant="kom" className="h-12 flex-1 text-sm font-bold" onClick={() => goToForm()}>
          {inProgress ? "CONTINUAR MI COTIZACIÓN" : "COTIZAR MI PROYECTO"}
        </Button>
        <button
          type="button"
          aria-label="Escríbenos por WhatsApp"
          onClick={() => {
            trackEvent("click_whatsapp");
            window.open(WHATSAPP_URL, "_blank");
          }}
          className="flex h-12 w-12 shrink-0 items-center justify-center border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <MessageCircle className="h-5 w-5" />
        </button>
      </div>
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default CustomPage;
