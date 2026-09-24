import jersey from "@/assets/prod-jersey.webp";
import bibshorts from "@/assets/prod-bibshorts.webp";
import running from "@/assets/prod-running.webp";
import uniforms from "@/assets/prod-uniformes.webp";
import skinsuits from "@/assets/prod-chalecos.webp";
import socks from "@/assets/prod-medias.webp";
import caps from "@/assets/prod-gorras.webp";
import kits from "@/assets/prod-corporativos.webp";

export type Language = "en" | "es";

export const WHITE_LABEL_STORAGE_KEY = "kom-white-labelling-quote";
export const LANGUAGE_STORAGE_KEY = "kom-white-labelling-language";
export const WHITE_LABEL_WHATSAPP =
  "https://wa.me/573107269301?text=Hello%2C%20I%20would%20like%20to%20discuss%20a%20private-label%20sportswear%20project%20with%20KOM";

export const buyerTypes = [
  { value: "sports-brand", en: "Sports brand", es: "Marca deportiva" },
  { value: "retailer-distributor", en: "Retailer or distributor", es: "Tienda o distribuidor" },
  { value: "event", en: "Event", es: "Evento" },
  { value: "club-organization", en: "Club or organization", es: "Club u organización" },
];

export const productOptions = [
  { value: "cycling-jerseys", en: "Cycling jerseys", es: "Jerseys de ciclismo" },
  { value: "bib-shorts", en: "Bib shorts", es: "Bib shorts / pantalonetas" },
  { value: "running-shirts", en: "Running shirts", es: "Camisetas de running" },
  { value: "team-uniforms", en: "Team uniforms", es: "Uniformes deportivos" },
  { value: "skinsuits", en: "Skinsuits", es: "Enterizos" },
  { value: "socks-accessories", en: "Socks and accessories", es: "Medias y accesorios" },
  { value: "other", en: "Other", es: "Otro" },
];

export const quantityRanges = ["50–99", "100–199", "200–499", "500–999", "1000–5000", "+5000"];

export const designOptions = [
  { value: "production-ready", en: "Production-ready files", es: "Archivos listos para producción" },
  { value: "brand-ready", en: "Brand identity, collection needed", es: "Identidad lista, necesito desarrollar la colección" },
  { value: "concept-stage", en: "Concept stage", es: "Estoy en etapa de concepto" },
];

export const products = [
  {
    value: "cycling-jerseys",
    image: jersey,
    short: { en: "Jerseys", es: "Jerseys" },
    name: { en: "Private-label cycling jerseys", es: "Jerseys de ciclismo de marca privada" },
    description: {
      en: "Technical cycling jerseys developed around your brand, visual system and target market.",
      es: "Jerseys técnicos desarrollados alrededor de tu marca, sistema visual y mercado objetivo.",
    },
  },
  {
    value: "bib-shorts",
    image: bibshorts,
    short: { en: "Bib shorts", es: "Bib shorts" },
    name: { en: "Bib shorts and cycling bottoms", es: "Bib shorts y pantalonetas" },
    description: {
      en: "Performance bottoms with branded panels and specifications defined for your collection.",
      es: "Prendas de rendimiento con paneles de marca y especificaciones definidas para tu colección.",
    },
  },
  {
    value: "running-shirts",
    image: running,
    short: { en: "Running", es: "Running" },
    name: { en: "Running apparel", es: "Ropa de running" },
    description: {
      en: "Lightweight apparel for training, racing, retail collections and branded events.",
      es: "Prendas ligeras para entrenamientos, competencias, colecciones y eventos de marca.",
    },
  },
  {
    value: "team-uniforms",
    image: uniforms,
    short: { en: "Uniforms", es: "Uniformes" },
    name: { en: "Team and club uniforms", es: "Uniformes para equipos y clubes" },
    description: {
      en: "Coordinated product systems that keep your identity consistent across garments.",
      es: "Sistemas coordinados que mantienen tu identidad consistente entre diferentes prendas.",
    },
  },
  {
    value: "skinsuits",
    image: skinsuits,
    short: { en: "Skinsuits", es: "Enterizos" },
    name: { en: "Skinsuits", es: "Skinsuits y enterizos" },
    description: {
      en: "One-piece competition garments with continuous artwork developed for your brand.",
      es: "Prendas de competencia de una pieza con gráfica continua desarrollada para tu marca.",
    },
  },
  {
    value: "socks-accessories",
    image: socks,
    short: { en: "Accessories", es: "Accesorios" },
    name: { en: "Socks and accessories", es: "Medias y accesorios" },
    description: {
      en: "Supporting pieces that help complete a cohesive private-label sportswear range.",
      es: "Piezas complementarias para construir una línea deportiva de marca privada coherente.",
    },
  },
  {
    value: "caps",
    image: caps,
    short: { en: "Headwear", es: "Gorras" },
    name: { en: "Caps and visors", es: "Gorras y viseras" },
    description: {
      en: "Branded headwear for retail, teams, activations and participant kits.",
      es: "Accesorios de marca para retail, equipos, activaciones y kits de participantes.",
    },
  },
  {
    value: "corporate-kits",
    image: kits,
    short: { en: "Kits", es: "Kits" },
    name: { en: "Branded product kits", es: "Kits de producto con marca" },
    description: {
      en: "Multi-product kits prepared around a campaign, event or commercial program.",
      es: "Kits multiproducto preparados alrededor de una campaña, evento o programa comercial.",
    },
  },
];