---
title: "Anthropic reduce un 80% el system prompt de Claude Code: los modelos Fable 5 'quieren prompts más pequeños'"
date: 2026-07-03
source: "The Decoder"
source_url: "https://the-decoder.com/anthropic-says-it-cut-80-percent-of-claude-codes-system-prompt-because-fable-5-models-want-a-smaller-system-prompt/"
category: "investigación"
summary: "Anthropic ha reducido el system prompt de Claude Code en un 80%. Los nuevos modelos Fable 5 necesitan menos instrucciones y ejemplos — las guías rígidas pueden incluso limitarlos porque son 'más imaginativos' que lo que se les indica."
reading_time: "3 min"
tags: [anthropic, claude-code, system-prompt, fable-5, prompting, eficiencia]
---
Anthropic ha recortado el *system prompt* de Claude Code en un **80%** — de unos 1.800 tokens a solo **360 tokens**. El motivo, según desveló **Tariq Shihipar** (miembro del equipo de Claude Code) en la conferencia *AI Engineer World's Fair*, es que los modelos **Fable 5** (la nueva familia frontier de Anthropic) "quieren un *system prompt* más pequeño".

Shihipar explicó que esta reducción no es un ajuste menor, sino el reflejo de un cambio profundo en cómo las generaciones sucesivas de modelos procesan las instrucciones:

> **"Los modelos antiguos necesitaban prompts cortos con muchos ejemplos e instrucciones restrictivas. Después los prompts se alargaron a medida que los modelos mejoraban comprendiéndolos. Ahora se están acortando de nuevo."**

El equipo descubrió que las guías detalladas y las restricciones explícitas **limitaban el rendimiento** de Fable 5. En sus propias pruebas internas, los modelos tendían a seguir las reglas al pie de la letra cuando se les daban instrucciones muy prescriptivas, en lugar de aplicar su propio criterio. "Son más imaginativos de lo que les damos", señaló Shihipar.

## Instrucciones por contexto, no por decreto

En lugar de un *system prompt* extenso con reglas explícitas, Anthropic ahora **guía el comportamiento mediante el contexto** que proporciona al modelo. Por ejemplo, en lugar de decir "no hagas X", simplemente **omiten mencionar X** y dejan que el modelo decida por sí mismo basándose en la información relevante del contexto.

Este hallazgo tiene implicaciones prácticas importantes:

- **Menos es más**: un *system prompt* más corto y centrado en el **contexto** en lugar de reglas produce mejores resultados con modelos capaces.
- **Cada generación de modelo necesita su estrategia**: lo que funcionaba con Claude 3 o Sonnet 4 puede ser contraproducente con Fable 5.
- **Las instrucciones rígidas pueden ser perjudiciales**: los modelos más avanzados son "más creativos" y las restricciones excesivas pueden limitar su desempeño.

## Por qué importa

Este cambio es una **lección valiosa para cualquiera que trabaje con LLMs**: los *system prompts* no son estáticos. A medida que los modelos evolucionan —especialmente con técnicas como *reinforcement learning from human feedback (RLHF)* y *constitutional AI*— su capacidad para inferir intenciones y comportamientos deseables sin instrucciones explícitas mejora drásticamente. Lo que antes requería párrafos de advertencias y ejemplos ahora puede resolverse con un par de frases de contexto.

El movimiento de Anthropic sugiere que **el prompting está entrando en una nueva fase**: de la instrucción explícita a la **guía contextual**. Para los desarrolladores, la recomendación es clara: probar sistemáticamente *system prompts* cada vez más cortos con cada nuevo modelo, porque el que funcione mejor podría ser sorprendentemente pequeño.
