---
title: "DeepSeek V4.1 Flash: compresión extrema de KV cache con arquitectura CED y licencia MIT"
date: 2026-09-11
source: "Hugging Face / DeepSeek"
source_url: "https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash"
category: "modelos"
summary: "DeepSeek lanza V4.1 Flash, un MoE de 552B parámetros (8B/16B activados) con nueva arquitectura CED que reduce el KV cache a 890 bytes/token — 4× menos que V4-Flash."
reading_time: "6 min"
tags: [deepseek, moe, kv-cache, compresion, inferencia, open-weight, multimodal, arquitectura]
---

# DeepSeek V4.1 Flash: compresión extrema de KV cache con arquitectura CED y licencia MIT

DeepSeek ha publicado **DeepSeek-V4.1-Flash**, un modelo MoE open-weight con una propuesta clara: resolver el cuello de botella que define los costes de inferencia en producción — el KV cache. Con **890 bytes por token** de cache global (4× menos que V4-Flash, 437× menos que V1), V4.1 Flash no es solo un modelo capaz: es una declaración sobre hacia dónde va la ingeniería de inferencia.

## La arquitectura Causal Encoder-Decoder

La novedad principal es el cambio de arquitectura. V4.1 Flash adopta un esquema **Causal Encoder-Decoder (CED)**: 20 capas de encoder causales seguidas de 20 capas de decoder. La clave es que el decoder **proyecta su KV cache global a partir de los estados ocultos finales del encoder**, en vez de derivarlo de cada capa del decoder. Esto permite que el modelo active solo **8B parámetros por token en prefill** y **16B en decode** — una reducción brutal comparada con los 49B activados de V4-Pro.

El resultado es un modelo de **552B parámetros backbone** que se comporta como uno mucho más pequeño en coste computacional, manteniendo capacidades frontier en benchmarks.

## KV cache: de cuello de botella a ventaja competitiva

DeepSeek ataca el KV cache desde tres ángulos simultáneamente:

- **SWA Bounded Replay:** reconstruye los estados KV perdidos de Sliding Window Attention reintentando solo los *n_win* tokens más recientes, eliminando la necesidad de persistir SWA KV a SSD. Reduce el KV cache persistente a **1/8** del de V4-Flash.

- **Compressed Sparse Attention 2 (CSA2):** asigna a cada capa de atención uno de tres modos estáticos (Full, Reindex, Reuse) que comparten KV principal e indexer K entre capas, reutilizando índices de sparse attention. Un **Hierarchical Sparse Indexer** acota el coste de indexación profunda independientemente de la longitud de contexto.

- **FP4 main KV caching:** formato E2M1 con una escala E4M3 por cada 16 canales, comprimiendo el KV cache principal a 4 bits.

La combinación de todo esto produce ese **890 bytes por token** — un número que hace viable mantenéner 1M tokens de contexto en producción sin que el coste de memoria se dispare.

## Qué significa en la práctica

| Métrica | V4-Flash | V4-Pro | V4.1 Flash |
|---------|----------|--------|------------|
| Parámetros backbone | 284B | 1.6T | 552B |
| Parámetros activados | 13B | 49B | 8B / 16B |
| KV cache/token | ~3.900 bytes | — | **890 bytes** |
| Contexto máximo | 1M | — | 1M |
| HumanEval (base) | 69.5 | 76.8 | **79.4** |
| GSM8K (base) | 90.8 | 92.6 | **93.0** |
| GPQA Diamond (instruct) | — | — | **90.9** |
| DeepSWE (instruct) | — | — | **74.2** |

Lo notable no es solo que V4.1 Flash supere a V4-Flash en la mayoría de benchmarks. Es que lo hace activando **menos de la mitad de parámetros** por token. En código y matemáticas, el salto es claro: HumanEval sube de 69.5 a 79.4, GSM8K de 90.8 a 93.0. En tareas agenticas, Terminal-Bench 2.1 llega a 90.6%, y DeepSWE a 74.2%.

## Multimodal desde el entrenamiento

V4.1 Flash no es un modelo de texto con visión pegada después. Incluye un **DeepSeek-ViT** (entrenado desde cero con 2D-RoPE y downscaling 3×3 por pixel-unshuffle) y un proyector MLP de dos capas. Las embeddings visuales se procesan **junto con las de texto desde el inicio del pre-entrenamiento**, en un corpus de **45T tokens**. Esto se nota en benchmarks como DocVQA (95.6%) y RefCOCO (86.0%).

## Razonamiento controlable y speculative decoding

El modelo soporta un **esfuerzo de razonamiento continuo** (entero 1–100) que permite al usuario o al sistema orquestador ajustar la relación coste/calidad. Además, incorpora **DSpark speculative decoding**: generación semi-autoregressiva de borradores con verificación por programación de confianza, una técnica para acelerar la generación sin sacrificar calidad.

## ¿Por qué importa?

Este lanzamiento es relevante por tres razones:

1. **Económica:** el KV cache es el factor dominante del coste de inferencia para contextos largos. Reducirlo 4× se traduce directamente en menos GPU, menos VRAM, menos dinero por request.

2. **Arquitectónica:** el CED es un diseño nuevo que el campo no había visto en modelos frontier. Si funciona tan bien como dicen los benchmarks, Expectar imitaciones.

3. **Accesibilidad:** licencia MIT, pesos en Hugging Face, soporte para vLLM y SGLang. Cualquiera puede desplegarlo.

La pregunta abierta, como siempre con los papers de DeepSeek, es cuánto de estos números se mantiene en evaluación independiente. Pero la dirección es clara: la carrera de modelos ya no es solo quién es más grande, sino quién resuelve mejor los problemas de ingeniería que hacen que inferencia funcione en producción.

V4.1 Flash está disponible en [Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash) con licencia MIT.
