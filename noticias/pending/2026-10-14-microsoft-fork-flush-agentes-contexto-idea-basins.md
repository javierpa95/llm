---
title: "Microsoft: borrar el historial del chat hace que los agentes de IA encuentren mejores soluciones — 'Fork-and-Flush' sube un 66% la puntuación con el mismo presupuesto de cómputo"
date: 2026-10-14
source: "The Decoder / Microsoft Research (arXiv 2610.07447)"
source_url: "https://the-decoder.com/clearing-chat-history-helps-ai-agents-find-better-solutions/"
category: "investigación"
summary: "Microsoft Research identifica los 'idea basins': agentes autónomos atrapados en su propio contexto acumulado. Fork-and-Flush bifurca ramas con contexto limpio (pero conservando el workspace) y logra +66% de puntuación con el mismo cómputo."
reading_time: "4 min"
tags: [agentes, contexto, microsoft-research, autoresearch, arxiv, memoria]
---
**Microsoft Research** publicó un hallazgo contraintuitivo sobre agentes de IA de larga duración: a veces, el mayor enemigo del agente es su propio historial de conversación. En el paper (arXiv 2610.07447) describen cómo los "Autoresearch agents" —sistemas que proponen soluciones, las evalúan y las refinan iterativamente— **se estancan a pesar de recibir más cómputo**. Ocho ejecuciones independientes del mismo agente sobre la misma tarea terminaron en puntuaciones muy distintas (de 68,3 a 100,0), y las brechas persistían incluso con mucho más presupuesto de cómputo.

Al trazar todas las soluciones en un mapa 2D donde lo similar queda cerca, los investigadores vieron que las soluciones de una misma ejecución casi siempre permanecían en una **región pequeña del mapa**: los llamados **"idea basins"** (cuencas de ideas). El contexto conversacional acumulado actúa como un ancla: el agente sigue refinando dentro de una región poco productiva en lugar de explorar mejores enfoques que otros descubrieron — un patrón que **persiste incluso cuando el agente comprime periódicamente su historial**.

## Fork-and-Flush: bifurcar con workspace, olvidar el chat

La propuesta combina dos mecanismos. En el **forking**, el agente se divide en K ramas paralelas, cada una heredando el workspace completo y todos los archivos generados. En el **flushing**, cada rama pierde **todo su contexto de chat pero conserva el workspace**: empieza una conversación fresca construyendo sobre el trabajo previo. Una rama que hereda el contexto del padre tiende a volver a la misma cuenca porque el razonamiento previo condiciona sus pasos siguientes; el contexto fresco **restaura la diversidad de la búsqueda**.

Resultados sobre 13 tareas largas (de horas a más de 100 horas: empaquetado de poliominós, planificación de taller, criptoanálisis, compresión de clasificadores CIFAR, optimización de kernels VLIW), con GPT-5.6-terra y GPT-5.5 vía GitHub Copilot CLI:

| Método | Puntuación media normalizada | Desviación típica | Mejora relativa |
|---|---|---|---|
| Ejecución única | 0,47 | 0,26 | baseline |
| Best-of-4 | 0,54 | 0,21 | ~+14,9% |
| **Fork-and-Flush** | **0,78** | **0,16** | **+66,0%** |

La media simple de borrar el contexto sin bifurcar ya mejoraba un **22%**. Fork-and-Flush obtuvo la mejor puntuación media en 12 de las 13 tareas y redujo la varianza entre ejecuciones (desviación de 0,16 frente a 0,26).

## ¿Los modelos más fuertes también necesitan reinicios?

Los investigadores probaron MAX-3SAT con Qwen3.5-4B, 9B y 27B: la varianza entre ejecuciones siguió una **curva en U invertida**, con pico en tareas al límite de las capacidades del modelo (mitad entre adivinar al azar y el solver de referencia). Su argumento: los problemas de investigación abierta están, por definición, en el límite de las capacidades del modelo, así que **la variación que explota Fork-and-Flush persistirá** aunque los modelos mejoren — solo se desplazará hacia problemas más difíciles. Los reinicios periódicos de contexto podrían seguir siendo útiles incluso para agentes de investigación frontier.

Conecta con lo que ya cubrimos: los equipos multi-agente que cuestan hasta 5,1× más y solo mejoran en 1 de 4 casos ([Vals AI, 2026-10-12](/noticias/2026-10-12-vals-ai-equipos-agentes-coste-tokens-sin-calidad)) y por qué los agentes necesitan memoria estructurada en lugar de chat infinito.
