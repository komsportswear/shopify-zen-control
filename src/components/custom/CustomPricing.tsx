import { priceTiers } from "./data";

const CustomPricing = () => (
  <section className="bg-kom-surface py-16 lg:py-20">
    <div className="container mx-auto px-6">
      <h2 className="max-w-xl text-2xl font-bold tracking-tighter md:text-4xl">
        ENTRE MÁS HACES, MEJOR PRECIO OBTIENES.
      </h2>

      <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {priceTiers.map((t) => (
          <div key={t.range} className="bg-background p-6">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.range}</span>
            <p className="mt-3 text-lg font-bold tracking-tight">{t.price}</p>
          </div>
        ))}
      </div>

      <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
        El precio final depende del producto, materiales, cantidades y características del proyecto. Recibes el valor
        exacto en tu propuesta.
      </p>
    </div>
  </section>
);

export default CustomPricing;
