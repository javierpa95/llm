---
title: "OpenAI lanza GPT-6 Sol y Luna: 50% más baratos que la generación anterior y rendimiento que rivaliza con Fable 5.1"
date: 2026-09-25
source: "OpenAI Blog / TechCrunch"
source_url: "https://openai.com/index/introducing-gpt-6-sol-and-luna"
category: "modelos"
summary: "OpenAI amplía la familia GPT-6 con Sol y Luna, modelos de equilibrio entre capacidad y coste con mitad de precio de la API y benchmarks de código que igualan a Claude Fable 5."
reading_time: "4 min"
tags: [gpt-6, openai, modelos, inferencia, costes, api, codificacion]
---

OpenAI ha completado la familia GPT-6 con el lanzamiento de **GPT-6 Sol** y **GPT-6 Luna**, dos modelos que traen la inteligencia de frontera de GPT-6 Astra a precios significativamente más bajos. Los modelos, disponibles desde el 22 de septiembre en ChatGPT Work, Codex y la API, representan una rebaja del **50% en precios de API** respecto a la generación 5.6.

## Especificaciones y precios

| Modelo | Input (por 1M tokens) | Output (por 1M tokens) | Reducción vs 5.6 |
|--------|----------------------|------------------------|-------------------|
| GPT-6 Sol | $2.00 | $10.00 | -50% |
| GPT-6 Luna | $0.10 | $0.50 | -50% |
| GPT-5.6 Sol (anterior) | $4.00 | $20.00 | — |
| GPT-5.6 Luna (anterior) | $0.20 | $1.20 | — |

**GPT-6 Sol** está orientado a tareas complejas como codificación y automatización de flujos de trabajo, mientras que **GPT-6 Luna** se posiciona como modelo de alto volumen para resúmenes, extracción de información y preguntas rápidas — ahora incluso gratis para usuarios Free y Go en la app de escritorio.

## Rendimiento en benchmarks clave

En **FrontierCode 1.1**, que evalúa si los agentes de código producen cambios listos para fusionar en repositorios reales, GPT-6 Sol al esfuerzo máximo iguala a Claude Fable 5.1 a xhigh a un coste **aproximadamente 80% menor**. En **DeepSWE v1.1**, GPT-6 Sol alcanza 68.8%, apenas 1.1 puntos porcentuales por debajo de Claude Fable 5 (69.9%) pero a un coste reducido de 80%.

En automatización de flujos de trabajo empresariales (**AutomationBench**), GPT-6 Sol a xhigh supera a Claude Opus 5 a max effort por solo el **9% del coste por tarea**. Incluso GPT-6 Luna a max effort logra 66.6% en codificación, comparable a Claude Opus 5 a esfuerzo medio, pero con un **93% menos de coste**.

OpenAI atribuye las mejoras a técnicas de entrenamiento heredadas de GPT-6 Astra, junto con optimizaciones en caché e inferencia que permiten pasar el ahorro directamente a los usuarios. La empresa también destaca que GPT-6 Sol comete aproximadamente **la mitad de errores factuales** que su predecesor, alcanzando fiabilidad comparable a Astra a menor coste.

## Disponibilidad

GPT-6 Sol (`gpt-6-sol`) y Luna (`gpt-6-luna`) están disponibles en la API y ya se han integrado en GitHub Copilot como opciones de modelo. Los usuarios Plus, Pro, Business, Enterprise y Edu tienen acceso en ChatGPT Work y Codex. OpenAI planea extender gradualmente el acceso a la app principal de ChatGPT a lo largo del día.

Con estos lanzamientos, la familia GPT-6 ahora cubre tres niveles: **Astra** (máxima inteligencia, disponible desde el 3 de septiembre), **Sol** (equilibrio capacidad/coste para codificación) y **Luna** (ultra-barato para tareas de alto volumen). Esta estrategia de tres tiers coincide con la presión creciente de los modelos open-weight chinos, que según reportes capturan un 46% del uso empresarial de tokens en OpenRouter.
