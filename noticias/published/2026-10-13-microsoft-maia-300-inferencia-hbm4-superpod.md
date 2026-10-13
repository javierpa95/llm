---
title: "🔌 Microsoft Maia 300: 288 GB de HBM4, racks de 96 aceleradores y superpods de 12.288 chips para la inferencia agéntica"
date: 2026-10-13
source: "Microsoft Azure Blog / The Decoder"
source_url: "https://azure.microsoft.com/en-us/blog/deep-dive-into-azure-maia-300-architecture/"
category: "hardware"
summary: "Maia 300 llega en 2027: chiplets TSMC N2P, 288 GB de HBM4 a 18 TB/s, formatos sub-3-bit y racks de 96 aceleradores. Microsoft lo desplegará a escala multi-gigavatio."
reading_time: "4 min"
tags: [hardware, microsoft, maia, inferencia, hbm4, mxfp4, kv-cache, datacenter]
---

Microsoft anunció el 12 de octubre su mayor apuesta de silicio propio hasta la fecha: desplegar los aceleradores **Azure Maia** a escala de **multi-gigavatios a partir de 2027**, convirtiéndolos en el sistema principal de inferencia de todos sus productos. El ejecutivo Scott Guthrie confirma que el **Maia 200** ya ejecuta Microsoft Copilot en EE.UU., Europa y Australia, y que GitHub Copilot y Microsoft Foundry lo seguirán antes de fin de año. Satya Nadella lo llamó «nuestra mayor apuesta aún en nuestro propio silicio» y, según [The Decoder](https://the-decoder.com/microsoft-plans-to-scale-its-own-maia-ai-chips-to-gigawatt-levels-by-2027/), el chip sirve modelos de OpenAI, de su familia MAI y de código abierto, con hasta **1,7× más tokens por vatio** que las GPUs líderes en Teams.

## Maia 300: la arquitectura completa

El [deep dive técnico de Azure](https://azure.microsoft.com/en-us/blog/deep-dive-into-azure-maia-300-architecture/) detalla la tercera generación, que llega en 2027. La filosofía es la misma desde el inicio: optimizar todo el sistema —silicio, software, rack, red y datacenter— para un solo objetivo: **tokens útiles por vatio y por dólar**. Los cambios respecto a Maia 200:

| | Maia 200 | Maia 300 |
|---|---|---|
| **Proceso compute** | monolítico | multi-chiplet, compute en TSMC N2P + dies de memoria/E/S |
| **Memoria** | HBM, UMA | 8 stacks **HBM4**, 288 GB, 18 TB/s, organizada **NUMA** |
| **Formatos** | FP8/MXFP8 | MXFP4 mejorado + formatos de **menos de 3 bits** con conversión HW |
| **Rack** | 48 aceleradores | **96 aceleradores** en 24 bandejas de 4, 167 kW, refrigeración líquida (>80% de carga) |
| **Scale-up** | pod | **superpod de 12.288 aceleradores** (128 racks) vía Ethernet AI-transport |

Frente a Maia 200, el salto declarado: **+36% de FLOPs de cómputo, 2,5× de ancho de banda de memoria, +33% de capacidad y ~2× de ancho de banda HBM por vatio**. En conjunto, Microsoft afirma **7× más rendimiento de tokens a escala de rack** y más de **2,5× de rendimiento por vatio**. El secreto no es solo el proceso de 2 nm de los chiplets de cómputo, sino mover la memoria cerca del cómputo: la organización pasa de uniforme (UMA) a **no uniforme (NUMA)** entre chiplets, y la arquitectura de dataflow SDLA —heredada de Maia 200— controla explícitamente DMA, SRAM local, HBM y red-on-chip para que los datos viajen la menor distancia posible. Menos distancia movida significa menos vatios gastados en mover bytes.

## Inferencia disagregada: el KV cache sale del host

Lo que más interés técnico tiene para quien estudia inferencia es el apartado de **inferencia disagregada dentro del dominio de scale-up**: los workers de **prefill** y **decode** se dimensionan y colocan de forma independiente, y una vez terminado el prefill, el **estado KV se mueve directamente a los workers de decode a través del mismo fabric de scale-up**, sin salir por un path de red separado mediado por el host. Es la misma lección que [[2026-09-11-deepseek-v41-flash-kv-cache-ced|DeepSeek V4.1 Flash]] extrajo en software con su arquitectura CED, llevada esta vez al hardware: el cuello de botella de la inferencia larga no es el cálculo, es mover la KV cache sin salir del chip o del rack.

La red completa ese diseño: un pod de 96 aceleradores con enlaces eléctricos directos y conmutados dentro del rack, y un segundo nivel óptico que conecta hasta 128 racks en un superpod donde cualquier acelerador puede enviar **hasta 750 GB/s a cualquier peer**. Tres dominios de latencia (par directo, 1 salto dentro del pod, 3 saltos entre pods) permiten al software mantener el tráfico de tensor-parallelism local, mientras expert/pipeline parallelism cruza racks. Incluso la resiliencia pasa por el fabric: si una bandeja falla, un spare caliente de otro rack la sustituye transparentemente para los kernels.

## Por qué importa

Maia se suma a la carrera de silicio propio para inferencia que ya cubrimos con el [[2026-08-26-openai-jalapeno-benchmarks-inferencia-hot-chips|Jalapeño de OpenAI]], el [[2026-08-14-openai-ultrafast-cerebras-750-tokens-segundo|camino de Cerebras]] y la compra de [[2026-08-08-amd-adquiere-taalas-chips-inferencia-modelo-especifico|Taalas por AMD]], pero va un paso más allá: no vende un chip, vende **rack y datacenter co-diseñados como un solo sistema**, con telemetría que ajusta el punto de operación contra la potencia y la refrigeración disponibles del edificio. Es la respuesta de Microsoft al argumento de que la inferencia agéntica —pasos largos, contextos largos, mucho decode— tiene un perfil aritmético distinto al entrenamiento y no cabe en GPUs diseñadas para ambos. La contrapartida práctica: hasta ahora las GPUs de NVIDIA servían para todo; a partir de 2027, el hiperscaler más grande del mundo ejecutará su inferencia en silicio propio, y los [[2026-10-09-microsoft-rtx-spark-surface-dev-box-1-petaflop-local|equipos con RTX Spark]] muestran que esa estrategia baja también al escritorio. Más detalles llegan en noviembre, en Ignite 2026.
