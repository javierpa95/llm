---
title: "🛠️ Anthropic reemplaza Git por Scion: 30.000 cambios de código al día y 600 PB de tráfico Git imposibles de gestionar"
date: 2026-10-13
source: "Anthropic Engineering / Simon Willison's Blog"
source_url: "https://www.anthropic.com/engineering/redesigning-source-control"
category: "herramientas"
summary: "Anthropic construye su propio control de versiones centralizado (Scion) tras pasar de 2.500 a 30.000 cambios mergeados al día; el equipo fue de siete personas y la migración duró cinco meses."
reading_time: "3 min"
tags: [herramientas, git, control-de-versiones, anthropic, ingenieria-agentes]
---

Anthropic publicó [Redesigning source control at Anthropic](https://www.anthropic.com/engineering/redesigning-source-control), explicando por qué abandonó Git para su monorepo y construyó **Scion**, un control de versiones centralizado propio (con «Antique» como sistema de revisión de código). El detonante es la velocidad de cambio de su código tras la adopción masiva de modelos de su propia familia: en mayo de 2026 fusionaban ~2.500 cambios al día y en septiembre superaban los **30.000 al día**, con un pico de 30.401 el 9 de septiembre ([Simon Willison](https://simonwillison.net/2026/Oct/13/redesigning-source-control-at-anthropic/) correlaciona el salto con la llegada de los modelos de clase Fable/Mythos).

Las cifras de escala que justifican el rediseño: la historia de la rama principal pesa casi **100 GB**, una copia de trabajo comprimida supera los **25 GB**, y realizan del orden de **25 millones de checkouts al día** para CI (sin contar entornos de desarrollo, sandboxes de agentes y trabajos de investigación): «fetched de forma ingenua serían más de 600 PB de tráfico Git al día». El sistema lo construyó un equipo de **siete personas** y la migración desde Git se completó en **cinco meses**, tomando como referencia sistemas como Piper de Google y Sapling/Mononoke de Meta.

*📎 Borrador generado por cron — pendiente de revisión y publicación manual en noticias/published/*
