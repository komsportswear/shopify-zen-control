import { FileText, Search, Phone, Handshake } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Aplicas",
    description: "Completa el formulario con la información de tu negocio.",
  },
  {
    icon: Search,
    number: "02",
    title: "Evaluamos tu perfil",
    description: "Revisamos cobertura, tipo de canal, afinidad con la marca y potencial comercial.",
  },
  {
    icon: Phone,
    number: "03",
    title: "Te contactamos",
    description: "Nuestro equipo se comunica contigo para validar el fit y compartir condiciones.",
  },
  {
    icon: Handshake,
    number: "04",
    title: "Empezamos a construir",
    description: "Si hay alineación, iniciamos el proceso comercial y activación.",
  },
];

const B2BProcess = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Así funciona el proceso
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-border" />

          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center px-6">
              <div className="relative z-10 w-20 h-20 rounded-full bg-background border-2 border-border mx-auto flex items-center justify-center mb-6 group-hover:border-accent transition-colors">
                <span className="text-accent font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-background border-2 border-border flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold">{step.number}</span>
                </div>
                {i < steps.length - 1 && <div className="w-px h-full bg-border flex-1 min-h-[2rem]" />}
              </div>
              <div className="pb-10">
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2BProcess;
