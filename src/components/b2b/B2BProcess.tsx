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
    <section className="pt-12 lg:pt-16 pb-20 lg:pb-24 bg-kom-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-accent font-semibold tracking-[0.15em] uppercase text-sm">Cómo empezar</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-4">
            Así funciona el proceso
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            De la aplicación a tu primera venta en cuatro pasos simples
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-accent/40 via-accent to-accent/40" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-foreground to-foreground/90 mx-auto flex flex-col items-center justify-center mb-6 shadow-xl shadow-accent/10 border border-accent/20">
                <step.icon className="h-7 w-7 text-accent mb-1" />
                <span className="text-accent/80 font-bold text-sm">{step.number}</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed px-2">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-6">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-foreground to-foreground/90 flex flex-col items-center justify-center flex-shrink-0 shadow-lg shadow-accent/10 border border-accent/20">
                  <step.icon className="h-5 w-5 text-accent mb-0.5" />
                  <span className="text-accent/80 font-bold text-xs">{step.number}</span>
                </div>
                {i < steps.length - 1 && <div className="w-0.5 h-full bg-gradient-to-b from-accent to-accent/20 flex-1 min-h-[1.5rem] mt-2" />}
              </div>
              <div className="pb-4 pt-2">
                <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
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
