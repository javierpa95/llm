---
title: "Meta vuelve a los modelos abiertos: Muse Glimmer, 30B bajo Apache 2.0 para agentes que corren en una GPU de consumo"
date: 2026-08-11
source: "The Decoder / Simon Willison's Blog"
source_url: "https://the-decoder.com/meta-returns-to-open-models-with-zuckerbergs-plan-to-out-copy-china-and-sell-compute-by-auction/"
category: "modelos"
summary: "Meta libera Muse Glimmer, su primer modelo open-weight desde Llama 4: 30B parámetros con licencia Apache 2.0, destilado de Muse Spark y optimizado para agentes que corren 24/7 en local con una GPU de consumo."
reading_time: "3 min"
tags: [meta, muse-glimmer, open-weights, apache-2.0, agentes, ia-local, destilacion]
---

Meta ha vuelto a liberar pesos de modelo tras más de un año de sequía. **Muse Glimmer** es un modelo de **30.000 millones de parámetros** publicado bajo licencia **Apache 2.0** en Hugging Face —la primera vez que Meta usa una licencia limpia, sin las restricciones de las antiguas Llama— y está pensado para **agentes de IA que corren en local de forma permanente**, en un Mac o un PC con una única GPU de consumo. Es el primer modelo abierto de Meta Superintelligence Labs, la unidad que Zuckerberg reconstruyó después del fiasco de Llama 4, y según *The Wall Street Journal* no será el último: la compañía planea abrir también los pesos de **Muse Spark 1.2**, su modelo más potente, en las próximas semanas.

En precisión completa el modelo necesitaría más de 55 GB de memoria, pero cuantizado a ~4 bits baja de los **20 GB** (la versión de LM Studio pesa 18,16 GB), lo que lo hace caber en las GPUs y MacBooks de consumo actuales, procesamiento de imagen incluido: Glimmer es un modelo **multimodal de visión**. Meta lo entrena por **destilación de Muse Spark** (el pequeño copia las salidas del grande, como se construyen hoy la mayoría de modelos compactos) y añade un modelo auxiliar que acelera la generación de texto hasta **3,1×**. En sus propios benchmarks, Glimmer supera a los dos líderes de su clase, **Gemma4-31B** y **Qwen3.6-27B**, especialmente en tareas de agente como tool use, búsqueda web y contexto largo —aunque Qwen sigue siendo claramente mejor en control de escritorio y terminal, y conviene tomar con cautela métricas medidas por el propio vendor—. Simon Willison ya lo ha probado en local con `llm-lmstudio` y su plugin `llm-coding-agent`, explorando un checkout de Datasette sin problemas y con holgura de RAM para seguir usando el equipo.

El lanzamiento llega con una declaración de intenciones: Zuckerberg publicó el ensayo *"The Future is for Everyone"* defendiendo que la superinteligencia no debe quedar en manos de unos pocos laboratorios, y sobre todo la **destilación** como principio —*"puedes aprender de cualquier cosa que puedas observar"*—, en plena disputa con OpenAI y Anthropic, que acusan a los laboratorios chinos de usar sus modelos como profesores sin permiso. La jugada también tiene lectura de negocio: Meta invierte hasta 145.000 millones de dólares este año en datacenters, aún sin un negocio de API comparable, y los modelos abiertos son el único terreno donde puede reclamar liderazgo frente a OpenAI y Anthropic.
