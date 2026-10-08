---
title: "Mistral Large 4 «Le Chonk»: el modelo open-weight de 1 billón de parámetros entrenado en Europa con 3.800 Grace Blackwell"
date: 2026-10-08
source: "Mistral AI / Ars Technica (WIRED) / CNBC"
source_url: "https://mistral.ai/news/mistral-large-4/"
category: "modelos"
summary: "Mistral presenta Le Chonk: MoE multimodal de 1T parámetros (52B activos) entrenado desde cero en datacenters europeos. API ya disponible; pesos abiertos a finales de octubre."
reading_time: "4 min"
tags: [mistral, le-chonk, mistral-large-4, open-weight, moe, europa, multimodal, sovereign-ai]
---

El **6 de octubre**, Mistral AI presentó **Mistral Large 4** —apodado internamente **«Le Chonk»**—, su modelo más grande hasta la fecha y un intento deliberado de demostrar que Europa puede competir en la liga de los modelos frontier sin cerrar sus pesos. El nombre no es casualidad: con **1 billón de parámetros** (1T, notación anglosajona), este MoE *granular* es, con diferencia, el modelo abierto más grande jamás entrenado fuera de China.

## Qué es Le Chonk

Mistral Large 4 es un **MoE híbrido instruct-and-reasoning con entrada multimodal nativa** (texto, imagen, audio y código). Sus especificaciones, según la documentación oficial y la propia nota de Mistral:

| Característica | Mistral Large 4 (Le Chonk) |
|---|---|
| Parámetros totales | **1 billón (1T)** |
| Parámetros activos por token | **~52B** (≈5% de los pesos) |
| Arquitectura | MoE granular, híbrido instruct + reasoning |
| Contexto | Ventana extensa (preparado para 1M tokens) |
| Modalidades | Texto, imagen, audio, código (nativo) |
| Idiomas | 160+ idiomas, incluidos todos los oficiales de la UE |
| Entrenamiento | Desde cero en **3.800 NVIDIA Grace Blackwell** (datacenters propios en Europa) |
| Peso del modelo | ~1 billón de parámetros en memoria (el cómputo activo es ~52B) |
| Disponibilidad | **API preview ya activa**; pesos abiertos **a finales de octubre** (Reuters apunta al 27 de octubre) |

El truco de los MoE explica por qué un modelo de 1T parámetros puede servirse a precio contenido: por cada token solo se activan unos **52 mil millones** de parámetros (≈5%). El coste de inferencia se parece al de un modelo de 50B, pero los 1T completos deben residir en memoria — el parámetro activo fija el cómputo, no la factura de hardware.

## Entrenado en Europa, con soberanía como argumento

Mistral insiste en el ángulo geopolítico, y con razones: entrenó Le Chonk **desde cero** —afirma que no usó destilación de modelos cerrados— en **3.800 GPUs Grace Blackwell** de Nvidia, repartidas en sus propios datacenters europeos, con una parte significativa de datos de entrenamiento multilingüe. El modelo se sirve desde esa misma infraestructura, y Mistral promete un despliegue europeo gestionado de extremo a extremo bajo ley europea.

El argumento comercial es directo: en ciberseguridad, finanzas, manufactura e ingeniería eléctrica, las negativas de los proveedores cloud estadounidenses pueden bloquear investigación legítima de vulnerabilidades. Un modelo open-weight con self-hosting elimina esa dependencia. Mistral afirma que Le Chonk es **state-of-the-art entre modelos abiertos** en esos verticales críticos, y que en tareas de *visual grounding* supera incluso a modelos frontier cerrados.

## Cifras y benchmarks

- **AutomationBench** (657 flujos de trabajo de negocio sobre Gmail, Sheets, Slack, Salesforce): **59,9%**, por delante de Kimi K3, MiMo-V2.6-Pro y DeepSeek V4 Pro.
- **Artificial Analysis Cyber Index**: entre los **5 mejores del mundo**, y líder por amplio margen entre los open-weight desarrollados fuera de China.
- **SciCode-Verified**: state-of-the-art entre modelos open-weight; genera una simulación Hartree–Fock completa en un solo disparo.
- Evaluación interna con expertos frente a **GLM-5.3** (el open-weight chino de referencia): preferido en CAD y STEM, en paridad en finanzas y código.

## El contexto: la carrera de los open-weight europeos

Le Chonk llega en un momento donde la categoría de «modelo abierto fronterizo» se ha vuelto seria. La comparativa con los grandes MoE abiertos actuales:

| Modelo | Parámetros totales | Activos | Origen |
|---|---|---|---|
| **Mistral Large 4** | **1T** | **~52B** | 🇪🇺 Europa |
| DeepSeek V4 Pro | 1,6T | 49B | 🇨🇳 China |
| Qwen3.8-Max | 2,8T | ~104B | 🇨🇳 China |
| Kimi K3 | 2,8T | — | 🇨🇳 China |

La diferencia no es solo de parámetros: Mistral busca posicionarse como la **alternativa soberana** a los modelos chinos abiertos y a los frontier cerrados estadounidenses, en un contexto de tensiones comerciales y regulatorias crecientes entre EE.UU. y sus aliados europeos.

El lanzamiento se produce además poco después de que Mistral cerrara su **ronda Serie D de 3.000 millones de euros** —la mayor ronda de capital jamás levantada por una empresa tecnológica europea—, dinero que ya se está invirtiendo en ampliar la capacidad de cómputo en sus datacenters continentales. Le Chonk es, según propia admisión, «el primer hito del roadmap financiado por esa ronda».

## Lo que hay que vigilar

Dos cautelas antes de declarar vencedora a Europa:

1. **Los benchmarks autoreportados mienten (a veces).** Las comparativas de Mistral son internas; los evaluadores independientes aún no han publicado sus propias corridas. El salto de «competitivo con los mejores open-source» a «igual que los frontier cerrados» es grande, y las notas de prensa suelen quedarse en el primer escalón.
2. **La ventana de preview tiene letra pequeña.** Hasta finales de mes, el acceso real es vía API de Mistral Studio, y una variante con «moderación reducida y capacidades cyber ampliadas» se ofrece a socios ciberseguridad y autoridades estatales — un recordatorio de que los modelos cyber-capaces siguen siendo materia sensible, como ya vimos con [[2026-09-03-openai-astra-modelo-peligroso-capacidades-ciberseguridad|Astra de OpenAI]] y [[2026-08-15-zhipu-glm-5-3-modelo-open-weights-codigo-seguridad|GLM-5.3 de Zhipu]].

Cuando los pesos caigan (previsto para el **27 de octubre**), la comunidad podrá validar por fin las afirmaciones de Mistral con benchmarks reproducibles. Hasta entonces, Le Chonk es una promesa ambiciosa —y bien documentada— de que la soberanía europea en IA ya no es solo un eslogan, sino un modelo de 1 billón de parámetros que puedes (próximamente) descargar.
