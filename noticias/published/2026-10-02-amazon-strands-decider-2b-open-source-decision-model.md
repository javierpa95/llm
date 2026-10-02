---
title: "🧠 Amazon entra en la carrera de los decision models: Strands Decider 2B es open source, cabe en una RTX 3090 y decide en milisegundos"
date: 2026-10-02
source: "VentureBeat / Strands Agents (AWS)"
source_url: "https://venturebeat.com/technology/amazon-unveils-a-free-fast-open-source-jev-killer-strands-decider-2b-makes-decisions-in-fractions-of-a-second"
category: "modelos"
summary: "AWS publica Strands Decider 2B: 2B parámetros, Apache 2.0, pesos + datos de entrenamiento en GitHub/HF. Qwen3.5-2B sin LM head, con pointer head de ~1M params. 115 ms de latencia mediana."
reading_time: "4 min"
tags: [decision-models, system-one, open-source, aws, strands, qwen3-5, agentes, inferencia-local]
---

## 🧠 Un modelo que no genera texto — solo elige

Dos semanas después de que TypeSafe AI abriera la caja de Pandora con [[2026-09-22-jev-decision-models-typesafe-ai|Jev]], **Amazon se suma a la carrera de los decision models** con **Strands Decider 2B**, un modelo de 2.000 millones de parámetros publicado como open source bajo licencia **Apache 2.0**. La diferencia respecto a Jev: no hay API de pago ni cuota por llamada — los pesos, el código, los datos de entrenamiento y los scripts están todos en [GitHub](https://github.com/strands-labs/strands-decider) y [Hugging Face](https://huggingface.co/StrandsAgents), listos para ejecutarse en local.

La propuesta encaja en la categoría que popularizamos hace diez días: los **decision models** (o "System One Models") no generan texto. En vez de pedirle a un LLM frontier que escriba una respuesta, el modelo responde preguntas acotadas —sí/no, elección entre opciones, puntuación 0-1— en una única pasada hacia delante, con una distribución de probabilidad sobre las opciones y un score de confianza calibrado. Como explica el equipo de Strands, el trato es claro: **pierdes flexibilidad, ganas velocidad, latencia baja y respuestas siempre dentro del conjunto de opciones**.

## La arquitectura: quitar el LM head y poner un pointer head

El diseño de Decider 2B es elegante en su simplicidad:

| Componente | Qué hace |
|---|---|
| **Torso** | Qwen3.5-2B preentrenado (de Alibaba), congelado como base |
| **LM head** | **Eliminado** — el modelo pierde la capacidad de generar texto |
| **Pointer head** | Nuevo componente (~1M de parámetros) que puntúa la hidden state de cada opción contra la hidden state de la posición `<answer>` |
| **Fine-tuning** | Adaptador **LoRA rank-16** entrenado sobre ~60M pares de preguntas y respuestas |

El resultado es un forward pass único que devuelve un vector de probabilidades. No hay decodificación autoregresiva, no hay muestreo, no hay alucinaciones posibles: la respuesta siempre es una de las opciones que tú le diste. La versión publicada es la **v19** —el repo documenta cada iteración de la arquitectura, incluida una primera versión con "slot head" que rindió peor—, lo que convierte el proyecto en material didáctico de primera mano sobre cómo se evoluciona un modelo de este tipo.

## Rendimiento: 115 ms en hardware de consumo

Los números medidos por el equipo de AWS:

- **Latencia mediana: ~115 ms** en una Nvidia RTX 3090 local, escalando de forma aproximadamente lineal con el tamaño de la tarea
- **153 ms** en un MacBook M3 (prácticamente igual de rápido)
- **3º de 33** en la clase de modelos de 2B en JevBench (1º de 30 si excluyes los modelos que rozan los 2B) en precisión y calibration (Brier score)
- **100% de aciertos** en las tareas fáciles del benchmark

La latencia importa porque es lo que permite colocar al decider en un punto del camino del agente donde **una llamada a un LLM frontier nunca podría estar**: como guardia de seguridad antes de cada tool call. En el ejemplo del repo, el decider lee la conversación y la tool call propuesta y responde dos preguntas sí/no —*¿los argumentos están anclados en algo que dijo el usuario?* y *¿es prematuro llamar a esta herramienta sin preguntar?*—, y si la respuesta es negativa, el agente vuelve a preguntar en vez de confundir el clima de una ciudad que nadie mencionó.

## El mapa de la categoría en una semana

| Modelo | Fecha | Parámetros | Licencia | Idea clave |
|---|---|---|---|---|
| **Jev** (TypeSafe) | 22 sep | — (API) | Propietaria | Primer System One Model: probabilidades tipadas vía API |
| **CLM-8B** (Stanford/Nvidia) | 29 sep | 8B | Apache 2.0 | Embeddings contrastivas (InfoNCE) + caching de acciones: 9× más rápido que Jev |
| **Strands Decider 2B** (AWS) | 1 oct | 2B | Apache 2.0 | LM head → pointer head; receta completa y ejecutable en local |

Amazon no gana por benchmarks —VentureBeat reconoce que su ventaja es **reproducibilidad abierta**: "aquí tienes el modelo pequeño, la receta, los datos y la maquinaria: ejecútalo tú mismo y modifícalo". En un campo nacido hace diez días con un modelo propietario por API, tres actores ya han respondido con pesos abiertos. La carrera de los "System One Models" ha pasado de idea a ecosistema en catorce días.

---

**Fuentes:** [VentureBeat](https://venturebeat.com/technology/amazon-unveils-a-free-fast-open-source-jev-killer-strands-decider-2b-makes-decisions-in-fractions-of-a-second) · [Blog oficial de Strands Agents](https://strandsagents.com/blog/introducing-strands-decider/) · [Repositorio GitHub](https://github.com/strands-labs/strands-decider)
