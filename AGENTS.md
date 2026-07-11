# Instrucciones Para Agentes

## Registro De Tiempo

- `docs/time-log.md` es el registro oficial de horas facturables del proyecto.
- Al terminar una tarea sustancial, muestra primero una breve descripción de lo que se hizo y después pregunta: "¿Cuánto tiempo te llevó esta tarea para registrarlo?"
- La descripción debe ser concreta y corta, suficiente para que el usuario identifique la tarea que se va a registrar.
- Una tarea sustancial es una unidad de trabajo implementada o cerrada. No incluye conversaciones, análisis sin cambios ni el propio registro de tiempo.
- No estimes ni inventes duraciones. Registra únicamente el tiempo confirmado por el usuario.
- Si la respuesta llega en un turno posterior, registra primero la tarea pendiente antes de comenzar otra.
- Usa la fecha local de `Europe/Madrid` y marca el tiempo como facturable salvo indicación contraria.
- Convierte la duración confirmada a minutos enteros y horas decimales con dos cifras.
- Si el usuario rechaza registrar el tiempo, no añadas ninguna fila.
- El comando manual alternativo es `corepack pnpm run log:time`.

## Ahorro De Tokens

- Antes de leer archivos grandes, busca primero con `rg` y abre solo los fragmentos necesarios.
- Prioriza los documentos canónicos del proyecto: `docs/implementation-plan.md`, `docs/agents-plan.md`, `docs/content-inventory.md` y `PROJECT_CONTEXT.md`.
- No pegues salidas largas de comandos en la respuesta; resume el resultado y cita rutas o comandos.
- Para cambios pequeños, evita planes extensos y mantén el resumen final en pocas líneas.
- No repitas decisiones ya cerradas salvo que sean relevantes para la tarea actual.
- Cuando el trabajo sea solo documental, valida con `corepack pnpm run lint` o, si procede, con Prettier y `git diff --check`; no ejecutes más comprobaciones de las necesarias.
- Para GitHub CLI usa `gh` fuera del sandbox con permisos escalados; no diagnostiques auth desde el sandbox.
