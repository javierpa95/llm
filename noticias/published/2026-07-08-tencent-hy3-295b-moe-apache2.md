---
title: "Tencent lanza Hy3: modelo abierto MoE de 295B parámetros que rivaliza con modelos 5× mayores"
date: 2026-07-08
source: "Simon Willison's Blog"
source_url: "https://simonwillison.net/2026/Jul/6/hy3/"
category: "modelos"
summary: "Tencent publica Hy3, un modelo Mixture-of-Experts de 295B parámetros (21B activos) bajo licencia Apache 2.0. Con 256K de contexto y disponible en OpenRouter gratis hasta el 21 de julio, supera a modelos abiertos con 2-5× más parámetros."
reading_time: "2 min"
tags: [tencent, hy3, moe, open-source, modelos, apache-2, china]
---
## Qué ha pasado

**Tencent** ha lanzado **Hy3**, un modelo de lenguaje de 295.000 millones de parámetros con arquitectura **Mixture-of-Experts (MoE)** que activa solo **21B parámetros por token**, más 3.8B adicionales para la capa MTP (*Multi-Token Prediction*). El modelo se publica bajo licencia **Apache 2.0**, convirtiéndose en uno de los modelos abiertos más grandes disponibles hasta la fecha.

## Detalles técnicos

| Característica | Valor |
|---|---|
| Parámetros totales | 295B (MoE) |
| Parámetros activos | 21B |
| Licencia | Apache 2.0 |
| Contexto | 256K tokens |
| Peso (FP16) | 598 GB |
| Peso (FP8) | 300 GB |
| Disponibilidad | [Hugging Face](https://huggingface.co/tencent/Hy3) + OpenRouter (gratis hasta 21 jul) |

El modelo llega tras una *preview* en abril (Hy3 Preview) en la que Tencent recogió feedback de más de 50 productos internos y escaló el *post-training* con datos de mayor calidad. Según el equipo, Hy3 supera a modelos abiertos con 2-5× más parámetros y muestra mejoras significativas en tareas de productividad.

## Competitividad y coste

Hy3 compite directamente con modelos como Llama 4 (400B+, parcialmente abierto) y otros MoE del ecosistema open-source. Su tamaño completo (598 GB en FP16) lo sitúa en el rango de los modelos que requieren múltiples GPUs para inferencia, pero la versión FP8 (300 GB) lo hace más accesible en hardware de datacenter.

Está disponible de forma gratuita en [OpenRouter](https://openrouter.ai/tencent/hy3:free) hasta el 21 de julio, lo que permite probarlo sin necesidad de infraestructura propia.

## Por qué es relevante

Hy3 representa un paso más en la carrera de modelos abiertos desde China, compitiendo con los lanzamientos de DeepSeek, Qwen y otros. Su licencia Apache 2.0 permite uso comercial sin restricciones, y su arquitectura MoE con solo 21B parámetros activos ofrece un buen equilibrio entre capacidad y coste de inferencia.
