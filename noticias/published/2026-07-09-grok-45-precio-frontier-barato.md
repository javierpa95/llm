---
title: "Grok 4.5 es tan barato frente a Fable 5 y GPT-5.5 que las diferencias en benchmarks casi no importan"
date: 2026-07-09
source: "The Decoder"
source_url: "https://the-decoder.com/grok-4-5-is-so-cheap-compared-to-fable-5-and-gpt-5-5-that-benchmark-gaps-may-not-matter-much/"
category: "industria"
summary: "xAI posiciona Grok 4.5 como el modelo frontier más rentable: cuesta $0.31 por tarea frente a los $11.80 de Fable 5, con solo un punto de diferencia en benchmarks de coding. Sin embargo, la tasa de alucinaciones se duplicó respecto a Grok 4.3."
reading_time: "3 min"
tags: [xai, grok, modelos, precios, inferencia, competencia, abiertos]
---

## Qué ha pasado

xAI ha publicado nuevas cifras que sitúan a **Grok 4.5** como el modelo frontier más eficiente en coste del mercado. Según el análisis independiente de **Artificial Analysis**, Grok 4.5 ejecuta una tarea por solo **$0.31**, frente a los $11.80 de Claude Fable 5 y los $5.07 de GPT-5.5 en Codex — una diferencia de entre **16× y 38×** más barato.

En el **Coding Agent Index**, Grok 4.5 corriendo en Grok Build (el equivalente xAI a Claude Code) empata virtualmente con GPT-5.5 (76 vs 77 puntos) y queda a solo un punto de Fable 5 (76 vs 77), pero con un coste por tarea de $2.49 frente a $11.80 de Fable 5 y usando 3.8× menos tokens (1.9M frente a 7.2M).

## Por qué es relevante

La estrategia de xAI replica el enfoque que han popularizado los proveedores chinos (DeepSeek, Zhipu): acercarse lo suficiente en rendimiento y ganar por precio. En **Terminal Bench 2.1**, Grok 4.5 marca 83.3% frente al 83.4% de GPT-5.5 y el 84.3% de Fable 5 — diferencias marginales para un modelo que cuesta **5× menos por token** que Fable 5 ($2/$6 por millón de tokens vs $10/$50).

| Comparativa | Grok 4.5 | GPT-5.5 | Fable 5 |
|------------|----------|---------|---------|
| Terminal Bench 2.1 | 83.3% | 83.4% | 84.3% |
| SWE Bench Pro | 64.7% | — | 80.4% |
| Coste/tarea (código) | $2.49 | $5.07 | $11.80 |
| Tokens/tarea | 1.9M | 6.2M | 7.2M |
| Precio input (USD/M tok) | $2 | $5 | $10 |

GroK 4.5 también es **token-eficiente**: usa 4.2× menos tokens que Opus 4.8 en SWE Bench Pro y entrega 80 tokens/segundo en inferencia.

## Contrapartida

No todo son buenas noticias. La tasa de alucinaciones en el **AA-Omniscience Index** saltó del 25% al 54% — el modelo sabe más, pero también está más seguro cuando se equivoca. Además, Grok 4.5 **no está disponible en la UE** aún (xAI apunta a mediados de julio).

El modelo se entrenó en decenas de miles de GPUs Nvidia GB300 y ya está disponible a través de Grok Build, Cursor y la consola de xAI, con plugins para Word, PowerPoint y Excel.

## Contexto

Este lanzamiento llega tras la adquisición de Cursor por parte de SpaceX por $60 mil millones en acciones en junio. xAI también compite en un mercado donde [[2026-07-08-tencent-hy3-295b-moe-apache2|modelos abiertos como Tencent Hy3]] y los recortes de costes de [[2026-07-04-mistral-leanstral-1-5|Mistral]] presionan los precios a la baja.
