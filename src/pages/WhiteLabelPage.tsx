import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Menu,
  MessageCircle,
  PackageCheck,
  PenTool,
  Shirt,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import komLogo from "@/assets/kom-logo.png";
import heroVideo from "@/assets/banner-personalizados.mp4";
import heroMobile from "@/assets/banner-personalizados-mobile.mp4";
import heroPoster from "@/assets/banner-personalizados-mobile-poster.jpg";
import printing from "@/assets/quality-printing.jpg";
import cutting from "@/assets/quality-cutting.jpg";
import stitching from "@/assets/quality-stitching.jpg";
import WhiteLabelQuoteForm from "@/components/white-label/WhiteLabelQuoteForm";
import {
  buyerTypes,
  LANGUAGE_STORAGE_KEY,
  type Language,
  products,
  WHITE_LABEL_STORAGE_KEY,
  WHITE_LABEL_WHATSAPP,
} from "@/components/white-label/data";
import { trackEvent } from "@/lib/analytics";

const content = {
  en: {
    metaTitle: "Private Label Sportswear Manufacturer in Colombia | KOM",
    metaDescription: "Develop and manufacture private-label cycling, running and team apparel in Colombia. Finished products under your brand, from 50 garments.",
    nav: [
      ["#capabilities", "Capabilities"],
      ["#products", "Products"],
      ["#quality", "Quality"],
      ["#process", "Process"],
      ["#faq", "FAQ"],
    ],
    start: "Start your project",
    eyebrow: "Private-label sportswear manufacturing in Colombia",
    heroTitle: "YOUR BRAND. OUR MANUFACTURING EXPERTISE.",
    heroText: "Finished cycling, running and team apparel for brands, retailers, distributors, events and organizations. Minimum order: 50 garments.",
    explore: "Explore our capabilities",
    micro: ["Product development", "Specialized production", "International coordination", "Dedicated guidance"],
    stats: [["+10", "Years manufacturing sportswear"], ["+100,000", "Garments manufactured"], ["+15", "Countries reached"], ["+200", "Teams and companies served"]],
    whyEyebrow: "Built in Colombia. Ready for your market.",
    whyTitle: "A MANUFACTURING PARTNER BEHIND YOUR BRAND.",
    whyIntro: "KOM brings product development, specialized production and commercial guidance together, helping you build a coherent line without coordinating multiple suppliers.",
    reasons: [
      ["Competitive economics", "Production structured around your volume and specifications, helping protect your commercial margin."],
      ["Technical quality", "Materials, artwork adaptation, cutting, sewing and finishing are reviewed as one production process."],
      ["Finished product", "We turn your identity and brief into sportswear prepared to enter your sales channel."],
      ["One accountable team", "A commercial and production team accompanies the project from definition through delivery coordination."],
    ],
    solutionsTitle: "WHO WE MANUFACTURE FOR.",
    solutionText: [
      "Build a distinctive collection under your own identity.",
      "Develop a private line designed for your customers and market.",
      "Create branded merchandise and participant apparel.",
      "Produce coordinated uniforms and repeatable team programs.",
    ],
    productsEyebrow: "Product capabilities",
    productsTitle: "A COMPLETE SPORTSWEAR LINE, UNDER YOUR NAME.",
    minimum: "Minimum order: 50 garments",
    productCta: "Request this product",
    productOther: "Looking for another product? Tell us what you have in mind",
    developmentEyebrow: "From files to finished product",
    developmentTitle: "START FROM WHERE YOUR BRAND IS TODAY.",
    developmentIntro: "We adapt the development process to the assets and direction you already have.",
    developmentCards: [
      ["Production-ready", "You provide approved files and specifications; we adapt them for production."],
      ["Brand-ready", "You have an identity and direction; we help translate them into a coherent collection."],
      ["Concept stage", "We help structure the product direction before technical development begins."],
    ],
    developmentCta: "Discuss your collection",
    qualityEyebrow: "Inside KOM production",
    qualityTitle: "CONTROL FROM ARTWORK TO FINISHING.",
    qualityText: "Every project is technically reviewed and requires client approval before production begins.",
    capabilities: ["Technical materials", "High-definition sublimation", "Garment-specific artwork", "Sportswear fits", "Specialized production", "Quality control"],
    processEyebrow: "A clear path to market",
    processTitle: "FROM BRIEF TO FINISHED ORDER.",
    processIntro: "Six stages, with your approval before manufacturing.",
    steps: [
      ["Commercial brief", "We define buyer profile, products, volume and destination."],
      ["Scope and proposal", "We align materials, product scope and pricing."],
      ["Technical development", "Your identity is adapted to the selected garments."],
      ["Your approval", "Nothing enters production without your confirmation."],
      ["Production and control", "We manufacture and review the finished order."],
      ["Delivery coordination", "We prepare delivery according to the agreed destination."],
    ],
    volumeTitle: "BUILT FOR B2B VOLUME.",
    volumeText: "Projects begin at 50 garments. Final pricing depends on product, materials, customization, volume and destination.",
    ranges: [["50–99", "Entry production run"], ["100–199", "Growing collection"], ["200–499", "Commercial volume"], ["500–999", "Scaled production"], ["1000–5000", "High-volume program"], ["+5000", "Custom production plan"]],
    faqTitle: "FREQUENTLY ASKED QUESTIONS.",
    faqs: [
      ["What is the minimum order?", "Private-label projects begin at 50 garments. The final structure depends on the selected products and project requirements."],
      ["Can you develop the collection from my brand identity?", "Yes. We can work from production-ready files, an existing brand identity or an early concept. Scope is defined before the proposal."],
      ["Can different products or designs be combined?", "This depends on the product mix and production requirements. Share your intended assortment so our team can review the most efficient structure."],
      ["Do you provide samples?", "Sampling needs are reviewed according to the product and development stage. Our team will include the applicable options in your proposal."],
      ["How long does production take?", "Timing varies by product, materials, volume and approval process. We confirm the applicable schedule after reviewing your project."],
      ["Do you coordinate international delivery?", "We coordinate delivery according to the destination and agreed project scope. The commercial proposal will clarify the applicable conditions."],
      ["Can I reorder the same products?", "Yes. Keeping approved artwork and specifications on file helps make future production runs more consistent."],
    ],
    finalTitle: "READY TO BUILD YOUR PRIVATE-LABEL LINE?",
    finalText: "Tell us what you want to launch. Our international team will review the opportunity and contact you.",
    whatsapp: "Talk on WhatsApp",
    footerText: "Private-label performance apparel, developed and manufactured in Colombia for international businesses.",
    navigation: "Navigation",
    contact: "International sales",
    rights: "All rights reserved.",
  },
  es: {
    metaTitle: "Fabricación de ropa deportiva de marca privada | KOM",
    metaDescription: "Desarrolla y fabrica ropa de ciclismo, running y uniformes bajo tu propia marca en Colombia. Producto terminado desde 50 prendas.",
    nav: [["#capabilities", "Capacidades"], ["#products", "Productos"], ["#quality", "Calidad"], ["#process", "Proceso"], ["#faq", "Preguntas"]],
    start: "Iniciar proyecto",
    eyebrow: "Fabricación de ropa deportiva de marca privada en Colombia",
    heroTitle: "TU MARCA. NUESTRA EXPERIENCIA EN MANUFACTURA.",
    heroText: "Ropa terminada para ciclismo, running y equipos, dirigida a marcas, tiendas, distribuidores, eventos y organizaciones. Pedido mínimo: 50 prendas.",
    explore: "Conocer capacidades",
    micro: ["Desarrollo de producto", "Producción especializada", "Coordinación internacional", "Acompañamiento dedicado"],
    stats: [["+10", "Años fabricando ropa deportiva"], ["+100.000", "Prendas fabricadas"], ["+15", "Países con presencia"], ["+200", "Equipos y empresas atendidos"]],
    whyEyebrow: "Fabricado en Colombia. Listo para tu mercado.",
    whyTitle: "UN SOCIO DE MANUFACTURA DETRÁS DE TU MARCA.",
    whyIntro: "KOM integra desarrollo de producto, producción especializada y acompañamiento comercial para que construyas una línea coherente sin coordinar múltiples proveedores.",
    reasons: [
      ["Economía competitiva", "Producción estructurada según tu volumen y especificaciones para ayudar a proteger tu margen comercial."],
      ["Calidad técnica", "Materiales, adaptación gráfica, corte, confección y acabados se revisan como un solo proceso."],
      ["Producto terminado", "Convertimos tu identidad y brief en ropa deportiva preparada para entrar a tu canal de venta."],
      ["Un equipo responsable", "Un equipo comercial y productivo acompaña el proyecto desde la definición hasta la coordinación de entrega."],
    ],
    solutionsTitle: "PARA QUIÉNES FABRICAMOS.",
    solutionText: ["Construye una colección diferenciada bajo tu propia identidad.", "Desarrolla una línea privada pensada para tus clientes y mercado.", "Crea mercancía de marca y prendas para participantes.", "Produce uniformes coordinados y programas repetibles para equipos."],
    productsEyebrow: "Capacidades de producto",
    productsTitle: "UNA LÍNEA DEPORTIVA COMPLETA, BAJO TU NOMBRE.",
    minimum: "Pedido mínimo: 50 prendas",
    productCta: "Solicitar este producto",
    productOther: "¿Buscas otro producto? Cuéntanos qué tienes en mente",
    developmentEyebrow: "De los archivos al producto terminado",
    developmentTitle: "EMPIEZA DESDE DONDE ESTÁ TU MARCA.",
    developmentIntro: "Adaptamos el desarrollo a los recursos y dirección que ya tienes.",
    developmentCards: [
      ["Listo para producción", "Entregas archivos y especificaciones aprobados; nosotros los adaptamos para producir."],
      ["Identidad definida", "Tienes marca y dirección; te ayudamos a convertirlas en una colección coherente."],
      ["Etapa de concepto", "Te ayudamos a estructurar la dirección antes de iniciar el desarrollo técnico."],
    ],
    developmentCta: "Hablar sobre tu colección",
    qualityEyebrow: "Dentro de la producción KOM",
    qualityTitle: "CONTROL DESDE EL ARTE HASTA LOS ACABADOS.",
    qualityText: "Cada proyecto se revisa técnicamente y requiere tu aprobación antes de entrar a producción.",
    capabilities: ["Materiales técnicos", "Sublimación de alta definición", "Arte adaptado a la prenda", "Fits deportivos", "Producción especializada", "Control de calidad"],
    processEyebrow: "Una ruta clara hacia el mercado",
    processTitle: "DEL BRIEF AL PEDIDO TERMINADO.",
    processIntro: "Seis etapas, con tu aprobación antes de fabricar.",
    steps: [
      ["Brief comercial", "Definimos comprador, productos, volumen y destino."],
      ["Alcance y propuesta", "Alineamos materiales, alcance de producto y precio."],
      ["Desarrollo técnico", "Adaptamos tu identidad a las prendas seleccionadas."],
      ["Tu aprobación", "Nada entra a producción sin tu confirmación."],
      ["Producción y control", "Fabricamos y revisamos el pedido terminado."],
      ["Coordinación de entrega", "Preparamos la entrega según el destino acordado."],
    ],
    volumeTitle: "PENSADO PARA VOLUMEN B2B.",
    volumeText: "Los proyectos comienzan en 50 prendas. El precio final depende del producto, materiales, personalización, volumen y destino.",
    ranges: [["50–99", "Producción inicial"], ["100–199", "Colección en crecimiento"], ["200–499", "Volumen comercial"], ["500–999", "Producción escalada"], ["1000–5000", "Programa de alto volumen"], ["+5000", "Plan de producción a medida"]],
    faqTitle: "PREGUNTAS FRECUENTES.",
    faqs: [
      ["¿Cuál es el pedido mínimo?", "Los proyectos de marca privada comienzan en 50 prendas. La estructura final depende de los productos elegidos y los requerimientos."],
      ["¿Pueden desarrollar la colección desde mi identidad de marca?", "Sí. Podemos trabajar desde archivos listos, una identidad existente o un concepto inicial. El alcance se define antes de la propuesta."],
      ["¿Puedo combinar diferentes productos o diseños?", "Depende de la mezcla de productos y los requerimientos de producción. Comparte el surtido que planeas para que revisemos la estructura más eficiente."],
      ["¿Ofrecen muestras?", "Las necesidades de muestras se revisan según el producto y la etapa de desarrollo. Nuestro equipo incluirá las opciones aplicables en tu propuesta."],
      ["¿Cuánto tarda la producción?", "El tiempo varía según producto, materiales, volumen y proceso de aprobación. Confirmamos el cronograma después de revisar tu proyecto."],
      ["¿Coordinan entregas internacionales?", "Coordinamos la entrega según el destino y el alcance acordado. La propuesta comercial aclarará las condiciones aplicables."],
      ["¿Puedo repetir los mismos productos?", "Sí. Conservar artes y especificaciones aprobados ayuda a que las siguientes producciones sean más consistentes."],
    ],
    finalTitle: "¿LISTO PARA CONSTRUIR TU LÍNEA DE MARCA PRIVADA?",
    finalText: "Cuéntanos qué quieres lanzar. Nuestro equipo internacional revisará la oportunidad y se pondrá en contacto.",
    whatsapp: "Hablar por WhatsApp",
    footerText: "Ropa deportiva de alto rendimiento desarrollada y fabricada en Colombia para empresas internacionales.",
    navigation: "Navegación",
    contact: "Ventas internacionales",
    rights: "Todos los derechos reservados.",
  },
};

const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const WhiteLabelPage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved === "en" || saved === "es") return saved;
    return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [buyerType, setBuyerType] = useState("");
  const [requestedProduct, setRequestedProduct] = useState("");
  const [activeProduct, setActiveProduct] = useState(0);
  const [showBar, setShowBar] = useState(false);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const thumbRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const t = content[language];

  const changeLanguage = (next: Language) => {
    setLanguage(next);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, next);
    trackEvent("white_label_language_change", { language: next });
  };

  const goToQuote = useCallback((source: string) => {
    trackEvent("white_label_cta", { source, language });
    scrollTo("quote");
  }, [language]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = t.metaTitle;
    const setMeta = (selector: string, attribute: string, value: string) => {
      const element = document.querySelector(selector);
      if (element) element.setAttribute(attribute, value);
    };
    setMeta('meta[name="description"]', "content", t.metaDescription);
    setMeta('meta[property="og:title"]', "content", t.metaTitle);
    setMeta('meta[property="og:description"]', "content", t.metaDescription);
    setMeta('meta[name="twitter:title"]', "content", t.metaTitle);
    setMeta('meta[name="twitter:description"]', "content", t.metaDescription);
  }, [language, t]);

  useEffect(() => {
    const cta = document.getElementById("white-label-hero-cta");
    if (!cta) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const bottom = cta.getBoundingClientRect().bottom;
      setShowBar((current) => bottom <= 0 ? true : bottom > 24 ? false : current);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const strip = stripRef.current;
    const thumb = thumbRefs.current[activeProduct];
    if (!strip || !thumb) return;
    const max = strip.scrollWidth - strip.clientWidth;
    if (max <= 0) return;
    const left = strip.scrollLeft + thumb.getBoundingClientRect().left - strip.getBoundingClientRect().left - (strip.clientWidth - thumb.clientWidth) / 2;
    strip.scrollTo({ left: Math.min(Math.max(left, 0), max), behavior: "smooth" });
  }, [activeProduct]);

  const currentProduct = products[activeProduct];
  const chooseProduct = (value: string) => {
    setRequestedProduct(value);
    trackEvent("white_label_product_select", { product: value, language, source: "carousel" });
    scrollTo("quote");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-background/10 bg-foreground/95 backdrop-blur-md">
        <div className="container relative mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild className="md:hidden"><Button variant="ghost" size="icon" aria-label={language === "en" ? "Open menu" : "Abrir menú"} className="-ml-2 rounded-none text-background hover:bg-background/10 hover:text-accent"><Menu className="h-6 w-6" /></Button></SheetTrigger>
            <SheetContent side="left" className="w-72 border-background/10 bg-foreground p-0 text-background">
              <div className="border-b border-background/10 p-6"><img src={komLogo} alt="KOM Sportswear" className="h-14" /></div>
              <nav className="flex flex-col p-6">{t.nav.map(([href, label]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="flex min-h-12 items-center border-b border-background/10 text-sm font-medium text-background/75 hover:text-accent">{label}</a>)}</nav>
            </SheetContent>
          </Sheet>
          <nav className="hidden items-center gap-6 md:flex">{t.nav.map(([href, label]) => <a key={href} href={href} className="text-sm text-background/75 transition-colors hover:text-accent">{label}</a>)}</nav>
          <a href="/" className="absolute left-1/2 -translate-x-1/2" aria-label="KOM Sportswear"><img src={komLogo} alt="KOM Sportswear" className="h-12 md:h-14" /></a>
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex border border-background/25" aria-label="Language selector">
              {(["en", "es"] as Language[]).map((item) => <Button key={item} type="button" variant="ghost" onClick={() => changeLanguage(item)} aria-pressed={language === item} className={`h-8 rounded-none px-2 text-xs uppercase ${language === item ? "bg-background text-foreground hover:bg-background" : "text-background/60 hover:bg-background/10 hover:text-background"}`}>{item}</Button>)}
            </div>
            <Button variant="kom" size="sm" className="hidden rounded-none lg:inline-flex" onClick={() => goToQuote("header")}>{t.start}<ArrowRight className="h-4 w-4" /></Button>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-foreground pt-20 md:flex md:min-h-[760px] md:items-center">
          <div className="relative aspect-[3/2] w-full md:absolute md:inset-0 md:aspect-auto">
            <video className="h-full w-full object-cover md:hidden" autoPlay muted loop playsInline preload="auto" poster={heroPoster} aria-hidden="true"><source src={heroMobile} type="video/mp4" /></video>
            <video className="hidden h-full w-full object-cover md:block" autoPlay muted loop playsInline preload="metadata" poster={printing} aria-hidden="true"><source src={heroVideo} type="video/mp4" /></video>
            <div className="absolute inset-0 bg-gradient-to-b from-foreground/10 via-transparent to-foreground md:bg-gradient-to-r md:from-foreground md:via-foreground/80 md:to-foreground/25" />
          </div>
          <div className="container relative z-10 mx-auto -mt-px px-6 pb-10 pt-8 md:py-24">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent sm:text-sm">{t.eyebrow}</p>
              <h1 className="mt-5 text-[2.25rem] font-bold leading-[0.98] tracking-tighter text-background sm:text-5xl lg:text-7xl">{t.heroTitle}</h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-background/75 sm:text-lg lg:text-xl">{t.heroText}</p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button id="white-label-hero-cta" variant="kom" size="lg" className="h-14 rounded-none px-8" onClick={() => goToQuote("hero")}>{t.start}<ArrowRight className="h-5 w-5" /></Button>
                <Button variant="kom-white" size="lg" className="h-14 rounded-none px-8" onClick={() => scrollTo("capabilities")}>{t.explore}</Button>
              </div>
              <div className="mt-9 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-background/15 pt-6 lg:grid-cols-4">
                {t.micro.map((label, index) => { const Icon = [PenTool, Shirt, Globe2, PackageCheck][index]; return <div key={label} className="flex items-start gap-2"><Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span className="text-xs leading-snug text-background/70 sm:text-sm">{label}</span></div>; })}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-background/10 bg-foreground py-9 text-background">
          <div className="container mx-auto grid grid-cols-2 px-6 md:grid-cols-4">{t.stats.map(([value, label], index) => <div key={label} className={`px-4 py-5 ${index % 2 ? "border-l border-background/15" : ""} ${index < 2 ? "border-b border-background/15 md:border-b-0" : ""} md:border-l md:first:border-l-0`}><p className="text-3xl font-bold leading-none text-accent lg:text-5xl">{value}</p><p className="mt-2 text-[0.7rem] uppercase leading-snug tracking-[0.1em] text-background/65">{label}</p></div>)}</div>
        </section>

        <section id="capabilities" className="scroll-mt-24 bg-background py-20 lg:py-28">
          <div className="container mx-auto px-6">
            <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
              <div className="relative">
                <img src={stitching} alt="KOM private-label manufacturing" className="h-[22rem] w-full object-cover lg:h-[34rem]" />
                <span className="absolute bottom-0 left-0 bg-accent px-5 py-3 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-foreground sm:text-xs">
                  {language === "en" ? "Full-package manufacturing · Colombia" : "Manufactura full-package · Colombia"}
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.whyEyebrow}</p>
                <h2 className="mt-4 text-3xl font-bold tracking-tighter md:text-5xl">{t.whyTitle}</h2>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">{t.whyIntro}</p>
                <div className="mt-10 divide-y divide-border border-t border-border">
                  {t.reasons.map(([title, text], index) => (
                    <article key={title} className="flex gap-5 py-6">
                      <span className="pt-1 text-xs font-bold text-accent">0{index + 1}</span>
                      <div>
                        <h3 className="text-lg font-bold">{title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-kom-surface py-20 lg:py-28">
          <div className="container mx-auto px-6"><h2 className="mb-12 max-w-2xl text-3xl font-bold tracking-tighter md:text-5xl">{t.solutionsTitle}</h2><div className="grid border-l border-t border-border md:grid-cols-2">{buyerTypes.map((item, index) => <Button key={item.value} variant="ghost" onClick={() => { setBuyerType(item.value); trackEvent("white_label_buyer_select", { buyer_type: item.value, language, source: "solution" }); scrollTo("quote"); }} className="group h-auto min-h-52 items-start justify-between whitespace-normal rounded-none border-b border-r border-border bg-background p-7 text-left hover:bg-foreground hover:text-background lg:p-10"><div><span className="text-xs font-bold text-accent">0{index + 1}</span><h3 className="mt-6 text-2xl font-bold uppercase">{item[language]}</h3><p className="mt-3 max-w-md font-normal leading-relaxed text-muted-foreground group-hover:text-background/65">{t.solutionText[index]}</p></div><ArrowRight className="mt-1 h-5 w-5 shrink-0 text-accent" /></Button>)}</div></div>
        </section>

        <section id="products" className="scroll-mt-24 bg-background py-20 lg:py-28">
          <div className="container mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.productsEyebrow}</p><h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tighter md:text-5xl">{t.productsTitle}</h2>
            <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-[500px] overflow-hidden bg-muted">{products.map((product, index) => <img key={product.value} src={product.image} alt={product.name[language]} aria-hidden={index !== activeProduct} className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${index === activeProduct ? "scale-100 opacity-100" : "scale-105 opacity-0"}`} />)}<Button variant="ghost" size="icon" aria-label={language === "en" ? "Previous product" : "Producto anterior"} onClick={() => setActiveProduct((activeProduct - 1 + products.length) % products.length)} className="absolute left-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-none bg-background/90 hover:bg-accent"><ChevronLeft /></Button><Button variant="ghost" size="icon" aria-label={language === "en" ? "Next product" : "Producto siguiente"} onClick={() => setActiveProduct((activeProduct + 1) % products.length)} className="absolute right-3 top-1/2 h-11 w-11 -translate-y-1/2 rounded-none bg-background/90 hover:bg-accent"><ChevronRight /></Button></div>
              <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{String(activeProduct + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}</p><h3 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{currentProduct.name[language]}</h3><p className="mt-3 text-xs font-semibold uppercase tracking-[0.15em] text-accent">{t.minimum}</p><p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">{currentProduct.description[language]}</p><Button variant="kom" size="lg" className="mt-7 h-12 rounded-none" onClick={() => chooseProduct(currentProduct.value)}>{t.productCta}<ArrowRight /></Button></div>
            </div>
            <div ref={stripRef} className="-mx-6 mt-8 flex snap-x gap-3 overflow-x-auto px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:mx-0 xl:grid xl:grid-cols-8 xl:px-0">{products.map((product, index) => <Button key={product.value} ref={(node) => { thumbRefs.current[index] = node; }} variant="ghost" onClick={() => setActiveProduct(index)} aria-current={index === activeProduct} className={`relative aspect-[4/5] h-auto w-28 shrink-0 snap-center overflow-hidden rounded-none border p-0 xl:w-auto ${index === activeProduct ? "border-accent opacity-100" : "border-border opacity-60 hover:opacity-100"}`}><img src={product.image} alt="" className="h-full w-full object-cover" /><span className="absolute inset-x-0 bottom-0 bg-foreground/90 px-2 py-2 text-[10px] font-bold uppercase text-background">{product.short[language]}</span></Button>)}</div>
            <Button variant="link" className="mt-7 h-auto whitespace-normal rounded-none p-0 text-left text-base font-semibold hover:text-accent" onClick={() => goToQuote("other-product")}>{t.productOther}<ArrowRight /></Button>
          </div>
        </section>

        <section className="bg-foreground py-20 text-background lg:py-28">
          <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.developmentEyebrow}</p><h2 className="mt-4 text-3xl font-bold tracking-tighter md:text-5xl">{t.developmentTitle}</h2><p className="mt-5 text-lg text-background/65">{t.developmentIntro}</p><Button variant="kom" size="lg" className="mt-8 rounded-none" onClick={() => goToQuote("development")}>{t.developmentCta}<ArrowRight /></Button></div>
            <div className="grid gap-8 sm:grid-cols-3">{t.developmentCards.map(([title, text], index) => <div key={title} className="border-t-2 border-accent pt-5"><span className="text-xs font-bold uppercase tracking-[0.15em] text-accent">0{index + 1}</span><h3 className="mt-4 text-lg font-bold leading-tight">{title}</h3><p className="mt-3 text-sm leading-relaxed text-background/60">{text}</p></div>)}</div>
          </div>
        </section>

        <section id="quality" className="scroll-mt-24 bg-kom-surface py-20 lg:py-28">
          <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 lg:gap-20"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.qualityEyebrow}</p><h2 className="mt-4 text-3xl font-bold tracking-tighter md:text-5xl">{t.qualityTitle}</h2><ul className="mt-8 grid gap-x-8 sm:grid-cols-2">{t.capabilities.map((item) => <li key={item} className="flex items-center gap-3 border-b border-border py-3 text-sm font-medium"><Check className="h-4 w-4 text-accent" />{item}</li>)}</ul><p className="mt-8 max-w-md text-muted-foreground">{t.qualityText}</p></div><div className="grid grid-cols-2 gap-2"><img src={printing} alt="KOM sportswear printing facility" className="col-span-2 h-56 w-full object-cover lg:h-72" /><img src={cutting} alt="Technical fabric cutting at KOM" className="h-44 w-full object-cover object-[50%_70%] lg:h-56" /><img src={stitching} alt="Industrial sportswear sewing at KOM" className="h-44 w-full object-cover lg:h-56" /></div></div>
        </section>

        <section id="process" className="scroll-mt-24 bg-background py-20 lg:py-28">
          <div className="container mx-auto px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{t.processEyebrow}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter md:text-5xl">{t.processTitle}</h2>
            <p className="mt-4 text-muted-foreground">{t.processIntro}</p>
            <div className="relative mt-14 hidden md:block">
              <div className="absolute left-0 right-0 top-6 h-px bg-border" />
              <div className="relative grid grid-cols-3 gap-x-8 gap-y-12 lg:grid-cols-6">
                {t.steps.map(([title, text], index) => (
                  <div key={title} className="group">
                    <div className="flex h-12 w-12 items-center justify-center bg-accent text-base font-bold text-accent-foreground transition-transform group-hover:-translate-y-1">0{index + 1}</div>
                    <h3 className="mt-6 text-base font-bold leading-tight">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <ol className="relative mt-10 space-y-8 border-l border-border pl-8 md:hidden">
              {t.steps.map(([title, text], index) => (
                <li key={title} className="relative">
                  <span className="absolute -left-[3.05rem] flex h-10 w-10 items-center justify-center bg-accent text-sm font-bold text-accent-foreground">0{index + 1}</span>
                  <h3 className="font-bold leading-tight">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{text}</p>
                </li>
              ))}
            </ol>
          </div>

        </section>

        <section className="bg-foreground py-16 text-background lg:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">{t.volumeTitle}</h2>
              <p className="mt-5 text-background/65">{t.volumeText}</p>
            </div>
            <div className="mt-12 flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-6 lg:overflow-visible">
              {t.ranges.map(([range, label], index) => (
                <div key={range} className="min-w-[10rem] flex-1 shrink-0">
                  <div className="h-1 bg-accent" style={{ opacity: 0.35 + index * 0.13 }} />
                  <p className="mt-4 text-xl font-bold leading-none lg:text-2xl">{range}</p>
                  <p className="mt-2 text-sm leading-snug text-background/60">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>


        <WhiteLabelQuoteForm language={language} buyerType={buyerType} setBuyerType={setBuyerType} requestedProduct={requestedProduct} />

        <section id="faq" className="scroll-mt-24 bg-kom-surface py-20 lg:py-28"><div className="container mx-auto grid gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"><h2 className="text-3xl font-bold tracking-tighter md:text-5xl">{t.faqTitle}</h2><Accordion type="single" collapsible>{t.faqs.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`}><AccordionTrigger className="text-left text-base font-semibold hover:no-underline">{question}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

        <section className="bg-foreground py-20 text-center text-background lg:py-28"><div className="container mx-auto px-6"><h2 className="mx-auto max-w-4xl text-3xl font-bold tracking-tighter md:text-5xl">{t.finalTitle}</h2><p className="mx-auto mt-5 max-w-2xl text-background/65">{t.finalText}</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Button variant="kom" size="lg" className="h-14 rounded-none" onClick={() => goToQuote("final")}>{t.start}<ArrowRight /></Button><Button variant="kom-white" size="lg" className="h-14 rounded-none" onClick={() => { trackEvent("click_whatsapp"); window.open(WHITE_LABEL_WHATSAPP, "_blank"); }}><MessageCircle />{t.whatsapp}</Button></div></div></section>
      </main>

      <footer className="border-t border-background/10 bg-foreground text-background"><div className="container mx-auto grid gap-10 px-6 py-14 md:grid-cols-3"><div><img src={komLogo} alt="KOM Sportswear" className="h-20" /><p className="mt-4 max-w-sm text-sm leading-relaxed text-background/60">{t.footerText}</p></div><div><h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-background/40">{t.navigation}</h3><div className="mt-4 space-y-2">{t.nav.slice(0, 4).map(([href, label]) => <a key={href} href={href} className="block text-sm text-background/70 hover:text-accent">{label}</a>)}</div></div><div><h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-background/40">{t.contact}</h3><div className="mt-4 space-y-3"><a href="https://wa.me/573107269301" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-background/70 hover:text-accent"><MessageCircle className="h-4 w-4" />Camila Andrade</a><a href="mailto:ventas@komsportswear.com" className="block text-sm text-background/70 hover:text-accent">ventas@komsportswear.com</a></div></div></div><div className="container mx-auto border-t border-background/10 px-6 py-7 text-xs text-background/40">© {new Date().getFullYear()} KOM Sportswear. {t.rights}</div></footer>

      <div aria-hidden={!showBar} className={`fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-background p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 motion-reduce:transition-none md:hidden ${showBar ? "translate-y-0" : "pointer-events-none translate-y-full"}`}><Button variant="kom" className="h-12 flex-1 rounded-none font-bold" onClick={() => goToQuote("mobile-sticky")}>{localStorage.getItem(WHITE_LABEL_STORAGE_KEY) ? (language === "en" ? "CONTINUE PROJECT" : "CONTINUAR PROYECTO") : t.start}</Button><Button variant="outline" size="icon" aria-label={t.whatsapp} className="h-12 w-12 rounded-none" onClick={() => window.open(WHITE_LABEL_WHATSAPP, "_blank")}><MessageCircle /></Button></div>
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default WhiteLabelPage;