---
title: "Google lanza EmbeddingGemma 2: el modelo abierto de embeddings multimodales que corre en el navegador con 191 MB de RAM"
date: 2026-10-08
source: "Google Blog / The Decoder / Hugging Face"
source_url: "https://blog.google/innovation-and-ai/technology/developers-tools/embeddinggemma-2/"
category: "herramientas"
summary: "EmbeddingGemma 2 (740M params, Apache 2.0) unifica texto, imagen, vídeo, audio y código en un solo espacio de embeddings; 20-70 ms por query vía WebGPU y RAG local sin API key."
reading_time: "3 min"
tags: [embeddings, gemma, rag-local, webgpu, multimodal, open-source, google]
---

**BORRADOR — pendiente de revisión y publicación**

Google ha publicado **EmbeddingGemma 2**, la segunda generación de su modelo de embeddings ligero, ahora **nativamente multimodal**: convierte texto, imágenes, vídeo, audio y código en vectores numéricos dentro de un **único espacio de embeddings compartido**.

## Datos clave

- **740M parámetros**, licencia **Apache 2.0** (uso comercial permisivo)
- Construido sobre la arquitectura **Gemma 4**, compartiendo tokenizer y codificador de audio con los modelos generativos de la familia
- Contexto de **8K tokens** (4× más que la generación anterior): hasta 5,5 minutos de audio, 29 imágenes o 58 fotogramas de vídeo por consulta
- **Corre localmente sin API key**: 20-70 ms por query vía **WebGPU** en el navegador, ~191 MB de RAM
- Reduce el almacenamiento de bases vectoriales locales **hasta 6×**
- Existe una variante de **270M parámetros** para tareas solo de texto
- Benchmarks: **78,68 en MTEB-Code** (vs. 68,76 de la generación anterior), al nivel de modelos mucho mayores; supera a rivales del doble de su tamaño en embeddings multimodales

## Por qué importa

Combinado con modelos pequeños como **Gemma 4**, permite montar pipelines de **RAG 100% offline** — sin enviar datos a servidores externos. Pesos disponibles en Hugging Face y Kaggle, con guía de desarrollador y demo WebGPU.

Relevante para el ecosistema de [[2026-09-28-transformers-gguf-llama-cpp-inferencia-local|inferencia local]] que venimos cubriendo, y como pieza de la apuesta de Google por el edge AI.
