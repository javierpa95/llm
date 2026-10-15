---
title: "🧠 Meta lanza Muse Wonder y Muse Wonder Full: su primer modelo frontier es cerrado, se apoya en 'active memory' y su versión Full no tendrá API"
date: 2026-10-12
source: "Meta Superintelligence Lab / TechCrunch / VentureBeat"
source_url: "https://techcrunch.com/2026/10/12/meta-releases-its-first-frontier-model-muse-wonder/"
category: "modelos"
summary: "Meta Superintelligence Labs lanza Muse Wonder y Wonder Full, su primer modelo frontier sin pesos descargables, con 'active memory' y precio de 4/20 $ por millón de tokens."
reading_time: "4 min"
tags: [modelos, meta, muse, frontier, memoria, benchmarks]
---

El laboratorio de superinteligencia de Meta (MSL), dirigido por el ex CEO de Scale AI Alexandr Wang, lanzó el 12 de octubre **Muse Wonder** y **Muse Wonder Full**, sus primeros modelos de nivel frontier ([TechCrunch](https://techcrunch.com/2026/10/12/meta-releases-its-first-frontier-model-muse-wonder/), [VentureBeat](https://venturebeat.com/technology/metas-new-muse-wonder-and-muse-wonder-full-models-achieve-frontier-performance-but-only-the-weaker-one-is-available-via-api)). El dato más llamativo para quienes seguimos el lado abierto de la industria: **ninguno de los dos se publica con pesos descargables**. Después de años de que Llama popularizase los modelos descargables y ejecutables en infraestructura propia, Meta entra en la carrera frontier con el modelo cerrado. Se entrenaron en el datacenter **Prometheus**, en Ohio, que entró en servicio a principios de año, combinando entrenamiento a gran escala con reinforcement learning.

En capacidades, la apuesta diferencial es la **«active memory»**: retener y sintetizar información del usuario durante días, semanas y meses. Meta destaca su desempeño en **MemoryBench** (aprendizaje continuo y construcción de memoria), donde dice superar a Fable, Opus y Astra. El segundo pilar es **«active focus»**, diseñado para que los agentes persistan ante obstáculos, cambien de plan y pidan permiso antes de acciones consecuentes. Aceptan texto, imagen, audio y vídeo como entrada, generan texto y soportan ventanas de contexto de **~1M de tokens**. Según los benchmarks de Meta, ambos alcanzan puntuaciones comparables a **Fable 5.1** y **GPT-6 Astra**; la evaluación independiente de [Artificial Analysis](https://artificialanalysis.ai/models/muse-wonder-full) lo confirma con matices.

### Benchmarks independentes: tercero de la clase, no primero

| Benchmark | Wonder Full | Wonder | GPT-6 Astra | Claude Opus 5.5 |
|---|---|---|---|---|
| Artificial Analysis Intelligence Index | 56 | 52 | 53 | **58** |
| DeepSWE 1.1 (ingeniería de software) | **79.0** | 78.8 | 74.1 | 74.2 |
| SWE-Marathon (coding prolongado) | **57.5** | 53.1 | 42.5 | 46.3 |
| Harvey LAB-AA (tareas legales) | **13.1** | 10.0 | 8.6 | 4.2 |
| Terminal-Bench 4.0-AA | 57.1 | 52.0 | 59.1 | **59.6** |

*Fuente: model card de Meta y Artificial Analysis, 12 oct 2026. Esfuerzo de razonamiento máximo; a mayor número, mejor.*

Wonder Full empata con Claude Sonnet 5.5 (56) y supera a GPT-6 Astra, Gemini 4 Argon y Fable 5.1 (53), pero por detrás de Claude Opus 5.5 (58). Donde sí se distancia es en coding prolongado: 57,5 en SWE-Marathon frente a 46,3 de Opus. El modelo estándar queda un punto por debajo de Astra.

### Precio de frontier y una limitación incómoda

Vía **Meta Model API** (identificador `muse-wonder-1.0`), Wonder cuesta **4 $ por millón de tokens de entrada y 20 $ por millón de salida** (entrada en caché: 0,20 $), en paridad con Claude Opus 5.5 y muy por debajo de los 10/50 $ de GPT-6 Astra o Fable 5.1. Expone interfaces compatibles con SDKs de OpenAI y Anthropic, con límites de 3.000 peticiones y 4M tokens por minuto. La contrapartida: **Muse Wonder Full no se servirá vía API** —solo para suscriptores de Muse Code—, y **ninguno de los dos podrá autoalojarse**. Y un detalle que a los equipos con código confidencial les importará: la suscripción a Muse Code viene por defecto en **Contributor mode**, que permite a Meta usar prompts, código y salidas para entrenar futuros modelos (se puede desactivar, pero solo aplica a envíos posteriores); la API pay-as-you-go va en Standard mode, sin uso de datos para entrenamiento.

Es el primer lanzamiento frontier de Meta desde la reestructuración de su IA bajo Alexandr Wang en agosto de 2025 —antes solo había llegado el ligero [[2026-07-02-meta-muse-spark-closed-weights|Muse Spark]] y el agente Muse—, y llega en un momento en que los modelos frontier se juzgan no solo por benchmarks, sino por memoria a largo plazo, persistencia de agentes y precio por token consumido en tareas reales.
