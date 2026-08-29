---
title: "IBM lanza Granite 4.2: modelos open-weight de 3B, 8B y 30B que traen razonamiento y agentes al hardware local"
date: 2026-08-29
source: "Ars Technica"
source_url: "https://arstechnica.com/ai/2026/08/ibms-new-granite-4-2-models-ride-the-wave-of-interest-in-local-llms/"
category: "modelos"
summary: "IBM renueva su familia Granite con variantes de 3B, 8B y 30B, contexto nativo de 128K, foco explícito en razonamiento por chain-of-thought y entrenamiento agéntico para usar terminal, web y herramientas en las versiones 8B y 30B."
reading_time: "3 min"
tags: [ibm, granite, open-weights, modelos-locales, razonamiento, chain-of-thought, agentes, ia-local, selfhosted, contexto-128k]
---

IBM ha lanzado **Granite 4.2**, la nueva generación de su familia de modelos **open-weight pensada para descargarse y auto-alojarse**. Llega en tres tamaños —**3B, 8B y 30B de parámetros**— y todos comparten un **contexto nativo de 128.000 tokens** sin recortes. Es la primera versión de la serie etiquetada explícitamente como *"la release enfocada en razonamiento de la familia Granite"*: la capacidad de encadenar pasos intermedios (*chain-of-thought*) y arrastrar resultados parciales entre etapas para respuestas más rigurosas, a costa de más cómputo y latencia.

Lo que distingue a esta entrega de las anteriores es el enfoque **agéntico** en los tamaños superiores. Las variantes de **8B y 30B** pasan por un bloque de **reinforcement learning agéntico** que las entrena para acciones instrumentales: usar la terminal, buscar en la web o invocar herramientas externas. El modelo de **3B** también soporta herramientas, pero sin ese entrenamiento especializado. Con ello, IBM apuesta por cubrir el nicho de los **modelos locales que no solo conversan, sino que ejecutan**, sin depender de una API por token.

La familia Granite rara vez acapara titulares por ser la más rápida o la más innovadora —frente a rivales como los Nemotron de Nvidia, su argumento es la **previsibilidad de despliegue**—. Pero aterriza en un momento en el que el debate sobre el coste de los modelos frontier en la nube ha disparado el interés por la inferencia local como alternativa más barata. Para desarrolladores, investigadores y aficionados que quieren trastear sin abonar peajes por token, Granite 4.2 se suma a la ola de modelos abiertos de consumo que acaparan atención este verano junto a Qwen 3.8-27B y Muse Glimmer de Meta.