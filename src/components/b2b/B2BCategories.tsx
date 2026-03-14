import catJersey from "@/assets/cat-jersey.jpg";
import catJacket from "@/assets/cat-jacket.jpg";
import catBibshorts from "@/assets/cat-bibshorts.jpg";
import catBaselayer from "@/assets/cat-baselayer.jpg";
import catSocks from "@/assets/cat-socks.jpg";
import catRunning from "@/assets/cat-running.jpg";

const categories = [
  { name: "Ropa de ciclismo", description: "Corte técnico y materiales de alto rendimiento.", image: catJersey },
  { name: "Chaquetas clima frío", description: "Protección térmica sin sacrificar movilidad.", image: catJacket },
  { name: "Bib shorts", description: "Badanas premium y compresión inteligente.", image: catBibshorts },
  { name: "Base layers", description: "Regulación térmica y manejo de humedad.", image: catBaselayer },
  { name: "Medias técnicas", description: "Compresión y soporte para ciclismo y running.", image: catSocks },
  { name: "Running apparel", description: "Rendimiento y estilo para corredores exigentes.", image: catRunning },
];

const B2BCategories = () => {
  return (
    <section className="py-24 lg:py-32 bg-kom-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-accent font-semibold tracking-[0.15em] uppercase text-sm">Portafolio</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 mb-4">
              Categorías con potencial para tu tienda
            </h2>
            <p className="text-lg text-muted-foreground">
              Producto técnico con identidad comercial fuerte, diseñado para destacar.
            </p>
          </div>
        </div>

        {/* Scrollable product cards with 2:3 ratio */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-4">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-xs text-background/80">{cat.description}</p>
                </div>
              </div>
              <h3 className="font-semibold text-sm group-hover:text-accent transition-colors">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default B2BCategories;
