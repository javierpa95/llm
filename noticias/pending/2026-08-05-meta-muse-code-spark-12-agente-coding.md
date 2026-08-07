---
title: "Meta lanza Muse Code y Muse Spark 1.2: agente de coding y modelo co-entrenado, con un precio 'contributor' 12 veces más barato a cambio de tus datos"
date: 2026-08-05
source: "Simon Willison's Blog"
source_url: "https://simonwillison.net/2026/Aug/5/muse-code-and-muse-spark-12/"
category: "herramientas"
summary: "Meta presenta Muse Code (su propio agente de coding) y Muse Spark 1.2, co-entrenados para maximizar la llamada de herramientas en secuencias largas. Precio contributor: $0.10/$0.20 por millón de tokens."
reading_time: "3 min"
tags: [meta, coding, agentes, precio, muse]
---

Meta ha lanzado **Muse Code** y **Muse Spark 1.2**, dos modelos co-entrenados para **llamada de herramientas agéntica en secuencias largas** — lo que Simon Willison llama *"la característica más importante de cualquier modelo hoy en día"*. Muse Spark 1.2 es una actualización de coding del Spark 1.1 con mejoras en generación de código, depuración compleja, comprensión de codebases y flujos de trabajo end-to-end para desarrolladores, escalando significativamente el cómputo de entrenamiento en tareas de coding y ampliando la diversidad de entornos de entrenamiento.

Ambos modelos se co-entrenaron con trayectorias de harness con rejection sampling y recetas optimizadas para goals, compaction y subagentes, integrando el toolset de Muse Code para maximizar la compatibilidad. Spark 1.2 se entrenó extensamente en tareas de coding de horizonte largo: generación de repositorios completos, proyectos end-to-end grandes y auto-investigación.

El giro más interesante es el **precio**: `muse-spark-1.2` cuesta **$1.25/$4.25 por millón de tokens** (cerca de Gemini 3.6 Flash), pero si aceptas que Meta use tus datos *"para mejorar sus productos"* puedes usar **`muse-spark-1.2-contributor` a $0.10/$0.20** — un descuento de 12x, más cerca de GPT-5.6 Luna y Gemini 3.6 Flash Mini. Un modelo de descuento por datos que probablemente veremos más a menudo.

*📝 Borrador pendiente de revisión humana*
