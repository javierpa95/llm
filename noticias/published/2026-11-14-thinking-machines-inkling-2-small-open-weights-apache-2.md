---
title: "Thinking Machines libera los pesos de Inkling 2 Small: 594B parámetros (17B activos) multimodal y Apache 2.0 tras tests de seguridad externos"
date: 2026-11-14
source: "Thinking Machines Lab / Hugging Face"
source_url: "https://thinkingmachines.ai/news/inkling-2-small"
category: "modelos"
summary: "El laboratorio de Mira Murati publica en Hugging Face los pesos de Inkling 2 Small (594B MoE, 17B activos, contexto 1M) bajo Apache 2.0 tras una semana de safety testing y red-teaming externos."
reading_time: "4 min"
tags: [open-weight, thinking-machines, apache-2.0, moe, multimodal]
---

🧠 **Thinking Machines Lab**, la startup de Mira Murati, ha publicado en Hugging Face los pesos de **Inkling 2 Small** bajo licencia **Apache 2.0**, cumpliendo la promesa que hizo al lanzar el modelo el 5 de noviembre solo en su plataforma Tinker y con pesos cerrados. El retraso no fue casualidad: el laboratorio esperó a completar **pruebas de seguridad externas y red-teaming** antes de liberar nada, siguiendo el enfoque que ellos mismos bautizaron como «a safe path to open weights». El commit inicial en el repositorio llegó a las 19:53 UTC del 12 de noviembre.

## Un gigante MoE con pedestal de seguridad

| Especificación | Valor |
|----------------|-------|
| Parámetros totales | **594B** (MoE, 48 capas) |
| Parámetros activos | **~17B** por token (8 de 384 expertos) |
| Modalidad | Texto + imagen (entrada), texto (salida) |
| Contexto | Hasta **1M tokens** |
| Tamaño de pesos | ~394 GB (NVFP4) / ~623 GB (MXFP8) |
| Licencia | **Apache 2.0** (uso comercial permitido) |

El model card recomienda al menos **500 GB de memoria GPU combinada** para la versión NVFP4 (800 GB para MXFP8), lo que en la práctica exige un nodo multi-GPU como dos Nvidia B300 o cuatro H200. Los expertos van cuantizados en NVFP4 en las capas 0-39 y en MXFP8 en las 8 últimas, un compromiso que permite que quepa en un solo nodo GB200/GB300. La compatibilidad con inferencia local ya cubre **vLLM, SGLang, TokenSpeed y Unsloth**, con soporte también para hardware no-Nvidia como AMD MI350X/MI355X y TPU v7x de Google.

## El modelo abierto más potente construido fuera de China

Antes de liberar los pesos, Inkling 2 Small ya había encabezado los rankings de modelos open weight evaluados por ARC Prize: **81,7% en ARC-AGI-2** y **96,5% en ARC-AGI-1**, además de un 31 en el Artificial Analysis Intelligence Index, el mejor registro para un modelo abierto construido fuera de China. Más de una docena de proveedores (NVIDIA, Fireworks, Together, Baseten, Nebius, Modal, Cloudflare...) ya ofrecen acceso por API, y OpenCode lo ha disponibilizado gratis en algunas regiones por tiempo limitado.

Más allá del benchmark, lo interesante es el **procedimiento**: lanzar primero cerrado, abrir bajo petición de seguridad, y liberar después. Es una plantilla que contrasta con el lanzamiento abierto directo de la mayoría de laboratorios chinos y europeos, y que otros actores occidentales podrían imitar conforme sube la presión regulatoria sobre los open weights de gran tamaño.
