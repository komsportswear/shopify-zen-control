import { Store, Bike, Mountain, Rocket, MapPin, Megaphone } from "lucide-react";
import storeImg from "@/assets/b2b-store.jpg";

const profiles = [
  { icon: Store, label: "Tiendas deportivas especializadas" },
  { icon: Bike, label: "Tiendas de ciclismo" },
  { icon: Mountain, label: "Concept stores activas / outdoor" },
  { icon: Rocket, label: "Emprendedores con canal comercial validado" },
  { icon: MapPin, label: "Distribuidores regionales" },
  { icon: Megaphone, label: "Aliados con comunidad o influencia real en el ecosistema deportivo" },
];

const B2BIdealProfile = () => {
  return (
    <section className="py-24 lg:py-32 bg-kom-surface">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Buscamos aliados que compartan esta visión
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                KOM busca distribuidores que quieran construir una relación comercial seria, con foco en experiencia de marca, venta consultiva y crecimiento sostenido.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {profiles.map((p) => (
                <div key={p.label} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border">
                  <p.icon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{p.label}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl border-l-4 border-accent bg-background">
              <p className="text-muted-foreground italic">
                No buscamos volumen por volumen. Buscamos aliados correctos para expandir la marca de forma estratégica.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={storeImg} alt="Tienda deportiva premium" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BIdealProfile;
