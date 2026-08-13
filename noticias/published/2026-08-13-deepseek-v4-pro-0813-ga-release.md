---
title: "DeepSeek V4 Pro 0813 llega a GA: 1,6T parámetros MoE con contexto de 1M tokens por menos de un dólar"
date: 2026-08-13
source: "OpenRouter / Hugging Face / Simon Willison's Blog"
source_url: "https://openrouter.ai/deepseek/deepseek-v4-pro-0813"
category: "modelos"
summary: "DeepSeek publica el GA de V4 Pro: MoE de 1,6T parámetros (49B activos), contexto 1M tokens y arquitectura de atención híbrida que recorta los FLOPs de inferencia un 73% frente a V3.2."
reading_time: "3 min"
tags: [deepseek, modelos-abiertos, moe, contexto-largo, eficiencia]
---

DeepSeek ha publicado hoy el **GA (General Availability) de DeepSeek V4 Pro 0813**, la versión estable de su modelo más grande: un Mixture-of-Experts de **1,6 billones de parámetros con 49B activos** que soporta un contexto de **un millón de tokens**. El modelo ya está disponible en [OpenRouter](https://openrouter.ai/deepseek/deepseek-v4-pro-0813), en [Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4-Pro) y a través de la API oficial de DeepSeek, donde el alias `deepseek-v4-pro` apunta ahora a esta versión.

La novedad técnica más relevante es la **arquitectura de atención híbrida**: combina *Compressed Sparse Attention* (CSA) y *Heavily Compressed Attention* (HCA) para hacer viable el contexto largo. Según el reporte técnico, en un contexto de 1M tokens V4 Pro necesita solo el **27% de los FLOPs de inferencia por token** que requería DeepSeek V3.2 — una mejora de eficiencia drástica en el régimen donde antes se disparaban los costes. A esto se suman las *Manifold-Constrained Hyper-Connections* (mHC) que refuerzan las conexiones residuales y el optimizador **Muon** para acelerar la convergencia del entrenamiento.

El precio es el otro titular: **$0,435 por millón de tokens de entrada y $0,87 de salida** en OpenRouter (con caching y descuentos, el coste real suele ser aún menor). Eso sitúa a un modelo de la frontera abierta a una fracción del coste de los frontier cerrados — en la línea de lo que Simon Willison lleva documentando de la familia V4: casi rendimiento de frontera a una fracción del precio. Junto al GA del Pro, DeepSeek también ha actualizado **V4 Flash a la versión 0731** (284B/13B activos), su modelo eficiente para despliegue local.

| Modelo | Parámetros (activos) | Contexto | Precio entrada/salida (OpenRouter) |
|--------|----------------------|----------|-------------------------------------|
| DeepSeek V4 Pro 0813 | 1,6T (49B) | 1M tokens | $0,435 / $0,87 |
| DeepSeek V4 Flash 0731 | 284B (13B) | 1M tokens | — |

Para quien quiera probarlo localmente, los pesos están publicados con soporte de primera clase para **vLLM, SGLang y Transformers**, e incluso se puede arrancar con `docker model run hf.co/deepseek-ai/DeepSeek-V4-Pro`. Eso sí: con 49B activos, correrlo en casa sigue siendo territorio de estaciones de trabajo con varias GPU — el Flash 0731 sigue siendo la opción realista para hardware de consumo.
