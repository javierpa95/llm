---
title: "🛠️ BootLoops: el harness open source de Harvard que usó Claude para producir 36 manuscritos científicos en 3 meses"
date: 2026-10-05
source: "The Decoder / Anthropic (guest post)"
source_url: "https://the-decoder.com/open-source-bootloops-harness-supports-ai-models-in-performing-precise-scientific-calculations/"
category: "herramientas"
summary: "Borrador. BootLoops, harness open source del físico de Harvard Matthew Schwartz, usó Claude para producir 36 manuscritos en 18 campos en 3 meses. Advierte: los modelos declaran victoria demasiado pronto."
reading_time: "4 min"
tags: [harness, agentes, open-source, ciencia, claude, harvard, calculo-cientifico]
---

> **BORRADOR** — publicado en pending/ para revisión humana. Candidata relevante no publicada el 2026-10-05 (se priorizó Gemini 4 Argon de Google).

## La noticia

Matthew Schwartz, físico de Harvard y visiting researcher en Anthropic, publicó **BootLoops**, un harness open source para cálculos científicos exactos con LLMs. El contexto: tras "Vibe Physics" (marzo 2026), Schwartz dejó de intentar usar Claude como un investigador humano y empezó a buscar "problemas con forma de Claude" — tareas que aprovechan las fortalezas reales de los modelos actuales.

## Datos técnicos

| Métrica | Valor |
|---|---|
| Manuscritos producidos | **36 en 18 campos** (3 meses, 19 coautores) |
| Integrales calculadas | 30 (15 reproducciones conocidas, 15 nuevas) |
| Ecuación de biodiversidad neutral | Resuelta por primera vez a escala (20 años sin resolverse) |
| Pares de mutaciones analizados | 5,7 mil millones (1000 Genomes) |
| Replication packages verificados | 4.452 (economía, working paper NBER) |
| Base de datos léxica | 6.072 lenguas (AccStack) |
| Stack | Claude Code en terminales de Google Cloud VMs, subagentes en background, master session que coordina |

## Hallazgos clave del post

- **El harness es el producto**: protocol skills y gestión de contexto para paliar la compactación que hacía perder estado a Claude en proyectos largos
- **Los subagentes aíslan los fallos**: los clasificadores de seguridad de Fable 5 cierran un agente, no toda la sesión
- **Modos de fallo documentados**: "Claude declara victoria" ("done, with one asterisk" = "not done at all"), no estima tiempos, prefiere calcular en vez de construir herramientas, y las conclusiones pueden ser wrong aunque los cálculos sean correctos

## Por qué es relevante para el sitio

Encaja con la filosofía del proyecto: harness como capa entre el LLM y la tarea real. Material didáctico sobre por qué los agentes necesitan estructura (misma línea que [[2026-08-23-por-que-skills-ayudan-agentes-princeton|los skills de Princeton]]).

## Ángulo posible

«Por qué los agentes necesitan un arnés: lecciones de un físico que produjo 36 papers con Claude en 3 meses» — centrarse en los modos de fallo y el diseño del harness, no en el hype.

## Fuentes

- https://www.anthropic.com/research/claude-shaped-science (post original, 1 oct 2026)
- https://the-decoder.com/open-source-bootloops-harness-supports-ai-models-in-performing-precise-scientific-calculations/
- https://github.com/BootLoops-ai/bootloops
- http://www.bootloops.ai/
