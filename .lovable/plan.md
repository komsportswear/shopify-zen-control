# Rediseño de "PERSONALIZA MUCHO MÁS QUE UN JERSEY."

## El problema

Hoy hay 8 fotos del mismo tipo (cuatro modelos de cuerpo entero, mismo encuadre, mismo degradado oscuro) en una cuadrícula de 4x2. Todas compiten por atención al mismo tiempo, ninguna destaca y el ojo no distingue un producto de otro. Además la sección ocupa mucho alto de página.

## La propuesta

Un escenario tipo "vitrina": una sola foto grande protagonista a la izquierda y las demás miniaturas en una fila debajo. La foto grande va cambiando sola cada pocos segundos, y quien quiera puede tocar cualquier miniatura para verla en grande de inmediato.

Beneficios:
- Solo una imagen pide atención a la vez, así que se acaba la sensación de ruido.
- Cada producto tiene su momento; el nombre y la cantidad mínima se leen sobre fondo limpio, no encima de la foto.
- La sección pasa a ocupar cerca de la mitad del alto actual.
- No hace falta cambiar ni recortar ninguna foto: se usan las 8 actuales tal cual.

```text
+--------------------------------------------------+
|  PERSONALIZA MUCHO MÁS QUE UN JERSEY.            |
|                                                  |
|  +--------------------------+   Jersey            |
|  |                          |   personalizado     |
|  |      foto grande         |   Desde 10 unidades |
|  |      (va rotando)        |                     |
|  |                          |   [ Cotizar este ]  |
|  +--------------------------+   1 / 8             |
|                                                  |
|  [□][■][□][□][□][□][□][□]  <- miniaturas         |
+--------------------------------------------------+
```

## Detalles de comportamiento

- Cambio automático cada ~5 segundos, con transición suave (fundido + leve zoom).
- Se detiene al pasar el mouse por encima, al tocar una miniatura o cuando la sección no está visible en pantalla.
- Miniatura activa marcada con borde naranja; las demás en menor opacidad.
- Flechas de anterior/siguiente discretas sobre la foto grande.
- Móvil: la foto grande ocupa el ancho completo, el texto va debajo y las miniaturas quedan en una fila deslizable horizontal.
- Se mantiene el enlace "¿Buscas otro producto? Cuéntanos tu idea" y se añade un botón que lleva al cotizador con el producto visible ya seleccionado cuando aplica.
- Accesible con teclado (flechas y tabulación) y respeta la preferencia de "reducir movimiento" del sistema (en ese caso no rota sola).

## Alcance técnico

- Reescritura de `src/components/custom/CustomProducts.tsx` como carrusel con estado local (índice activo, temporizador, pausa por hover/visibilidad vía IntersectionObserver).
- Sin cambios en `data.ts` salvo, si hace falta, un campo opcional para mapear cada producto a la opción correspondiente del cotizador.
- Sin imágenes nuevas ni dependencias nuevas; solo Tailwind y tokens existentes (bordes rectos, naranja de acento).
- Verificación con Playwright en 1440px y 390px, más typecheck y build.
