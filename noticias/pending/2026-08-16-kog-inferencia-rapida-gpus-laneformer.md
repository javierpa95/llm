---
title: "Kog aprieta las GPUs para extraer más inferencia: 3.000 tokens/s en hardware de centro de datos existente"
date: 2026-08-16
source: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/14/kog-is-going-deeper-to-squeeze-more-inference-out-of-gpus/"
category: "hardware"
summary: "La startup francesa Kog persigue 'inferencia LLM 30x más rápida' con optimización software sobre GPUs estándar (MI300X, H200): 3.000 tokens/s por petición con su modelo Laneformer 2B."
reading_time: "3 min"
tags: [inferencia, gpus, optimización, software, laneformer, decoding]
---

La carrera por una inferencia más rápida no pasa solo por chips nuevos: **Kog**, una startup francesa de un solo fundador, apuesta por extraer más rendimiento de las GPUs de centro de datos que las empresas ya tienen. Su demo técnica, que llegó a la portada de Hacker News en mayo, demostró que "la decodificación de peticiones individuales extremadamente rápida es posible en GPUs estándar" como las **AMD MI300X y Nvidia H200** — con 3.000 tokens por segundo (TPS) por petición, eso sí, con un modelo pequeño de ~2.000 millones de parámetros, el ahora open-source **Laneformer 2B**.

El CEO, Gaël Delalleau, asegura que el enfoque funciona igual con LLMs grandes: "las GPUs tienen un futuro brillante" y la idea de que no sirven para decodificar es un concepto erróneo, porque las GPUs modernas acumulan ancho de banda de memoria esperando ser aprovechado. La ingeniería de software se perfila como primer caso de uso, sobre todo para usuarios de Claude Code que esperan horas por resultados — el mismo motivo por el que Anthropic cobra un sobreprecio por su Fast Mode.

Kog ya cuenta con 200 leads de negocio y socios de diseño que generan juegos y apps con prompts, pero reconoce que el mercado no está maduro: sus clientes potenciales no están dispuestos a hacer fine-tuning de modelos pequeños, así que la compañía se ha centrado en acelerar modelos más grandes. No está sola: ZML, también francesa, publicó software que evita CUDA para inferencia rápida en chips de la competencia.
