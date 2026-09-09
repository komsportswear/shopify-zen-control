import { ArrowUp, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL } from "./data";
import { trackEvent } from "@/lib/analytics";

interface Props {
  onQuote: () => void;
}

const CustomFinalForm = ({ onQuote }: Props) => (
  <section className="bg-foreground py-20 text-background lg:py-28">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">¿LISTO PARA CREAR EL TUYO?</h2>
        <p className="mt-4 text-background/70">
          Responde cuatro preguntas y recibe una propuesta hecha para tu proyecto. Toma menos de un minuto.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="kom" size="lg" className="px-8 py-6 text-base" onClick={onQuote}>
            <ArrowUp className="mr-2 h-5 w-5" />
            COTIZAR MI PROYECTO
          </Button>
          <Button
            variant="kom-white"
            size="lg"
            className="px-8 py-6 text-base"
            onClick={() => {
              trackEvent("click_whatsapp");
              window.open(WHATSAPP_URL, "_blank");
            }}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            ESCRIBIR POR WHATSAPP
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CustomFinalForm;
