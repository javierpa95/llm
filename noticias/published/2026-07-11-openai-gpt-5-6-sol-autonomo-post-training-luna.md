---
title: "GPT-5.6 Sol entrena autónomamente a Luna con un solo prompt: la auto-mejora recursiva ya no es teoría"
date: 2026-07-11
source: "The Decoder"
source_url: "https://the-decoder.com/openais-gpt-5-6-sol-autonomously-post-trained-the-smaller-luna-model-with-a-fairly-underspecified-prompt/"
category: "investigación"
summary: "OpenAI demuestra que GPT-5.6 Sol es capaz de post-entrenar al modelo más pequeño Luna de forma autónoma, partiendo de un simple prompt, y alcanza puntuaciones récord en un benchmark interno de auto-mejora recursiva (RSI)."
reading_time: "3 min"
tags: [openai, gpt-5.6, sol, luna, recursive-self-improvement, rsi, post-training]
---

OpenAI ha demostrado que **GPT-5.6 Sol** puede post-entrenar al modelo más pequeño **Luna** de forma completamente autónoma, partiendo de un único prompt que la compañía describe como "bastante sub-especificado" (*fairly underspecified prompt*). El hito, publicado el 10 de julio, representa un paso concreto hacia la ansiada capacidad de **auto-mejora recursiva** (RSI) — la habilidad de un sistema de IA para optimizarse o extenderse a sí mismo sin intervención humana.

Según la información publicada por OpenAI, Sol fue capaz de identificar por sí sola configuraciones de entrenamiento viables, seleccionar las GPUs adecuadas y ejecutar el script de post-training completo para el modelo Luna. Todo ello desencadenado por una instrucción de alto nivel, sin que un ingeniero especificara los detalles técnicos. La compañía ha desarrollado un benchmark interno de RSI que mide la capacidad de un sistema para evolucionar por sí mismo, y en él **Sol obtiene 16.2 puntos más que su predecesor GPT-5.5**.

## Implicaciones para el campo

El concepto de RSI ha sido durante años una línea roja teórica en la seguridad de la IA: un sistema capaz de mejorarse a sí mismo podría escapar del control humano. Con este experimento, OpenAI sugiere que el "investigador automatizado" — un agente de IA que pueda llevar a cabo ciclos completos de investigación y desarrollo — está al alcance de la mano.

Aunque el post-training de Luna no implica que Sol esté rediseñando su propia arquitectura, sí demuestra que un modelo frontier puede orquestar flujos de trabajo de ML complejos. La capacidad de seleccionar hardware, configurar hiperparámetros y ejecutar entrenamiento de forma autónoma reduce drásticamente la barrera para iterar sobre modelos más pequeños, y abre la puerta a que los propios modelos gestionen su propio pipeline de mejora.

## Contexto: GPT-5.6 Sol

El anuncio llega días después de que OpenAI lanzara GPT-5.6 Sol al público junto con [ChatGPT Work](https://llm.javierpenate.com/noticias/2026-07-10-openai-gpt-5-6-publico-chatgpt-work/). En los benchmarks agregados del Artificial Analysis Intelligence Index, Sol obtiene 59 puntos (frente a 60 de Claude Fable 5), pero a un tercio del costo: **1,04 $ por tarea frente a más de 3 $ de Anthropic**. En coding agéntico, Sol supera a todos sus competidores.

La familia GPT-5.6 incluye tres variantes — Sol (flagship), Terra (balance) y Luna (eficiente) — y con esta demostración de RSI, Sol se posiciona no solo como un modelo potente, sino como un paso hacia sistemas cada vez más autónomos.
