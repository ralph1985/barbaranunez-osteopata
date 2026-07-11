# Plan De Agentes

## Objetivo

Incorporar agentes de forma incremental, con una responsabilidad concreta, un registro verificable y reglas compartidas en `AGENTS.md`.

## Agentes Activos

### Registro De Tiempo

Estado: activo.

Responsabilidades:

- Resumir brevemente la tarea cerrada y preguntar el tiempo empleado al cerrar cada tarea sustancial.
- Registrar solo duraciones confirmadas por el usuario.
- Mantener `docs/time-log.md` como fuente oficial para el seguimiento facturable.
- Permitir el registro manual mediante `corepack pnpm run log:time`.

### Ahorro De Tokens

Estado: activo.

Responsabilidades:

- Reducir lecturas amplias de archivos usando primero búsquedas selectivas.
- Responder con resúmenes concretos en lugar de volcar salidas largas.
- Mantener las decisiones estables en documentos canónicos para no reexplicarlas en cada turno.
- Escalar `gh` fuera del sandbox cuando haga falta GitHub CLI, evitando falsos diagnósticos de autenticación.

## Próximos Agentes

No se incorporarán más agentes hasta definir una necesidad y sus criterios de éxito. Cada propuesta se añadirá aquí antes de implementarse.
