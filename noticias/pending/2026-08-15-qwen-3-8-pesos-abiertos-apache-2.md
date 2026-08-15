---
title: "Qwen abre los pesos de Qwen3.8 bajo Apache 2.0: el 27B denso multimodal y el gigante 2.4T-A95B ya están en Hugging Face"
date: 2026-08-15
source: "The Decoder"
source_url: "https://the-decoder.com/alibabas-qwen-team-releases-qwen-3-8-models-with-open-weights-under-the-apache-2-0-license/"
category: "modelos"
summary: "Alibaba publica bajo Apache 2.0 los pesos de Qwen3.8-27B, un modelo denso multimodal que supera a Qwen3.7-Plus en coding, y del Qwen3.8-2.4T-A95B a nivel Max, ambos en Hugging Face y ModelScope."
reading_time: "3 min"
tags: [qwen, alibaba, modelos-abiertos, apache-2, multimodal]
---

El equipo de IA de Alibaba, **Qwen**, ha publicado los pesos abiertos de **Qwen3.8** bajo licencia **Apache 2.0**. El modelo principal, **Qwen3.8-27B**, es un modelo denso multimodal de 27.000 millones de parámetros que, según la compañía, **supera al Qwen3.7-Plus** —bastante más grande— en tareas de coding y ofimática. Qwen también destaca **mejores capacidades de agente**: el modelo planifica de forma más independiente y completa tareas con mayor fiabilidad.

Técnicamente, Qwen3.8-27B maneja de forma nativa **hasta 262.000 tokens de contexto**, ampliable a **un millón** mediante el método **YaRN**. Más allá del texto, procesa imágenes y vídeo, incluidos diagramas, documentos y vídeo de varias horas. Un **modo de pensamiento flexible** viene activado por defecto, pero puede desactivarse por consulta.

Además del 27B, Qwen ha liberado los pesos del mucho mayor **Qwen3.8-2.4T-A95B**, construido para operar a nivel Max. Ambos modelos están disponibles en **Hugging Face y ModelScope**, y una versión alojada con un millón de tokens de contexto llegará pronto a Qwen Cloud. La liberación completa bajo Apache 2.0 consolida la apuesta de Alibaba por el open-weights: tras el anuncio de los pesos de Qwen3.8-Max a principios de mes, ahora toda la familia queda abierta para despliegues locales y comerciales.

