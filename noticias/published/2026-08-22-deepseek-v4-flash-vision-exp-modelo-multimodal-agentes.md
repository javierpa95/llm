---
title: "DeepSeek V4-Flash-Vision-Exp: el modelo multimodal de agentes que iguala a Opus 4.8"
date: 2026-08-22
source: "The Decoder"
source_url: "https://the-decoder.com/deepseek-releases-experimental-flash-vision-model-that-rivals-opus-4-8-on-agent-benchmarks/"
category: "modelos"
summary: "DeepSeek añade visión a V4-Flash con V4-Flash-Vision-Exp, un modelo multimodal experimental que rinde casi a la par de Opus 4.8 en benchmarks de agentes."
reading_time: "3 min"
tags: [deepseek, multimodal, agentes, visión, modelos]
---
# 🧠 DeepSeek V4-Flash-Vision-Exp: el modelo multimodal de agentes que iguala a Opus 4.8

DeepSeek ha publicado **V4-Flash-Vision-Exp**, un modelo multimodal experimental que añade comprensión de imágenes a su base **V4-Flash** sin sacrificar el rendimiento textual en razonamiento y conocimiento del mundo. En los benchmarks multimodales internos de agentes, la variante de visión se sitúa muy cerca de **Opus 4.8**, llegando incluso a superarlo en algunas tareas.

El lanzamiento está orientado a **flujos de trabajo de agentes visuales**: el modelo funciona con distintos frameworks de agentes y combina visión con tool use. En la práctica es capaz de describir imágenes, extraer texto de capturas de pantalla y analizar diagramas. Soporta **JPEG, PNG, GIF y WebP**, y detecta el formato real del fichero mirando su contenido, no su nombre o el MIME declarado. Es compatible con las APIs de OpenAI (Chat Completions y Responses) y con el endpoint Messages de Anthropic, y DeepSeek ha actualizado su framework **Harness** (v0.1.1) para darle soporte de serie.

## Detalles técnicos de la API

La entrada de imágenes admite tres vías: **Base64** embebido, **URLs públicas** (hasta 32 MiB) o la nueva **Files API** gratuita, que permite subir un fichero una vez y referenciarlo por ID (límite de 64 MiB). El campo opcional `detail` redimensiona a 512×512 píxeles para ahorrar tokens cuando no se necesita detalle fino. Antes de procesar, el modelo normaliza a ~800×800 píxeles y **cada imagen cuesta como máximo 384 tokens**, con facturación siguiendo las tarifas de V4-Flash.

| Capacidad | Límite |
|-----------|--------|
| Imágenes por petición | hasta 600 |
| Borde máximo (1–14 imágenes) | 8.192 px |
| Borde máximo (≥15 imágenes) | 4.096 px |
| Tokens por imagen | máx. 384 |

Los límites de tamaño bajan cuando sube el número de imágenes, y estas solo pueden enviarse en mensajes de usuario. Con monopolizar el formato abierto y una API tan flexible, DeepSeek vuelve a presionar la frontera de los modelos de agentes en hardware comercial.