---
title: "Iris-mini e Iris-pro: los agentes de búsqueda open-weight más potentes de su clase, con receta completa de entrenamiento"
date: 2026-09-14
source: "The Decoder / arXiv / AllSpark"
source_url: "https://the-decoder.com/iris-mini-and-iris-pro-are-the-strongest-open-weight-search-agents-in-their-class/"
category: "investigación"
summary: "AllSpark libera Iris-mini (35B) e Iris-pro (397B): agentes de búsqueda open-weight basados en Qwen que lideran benchmarks con receta de entrenamiento completa."
reading_time: "5 min"
tags: [search-agents, open-weight, qwen, reinforcement-learning, tool-use, browsing, benchmarks]
---

# Iris-mini e Iris-pro: los agentes de búsqueda open-weight más potentes de su clase

El equipo AllSpark ha publicado **Iris-mini** e **Iris-pro**, dos agentes de búsqueda open-weight junto con la receta completa de entrenamiento — datos, modelo y código. Los pesos están disponibles en [Hugging Face](https://huggingface.co/collections/AllSpark-Research/iris) y el código en [GitHub](https://github.com/AllSpark-Research/Iris).

Iris-mini tiene **35B parámetros** (3B activos) y se basa en Qwen3.6-35B-A3B. Iris-pro escala a **397B parámetros** (17B activos) sobre Qwen3.5-397B-A17B. Ambos usan una ventana de contexto de 256K tokens y funcionan como agentes ReAct de un solo paso — sin sub-agentes ni verificación extra al final.

## Resultados: líderes en 7 de 8 comparaciones

En los cuatro benchmarks evaluados — BrowseComp, BrowseComp-ZH, DeepSearchQA y Humanity's Last Exam (HLE) — Iris-mini e Iris-pro obtienen los mejores resultados entre agentes de búsqueda open-weight en su rango de parámetros:

| Modelo | Params | BrowseComp | BrowseComp-ZH | DeepSearchQA | HLE |
|--------|--------|------------|---------------|--------------|-----|
| **Iris-mini** | 35B | **82.2** | **84.8** | 86.9 | **52.3** |
| XYZ-Aquila-mini | 35B | 78.8 | 82.9 | **89.5** | 51.1 |
| **Iris-pro** | 397B | **88.6** | **85.1** | **92.9** | **56.4** |

Iris-mini lidera en 3 de 4 benchmarks en su clase, y Iris-pro domina en los 4. Los autores señalan que los resultados provienen de un agente individual, sin ayudas externas.

## La receta: preguntas invertidas desde la estructura web

El dato más técnico es cómo se generan las preguntas de entrenamiento. En lugar de buscar en bases de datos públicas, el equipo **invierte la estructura de enlaces de la web** para crear preguntas de razonamiento. Cada término excepto la respuesta final se sustituye por una paráfrasis — de modo que el agente no puede resolver la pregunta con una simple búsqueda de texto, sino que tiene que razonar.

El entrenamiento sigue un ciclo alternado de **SFT-RL climbing**: supervisión fina y refuerzo por búsquedas web reales, donde las tareas más difíciles y las trayectorias más eficientes de cada ronda alimentan la siguiente. El juez que evalúa las respuestas corre dentro del clúster de entrenamiento, usando un modelo Qwen grande, para no depender de servicios externos.

## Context management importa más que el modelo

Un hallazgo relevante: la gestión del contexto en tiempo de ejecución afecta más al resultado final que las diferencias entre modelos. En Iris-mini, el context management sube el score de BrowseComp hasta **21.2 puntos**. La razón no es un presupuesto de tokens menor, sino que el modelo más pequeño necesita más pasos para las mismas tareas y agota el contexto con más frecuencia.

Esto tiene implicaciones prácticas: para aplicaciones de búsqueda real, el diseño del scaffolding alrededor del modelo puede ser más decisivo que la elección del modelo en sí.

## Efecto colateral: mejora en tareas no relacionadas

Los autores reportan un efecto inesperado: tanto los datos generados como los modelos entrenados mejoran el rendimiento en **tareas para las que nunca fueron entrenados**, incluyendo uso general de herramientas y trabajo de oficina. Su hipótesis es que la búsqueda web funciona más como una habilidad fundacional que como una especialidad estrecha — el comportamiento aprendido ayuda siempre que un agente trabaja con información incompleta.

El paper completo está en [arXiv:2609.04304](https://arxiv.org/abs/2609.04304).
