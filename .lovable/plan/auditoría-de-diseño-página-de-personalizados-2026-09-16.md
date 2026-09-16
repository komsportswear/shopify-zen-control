# Auditoría de diseño — Página de Personalizados

Revisé la página en escritorio (1440px) y en móvil (390px) sección por sección. Las fotos y el video conservan sus proporciones y tamaños actuales: todos los ajustes son de composición, tipografía, espaciado y jerarquía alrededor de ellos.

## Lo que está funcionando

- Identidad fuerte: negro/blanco + naranja, tipografía condensada en mayúsculas, bordes rectos.
- El cotizador por pasos es el corazón de la página y está bien resuelto.
- Estructura de contenido completa y ordenada.

## Problemas detectados

**1. Encabezado superior (móvil y escritorio)**
El logo está centrado en posición absoluta y en móvil queda casi pegado al botón "COTIZAR" y al ícono de menú; en pantallas estrechas se siente apretado y el logo se ve desproporcionado frente a la altura de la barra.

**2. Banner principal**
- En escritorio el texto vive solo en la franja inferior izquierda y queda un enorme vacío arriba: la sección mide 88% de la pantalla y el contenido ocupa la mitad.
- En móvil el titular parte en cinco líneas y los cuatro beneficios (Diseño profesional, Producción, Envíos, Acompañamiento) quedan tapados por el botón fijo inferior.
- Los dos botones tienen el mismo peso visual; el secundario compite con el principal.

**3. Barra de cifras (+10, +100.000, +15, +200)**
En móvil se ven como cuatro bloques sueltos sin separadores; en escritorio quedan muy pegados al borde del banner. Falta un ritmo claro y líneas divisorias.

**4. Ritmo visual repetitivo**
Casi todas las secciones usan el mismo patrón: título grande a la izquierda + rejilla de tarjetas blancas con líneas. Al hacer scroll, "¿Qué quieres crear?", "Tiempos", "Calidad", "Proceso" y "Precios" se sienten iguales. Falta alternancia y variación de escala.

**5. Sección de productos**
- Los títulos sobre las fotos son pequeños frente al tamaño de la imagen y el degradado inferior es débil: en algunas fotos claras el texto pierde contraste.
- En móvil son dos columnas muy angostas; el nombre y el "desde X unidades" se aprietan.
- Hay nombres desactualizados en la lista (por ejemplo "Chalecos y cortavientos") que no coinciden con las fotos nuevas.

**6. Espaciado general**
Todas las secciones usan el mismo respiro vertical (80/112px) sin importar su peso. Las secciones ligeras (precios, cifras) se sienten infladas y las densas (formulario, tiempos) se sienten apretadas.

**7. Botones y CTA fijos en móvil**
El botón inferior fijo tapa el final de cada sección y el separador de 64px no siempre alcanza; además el botón flotante de WhatsApp solo existe en escritorio, cuando en móvil es donde más se usa.

**8. Detalles de accesibilidad y pulido**
Contraste bajo en varios textos grises sobre negro, títulos sin escala intermedia entre móvil y escritorio, y falta de estados de foco visibles para navegación con teclado.

## Propuesta de mejoras

**Encabezado**
- Altura de barra un poco mayor y logo a escala proporcional; en móvil, logo centrado con márgenes seguros y botón compacto ("Cotizar" sin flecha).
- Fondo que gana opacidad al hacer scroll, para que el banner respire al inicio.

**Banner principal**
- Reducir la altura en escritorio y centrar verticalmente el bloque de texto, con un ancho máximo menor para que el titular caiga en tres líneas limpias.
- En móvil: titular más compacto, beneficios en dos columnas con separación y espacio inferior suficiente para que el botón fijo no los tape.
- Jerarquía de botones: principal sólido naranja, secundario como enlace con subrayado y flecha.
- Mantener exactamente el video y su encuadre actual.

**Cifras**
Convertirlas en una franja con divisores verticales, números alineados y etiquetas más legibles; en móvil, dos columnas con línea separadora.

**Ritmo de la página**
Alternar fondos (blanco, gris claro, negro) de forma intencional y variar los formatos: "Proceso" como línea de tiempo horizontal numerada en escritorio y vertical en móvil, "Precios" como franja compacta, "Calidad" con lista en dos columnas. Nada de cambiar el tamaño de las fotos.

**Productos**
Título más grande sobre la foto, degradado inferior más profundo para garantizar contraste y etiqueta de mínimo en versalita. Actualizar los nombres desactualizados para que coincidan con las fotos. La relación de las fotos (3:4) se mantiene igual.

**Formulario de cotización**
Darle tratamiento de "pieza destacada": fondo diferenciado, borde marcado y más aire interno, para que se distinga del resto de bloques al hacer scroll.

**Móvil**
- Espacio inferior real bajo el botón fijo en toda la página.
- Botón de WhatsApp también en móvil, integrado junto al CTA fijo para no estorbar.
- Objetivos táctiles mínimos de 44px en menú y opciones del cotizador.

**Pulido**
Escala tipográfica con paso intermedio (tablet), contraste de grises subido al mínimo legible, y anillo de foco visible en enlaces y botones.

## Notas técnicas

- Cambios acotados a `src/pages/CustomPage.tsx` y a los componentes de `src/components/custom/` (Hero, Trust, ProjectTypes, Products, Pricing, Delivery, Quality, Process, Cases, FAQ, FinalForm), más ajustes de escala tipográfica en `src/index.css` / `tailwind.config.ts` si hacen falta tokens nuevos.
- Sin tocar dimensiones ni recortes de imágenes y video: el `<video>` del hero mantiene `object-cover` y su encuadre; las rejillas conservan sus proporciones (3:4 en productos, 4:5 en casos).
- Sin cambios de lógica del cotizador, del guardado local ni del envío de leads.
- Observación aparte: en la vista local las fotos de productos y el video no cargan (los punteros de assets solo resuelven en el sitio publicado). Se revisa durante la implementación para confirmar que no sea un problema real de rutas.
