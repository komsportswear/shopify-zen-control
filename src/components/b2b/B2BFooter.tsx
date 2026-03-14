import { Instagram, Mail, Phone, ExternalLink } from "lucide-react";
import komLogo from "@/assets/kom-logo.webp";

const B2BFooter = () => {
  return (
    <footer className="bg-foreground text-background border-t border-background/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo */}
          <div className="space-y-4">
            <img src={komLogo} alt="KOM Sportswear" className="h-12" />
            <p className="text-sm text-background/60 leading-relaxed">
              Marca premium de apparel deportivo para ciclismo y running. Diseñada en Colombia.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50">Navegación</h4>
            <div className="space-y-2">
              <a href="/" className="block text-sm text-background/70 hover:text-accent transition-colors">Tienda</a>
              <a href="/distribuidores" className="block text-sm text-background/70 hover:text-accent transition-colors">Distribuidores</a>
              <a href="#formulario" className="block text-sm text-background/70 hover:text-accent transition-colors">Aplicar</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50">Contacto comercial</h4>
            <div className="space-y-3">
              <a href="https://wa.me/[WHATSAPP_B2B]" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-background/70 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" /> [WhatsApp B2B]
              </a>
              <a href="mailto:[CORREO_B2B]" className="flex items-center gap-2 text-sm text-background/70 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" /> [Correo B2B]
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50">Síguenos</h4>
            <div className="flex gap-3">
              <a href="https://instagram.com/komsportswear" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://902135-9f.myshopify.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} KOM Sportswear. Todos los derechos reservados.
          </p>
          <p className="text-xs text-background/40">
            Política de privacidad · Términos y condiciones · Tratamiento de datos
          </p>
        </div>
      </div>
    </footer>
  );
};

export default B2BFooter;
