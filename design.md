# 🎨 Design System — LLM Site

> Sistema de diseño para **Anatomía de un LLM** (llm.javierpenate.com)
> Versión 1.0 — Junio 2026

---

## 1. Filosofía

El diseño refleja el contenido: **preciso, sin ruido, accesible**.

- **Técnico pero acogedor** — el sitio explica conceptos complejos; el diseño no debe intimidar
- **Consistente sobre creativo** — patrones repetibles que el usuario aprende a reconocer
- **Mobile-first** — todo debe funcionar en 375px antes de verse en 1280px
- **Rendimiento** — mínima JS, máxima legibilidad

---

## 2. Paleta de colores

### 2.1 Colores del sistema

| Token | Hex | Uso | Tailwind |
|-------|-----|-----|----------|
| Primary 50 | `#eef2ff` | Fondos suaves de acento | `bg-primary-50` |
| Primary 100 | `#e0e7ff` | Bordes suaves | `border-primary-100` |
| Primary 200 | `#c7d2fe` | Bordes hover | `border-primary-200` |
| Primary 300 | `#a5b4fc` | — | |
| Primary 400 | `#818cf8` | — | |
| Primary 500 | `#6366f1` | Acento principal | `text-primary-500` |
| Primary 600 | `#4f46e5` | Botones, links, iconos activos | `bg-primary-600`, `text-primary-600` |
| Primary 700 | `#4338ca` | Hover de botones | `hover:bg-primary-700` |
| Primary 800+ | `#3730a3`... | Solo texto oscuro sobre fondos claros | |

### 2.2 Neutros

Usar la escala neutral de Tailwind. La paleta completa:

| Nivel | Uso |
|-------|-----|
| `neutral-900` | Títulos (h1, h2, h3) |
| `neutral-800` | Subtítulos, etiquetas semibold |
| `neutral-700` | Cuerpo de texto |
| `neutral-600` | Texto secundario, descripciones |
| `neutral-500` | Metadatos, timestamps, breadcrumbs |
| `neutral-400` | Placeholder, texto deshabilitado |
| `neutral-300` | Divisores suaves |
| `neutral-200` | Bordes de tarjetas, separadores |
| `neutral-100` | Fondos de sección alternativos |
| `neutral-50` | Fondos de cards suaves |

### 2.3 Colores semánticos (info boxes, alerts)

| Contexto | Fondo | Borde | Texto |
|----------|-------|-------|-------|
| 💡 Información | `bg-blue-50` | `border-blue-200` | `text-blue-800` |
| ⚠️ Advertencia | `bg-yellow-50` | `border-yellow-200` | `text-yellow-800` |
| ✅ Éxito | `bg-green-50` | `border-green-200` | `text-green-800` |
| 🔴 Crítico/Error | `bg-red-50` | `border-red-200` | `text-red-800` |
| 🏗️ Indigo (conceptos) | `bg-indigo-50` | `border-indigo-200` | `text-indigo-800` |

### 2.4 Niveles de dificultad (LevelTabs)

| Nivel | Hex | Clase | Emoji |
|-------|-----|-------|-------|
| Beginner | `#22c55e` (green-500) | `text-beginner`, `border-beginner` | 🟢 |
| Deep | `#eab308` (yellow-500) | `text-deep`, `border-deep` | 🟡 |
| Advanced | `#ef4444` (red-500) | `text-advanced`, `border-advanced` | 🔬 |

> ⚠️ Los nombres de los tokens de nivel en `tailwind.config.mjs` son: `beginner`, `deep`, `advanced`. NO usar `begin` — está deprecado.

### 2.5 SVG embebidos

Los SVG en componentes (HardwareDiagram, ModelJourney, ClockCycleDemo) deben usar **colores del sistema**. No hardcodear colores hex — usar variables CSS o clases de Tailwind inline.

---

## 3. Tipografía

### 3.1 Familias

```css
/* Definidas en global.css */
font-family: {
  sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'];
  mono: ['JetBrains Mono', 'Fira Code', 'monospace'];
}
```

### 3.2 Jerarquía

| Elemento | Clases | Notas |
|----------|--------|-------|
| Hero h1 | `text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight` | Solo en home |
| Page h1 | `text-3xl font-bold text-neutral-900 mb-2` | Primera línea de cada página |
| Section h2 | `text-2xl font-bold text-neutral-900 mb-2` | Cada `<h2>` de sección |
| Sub-section h3 | `text-lg font-semibold text-neutral-900 mb-3` | Dentro de una sección |
| Sub-sub h4 | `text-md font-semibold text-neutral-900 mb-2` | |
| Body | `text-neutral-700 leading-relaxed` | Párrafos normales |
| Body small | `text-sm ...` o `text-xs ...` | Metadatos, notas al pie |
| Code inline | `font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded` | Para `código` en línea |
| Code block | `pre p-4 bg-neutral-900 text-neutral-100 rounded-xl text-xs overflow-x-auto` | Bloques de código |

### 3.3 Márgenes de texto

| Contexto | Margen |
|----------|--------|
| h1 → siguiente elemento | `mb-2` |
| h2 → siguiente elemento | `mb-2` (secciones), `mb-4` (si lleva subtítulo) |
| h3 → siguiente elemento | `mb-3` |
| Párrafo → siguiente párrafo | `mb-4` |
| Último elemento de una sección | `mb-0` (el `content-section` da el margen inferior) |

---

## 4. Espaciado

### 4.1 Layout general

```
Container max-width: 1280px (clase max-w-page)
  ├── px-4 (mobile) → sm:px-6 → lg:px-8
  ├── Separación entre secciones: py-16
  └── Separación entre elementos de sección: mb-6
```

### 4.2 Componentes

| Componente | Padding interno | Margen inferior |
|------------|----------------|-----------------|
| Card normal | `p-4` o `p-5` | `mb-4` |
| Card destacada | `p-6` | `mb-6` |
| Info box | `p-4` | `mb-4` |
| Code block | `p-4` | `mb-4` |
| Tabla | dentro de `overflow-x-auto` | `mb-4` |

### 4.3 Grid

Cards (homepage, listas):
```astro
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
```

Dos columnas lado a lado:
```astro
<div class="grid md:grid-cols-2 gap-4">
```

---

## 5. Componentes visuales

### 5.1 Cards

```html
<div class="p-4 sm:p-5 bg-white border border-neutral-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
```

- **Fondo:** `bg-white`
- **Borde:** `border border-neutral-200`
- **Sombra:** `shadow-sm` (reposo), `hover:shadow-md` (hover)
- **Radius:** `rounded-xl`
- **Padding:** `p-4 sm:p-5`

### 5.2 Info boxes

```html
<div class="p-4 bg-{color}-50 border border-{color}-200 rounded-xl">
  <p class="text-sm text-{color}-800">...</p>
</div>
```

Donde `{color}` es uno de: `blue`, `yellow`, `green`, `red`, `indigo`, `amber`, `purple`.

### 5.3 Tablas

```html
<div class="overflow-x-auto mb-4 -mx-4 sm:mx-0">
  <table class="w-full text-sm">
    <thead>
      <tr class="bg-neutral-100">
        <th class="px-3 py-2 text-left font-medium text-neutral-700">Columna</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-neutral-200">
      <tr class="even:bg-neutral-50 hover:bg-neutral-100 transition-colors">
        <td class="px-3 py-2">Dato</td>
      </tr>
    </tbody>
  </table>
</div>
```

- **Header:** `bg-neutral-100` con `font-medium text-neutral-700`
- **Filas:** `even:bg-neutral-50` para alternancia, `hover:bg-neutral-100` para hover
- **Divisores:** `divide-y divide-neutral-200`
- **Responsive:** `overflow-x-auto -mx-4 sm:mx-0` (scroll horizontal en mobile)
- **Anchura mínima:** `min-w-[600px]` en `<table>` cuando hay 4+ columnas

### 5.4 Botones

**Primario:**
```html
<button class="px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-xl hover:bg-primary-700 transition-colors">
```

**Secundario:**
```html
<button class="px-4 py-2 bg-white text-neutral-700 text-sm font-semibold rounded-xl border border-neutral-300 hover:border-primary-300 hover:text-primary-600 transition-colors">
```

**Ghost:**
```html
<button class="px-3 py-2 text-neutral-500 text-sm font-medium rounded-lg hover:bg-neutral-100 transition-colors">
```

### 5.5 LevelTabs (pestañas de dificultad)

```html
<div class="level-tabs mb-6">
  <div class="flex gap-1 border-b border-neutral-200 mb-4">
    <button data-tab="beginner" data-active="true" class="tab-btn px-4 py-2 text-sm ...">🟢 Para empezar</button>
    <button data-tab="deep" data-active="false" class="tab-btn px-4 py-2 text-sm ...">🟡 A fondo</button>
    <button data-tab="advanced" data-active="false" class="tab-btn px-4 py-2 text-sm ...">🔬 Avanzado</button>
  </div>
</div>
```

- Pestaña activa: `data-[active=true]:border-current data-[active=true]:bg-neutral-50`
- Pestaña inactiva: `data-[active=false]:text-neutral-500 hover:text-neutral-700 data-[active=false]:border-transparent`
- El color del borde activo se hereda del acento semántico (verde/amarillo/rojo)

### 5.6 Bloques de código

```html
<pre class="p-4 bg-neutral-900 text-neutral-100 rounded-xl text-xs overflow-x-auto">
  <code>...</code>
</pre>
```

- **Sombra:** `shadow-sm` (para bloques que lo necesiten)

### 5.7 Enlaces

```html
<a class="text-primary-600 hover:text-primary-700 underline underline-offset-2">
```

Los enlaces en navegación (header, sidebar):
```html
<a class="px-3 py-2 rounded-lg text-sm font-medium transition-colors">
```
- Activo: `bg-primary-50 text-primary-700`
- Inactivo: `text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50`

---

## 6. Sombras

| Nivel | Clase | Uso |
|-------|-------|-----|
| Card reposo | `shadow-sm` | Todas las tarjetas, info boxes, tablas |
| Card hover | `shadow-md` | Al pasar el ratón sobre elementos interactivos |
| CTA hero | `shadow-lg shadow-primary-200` | Botón principal en la home |
| Modales | `shadow-xl` | (futuro) |

Todas las cards usan `transition-shadow` para animar suavemente.

---

## 7. Border radius

| Nivel | Clase | Valor | Uso |
|-------|-------|-------|-----|
| Contenedores | `rounded-xl` | 12px | Cards, info boxes, tablas, bloques de código, botones principales |
| Elementos pequeños | `rounded-lg` | 8px | Badges, tags, botones secundarios, inputs |
| Extra grande | `rounded-2xl` | 16px | Solo en hero de home y secciones destacadas especiales |

NO usar `rounded-sm`, `rounded`, `rounded-md` a menos que haya una razón muy específica.

---

## 8. Gradientes

Usar gradientes solo para **secciones destacadas**:

```css
/* Home hero */
bg-gradient-to-br from-primary-50 via-white to-blue-50

/* Resumen / conclusión */
bg-gradient-to-br from-neutral-50 to-neutral-100

/* Timeline histórico */
bg-gradient-to-br from-indigo-50 to-purple-50
```

No añadir gradientes a elementos comunes (cards, info boxes, tablas).

---

## 9. Layout de página

### 9.1 Esquema

```
┌──────────────────────────────────────┐
│  Header (sticky, 64px)               │
│  Logo + nav links                     │
├──────────────┬───────────────────────┤
│  Sidebar     │  Main content          │
│  (sticky,    │  max-width: 768px      │
│   hidden en  │  (dentro del container) │
│   móvil)     │                        │
│              │  ← h1 page title       │
│  ■ Sección 1 │  ← section h2         │
│  ■ Sección 2 │    ← LevelTabs        │
│  ■ Sección 3 │    ← contenido         │
└──────────────┴───────────────────────┘
```

### 9.2 Responsive

- **< 768px (mobile):** Sidebar oculto. Contenido a ancho completo. Navegación con menú hamburguesa.
- **768-1024px (tablet):** Layout fluye en una columna.
- **> 1024px (desktop):** Sidebar visible sticky + contenido centrado.

---

## 10. Iconos y emojis

No usar iconos SVG personalizados. Usar emojis Unicode para todo:

| Concepto | Emoji |
|----------|-------|
| Hardware | 🔌 |
| Modelos/Fundamentos | 🧠 |
| Arquitectura | 🏗️ |
| Inferencia | ⚡ |
| Tokenización | 🔤 |
| Entrenamiento | 📚 |
| Glosario | 📖 |
| Noticias | 📰 |
| Historia/Evolución | 🕰️ |
| GPU/Chip | 🔲 |
| VRAM/Memoria | 💾 |
| Bus/Datos | 🚛 |
| Advertencia | ⚠️ |
| Información | 💡 |
| Conclusión | 🚀 |
| Éxito | ✅ |
| Error | ❌ |

---

## 11. Patrones de página

### 11.1 Página de contenido estándar

```astro
---
import DocLayout from '@layouts/DocLayout.astro'
import LevelTabs from '@components/content/LevelTabs.astro'
---

<DocLayout
  title="Título"
  description="Descripción"
  currentPath="/ruta"
  :sections={[
    { id: 'seccion1', label: 'Sección 1', level: 'beginner' },
    { id: 'seccion2', label: 'Sección 2', level: 'deep' },
  ]}
>
  <h1 class="text-3xl font-bold text-neutral-900 mb-2">📚 Título página</h1>
  <p class="text-lg text-neutral-600 mb-8">Descripción de la página...</p>

  <section id="seccion1" class="content-section">
    <LevelTabs>
      <Fragment slot="beginner">...</Fragment>
      <Fragment slot="deep">...</Fragment>
      <Fragment slot="advanced">...</Fragment>
    </LevelTabs>
  </section>
</DocLayout>
```

### 11.2 Sección interactiva (sin LevelTabs)

Para demos, calculadoras, diagramas:

```astro
<section id="demo" class="content-section">
  <h2 class="text-2xl font-bold text-neutral-900 mb-2">🚀 Demo</h2>
  <p class="text-neutral-600 mb-6">Descripción...</p>
  <ComponenteDemo />
</section>
```

---

## 12. Buenas prácticas

1. **No hardcodear colores hex** en componentes. Usar clases de Tailwind: `bg-primary-600`, `text-neutral-700`.
2. **No inventar nuevas variantes de color** sin añadirlas primero al `tailwind.config.mjs`.
3. **Una sola fuente de verdad:** los cambios visuales se hacen en `global.css` o `tailwind.config.mjs`, no en páginas individuales.
4. **Mobile first:** diseñar para 375px primero, luego añadir `sm:`, `md:`, `lg:`.
5. **Tablas responsivas:** siempre con `overflow-x-auto -mx-4 sm:mx-0` y `min-w-[XXXpx]` en la tabla.
6. **Cards interactivas:** usar `transition-shadow` para hover suave.
7. **LevelTabs consistentes:** siempre que una sección tenga niveles, usar el componente `LevelTabs` — no improvisar.
8. **InfoBox:** usar el patrón `bg-{color}-50 border-{color}-200 rounded-xl` — nunca crear variantes nuevas.
9. **SVGs:** usar colores del sistema (o clases Tailwind inline en elementos SVG), nunca valores hex hardcodeados.
10. **No reinventar:** si existe un patrón en Design.md, usarlo. Si no existe, crearlo aquí primero.

---

> Design v1.0 — Hermes — Junio 2026
> Próxima revisión: cuando se añada dark mode o un nuevo componente visual
