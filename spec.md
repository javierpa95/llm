# LLM — Technical Specification

> Stack, arquitectura, componentes y plan de implementación para la web
> interactiva que explica LLMs desde el concepto hasta el silicio.

---

## Índice

1. [Tech Stack](#1-tech-stack)
2. [Project Structure](#2-project-structure)
3. [Pages & Routing](#3-pages--routing)
4. [Component Architecture](#4-component-architecture)
5. [Data Model & Types](#5-data-model--types)
6. [Design System](#6-design-system)
7. [Interactive Components Specification](#7-interactive-components-specification)
8. [Content Strategy (MDX)](#8-content-strategy-mdx)
9. [Build & Deploy](#9-build--deploy)
10. [Implementation Phases](#10-implementation-phases)
11. [Quality Gates](#11-quality-gates)

---

## 1. Tech Stack

### Core

| Technology | Version | Uso | Por qué |
|-----------|---------|-----|---------|
| **Astro** | 5.x (latest) | SSG, routing, content | Contenido en markdown + islas Vue. Ya usado en el proyecto de slides. |
| **Vue 3** | 3.5+ | Componentes interactivos | Composition API, TS nativo. Conocido por el equipo. |
| **TypeScript** | 5.x | Tipado en todo el proyecto | Sin `any`, sin sorpresas. |
| **TresJS** | 4.x | Three.js declarativo (Vue) | `<TresCanvas>`, reactivo, ecosistema con cientos de ejemplos. |
| **Tailwind CSS** | 4.x | Estilos utilitarios | Rápido de prototipar, consistente, purgado automático con Astro. |
| **Vite** | 6.x | Bundler (ya viene con Astro) | — |

### Plugins Astro

| Plugin | Uso |
|--------|-----|
| `@astrojs/vue` | Renderizar componentes Vue como islas |
| `@astrojs/mdx` | Páginas en Markdown extendido con componentes embebidos |
| `@astrojs/tailwind` | Integración Tailwind |
| `astro-expressive-code` | Bloques de código con syntax highlighting bonito |
| `@astrojs/sitemap` | Sitemap.xml (SEO) |

### Dependencias npm clave

```
dependencies:
  vue@^3.5
  @tresjs/core@^4
  @tresjs/drei@^2         ← helpers (OrbitControls, Text, Float, etc.)
  three@^0.170

devDependencies:
  astro@^5
  @astrojs/vue
  @astrojs/mdx
  @astrojs/tailwind
  tailwindcss@^4
  astro-expressive-code
  @astrojs/sitemap
  typescript@^5
```

### Entorno de desarrollo

```
Node >= 20
pnpm (preferido) o npm
VSCode + Volar (para Vue TS)
```

---

## 2. Project Structure

```
llm/
├── public/
│   ├── favicon.svg
│   └── og-image.png
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Sidebar.astro         ← índice navegable (sticky)
│   │   │   └── PageLayout.astro      ← wrapper: Header + Sidebar + main + Footer
│   │   │
│   │   ├── content/
│   │   │   ├── LevelTabs.vue         ← 🟢🟡🔬 pestañas colapsables
│   │   │   ├── MathBlock.vue         ← Fórmulas con KaTeX opcional
│   │   │   ├── InfoBox.vue           ← Cajas 💡, ⚠️, 🔥
│   │   │   └── CodeBlock.vue         ← Wrapper para código ejecutable
│   │   │
│   │   ├── interactive/
│   │   │   ├── VrmCalculator.vue     ← Calculadora VRAM (2D, sliders)
│   │   │   ├── SpeedCalculator.vue   ← Velocidad tokens/s
│   │   │   ├── VrmVisualization.vue  ← Barras 3D de ocupación VRAM (TresJS)
│   │   │   ├── TokenizerDemo.vue     ← Tokenización coloreada en vivo
│   │   │   ├── AttentionHeatmap.vue  ← Mapa de calor de atención (TresJS)
│   │   │   ├── EmbeddingSpace.vue    ← Puntos 3D de embeddings (TresJS)
│   │   │   ├── AutoregressiveLoop.vue ← Animación bucle autoregresivo (TresJS)
│   │   │   ├── BandwidthHighway.vue  ← Autopista de bits animada (TresJS)
│   │   │   ├── GpuTour.vue           ← Tour 3D de GPU con zoom (TresJS)
│   │   │   ├── QuantizationView.vue  ← Grid FP32 vs INT4 visual (Canvas 2D)
│   │   │   ├── InferenceTrace.vue    ← Traza animada del viaje de un token
│   │   │   ├── MemoryHierarchy.vue   ← Pirámide de memoria interactiva
│   │   │   └── NeuronActivations.vue ← Mapa de activación de neuronas FFN
│   │   │
│   │   └── ui/
│   │       ├── Button.vue
│   │       ├── Slider.vue            ← Slider personalizado (input range)
│   │       ├── Select.vue            ← Dropdown personalizado
│   │       ├── Toggle.vue            ← Switch on/off
│   │       └── Tooltip.vue           ← Tooltip con hover
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro          ← HTML shell, meta tags, CSS global
│   │   └── DocLayout.astro           ← BaseLayout + Sidebar + table of contents
│   │
│   ├── pages/
│   │   ├── index.astro               ← Landing + hero + secciones principales
│   │   ├── hardware.astro            ← Hardware + bus + jerarquía
│   │   ├── fundamentos.astro         ← Parámetros + Memoria + Quantización
│   │   ├── arquitectura.mdx          ← Transformer + Atención + FFN
│   │   ├── inferencia.astro          ← Bucle autoregresivo + KV Cache + Velocidad
│   │   ├── tokenizacion.astro        ← Tokenización + Embeddings
│   │   ├── entrenamiento.astro       ← Training + Alucinaciones
│   │   ├── glosario.astro            ← Glosario completo con búsqueda
│   │   └── 404.astro
│   │
│   ├── data/
│   │   ├── models.ts                 ← Constantes de modelos (params, VRAM req.)
│   │   ├── gpus.ts                   ← Constantes de GPUs (BW, VRAM, bus)
│   │   ├── precisions.ts             ← Formatos y sus bytes/param
│   │   └── glossary.ts               ← Array con términos del glosario
│   │
│   ├── composables/
│   │   ├── useVramCalculator.ts      ← Lógica de cálculo de VRAM
│   │   ├── useSpeedCalculator.ts     ← Lógica de velocidad tokens/s
│   │   ├── useTokenizer.ts           ← Simulación de tokenización BPE
│   │   ├── useAttention.ts           ← Simulación de atención
│   │   └── useEmbedding.ts           ← Embedding lookup simulado
│   │
│   ├── styles/
│   │   ├── global.css                ← Estilos base, variables CSS
│   │   └── components.css            ← Estilos reutilizables de componentes
│   │
│   ├── consts.ts                     ← Constantes globales
│   └── env.d.ts                      ← Declaraciones de tipos globales
│
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── .gitignore
├── README.md
└── Dockerfile                        ← (opcional, para Coolify)
```

### Principios de organización

1. **Componentes Vue** solo donde hay interactividad o 3D
2. **Páginas Astro** para contenido mayoritariamente estático
3. **Composables** para toda la lógica de negocio (cálculos VRAM, velocidad, atención simulada) — los componentes solo llaman composables
4. **Data pura** en `src/data/` — arrays y objetos tipados, sin lógica
5. **UI components** atómicos y reutilizables

---

## 3. Pages & Routing

### Sitemap

```
/                     → Landing + hero + resumen de todo
/hardware             → Historia GPU, mapa físico, ciclos, viaje, demo, cuello de botella
/fundamentos          → Parámetros, memoria, cuantización, calculadora VRAM
/arquitectura         → Transformer, Atención, FFN, capa completa
/inferencia           → Bucle autoregresivo, KV Cache, calculadora velocidad
/tokenizacion         → BPE, embeddings, word arithmetic
/entrenamiento        → Training (3 fases), paralelismo, alucinaciones
/glosario             → Búsqueda + fichas de todos los términos
```

### Layout de cada página

Todas las páginas comparten `DocLayout.astro` que incluye:

```
┌──────────────────────────────────────────────────────┐
│  Header                                              │
│  Logo + "LLM" + nav links + modo claro/oscuro toggle │
├──────────────┬───────────────────────────────────────┤
│  Sidebar     │  Main content                          │
│  (sticky)    │                                        │
│              │  ← Título de página                    │
│  ■ ¿Qué es?  │  ← Sección 🟢 Para empezar            │
│  ■ Params    │  ← Sección 🟡 A fondo                 │
│  ■ Memoria   │  ← Sección 🔬 Avanzado                │
│  ■ Hardware  │  ← **[Interactive Component]**         │
│  ■ ...       │                                        │
│              │                                        │
└──────────────┴────────────────────────────────────────┘
                       Footer
```

**Sidebar behavior:**
- Sticky en desktop (>1024px)
- Colapsable en mobile (hamburger)
- Highlight automático de sección activa (Intersection Observer)
- Sub-ítems para secciones con 3 niveles (🟢🟡🔬)

### Navegación entre niveles

Cada página usa `LevelTabs.vue` para colapsar/expandir los 3 niveles:

```
[ 🟢 PARA EMPEZAR | 🟡 A FONDO | 🔬 AVANZADO ]

Contenido del nivel activo aquí.
Los datos/gráficos se mantienen al cambiar de nivel
(el estado de calculadoras persiste).
```

---

## 4. Component Architecture

### Árbol de componentes (página tipo)

```
DocLayout.astro
├── Header.astro
│   ├── Logo (texto)
│   ├── Nav (links a páginas)
│   └── ThemeToggle (claro/oscuro) ← Vue island
│
├── Sidebar.astro
│   └── ScrollSpy (active section highlight)
│
├── Main (slot)
│   │
│   ├── LevelTabs.vue (client:load)
│   │   └── Slots: beginner, deep, advanced
│   │
│   ├── Content sections (standard HTML/MDX)
│   │
│   └── InteractiveComponent.vue (client:idle o client:visible)
│       └── Calls composable (useVramCalculator, etc.)
│
└── Footer.astro
    └── Links + copyright
```

### Carga de islas Vue

| Estrategia | Cuándo usarla | Componentes |
|-----------|--------------|-------------|
| `client:load` | Visible inmediato, crítico | Header (theme toggle), LevelTabs |
| `client:idle` | No crítico, carga tras paint | Calculators, TokenizerDemo |
| `client:visible` | Fuera de viewport inicial | GpuTour, EmbeddingSpace, BandwidthHighway |
| `client:only="vue"` | Solo cliente, sin SSR (TresJS) | Todos los componentes TresJS |

### Data flow

```
                   ┌──────────────┐
                   │  src/data/   │  ← constantes tipadas
                   │  models.ts   │
                   │  gpus.ts     │
                   └──────┬───────┘
                          │ import
                          ▼
                   ┌──────────────┐
                   │ composables/ │  ← lógica pura
                   │ useVramCalc  │  (funciones, sin Vue)
                   │ useSpeedCalc │
                   └──────┬───────┘
                          │ return reactive refs
                          ▼
                   ┌──────────────┐
                   │ Vue Component│  ← presentación
                   │ VrmCalc.vue  │  (sliders, outputs)
                   └──────────────┘
```

**Regla estricta:** los composables NO importan Vue. Son funciones TypeScript
puras que devuelven objetos. Los componentes Vue los envuelven en `ref()` /
`computed()`.

### Estado compartido entre componentes

Usar **Vue provide/inject** con un símbolo tipado, NO Pinia (para evitar
dependencia extra y porque el estado compartido es mínimo).

```
// shared/types.ts
export const VRAM_STATE_KEY = Symbol('vram-state')
export interface VramState {
  selectedModel: Ref<ModelId>
  selectedPrecision: Ref<PrecisionId>
  contextTokens: Ref<number>
}

// En page layout (provee)
const vramState = { selectedModel, selectedPrecision, contextTokens }
provide(VRAM_STATE_KEY, vramState)

// En VrmCalculator y VrmVisualization (inyectan)
const vramState = inject(VRAM_STATE_KEY)
```

---

## 5. Data Model & Types

### src/data/models.ts

```typescript
export interface ModelSpec {
  id: string
  name: string
  paramsBillions: number     // parámetros reales en B (7 → 6.7)
  paramsExact: number        // 6.7
  dModel?: number
  nLayers?: number
  nHeads?: number
  dFf?: number
  arch: 'dense' | 'moe'
  activeParamsBillions?: number  // para MoE
  models: string[]            // modelos ejemplo: ['LLaMA 3', 'Mistral']
}

export const MODELS: ModelSpec[] = [
  { id: '1b',   name: '1.3B',   paramsBillions: 1.3,  paramsExact: 1.3,
    dModel: 2048, nLayers: 22, nHeads: 16, arch: 'dense',
    models: ['TinyLLaMA', 'Phi-3'] },
  { id: '3b',   name: '3B',     paramsBillions: 3,    paramsExact: 3,
    dModel: 3072, nLayers: 28, nHeads: 24, arch: 'dense',
    models: ['LLaMA 3.2 3B', 'Gemma 2'] },
  { id: '7b',   name: '7B',     paramsBillions: 7,    paramsExact: 6.7,
    dModel: 4096, nLayers: 32, nHeads: 32, dFf: 11008, arch: 'dense',
    models: ['LLaMA 3.1 8B', 'Mistral 7B', 'Qwen 2.5 7B'] },
  { id: '13b',  name: '13B',    paramsBillions: 13,   paramsExact: 12.9,
    dModel: 5120, nLayers: 40, nHeads: 40, arch: 'dense',
    models: ['LLaMA 2 13B'] },
  { id: '34b',  name: '34B',    paramsBillions: 34,   paramsExact: 34,
    dModel: 6144, nLayers: 56, nHeads: 48, arch: 'dense',
    models: ['Yi-34B', 'CodeLLaMA 34B'] },
  { id: '70b',  name: '70B',    paramsBillions: 70,   paramsExact: 70.6,
    dModel: 8192, nLayers: 80, nHeads: 64, dFf: 22016, arch: 'dense',
    models: ['LLaMA 3 70B', 'Qwen 72B'] },
  { id: '405b', name: '405B',   paramsBillions: 405,  paramsExact: 405,
    arch: 'dense', models: ['LLaMA 3.1 405B'] },
  { id: '671b', name: '671B MoE', paramsBillions: 671, paramsExact: 671,
    activeParamsBillions: 37, arch: 'moe',
    models: ['DeepSeek V3', 'DeepSeek R1'] },
]
```

### src/data/gpus.ts

```typescript
export interface GpuSpec {
  id: string
  name: string
  vramGb: number
  bandwidthGbs: number
  busBits: number
  memoryType: string
  tflops: number           // TFLOPS FP16
  price: number            // precio aprox USD
  category: 'consumer' | 'pro' | 'datacenter' | 'apple' | 'cpu'
}

export const GPUS: GpuSpec[] = [
  { id: 'rtx4060',     name: 'RTX 4060',      vramGb: 8,   busBits: 128,
    bandwidthGbs: 272,  memoryType: 'GDDR6',   tflops: 15,  price: 300,
    category: 'consumer' },
  { id: 'rtx4070',     name: 'RTX 4070',      vramGb: 12,  busBits: 192,
    bandwidthGbs: 504,  memoryType: 'GDDR6X',  tflops: 29,  price: 550,
    category: 'consumer' },
  { id: 'rtx4080',     name: 'RTX 4080',      vramGb: 16,  busBits: 256,
    bandwidthGbs: 716,  memoryType: 'GDDR6X',  tflops: 49,  price: 1200,
    category: 'consumer' },
  { id: 'rtx4090',     name: 'RTX 4090',      vramGb: 24,  busBits: 384,
    bandwidthGbs: 1008, memoryType: 'GDDR6X',  tflops: 82,  price: 1600,
    category: 'consumer' },
  { id: 'rtx3090',     name: 'RTX 3090',      vramGb: 24,  busBits: 384,
    bandwidthGbs: 936,  memoryType: 'GDDR6X',  tflops: 36,  price: 1000,
    category: 'consumer' },
  { id: 'a100',        name: 'A100 80GB',     vramGb: 80,  busBits: 5120,
    bandwidthGbs: 2039, memoryType: 'HBM2e',   tflops: 312, price: 15000,
    category: 'datacenter' },
  { id: 'h100',        name: 'H100 80GB',     vramGb: 80,  busBits: 5120,
    bandwidthGbs: 3352, memoryType: 'HBM3',    tflops: 990, price: 30000,
    category: 'datacenter' },
  { id: 'm2ultra',     name: 'M2 Ultra',      vramGb: 192, busBits: 1024,
    bandwidthGbs: 800,  memoryType: 'Unified', tflops: 27,  price: 5000,
    category: 'apple' },
  { id: 'ddr5',        name: 'DDR5-4800',     vramGb: 64,  busBits: 64,
    bandwidthGbs: 38.4, memoryType: 'DDR5',    tflops: 0.5, price: 100,
    category: 'cpu' },
]
```

### src/data/precisions.ts

```typescript
export interface PrecisionSpec {
  id: string
  name: string
  bytesPerParam: number
  qualityVsFp16: number   // 0-100
  label: string           // para UI
}

export const PRECISIONS: PrecisionSpec[] = [
  { id: 'fp32',  name: 'FP32',  bytesPerParam: 4,   qualityVsFp16: 100, label: '4B/param' },
  { id: 'fp16',  name: 'FP16',  bytesPerParam: 2,   qualityVsFp16: 100, label: '2B/param' },
  { id: 'int8',  name: 'INT8',  bytesPerParam: 1,   qualityVsFp16: 99,  label: '1B/param' },
  { id: 'int4',  name: 'INT4',  bytesPerParam: 0.5, qualityVsFp16: 95,  label: '0.5B/param' },
  { id: 'q4km',  name: 'Q4_K_M', bytesPerParam: 0.55, qualityVsFp16: 96, label: '~0.55B/param' },
]
```

### src/data/glossary.ts

```typescript
export interface GlossaryTerm {
  term: string
  short: string       // una línea
  long: string        // un párrafo
  category: string    // 'concepto' | 'hardware' | 'arquitectura' | 'entrenamiento'
}

export const GLOSSARY: GlossaryTerm[] = [
  { term: 'Parámetro', short: 'Un número aprendido por el modelo',
    long: 'Cada parámetro es un peso sináptico que se ajusta durante el entrenamiento...',
    category: 'concepto' },
  // ...
]
```

---

## 6. Design System

### Paleta de colores (tema claro)

```
─── Primario ─────────────────────────────────
  Primary-50:  #eef2ff  (fondo muy claro)
  Primary-100: #e0e7ff
  Primary-500: #6366f1  (indigo — acentos, links, botones)
  Primary-700: #4338ca  (hover states)

─── Neutro ───────────────────────────────────
  Neutral-50:  #fafafa  (fondo página)
  Neutral-100: #f5f5f5  (fondo tarjetas, sidebar)
  Neutral-200: #e5e5e5  (bordes)
  Neutral-700: #404040  (texto secundario)
  Neutral-900: #1a1a1a  (texto principal)

─── Semántico ────────────────────────────────
  Green:  #22c55e  (✅ acierto, VRAM suficiente)
  Yellow: #eab308  (⚠️ warning, VRAM justa)
  Red:    #ef4444  (❌ error, no cabe, alucinación)
  Blue:   #3b82f6  (🔵 token, info)

─── Niveles ──────────────────────────────────
  Beginner:  #22c55e  (🟢 verde)
  Deep:      #eab308  (🟡 amarillo)
  Advanced:  #ef4444  (🔬 rojo)
```

### Paleta de colores (tema oscuro)

Para las escenas 3D (el canvas de Three.js va en oscuro siempre).
El usuario puede elegir tema claro/oscuro para la UI.

```
Dark-50: #18181b    (fondo página oscuro)
Dark-100: #27272a   (fondo tarjetas)
Dark-700: #a1a1aa   (texto secundario oscuro)
Dark-900: #fafafa   (texto principal oscuro)
```

### Tipografía

```
Headings: 'Inter', system-ui, sans-serif  ← (Google Fonts, cargada CDN)
  h1: text-4xl font-bold tracking-tight
  h2: text-2xl font-semibold
  h3: text-xl font-medium

Body: 'Inter', system-ui, sans-serif
  base: text-base leading-relaxed (16px, ~1.75 line-height)
  small: text-sm text-neutral-700

Code: 'JetBrains Mono', 'Fira Code', monospace
  inline: bg-neutral-100 text-primary-700 px-1.5 py-0.5 rounded
  block: Expressive Code plugin
```

### Espaciado

```
Page max-width: 1280px (2xl)
Sidebar: 280px fixed on desktop
Content padding: 8rem (32px) mobile, 12rem (48px) desktop
Section gap: 8rem (32px) entre secciones
Card padding: 6rem (24px) interior
```

### Componentes visuales clave

**LevelTabs.vue:**
```
[ 🟢 PARA EMPEZAR | 🟡 A FONDO | 🔬 AVANZADO ]
  ↓ tab activo con color correspondiente
  ↓ contenido del nivel
```

**InfoBox.vue:**
```
┌─── 💡 ─────────────────────────────────┐
│  Dato clave: la atención ocupa solo    │
│  el 16% de los parámetros.             │
└────────────────────────────────────────┘

┌─── ⚠️ ─────────────────────────────────┐
│  La cuantización introduce pérdida de  │
│  precisión. Evalúa si te compensa.     │
└────────────────────────────────────────┘

┌─── 🔥 ─────────────────────────────────┐
│  Para 128k de contexto, la KV Cache    │
│  ocupa 68.7 GB — más que el modelo.    │
└────────────────────────────────────────┘
```

---

## 7. Interactive Components Specification

### 7.1 VRAM Calculator (`VrmCalculator.vue`)

**Ubicación:** página `/fundamentos`
**Propósito:** Mostrar cuánta VRAM ocupa un modelo según parámetros y precisión.

**Inputs:**
- Model selector (dropdown de `MODELS`)
- Precision selector (dropdown de `PRECISIONS`)
- Context tokens slider (1k → 128k, paso 1k)
- KV Cache precision toggle (FP16 / INT8)

**Outputs (en tiempo real):**
- Pesos del modelo: X.X GB
- KV Cache: X.X GB
- Overhead: X.X GB
- **Total: X.X GB** (destacado)
- ¿Cabe en? → Lista de GPUs con semáforo:
  - 🟢 Cabe holgado (< 70% VRAM)
  - 🟡 Cabe justo (70-95% VRAM)
  - 🔴 No cabe (> 95% VRAM)

**Visual companion (`VrmVisualization.vue` — TresJS):**
- Barras 3D apiladas: pesos (azul) + KV Cache (verde) + overhead (gris)
- La GPU es una caja semitransparente
- Si no cabe, el modelo se desborda de la caja con animación

**Composable:** `useVramCalculator.ts`
```typescript
export function useVramCalculator() {
  const model = ref<ModelSpec>(MODELS[2])     // default 7B
  const precision = ref<PrecisionSpec>(PRECISIONS[3]) // default INT4
  const contextTokens = ref(4096)
  const kvCachePrecision = ref<'fp16' | 'int8'>('fp16')

  const weightsGb = computed(() =>
    model.value.paramsExact * precision.value.bytesPerParam
  )
  const kvCacheGb = computed(() => {
    // KV_Cache = 2 × n_layers × n_heads × d_head × n_tokens × bytes
    // Simplified: 2 × ~0.000256 GB/token × n_tokens (para 7B)
    const sizePerToken = 2 * (model.value.nLayers || 32) *
      (model.value.nHeads || 32) * 128 * (kvCachePrecision.value === 'fp16' ? 2 : 1)
    return (sizePerToken * contextTokens.value) / (1024**3)
  })

  const totalGb = computed(() => weightsGb.value + kvCacheGb.value + 0.3) // overhead

  const compatibleGpus = computed(() =>
    GPUS.map(gpu => ({
      ...gpu,
      status: totalGb.value / gpu.vramGb > 0.95 ? 'no' as const
            : totalGb.value / gpu.vramGb > 0.7 ? 'tight' as const
            : 'ok' as const
    }))
  )

  return { model, precision, contextTokens, kvCachePrecision,
           weightsGb, kvCacheGb, totalGb, compatibleGpus }
}
```

### 7.2 Speed Calculator (`SpeedCalculator.vue`)

**Ubicación:** página `/inferencia`
**Propósito:** Mostrar tokens/s según GPU y modelo.

**Inputs:**
- GPU selector (dropdown de `GPUS`, con filtro: solo GPUs donde cabe el modelo)
- Model selector (dropdown de `MODELS`)
- Precision selector

**Outputs:**
- Velocidad teórica: X.X tokens/s
- Velocidad real (~70% de teórica): X.X tokens/s
- Tiempo para generar 100 tokens: X.X segundos
- Tiempo para generar 500 tokens: X.X segundos
- Barra comparativa con otras configuraciones seleccionables
- Breakdown: "98% del tiempo es mover datos, 2% es calcular"

**Composable:** `useSpeedCalculator.ts`
```typescript
export function useSpeedCalculator() {
  const gpu = ref<GpuSpec>(GPUS[3])   // default RTX 4090
  const model = ref<ModelSpec>(MODELS[2])
  const precision = ref<PrecisionSpec>(PRECISIONS[3])

  const theoreticalTps = computed(() => {
    const weightGb = model.value.paramsExact * precision.value.bytesPerParam
    return gpu.value.bandwidthGbs / weightGb
  })
  const realTps = computed(() => theoreticalTps.value * 0.7)
  const time100 = computed(() => 100 / realTps.value)
  const time500 = computed(() => 500 / realTps.value)
  const isMemoryBound = computed(() => true) // spoiler: siempre lo es

  return { gpu, model, precision, theoreticalTps, realTps, time100, time500 }
}
```

### 7.3 Attention Heatmap (`AttentionHeatmap.vue` — TresJS)

**Ubicación:** página `/arquitectura`
**Propósito:** Visualizar cómo cada token atiende a los demás.

**Inputs:**
- Textarea: el usuario escribe una frase
- Head selector: qué cabeza de atención visualizar (1-32)

**Comportamiento:**
- Al escribir, se simula una matriz de atención
- Grid 2D: filas = queries, columnas = keys
- Color intensity = peso de atención
- Al hacer hover: muestra el par (token_i, token_j) y el score
- Animación: la atención se va refinando (capas tempranas → tardías)

**Implementación en TresJS:**
- `<TresCanvas>` con plano grid
- Cada celda es un `BoxGeometry` escalado en Z según el score
- Colores: mapa térmico (azul frío → rojo caliente)
- `OrbitControls` para rotar

**Composable:** `useAttention.ts`
```typescript
export function useAttention() {
  const text = ref('El gato está sobre la mesa')
  const tokens = computed(() => text.value.split(' '))
  const nTokens = computed(() => tokens.value.length)

  // Simula atención: matriz n×n con valores 0-1
  const attentionMatrix = computed(() => {
    // Patrón diagonal + algunas relaciones semánticas
    const matrix: number[][] = []
    for (let i = 0; i < nTokens.value; i++) {
      matrix[i] = []
      for (let j = 0; j < nTokens.value; j++) {
        let score = j <= i ? Math.random() * 0.3 + 0.1 : 0 // causal mask
        if (i === j) score += 0.4 // self-attention más fuerte
        matrix[i][j] = score
      }
    }
    // Normalizar filas (softmax)
    return matrix.map(row => {
      const sum = row.reduce((a, b) => a + b, 0)
      return row.map(v => v / sum)
    })
  })

  return { text, tokens, attentionMatrix }
}
```

### 7.4 Embedding Space (`EmbeddingSpace.vue` — TresJS)

**Ubicación:** página `/tokenizacion`
**Propósito:** Visualizar el espacio semántico 3D.

**Comportamiento:**
- Escena 3D con puntos flotantes (palabras en el espacio semántico)
- Palabras semánticamente cercanas aparecen agrupadas
- Campo de texto: "Escribe palabras separadas por coma"
- Al escribir "rey, hombre, mujer, reina" → se anima la operación vectorial
- Tooltip al hover sobre un punto muestra la palabra
- OrbitControls para navegar

**Implementación:**
- Datos sintéticos: coordenadas precalculadas para ~100 palabras comunes
- PCA simulado 3D
- `TresFloat` (Drei) para animación de flotación suave
- `Html` (Drei) para tooltips

### 7.5 Autoregressive Loop (`AutoregressiveLoop.vue` — TresJS)

**Ubicación:** página `/inferencia`
**Propósito:** Animación del bucle token a token.

**Comportamiento:**
- Secuencia animada:
  1. Prompt aparece en la izquierda
  2. Una línea recorre el Transformer (caja 3D brillante)
  3. Sale un token por la derecha
  4. El token se añade al prompt
  5. Repetir
- Botones: Play / Pause / Step / Reset
- Contador de tokens generados
- Timer mostrando ms por token

### 7.6 Bandwidth Highway (`BandwidthHighway.vue` — TresJS)

**Ubicación:** página `/hardware`
**Propósito:** Visualizar el bus de memoria como una autopista.

**Comportamiento:**
- Autopista 3D con carriles (128 / 256 / 384 / 512 bits)
- coches = bits que viajan de VRAM a GPU
- Al cambiar de GPU en el selector, cambia el número de carriles y velocidad
- Velocímetro mostrando GB/s
- Animación de coches moviéndose

### 7.7 GPU Tour (`GpuTour.vue` — TresJS)

**Ubicación:** página `/hardware`
**Propósito:** Tour interactivo de la jerarquía GPU.

**Comportamiento:**
- Vista inicial: chip GPU completo
- Click en zonas para hacer zoom:
  - GPC → TPC → SM → CUDA Core / Tensor Core
- En cada nivel, overlay informativo con specs
- Memory hierarchy: registros → L1 → L2 → VRAM como esferas anidadas
- Botón "Auto-tour": cámara recorre automáticamente

### 7.8 Quantization View (`QuantizationView.vue` — Canvas 2D)

**Ubicación:** página `/fundamentos` (dentro de sección de cuantización)

**Comportamiento:**
- Dos grids lado a lado: FP32 (32 casillas) vs INT4 (4 casillas)
- Cada casilla = un bit
- Animación: al cambiar de precisión, las casillas se fusionan
- Degradación de color: FP32 muestra tonos sutiles, INT4 posteriza
- Slider para variar precisión en tiempo real

### 7.9 Tokenizer Demo (`TokenizerDemo.vue`)

**Ubicación:** página `/tokenizacion`
**Propósito:** Tokenización interactiva en vivo.

**Input:** Textarea donde el usuario escribe.

**Output:**
- El texto se colorea: cada token un color pastel diferente
- Al hacer hover sobre un token: popup con ID numérico
- Contador: X tokens | Y caracteres
- Coste estimado (si fuera API): $0.000X
- Botón para comparar español vs inglés (mismo contenido semántico)

### 7.10 Inference Trace (`InferenceTrace.vue`)

**Propósito:** Animación paso a paso de cómo viaja "La capital de Francia es" → "París".

**Comportamiento:**
- Timeline horizontal con pasos:
  1. Tokenización: texto → IDs
  2. Embedding: IDs → vectores
  3-34. 32 capas (animación rápida con zoom en una capa representativa)
  35. LM Head: vectores → logits
  36. Softmax: logits → probabilidades
  37. Sampling: probabilidad → "París"
- Click en un paso para ver detalle
- Botón "Reproducir"

---

## 8. Content Strategy (MDX)

### Frontmatter de cada página MDX

```yaml
---
title: Fundamentos — Parámetros y Memoria
description: Cómo se miden los modelos, cuánto ocupan según precisión
order: 2
hasCalculator: true           # si la página tiene calculadora asociada
components:                   # Vue components que importa esta página
  - VrmCalculator
  - QuantizationView
---
```

### Estructura MDX de una página tipo

```mdx
import { VrmCalculator } from '../components/interactive/VrmCalculator.vue'
import { QuantizationView } from '../components/interactive/QuantizationView.vue'
import { LevelTabs } from '../components/content/LevelTabs.vue'
import { InfoBox } from '../components/content/InfoBox.vue'

## Parámetros

<LevelTabs client:load>
  <Fragment slot="beginner">

### 🟢 Para empezar

Un **parámetro** es un número que el modelo aprendió durante el entrenamiento...

  </Fragment>
  <Fragment slot="deep">

### 🟡 A fondo

| Componente | Parámetros | % |
|-----------|-----------|---|
| Attention | ~1.1B | 16% |
...

  </Fragment>
  <Fragment slot="advanced">

### 🔬 Avanzado

**Fórmula de total de parámetros:**
$$ Total = vocab × d_model + Σ(4×d_model² + 3×d_model×d_ff) $$

  </Fragment>
</LevelTabs>

## Calculadora VRAM

<InfoBox type="tip">
  Mueve los sliders para ver cómo cambia el tamaño del modelo en VRAM.
</InfoBox>

<VrmCalculator client:idle />
```

### Reglas de contenido

1. Cada concepto **empieza con 🟢**, incluso si el usuario viene de otra página
2. Cajas de información (💡 ⚠️ 🔥) no más de 2 por página visible
3. Código en línea con `` `backticks` ``
4. Código bloque con `expressive-code` (lenguaje especificado)
5. Enlaces internos con Astro `<Link>` o markdown `[texto](/ruta)`

---

## 9. Build & Deploy

### astro.config.mjs

```javascript
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import expressiveCode from 'astro-expressive-code'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://llm.javierpenate.com',
  output: 'static',
  integrations: [
    vue(),
    mdx(),
    tailwind(),
    expressiveCode(),
    sitemap(),
  ],
  vite: {
    ssr: {
      noExternal: ['@tresjs/core', '@tresjs/drei', 'three'],
    },
  },
})
```

### Despliegue en Coolify

```
Tipo: Static Site
Build Pack: nixpacks
Build Command: npm install && npm run build
Publish Directory: dist
Port: N/A (static)
Domains: llm.javierpenate.com

Variables de Entorno: (ninguna, es estático)
```

### Dockerfile (alternativa para Coolify)

```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf

```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;
    location / {
        try_files $uri $uri/ /404.html;
    }
    location ~* \.(js|css|png|jpg|webp|svg|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### CI (GitHub Actions opcional)

```yaml
# .github/workflows/deploy.yml
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci && npm run build
      - run: |    # Deploy a Coolify via webhook
          curl -X POST ${{ secrets.COOLIFY_DEPLOY_WEBHOOK }}
```

---

## 10. Implementation Phases

### Fase 0 — Setup del proyecto (1 día)

- [ ] `npm create astro@latest llm -- --template basics`
- [ ] Añadir integraciones: vue, mdx, tailwind, expressive-code, sitemap
- [ ] Instalar dependencias: `@tresjs/core`, `@tresjs/drei`, `three`
- [ ] Configurar tsconfig (strict mode, paths alias `@/` → `src/`)
- [ ] Configurar Tailwind (paleta de colores, fonts)
- [ ] Crear `src/consts.ts` con SITE_URL, SITE_TITLE
- [ ] Crear `src/data/models.ts`, `gpus.ts`, `precisions.ts`, `glossary.ts`
- [ ] Crear `src/env.d.ts`
- [ ] Git init + primer commit
- [ ] Deploy inicial a Coolify (página blanca con Hola Mundo)

### Fase 1 — Layout base + Páginas estáticas (2 días)

- [ ] `BaseLayout.astro` (head, meta, Google Fonts, CSS vars)
- [ ] `DocLayout.astro` (Header + Sidebar + Footer)
- [ ] `Header.astro` (logo, nav, theme toggle skeleton)
- [ ] `Sidebar.astro` (índice con scroll spy)
- [ ] `Footer.astro`
- [ ] `LevelTabs.vue` (componente de pestañas 🟢🟡🔬)
- [ ] `InfoBox.vue` (💡 ⚠️ 🔥)
- [ ] Landing page (`index.astro`) con hero y resumen
- [ ] Páginas estáticas (fundamentos, hardware, arquitectura, inferencia, tokenizacion, entrenamiento, glosario)
  - Contenido del project.md volcado en MDX
  - Sin componentes interactivos aún (solo texto + tabs)

### Fase 2 — UI Kit (1 día)

- [ ] `Button.vue` (variantes: primary, secondary, ghost)
- [ ] `Slider.vue` (input range estilizado con tooltip)
- [ ] `Select.vue` (dropdown con búsqueda)
- [ ] `Toggle.vue`
- [ ] `Tooltip.vue`
- [ ] `MathBlock.vue` (KaTeX)

### Fase 3 — Calculadoras 2D (2 días)

- [ ] `useVramCalculator.ts` (composable)
- [ ] `VrmCalculator.vue` (interfaz)
- [ ] `useSpeedCalculator.ts`
- [ ] `SpeedCalculator.vue`
- [ ] `TokenizerDemo.vue`
- [ ] Conectar calculadoras a sus páginas correspondientes
- [ ] Tests manuales: cada slider produce outputs correctos

### Fase 4 — Escenas 3D prioritarias (3 días)

- [ ] `VrmVisualization.vue` (barras 3D VRAM)
- [ ] `AttentionHeatmap.vue` (grid 3D)
- [ ] `EmbeddingSpace.vue` (puntos 3D)
- [ ] `AutoregressiveLoop.vue` (animación bucle)
- [ ] `BandwidthHighway.vue` (autopista de bits)

### Fase 5 — Escenas 3D avanzadas (2 días)

- [ ] `GpuTour.vue` (tour GPU)
- [ ] `MemoryHierarchy.vue` (pirámide)
- [ ] `NeuronActivations.vue` (FFN explorer)
- [ ] `InferenceTrace.vue`

### Fase 6 — Pulido (2 días)

- [ ] Responsive design (mobile: sidebar colapsable, todo vertical)
- [ ] Tema claro/oscuro (Toggle persistente en localStorage)
- [ ] Animaciones de entrada (fade-in en scroll, Intersection Observer)
- [ ] SEO (meta tags, open graph, sitemap)
- [ ] 404 personalizada
- [ ] Performance audit (Lighthouse: >90 en todas)
- [ ] Carga lazy de componentes TresJS (no bloquear LCP)

### Fase 7 — Deploy definitivo (1 día)

- [ ] Dockerfile + nginx.conf
- [ ] Coolify: crear proyecto, configurar dominio, SSL
- [ ] DNS: llm.javierpenate.com → Coolify
- [ ] Verificar deploy, probar todo en producción

**Total estimado: ~12-14 días de trabajo efectivo**

---

## 11. Quality Gates

Cada fase completada debe pasar estos gates antes de avanzar:

```
🧪 BUILD
  □ npm run build → sin errores, sin warnings
  □ npm run astro check → sin errores de tipos

📱 RESPONSIVE
  □ 375px (mobile): todo legible, sidebar colapsado
  □ 768px (tablet): layout fluye correctamente
  □ 1280px (desktop): layout completo

⚡ PERFORMANCE
  □ Lighthouse: Performance ≥ 90
  □ Lighthouse: Accessibility ≥ 95
  □ Total JS bundle < 200KB (sin Three.js bundles)
  □ TresJS componentes cargan con client:visible (no bloquean)

🔗 LINKS
  □ No broken links internos
  □ Sitemap generado correctamente

🎨 CONSISTENCIA
  □ Misma paleta de colores en toda la web
  □ Misma tipografía
  □ Navegación coherente (mismo header/sidebar en todas las páginas)
```

---

*Spec v1.1 — Hermes — Junio 2026*

---

## 12. Sistema de Noticias LLM

Un sistema de noticias curadas que convierte el sitio en un destino recurrente. Las noticias son generadas por un cron diario, filtradas por un agente, y publicadas manualmente por el editor (Javier).

### 12.1 Fuentes seleccionadas

| Fuente | URL | Tipo | Por qué |
|--------|-----|------|---------|
| **Import AI** (Jack Clark) | https://importai.substack.com | Newsletter semanal | Referencia del sector — análisis profundo de tendencias |
| **The Decoder** | https://the-decoder.com | Medio digital | Cobertura técnica exhaustiva en inglés/alemán |
| **Simon Willison's blog** | https://simonwillison.net | Blog personal | Referente en LLMs prácticos, tool use, seguridad |
| **Interconnects** (Nathan Lambert) | https://interconnects.ai | Newsletter/Substack | ML research desde dentro (ex-Tesla, ex-HF, ahora Ai2) |
| **Sebastian Raschka's newsletter** | https://sebastianraschka.com/blog | Newsletter | Lo mejor en investigación aplicada (LoRA, fine-tuning) |
| **Ars Technica — AI** | https://arstechnica.com/ai | Medio digital | Periodismo técnico de calidad, riguroso |

**Fuentes secundarias** (consultadas si las principales no dan suficiente contenido):
- HuggingFace Blog (https://huggingface.co/blog)
- NVIDIA Technical Blog (https://developer.nvidia.com/blog)
- Llama / DeepSeek / Mistral release notes
- ArXiv — papers trending en ML (cs.CL, cs.LG)

### 12.2 Flujo de trabajo (auto-publicación diaria)

```
Cron diario (08:00 UTC)
  ─► 1. Walker: visita fuentes, extrae titulares y enlaces
  ─► 2. Filter: evalúa relevancia para LLM site
  ─► 3. Publish: si hay noticia relevante, escribe directamente en published/
  ─► 4. Overflow: si hay varias, las mejores van a pending/
  ─► 5. Skip: si nada es relevante, no publica nada
  ─► 6. Notify: envía resumen a Telegram "📰 Publicada: ..." o "📭 Nada relevante"
```

**Regla de oro:** Una noticia por día, solo si es relevante. Mejor ninguna que una inventada o de relleno.

### 12.3 Estructura de archivos

```
noticias/
├── pending/
│   └── YYYY-MM-DD-slug.md           ← Borrador generado por el cron
└── published/
    ├── index.md                       ← Lista completa de publicadas
    ├── YYYY-MM-DD-slug.md            ← Noticia publicada
    └── YYYY-MM-DD-slug.md
```

### 12.4 Formato de cada noticia

```yaml
---
title: "NVIDIA lanza Nemotron-340B"
date: 2026-06-27
source: "The Decoder"
source_url: "https://the-decoder.com/..."
category: "modelos"         # modelos | hardware | investigación | industria | herramientas
summary: "Nvidia ha presentado Nemotron-340B, un modelo abierto que..."
reading_time: "3 min"
tags: [nvidia, nemotron, modelos-abiertos, 2026]
---

Cuerpo de la noticia en markdown. 2-3 párrafos como máximo.
```

### 12.5 Criterios de relevancia (para el agente que filtra)

Una noticia es relevante si cumple AL MENOS UNO de:

- **Nuevo modelo abierto** (Llama, Mistral, DeepSeek, Qwen, etc.)
- **Hardware nuevo para inferencia/entrenamiento** (GPU, NPU, accelerators)
- **Técnica nueva de inferencia** (cuantización, speculative decoding, KV cache)
- **Investigación aplicada** (fine-tuning, RAG, tool use, agents)
- **Seguridad / alignment** (jailbreaks, red teaming, regulación)
- **Local AI** (modelos que se puedan ejecutar en casa, gguf, ollama)

NO relevante (se descarta directamente):
- Rumores sin fuente contrastada
- Política de IA general (regulación UE, etc. — salvo que sea muy relevante)
- Noticias de empresas que no aporten detalle técnico
- Opiniones sin datos

### 12.6 Página /noticias

Ruta: `src/pages/noticias.astro`

- Lista cronológica inversa (más reciente arriba)
- Cada entrada: título, fecha, fuente, categoría, extracto, enlace
- Paginación: 10 noticias por página
- Misma apariencia que el resto del sitio (DocLayout heredado)
- Sidebar con filtro por categoría (opcional, v2)

### 12.7 Sección en la home

En `src/pages/index.astro`, añadir después de las cards:

```astro
<section id="ultimas-noticias">
  <h2>📰 Últimas noticias</h2>
  <div class="grid">
    <!-- Lista de las 3 noticias más recientes de published/index.md -->
    <!-- Cada una: título, fecha, extracto, categoría -->
  </div>
  <a href="/noticias">Ver todas →</a>
</section>
```

### 12.8 Cron job (Hermes Agent)

```bash
# Se ejecuta diariamente a las 08:00 UTC
# Busca en las 6 fuentes principales + secundarias
# Si encuentra noticia relevante → publica directo en published/
# Skills: web (búsqueda), file (escritura), terminal
# Workdir: /opt/data/LLM

hermes cron create \
  --schedule "0 8 * * *" \
  --prompt "Busca en las fuentes principales (Import AI, The Decoder, Simon Willison, Interconnects, Sebastian Raschka, Ars Technica AI) noticias sobre LLMs. Filtra por relevancia. Si hay una noticia relevante, publícala directamente en noticias/published/. Si no hay nada relevante, no publiques nada." \
  --workdir /opt/data/LLM \
  --skills web \
  --enabled-toolsets web,file,terminal
```

### 12.9 Comandos de gestión

```bash
# El cron publica automáticamente. pending/ solo se usa para desbordamiento.

# Revisar si hay desbordamiento (noticias extra que no se publicaron)
ls noticias/pending/

# Publicar un desbordamiento manualmente
mv noticias/pending/YYYY-MM-DD-slug.md noticias/published/

# Forzar un rebuild y deploy tras publicar manualmente
cd /opt/data/LLM && npm run build && docker cp dist/. $(docker ps --filter "name=llm" --format '{{.Names}}'):/usr/share/nginx/html/

# Ver las últimas publicadas
ls -t noticias/published/*.md | head -5

# Borrar pendiente (no relevante)
rm noticias/pending/YYYY-MM-DD-slug.md
```

