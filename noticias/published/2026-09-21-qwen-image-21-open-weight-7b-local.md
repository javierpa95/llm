---
title: "Qwen-Image-2.1: el modelo abierto de 7B que genera y edita imágenes con transparencia RGBA en GPUs de consumo"
date: 2026-09-21
source: "The Decoder / Qwen Blog / Hugging Face"
source_url: "https://the-decoder.com/alibabas-open-weight-qwen-image-2-1-claims-to-beat-closed-models-in-image-generation-with-just-7-billion-parameters/"
category: "modelos"
summary: "Alibaba publica Qwen-Image-2.1, modelo open-weight de solo 7B parámetros que unifica generación y edición de imágenes con soporte RGBA nativo"
reading_time: "3 min"
tags: [qwen, generacion-imagenes, open-weight, local, consumer-gpu, rgba]
---

## 🧠 Qwen-Image-2.1: generación y edición de imágenes con solo 7B parámetros

El equipo Qwen de Alibaba ha liberado **Qwen-Image-2.1**, un modelo open-weight que unifica generación de imágenes desde texto y edición de imágenes existentes en una única arquitectura. Su componente de generación visual tiene solo **7 mil millones de parámetros**, lo que le permite ejecutarse en GPUs de consumo como la RTX 3090, una hazaña inusual para un modelo que afirma superar a la mayoría de modelos cerrados en benchmarks de imagen.

### Capacidades clave

Las novedades principales de Qwen-Image-2.1 respecto a su predecesor son:

- **Generación y edición transparente (RGBA):** el modelo genera nativamente imágenes con canal alfa, permitiendo aislar objetos, cambiar texto en capas transparentes o componer elementos sin fondo — algo que la mayoría de modelos requieren post-procesado para lograr.
- **Edición guiada por pintura y máscaras:** acepta círculos, trazos pintados o máscaras separadas para definir zonas de edición local, manteniendo el resto de la imagen intacta.
- **Hasta 10 imágenes de referencia simultáneas:** útil para retratos grupales, try-on virtual o diseño de interiores con múltiples elementos de referencia.
- **Reutilización de KV cache:** cambios arquitectónicos aceleran la inferencia cuando se procesan varias imágenes de referencia a la vez.

### Disponibilidad y licencia

El modelo está disponible en [Hugging Face](https://huggingface.co/Qwen/Qwen-Image-2.1), [GitHub](https://github.com/QwenLM/Qwen-Image-2.1) y [Model Scope](https://modelscope.cn/models/Qwen/Qwen-Image-2.1), con una demo interactiva en Hugging Face Spaces. Junto con el modelo principal, Qwen ha liberado dos modelos auxiliares de **prompt rewriting** (`Qwen-Image-2.1-PE-T2I` y `Qwen-Image-2.1-PE-I2I`) que convierten instrucciones breves y vagas en prompts detallados para la generación y edición.

La licencia es de **investigación** (no permite uso comercial directo), por lo que empresas interesadas deben solicitar una licencia separada a Qwen. Los benchmarks independientes aún están pendientes, aunque Qwen afirma que supera a la mayoría de modelos cerrados en su propio benchmark interno.

### Contexto: la carrera de modelos abiertos de imagen

Qwen-Image-2.1 se suma a una tendencia creciente de modelos de imagen abiertos que intentan cerrar la brecha con soluciones propietarias como DALL-E, Midjourney o Stable Diffusion. El hecho de que un modelo de solo 7B parámetros pueda competir con modelos mucho más grandes sugiere que la **eficiencia arquitectónica** está ganando terreno frente al simple escalado de parámetros. Para desarrolladores y entusiastas, esto significa que la generación y edición de imágenes de alta calidad cada vez está más al alcance de hardware doméstico.
