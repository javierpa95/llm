---
title: "🛠️ FLUX 3 Image Klein: el modelo open-weights de imagen de 5,6B que genera en 4K y corre con 8 GB de VRAM"
date: 2026-10-16
source: "Black Forest Labs / The Decoder / Hugging Face"
source_url: "https://bfl.ai/blog/flux-3-image-klein"
category: "modelos"
summary: "Black Forest Labs lanza FLUX 3 Image Klein: 5,6B parámetros, salida nativa 4K, edición con bounding boxes, INT8 en 8 GB de VRAM (<9 s en RTX 4070) y licencia gratuita para empresas <5M $."
reading_time: "3 min"
tags: [modelos, imagenes, open-weights, inferencia-local, black-forest-labs, diffusion]
---

**Black Forest Labs** publicó **FLUX 3 Image Klein**, un modelo open-weights de **5,6B de parámetros** para generación text-to-image, edición de imágenes y generación con hasta diez imágenes de referencia ([The Decoder](https://the-decoder.com/black-forest-labs-open-weights-image-model-flux-3-image-klein-runs-on-consumer-gpus-with-just-8-gb-of-vram/), [HF Blog](https://huggingface.co/blog/flux-3)). Admite **salida nativa 4K**, edición «pixel-precise» y bounding boxes para colocar elementos de forma controlada. En pruebas internas, BFL dice que alcanza el Elo más alto entre todos los modelos abiertos, superando incluso a su propio FLUX.2 [pro] cerrado y a Ideogram V4.5, con +91 puntos sobre FLUX.2 [klein] usando un 38% menos de parámetros (5,6B frente a 9B).

### El detalle que importa para inferencia local

Una build **INT8** permite ejecutarlo en GPUs NVIDIA con solo **8 GB de VRAM**, generando una imagen en **menos de 9 segundos en una RTX 4070**. Los pesos se publican bajo la **FLUX Kommunity License**: gratuita para uso comercial por empresas que facturen menos de 5M $ al año. También está disponible vía API de BFL ($0,009 por 1.000 imágenes), en Playground y Hugging Face Spaces, y localmente con **ComfyUI y Diffusers**. El entrenamiento **LoRA funciona desde el día uno** mediante Ostris AI Toolkit y NVIDIA NeMo AutoModel.

Viene a completar la familia FLUX 3 de BFL tras [[2026-09-26-flux-3-action-modelo-robotica-abierto-7b|FLUX 3 Action]] (acción-para-robotos, 7B) y refuerza la tendencia de 2026: los modelos de imagen de calidad frontier se vuelven descargables y caben en hardware de consumo. Pendiente de revisión humana para publicación.
