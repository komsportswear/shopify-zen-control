import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import komLogo from "@/assets/kom-logo.png";
import B2BHero from "@/components/b2b/B2BHero";
import B2BValueProposition from "@/components/b2b/B2BValueProposition";
import B2BProcess from "@/components/b2b/B2BProcess";
import B2BCategories from "@/components/b2b/B2BCategories";
import B2BSocialProof from "@/components/b2b/B2BSocialProof";
import B2BFAQ from "@/components/b2b/B2BFAQ";
import B2BFinalCTA from "@/components/b2b/B2BFinalCTA";
import B2BFooter from "@/components/b2b/B2BFooter";

const B2BHeader = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md border-b border-background/10">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <nav className="hidden md:flex items-center gap-6">
          <a href="#modelo-comercial" className="text-sm text-background/70 hover:text-accent transition-colors">Modelo</a>
          <a href="#proceso" className="text-sm text-background/70 hover:text-accent transition-colors">Proceso</a>
          <a href="#categorias" className="text-sm text-background/70 hover:text-accent transition-colors">Categorías</a>
          <a href="#testimonios" className="text-sm text-background/70 hover:text-accent transition-colors">Testimonios</a>
          <a href="#faq" className="text-sm text-background/70 hover:text-accent transition-colors">FAQ</a>
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

