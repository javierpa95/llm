---
title: "🔬 Sakana lanza Fugu Max y Fugu Ultra v2: la orquestación multi-agente como nueva frontera de escalabilidad"
date: 2026-09-15
source: "Sakana AI / MarkTechPost"
source_url: "https://sakana.ai/fugu-max-release"
category: "investigación"
summary: "Sakana AI demuestra que orquestar múltiples modelos supera a cualquier modelo individual: Fugu Max cuesta 40-60% menos que Sonnet 5, y Ultra v2 iguala a Opus 5 en coding sin usar Fable 5 ni GPT-6."
reading_time: "4 min"
tags: [multi-agent, orquestación, Pareto, Sakana, open-weight, Nemotron]
---

Sakana AI publicó el 11 de septiembre **Fugu Max** y **Fugu Ultra v2**, dos variantes de su arquitectura de orquestación que demuestr un argumento provocador: la escalabilidad ya no depende de hacer modelos más grandes, sino de orquestar mejor los que ya existen.

**Fugu no es un modelo — es un orquestador.** Recibe una petición, la analiza, y la enruta dinámicamente al modelo más adecuado de un pool que incluye frontier cerrados y open-weight (GPT-5.6, Claude Sonnet 5, Gemini 3.8 Flash, NVIDIA Nemotron, entre otros). El resultado se entrega a través de una API compatible con OpenAI, sin que el cliente sepa qué modelo respondió.

## Fugu Max: mejor rendimiento, menos coste

Fugu Max se optimiza por el eje de coste. A **2$ por millón de tokens de entrada y 6$ por millón de salida**, sitúa a Fugu en una posición del frente de Pareto que ningún modelo individual alcanza:

| Benchmark | Fugu Max | Sonnet 5 | GPT-5.6 Terra |
|-----------|----------|----------|---------------|
| Terminal Bench 2.1 | top | — | — |
| GPQA Diamond | top | — | — |
| DeepSWE | comparable | más caro | más caro |

El output de Fugu Max cuesta entre un **40% y 60% menos** que Sonnet 5, GPT-5.6 Terra o Kimi K3, manteniendo prestaciones en la misma liga. La clave es el *routing dinámico*: tareas simples van al modelo más barato del pool, tareas complejas al más capaz, y el orquestador decide en tiempo real.

## Fugu Ultra v2: empujando el techo

Fugu Ultra v2 se optimiza por capacidad bruta. Sus mejores resultados aparecen en tareas de razonamiento prolongado sobre datos visuales y estructurados:

- **Chartography** (razonamiento visual): 48.3 — Opus 5 saca 27.3 y Fable 5, 29.5
- **DeepSWE** (ingeniería de software real): 74.3, superando a modelos que cuestan 3-5× más por token
- **Toolathon** (tool use): top conjunta

Lo más notable: Fugu Ultra v2 logra estos números **sin usar Fable 5, Fable 5.1 ni GPT-6-Astra** en su pool de modelos. El corte de conocimiento es del 28 de agosto de 2026, así que los modelos más recientes simplemente no están disponibles para el orquestador.

## La tesis: orquestación como eje de escalabilidad

El argumento técnico de Sakana es que la industria ha pasado una década optimizando solo un eje — hacer modelos más grandes y caros. Pero el frente de Pareto real tiene **dos dimensiones**: capacidad y coste. Un sistema que despliega un modelo de billones de parámetros para una consulta de lookup no es inteligente, es derrochador.

La orquestación multi-agente ofrece tres ventajas concretas:

1. **Resiliencia de suministro**: si un modelo cae o cambia su pricing, el pool se adapta sin migrar el cliente
2. **Optimización por tarea**: no todas las peticiones necesitan un modelo frontier
3. **Frente de Pareto imposible para modelos individuales**: ningún modelo solo puede ser simultáneamente el más barato y el más capaz en todos los benchmarks

## ¿Qué implica para el ecosistema?

El modelo de negocio de Sakana aquí es claro: ofrecer la capa de orquestación como servicio, cobrando por token sin exponer qué modelo hay debajo. La API es compatible con OpenAI, y el upgrade desde versiones anteriores es un cambio de un solo parámetro.

Para quienes construyen agentes o aplicaciones LLM en producción, la propuesta es atractiva: acceso a modelos frontier a precio de modelo medio, con la promesa de que si mañana lanzan un modelo mejor, el pool se actualiza sin cambios en el código del cliente. Para el ecosistema open-source, la integración de Nemotron como modelo base del pool valida la estrategia de NVIDIA de crear modelos abiertos que sirvan como componentes de sistemas más grandes.

La pregunta abierta es si la capa de orquestación se convierte en un *commodity* — si多家 lab empiezan a ofrecer routing dinámico similar — o si Sakana mantiene ventaja por la calidad de sus señales de routing entrenadas.
