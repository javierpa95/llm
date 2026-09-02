---
title: "Anthropic lanza Claude Fable 5.1: mejor coding, 45% más barato y marcas de agua integradas"
date: 2026-09-02
source: "The Decoder"
source_url: "https://the-decoder.com/anthropics-claude-fable-5-1-promises-better-coding-and-research-at-up-to-45-percent-less/"
category: "modelos"
summary: "Fable 5.1 dobla el rendimiento en agentic coding y cuesta hasta 45% menos que su predecesor gracias a cache reads más baratos."
reading_time: "3 min"
tags: [anthropic, claude, fable, benchmark, coding, pricing]
---

Anthropic ha lanzado **Claude Fable 5.1**, la versión actualizada de su modelo más potente para tareas agentic. Junto a él, llega **Mythos 5.1**, una variante con permisos más restrictivos destinada a ciberseguridad y ciencias de la vida. Los dos comparten base pero difieren en las guardrails de seguridad.

## Rendimiento: benchmarks que hablan claro

Los saltos son considerables. En **Terminal-Bench-Science 0.1** (investigación agentic), Fable 5.1 alcanza el **52,6%**, más del doble del 24,7% de Fable 5 y muy por encima del 22,4% de GPT-5.6 Sol. En **Terminal-Bench 4.0** (coding agentic), Fable 5.1 puntúa 55,8% y Mythos 5.1 llega al 60,9%, frente al 42,0% de Fable 5 y el 37,3% de GPT-5.6 Sol.

| Benchmark | Fable 5.1 | Fable 5 | Opus 5 | GPT-5.6 Sol |
|-----------|-----------|---------|--------|-------------|
| Terminal-Bench-Science 0.1 | **52,6%** | 24,7% | 29,0% | 22,4% |
| Terminal-Bench 4.0 | **55,8%** / 60,9% (Mythos) | 42,0% | 52,3% | 37,3% |
| GDPval-AA v2 | **1853** | 1723 | 1824 | — |

## Precio: cache reads un 75% más baratos

El principal cambio de pricing es la reducción de **cache reads de $1 a $0,25 por millón de tokens**. Esto se traduce en un ahorro de ~25% para workloads típicos y hasta **~45% para flujos de trabajo agentic** con muchas tool calls y contextos largos. Los precios de input/output se mantienen en $10 y $50 por millón de tokens respectivamente.

Sin embargo, **Artificial Analysis** cuestiona la afirmación de ahorro: a *max effort*, Fable 5.1 usa ~1,7× más output tokens que Fable 5, lo que eleva el coste real por tarea. En el benchmark Intelligence Index, Fable 5.1 a max effort cuesta $3,76 por tarea frente a $2,34 de Opus 5 (que solo pierde 3 puntos).

## Primeros Claude con marcas de agua

Un dato sin precedentes: Fable 5.1 y Mythos 5.1 son los **primeros modelos Claude con watermarks integrados** en el texto generado. Anthropic ha lanzado una API de detección en *private preview* que permite a reguladores, medios y verificadores de hechos comprobar si un texto contiene la marca. La empresa planea ampliar el acceso progresivamente.

## Mythos 5.1: acceso restringido

Mientras Fable 5.1 está disponible de forma general, **Mythos 5.1** solo se ofrece a través de programas de acceso especializados en ciberseguridad y ciencias de la vida. Mythos alcanza el 60,9% en Terminal-Bench 4.0, superando a todas las alternativas conocidas.

La baja adopción de Fable 5 entre clientes enterprise —aggravada por su alto coste— fue el impulso principal detrás de esta revisión rápida. Con Opus 5 ya igualando o superando a Fable 5 en la mayoría de benchmarks a menor precio, la presión competitiva era evidente.
