import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import komLogo from "@/assets/kom-logo.png";
import B2BHero from "@/components/b2b/B2BHero";
import B2BValueProposition from "@/components/b2b/B2BValueProposition";
import B2BProcess from "@/components/b2b/B2BProcess";
import B2BCategories from "@/components/b2b/B2BCategories";
import B2BSocialProof from "@/components/b2b/B2BSocialProof";
import B2BFAQ from "@/components/b2b/B2BFAQ";
import B2BFinalCTA from "@/components/b2b/B2BFinalCTA";
import B2BFooter from "@/components/b2b/B2BFooter";

const navLinks = [
  { href: "#modelo-comercial", label: "Modelo" },
  { href: "#proceso", label: "Proceso" },
  { href: "#categorias", label: "Categorías" },
  { href: "#testimonios", label: "Trayectoria" },
  { href: "#faq", label: "FAQ" },
];

const B2BHeader = () => {
  const [open, setOpen] = useState(false);
  const scrollToForm = () => {
    setOpen(false);
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md border-b border-background/10">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="text-background/80 hover:text-accent transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-foreground border-background/10 w-72 p-0">
            <div className="flex flex-col h-full">
              <div className="p-6 border-b border-background/10">
                <img src={komLogo} alt="KOM Sportswear" className="h-14" />
              </div>
              <nav className="flex flex-col p-6 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-background/70 hover:text-accent hover:bg-background/5 transition-colors py-3 px-3 rounded-lg text-base font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto p-6 border-t border-background/10">
                <Button variant="kom" size="lg" className="w-full" onClick={scrollToForm}>
                  Aplicar <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-background/70 hover:text-accent transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="/" className="absolute left-1/2 -translate-x-1/2">
          <img src={komLogo} alt="KOM Sportswear" className="h-16" />
        </a>
        <Button variant="kom" size="sm" onClick={scrollToForm}>
          Aplicar <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

const B2BPage = () => {
  useEffect(() => {
    document.title = "Distribuidores KOM | Conviértete en aliado comercial";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Aplica para convertirte en distribuidor de KOM Sportswear. Lleva a tu tienda una marca premium de ciclismo y running con identidad, diseño técnico y alto potencial comercial.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Aplica para convertirte en distribuidor de KOM Sportswear. Lleva a tu tienda una marca premium de ciclismo y running con identidad, diseño técnico y alto potencial comercial.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <B2BHeader />
      <main>
        <B2BHero />
        <B2BValueProposition />
        <B2BProcess />
        <B2BCategories />
        <B2BSocialProof />
        <B2BFAQ />
        <B2BFinalCTA />
      </main>
      <B2BFooter />
    </div>
  );
};

export default B2BPage;
