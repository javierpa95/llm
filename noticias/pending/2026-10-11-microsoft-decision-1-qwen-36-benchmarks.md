---
title: "Microsoft lanza Decision-1: su modelo de decisiones basado en Qwen3.5-9B, el más rápido y preciso en 36 benchmarks"
date: 2026-10-11
source: "The Decoder / Microsoft"
source_url: "https://the-decoder.com"
category: "modelos"
summary: "Decision-1 de Microsoft, basado en Qwen3.5-9B, claims 83,5% de precisión y 85 ms de latencia en 36 benchmarks; 2,5× más rápido que el rival y con output gratis en Foundry y OpenRouter."
reading_time: "3 min"
tags: [modelos, decision-models, microsoft, qwen, openrouter, latencia]
---

BORRADOR pendiente de revisión. Datos principales (The Decoder, 10 oct 2026):

- **Decision-1** es el primer modelo de decisiones de Microsoft, para clasificaciones, evaluaciones y routing; con "potencial" para guiar y controlar agentes en entornos complejos.
- Basado en **Qwen3.5-9B**. Microsoft dice que es el más preciso probado en **36 benchmarks** (~150.000 preguntas): **83,5% de precisión, 85 ms de latencia**.
- **2,5× más rápido** que el segundo, H2O-Lightning-4B. Cloudflare's Clef (también basado en Qwen) no se incluyó en la comparación.
- Disponible en **Microsoft Foundry** y **OpenRouter**: **$0,042 por millón de tokens de input; output gratis**.
- Contexto: la categoría de decision models la inauguró Jev a mediados de septiembre; desde entonces Cloudflare (Clef, [[2026-10-03-cloudflare-clef-decision-models-open-weights|10-03]]) y Amazon (Strands Decider 2B, [[2026-10-02-amazon-strands-decider-2b-open-source-decision-model|10-02]]) ya están cubiertos en el sitio; la ventaja de Jev se evaporó rápido adaptando modelos pequeños abiertos.
