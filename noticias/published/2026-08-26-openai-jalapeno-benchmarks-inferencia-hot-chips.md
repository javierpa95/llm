---
title: "OpenAI muestra los primeros benchmarks de su chip Jalapeño: supera a Blackwell y Rubin en rendimiento por vatio"
date: 2026-08-26
source: "The Decoder"
source_url: "https://the-decoder.com/openais-first-custom-chip-jalapeno-reportedly-beats-nvidias-blackwell-and-rubin-in-inference-benchmarks/"
category: "hardware"
summary: "En Hot Chips, OpenAI ha presentado los primeros datos públicos de su acelerador de inferencia Jalapeño: entre 1,5x y 1,9x más trabajo de IA por vatio que Nvidia Blackwell y Rubin, con menor latencia en los modelos frontier. SemiAnalysis habla del posible fin del 'CUDA moat'."
reading_time: "3 min"
tags: [OpenAI, Jalapeño, ASIC, inferencia, hardware, Hot Chips]
---

Después del anuncio del [[2026-06-27-openai-broadcom-jalapeno-chip-llm-inference|chip ASIC Jalapeño en junio]], OpenAI ha mostrado en la conferencia **Hot Chips** los primeros benchmarks públicos de su acelerador de inferencia desarrollado junto a **Broadcom**. Según los datos presentados, el chip supera a las plataformas de **Nvidia Blackwell y Rubin** en eficiencia: entre **1,5x y 1,9x más trabajo de IA por vatio** a rendimiento pico, con una latencia de extremo a extremo entre **1,7x y 3,6x menor** que los mejores sistemas comerciales; en cargas interactivas, la ventaja declarada sube a **2,1x–4,1x**.

Los resultados provienen del benchmark público **InferenceX de SemiAnalysis**, que verificó varias ejecuciones en el propio laboratorio de OpenAI. Los modelos probados fueron **GPT-OSS 120B**, **DeepSeek R1 670B** y **Kimi K2.5 1T**: sobre GPT-OSS, Jalapeño alcanzó unos **1.400 tokens por segundo por usuario**, y más de **700 tokens/s** en una única petición concurrente sobre DeepSeek R1. Es importante el matiz de que el chip lo hizo **sin emplear técnicas como multi-token prediction ni speculative decoding**, mientras que algunos de los sistemas comparados sí las usaban, así que aún hay margen de mejora.

| Comparación clave | Resultado (SemiAnalysis) |
|-------------------|--------------------------|
| Trabajo IA / vatio (pico) | 1,5x–1,9x sobre Blackwell/Rubin |
| Latencia end-to-end | 1,7x–3,6x menor |
| Workloads interactivos | 2,1x–4,1x superior |
| DeepSeek R1 (1 petición) | >700 tokens/s |
| GPT-OSS 120B | ~1.400 tokens/s por usuario |

La comparación "justa" no es Blackwell sino la plataforma **Vera Rubin**, porque ambas usan memoria HBM4; incluso ahí Jalapeño produce más tokens por megavatio, aunque el **coste total de propiedad por token** quedaría aproximadamente igual. Hay datos para el escepticismo: Nvidia y AMD ya publican resultados en modelos más grandes (DeepSeek V4 Pro, Kimi K3) que Jaraleño aún no ha probado, y mientras los sistemas Rubin ya se envían a clientes, Jalapeño sigue en **engineering samples**, habiendo ido a fabricación en noviembre de 2025 tras un ciclo de diseño de unos 16 meses. Pese a todo, SemiAnalysis ve el hito como una señal de que el **"CUDA moat" podría estar muerto**, dado lo rápido que OpenAI es capaz de mover modelos nuevos sobre su propio silicio.