---
title: "Liquid AI lanza la familia LFM3 multimodal y su LFM3-1.7B open-weight ya tiene ruta gratuita en OpenRouter"
date: 2026-11-08
source: "Liquid AI / OpenRouter / Hugging Face"
source_url: "https://www.liquid.ai/blog/lfm3"
category: "modelos"
summary: "Seis modelos de 2B en una arquitectura tri-híbrida entrenada con 22T tokens; el modelo de texto ocupa ~1 GB en 4-bit y Offline llegó a OpenRouter con ruta gratuita el 6 de noviembre."
reading_time: "3 min"
tags: [lfm3, liquid-ai, open-weights, ia-local, edge-ai]
---

🧠 **Liquid AI** publicó el 27 de octubre la familia **LFM3**, su nueva generación de Liquid Foundation Models "multimodal de nacimiento": seis modelos de clase 2B (texto, visión, audio, omni y decisión) entrenados desde un mismo backbone con **22 billones de tokens** de pre-entrenamiento y una nueva **arquitectura tri-híbrida** (convoluciones cortas con compuerta, atención por ventana deslizante y atención global). La promesa es más capacidad por parámetro: **LFM3-1.7B supera al LFM2.5-2.6B anterior usando un 35% menos de parámetros**.

| Propiedad | LFM3-1.7B (texto) |
|-----------|-------------------|
| Parámetros | 1,73B (denso) |
| Contexto | 256K tokens (entrada + salida) |
| Arquitectura | 24 capas tri-híbridas (13 conv + 5 SWA + 6 global) |
| Memoria @ 4-bit | ~1 GB |
| Licencia | LFM Open License v1.0 (open-weight) |
| Precio vía OpenRouter | $0,08/M entrada · $0,20/M salida (y ruta :free) |

La novedad de esta semana es la **distribución**: OpenRouter registró `liquid/lfm-3-1.7b` y su ruta gratuita `:free` el 6 de noviembre, con 262K de contexto y razonamiento obligatorio. Los pesos completos (Base, GGUF, MLX, ONNX, FP8 y NVFP4) están en Hugging Face, donde el checkpoint post-entrenado acumula ya ~70K descargas. Liquid lo posiciona para **agentes locales y especialización**: fine-tuning en una sola GPU, tool calling nativo, salidas estructuradas y soporte de 16 idiomas (español incluido).

El límite está en el tamaño: la propia ficha del modelo desaconseja usarlo para **coding agéntico o razonamiento multi-paso complejo** — ahí siguen mandando los frontier — pero como experto incrustado en un teléfono, un Raspberry Pi o un agente con tools, pocos modelos abiertos ofrecen este ratio capacidad/kilo. En un mes en el que Meta ha liberado Muse Spark Open (816B) para dos Mac Studio, LFM3 marca el otro extremo de la curva abierta: **inteligencia especializada que cabe en tu bolsillo**.

Fuentes: [Liquid AI Blog](https://www.liquid.ai/blog/lfm3) · [Documentación LFM3-1.7B](https://docs.liquid.ai/lfm/models/lfm3-1.7b) · [OpenRouter](https://openrouter.ai/liquid/lfm-3-1.7b) · [Hugging Face](https://huggingface.co/collections/LiquidAI/lfm3)
