---
title: "🧠 Los pesos de Beam ya están en Hugging Face: 501B MoE (23B activos) en Apache 2.0 con FP8, NVFP4 y speculative decoding DFlash2"
date: 2026-10-17
source: "Hugging Face Blog / Reflection AI"
source_url: "https://huggingface.co/blog/reflection-beam"
category: "modelos"
summary: "BORRADOR — Sigue al anuncio del 6 de oct: Reflection publica los pesos de Beam (501B MoE, 23B activos, contexto 1M) en tres formatos de checkpoint, con harness en Rust, soporte day-0 en vLLM/SGLang y RL a escala en GB300."
reading_time: "4 min"
tags: [modelos, open-weight, moe, cuantizacion, speculative-decoding, inferencia]
---

[[2026-10-06-reflection-beam-modelo-abierto-501b-moe|Reflection anunció Beam el 6 de oct]] con acceso anticipado; el 16 de oct los **pesos ya están disponibles** en Hugging Face ([blog de HF](https://huggingface.co/blog/reflection-beam), [model card](https://huggingface.co/reflection/Beam-1.0-501B-A23B)): es el primer modelo del laboratorio estadounidense, un MoE disperso de **501B de parámetros totales con 23B activos por token**, contexto de **1M tokens**, solo texto y licencia **Apache 2.0**.

### Arquitectura y formato de checkpoints

| Característica | Beam 1.0 |
|---|---|
| Parámetros | 501B totales; 23B activos por token |
| Capas / expertos | 52 capas, hidden 5120; 256 expertos por capa MoE, 8 enrutados por token |
| Contexto | 1M tokens |
| Checkpoints | BF16, FP8 y NVFP4 |
| Razonamiento | 5 niveles (low/medium/high/xhigh/max); `preserve_thinking` mantiene el razonamiento entre turnos |
| Speculative decoding | Modelo draft DFlash2 incluido |
| Inferencia | transformers, vLLM y SGLang con soporte day-0; harness propio en Rust |

El preentrenamiento fue de **23,8 billones (trillion) de tokens** curados y el RL de post-training generó **más de 100 millones de rollouts sobre 10.500 GPUs NVIDIA GB300 durante 4 semanas** —la escala de RL es el argumento de Reflection para su rendimiento agéntico. En benchmarks de la propia empresa, Beam logra 80,9 en SWE-bench Verified, 80,1 en Terminal Bench v2.1, 44,4 en DeepSWE v1.1 y 97,8 en AIME 2026: competitivo con GLM 5.2 y por detrás de Kimi K3 y Qwen 3.8-Max en capacidad bruta, pero con ventaja en eficiencia de inferencia.
