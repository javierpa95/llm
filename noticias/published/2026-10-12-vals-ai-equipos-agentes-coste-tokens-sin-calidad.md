---
title: "Los equipos de agentes cuestan hasta 5,1× más que un solo agente y solo mejoran en 1 de 4 casos: Vals AI mide el precio real del multi-agente"
date: 2026-10-12
source: "Vals AI (Vibe Code Bench) / The Decoder"
source_url: "https://www.vals.ai/blogs/multi-agent-vibe-code-bench"
category: "investigación"
summary: "Vals AI enfrenta agente único y equipo de subagentes (GPT-6 Sol, Claude Opus 5.5) en 50 apps: de 1,8 a 5,1× más coste con solo 1 de 4 mejoras significativa. El culpable: contexto duplicado en KV cache."
reading_time: "4 min"
tags: [agentes, multi-agente, kv-cache, costes-inferencia, benchmark, openai, anthropic, subagentes]
---

OpenAI y Anthropic ya envían multi-agente de serie: en la [Agents API](/noticias/2026-09-12-openai-agents-api-beta-publico) un agente líder puede lanzar subagentes con el modo `multi_agent` activado, y en Claude Code el líder reparte subtareas con sus herramientas de subagente. El mensaje comercial es que un equipo de agentes ataca las piezas de una tarea en paralelo. **Vals AI acaba de medir cuánto compra eso y cuánto cuesta**: la respuesta, en su *Vibe Code Bench*, es que los equipos cuestan entre **1,8 y 5,1 veces más** que un agente único y que de cuatro comparaciones directas **solo una mejora es estadísticamente significativa**.

## El experimento: 50 aplicaciones, dos modelos, ocho configuraciones

Vals AI usó su benchmark de construcción de **aplicaciones web completas** a partir de una especificación de producto: cada app se despliega con Docker Compose y se evalúa con agentes de navegador que hacen clic en sus flujos de interfaz. El trabajo se reparte de forma natural en base de datos, API, interfaz y despliegue — y los errores en las costuras entre piezas penalizan directamente la puntuación. Corrieron **GPT-6 Sol** (vía Agents API) y **Claude Opus 5.5** (vía Claude Code en modo headless), cada uno como agente único y como equipo de hasta **cinco subagentes en paralelo**, con esfuerzo de razonamiento *medium* y *max*. La instrucción de delegación fue la misma para ambos líderes; el resto (tarea, sandbox y evaluador) idéntico.

| Modelo | Configuración | Puntuación | Coste por app | Runtime |
|--------|---------------|------------|---------------|---------|
| GPT-6 Sol | medium, agente único | 77.6% | $1.22 | 12.4 min |
| GPT-6 Sol | medium, equipo | 84.9% | $3.07 | 11.9 min |
| GPT-6 Sol | max, agente único | 89% | $4.82 | 38.4 min |
| GPT-6 Sol | max, equipo | 90.4% | $8.54 | 27.6 min |
| Claude Opus 5.5 | medium, agente único | 91.5% | $4.08 | 20.3 min |
| Claude Opus 5.5 | medium, equipo | 91.2% | $9.10 | 26.6 min |
| Claude Opus 5.5 | max, agente único | 89.8% | $23.77 | 74.7 min |
| Claude Opus 5.5 | max, equipo | 93.2% | $122 | 174.1 min |

Solo una diferencia pasó la prueba estadística: el equipo de Sol a esfuerzo *medium* sumó **7.3 puntos** sobre su agente único (p = 0.005). Las otras tres — de −0.3 a +3.4 puntos — no son significativas. Es decir: **el equipo de Opus a medium fue literalmente peor** (−0.3), y la configuración más cara del estudio (Opus *max* en equipo, 93.2%) solo superó en 1.6 puntos a la más barata (Opus *medium* en solitario, 91.5% por $4.08) por **30 veces el precio**, sin significación estadística. Para Sol, además, subir el esfuerzo de razonamiento del agente único ganó más que montar un equipo (+11.4 puntos, p < 0.001).

## La anatomía del sobre-coste: cada subagente arrastra su propio contexto

El hallazgo que más interesa a quien estudia cómo funcionan estos modelos es **dónde se va el dinero**: casi todo el gasto extra es **input cacheado**. Cada subagente mantiene su propio contexto — la especificación del proyecto y su estado intermedio — que se reenvía en **cada** llamada al modelo. En las configuraciones de Opus *max*, los subagentes leyeron una mediana de **224 millones de tokens cacheados por aplicación**, frente a 17 millones del líder y 55 millones del agente único que hizo el mismo trabajo solo. El *prefix caching* (el KV cache reutilizado entre llamadas) evita recomputar ese prefijo, pero **no lo hace gratis**: multiplicar agentes multiplica contextos facturados, y la caché solo amortiza el cálculo, no la longitud del prompt.

El patrón de orquestación también difirió y explica los tiempos. El líder de Sol partió la app por líneas arquitectónicas (datos, API, interfaz, despliegue) en el primer minuto, escribió él mismo las pruebas en navegador en 46 de 50 ejecuciones y **aceleró** al delegar (28 min en equipo frente a 38 en solitario, a *max*). El líder de Opus prefirió redactar primero un contrato de cómo encajarían las piezas y delegar en olas secuenciales de constructores y testers: sus equipos tardaron **hasta 2.3 veces más** que el agente único (174 vs. 74.7 minutos), y **más tiempo de ejecución no se correlacionó con más puntuación**. Un equipo *max* agotó el límite de 5.25 horas y su factura estimada rondó los $189.

The Decoder recoge además datos propios de Anthropic que apuntan en la misma dirección: al añadir más agentes, la **calidad se estanca mientras los tokens siguen disparándose** — más allá de diez agentes las ganancias se aplanan, y pasar de 10 a 100 agentes solo movió ligeramente las puntuaciones tras 24 horas de trabajo.

## Conclusión práctica: cuándo compensa un equipo

Vals AI matiza que su resultado sale de **un solo benchmark** (apps web full-stack) y de **una ejecución por configuración**, así que los intervalos reflejan variación entre aplicaciones, no entre repeticiones. La pregunta abierta es qué tareas ventaja el multi-agente de forma fiable: su hipótesis es que **trabajo que se parte en piezas paralelas realmente independientes** — codebases grandes, preguntas de investigación amplias, análisis que abarcan muchos documentos — y donde el líder pueda integrar sin gastar el tiempo ahorrado en coordinación. Mientras esa evidencia llega, la conclusión operativa para quien construye agentes hoy es sobria: **antes de lanzar subagentes, prueba un agente único con más esfuerzo de razonamiento**; cada subagente que añadas arrastra su propio contexto facturado, y en la mayoría de tareas el equipo no paga la factura.

*Fuentes: [Vals AI — Do Agent Teams Pay Off? A Case Study on Vibe Code Bench](https://www.vals.ai/blogs/multi-agent-vibe-code-bench), [The Decoder](https://the-decoder.com/ai-agent-teams-waste-massive-tokens-for-barely-measurable-quality-gains-research-finds/), [Vals AI — Vibe Code Bench](https://www.vals.ai/benchmarks/vibe-code)*
