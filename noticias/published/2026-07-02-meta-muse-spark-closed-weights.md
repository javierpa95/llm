---
title: "Meta Muse Spark: su primer modelo frontier llega... sin pesos abiertos"
date: 2026-07-02
source: "The Decoder"
source_url: "https://the-decoder.com/metas-muse-spark-is-its-first-frontier-model-and-its-first-without-open-weights/"
category: "modelos"
summary: "Meta lanza Muse Spark, un modelo multimodal con razonamiento y orquestación multi-agente que cierra la brecha con OpenAI y Anthropic, pero rompe con la tradición open-source de la familia Llama al no liberar los pesos."
reading_time: "4 min"
tags: [meta, muse-spark, modelos-frontier, pesos-cerrados, open-source, multimodales, razonamiento]
---

**Meta Superintelligence Labs ha presentado Muse Spark**, el primer modelo de la nueva familia Muse y también el primer modelo frontier de la compañía que **no se publica con pesos abiertos**. Un giro radical para la empresa que popularizó los LLMs open-source con la serie Llama.

El modelo es nativamente multimodal, con capacidades de razonamiento visual (chain-of-thought), tool use y orquestación multi-agente. Está disponible en meta.ai y la app Meta AI, con una API privada en preview para usuarios seleccionados. A diferencia de Llama 3 y 4, Muse Spark **no se puede ejecutar en local** — un quiebre explícito con la filosofía que Meta defendió durante años.

## ⚡ Rendimiento y eficiencia

El servicio independiente [Artificial Analysis](https://artificialanalysis.ai) le otorga **52 puntos en el Intelligence Index**, colocándolo en el **top 5** global. Solo Gemini 3.1 Pro Preview, GPT-5.4 y Claude Opus 4.6 quedan por encima. Para ponerlo en contexto, Llama 4 Maverick y Scout obtuvieron 18 y 13 puntos respectivamente en su lanzamiento.

Meta afirma que Muse Spark iguala las capacidades de Llama 4 Maverick con **más de un orden de magnitud menos de cómputo**, gracias a un stack de pretraining completamente rediseñado (arquitectura, optimización y curación de datos). En el índice de Artificial Analysis, Muse Spark consumió 58 millones de tokens de salida — comparable a Gemini 3.1 Pro (57M) y muy por debajo de Claude Opus 4.6 (157M) o GPT-5.4 (120M).

## 🧠 Técnicas de inferencia

Meta introduce dos enfoques para el test-time compute:

1. **Thought-time penalties**: optimizan el consumo de tokens durante el razonamiento extendido. Meta observó una transición de fase que llaman *"thought compression"*: tras una fase inicial donde el modelo mejora pensando más, la penalización de longitud fuerza a Muse Spark a comprimir su razonamiento y resolver problemas con muchos menos tokens.

2. **Orquestación multi-agente**: múltiples agentes paralelos trabajan simultáneamente en problemas complejos, logrando mejor rendimiento a latencia comparable que un solo agente con más tiempo de cómputo.

El modo *"Contemplating"* combina ambas técnicas y alcanza **58% en Humanity's Last Exam** y **38% en FrontierScience Research**, compitiendo directamente con Gemini Deep Think y GPT Pro.

## 🔒 El fin de una era open-source

El cierre de pesos es la noticia más comentada. Meta, que construyó su reputación en IA liberando Llama, Llama 2, Llama 3 y Llama 4 bajo licenses open-source, ahora guarda su modelo frontier. La compañía sugiere que **partes del modelo podrían abrirse en el futuro**, y el responsable de IA Alexandr Wang afirma que tienen *"planes para abrir versiones futuras"*.

Sin embargo, el cambio refleja una presión creciente: Meta ha invertido hasta **$145.000 millones** en infraestructura de IA este año y ha reducido su plantilla para financiarlo. Mantener los modelos cerrados permite monetizar vía API y recuperar parte de esa inversión.

Debilidades identificadas: Muse Spark aún muestra carencias en tareas agentivas de largo horizonte y flujos de codificación complejos. En el benchmark GDPval-AA, obtiene 1.427 puntos frente a 1.648 de Claude Sonnet 4.6 y 1.676 de GPT-5.4.
