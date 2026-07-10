# Bárbara Núñez Osteópata

Nueva web profesional para Bárbara Núñez, osteópata y profesional de pilates en Meco.

El primer hito creó la base técnica y el plan vivo de implementación sin publicar fotos ni textos legales definitivos.

## Desarrollo

```bash
corepack pnpm install
corepack pnpm run dev
```

## Validación

```bash
corepack pnpm run lint
corepack pnpm run build
```

## Despliegue

El sitio se genera como estático en `dist/` y está preparado para Vercel. La URL pública se puede ajustar con:

```bash
PUBLIC_SITE_URL=https://www.barbaranunez-osteopata.es
```

Ese valor alimenta canonical, Open Graph, `robots.txt` y `sitemap.xml`.

## Plan

El plan vivo está en [`docs/implementation-plan.md`](docs/implementation-plan.md).

## Registro De Tiempo

El seguimiento facturable está en [`docs/time-log.md`](docs/time-log.md). Para añadir un registro manual:

```bash
corepack pnpm run log:time
```
