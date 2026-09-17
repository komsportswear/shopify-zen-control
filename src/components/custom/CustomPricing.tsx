import { priceTiers } from "./data";

const CustomPricing = () => (
  <section className="bg-kom-surface py-14 lg:py-16">
    <div className="container mx-auto px-6">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:items-center lg:gap-16">
        <div>
          <h2 className="text-2xl font-bold tracking-tighter md:text-4xl">
            ENTRE MÁS HACES,
            <br />
            <span className="text-accent">MEJOR PRECIO OBTIENES.</span>
          </h2>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            El precio final depende del producto, materiales, cantidades y características del proyecto. Recibes el
            valor exacto en tu propuesta.
          </p>
        </div>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {priceTiers.map((t) => (
            <div key={t.range} className="bg-background px-5 py-6">
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent">{t.range}</span>
              <p className="mt-3 text-base font-bold leading-snug tracking-tight">{t.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default CustomPricing;
