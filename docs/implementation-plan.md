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

Estado: completado el 10 de julio de 2026, pendiente de revisión visual.

Entregable:

- Dirección visual clínica, cálida y completamente nueva.
- Secciones responsive y CTA claro de cita previa.
- Placeholders de imagen listos para sustituir por fotos autorizadas.

Resultado:

- Dirección visual aplicada a la landing con hero fotográfico generado, sin reutilizar fotos de la web actual.
- Secciones reorganizadas para hero, sobre Bárbara, enfoque, servicios y contacto.
- CTA principal neutral como llamada telefónica hasta confirmar WhatsApp.
- Placeholder fotográfico inicial retirado en el Hito 10 para evitar usar fotos falsas.

### Hito 3.5 - Sistema UI Y Tailwind

Estado: completado el 10 de julio de 2026.

Entregable:

- Incorporar Tailwind al proyecto Astro.
- Migrar la base visual actual a utilidades y tokens mantenibles sin rediseñar la landing.
- Extraer componentes UI simples propios para botones, cabeceras de sección, tarjetas de servicio y panel de contacto.
- Evaluar si hace falta una librería externa de componentes; por defecto, priorizar componentes Astro propios y evitar dependencias innecesarias.

Resultado:

- Tailwind 4 incorporado mediante el plugin oficial de Vite.
- Tokens de diseño definidos en `src/styles/global.css`.
- CSS global anterior sustituido por utilidades Tailwind y componentes Astro propios.
- Componentes UI propios añadidos para botones, cabeceras de sección, tarjetas, panel de contacto y contenido legal.
- No se añadió una librería externa de componentes porque la landing no la necesita todavía.

### Hito 4 - Legal Y Publicacion

Estado: completado el 10 de julio de 2026, pendiente de validación legal y dominio definitivo si cambia.

Entregable:

- Paginas legales base revisadas.
- SEO técnico, metadatos, robots y sitemap ajustados al dominio final.
- Configuracion de despliegue estatico.

Resultado:

- Páginas legales convertidas en bases revisables con datos pendientes explícitos y sin presentarlas como textos definitivos.
- Metadatos SEO añadidos al layout: canonical, robots indexables, Open Graph y Twitter Card.
- `robots.txt` y `sitemap.xml` generados como rutas estáticas.
- URL pública configurable con `PUBLIC_SITE_URL`, con valor por defecto `https://www.barbaranunez-osteopata.es`.
- Configuración base de Vercel añadida para despliegue estático en `dist/`.

### Hito 5 - AnimeJS Y Movimiento

Estado: completado el 10 de julio de 2026.

Entregable:

- Incorporar AnimeJS como dependencia gestionada por pnpm.
- Añadir un entrypoint de scripts propio para la web pública.
- Implementar animación de entrada del hero y reveals al hacer scroll.
- Respetar `prefers-reduced-motion` y evitar animaciones infinitas.

Resultado:

- AnimeJS incorporado como dependencia fija, siguiendo el patrón actual de `../borchgomez`.
- `src/scripts/site.js` añadido como entrypoint pequeño que delega en módulos.
- Animación del hero y revelado progresivo de secciones/tarjetas implementados con atributos `data-*`.
- Las animaciones se desactivan para usuarios con reducción de movimiento.

### Hito 6 - Paginas Separadas Y Menu Lateral

Estado: completado el 10 de julio de 2026.

Entregable:

- Convertir las secciones principales en páginas independientes.
- Sustituir la navegación de cabecera por un menú desplegable lateral desde la derecha.
- Añadir contacto por WhatsApp siguiendo el patrón de enlace externo usado en `../borchgomez`.
- Mantener SEO, sitemap y animaciones funcionando con la nueva estructura.

Resultado:

- Nuevas páginas `/sobre/`, `/servicios/` y `/contacto/`.
- Home reducida a entrada principal con hero y accesos a páginas.
- Menú lateral derecho con overlay, cierre por botón, enlace, overlay y tecla Escape.
- WhatsApp añadido como CTA principal de contacto con `wa.me`.
- Sitemap actualizado con las nuevas rutas.

### Hito 7 - Cabecera Persistente

Estado: completado el 10 de julio de 2026.

Entregable:

- Mantener visible la cabecera con acceso al menú durante el scroll.
- Conservar la jerarquía visual del menú lateral y overlay.

Resultado:

- Cabecera convertida en `sticky` con fondo translúcido, blur y borde inferior.
- `z-index` ajustado para que la cabecera quede visible sin interferir con el menú lateral.

### Hito 8 - Hero Y Contacto

Estado: completado el 11 de julio de 2026.

Entregable:

- Mostrar la dirección completa de la consulta en la primera pantalla.
- Ajustar el título principal para que no domine en exceso el hero.
- Convertir los CTAs de WhatsApp, llamada y email en botones de icono accesibles.

Resultado:

- Dirección normalizada como `C/ Grecia, 9-D, 28880 Meco (Madrid)` a partir de la web actual.
- Claim del hero acortado y tamaño máximo del H1 reducido.
- Acciones de contacto representadas con iconos SVG, `aria-label` y `title`.

### Hito 9 - Ahorro De Tokens En Agentes

Estado: completado el 11 de julio de 2026.

Entregable:

- Añadir reglas compartidas para que los agentes lean menos contexto innecesario.
- Documentar criterios de respuesta breve, búsqueda selectiva y validación proporcionada.
- Evitar falsos ciclos de autenticación de GitHub por usar `gh` dentro del sandbox.

Resultado:

- `AGENTS.md` incorpora una sección de ahorro de tokens.
- `docs/agents-plan.md` activa el agente de ahorro de tokens con responsabilidades concretas.
- La regla de usar `gh` fuera del sandbox queda explícita para futuros PRs.

### Hito 10 - Placeholders Y Guia De Fotos

Estado: completado el 11 de julio de 2026.

Entregable:

- Preparar huecos visuales para fotos reales sin usar stock ni fotos falsas.
- Documentar que fotos debe aportar Barbara para sustituir los placeholders.
- Mantener los huecos integrados en el diseño responsive.

Resultado:

- Componente visual reutilizable para fotos pendientes.
- Hero y pagina "Sobre Barbara" preparados para foto principal, foto de consulta y retrato.
- Guia de fotos añadida en `docs/photo-guide.md` y enlazada desde el inventario.

### Hito 11 - Revision Integral De Textos

Estado: completado el 11 de julio de 2026, pendiente de revisión de copy.

Entregable:

- Reescribir el copy público con tono cercano, claro y profesional.
- Centralizar textos visibles principales en `src/infrastructure/content/data/site.json`.
- Mantener las páginas legales como bases revisables, sin presentarlas como textos definitivos.
- Validar con lint, build y `git diff --check`.

Resultado:

- Hero, tarjetas de home, intros de páginas, enfoque, servicios, contacto y footer revisados con tono más humano y directo.
- Textos de páginas y secciones conectados al contenido local para facilitar futuras revisiones y una posible migración a CMS.
- Páginas legales ajustadas para mejorar claridad, conservando pendientes explícitos de titularidad, privacidad y cookies.
- Datos factuales inventariados mantenidos sin cambios.

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
- Movimiento: AnimeJS como dependencia de paquete, con scripts modulares y sin loops infinitos en la V1.
- Navegación: secciones principales en páginas separadas y menú lateral derecho como navegación principal.
- Cabecera: acceso al menú siempre visible mediante cabecera sticky.
- Contacto: WhatsApp, llamada y email se muestran como acciones de icono en la V1.
- Agentes: optimizar contexto con búsquedas selectivas, respuestas breves y `gh` fuera del sandbox.
- Copy: tono cercano y claro, sin promesas clínicas ni datos profesionales no verificados.
- Fotos: preparar huecos de foto reales, sin stock ni placeholders fotograficos definitivos.

## Pendientes De Validar

- Confirmar si el dominio público por defecto `https://www.barbaranunez-osteopata.es` se mantiene como dominio final.
- Permiso de reutilizacion de fotos actuales.
- Si el teléfono fijo `91 113 68 43` debe mantenerse visible.
- Denominación final de osteopatía craneosacral/sacro-craneal.
- Si la osteopatía visceral debe figurar como servicio independiente.
- Datos legales completos.
- Texto final de política de privacidad y cookies.
