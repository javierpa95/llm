---
title: "VibeThinker-3B: un modelo de 3B parámetros que iguala a modelos 333× mayores en razonamiento"
date: 2026-06-28
source: "The Decoder"
source_url: "https://the-decoder.com/sinas-open-model-vibethinker-3b-aims-to-show-reasoning-compresses-well-but-factual-knowledge-doesnt/"
category: "modelos"
summary: "Sina Weibo lanza VibeThinker-3B, un modelo abierto de solo 3 mil millones de parámetros que iguala a DeepSeek V3.2 y Kimi K2.5 en benchmarks de matemáticas y código. Sus autores proponen la hipótesis de que el razonamiento lógico se comprime eficientemente, pero el conocimiento factual no."
reading_time: "3 min"
tags: [modelos, open-source, reasoning, compression, eficiencia, sina, vibethinker]
---
## Qué ha pasado

Sina Weibo ha publicado **VibeThinker-3B**, un modelo de lenguaje abierto con solo **3 mil millones de parámetros** que compite directamente con modelos hasta **333 veces más grandes** en tareas de matemáticas y programación. Según su informe técnico, el modelo rinde al nivel de DeepSeek V3.2 y Kimi K2.5 en benchmarks competitivos como AIME26.

El modelo se basa en Qwen2.5-Coder-3B de Alibaba, pero la clave está en el **post-entrenamiento multi-etapa**: los investigadores aplicaron fine-tuning supervisado, aprendizaje por refuerzo secuencial para matemáticas, programación y STEM, y auto-destilación para consolidar las habilidades en un solo modelo. En LeetCode, resolvió 123 de 128 problemas en el primer intento, superando a GPT-5.2, Qwen3-Max y Claude Opus 4.6.

## La hipótesis: razonamiento ≠ conocimiento

Los autores proponen la **"Hipótesis de Compresión-Cobertura Paramétrica"**: diferentes capacidades de IA tienen diferentes estructuras y necesitan diferente número de parámetros. El razonamiento lógico —resolver problemas paso a paso, buscar, verificar condiciones, corregir errores— se basa en patrones recurrentes que pueden comprimirse en un núcleo compacto. El conocimiento factual —responder preguntas abiertas sobre múltiples dominios— requiere cobertura amplia y, por tanto, muchos parámetros almacenando hechos.

Esto explica por qué VibeThinker-3B arrasa en GPQA (conocimiento) pero iguala a gigantes en matemáticas y código: las tareas verificables con estructuras de solución claras no necesitan escala masiva.

## Por qué es relevante

Este trabajo desafía el paradigma de que "más parámetros = mejor rendimiento" y sugiere que **el post-entrenamiento importa tanto o más que el pre-entrenamiento masivo**. Para la comunidad técnica, abre la puerta a modelos pequeños y eficientes para tareas específicas de razonamiento, ejecutables en hardware modesto. VibeThinker-3B está disponible en [Hugging Face](https://huggingface.co/Sina) y [GitHub](https://github.com/Sina). Es una señal de que la compresión del razonamiento es una línea de investigación independiente y prometedora, paralela al scaling convencional.
