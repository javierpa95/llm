---
title: "Lev: Jev se hace open-source — un System One model de 4B bajo Apache 2.0 que corre en una sola GPU"
date: 2026-10-01
source: "Interfaze (TypeSafe) / Simon Willison's Blog"
source_url: "https://interfaze.ai/blog/jev-now-open-source-lev"
category: "modelos"
summary: "Interfaze libera Lev, la versión open de Jev: 4B parámetros (Qwen3-5-4B + LoRA), Apache 2.0, misma API, cero tokens de salida y calibración de probabilidades en una sola GPU."
reading_time: "3 min"
tags: [jev, lev, system-one, modelos-abiertos, inferencia, clasificación]
---
BORRADOR pendiente de revisión — candidato a publicar. Contexto: Jev (TypeSafe) ya se cubrió el 22-sep ([[2026-09-22-jev-decision-models-typesafe-ai]]); Lev es la primera versión open de esa categoría "System One": responde preguntas tipadas (sí/no, elección, escala) con probabilidades calibradas en vez de generar texto, sin tokens de salida y compatible con la API de Jev. Tamaño 4B sobre Qwen3-5-4B con LoRA, pesos Apache 2.0 en Hugging Face, ejecutable en una sola GPU del usuario — encaja con el criterio de "IA local" del sitio. Comparar con CLM-8B (Stanford+NVIDIA, publicado el 29-sep), que es la otra gran apuesta abierta en este espacio.
