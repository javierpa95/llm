---
title: "MiniMax H3: primer modelo abierto en liderar un ranking de vídeo IA, con 33B parámetros multimodales"
date: 2026-08-04
source: "The Decoder"
source_url: "https://the-decoder.com/chinas-minimax-h3-is-the-first-open-model-to-top-an-ai-video-ranking/"
category: "modelos"
summary: "MiniMax publica los pesos de H3, un modelo multimodal de 33B parámetros que lidera el ranking de edición de vídeo de Artificial Analysis por primera vez para un modelo abierto."
reading_time: "2 min"
tags: [minimax, open-weight, video, multimodal, generacion-video]
---

MiniMax ha liberado los pesos de **H3**, un modelo de vídeo de 33.000 millones de parámetros que procesa texto, imágenes, vídeo y audio de forma conjunta, generando clips de 4 a 15 segundos con sonido estéreo. Según Artificial Analysis, es el **primer modelo open-weight en liderar un ranking de vídeo**: primero en edición de vídeo, segundo en texto-a-vídeo y tercero en imagen-a-vídeo. Un único prompt puede incluir hasta nueve imágenes de referencia, tres clips de vídeo y tres clips de audio.

## Qué queda cerrado y cómo ejecutarlo

No todo es abierto: el módulo de resolución 2K y **H3-Context-IR** (el componente que traduce prompts y material de referencia a un formato intermedio estructurado) no se incluyen. Ejecutando H3 localmente en ComfyUI el tope es 768p, y hay que preparar el contexto manualmente con las guías de prompting publicadas por MiniMax. Los pesos abiertos sí permiten fine-tuning sobre metraje propio, personajes o estilos visuales concretos.

La licencia tiene una salvedad importante: el uso comercial solo está permitido para empresas por debajo de cierto umbral de facturación. El mismo día, ByteDance lanzó su **Seedance 2.5** cerrado, que genera clips de 30 segundos con audio integrado.
