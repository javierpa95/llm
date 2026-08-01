---
title: "DeepSeek V4 Flash-0731: 304B parámetros, MIT, y 60% más barato que GPT-5.6 Luna"
date: 2026-08-01
source: "The Decoder / HuggingFace"
source_url: "https://the-decoder.com/new-deepseek-flash-model-matches-openais-gpt-5-6-luna-at-roughly-60-percent-lower-cost/"
category: "modelos"
summary: "DeepSeek lanza V4 Flash-0731: 304B parámetros MoE, licencia MIT, puntuación 50 en Intelligence Index (a 1 punto de GPT-5.6 Luna) y un 60% más barato por tarea."
reading_time: "3 min"
tags: [deepseek, moe, open-weight, precio-performance, inference, agentic]
---

DeepSeek ha lanzado **V4 Flash-0731**, una actualización significativa de su modelo Flash que ahora alcanza un **índice de inteligencia de 50** en el Intelligence Index de Artificial Analysis — tan solo un punto por detrás de GPT-5.6 Luna de OpenAI, pero a un coste **aproximadamente 60% menor por tarea**. El modelo, con 304.000 millones de parámetros en arquitectura MoE (Mixture of Experts), pesa 167 GB en HuggingFace y está disponible bajo **licencia MIT**.

## Especificaciones clave

| Característica | Valor |
|---|---|
| Parámetros | 304B (MoE) |
| Peso en disco | ~167 GB (safetensors) |
| Licencia | MIT |
| Intelligence Index | 50 |
| Coste entrada | $0,14 / millón de tokens |
| Coste salida | $0,27 / millón de tokens |
| Capacidad agente | Mejorada significativamente |

El salto respecto a la versión anterior es notable: V4 Flash sube **diez puntos** en el Intelligence Index, pasando de ~40 a 50. Para contextualizar, modelos como MiniMax M3 (428B), Kimi K3 y GLM-5.1 cuestan **diez veces más** por nivel de inteligencia comparable. Los modelos que lo superan — Grok 4.5, Gemini 3.6 Flash, Claude Opus 5 — sitúan sus precios entre $0,4 y $3 por tarea.

## Capacidades agente mejoradas

DeepSeek destaca que esta versión incluye **capacidades agente sustancialmente mejoradas**. Esto es relevante porque el mercado se está moviendo rápidamente hacia modelos que no solo generan texto, sino que ejecutan acciones: navegar web, usar herramientas, gestionar archivos. Con un precio tan bajo, V4 Flash-0731 se convierte en un candidato serio para agentes en producción donde el coste por llamada importa.

## Disponibilidad

El modelo está disponible inmediatamente en [HuggingFace](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-0731) con 1.149 likes en menos de 24 horas. Es compatible con Transformers, vLLM y los principales frameworks de inferencia. También soporta cuantización FP8 y 8-bit para ejecución en hardware con menos VRAM.

El paper técnico está en [arXiv:2606.19348](https://arxiv.org/abs/2606.19348), titulado *"DeepSeek-V4: Towards Highly Efficient Million-Token Context Intelligence"*.
