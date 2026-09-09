import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "./data";

const CustomFAQ = () => (
  <section id="faq" className="scroll-mt-20 bg-background py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
          PREGUNTAS
          <br />
          FRECUENTES.
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default CustomFAQ;
