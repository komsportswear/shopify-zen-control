import { Shirt, Wind, ArrowRight } from "lucide-react";

const categories = [
  { name: "Jerseys de ciclismo", description: "Corte técnico, diseño diferenciado y materiales de alto rendimiento." },
  { name: "Chaquetas para clima frío", description: "Protección térmica y contra viento, sin sacrificar movilidad." },
  { name: "Bib shorts y bottoms", description: "Comodidad en ruta con badanas premium y compresión inteligente." },
  { name: "Base layers", description: "Regulación térmica y manejo de humedad en capas interiores." },
  { name: "Medias deportivas", description: "Compresión, soporte y diseño para ciclismo y running." },
  { name: "Accesorios", description: "Complementos técnicos que completan la experiencia KOM." },
  { name: "Running apparel", description: "Prendas técnicas para corredores que buscan rendimiento y estilo." },
  { name: "Ediciones especiales", description: "Cápsulas de edición limitada con diseño exclusivo y coleccionable." },
];

const B2BCategories = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Categorías con potencial para tu tienda
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Una oferta pensada para conectar con deportistas que buscan funcionalidad, diseño y diferenciación.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.name}
              className="group relative overflow-hidden rounded-2xl bg-kom-surface p-6 hover:bg-foreground transition-colors duration-300 cursor-pointer"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center transition-colors">
                  {i % 2 === 0 ? (
                    <Shirt className="h-5 w-5 text-accent" />
                  ) : (
                    <Wind className="h-5 w-5 text-accent" />
                  )}
                </div>
                <h3 className="font-semibold text-lg group-hover:text-background transition-colors">
                  {cat.name}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-background/70 transition-colors leading-relaxed">
                  {cat.description}
                </p>
                <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2BCategories;
