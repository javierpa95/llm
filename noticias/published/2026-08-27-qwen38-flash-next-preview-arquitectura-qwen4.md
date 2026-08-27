---
title: "Qwen3.8-Flash-Next: el MoE de 125B con solo 6B activos que anticipa la arquitectura de Qwen4"
date: 2026-08-27
source: "The Decoder / Qwen Blog"
source_url: "https://the-decoder.com/alibaba-releases-qwen3-8-flash-next-targeting-ultimate-cost-efficiency/"
category: "modelos"
summary: "Alibaba presenta Qwen3.8-Flash-Next, un MoE multimodal de 125B que activa solo 6B parámetros por token, se entrena a un noveno del coste y supera a DeepSeek-V4-Flash y Opus 4.6 en coding y ofimática."
reading_time: "3 min"
tags: [qwen, alibaba, moe, open-weights, qwen4, multimodal, eficiencia, ia-local, modelo-abierto]
---

El equipo de Qwen ha lanzado **Qwen3.8-Flash-Next**, un modelo multimodal de arquitectura **mixture-of-experts** que **activa apenas 6 de sus 125.000 millones de parámetros por token** y que funciona además como una **preview temprana de la arquitectura que usarán los modelos Qwen4**. Con un **coste de entrenamiento de una novena parte** frente a su antecesor de igual familia, el modelo se coloca por delante de competidores mucho más grandes —como **DeepSeek-V4-Flash** y **Claude Opus 4.6**— en benchmarks de coding y ofimática, apretando la presión sobre el precio de OpenAI y Anthropic.

Simon Willison fue de los primeros en probarlo y destaca el contraste de su perfil: es un modelo **grande en peso pero ligero en cómputo**, lo que le da "un boost de rendimiento significativo". Ya hay **cuantizaciones GGUF de Unsloth en Hugging Face** y el propio Willison lo ha ejecutado en un **NVIDIA DGX Spark** con variantes como la **UD-Q2_K_XL de ~79 GB**, confirmando que una versión servible del modelo **corre en hardware de consumo**: el MoE de tono "flash" ofrece rendimiento de frontera sin exigir un clúster.

|| Qwen3.8-Flash-Next | DeepSeek-V4-Flash | Claude Opus 4.6 |
|--|--|--|--|
| **Parámetros totales** | 125B | — | — |
| **Parámetros activos/token** | **6B** | — | — |
| **Tipo** | MoE multimodal | MoE | denso |
| **Coste de entrenamiento** | ~1/9 del estándar | — | — |

El lanzamiento, orientado a lo que Alibaba llama la **"máxima eficiencia de coste"**, llega en un momento en que la competencia abierta se juega cada vez más en el equilibrio entre capacidad y precio de inferencia. Si bien es una vista previa de arquitectura y el modelo definitivo Qwen4 aún no ha llegado, el Flash-Next adelanta la dirección: **aprovechar la esparsidad de los MoE para acercar la frontera a equipos pequeños y a APIs baratas**. Qwen3.8-Flash-Next ya está disponible con pesos abiertos en Hugging Face y ModelScope.