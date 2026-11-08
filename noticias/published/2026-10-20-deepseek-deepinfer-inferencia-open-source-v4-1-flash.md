---
title: "🛠️ DeepSeek abre DeepInfer: el framework de inferencia que mueve su producción en vivo, con kernels propios, verificación programada por confianza y soporte de Ascend 950"
date: 2026-10-20
source: "DeepSeek AI (GitHub) / Hacker News"
source_url: "https://github.com/deepseek-ai/DeepInfer"
category: "herramientas"
summary: "DeepSeek publica el framework de inferencia de alto rendimiento que alimenta sus servicios de producción: kernels optimizados, scheduling asíncrono sin overhead, inferencia batch-invariante y muestreo determinista, sobre NVIDIA SM100 y Huawei Ascend 950."
reading_time: "4 min"
tags: [inferencia, deepseek, open-source, kernels, speculative-decoding]
---

DeepSeek ha liberado **DeepInfer**, el framework de inferencia de alto rendimiento que mueve sus propios servicios de producción a gran escala. La versión open source incluye inferencia offline con las piezas centrales de serving a escala: es lo más cercano a una mirada por dentro de cómo opera realmente un proveedor de LLMs cuando el volumen es el objetivo de diseño ([repo en GitHub](https://github.com/deepseek-ai/DeepInfer), ya con más de 25.000 estrellas en su primera semana).

### Qué incluye y por qué importa

El framework soporta **DeepSeek-V4.1-Flash** y se apoya en los kernels propios de la casa: [FlashMLA](https://github.com/deepseek-ai/FlashMLA), DeepGEMM, DeepEP, TileKernels y DeepSelect, más kernels custom en TileLang. Sobre esa base añade las técnicas que hoy definen la inferencia eficiente en MoEs grandes:

| Técnica | Qué aporta |
|---|---|
| DSpark + verificación por confianza | Decodificación con draft tokens (MTP) donde la estimación de confianza programa cuándo verificar, con draft por defecto de 5 tokens |
| SWA bounded replay | Reduce el prefill del decoder reproduciendo solo un sufijo acotado (140 tokens por defecto en V4.1) |
| Scheduling asíncrono | Solapa la planificación de batches en CPU con la ejecución en GPU, activado por defecto y sin overhead |
| Inferencia batch-invariante | Resultados idénticos entre composiciones de batch distintas (solo NVIDIA) |
| Muestreo determinista | Mismas entradas y parámetros → misma salida, con semilla fija por secuencia |
| Structured outputs | Generación restringida a regex, JSON Schema o gramáticas EBNF |

Las dos últimas son señal de madurez industrial: **reproducibilidad y salidas estructuradas** son requisitos para agentes fiables y pipelines de evaluación, y DeepInfer las trata como ciudadanos de primera clase en vez de parches posteriores.

### La lectura estratégica: dos ecosistemas de hardware

DeepInfer declara soporte para **NVIDIA SM100** y para los **NPUs Huawei Ascend 950**. No es un detalle menor: es la materialización de la transición que China lleva meses preparando —frameworks de inferencia soberanos que corren igual de bien sobre hardware nacional que sobre GPUs de NVIDIA. Combinado con los [controles de exportación chinos sobre open weights](/noticias/2026-10-17-china-controles-exportacion-open-weights) propuestos días antes, el mensaje es coherente: el ecosistema abierto de DeepSeek quiere seguir siendo exportable incluso si los pesos grandes acaban bajo licencia.

Lo que no incluye esta release es la capa de producción completa —falta el sistema de KV cache y la separación VE/prefill/decode—, así que para montar un servicio completo hay que aportar esas piezas. Aun así, como referencia de cómo se sirve un modelo MoE frontier a escala, hay poco publicado comparable.
