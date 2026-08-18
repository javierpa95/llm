---
title: "Qwen3.8-27B: el modelo abierto de 27B que puntúa 52 en el índice AAII, como GPT-5.6 Luna, y corre en un portátil"
date: 2026-08-18
source: "Simon Willison's Blog / Hugging Face"
source_url: "https://huggingface.co/Qwen/Qwen3.8-27B"
category: "modelos"
summary: "Alibaba libera Qwen3.8-27B bajo Apache 2.0: un modelo denso de visión con contexto nativo de 262K tokens que iguala a GPT-5.6 Luna en el índice AAII y cabe cuantizado en equipos de consumo."
reading_time: "3 min"
tags: [qwen, alibaba, open-weights, apache-2.0, ia-local, vision-language, reasoning-effort, contexto-largo]
---

El viernes 14 de agosto Alibaba publicó en Hugging Face los pesos de **Qwen3.8-27B** bajo licencia **Apache 2.0**: un modelo **denso de 27.000 millones de parámetros** con visión nativa (imagen y vídeo, incluidos diagramas, documentos y vídeo de horas), sucesor del Qwen3.6-27B. Los benchmarks propios de Qwen lo sitúan por delante de su predecesor y del cerrado **Qwen3.7-Plus**, y la verificación independiente llegó este fin de semana: Simon Willison reporta que el modelo **puntúa 52 en el Artificial Analysis Intelligence Index**, la misma nota que **GPT-5.6 Luna (max)** y a solo **un punto de GLM-5.2 (753B)** y de [[2026-08-13-deepseek-v4-pro-0813-ga-release|DeepSeek V4 Pro]], todos ellos modelos decenas de veces más grandes. "Un modelo verdaderamente asombroso de 27B", resume.

Arquitectónicamente es un modelo notable: **64 capas** con diseño híbrido que intercala atención lineal **Gated DeltaNet** con bloques de atención completa —una elección que abarata el costo cuadrático del contexto—, **contexto nativo de 262.144 tokens** extensible hasta ~1M, **multi-token prediction (MTP)** y un **modo de pensamiento flexible**: el razonamiento viene activado por defecto y puede ajustarse con `reasoning_effort` (xhigh/low/medium) o retenerse entre turnos con `preserve_thinking`. Es compatible con los runtimes habituales: Transformers, vLLM y SGLang. En los datos de la card, el 27B llega a **61.7 en SWE-bench Pro** (superando el 53.4 de Opus 4.6 Max), 73.0 en Terminal Bench 2.1 y 42.9 en Agents' Last Exam.

| Benchmark | Qwen3.8-27B | Qwen3.6-27B | Opus 4.6 Max |
|-----------|-------------|-------------|--------------|
| Terminal Bench 2.1 (Terminus) | 73.0 | 63.4 | **78.2** |
| SWE-bench Pro | **61.7** | 53.5 | 53.4 |
| DeepSWE 1.1 | **42.2** | 13.3 | — |
| Agents' Last Exam (Score) | **42.9** | 27.3 | — |

La otra cara es la práctica local. Willison lo ha probado en un **MacBook Pro M5 Max** y en un **NVIDIA DGX Spark** con el GGUF **Q4_K_M de ~17 GB** en LM Studio, y avisa: el modelo **defaults a un nivel de razonamiento xhigh que provoca un "overthinking" espectacular** —gastó 22.276 tokens de razonamiento para generar un SVG que tardó 21 minutos; con `reasoning_effort` bajo o desactivado, la misma tarea baja a ~2 minutos—. Recomienda además subir el límite de contexto por defecto de 8.192 tokens (el modelo los agota pensando en problemas triviales) o usar el contexto completo de 262K. Con 27B, el tamaño perfecto para un portátil serio, la pregunta ya no es si cabe, sino cuánto dejarle pensar. El gigante **Qwen3.8-2.4T-A95B** (MoE, ~95B activos, lanzado la semana pasada tras [[2026-08-04-alibaba-qwen-3-8-max-open-weight|Qwen3.8-Max]]) sigue para quien necesite más potencia; la versión alojada del 27B con 1M de contexto llegará pronto a Qwen Cloud.