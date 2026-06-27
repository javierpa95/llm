# Decisiones Técnicas (ADRs) — LLM Site

## ADR-001: Sistema de interactividad

**Estado:** Aceptado · 2026-06-27

### Contexto

El sitio usa 3 sistemas distintos para interactividad:
- **Vue 3** con `client:only="vue"` — calculadoras, mapas 3D, heatmaps
- **Vanilla JS** inline — glosario (búsqueda/filtros), toggles de info
- **Astro components** con JS vanilla — diagramas interactivos en hardware (HardwareDiagram, ClockCycleDemo, ModelJourney)

### Decisión

Usar el sistema que corresponda según la complejidad:

| Complejidad | Sistema | Cuándo |
|---|---|---|
| **Baja** — toggles, tabs, hover effects | Vanilla JS inline en `<script>` del `.astro` | Un solo comportamiento, sin estado compartido |
| **Media** — animaciones con estado (fases, progreso) | JS vanilla + `requestAnimationFrame` | La demo ModelJourney, ClockCycleDemo |
| **Alta** — reactividad, datos que cambian, 3D | Vue 3 (`client:only="vue"`) | Calculadoras VRAM/velocidad, tokenizador, espacio 3D, heatmap atención |

**Razonamiento:** Vue añade ~40 KB de JS y requiere el runtime de Vue. Para componentes simples (un toggle, un filtro de búsqueda), vanilla JS es más ligero y directo. Para componentes con estado complejo o visualización 3D (TresJS), Vue es necesario.

### Consecuencias

- El glosario (búsqueda + filtros) se queda con vanilla JS ✅ (baja complejidad)
- Hardware (diagramas, demos animadas) se queda con Astro + vanilla JS ✅ (media complejidad)
- No forzar Vue donde no hace falta
- Documentar esta decisión en `spec.md`

---

## ADR-002: Sidebar level system (beginner/deep/advanced)

**Estado:** Aceptado · 2026-06-27

### Contexto

Cada sección del sidebar tiene un `level` asignado (beginner/deep/advanced). Sin embargo, el componente `LevelTabs` siempre renderiza los 3 niveles. El level solo determina qué pestaña está activa por defecto.

### Decisión

El `level` en el sidebar es **orientativo**, no restrictivo:

- Indica al lector por dónde empezar según su nivel
- La pestaña por defecto del `LevelTabs` se corresponde con el nivel de la sección
- **No** ocultamos contenido — todo es accesible siempre
- No implementamos un filtro global de nivel porque oculta información valiosa

**Excepciones:** Las secciones sin `LevelTabs` (diagramas, demos, calculadoras) se marcan con el nivel que mejor describe su contenido, pero son planas.

### Por qué no filtrar

Ocultar contenido crea fricción: un principiante que quiere ver el diagrama avanzado no debería tener que cambiar un toggle. El sistema actual (todo visible, pestaña por defecto útil) es el mejor equilibrio entre guía y libertad.

---

## ADR-003: Valores hardcodeados y fechas

**Estado:** Pendiente de decisión · 2026-06-27

### Contexto

Prácticamente todas las páginas contienen valores hardcodeados con fecha:
- Especificaciones de GPUs (RTX 4090: 24 GB, 1008 GB/s)
- Precios de entrenamiento ($50-100M USD)
- Fechas de corte ("2025-2026", "Junio 2026")
- Tamaños de modelos (7B, 70B, 405B)

### Propuesta

Centralizar los datos que cambian con el tiempo en archivos de datos tipados (`src/data/`):
- `gpus.ts` — ya existe, mantenerlo actualizado
- `models.ts` — ya existe, mantenerlo
- `pricing.ts` — nuevo, costes de entrenamiento/inferencia
- `timeline.ts` — nuevo, hitos históricos con fechas

Así, actualizar el sitio para 2027+ solo requiere cambiar los archivos de datos, no buscar en todas las páginas.
