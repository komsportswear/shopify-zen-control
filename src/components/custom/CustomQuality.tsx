import printing from "@/assets/quality-printing.jpg";
import cutting from "@/assets/quality-cutting.jpg";
import stitching from "@/assets/quality-stitching.jpg";

const benefits = [
  "Materiales técnicos",
  "Sublimación de alta definición",
  "Diseño adaptado a la prenda",
  "Fits deportivos",
  "Producción especializada",
  "Control de calidad",
];

const CustomQuality = () => (
  <section id="calidad" className="scroll-mt-24 bg-kom-surface py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">DISEÑADO PARA USARSE DE VERDAD.</h2>
          <ul className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 border-b border-border py-2 text-sm font-medium">
                <span className="h-1.5 w-1.5 shrink-0 bg-accent" />
                {b}
              </li>
            ))}
          </ul>
          <p className="max-w-md text-muted-foreground">
            Cada diseño se adapta técnicamente antes de entrar a producción. Nada se fabrica sin aprobación previa.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <img src={printing} alt="Impresión digital por sublimación de jerseys en la planta de KOM" loading="lazy" className="col-span-2 h-56 w-full object-cover lg:h-72" />
          <img src={cutting} alt="Corte de paneles de tela técnica sobre mesa de producción" loading="lazy" className="h-44 w-full object-cover object-[50%_70%] lg:h-56" />
          <img src={stitching} alt="Confección de prenda técnica en máquina industrial" loading="lazy" className="h-44 w-full object-cover object-[50%_50%] lg:h-56" />
        </div>
      </div>
    </div>
  </section>
);

export default CustomQuality;
