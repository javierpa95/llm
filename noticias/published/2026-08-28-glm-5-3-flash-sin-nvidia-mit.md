---
title: "GLM-5.3-Flash: el MoE abierto de 18B activos que corre sin Nvidia y cuesta 7,5× menos"
date: 2026-08-28
source: "The Decoder / SemiAnalysis / Artificial Analysis"
source_url: "https://the-decoder.com/the-chinese-ai-model-glm-5-3-flash-runs-without-nvidia-and-costs-a-fraction-of-what-the-competition-does/"
category: "modelos"
summary: "Z.ai lanza GLM-5.3-Flash: 320B de parámetros con solo 18B activos, contexto de 1M, licencia MIT y servido íntegramente en chips chinos sin Nvidia, al 10% del precio de inferencia de GLM-5.3."
reading_time: "3 min"
tags: [zhipu, glm, open-weights, moe, mit, sin-nvidia, ia-local, multimodal, eficiencia, interconexion]
---

Z.ai ha lanzado **GLM-5.3-Flash**, un modelo **mixture-of-experts** de **320.000 millones de parámetros de los que solo 18.000 millones se activan por token**, con **licencia MIT** y un **contexto de 1 millón de tokens**. Es el **primer GLM de la serie 5 nativamente multimodal** y sus pesos ya están disponibles en Hugging Face. En el Intelligence Index de Artificial Analysis alcanza **57 puntos** con el máximo esfuerzo de razonamiento —apenas 3 puntos por detrás de su hermano mayor GLM-5.3 (60), y a la altura de GPT-5.6 Terra y Muse Spark 1.2— pero con un coste radicalmente menor.

Lo que lo hace especialmente relevante no es solo la inteligencia, sino la economía y la infraestructura. A **0,09 dólares por tarea** frente a los **0,68 dólares de GLM-5.3**, el modelo se sitúa en la **frontera de Pareto entre coste e inteligencia**, y su API cobra **0,15 dólares por millón de tokens de entrada y 0,50 por salida** —alrededor de una décima parte del precio de GLM-5.3. En tareas agénticas iguala el ritmo de su hermano: **1770 Elo en GDPval-AA v2**, empatando con GLM-5.3 y Grok 4.6 y quedando solo detrás de Claude Opus 5, aunque sigue siendo menos eficiente en tokens (cerca del 90% de su salida va a razonamiento).

## 🧠 Sin Nvidia: otro test del "CUDA moat"

Antes del lanzamiento, Z.ai probó el modelo de forma anónima como **"ox-alpha"** en OpenCode y OpenRouter, donde se convirtió en el **modelo más popular de la semana**. El dato clave: **todo ese tráfico corrió sobre chips de IA chinos, sin una sola GPU de Nvidia**, según Z.ai. SemiAnalysis calcula que el despliegue sirvió **100 billones de tokens al día**, una capacidad que hasta ahora se creía reservada a los grandes laboratorios frontier, y que Z.ai sitúa con una **eficiencia y coste por token a la par de GPUs Nvidia comunes**.

Para lograrlo, Z.ai construyó su propio software de serving sobre **SGLang**, dividiendo el procesamiento en **etapas que escalan de forma independiente** y triplicando el throughput de su primer intento. Como apunta SemiAnalysis, esto es **otro test del "CUDA moat"** —la capa de programación que lleva casi 20 años atando el software de IA a las tarjetas de Nvidia—, en la línea de los resultados recientes del chip Jalapeño de OpenAI. GLM-5.3-Flash demuestra que un modelo abierto de frontera puede servirse por completo debajo de Nvidia, y a un precio que tensa la competencia frente a los proveedores occidentales.