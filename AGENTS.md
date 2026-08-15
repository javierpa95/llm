# AGENTS.md — LLM: Anatomía de un Modelo de Lenguaje Grande

## 🎯 Propósito

Sitio web divulgativo-técnico en español que explica cómo funcionan los LLMs desde el silicio hasta la implementación. El objetivo es desmitificar: mostrar que un LLM no es magia, sino matemáticas sobre silicio.

**URL:** https://llm.javierpenate.com  
**Repo:** https://github.com/javierpa95/llm  
**Deploy:** Coolify (auto-deploy vía GitHub App + manual con `docker cp`)

## 🧱 Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Astro 5 (static site generation) |
| CSS | Tailwind CSS 3 + CSS plano en `global.css` |
| Interactividad baja | Vanilla JS (inline en `.astro`) |
| Interactividad media | Astro islands + JS |
| Interactividad alta | Vue 3 (AttentionHeatmap, EmbeddingSpace, SpeedCalculator, VrmCalculator, TokenizerDemo, InfoBox) |
| Fuentes | Inter (sistema) + JetBrains Mono (código) |
| Procesado markdown | `marked` (para noticias) |
| Tablas markdown | GFM via `marked`, estilos en `.markdown-content` |

**Ver:** `design.md` para sistema de diseño completo (colores, tipografía, espaciado, componentes).

## 📁 Estructura del proyecto

```
/
├── public/                  # Assets estáticos (favicon, OG images)
│   ├── favicon.svg
│   └── og-default.png       # Imagen OG para redes sociales (1200×630)
│
├── src/
│   ├── components/
│   │   ├── content/         # Componentes de contenido didáctico
│   │   │   ├── InfoBox.vue          # Cajas informativas (info-box-*)
│   │   │   ├── LevelTabs.astro/vue  # Tabs beginner/deep/advanced
│   │   │   ├── HardwareDiagram.astro
│   │   │   ├── ModelJourney.astro   # Demo: viaje del modelo
│   │   │   ├── ClockCycleDemo.astro # Demo: ciclo de reloj
│   │   │   └── ...
│   │   ├── interactive/     # Demos interactivas (Vue)
│   │   │   ├── AttentionHeatmap.vue
│   │   │   ├── EmbeddingSpace.vue   # Espacio semántico 3D
│   │   │   ├── SpeedCalculator.vue
│   │   │   ├── VrmCalculator.vue
│   │   │   └── TokenizerDemo.vue
│   │   ├── layout/          # Header, Sidebar, Footer
│   │   └── ShareButtons.astro       # Compartir en X/LinkedIn/WhatsApp
│   │
│   ├── pages/               # Astro pages (cada una es una ruta)
│   │   ├── index.astro            # Home
│   │   ├── hardware.astro         # Página principal: Hardware
│   │   ├── fundamentos.astro
│   │   ├── arquitectura.astro
│   │   ├── inferencia.astro
│   │   ├── tokenizacion.astro
│   │   ├── entrenamiento.astro
│   │   ├── glosario.astro
│   │   ├── noticias.astro         # Índice de noticias
│   │   └── noticias/
│   │       └── [slug].astro       # Página individual de noticia
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro       # Layout raíz (HTML, head, OG tags, CSS)
│   │   └── DocLayout.astro        # Layout con sidebar + header + footer
│   │
│   ├── data/                # Datos hardcodeados (centralizados)
│   │   ├── news.ts          # Sistema de noticias (parseo frontmatter, wikilinks)
│   │   ├── glossary.ts      # Entradas del glosario
│   │   ├── gpus.ts          # Especificaciones de GPUs
│   │   ├── models.ts        # Comparativa de modelos
│   │   ├── precisions.ts    # Formatos de precisión
│   │   └── types.ts         # Tipos compartidos
│   │
│   ├── styles/
│   │   └── global.css       # Design system tokens (CSS plano, sin @apply)
│   │
│   └── consts.ts            # SITE config, NAV_ITEMS
│
├── noticias/
│   ├── published/           # Noticias publicadas (frontmatter + markdown)
│   └── pending/             # Borradores generados por cron (revisión humana)
│
├── references/
│   └── decisions.md         # Architectural Decision Records (ADRs)
├── design.md                # Documentación del sistema de diseño
├── project.md               # Plan del proyecto
├── spec.md                  # Especificación funcional
├── tailwind.config.mjs
├── astro.config.mjs
├── Dockerfile
└── nginx.conf
```

## 📰 Sistema de noticias

- Las noticias son ficheros `.md` con frontmatter YAML en `noticias/published/`
- El cron diario externo genera drafts en `pending/` → revisión humana → mover a `published/`
- El frontmatter incluye: title, date, source, source_url, category, summary, reading_time, tags
- El cuerpo se escribe en markdown con GFM (tablas, negritas, listas)
- **Wikilinks:** `[[slug]]` o `[[slug|texto visible]]` se resuelven a enlaces entre noticias
- El slug es el nombre del fichero `.md` sin extensión

### Categorías disponibles:
- `modelos` (🧠), `hardware` (🔌), `investigación` (🔬), `industria` (🏢), `herramientas` (🛠️)

## 🎨 Diseño

- **Tema claro** — sin dark mode
- **CSS plano** en `global.css` — sin `@apply` para evitar chunking de Vite
- **Tokens:** `.card`, `.info-box-*` (blue/yellow/green/red/indigo/amber/purple), `.btn-primary`, `.btn-secondary`, `.badge-*`, `.table-wrap`, `.code-block`, `.markdown-content`
- **Border-radius:** `xl` (0.75rem) para contenedores, `lg` (0.5rem) para elementos pequeños
- **Sombras:** `shadow-sm` por defecto, `shadow-md` en hover
- **Ver:** `design.md` para documentación completa

## 🚀 Deploy

- Auto-deploy via Coolify + GitHub App (a veces falla)
- **Fallback manual:** `docker cp dist/. <container>:/usr/share/nginx/html/`
- Contenedor: `z7c3qmng9a0p3adwg6htb4mh-202239842479` (el sufijo cambia si Coolify recrea el contenedor; buscar por el prefijo `z7c3qmng9a0p3adwg6htb4mh`)
- Build: `npm run build` (output en `dist/`)

## 🔐 Seguridad

- No hay `.env` en el repo
- No hay API keys, tokens ni contraseñas hardcodeadas
- Las variables de entorno se gestionan en Coolify
- El cron de noticias ejecuta en local, no en el repo

## 📐 Convenciones

| Aspecto | Regla |
|---------|-------|
| Idioma | 100% español |
| Navegación | Inicio → Hardware → Fundamentos → Arquitectura → Inferencia → Tokenización → Entrenamiento → Glosario (+ Noticias) |
| Niveles | 🟢 beginner / 🟡 deep / 🔬 advanced (orientativos, no filtros) |
| Datos | Centralizar en `src/data/` (ADR-003) |
| Interactividad | Baja = Vanilla JS, Media = Astro+JS, Alta = Vue (ADR-001) |
| Nombrado | kebab-case para ficheros, PascalCase para componentes |
| Commits | Prefijos: feat:, fix:, docs:, refactor:, chore: |

## 🧠 Decisiones clave

Ver `references/decisions.md` para:
- **ADR-001:** Interactividad progresiva (Vanilla → Astro → Vue)
- **ADR-002:** Sidebar levels son orientativos
- **ADR-003:** Centralizar datos hardcodeados en `src/data/`
