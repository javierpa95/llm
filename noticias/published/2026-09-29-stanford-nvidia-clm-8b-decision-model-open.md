---
title: "Stanford y Nvidia lanzan CLM-8B: un modelo abierto de decisiones que es 9 veces más rápido que Jev y no genera ni una sola palabra"
date: 2026-09-29
source: "VentureBeat / Hugging Face"
source_url: "https://venturebeat.com/technology/stanford-and-nvidias-open-clm-8b-caches-reusable-agent-actions-and-runs-up-to-9x-faster-than-jev-in-tests/"
category: "modelos"
summary: "Stanford y Nvidia publican CLM-8B, un modelo de decisiones abierto (Apache 2.0) que usa aprendizaje contrastivo en vez de generación autoregresiva para elegir entre acciones fijas."
reading_time: "4 min"
tags: [decision-models, system-one, contrastive-learning, stanford, nvidia, open-weight, agentes, qwen3-8b]
---

## 🧠 Un modelo que no genera texto — solo elige

Stanford y Nvidia Research han lanzado **CLM-8B** (Contrastive Language Model), un modelo abierto de 8.000 millones de parámetros que no genera texto. En vez de predecir tokens uno a uno como un LLM tradicional, CLM aprende un **espacio de embeddings compartido** entre estados y acciones, y luego selecciona la acción que mejor se alinea con el estado actual.

El resultado es un modelo de "System One" — la categoría que TypeSafe popularizó con Jev — que en tests zero-shot ejecuta **hasta 9 veces más rápido** que Jev en tareas de computer-use, gaming y tool-calling. Cuando se usa como verificador fine-tuneado para tareas de código, establece **nuevo SOTA**: 81.6% en DeepSWE y 87.6% en Terminal-Bench 2.1, con latencia 4-6x menor que Jev.

## Cómo funciona: InfoNCE en vez de autoregressive decoding

La arquitectura de CLM-8B se apoya en un **Qwen3-8B congelado** como backbone encoder, con dos projection heads separadas (una para estados, otra para acciones). El entrenamiento se hace en tres fases:

1. **Pre-training:** ~60 millones de pares Q&A de Nemotron para aprendizaje semántico amplio
2. **Mid-training:** ~30 millones de "hard negatives" sintéticos (respuestas semánticamente similares pero incorrectas)
3. **Post-training:** ~1 millón de trazas de agentes para adaptar a decisiones de tool-calling

La función de pérdida InfoNCE entrena al modelo para acercar pares estado-acción correctos y alejar los incorrectos. En inferencia, en vez de generar tokens, CLM **codifica el estado actual, compara con las embeddings de las acciones candidatas, y selecciona la de mayor similitud coseno**.

## La ventaja clave: caching de acciones reutilizables

La arquitectura dual de encoder permite algo que los modelos generativos no pueden: **cachear las embeddings de acciones por separado**. Si un agente tiene 50 herramientas posibles, CLM puede codificar sus representaciones una vez y reutilizarlas en cada request, codificando solo el estado variable.

En escenarios con ~1.000 candidatos, CLM alcanza **13x más velocidad que Jev**. Esto cambia la ecuación económica de los sistemas multi-agente: donde un LLM generativo necesita procesar todo el prompt y generar una respuesta completa para elegir una herramienta, CLM solo necesita un forward pass de encoder más una comparación de similitud.

## Resultados benchmarks

| Tarea | CLM-8B | Jev | Ratio |
|-------|--------|-----|-------|
| Tool-calling (BFCL v4) | 95.2% | 99.2% | ~1x |
| WikiRacing | 26/30 | 30/30 | ~9x más rápido |
| DeepSWE (fine-tuned) | 81.6% | 71.1% | 4-6x más rápido |
| Terminal-Bench 2.1 (fine-tuned) | 87.6% | 83.1% | 4-6x más rápido |

Los mayores speedups aparecen cuando las acciones son reutilizables a través de múltiples estados, el caso de uso típico de agentes empresariales.

## Disponibilidad y próximos pasos

Los pesos de CLM-8B están disponibles bajo **licencia Apache 2.0** en [Hugging Face](https://huggingface.co/Contrastive-LM/CLM-v0.1-8B), junto con código fuente, una API compatible con TypeSafe y un playground interactivo. El equipo también está entrenando un **CLM-35B multimodal** con más datos y compute, con lanzamiento previsto para principios de octubre.

Como señala Jacky Kwok, project lead en Stanford: "Usa modelos de razonamiento grandes para generar y razonar, y usa CLMs para seleccionar, verificar y monitorizar sus outputs de forma barata." La era de los modelos de decisión dedicados está empezando.
