const stats = [
  { value: "+10", label: "Años produciendo ropa deportiva" },
  { value: "+100.000", label: "Prendas fabricadas" },
  { value: "+15", label: "Países con presencia" },
  { value: "+200", label: "Equipos y empresas atendidos" },
];

const CustomTrust = () => (
  <section className="border-b border-background/10 bg-foreground py-8 text-background">
    <div className="container mx-auto grid grid-cols-2 gap-px px-6 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="px-2 py-4 text-center md:text-left">
          <p className="text-3xl font-bold tracking-tighter text-accent md:text-4xl">{s.value}</p>
          <p className="mt-1 text-xs uppercase tracking-wide text-background/60">{s.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CustomTrust;
