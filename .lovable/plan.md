# Carrusel responsive de productos personalizados

## Objetivo
Hacer que el carrusel se sienta más moderno, claro y fácil de usar en celular, sin cambiar textos, imágenes ni información de producto.

## Cambios
- Reorganizar el bloque principal para que imagen, información y navegación mantengan una jerarquía compacta en pantallas pequeñas.
- Convertir las miniaturas móviles en una tira horizontal con desplazamiento suave, ajuste por tarjeta y una vista parcial del siguiente producto.
- Mostrar cada miniatura como una tarjeta visual más limpia, con nombre legible en una franja estable y un indicador naranja claro para el producto activo.
- Centrar automáticamente la miniatura activa cuando el carrusel avanza solo o mediante las flechas.
- Añadir gesto de deslizar sobre la imagen principal en celular para avanzar o retroceder.
- Mantener botones suficientemente grandes para tocar, estados de foco visibles y navegación por teclado.
- En escritorio, conservar la composición de imagen e información y refinar la cuadrícula de miniaturas para evitar textos apretados.

## Responsive
- **Celular:** una columna, controles sobre la imagen, miniaturas deslizable con `scroll-snap` y CTA a ancho completo.
- **Tablet:** imagen y contenido equilibrados, miniaturas en tira adaptable.
- **Escritorio:** dos columnas y miniaturas distribuidas uniformemente, sin recortes ni saltos de tamaño.

## Verificación
- Revisar en 393 × 837, tablet y escritorio.
- Confirmar desplazamiento táctil, centrado de miniatura activa, flechas, rotación automática y navegación por teclado.
- Comprobar que no haya desbordamientos, textos cortados ni cambios en el contenido existente.