---
title: "🧠 Google lanza Gemini 4 Argon: frontier con 1M de output tokens, récord en DeepSWE v1.1 y entregado sin guardrails cyber a defensores de confianza"
date: 2026-10-05
source: "Google Blog / DeepMind"
source_url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/"
category: "modelos"
summary: "Google lanza Gemini 4 Argon: frontier con 1M de output tokens (antes 64K), SOTA en DeepSWE v1.1 y AutomationBench, y se entrega sin guardrails cyber a defensores de confianza."
reading_time: "5 min"
tags: [gemini, google, frontier, output-tokens, ciberseguridad, deepmind, fairwind]
---

## 🔭 El modelo que Google no quiere (aún) que todos usen

El 30 de septiembre, Google anunció **Gemini 4 Argon**, su nuevo modelo frontier, con una particularidad que lo distingue de todos los lanzamientos recientes: **no llega al público general**. Argon se está desplegando a través del **Fairwind Program**, un canal restringido para «defensores cibernéticos de confianza» y equipos internos de Google. Es la primera vez que Google estrena una generación frontier entera detrás de un programa de acceso restringido —la misma lógica que siguió Anthropic con [[2026-10-01-anthropic-glm-5-3-exploits-open-weight-salvaguardas-bypass|Claude Mythos Preview y el debate sobre GLM-5.3]], y que vimos en [[2026-09-03-openai-astra-modelo-peligroso-capacidades-ciberseguridad|Astra de OpenAI]]: modelos con capacidades cyber ofensivas que se entregan con control de acceso antes que con precios de API.

El lanzamiento llega tras el viraje estratégico de Google este año: canceló Gemini 3.5 Pro y concentró su atención en la familia 3.8 —como contamos en [[2026-09-08-google-gemini-3-8-flash-tercer-flash-seis-semanas|Gemini 3.8 Flash]]—. Argon es la respuesta frontier a ese vacío, y compite directamente con [[2026-09-30-openai-gpt-61-sol-devday-near-astra-fifth-price|GPT-6.1 Sol]] y Claude Fable 5.1/Opus 5.5.

## 📊 Los números: dónde gana y dónde pierde

La tabla comparativa publicada por DeepMind (cifras **autoreportadas por el vendor**, sin verificación independiente aún) es reveladora por lo que muestra y por lo que oculta:

| Benchmark | Tipo | Argon | GPT-6 Astra | Fable 5.1 | Opus 5.5 |
|---|---|---|---|---|---|
| **Vals Index** | knowledge work | **68,9%** | 63,1% | 65,8% | 67,0% |
| **AutomationBench** (Zapier) | ejecución agéntica | **51,3%** | 41,4% | 31,4% | 42,5% |
| **DeepSWE v1.1** | SWE long-horizon | **77,9%** | 74,1% | 67,4% | 74,2% |
| FrontierSWE v2 | SWE agéntico | 55,0% | **65,5%** | 56,3% | 62,3% |
| Terminal-bench 4.0 | coding terminal | 57,4% | 58,2% | 57,9% | **66,4%** |
| Terminal-Bench Science 0.1 | ciencia/mates | 57,6% | **68,1%** | 52,6% | 63,3% |
| **GraphWalks 256K→1M** | contexto largo | **84,2%** | 71,8% | 65,0% | 66,8% |
| **LVBench** | vídeo largo | **91,7%** | 87,5% | 79,7% | 83,7% |
| **CWE-bench v1** | remediar vulnerabilidades | **68,0%** | 68,0% | 58,0% | 67,0% |

La lectura honesta: Argon **domina en trabajos de conocimiento de largo aliento, contexto extremo y seguridad**, pero **pierde en variantes de terminal-bench y ciencia** frente a Astra y Opus 5.5. No es un «número mágico» superior en todo —es un modelo especializado en tramos largos, precisamente donde el rendimiento por token acumulado decide.

## 🧪 El detalle técnico que lo cambia todo: 64K → 1M de output tokens

El cambio de arquitectura más significativo no está en ningún benchmark: Google **amplió el límite de tokens de salida de 64K a 1M tokens**, dieciséis veces más, describiéndolo como «industry-leading». Para que esto se entienda en términos de anatomía: los modelos frontier actuales generan razonamiento y código en trayectorias de salida que se acotan; con 1M de tokens de salida, un solo paso del modelo puede mantener una cadena de razonamiento, ejecutar experimentos y revisar resultados sin el techo que forzaba a reiniciar o a resumir. Es la apuesta por «pensar largo de una vez» frente al enfoque de [[2026-09-25-openai-gpt-6-sol-luna-price-cut-performance|GPT-6 Sol y Luna]] de más contexto de entrada a menor precio. El coste de inferencia de una trayectoria así —KV cache y cómputo sostenido durante cientos de miles de tokens— será, probablemente, la razón por la que el acceso siga siendo restringido.

## 🛡️ Seguridad: sin guardrails cyber para quienes parchean

El segundo eje del anuncio es la ciberseguridad defensiva. Google entrenó Argon para **encontrar, validar y parchear vulnerabilidades de forma autónoma**: empata en primer lugar en CWE-bench v1 (68%, el mismo puntaje que GPT-6 Astra), supera a 3.8 Flash Cyber en el benchmark interno de vulnerabilidades sobre 20 lenguajes de programación, y lidera el benchmark de pentesting black-box de Wiz sobre sistemas web en vivo sin código fuente.

La decisión consecuente: para el Fairwind Program, **Argon se entrega «sin cyber guardrails»** a defensores verificados, para que usen su capacidad frontier completa. También es el modelo más resistente de Google a prompt injection indirecta (líder en el benchmark IPI de Gray Swan), con monitorización de alineación para evitar que el modelo se salga de los límites de la tarea. La paradoja es la misma que en toda la carrera cyber de 2026: cuanto más capaz es un modelo para defender, más capaz es para atacar, y la respuesta de los laboratorios ya no es recortar capacidades, sino **controlar quién recibe qué**.

## 🏢 Qué está haciendo Google con él (ya)

Más allá de benchmarks, Google publica usos internos concretos: Argon optimizó subrutinas de algoritmos cuánticos **batendo el baseline publicado en un 40% en minutos**, identificó optimizaciones de memoria en sus datacenters que liberarán **más de 300 TiB** (estimación total: 500 TiB a 1 PiB), y está migrando codebases C/C++ a Rust —incluido el kernel Fuchsia Zircon, de más de 800.000 líneas—. En libgav1 (decodificador de vídeo de Google), agentes de Argon reemplazaron 32K líneas de código SIMD con Rust seguro que el compilador vectoriza automáticamente: **2,7× más rápido que el port de Rust previo** con salida de vídeo idéntica.

## 🤔 Lo que esto significa

Argon confirma la tendencia de 2026: el frontier ya no se mide solo por un Elo, sino por **trayectorias largas confiables** (1M de output tokens), **trabajo de conocimiento ejecutable** (AutomationBench, Harvey Legal) y **capacidad cyber con control de acceso**. Para la comunidad open —donde cubrimos desde [[2026-08-28-glm-5-3-flash-sin-nvidia-mit|GLM-5.3-Flash]] hasta [[2026-10-04-aleph-alpha-kolibri-1-moe-78b-soberano-europeo|Kolibri-1]]— la pregunta sigue siendo la de siempre: cuándo estas capacidades filtrarán a pesos abiertos y APIs públicas, y a qué precio. De momento, Argon existe, lidera varias tablas, y no se puede comprar.

---

**Fuentes:** [Google Blog: Gemini 4 Argon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/) · [DeepMind: ficha de Gemini 4 Argon y tabla de benchmarks](https://deepmind.google/models/gemini/) · [Metodología de evaluación (Google)](https://deepmind.google/models/evals-methodology/gemini-4-argon) · [9to5Google: cobertura del anuncio](https://9to5google.com/2026/09/30/gemini-4-argon-announcement/) · [VentureBeat: limited release](https://venturebeat.com/technology/google-unveils-gemini-4-argon-retaking-benchmark-lead-over-openai-and-anthropic-but-in-limited-release)
