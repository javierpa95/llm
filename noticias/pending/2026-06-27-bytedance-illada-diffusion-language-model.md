---
title: "iLLaDA: el modelo de difusión de ByteDance que iguala a Qwen2.5 generando texto de forma no autoregresiva"
date: 2026-06-27
source: "The Decoder"
source_url: "https://the-decoder.com/bytedances-illada-is-a-diffusion-language-model-that-keeps-up-with-qwen2-5/"
category: "investigación"
summary: "ByteDance y la Universidad Renmin lanzan iLLaDA, un modelo de lenguaje de difusión de 8B parámetros que genera texto en paralelo en lugar de token por token. Iguala a Qwen2.5 7B en benchmarks base pero queda por detrás tras fine-tuning."
reading_time: "3 min"
tags: [investigación, modelos, difusión, bytedance, illada, arquitectura]
---
## Qué ha pasado

Investigadores de la Universidad Renmin y ByteDance han publicado **iLLaDA** (improved LLaDA), un modelo de lenguaje de **8B parámetros** que genera texto mediante **difusión** en lugar del método autoregresivo tradicional. Mientras modelos como GPT, Claude o Qwen generan texto token por token, de izquierda a derecha, iLLaDA parte de una secuencia de tokens enmascarados y los va refinando en múltiples pasadas en paralelo, de forma similar a como los modelos de imágenes como Stable Diffusion generan una imagen desde ruido.

El modelo se entrenó desde cero con **12 billones de tokens** (12T), cinco veces más que su predecesor LLaDA (2.3T). En benchmarks base, iLLaDA alcanza una media de **63.9 puntos**, superando ligeramente a Qwen2.5 7B (63.3), un modelo autoregresivo de tamaño similar. Destaca especialmente en razonamiento (BBH: 71.3 vs 63.9 de Qwen2.5) y en MMLU (74.8 vs 71.9).

## Cómo funciona

La generación por difusión tiene ventajas teóricas importantes: al ser **bidireccional** (cada posición puede atender a cualquier otra simultáneamente), el modelo puede planificar la estructura global del texto antes de concretar los detalles. También permite generar múltiples tokens en paralelo, lo que puede traducirse en menor latencia.

Sin embargo, iLLaDA pierde fuelle tras fine-tuning instructivo: el modelo fine-tuned queda por detrás de Qwen2.5 Instruct en varios benchmarks. Esto sugiere que la difusión tiene más dificultades para alinearse con instrucciones complejas, aunque iguala en rendimiento base.

## Por qué es relevante

iLLaDA se suma a **DiffusionGemma** de Google DeepMind (lanzado también en junio 2026) como prueba de que los modelos de difusión para texto son una alternativa viable a la generación autoregresiva. Aunque ningún modelo de difusión ha superado aún a los autoregresivos en calidad general, la brecha se estrecha. Si la difusión logra escalar y fine-tuning eficiente, podría cambiar cómo generamos texto en el futuro: más rápido, más paralelo, y con mejor planificación global.

**Borrador — pendiente de revisión y publicación.**
