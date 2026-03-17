import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const B2BFinalCTA = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Haz crecer tu negocio con una marca que se siente distinta
          </h2>
          <p className="text-lg text-background/70 leading-relaxed max-w-2xl mx-auto">
            Si estás buscando una marca deportiva con identidad, diseño técnico y potencial comercial, queremos conocerte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="kom" size="lg" className="text-base px-8 py-6" onClick={scrollToForm}>
              Aplicar ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="kom-white"
              size="lg"
              className="text-base px-8 py-6"
              onClick={() => window.open("https://wa.me/573057884628?text=Hola%2C%20quiero%20información%20sobre%20distribución%20de%20KOM", "_blank")}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Hablar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BFinalCTA;
