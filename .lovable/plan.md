

## Análisis de la página de distribuidores

Tras revisar el código completo y el estado visual actual, identifiqué estas oportunidades de mejora organizadas por impacto en conversión y percepción de valor:

---

### 1. Header: menú hamburguesa en mobile
**Problema**: La navegación está oculta en mobile (`hidden md:flex`), dejando solo el botón "Aplicar". El usuario mobile no puede navegar por secciones.
**Mejora**: Agregar un menú hamburguesa con Sheet/Drawer que muestre los mismos enlaces de anclaje.

### 2. Hero: scroll indicator y micro-urgencia
**Problema**: El hero ocupa toda la pantalla y no hay indicación visual de que hay más contenido debajo. Tampoco hay elemento de urgencia o escasez.
**Mejora**: Agregar un indicador de scroll animado (chevron pulsante) en la parte inferior del hero. Añadir una línea sutil bajo el subtítulo tipo "Cupos limitados por ciudad" o "Selección activa" para generar urgencia sin ser agresivo.

### 3. Formulario: el submit no envía datos a ningún lado
**Problema**: El `handleSubmit` solo hace un `setTimeout` simulado. Los leads se pierden completamente.
**Mejora**: Conectar el formulario a un destino real. Opciones: webhook (Google Sheets, Make/Zapier), Supabase, o mailto como fallback. Esto es crítico para conversión.

### 4. CTA Final: WhatsApp apunta a URL placeholder
**Problema**: El botón "Hablar por WhatsApp" en B2BFinalCTA aún usa `https://wa.me/[WHATSAPP_B2B]` (placeholder). No funciona.
**Mejora**: Reemplazar con uno de los números reales del equipo comercial (ej. el de Paola o Camila), o abrir un selector con las opciones del footer.

### 5. FAQ: placeholder sin resolver
**Problema**: La pregunta "¿Cuánto tarda el proceso de evaluación?" contiene `[X] días hábiles` como placeholder.
**Mejora**: Reemplazar con un tiempo real o un texto genérico funcional como "pocos días hábiles".

### 6. Social Proof: agregar testimonios reales o logos
**Problema**: La sección se llama "Testimonios" en el menú pero no tiene ningún testimonio. Solo métricas y bullet points genéricos. Genera una expectativa que no cumple.
**Mejora**: Agregar al menos 2-3 testimonios cortos de distribuidores actuales (nombre, ciudad, quote), o logos de tiendas aliadas. Si no hay testimonios disponibles, renombrar la sección en el menú a "Respaldo" o "Trayectoria".

### 7. Transiciones entre secciones
**Problema**: La transición entre Social Proof (fondo oscuro) y CTA Final (también fondo oscuro) se siente como un solo bloque sin separación. Hay demasiado espacio vacío entre el CTA Final y el footer.
**Mejora**: Agregar una separación visual sutil entre Social Proof y CTA (un borde accent o un cambio de tono). Reducir el padding del CTA Final.

---

### Resumen de cambios propuestos

| Cambio | Archivo | Impacto |
|--------|---------|---------|
| Menú hamburguesa mobile | B2BPage.tsx | UX mobile |
| Scroll indicator + micro-urgencia | B2BHero.tsx | Conversión |
| Conectar formulario a webhook/Supabase | B2BHero.tsx | **Crítico** - sin esto no hay leads |
| Arreglar WhatsApp placeholder en CTA | B2BFinalCTA.tsx | Conversión |
| Arreglar placeholder "[X] días" en FAQ | B2BFAQ.tsx | Credibilidad |
| Testimonios o logos reales en Social Proof | B2BSocialProof.tsx | Confianza |
| Separación visual entre secciones oscuras | B2BSocialProof/B2BFinalCTA | Percepción |

Los cambios 3 y 4 son los más urgentes porque sin ellos la página no captura leads ni permite contacto real. Los demás mejoran percepción y experiencia.

