---
title: "🔬 Rho-1 de Reka AI: un omni-modelo de 19B que genera vídeo en tiempo real y controla robots con los mismos pesos"
date: 2026-10-06
source: "The Decoder / Reka AI"
source_url: "https://the-decoder.com/reka-ais-omni-model-rho-1-handles-text-images-video-and-robot-control-in-a-single-model/"
category: "investigación"
summary: "Borrador. Reka AI publica Rho-1, research preview de 19B que procesa texto, imágenes, vídeo y acciones de robot como tokens en un mismo contexto, sin tool calls. Entrenado con 320 H100 durante ~3 meses."
reading_time: "4 min"
tags: [omni-model, world-model, robotics, video, reka-ai, investigación]
---
> **BORRADOR** — publicado en pending/ para revisión humana. Candidata relevante no publicada el 2026-10-06 (se priorizó Beam de Reflection AI como modelo abierto del día).

## La noticia

**Reka AI** —fundada en 2024 y conocida por Reka Core, que compitió con GPT-4, Claude 3 y Gemini Ultra en 2024— publicó un research preview de **Rho-1**, un **omni-modelo de 19B de parámetros** que procesa y genera **texto, imágenes, vídeo y acciones de robot en una sola red neuronal**. A diferencia de la mayoría de sistemas que enrutan tareas a modelos especializados, Rho-1 ejecuta todas las modalidades como tokens en **una única ventana de contexto compartida, sin tool calls ni modelos externos**. Genera vídeo continuo en tiempo real y responde a instrucciones nuevas sobre la marcha, sin reiniciar.

## Detalles técnicos

- **Mismos pesos, dos funciones**: las mismas predicciones que anticipan imágenes de cámara también controlan el movimiento del robot.
- **Escasez de datos de robótica**: Reka construyó un **modelo de dinámica inversa** que extrae señales de control de vídeos ordinarios de internet.
- **Entrenamiento**: ~**320 GPUs H100** durante unos **tres meses**.
- **Enfoque**: encaja en el empuje de investigación hacia los llamados **world models**, y es compatible con lo que los autores llaman «colapsar el stack multimodal» en una sola arquitectura.

Reka lo presenta como research preview —no como producto—, lo que encaja con el ciclo reciente de omni-modelos y world models que la comunidad está debatiendo (qué cuenta como un world model de verdad frente a un generador de vídeo).
