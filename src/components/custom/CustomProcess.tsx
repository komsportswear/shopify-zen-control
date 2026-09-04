const steps = [
  { n: "01", title: "Cuéntanos qué necesitas", text: "Producto, cantidad, fecha e idea." },
  { n: "02", title: "Recibe tu propuesta", text: "Definimos producto, alcance y precio." },
  { n: "03", title: "Creamos tu diseño", text: "Trabajamos sobre tu identidad o la desarrollamos desde cero." },
  { n: "04", title: "Tú apruebas", text: "Nada entra a producción sin tu aprobación." },
  { n: "05", title: "Producimos y entregamos", text: "Recibes tu pedido listo para usar, regalar o vender." },
];

const CustomProcess = () => (
  <section id="proceso" className="bg-background py-20 lg:py-28">
    <div className="container mx-auto px-6">
      <h2 className="mb-12 text-3xl font-bold tracking-tighter md:text-5xl">DE TU IDEA AL PRODUCTO.</h2>

      <div className="grid gap-px bg-border md:grid-cols-5">
        {steps.map((s) => (
          <div key={s.n} className="group bg-background p-6 transition-colors hover:bg-foreground">
            <span className="block text-4xl font-bold tracking-tighter text-accent">{s.n}</span>
            <h3 className="mt-4 font-bold group-hover:text-background">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground group-hover:text-background/60">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CustomProcess;
