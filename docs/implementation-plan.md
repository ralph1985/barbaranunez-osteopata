# Plan Vivo De Implementacion

## Objetivo

Crear una nueva web pública para Bárbara Núñez Osteópata, con una landing rápida, clara y profesional, basada en el contenido factual de la web actual y con diseño nuevo.

## Flujo De Trabajo

- Repositorio publico en GitHub desde el inicio.
- Trabajo por PRs pequeños y revisables.
- Este documento se actualiza al inicio o cierre de cada hito.
- El tiempo empleado se registra en `docs/time-log.md`.
- No subir fotos de la web actual hasta confirmar permiso de reutilizacion.
- No publicar textos legales como definitivos hasta validar datos de titularidad, privacidad y cookies.

## Hitos

### Hito 1 - Scaffold Y Plan

Estado: completado el 8 de julio de 2026.

Entregable:

- Proyecto Astro estatico inicial.
- README, contexto de proyecto y plan vivo.
- Landing provisional sin fotos reales ni contenido legal definitivo.
- Validacion local con lint, build y `git diff --check`.

Resultado:

- Scaffold y documentación fusionados en `main`.
- Validación completada con lint, build y `git diff --check`.
- Tiempo comunicado: 30 minutos.

### Hito 2 - Inventario Y Contenido

Estado: completado el 10 de julio de 2026, pendiente de revisión de datos abiertos.

Entregable:

- Extraer contenido factual de la web actual.
- Redactar copia nueva para hero, sobre mí, servicios, ubicación y contacto.
- Separar datos verificados de datos pendientes.

Resultado:

- Inventario documentado en `docs/content-inventory.md`.
- Copy inicial aplicado a la landing desde `src/infrastructure/content/data/site.json`.
- Datos pendientes separados para revisión antes de diseño final, legal y publicación.

### Hito 3 - Diseno Landing

Estado: pendiente.

Entregable:

- Dirección visual clínica, cálida y completamente nueva.
- Secciones responsive y CTA claro de cita previa.
- Placeholders de imagen listos para sustituir por fotos autorizadas.

### Hito 4 - Legal Y Publicacion

Estado: pendiente.

Entregable:

- Paginas legales base revisadas.
- SEO técnico, metadatos, robots y sitemap ajustados al dominio final.
- Configuracion de despliegue estatico.

## Decisiones Cerradas

- Proyecto nuevo: `/home/rafa/dev/barbaranunez-osteopata`.
- GitHub publico desde el inicio.
- Primer PR: scaffold técnico + plan, sin fotos ni contenido sensible.
- Estructura principal: landing con secciones.
- Contenido: reescribir y corregir desde la web actual.
- Gestión de contenido: V1 estática preparada para CMS futuro.
- Servicios: osteopatía estructural, osteopatía craneosacral, técnico masajista deportivo, pilates máquina y pilates mat.
- CTA principal: WhatsApp/teléfono.
- Despliegue objetivo: estatico, preparado para Vercel.

## Pendientes De Validar

- Dominio final y canonical.
- Permiso de reutilizacion de fotos actuales.
- Si el número `620 88 89 37` acepta WhatsApp.
- Si el teléfono fijo `91 113 68 43` debe mantenerse visible.
- Denominación final de osteopatía craneosacral/sacro-craneal.
- Si la osteopatía visceral debe figurar como servicio independiente.
- Datos legales completos.
- Texto final de política de privacidad y cookies.
