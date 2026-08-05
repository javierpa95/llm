---
title: "LLM 0.32: el CLI de Simon Willison añade reasoning traces, tools server-side y logs SQLite rediseñados"
date: 2026-08-05
source: "Simon Willison's blog"
source_url: "https://simonwillison.net/2026/Aug/4/new-release-of-llm/"
category: "herramientas"
summary: "La release más grande de LLM desde su lanzamiento: traces de razonamiento visibles, tools server-side vía API, y logs content-addressable en SQLite."
reading_time: "2 min"
tags: [llm, cli, herramientas, reasoning, sqlite, openai-responses]
---

Simon Willison ha publicado **LLM 0.32**, la versión más significativa del CLI desde el lanzamiento inicial del proyecto. Incluye soporte para **traces de razonamiento visibles**, **tools server-side** (WebSearch, WebFetch, CodeExecution y AnthropicMCP) disponibles a través de la interfaz `-T`, y un rediseño de los logs SQLite content-addressable. Muchas de las novedades llegan habilitadas por la **OpenAI Responses API**.

El plugin `llm-anthropic` 0.26 se actualiza a la vez: nuevos modelos (claude-fable-5, sonnet-5, opus-5), streaming de eventos tipados para razonamiento y tool calls, y opciones de thinking simplificadas (`thinking_effort`: low/medium/high/xhigh/max). Los modelos Claude 5 piensan por defecto; `-o thinking 0` lo desactiva en Sonnet 5 y Opus 5, mientras Fable 5 siempre razona.

Mismo día, Willison probó **MiniMax-H3** en su MacBook Pro vía un port a MLX (115 GB de pesos, ~45 min por clip): el primer modelo abierto en liderar un ranking de vídeo, con licencia comercial restringida por umbral de facturación.

*📝 Borrador pendiente de revisión humana*
