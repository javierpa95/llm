---
title: "🔌 Microsoft y NVIDIA estrenan los primeros equipos con RTX Spark: 1 petaflop y 128 GB de memoria unificada para correr LLMs de 120B en local"
date: 2026-10-09
source: "Ars Technica / NVIDIA Newsroom"
source_url: "https://arstechnica.com/gadgets/2026/10/microsoft-event-debuts-new-ai-friendly-hardware-and-windows-changes/"
category: "hardware"
summary: "Surface Laptop Ultra (2.599 $) y RTX Spark Dev Box (5.999 $): SoC Blackwell+Grace con NVLink-C2C, hasta 128 GB unificados y 1 PFLOP FP4 para agentes locales."
reading_time: "4 min"
tags: [hardware, rtx-spark, nvidia, microsoft, ia-local, inferencia, memoria-unificada, agentes]
---

En su **primer evento en directo en dos años**, Microsoft presentó el 7 de octubre lo que hasta ahora solo era un teaser de mayo: los primeros equipos comercializados alrededor del superchip **NVIDIA RTX Spark**, una apuesta conjunta de Microsoft y NVIDIA por « PCs de IA personal ». El evento, con **Jensen Huang** y **Satya Nadella** en el escenario, sacó precios y fechas: el **Surface Laptop Ultra** arranca en **2.599 $** con envíos desde el **16 de octubre** (ya hay reserva previa) y el **Surface RTX Spark Dev Box** se queda en **5.999 $**, según recoge [Ars Technica](https://arstechnica.com/gadgets/2026/10/microsoft-event-debuts-new-ai-friendly-hardware-and-windows-changes/).

## Qué lleva dentro el RTX Spark

RTX Spark no es una GPU: es un **SoC** (system-on-chip) que fusiona en un solo silicio una GPU **Blackwell RTX de hasta 6.144 cores CUDA** con **Tensor Cores de 5ª generación** (precisión **FP4**) y una CPU **Grace ARM de 20 cores** —co-diseñada con MediaTek—, comunicadas mediante el interconnect **NVLink-C2C**. El resultado es un sistema con **hasta 128 GB de memoria unificada LPDDR5x**: la misma memoria sirve para gráficos e inferencia, sin el muro de la VRAM tradicional. NVIDIA anunció originalmente RTX Spark en mayo (GTC Taipei) con una cifra ambiciosa: **1 petaflop de rendimiento en IA** y capacidad declarada para ejecutar **modelos de 120B parámetros con contexto de hasta 1M tokens en local**.

| | Surface Laptop Ultra | Surface RTX Spark Dev Box |
|---|---|---|
| **Precio** | desde 2.599 $ | 5.999 $ |
| **GPU** | Blackwell RTX, 5.120 o 6.144 cores CUDA | GPU Blackwell RTX (1 PFLOP AI) |
| **Memoria** | hasta 128 GB LPDDR5x unificada | 128 GB unificada |
| **Software** | Windows 11 | Windows 11 «developer-optimizado» preconfigurado para IA |
| **Disponibilidad** | reserva previa, envío 16 oct | — |

El Dev Box es una caja de aluminio anodizado negro —con 1.000 rejillas de ventilación, en guiño a los 1.000 teraflops— pensada para lo que Microsoft llama « desarrolladores frontier »: 128 GB unificados y un Windows 11 de edición especial listo para desarrollo de IA. En el portátil, Microsoft demostró que la memoria unificada no sacrifica gaming: mostró **Gears of War: E-Day** corriendo AAA a 1440p sin GPU dedicada.

## Por qué importa para el mundo de los LLM

La dirección es clara: **el modelo grande baja al escritorio**. Ya venimos cubriendo la compresión que lo hace posible —desde [[2026-09-18-prismml-bonsai-2-27b-compresion-5-9gb-local|ternary weights de PrismML]] hasta las cuantizaciones [[2026-09-28-transformers-gguf-llama-cpp-inferencia-local|GGUF dentro de Transformers]]—, pero faltaba el hardware. Con 128 GB unificados y precisión FP4, un LLM de parámetros abiertos cabe íntegro en memoria y el cuello de botella se desplaza de la VRAM al ancho de banda. Es también la respuesta de Microsoft al camino propio de Apple con Apple Silicon y al [[2026-08-26-openai-jalapeno-benchmarks-inferencia-hot-chips|chip Jalapeño de OpenAI]] para centros de datos: dos concepciones distintas de dónde debe vivir la inferencia.

Y no es solo hardware: Microsoft anunció además **cambios en Windows 11** esta otoño orientados a flujos de trabajo agénticos y de IA local, de modo que los agentes personales —la narrativa de toda la keynote— tengan primitivas de seguridad y ejecución nativas en el sistema operativo. Si el chip promete 120B parámetros en local, el sistema operativo necesita saber ejecutar agentes sin convertir el portátil en un vector de ataque: un guiño directo a los problemas de permisos y sandboxing que estamos viendo cada semana con los agentes en la nube.
