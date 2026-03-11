import { Layers, Palette, Users, LayoutGrid, Headphones, RefreshCw } from "lucide-react";

const cards = [
  {
    icon: Layers,
    title: "Producto especializado",
    description: "Prendas técnicas diseñadas para ciclismo y running, con foco especial en clima frío y rendimiento.",
  },
  {
    icon: Palette,
    title: "Marca con identidad",
    description: "Una propuesta visual y de marca sólida que ayuda a vender mejor en punto físico y digital.",
  },
  {
    icon: Users,
    title: "Alta afinidad con comunidades deportivas",
    description: "KOM conecta con ciclistas, runners y consumidores activos que valoran calidad y estética.",
  },
  {
    icon: LayoutGrid,
    title: "Portafolio atractivo",
    description: "Variedad de categorías, referencias y productos que permiten construir una oferta comercial sólida.",
  },
  {
    icon: Headphones,
    title: "Soporte comercial",
    description: "Acompañamiento para que el distribuidor tenga mejores herramientas de venta.",
  },
  {
    icon: RefreshCw,
    title: "Potencial de recompra",
    description: "Productos con buena rotación y posibilidad de compra recurrente por parte del cliente final.",
  },
];

const B2BWhyDistribute = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            ¿Por qué distribuir KOM?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            KOM no es solo ropa deportiva. Es una marca con identidad, diseño, funcionalidad y una propuesta clara para un consumidor que valora desempeño, estilo y diferenciación.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group p-8 rounded-2xl border border-border bg-background hover:border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <card.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2BWhyDistribute;
