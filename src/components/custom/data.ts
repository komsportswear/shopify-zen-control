import catRopaCiclismo from "@/assets/cat-ropa-ciclismo.jpg";
import catAccesoriosCiclismo from "@/assets/cat-accesorios-ciclismo.jpg";
import catRopaRunning from "@/assets/cat-ropa-running.jpg";
import catAccesoriosRunning from "@/assets/cat-accesorios-running.jpg";
import catMedias from "@/assets/cat-medias.jpg";
import catPersonalizados from "@/assets/cat-personalizados.jpg";
import catBibshorts from "@/assets/cat-bibshorts.jpg";
import catJacket from "@/assets/cat-jacket.jpg";

export const WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwZMgAB3SzuXuJF3bZEpsQoNTuaYWiyQndQslI03uKbmn8rsk6AmI0yVa92shNsihbyOw/exec";

export const WHATSAPP_URL =
  "https://wa.me/573057884628?text=Hola%2C%20quiero%20cotizar%20productos%20personalizados%20con%20KOM";

export const projectTypes = [
  {
    value: "equipo-club",
    title: "Equipos y clubes",
    description: "Uniformes para ciclismo, running y otras disciplinas.",
    cta: "Cotizar uniformes",
  },
  {
    value: "empresa",
    title: "Empresas",
    description: "Ropa deportiva, merchandising y kits para empleados, clientes o activaciones.",
    cta: "Crear proyecto corporativo",
  },
  {
    value: "evento",
    title: "Eventos",
    description: "Productos para participantes, staff, patrocinadores y experiencias deportivas.",
    cta: "Cotizar evento",
  },
  {
    value: "tienda-marca",
    title: "Tiendas y marcas",
    description: "Colecciones, cápsulas y productos con tu propia identidad.",
    cta: "Crear colección",
  },
];

export const products = [
  { name: "Jersey personalizado", min: "Desde 10 unidades", image: catRopaCiclismo },
  { name: "Bib shorts / pantalonetas", min: "Desde 10 unidades", image: catBibshorts },
  { name: "Camiseta de running", min: "Desde 10 unidades", image: catRopaRunning },
  { name: "Uniformes deportivos", min: "Desde 10 unidades", image: catPersonalizados },
  { name: "Chalecos y cortavientos", min: "Desde 10 unidades", image: catJacket },
  { name: "Medias personalizadas", min: "Cantidad mínima según producto", image: catMedias },
  { name: "Gorras y viseras", min: "Cantidad mínima según producto", image: catAccesoriosRunning },
  { name: "Kits corporativos", min: "Cantidad mínima según producto", image: catAccesoriosCiclismo },
];

/** Precios orientativos: editar estos valores cuando estén definidos. */
export const priceTiers = [
  { range: "10–24 unidades", price: "Desde $XXX por unidad" },
  { range: "25–49 unidades", price: "Desde $XXX por unidad" },
  { range: "50–99 unidades", price: "Desde $XXX por unidad" },
  { range: "100+ unidades", price: "Cotización especial" },
];

/** Casos reales: reemplazar por proyectos reales. */
export const cases = [
  {
    name: "CLUB [NOMBRE]",
    detail: "42 jerseys + 42 bibs",
    city: "Bogotá",
    type: "Equipo / club",
    image: catRopaCiclismo,
  },
  {
    name: "EMPRESA [NOMBRE]",
    detail: "180 kits corporativos · camiseta + medias + packaging",
    city: "Medellín",
    type: "Empresa",
    image: catPersonalizados,
  },
  {
    name: "EVENTO [NOMBRE]",
    detail: "600 camisetas personalizadas · diseño + producción",
    city: "Cali",
    type: "Evento",
    image: catRopaRunning,
  },
];

export const productOptions = [
  "Jersey",
  "Bib",
  "Camiseta",
  "Uniforme",
  "Medias",
  "Kit",
  "Otro",
];

export const quantityRanges = ["10–24", "25–49", "50–99", "100–249", "250–499", "500+"];

export const designOptions = [
  "Sí, ya está listo",
  "Tengo logo e idea",
  "Necesito ayuda con el diseño",
];
