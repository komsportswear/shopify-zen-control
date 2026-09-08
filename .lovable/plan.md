# Propuesta de mejora: página de productos personalizados

El wizard "CUÉNTANOS QUÉ TIENES EN MENTE." se mantiene como el corazón de la página. La propuesta refuerza ese mecanismo de compromiso progresivo y ordena el resto del recorrido a su alrededor.

## 1. Potenciar el wizard (lo que ya funciona)

- Encabezado de progreso con texto: "Paso 2 de 5 · Falta menos de 1 minuto" sobre la barra actual.
- Resumen vivo: a medida que avanza, mostrar arriba las respuestas elegidas como etiquetas ("Equipos y clubes · Jersey, Medias · 25–49"), reforzando lo que ya invirtió.
- Paso 5 con refuerzo: "Ya tenemos el 80% de tu proyecto. Solo faltan tus datos para enviarte la propuesta."
- Avance automático al elegir opción de un solo valor (tipo de proyecto, cantidad, diseño), sin obligar a pulsar Continuar.
- Guardar el avance en el navegador para que no se pierda si recarga o vuelve después.
- Campo opcional para adjuntar logo o referencia en el paso de diseño.
- Confirmación mejorada: además del mensaje de éxito, botón de WhatsApp directo y expectativa de respuesta ("Te contactamos en menos de 24 horas hábiles").

## 2. Eliminar la competencia entre formularios

Hoy hay dos formularios (el wizard y el formulario final corto) pidiendo lo mismo. Propuesta: reemplazar el bloque final por un cierre de una sola acción — titular + botón que sube al wizard + WhatsApp — para que exista un único camino de conversión y no se diluya el esfuerzo ya invertido.

## 3. Información que hoy falta y frena la decisión

- **Tiempos de entrega** por rango de cantidad: es la primera pregunta real de un equipo o empresa con fecha de evento.
- **Mínimos claros** por producto en una sola tabla (hoy solo aparece sobre las fotos).
- **Preguntas frecuentes**: mínimos, tallas y curva de tallaje, anticipo y formas de pago, cambios de diseño, envíos, repeticiones de pedido.
- **Qué incluye el servicio**: diseño, muestras digitales, control de calidad, empaque.
- Reemplazar los precios "Desde $XXX" por valores reales o, mientras tanto, por rangos de descuento por volumen ("hasta X% menos a partir de 50 unidades"). Los placeholders actuales restan credibilidad.
- Reemplazar los casos "[NOMBRE]" por proyectos reales; si aún no hay, mostrar solo las fotos sin nombres inventados.

## 4. Diseño y ritmo visual

- Alternar fondos claro/oscuro entre secciones para romper la monotonía; hoy varias secciones seguidas son claras.
- Franja de credibilidad justo bajo el banner: años de experiencia, unidades producidas, países, equipos atendidos.
- Sección "NO NECESITAS SABER DISEÑAR" con la secuencia visual Idea → Diseño → Producto terminado en tres imágenes encadenadas.
- Fotografías de producto más grandes en escritorio y detalle de tela/costura en al menos un bloque, para sostener el posicionamiento técnico.
- Proceso de 5 pasos en bloque oscuro con línea de tiempo, no cinco tarjetas iguales.

## 5. UX y conversión

- Menú superior con enlace directo a "Cotizar" siempre visible y resaltado.
- Botón fijo en celular con texto dinámico: "Continuar mi cotización" si ya empezó el wizard.
- Validación por campo con mensajes junto al input (hoy solo aparece un aviso general).
- Validación de formato de WhatsApp y correo, con indicativo de país por defecto.
- WhatsApp flotante también en escritorio.
- Accesibilidad: foco visible, etiquetas reales en los campos y no solo texto de ayuda dentro del campo.

## 6. Datos y seguimiento

- Registrar el paso alcanzado en el wizard para medir dónde se abandona.
- Enviar el lead parcial cuando el usuario deja correo o WhatsApp aunque no termine.
- Mantener los eventos ya definidos y añadir `wizard_step_view` y `abandon_step`.

## Notas técnicas

Cambios acotados a `src/components/custom/*` y `src/pages/CustomPage.tsx`. Nuevos componentes: `CustomTrust`, `CustomFAQ`, `CustomDelivery`. `CustomFinalForm` pasa a bloque de cierre sin formulario. El estado del wizard se persiste en `localStorage`. `submitLead` gana un envío parcial. Sin cambios de backend: se mantiene el envío actual a la hoja de Google.

## Falta información tuya

- Precios o porcentajes de descuento reales por rango.
- Tiempos de producción reales por cantidad.
- Casos reales (cliente, ciudad, cantidad, foto).
