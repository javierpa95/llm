---
title: "Google desarrolla 'Frozen v2': un chip que incrusta la arquitectura de Gemini directamente en silicio"
date: 2026-07-21
source: "The Decoder"
source_url: "https://the-decoder.com/googles-frozen-v2-chip-reportedly-bakes-geminis-architecture-directly-into-silicon-for-efficiency-gains/"
category: "hardware"
summary: "Google investiga un chip que codifica la arquitectura de Gemini en hardware, prometiendo 6-10x más eficiencia que las TPU actuales para inferencia."
reading_time: "4 min"
tags: [google, gemini, tpu, chip, inferencia, arquitectura, hardware]
---

Google está desarrollando **Frozen v2**, un chip de servidor que incorpora partes de la arquitectura de Gemini directamente en el silicio. Según fuentes internas citadas por The Information, el chip podría ser **6 a 10 veces más eficiente** que las TPU actuales de Google para servir respuestas de IA. El proyecto, programado para 2028, podría recortar drásticamente los costes de inferencia de Google y darle una ventaja competitiva sobre OpenAI y Anthropic.

## Arquitectura codificada en hardware, no pesos

A diferencia de las TPU genéricas que sirven para muchos modelos, Frozen v2 tiene partes de la estructura del modelo Gemini construidas directamente en el chip. El nombre sigue la lógica de "congelar" parámetros en modelos de IA, donde se bloquean valores para que dejen de cambiar. Con Frozen v2, una porción del modelo se congela permanentemente en el chip, reduciendo pasos de cómputo y acelerando las respuestas.

La idea original partió de **Jeff Dean**, científico jefe de Google DeepMind. Su primer diseño Frozen pretendía incrustar los pesos del modelo directamente en el chip. Los pesos son los ajustes específicos que determinan cómo un modelo de IA responde a las consultas. Google descartó ese enfoque porque el chip solo habría funcionado con una única versión de Gemini y se habría obsoleto demasiado rápido.

Frozen v2 adopta un camino más flexible: incrusta la **arquetipo del modelo** en lugar de los pesos, es decir, el plano subyacente en lugar de los parámetros ajustados. Esto permite cargar nuevos pesos sobre el chip. Cuánta parte de la arquitectura quedará realmente hardcodeada aún no se ha decidido.

## Por qué importa para la inferencia

En el negocio de la IA, la optimización de costes de inferencia determina cada vez más los márgenes. Si Frozen v2 cumple su promesa, Google podría ejecutar modelos potentes a precios más bajos y arrebatar cuota de mercado a OpenAI y Anthropic. Dado que el chip solo funciona mientras Google mantenga la misma arquitectura de modelo, probablemente no se convertirá en un producto para clientes externos — será una ventaja interna.

El concepto de **model-specific silicon** no es nuevo (Google ya lo hace con TPU para JAX), pero Frozen v2 lleva la idea un paso más allá al codificar la arquitectura transformer completa, no solo las operaciones matemáticas básicas. Si funciona, podría abrir una nueva carrera entre los grandes proveedores de IA por personalizar hardware a sus arquitecturas específicas.
