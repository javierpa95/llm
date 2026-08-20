---
title: "LFM2.5 en Q4_0 sin apenas pérdida: destilación consciente de cuantización para correr LLMs en un Raspberry Pi"
date: 2026-08-20
source: "Hugging Face Blog (Liquid AI)"
source_url: "https://huggingface.co/blog/LiquidAI/qad"
category: "investigación"
summary: "Liquid AI publica checkpoints Q4_0 de LFM2.5 entrenados con destilación consciente de cuantización (QAD): recuperan el 97% de la precisión BF16 perdida y suben el throughput en hardware de borde."
reading_time: "3 min"
tags: [cuantizacion, q4_0, destilacion, edge, llama-cpp, gguf, liquid-ai, lfm2.5, ia-local]
---

La cuantización siempre ha tenido un precio: a cambio de menos memoria y más velocidad, el modelo pierde precisión. [Liquid AI](https://www.liquid.ai) acaba de publicar en el [blog de Hugging Face](https://huggingface.co/blog/LiquidAI/qad) una vía para esquivar ese trade-off: **checkpoints Q4_0 de su familia LFM2.5 entrenados con destilación consciente de cuantización (Quantization-Aware Distillation, QAD)**. La idea es simple pero potente: en lugar de cuantizar un modelo ya entrenado (post-training quantization, PTQ) y asumir la pérdida, se **destila un profesor de alta precisión (BF16) directamente hacia un estudiante ya cuantizado a 4 bits**, de modo que el estudiante aprende a vivir con la precisión reducida durante el propio entrenamiento.

El resultado son cuatro modelos —**LFM2.5-230M, 350M, 1.2B-Instruct y 2.6B**— disponibles como GGUFs que mantienen la misma memoria y velocidad del Q4_0 nativo pero **recuperan el 97% de la precisión BF16 que la cuantización normal pierde** (97.1%, 96.5%, 97.4% y 96.6% según modelo, medida en una batería de GPQA Diamond, MMLU-Pro, IFEval, IFBench, Multi-IF y BFCLv4). En la práctica, los checkpoints QAD Q4_0 de 230M y 350M **igualan la calidad del Q5_K_M** (un formato 2-3 bits más pesado) con un **throughput de decodificación entre 4% y 33% mayor**; los de 1.2B y 2.6B hacen lo propio contra el Q4_K_M (3-14% más rápidos) e incluso igualan los checkpoints UD-Q4_K_XL de Unsloth, un referente externo de cuantización post-entrenamiento.

| Modelo | Retención vs BF16 | Iguala a | Ganancia de throughput |
|--------|-------------------|----------|------------------------|
| LFM2.5-230M | 97.1% | Q5_K_M | +4-33% |
| LFM2.5-350M | 96.5% | Q5_K_M | +4-33% |
| LFM2.5-1.2B-Instruct | 97.4% | Q4_K_M | +3-14% |
| LFM2.5-2.6B | 96.6% | Q4_K_M | +3-14% |

La propuesta encaja con el enfoque de Liquid AI de llevar modelos a hardware de consumo: las pruebas de velocidad se hicieron en **MacBook Pro, NucBox EVO-X2, Samsung Galaxy S26 Ultra y Raspberry Pi 5**, con inferencia por GPU en los portátiles y por CPU ARM en los dispositivos. Cualquier runtime compatible con GGUF, como `llama.cpp`, puede cargar los checkpoints directamente, lo que convierte a la destilación consciente de cuantización en una alternativa práctica a la cuantización reactiva para quien quiera correr agentes pequeños en local.