---
title: "PrismML comprime un modelo de 27B parámetros a 5,9 GB con ternary weights: un LLM de razonamiento completo cabe en un smartphone"
date: 2026-09-18
source: "TechCrunch / PrismML / creati.ai"
source_url: "https://techcrunch.com/2026/09/17/prismml-hopes-its-tiny-llm-could-change-how-we-all-use-ai/"
category: "modelos"
summary: "Bonsai 2 27B reduce Qwen3.8 27B de ~54 GB a 5,9 GB conservando el 98% del rendimiento, haciendo posible un LLM de razonamiento completo en PC y smartphone."
reading_time: "4 min"
tags: [compresion, local-ai, cuantizacion, ternary-weights, prismml, bonsai, qwen, inference, on-device]
---

PrismML, un laboratorio de IA fundado por investigadores de Caltech, ha lanzado **Bonsai 2 27B**, un modelo comprimido que reduce Alibaba's Qwen3.8 27B de aproximadamente 54 GB a solo **5,9 GB** — una reducción de 9× a 10× en memoria — manteniendo el **98% del rendimiento agregado** en benchmarks. El modelo, publicado bajo licencia Apache 2.0, es lo bastante pequeño para ejecutarse en un PC o incluso en un smartphone de gama alta como el iPhone 17 Pro.

## ¿Cómo funciona la compresión?

El truco está en las **ternary weights** (pesos ternarios). En lugar de representar cada peso del modelo con 16 bits de precisión (FP16), PrismML reduce la información almacenada por peso a un nivel extremo, lo que disminuye drásticamente la demanda de memoria. El resultado es un modelo donde los **27.000 millones de parámetros** caben en una fracción del espacio normal, con una **densidad de inteligencia** 10× mayor que el modelo original.

PrismML también ofrece una variante **1-bit** que ocupa solo **3,9 GB**, suficiente para ejecutarse en un iPhone 17 Pro con 12 GB de memoria unificada. Según los benchmarks publicados:

- **Ternary Bonsai 2** (5,9 GB): 80,5 puntos globales vs. 85,0 del baseline
- **1-bit Bonsai 2** (3,9 GB): 76,1 puntos globales
- **Razonamiento matemático**: 93,4 (ternary) vs. 95,3 (baseline) — apenas 2 puntos de caída
- **Coding**: 86,0 (ternary) vs. 88,7 (baseline)
- **Visión**: 59,6 (1-bit) vs. 72,6 (baseline) — el área con mayor degradación

## El contexto: compresión como nueva frontera

PrismML no es la única empresa trabajando en compresión de LLMs — Multiverse Computing, fundada por un conocido físico español, también ha levantado financiación significativa en este espacio. Pero la novedad aquí es la combinación de **escala** (un modelo de 27B, no un modelo pequeño diseñado desde cero) y **calidad** (98% de paridad con el modelo original, subiendo del 95% del primer Bonsai lanzado en marzo).

El primer Bonsai ya acumula **más de 11 millones de descargas**, y las variantes más pequeñas suman 2,6 millones adicionales, lo que demuestra una demanda real de modelos capaces que caban en hardware local.

## ¿Por qué importa?

El siguiente paso de PrismML es aplicar esta técnica a modelos de **varios cientos de miles de millones de parámetros**. Según el CEO Babak Hassibi, *"cuanto más grande es el modelo, más capacidad redundante tiene, y más espacio hay para comprimirlo sin perder inteligencia"*. Si esta afirmación se mantiene, podríamos ver modelos frontier ejecutándose en hardware de consumo en un plazo de unos años.

Las implicaciones son significativas para el ecosistema:

- **Privacidad**: los datos nunca salen del dispositivo
- **Coste**: eliminación de la dependencia de APIs con tarifa por token
- **Latencia**: inferencia instantánea sin latencia de red
- **Offline**: funcionalidad completa sin conexión a internet

Para quienes construyen con LLMs, la compresión ternary representa una alternativa real a la cuantización estándar (INT4/INT8), y podría acelerar la adopción de IA local en sectores regulados donde la salida de datos a la nube es problemática. Los modelos comprimidos de PrismML están disponibles en Hugging Face bajo Apache 2.0.
