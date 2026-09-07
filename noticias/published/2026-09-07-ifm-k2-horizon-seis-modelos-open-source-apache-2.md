---
title: "IFM lanza K2 Horizon: seis modelos open-source de 0,9B a 375B con Apache 2.0 y el pipeline de entrenamiento completo"
date: 2026-09-07
source: "IFM (Institute of Foundation Models) / MarkTechPost"
source_url: "https://ifm.ai/blog/k2/"
category: "modelos"
summary: "IFM libera K2 Horizon, seis modelos abiertos con licencia Apache 2.0, desde 0,9B hasta 375B, con checkpoints intermedios, datos de entrenamiento y código completo."
reading_time: "4 min"
tags: [modelos-open-source, apache-2, ifm, k2-horizon, fine-tuning, entrenamiento]
---

# IFM lanza K2 Horizon: la liberación open-source más completa hasta la fecha

El Instituto de Modelos Fundacionales (IFM) ha publicado **K2 Horizon**, una familia de seis modelos de lenguaje con licencia Apache 2.0 que cubre desde los **0,9B** hasta los **375B parámetros** (con 23B activos en el flagship). Lo que hace especial esta liberación no es solo el rango de tamaños, sino el nivel de apertura: IFM ha abierto **todo el pipeline de entrenamiento**, incluyendo checkpoints intermedios, datos o recetas de construcción de datos, arquitectura, composiciones de mixture, código de entrenamiento, configuraciones, logs detallados y resultados de evaluación.

Los seis modelos lanzados son: **375B-A23B**, **36B-A4B**, **32B**, **7B**, **3,7B** y **0,9B**. Los tres más pequeños (0,9B, 3,7B y 7B) establecen nuevo estado del arte en sus respectivas escalas. El modelo de 375B utiliza arquitectura Mixture-of-Experts, activando solo 23B parámetros por token, lo que lo hace ejecutable en infraestructuras razonables.

## ¿Por qué importa esta liberación?

En un ecosistema donde la mayoría de modelos "abiertos" solo publican pesos finales (sin datos, sin código de entrenamiento, sin checkpoints), K2 Horizon va mucho más allá. IFM no solo libera los pesos, sino que documenta **cómo se construyeron**: desde el pretraining hasta el post-training de razonamiento y tareas de agentes. Esto convierte K2 Horizon en una referencia educativa y de investigación de primer nivel.

La familia soporta despliegue en **NVIDIA, AMD y Cerebras**, con soporte day-zero de **vLLM, SGLang y Ollama**. Para la comunidad de IA local, los modelos de 3,7B y 7B son especialmente interesantes: caben en hardware de consumo y ya están optimizados para inferencia en GPUs domésticas.

## Contexto: la carrera por la apertura total

K2 Horizon se suma a una tendencia creciente de liberaciones cada vez más abiertas. Mientras Qwen, DeepSeek y Meta han ido ampliando lo que comparten con sus modelos open-weight, IFM da un paso adelante al liberar también el proceso de entrenamiento completo. Esto es relevante no solo para quienes quieran ejecutar los modelos, sino para investigadores que quieran entender, modificar o mejorar las técnicas de entrenamiento.

La pregunta abierta es si este nivel de apertura se sostendrá económicamente. Modelo abierto no significa infraestructura barata: el modelo de 375B necesita un cluster significativo de GPUs para inferencia. Pero para la investigación y la reproductibilidad, K2 Horizon marca un estándar que difícilmente podrá ignorarse.
