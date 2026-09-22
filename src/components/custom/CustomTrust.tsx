const stats = [
  { value: "+10", label: "Años produciendo ropa deportiva" },
  { value: "+100.000", label: "Prendas fabricadas" },
  { value: "+15", label: "Países con presencia" },
  { value: "+200", label: "Equipos y empresas atendidos" },
];

const CustomTrust = () => (
  <section
    id="confianza"
    className="border-y border-background/10 bg-foreground py-10 text-background lg:py-12"
  >
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={[
              "px-4 py-5 text-center md:px-8 md:text-left",
              "border-background/15",
              i % 2 === 1 ? "border-l" : "",
              i < 2 ? "border-b md:border-b-0" : "",
              "md:border-l md:first:border-l-0",
            ].join(" ")}
          >
            <p className="text-3xl font-bold leading-none tracking-tighter text-accent md:text-4xl lg:text-5xl">
              {s.value}
            </p>
            <p className="mt-2 text-[0.7rem] uppercase leading-snug tracking-[0.12em] text-background/70 md:text-xs">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CustomTrust;
