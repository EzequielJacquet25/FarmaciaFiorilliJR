# Optimización de recursos

Antes de cada publicación, revisá imágenes y videos para preservar una carga ágil sin alterar la calidad visual.

## Imágenes

1. Conservá el original fuera del repositorio.
2. Redimensioná cada imagen al tamaño máximo real de uso.
3. Convertí las fotografías a WebP y verificá visualmente el resultado.
4. Usá JPEG o PNG sólo cuando la compatibilidad o la transparencia lo requieran.

Ejemplo con WebP:

    cwebp -q 82 origen.jpg -o destino.webp

## Videos

1. Mantené el original de alta calidad fuera de public/videos.
2. Publicá una versión MP4 H.264 con audio eliminado si el video se reproduce silenciado.
3. Apuntá a 720p salvo que una visualización mayor lo justifique.
4. Revisá reproducción en Android, iPhone y conexión móvil antes de publicar.

Ejemplo con FFmpeg:

    ffmpeg -i origen.mp4 -an -c:v libx264 -crf 23 -preset slow -movflags +faststart destino.mp4

## Control previo a publicar

- Ejecutar npm run lint.
- Ejecutar npm run build.
- Verificar que no haya imágenes o videos rotos.
- Confirmar que los videos continúen con reproducción automática, silenciada y en línea.
- Registrar el tamaño de los archivos nuevos; evitar recursos grandes sin una justificación visual.

