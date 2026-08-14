---
title: "OpenAI Ultrafast: GPT-5.6 Sol a 750 tokens/s — Cerebras lleva la inferencia frontier a 14x con pesos que nunca salen del chip"
date: 2026-08-14
source: "TechCrunch / Cerebras"
source_url: "https://www.cerebras.ai/blog/accelerating-gpt-5-6-sol-ultrafast-with-openai"
category: "hardware"
summary: "OpenAI estrena Ultrafast, un modo que ejecuta GPT-5.6 Sol a 14x la velocidad estándar (hasta 750 tokens/s) sin perder calidad, gracias a los Wafer-Scale Engines de Cerebras y sus 44 GB de SRAM on-chip."
reading_time: "3 min"
tags: [inferencia, cerebras, hardware, openai, velocidad]
---

OpenAI ha lanzado **Ultrafast**, un nuevo nivel de servicio en su API que ejecuta **GPT-5.6 Sol hasta 14 veces más rápido** que el procesamiento estándar: hasta **750 tokens de salida por segundo**, sin sacrificar calidad. La clave no está en un modelo más pequeño ni en cuantización, sino en el hardware: el modo está potenciado por los **Wafer-Scale Engines (WSE) de Cerebras**, que empaquetan **44 GB de SRAM en un solo chip del tamaño de una oblea**.

El argumento técnico de Cerebras es directo: la inferencia de modelos grandes en GPUs está limitada por el **ancho de banda de memoria**, porque los pesos deben transferirse repetidamente entre la memoria del chip y la memoria externa para generar cada token. En su arquitectura, los pesos **permanecen en la SRAM on-chip** y los tokens fluyen a través de las capas del modelo sin salir del silicio, eliminando ese cuello de botella. Es el mismo razonamiento que explica por qué el problema de la inferencia rápida es, ante todo, un problema de *data movement*.

Los números de los tests de Cerebras ilustran el salto. En **Humanity's Last Exam** (2.500 preguntas de nivel doctorado), GPT-5.6 Sol en Ultrafast completó la batería completa en **11 horas y 11 minutos**, frente a las **78 horas y 27 minutos** que necesitó Claude Fable 5 — casi **7x más rápido** con precisión comparable. Según velocidades de salida de Artificial Analysis, Sol en Ultrafast corre **11x más rápido que Fable 5** y **5x más rápido que Claude Opus 4.8 en modo Fast**. En GDP-Val, un benchmark de trabajo de conocimiento económicamente valioso, el modo entregó un speedup end-to-end de **5.6x sin degradación de calidad**.

| Métrica | GPT-5.6 Sol (Standard) | GPT-5.6 Sol (Ultrafast) |
|---------|------------------------|-------------------------|
| Velocidad de salida | base | hasta 750 tok/s (14x) |
| HLE completo (2.500 preguntas) | — | 11 h 11 min (vs 78 h 27 min de Fable 5) |
| Speedup en GDP-Val | 1x | 5.6x sin pérdida de calidad |

El modo está disponible desde el 13 de agosto **en preview limitada** para un grupo reducido de clientes de la API de OpenAI, con acceso que se irá ampliando según crezca la capacidad. Los casos de uso que OpenAI destaca — respuesta a incidentes, análisis financiero, atención al cliente, ciberseguridad — son todos escenarios donde los segundos cuentan y donde, hasta ahora, había que elegir entre velocidad o inteligencia. El movimiento también consolida a Cerebras como jugador de inferencia frontier: servir el modelo insignia de OpenAI es su mejor referencia de producción.
