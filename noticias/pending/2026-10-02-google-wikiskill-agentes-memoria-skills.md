---
title: "🔬 WikiSkill: Google Research da a los agentes una memoria estructurada de lo que falló, sin cargarlo en el prompt"
date: 2026-10-01
source: "VentureBeat"
source_url: "https://venturebeat.com/orchestration/googles-wikiskill-gives-ai-agents-a-memory-of-what-went-wrong-without-putting-it-in-the-prompt"
category: "investigación"
summary: "Google Research + Virginia Tech publican WikiSkill: una capa wiki estructurada entre la experiencia del agente y sus skills. Un Qwen 9B supera a un modelo 27B reutilizando skills evolucionados."
reading_time: "4 min"
tags: [agentes, skill-evolution, memoria, google-research, qwen, agentic-coding]
---

## 🔬 El problema: los agentes se olvidan de sus propios errores

Los frameworks de *skill evolution* intentan que los agentes mejoren solos: ejecutan tareas, analizan los intentos fallidos y generan "skills" reutilizables (instrucciones, scripts, flujos de trabajo). El problema es que muchos de esos sistemas **descartan el diagnóstico** cuando proponen un parche: si el optimizador prueba un fix y este falla la validación, ese conocimiento se pierde — y el agente vuelve a cometer exactamente el mismo error en la próxima sesión.

Como resume Liyan Tang, research scientist de Google y co-autora del paper: *"En muchos frameworks de auto-mejora, un optimizador lee las trazas, propone un parche y luego descarta el diagnóstico, incluido qué fixes fallaron en validación. Eso significa que el sistema sigue redescubriendo los mismos failures y re-proponiendo fixes ya rechazados."*

## La solución: una wiki como capa intermedia

**WikiSkill**, de Google Research y Virginia Tech, introduce una capa de conocimiento estructurado —una wiki— entre la experiencia cruda del agente (trazas de ejecución) y las skills que termina usando. En vez de derivar skills de trayectorias aisladas cada vez, el framework mantiene un registro persistente de diagnósticos, intentos fallidos y lecciones aprendidas, y construye las nuevas skills a partir de esa wiki.

En los experimentos, WikiSkill superó a los métodos existentes (Trace2Skill, EvoSkill, SkillOpt) en distintos dominios y modelos. El resultado más llamativo: **un Qwen de 9B con skills evolucionadas superó a un modelo de 27B**, y las skills entrenadas **transferieron entre modelos** distintos.

## Por qué importa

Para equipos que despliegan agentes en producción, WikiSkill apunta a algo práctico: convertir los *execution traces* que los agentes ya generan en conocimiento reutilizable, sin tener que meter todo en el prompt ni reentrenar el modelo. Es otro eslabón en la tendencia de tratar la memoria y el aprendizaje del agente como problema de infraestructura, no de arquitectura del modelo.

---

**Fuentes:** [VentureBeat](https://venturebeat.com/orchestration/googles-wikiskill-gives-ai-agents-a-memory-of-what-went-wrong-without-putting-it-in-the-prompt)
