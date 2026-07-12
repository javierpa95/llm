---
title: "Agentes de IA vencen en Slay the Spire 2 al sustituir el chat infinito por memoria estructurada"
date: 2026-07-12
source: "The Decoder"
source_url: "https://the-decoder.com/ai-agents-win-at-slay-the-spire-2-after-researchers-replace-growing-chat-logs-with-structured-memory/"
category: "investigación"
summary: "El proyecto AgenticSTS reemplaza el chat creciente de los agentes de IA por cinco capas de memoria separadas. En Slay the Spire 2, el prompt se mantiene en ~5.000 tokens frente a los 500.000+ de los agentes tradicionales."
reading_time: "3 min"
tags: [memoria estructurada, agentes, context rot, eficiencia, investigación aplicada]
---

El principal problema de los agentes de IA actuales es que su contexto crece sin control: cada paso añade observaciones, llamadas a herramientas y reflexiones al historial, hasta que la ventana se desborda o la atención del modelo se diluye. Los investigadores llaman a esto **"context rot"**, y el proyecto **AgenticSTS** demuestra que se puede evitar con una arquitectura de memoria radicalmente distinta.

Desarrollado por Alaya Lab en colaboración con la Universidad Jiao Tong de Shanghái, AgenticSTS elimina por completo el chat acumulativo. En su lugar, para cada decisión **reconstruye el prompt desde cero** usando cinco ranuras fijas de información:

| Capa | Contenido |
|------|-----------|
| L1 | Instrucciones fijas del protocolo |
| L2 | Esquemas de estado con acciones válidas |
| L3 | Reglas del juego recuperadas bajo demanda |
| L4 | Resúmenes de partidas anteriores |
| L5 | Habilidades estratégicas activadas por contexto |

El resultado es que el prompt de usuario se mantiene en **~5.000 tokens** independientemente de la duración de la partida, frente a los **~527.000 tokens** que acumulan los agentes tradicionales (como STS2MCP) al reenviar todo el historial en cada llamada.

## Resultados contra el estado del arte

En la prueba principal sobre el juego de cartas Slay the Spire 2 (dificultad A0), AgenticSTS gana **6 de 10 partidas**. Los agentes competidores (STS2MCP y CharTyr), que usan el patrón clásico de historial creciente, **no ganaron ninguna** de sus 5 ejecuciones. La diferencia en coste es aún más llamativa: por cada punto que los competidores consiguen, envían entre **66 y 90 veces más tokens** al modelo.

El 96% del tiempo ahorrado corresponde directamente a latencia del modelo — no al software de control. Mientras un agente tradicional puede tardar ~4× más en alcanzar el mismo nivel, AgenticSTS completa las partidas mucho más rápido porque no espera a que el modelo procese cientos de miles de tokens por decisión.

## Lecciones para el diseño de agentes

El estudio revela hallazgos importantes:

- **La memoria no se transfiere entre modelos**: el stack de memoria acumulado por Gemini 3.1 Pro no funcionó con Qwen 3.6-27B (empeoró un 18%) ni DeepSeek V4-Pro. Los contenidos de la memoria están ligados al modelo que los creó.
- **El desglose por capas permite atribución**: al separar cada tipo de información, los investigadores pueden identificar qué componente genera cada mejora — algo imposible en un chat monolítico.
- **El paper es conservador**: con solo 10 ejecuciones por condición y un solo personaje probado, los autores reconocen que la duplicación de tasa de victorias podría ser ruido estadístico.

El equipo ha publicado **298 partidas completas, instantáneas de memoria congeladas y scripts de evaluación** en Hugging Face, permitiendo que otros grupos prueben arquitecturas alternativas en el mismo entorno. El proyecto se suma a otras soluciones emergentes contra el context rot: la Memory Tool de Anthropic, el framework GAM chino y el sistema de notas externas de Mastra.
