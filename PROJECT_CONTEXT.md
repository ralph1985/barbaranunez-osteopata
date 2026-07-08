# Contexto Del Proyecto

Este proyecto es la nueva web profesional de Bárbara Núñez, osteópata, técnico masajista deportivo y profesional de pilates en Meco, Madrid.

## Estado Actual

- Proyecto nuevo e independiente en Astro con salida estática.
- El primer hito solo crea scaffold técnico, estructura de contenido local y plan vivo.
- La landing definitiva se construirá por hitos pequeños y revisables.
- El repositorio sera publico desde el inicio, asi que no se deben subir fotos sin permiso ni datos legales no verificados.

## Decisiones

- No se toca `borchgomez` ni `preparacion-parto`.
- La web toma como fuente factual la web actual de Bárbara, pero los textos se reescriben y corrigen.
- La V1 es estática y usa contenido local, preparada para un CMS futuro sin incluirlo todavía.
- El CTA principal será cita previa por WhatsApp/teléfono.
- El dominio final queda pendiente; las URLs canónicas y sitemap deben revisarse antes de publicar.

## Validación

```bash
corepack pnpm run lint
corepack pnpm run build
git diff --check
```
