---
title: "🧠 Meta libera Muse Spark Open: 816B de parámetros (42B activos) open-weight que corren en dos Mac Studios de escritorio"
date: 2026-10-16
source: "Meta AI Research / Hugging Face / Reuters / The Decoder"
source_url: "https://research.meta.ai/blog/muse-spark-open"
category: "modelos"
summary: "Tras el cerrado Muse Wonder, Meta publica los pesos de su modelo MoE de 816B para coding y agentes: 1M de contexto, entrada multimodal y ejecución local en dos Mac Studios M5 Ultra."
reading_time: "4 min"
tags: [modelos, meta, open-weight, moe, multimodal, inferencia-local]
---

Dos días después de estrenar su primer modelo frontier **cerrado** ([[2026-10-12-meta-muse-wonder-frontier-active-memory|Muse Wonder]]), Meta publica los pesos de **Muse Spark Open**, que la compañía describe como «el modelo open-weight de EE. UU. más capaz hasta la fecha» ([blog de investigación](https://research.meta.ai/blog/muse-spark-open), [Reuters](https://www.thenewstribune.com/news/business/article317642835.html)). Es un mixture-of-experts de **816B de parámetros totales con solo 42B activos por token**, ventana de contexto de **1M de tokens**, entrenado específicamente para coding agéntico: leer un codebase completo, refactorizar múltiples archivos, depurar sesiones largas y llamar herramientas planificando, actuando y autocorrigiéndose durante tareas prolongadas. Acepta texto, imagen, audio y vídeo como entrada —puede leer una captura, escuchar una nota de voz o revisar una grabación de pantalla mientras trabaja— y genera texto.

### Arquitectura: 256 expertos, 8 por token

| Característica | Muse Spark Open |
|---|---|
| Parámetros | ~816B totales; ~42B activos por token |
| Enrutado de expertos | 256 expertos por capa MoE; 8 seleccionados por token |
| Capas LM | 62 capas, dimensión oculta 8192, GQA (128 Q / 16 KV heads) |
| Entradas | Texto, imagen, audio y vídeo |
| Salida | Texto |
| Contexto | Hasta 1M de tokens |
| Checkpoints | BF16 (~1,5 TB) y NVFP4 (para GPUs Blackwell) |

*Fuente: [model card en Hugging Face](https://huggingface.co/meta-models/Muse-Spark-Open-816B-A42B) y [blog técnico de Hugging Face](https://huggingface.co/blog/meta-muse-spark-open), 15 oct 2026.*

Los expertos concentran ~97% de los parámetros: todos los 256 deben caber en memoria (de ahí el despliegue de escala 816B), pero solo 8 computan por token, dando la velocidad de un modelo de 42B. La visión va por un Perception Encoder de 1,8B (parches 14×14, atención completa cada 4 capas, resto dispersa) y el audio tiene su propio encoder. En benchmarks propios, Meta lo sitúa por delante de **Qwen 3.8, GLM 5.3 y Kimi K3** en categorías agénticas, conocimiento/razonamiento y multimodal, aunque por detrás de algunos competidores en coding y muy por debajo de su Muse Wonder Full de pago.

### Dos Mac Studios hacen de supercomputador de escritorio

El ángulo más llamativo es la optimización para **Apple Silicon**: usando MLX, Meta afirma que **dos Mac Studios con M5 Ultra de 512 GB de memoria unificada cada uno** sostienen el modelo completo —1 TB de memoria unificada en total—, con los 1,2 TB/s de ancho de banda del chip leyendo la pequeña rebanada de pesos que necesita cada token. Meta probó workflows agénticos íntegramente en dispositivo, incluyendo cambios reales de iOS en Ice Cubes (cliente Mastodon open source) y guiar DaVinci Resolve revisando metraje frame a frame. El ecosistema no se queda atrás: **Intel anunció soporte day-0** (quantización INT4/GPTQ en Xeon y MXFP4 en su nueva GPU D-series de 160 GB, vía vLLM y SGLang), y los kernels Helion de SGLang logran aceleraciones de 1,03–3,95× en GPUs NVIDIA y AMD. Los pesos están en [Hugging Face](https://huggingface.co/collections/meta-models/muse-spark-open) junto a cuants de `llama.cpp`, con fine-tuning vía TorchTitan, e inferencia alojada por Together AI, Fireworks, Baseten, Modal y OpenRouter.

### Una licencia «abierta» con letra pequeña

La licencia Muse Model License es gratuita para la mayoría de desarrolladores, pero exige etiquetar los productos con «Built with Muse Spark Open» y **los proveedores de API que facturen más de 20M $ al año necesitan un acuerdo separado con Meta** ([The Decoder](https://the-decoder.com/muse-spark-open-is-metas-answer-to-qwen-glm-and-kimi-in-the-open-weight-race/)). En la práctica, es el regreso de Meta al terreno abierto tras la era Llama —y tras el [[2026-07-02-meta-muse-spark-closed-weights|Muse Spark cerrado de julio]]— en un momento en que los pesos descargables de frontera los lideran laboratorios chinos (Qwen, GLM, Kimi). La jugada estratégica es clara: si no puedes ganar la carrera frontier cerrada, satura el ecosistema abierto con el mejor modelo descargable disponible —aunque el propio Muse Wonder Full quedó tercero en los índices independientes de Artificial Analysis—.
