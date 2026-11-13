---
title: "Google lanza Gemini 4 Hydrogen: el 'Flash' de Gemini 4 supera a Argon gratis, reemplaza a 3.8 Flash y será el motor de Google Search"
date: 2026-11-13
source: "Google Blog / Simon Willison / Ars Technica"
source_url: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-hydrogen/"
category: "modelos"
summary: "Google libera Gemini 4 Hydrogen, su nuevo modelo de rango medio: dispone de cuatro niveles de razonamiento (low, medium, high, xhigh), marca 51 en el índice AAII frente al 50 de Argon, es un 2,5× más rápido que 3.8 Flash y se ofrece gratis para todos en la app."
reading_time: "3 min"
tags: [gemini, google, gemini-4-hydrogen, free-tier, agentic-coding, llm-pricing]
---

Google lanzó ayer **Gemini 4 Hydrogen**, el tercer miembro de la familia Gemini 4 y sucesor natural de 3.8 Flash. La benchmark independiente de Artificial Analysis lo sitúa por delante de Argon en su nivel de razonamiento alto por defecto (51 vs 50) y llega a 54 en su nuevo modo **xhigh**. En flujos de código agéntico, Google afirma que es 2,5× más rápido que el anterior Flash, supera el 57% en Terminal-Bench 4.1 (frente al 18,2% de 3.8 Flash) y recorta las afirmaciones fabricadas más de 5×.

| Modelo | Entrada ($/M) | Salida ($/M) | Disponibilidad |
|--------|---------------|--------------|----------------|
| Gemini 4 Hydrogen | $1,50 | $7,50 | Gratis (app Gemini) / todos los niveles de AI Studio |
| Gemini 4 Argon / Carbon | $2,00 → $4,00 desde el 1-Dic | $10 → $20 | Solo suscriptores AI Pro/Ultra |

La clave está en la introducción de los **niveles de razonamiento escalables** (low, medium, high y el nuevo xhigh): el mismo modelo se adapta a tareas ligeras o a razonamiento profundo sin cambiar de endpoint. En software real, Google lo posiciona como el **motor de ejecución** que se combina con Carbon y Argon como modelos frontier de arquitectura: en **Orchestrator** (Google Antigravity) alterna dinámicamente entre Carbon y Hydrogen durante una misma sesión, logrando las tasas de éxito de Carbon un 24% más barato y un 19% más rápido en Terminal-Bench 4.0. Simon Willison señala además un detalle revelador: como Argon y Carbon tienen exactamente el mismo precio hasta su subida de diciembre, la decisión entre ambos es puramente arquitectural, e Hydrogen, aunque aún caro como "modelo pequeño" ($0,10/$0,50 en Claude Haiku 5.5 y GPT-6 Luna), sí se justificará como descuento del 75% a partir del 1 de diciembre.
