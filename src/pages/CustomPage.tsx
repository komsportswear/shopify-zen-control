import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import komLogo from "@/assets/kom-logo.png";
import CustomHero from "@/components/custom/CustomHero";
import CustomProjectTypes from "@/components/custom/CustomProjectTypes";
import CustomDesignHelp from "@/components/custom/CustomDesignHelp";
import CustomProducts from "@/components/custom/CustomProducts";
import CustomQuoteForm from "@/components/custom/CustomQuoteForm";
import CustomPricing from "@/components/custom/CustomPricing";
import CustomQuality from "@/components/custom/CustomQuality";
import CustomProcess from "@/components/custom/CustomProcess";
import CustomCases from "@/components/custom/CustomCases";
import CustomFinalForm from "@/components/custom/CustomFinalForm";
import CustomFooter from "@/components/custom/CustomFooter";

const navLinks = [
  { href: "#proyectos-tipo", label: "Proyectos" },
  { href: "#productos", label: "Productos" },
  { href: "#calidad", label: "Calidad" },
  { href: "#proceso", label: "Proceso" },
  { href: "#casos", label: "Casos" },
];

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-background/10 bg-foreground/95 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button aria-label="Abrir menú" className="text-background/80 transition-colors hover:text-accent">
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
                  className="rounded-lg px-3 py-3 text-base font-medium text-background/70 transition-colors hover:bg-background/5 hover:text-accent"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-background/70 transition-colors hover:text-accent">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="/" className="absolute left-1/2 -translate-x-1/2">
          <img src={komLogo} alt="KOM Sportswear" className="h-16" />
        </a>

        <Button variant="kom" size="sm" onClick={() => scrollTo("cotizar")}>
          Cotizar <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

const CustomPage = () => {
  const [projectType, setProjectType] = useState("");

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
  }, []);

  const goToForm = (type?: string) => {
    if (type) setProjectType(type);
    scrollTo("cotizar");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <CustomHero onQuote={() => goToForm()} onProjects={() => scrollTo("casos")} />
        <CustomProjectTypes onSelect={(v) => goToForm(v)} />
        <CustomDesignHelp />
        <CustomProducts onQuote={() => goToForm()} />
        <CustomQuoteForm projectType={projectType} setProjectType={setProjectType} />
        <CustomPricing />
        <CustomQuality />
        <CustomProcess />
        <CustomCases onQuote={() => goToForm()} />
        <CustomFinalForm projectType={projectType} />
      </main>
      <CustomFooter />

      {/* CTA sticky mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background p-3 md:hidden">
        <Button variant="kom" className="w-full py-5 text-sm font-bold" onClick={() => goToForm()}>
          COTIZAR MI PROYECTO
        </Button>
      </div>
      <div className="h-16 md:hidden" />
    </div>
  );
};

export default CustomPage;
