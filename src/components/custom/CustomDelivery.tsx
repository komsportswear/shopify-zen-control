import { Clock } from "lucide-react";
import { deliveryTimes, serviceIncludes } from "./data";

const CustomDelivery = () => (
  <section id="tiempos" className="scroll-mt-20 bg-background py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
            TIEMPOS DE ENTREGA
            <br />
            <span className="text-accent">Y MÍNIMOS CLAROS.</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Planea tu evento o entrega con fechas reales. Los tiempos empiezan a contar desde la aprobación del diseño.
          </p>

          <div className="mt-8 grid gap-px border border-border bg-border">
            {deliveryTimes.map((d) => (
              <div key={d.range} className="flex items-center justify-between bg-background px-5 py-4">
                <span className="text-sm font-semibold">{d.range} unidades</span>
                <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-accent" />
                  {d.time}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Tiempos estimados. Se confirman en la propuesta según producto y temporada.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Qué incluye el servicio</h3>
          <ul className="mt-6 grid gap-px bg-border">
            {serviceIncludes.map((s) => (
              <li key={s.title} className="bg-background p-5">
                <p className="font-bold">{s.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default CustomDelivery;
