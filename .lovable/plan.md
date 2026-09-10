# Video de fondo para Personalizados

## Cambios
- Optimizar el video adjunto para web: retirar audio, reducir peso y conservar una resolución nítida para pantallas grandes.
- Publicar el video optimizado como recurso del sitio, sin guardar el archivo pesado dentro del proyecto.
- Sustituir la imagen del banner de `/personalizados` por un video automático, silencioso, repetido y sin controles.
- Mantener la cobertura completa del banner en desktop y mobile, con la misma capa oscura actual para asegurar la legibilidad.
- Conservar la imagen actual como portada y respaldo para conexiones lentas o dispositivos con reproducción reducida.

## Verificación
- Confirmar que la página carga sin errores.
- Revisar el encuadre y la legibilidad del banner en desktop y mobile.
- Verificar reproducción automática, repetición continua, ausencia de sonido y tamaño final del archivo.

## Detalles técnicos
- Salida MP4/H.264 compatible con navegadores, sin pista de audio, 24 fps y carga progresiva (`faststart`).
- Video con `autoplay`, `muted`, `loop`, `playsInline` y `object-cover`.
