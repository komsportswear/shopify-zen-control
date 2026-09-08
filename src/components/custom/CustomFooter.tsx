import { Instagram, Mail, Phone, ExternalLink } from "lucide-react";
import komLogo from "@/assets/kom-logo.png";

const CustomFooter = () => (
  <footer className="border-t border-background/10 bg-foreground text-background">
    <div className="container mx-auto grid gap-10 px-6 py-16 md:grid-cols-4">
      <div className="space-y-4">
        <img src={komLogo} alt="KOM Sportswear" className="h-24" />
        <p className="text-sm leading-relaxed text-background/60">
          Ropa deportiva personalizada para equipos, empresas, eventos y marcas. Diseñada en Colombia.
        </p>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50">Navegación</h4>
        <div className="space-y-2">
          <a href="#proyectos-tipo" className="block text-sm text-background/70 transition-colors hover:text-accent">Proyectos</a>
          <a href="#productos" className="block text-sm text-background/70 transition-colors hover:text-accent">Productos</a>
          <a href="#proceso" className="block text-sm text-background/70 transition-colors hover:text-accent">Proceso</a>
          <a href="#casos" className="block text-sm text-background/70 transition-colors hover:text-accent">Casos</a>
          <a href="#cotizar" className="block text-sm text-background/70 transition-colors hover:text-accent">Cotizar</a>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50">Contacto comercial</h4>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-background/40">Ventas Colombia</p>
          <a href="https://wa.me/573057884628" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-accent">
            <Phone className="h-4 w-4" /> Paola Álvarez
          </a>
          <a href="https://wa.me/573125808450" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-accent">
            <Phone className="h-4 w-4" /> Angie Andrade
          </a>
          <p className="pt-1 text-xs font-semibold uppercase tracking-wider text-background/40">Ventas internacionales</p>
          <a href="https://wa.me/573107269301" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-background/70 transition-colors hover:text-accent">
            <Phone className="h-4 w-4" /> Camila Andrade
          </a>
          <a href="mailto:ventas@komsportswear.com" className="flex items-center gap-2 pt-1 text-sm text-background/70 transition-colors hover:text-accent">
            <Mail className="h-4 w-4" /> ventas@komsportswear.com
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50">Síguenos</h4>
        <div className="flex gap-3">
          <a href="https://www.instagram.com/komsports.oficial" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 transition-colors hover:border-accent hover:text-accent">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://komsportswear.com/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 transition-colors hover:border-accent hover:text-accent">
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-6 pb-10">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 md:flex-row">
        <p className="text-xs text-background/40">© {new Date().getFullYear()} KOM Sportswear. Todos los derechos reservados.</p>
        <p className="text-xs text-background/40">Política de privacidad · Términos y condiciones · Tratamiento de datos</p>
      </div>
    </div>
  </footer>
);

export default CustomFooter;
