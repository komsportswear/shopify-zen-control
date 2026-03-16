import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Qué requisitos debo cumplir para aplicar?",
    answer: "Buscamos aliados con canal comercial activo —ya sea tienda física, e-commerce o ambos— y afinidad con el universo del ciclismo, running o deporte outdoor. No es necesario ser una empresa grande; valoramos la calidad del canal y el compromiso con la marca.",
  },
  {
    question: "¿Existe un pedido mínimo?",
    answer: "Sí, existe un pedido mínimo inicial que compartiremos contigo durante el proceso de evaluación. Las condiciones están diseñadas para ser accesibles y permitir una primera experiencia exitosa con la marca.",
  },
  {
    question: "¿KOM entrega material de apoyo comercial?",
    answer: "Sí. Ofrecemos material visual, guías de producto, contenido para redes y acompañamiento para que puedas comunicar la marca de manera efectiva en tu punto de venta o canal digital.",
  },
  {
    question: "¿Puedo vender KOM en mi ciudad o región?",
    answer: "Evaluamos cobertura geográfica como parte del proceso. Buscamos presencia estratégica en diferentes ciudades y regiones de Colombia y Latinoamérica.",
  },
  {
    question: "¿Cuánto tarda el proceso de evaluación?",
    answer: "El proceso suele tomar entre [X] días hábiles desde que recibimos tu aplicación completa. Nos comunicaremos contigo si encontramos afinidad comercial.",
  },
  {
    question: "¿Puedo aplicar si vendo principalmente por redes sociales o e-commerce?",
    answer: "Absolutamente. Valoramos canales digitales con comunidad activa y capacidad de venta real. Lo importante es que tengas un canal validado y compromiso con la experiencia de marca.",
  },
  {
    question: "¿Las condiciones comerciales son iguales para todos?",
    answer: "Las condiciones pueden variar según el tipo de canal, volumen y alcance geográfico. Nuestro equipo comercial te compartirá una propuesta personalizada durante el proceso.",
  },
  {
    question: "¿Puedo tener exclusividad territorial?",
    answer: "La exclusividad territorial se evalúa caso por caso y depende del potencial comercial de la zona, el compromiso del aliado y la estrategia de expansión de la marca.",
  },
];

const B2BFAQ = () => {
  return (
    <section id="faq" className="py-24 lg:py-32 bg-kom-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
            Preguntas frecuentes
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-background rounded-xl border border-border px-6 data-[state=open]:border-accent/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default B2BFAQ;
