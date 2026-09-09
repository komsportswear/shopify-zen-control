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

/** Beneficio por volumen. Reemplazar por porcentajes reales cuando estén definidos. */
export const priceTiers = [
  { range: "10–24 unidades", price: "Precio base del proyecto" },
  { range: "25–49 unidades", price: "Mejor precio por unidad" },
  { range: "50–99 unidades", price: "Descuento por volumen" },
  { range: "100+ unidades", price: "Cotización especial" },
];

/** Proyectos: solo imagen hasta tener casos reales autorizados. */
export const cases = [
  { type: "Equipos y clubes", image: catRopaCiclismo },
  { type: "Empresas", image: catPersonalizados },
  { type: "Eventos", image: catRopaRunning },
];

export const deliveryTimes = [
  { range: "10–24", time: "10 a 15 días hábiles" },
  { range: "25–99", time: "15 a 20 días hábiles" },
  { range: "100–499", time: "20 a 30 días hábiles" },
  { range: "500+", time: "Según cronograma acordado" },
];

export const serviceIncludes = [
  { title: "Diseño y adaptación técnica", text: "Trabajamos tu identidad sobre el patrón real de cada prenda." },
  { title: "Muestra digital para aprobación", text: "Nada entra a producción sin tu visto bueno." },
  { title: "Curva de tallas", text: "Te acompañamos a definir tallas con nuestra tabla y prendas de referencia." },
  { title: "Control de calidad y empaque", text: "Revisión prenda por prenda y empaque individual." },
];

export const faqs = [
  {
    q: "¿Cuál es la cantidad mínima?",
    a: "Desde 10 unidades en ropa deportiva (jerseys, camisetas y uniformes). En accesorios como medias o gorras el mínimo varía según el producto.",
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
