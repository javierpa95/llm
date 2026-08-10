---
title: "Anthropic confirma su propio equipo de silicio: diseñará chips para ejecutar Claude"
date: 2026-08-06
source: "Ars Technica"
source_url: "https://arstechnica.com/ai/2026/08/anthropic-confirms-plans-to-build-an-in-house-silicon-team/"
category: "hardware"
summary: "Anthropic contrata un equipo de diseño de chips propios para ejecutar sus modelos, con un enfoque 'multi-chip' que complementará a NVIDIA y otros proveedores, co-diseñando hardware y modelos."
reading_time: "3 min"
tags: [anthropic, hardware, chips, silicio, vertical-integration]
---

Anthropic ha confirmado que está **contratando un equipo de silicio a medida** para diseñar los chips sobre los que ejecutará sus modelos. La compañía publicó ofertas para un ingeniero senior con experiencia en diseño de semiconductores (y para un *technical program manager* de silicio) y confirmó los planes a Business Insider y TechCrunch. Mantendrá un enfoque **"multi-chip"**: usará hardware de otros fabricantes junto a sus propios diseños mientras escala.

## La carrera por la integración vertical

No es un movimiento aislado: **OpenAI** anunció recientemente su chip propio **Jalapeño** para inferencia LLM, desarrollado con Broadcom [[2026-06-27-openai-broadcom-jalapeno-chip-llm-inference|(ya cubierto aquí)]]. **Google** lleva años ejecutando sus modelos en hardware propio, incluido el chip 'Frozen v2' que incrusta la arquitectura de Gemini en silicio [[2026-07-21-google-frozen-v2-chip-arquitectura-gemini-silicio|(ver noticia)]]. **Meta** ya ha desplegado sus propios chips y **Mistral** estudia hacer lo mismo. La confirmación de Anthropic cierra el círculo: todos los laboratorios frontier quieren dejar de depender de NVIDIA.

Las razones son estratégicas y técnicas: reducir la **dependencia de NVIDIA**, cuya posición dominante es una vulnerabilidad potencial en un entorno donde el cómputo es el recurso más disputado, y **co-diseñar hardware y modelos** para ganar rendimiento. Anthropic afirma que sus equipos diseñarán hardware y modelos de forma conjunta, algo que ya hacía parcialmente con socios externos.

## El contexto financiero: los TPU que ya usa Anthropic

La jugada llega mientras Anthropic sigue consumiendo hardware ajeno a una escala enorme. Según The Financial Times, **Google, Broadcom, Apollo y Blackstone** montaron una estructura de financiación (con vehículos *special purpose*) para que Anthropic pueda arrendar TPUs sin necesidad de crédito propio: el primer vehículo, llamado *Compute SPV*, compró alrededor de **un gigavatio de TPUs (~1 millón de chips) por 35.000 millones de dólares**, y el acuerdo de abril cubre otros 3,5 GW.

Eso sí, como la compañía aún está contratando al equipo clave, los beneficios de su silicio propio tardarán en llegar. Por ahora, el mensaje es claro: el chip es parte del producto, y diseñarlo en casa es la nueva frontera competitiva.

---

*Fuentes: [Ars Technica — Anthropic will design its own hardware to power Claude](https://arstechnica.com/ai/2026/08/anthropic-confirms-plans-to-build-an-in-house-silicon-team/) (6 agosto 2026) y [The Decoder — Google moves billions in Anthropic chip risk off its balance sheet](https://the-decoder.com/google-moves-billions-in-anthropic-chip-risk-off-its-balance-sheet/) (4 agosto 2026)*
