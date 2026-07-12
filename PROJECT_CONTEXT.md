# Contexto Del Proyecto

Este proyecto es la nueva web profesional de Bárbara Núñez, osteópata, técnico masajista deportivo y profesional de pilates en Meco, Madrid.

## Estado Actual

- Proyecto nuevo e independiente en Astro con salida estática.
- El primer hito de scaffold técnico, estructura de contenido local y plan vivo está completado.
- La landing definitiva se construirá por hitos pequeños y revisables.
- Los estilos fuente viven en `src/styles/**/*.scss`, organizados por base, layout, componentes y secciones.
- El repositorio sera publico desde el inicio, asi que no se deben subir fotos sin permiso ni datos legales no verificados.
- El tiempo facturable se registra en `docs/time-log.md` siguiendo las reglas de `AGENTS.md`.

## Decisiones

- No se toca `borchgomez` ni `preparacion-parto`.
- La web toma como fuente factual la web actual de Bárbara, pero los textos se reescriben y corrigen.
- La V1 es estática y usa contenido local, preparada para un CMS futuro sin incluirlo todavía.
- El CTA principal será cita previa por WhatsApp/teléfono.
- El dominio público por defecto es `https://www.barbaranunez-osteopata.es`; puede ajustarse con `PUBLIC_SITE_URL` si cambia antes de publicar.
- Los textos legales son bases revisables mientras falten datos completos de titularidad, privacidad y cookies.

## Validación

```bash
corepack pnpm run lint
corepack pnpm run build
git diff --check
```
