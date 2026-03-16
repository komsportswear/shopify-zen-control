import { Package, MapPin, Users, LayoutGrid } from "lucide-react";
import runningImg from "@/assets/b2b-running.jpg";

const proofPoints = [
  { icon: Package, value: "+[X]", label: "Referencias activas" },
  { icon: MapPin, value: "+[X]", label: "Puntos de presencia" },
  { icon: Users, value: "+[X]", label: "Clientes impactados" },
  { icon: LayoutGrid, value: "+[X]", label: "Categorías" },
];

const trustBlocks = [
  "Presencia en tiendas físicas y canal digital",
  "Marca enfocada en nichos deportivos especializados",
  "Diseño y producto con identidad fuerte",
  "Comunidad activa alrededor del deporte",
];

const B2BSocialProof = () => {
  return (
    <section id="testimonios" className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Una marca diseñada para conectar con deportistas exigentes
            </h2>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-6">
              {proofPoints.map((p) => (
                <div key={p.label} className="space-y-2">
                  <p.icon className="h-5 w-5 text-accent" />
                  <div className="text-3xl font-bold">{p.value}</div>
                  <div className="text-sm text-background/60">{p.label}</div>
                </div>
              ))}
            </div>

            {/* Trust blocks */}
            <div className="space-y-3 pt-4">
              {trustBlocks.map((block) => (
                <div key={block} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-background/80">{block}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={runningImg} alt="Runner con apparel KOM" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BSocialProof;
