const steps = [
  { n: "01", title: "Cuéntanos qué necesitas", text: "Producto, cantidad, fecha e idea." },
  { n: "02", title: "Recibe tu propuesta", text: "Definimos producto, alcance y precio." },
  { n: "03", title: "Creamos tu diseño", text: "Trabajamos sobre tu identidad o la desarrollamos desde cero." },
  { n: "04", title: "Tú apruebas", text: "Nada entra a producción sin tu aprobación." },
  { n: "05", title: "Producimos y entregamos", text: "Recibes tu pedido listo para usar, regalar o vender." },
];

const CustomProcess = () => (
  <section id="proceso" className="scroll-mt-24 bg-foreground py-20 text-background lg:py-28">
    <div className="container mx-auto px-6">
      <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-5xl">DE TU IDEA AL PRODUCTO.</h2>
      <p className="mb-14 max-w-xl text-background/60">
        Cinco pasos claros, con aprobación tuya antes de producir.
      </p>

      {/* Escritorio: línea de tiempo horizontal */}
      <div className="relative hidden md:block">
        <div className="absolute left-0 right-0 top-6 h-px bg-background/15" />
        <div className="relative grid grid-cols-5 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="group">
              <div className="flex h-12 w-12 items-center justify-center bg-accent text-base font-bold text-accent-foreground transition-transform group-hover:-translate-y-1">
                {s.n}
              </div>
              <h3 className="mt-6 text-lg font-bold leading-tight">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/60">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Móvil: línea de tiempo vertical */}
      <ol className="relative space-y-8 border-l border-background/15 pl-8 md:hidden">
        {steps.map((s) => (
          <li key={s.n} className="relative">
            <span className="absolute -left-[3.05rem] flex h-10 w-10 items-center justify-center bg-accent text-sm font-bold text-accent-foreground">
              {s.n}
            </span>
            <h3 className="font-bold leading-tight">{s.title}</h3>
            <p className="mt-1 text-sm text-background/60">{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default CustomProcess;
