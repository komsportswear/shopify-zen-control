import prodJersey from "@/assets/prod-jersey.webp";
import prodBibshorts from "@/assets/prod-bibshorts.webp";
import prodRunning from "@/assets/prod-running.webp";
import prodUniformes from "@/assets/prod-uniformes.webp";
import prodChalecos from "@/assets/prod-chalecos.webp";
import prodMedias from "@/assets/prod-medias.webp";
import prodGorras from "@/assets/prod-gorras.webp";
import prodCorporativos from "@/assets/prod-corporativos.webp";

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
  {
    name: "Jersey personalizado",
    short: "Jersey",
    min: "Desde 1 unidad",
    description: "Jersey de ciclismo con tu diseño de extremo a extremo: sublimación total, corte técnico y opciones de tela según el clima.",
    image: prodJersey,
  },
  {
    name: "Bib shorts / pantalonetas",
    short: "Bib shorts",
    min: "Desde 1 unidad",
    description: "Bib shorts y pantalonetas con badana, bandas de sujeción y personalización en piernas y tirantes.",
    image: prodBibshorts,
  },
  {
    name: "Camiseta de running",
    short: "Running",
    min: "Desde 1 unidad",
    description: "Camisetas ligeras y transpirables para entrenamiento, competencia o eventos, con tu identidad completa.",
    image: prodRunning,
  },
  {
    name: "Uniformes deportivos",
    short: "Uniformes",
    min: "Desde 1 unidad",
    description: "Sets completos para equipos y clubes, coherentes entre prendas y listos para repetir en futuras temporadas.",
    image: prodUniformes,
  },
  {
    name: "Skinsuits y enterizos",
    short: "Enterizos",
    min: "Desde 1 unidad",
    description: "Enterizos de una sola pieza para competencia, con ajuste ceñido y diseño continuo sin cortes visibles.",
    image: prodChalecos,
  },
  {
    name: "Medias personalizadas",
    short: "Medias",
    min: "Cantidad mínima según producto",
    description: "Medias con tu logo, colores y altura a elegir; el detalle que cierra el uniforme de todo el equipo.",
    image: prodMedias,
  },
  {
    name: "Gorras y viseras",
    short: "Gorras",
    min: "Cantidad mínima según producto",
    description: "Gorras y viseras livianas para entrenar o para entregar como recuerdo de marca en eventos.",
    image: prodGorras,
  },
  {
    name: "Kits corporativos",
    short: "Corporativos",
    min: "Cantidad mínima según producto",
    description: "Kits de ropa y accesorios deportivos para empresas: empleados, clientes, activaciones y patrocinios.",
    image: prodCorporativos,
  },
];


/** Beneficio por volumen. Reemplazar por porcentajes reales cuando estén definidos. */
export const priceTiers = [
  { range: "1–5 UNIDADES", price: "Cotización según producto" },
  { range: "6–49 UNIDADES", price: "Precio base del proyecto" },
  { range: "50–199 UNIDADES", price: "Mejor precio por unidad" },
  { range: "200–999 UNIDADES", price: "Descuento por volumen" },
  { range: "1000–5000 UNIDADES", price: "Cotización especial" },
  { range: "+5000 UNIDADES", price: "Cotización especial" },
];



export const faqs = [
  {
    q: "¿Cuál es la cantidad mínima?",
    a: "Desde 1 unidad en ropa deportiva (jerseys, camisetas y uniformes). En accesorios como medias o gorras el mínimo varía según el producto.",
  },
  {
    q: "¿Cómo definimos las tallas?",
    a: "Te enviamos nuestra tabla de tallas y, cuando es posible, prendas de referencia para que tu equipo mida antes de producir.",
  },
  {
    q: "¿Cómo son los pagos?",
    a: "El pedido se confirma con un anticipo y el saldo se paga antes del despacho. Los detalles quedan en tu propuesta.",
  },
  {
    q: "¿Puedo hacer cambios al diseño?",
    a: "Sí. Ajustamos la propuesta contigo hasta que la apruebes. Después de la aprobación no se realizan cambios porque entra a producción.",
  },
  {
    q: "¿Hacen envíos a todo el país?",
    a: "Sí, enviamos a toda Colombia y coordinamos envíos internacionales según el proyecto.",
  },
  {
    q: "¿Puedo repetir el pedido más adelante?",
    a: "Sí. Guardamos tus archivos de diseño y especificaciones para que la reposición sea más rápida.",
  },
];

export const productOptions = [
  "Medias",
  "Camiseta",
  "Jersey o enterizo",
  "Visera",
  "Botilito / Softflask",
  "Accesorios",
  "Otro",
];

export const quantityRanges = ["1–5", "6–49", "50–199", "200–999", "1000–5000", "+5000"];

export const designOptions = [
  "Sí, ya está listo",
  "Tengo logo e idea",
  "Necesito ayuda con el diseño",
];
