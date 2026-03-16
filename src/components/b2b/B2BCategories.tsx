import catRopaCiclismo from "@/assets/cat-ropa-ciclismo.jpg";
import catAccesoriosCiclismo from "@/assets/cat-accesorios-ciclismo.jpg";
import catRopaRunning from "@/assets/cat-ropa-running.jpg";
import catAccesoriosRunning from "@/assets/cat-accesorios-running.jpg";
import catMedias from "@/assets/cat-medias.jpg";
import catPersonalizados from "@/assets/cat-personalizados.jpg";

const categories = [
{ name: "Ropa de ciclismo", description: "Corte técnico y materiales de alto rendimiento.", image: catRopaCiclismo },
{ name: "Accesorios de ciclismo", description: "Protección térmica sin sacrificar movilidad.", image: catAccesoriosCiclismo },
{ name: "Ropa de Running", description: "Badanas premium y compresión inteligente.", image: catRopaRunning },
{ name: "Accesorios de Running", description: "Regulación térmica y manejo de humedad.", image: catAccesoriosRunning },
{ name: "Medias", description: "Compresión y soporte para ciclismo y running.", image: catMedias },
{ name: "Productos Personalizados", description: "Rendimiento y estilo para corredores exigentes.", image: catPersonalizados }];


const B2BCategories = () => {
  return (
    <section id="categorias" className="pt-24 lg:pt-32 bg-foreground overflow-hidden">
      <div className="mb-16 px-6">
        <div className="max-w-2xl">
          <span className="text-accent font-semibold tracking-[0.15em] uppercase text-sm">Portafolio</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-4 mb-4 text-background">Categorías con potencial</h2>
          <p className="text-lg text-background/60">
            Tenemos un portafolio diversificado que se adapta a tu público y necesidades.
          </p>
        </div>
      </div>

      {/* Full-width grid, no gaps, no rounded corners */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((cat) =>
        <div key={cat.name} className="group cursor-pointer relative aspect-[2/3] overflow-hidden">
            <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
              <h3 className="font-bold text-base md:text-xl text-background mb-2">{cat.name}</h3>
              <p className="text-sm text-background/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {cat.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>);

};

export default B2BCategories;