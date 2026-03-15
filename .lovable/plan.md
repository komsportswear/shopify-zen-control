

## Plan: 3 cambios

### 1. Fusionar "Perfil ideal" + "Por qué distribuir" en una sola sección

Crear un nuevo componente `B2BValueProposition.tsx` que combine lo mejor de ambas secciones, eliminando redundancia:

**Estructura de la sección unificada:**
- Encabezado: título "Una oportunidad real de negocio con una marca de alto valor percibido" + párrafo introductorio
- Grid de 4 highlights (producto técnico, marca fuerte, comunidad, recompra) -- se mantienen del `B2BWhyDistribute`
- Split layout: imagen con métricas (izquierda) + beneficios del distribuidor con checklist + perfiles ideales como lista compacta (derecha)
- Los 6 perfiles ideales de `B2BIdealProfile` se integran como una lista simple con iconos debajo de los beneficios, bajo un subtítulo "¿A quién buscamos?"
- CTA "Solicitar catálogo"
- Se elimina la imagen de tienda de `B2BIdealProfile` y el blockquote, ya que el mensaje queda cubierto por el texto introductorio

**Archivos:**
- Crear `src/components/b2b/B2BValueProposition.tsx`
- Eliminar imports de `B2BIdealProfile` y `B2BWhyDistribute` en `B2BPage.tsx`
- Reemplazar ambos por `<B2BValueProposition />`

### 2. Reordenar secciones en `B2BPage.tsx`

Nuevo orden:
1. Hero
2. **B2BValueProposition** (la sección fusionada)
3. **B2BProcess** (justo debajo)
4. B2BCategories
5. B2BSocialProof
6. B2BFAQ
7. B2BFinalCTA

### 3. Eliminar franja negra debajo de las tarjetas en `B2BCategories.tsx`

El padding inferior (`py-24 lg:py-32`) genera espacio negro vacío debajo del grid. Cambiar a `pt-24 lg:pt-32 pb-0` para que la sección termine justo donde terminan las tarjetas de imagen.

