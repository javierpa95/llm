---
title: "OpenAI presenta GPT-5.6: Sol, Terra y Luna — tres modelos para escalar la inferencia"
date: 2026-06-27
source: "Simon Willison's Blog / OpenAI"
source_url: "https://simonwillison.net/2026/Jun/26/"
category: "modelos"
summary: "OpenAI lanza la serie GPT-5.6 con tres modelos (Sol, Terra, Luna) en preview limitada. Sol es el flagship a $5/$30 por millón de tokens, Terra compite con GPT-5.5 a mitad de precio, y Luna es la opción más rápida y barata."
reading_time: "3 min"
tags: [openai, gpt, modelos, lanzamiento, precios, inferencia]
---

## Qué ha pasado

OpenAI ha anunciado la serie **GPT-5.6**, compuesta por tres modelos: **Sol** (flagship), **Terra** (equilibrado para trabajo diario) y **Luna** (rápido y económico). El lanzamiento comienza con una *limited preview* para un grupo reducido de partners de confianza, después de que el gobierno de EE.UU. revisara los planes y capacidades de los modelos.

Los precios por millón de tokens son:

| Modelo | Input | Output |
|--------|-------|--------|
| **Sol** | $5 | $30 |
| **Terra** | $2.50 | $15 |
| **Luna** | $1 | $6 |

Terra ofrece rendimiento competitivo con GPT-5.5 siendo 2× más barato, mientras que Luna lleva capacidades sólidas al coste más bajo de la serie.

## Por qué es relevante

GPT-5.6 introduce además un sistema de **prompt caching más predecible**: incluye *cache breakpoints* explícitos y una vida mínima de caché de 30 minutos. Las escrituras en caché se facturan a 1.25× la tasa de input sin caché, mientras que las lecturas mantienen el 90% de descuento sobre input cacheado.

Este avance en eficiencia de inferencia va de la mano con los nuevos chips especializados que [[2026-06-27-openai-broadcom-jalapeno-chip-llm-inference|Openlayers y Broadcom están desarrollando]].

La *system card* de GPT-5.6 también documenta mejoras en **resistencia a prompt injection**, un área donde los frontier models han avanzado significativamente — como refleja el experimento de OpenClaw donde Opus 4.6 resistió 6,000 intentos de ataque.

## Contexto

Este lanzamiento llega en un momento donde los frontier models están sujetos a revisión gubernamental. OpenAI no espera autorización completa para el modelo hasta las próximas semanas, y está presionando junto a Anthropic por un proceso de revisión legalmente definido, en lugar de decisiones caso por caso. La serie GPT-5.6 representa un paso intermedio entre GPT-5.5 y el eventual GPT-6.
