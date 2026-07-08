# Instrucciones Para Agentes

## Registro De Tiempo

- `docs/time-log.md` es el registro oficial de horas facturables del proyecto.
- Al terminar una tarea sustancial, pregunta: "¿Cuánto tiempo te llevó esta tarea para registrarlo?"
- Una tarea sustancial es una unidad de trabajo implementada o cerrada. No incluye conversaciones, análisis sin cambios ni el propio registro de tiempo.
- No estimes ni inventes duraciones. Registra únicamente el tiempo confirmado por el usuario.
- Si la respuesta llega en un turno posterior, registra primero la tarea pendiente antes de comenzar otra.
- Usa la fecha local de `Europe/Madrid` y marca el tiempo como facturable salvo indicación contraria.
- Convierte la duración confirmada a minutos enteros y horas decimales con dos cifras.
- Si el usuario rechaza registrar el tiempo, no añadas ninguna fila.
- El comando manual alternativo es `corepack pnpm run log:time`.
