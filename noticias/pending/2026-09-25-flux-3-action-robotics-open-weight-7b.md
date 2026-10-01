---
title: "Black Forest Labs lanza FLUX 3 Action: un modelo abierto de 7B para robótica que lidera el leaderboard a mitad de tamaño"
date: 2026-09-25
source: "Hugging Face Blog / VentureBeat"
source_url: "https://huggingface.co/blog/black-forest-labs/flux-3-action"
category: "modelos"
summary: "FLUX 3 Action es un World Action Model de 7B parámetros con pesos abiertos que traduce observaciones de cámara e instrucciones en acciones físicas para robots."
reading_time: "3 min"
tags: [flux, black-forest-labs, robótica, open-weight, world-action-model, inferencia]
---

Black Forest Labs (BFL), la startup alemana conocida por sus modelos de imagen y vídeo FLUX, ha dado un paso hacia la robótica con **FLUX 3 Action**, un modelo de **7B parámetros** con pesos abiertos diseñado para traducir observaciones de cámara, el estado actual de un robot e instrucciones en lenguaje natural en acciones físicas.

FLUX 3 Action es un **World Action Model (WAM)** que se construye sobre la base multimodal FLUX 3, entrenada principalmente en vídeo pero también en datos de imagen y audio. El modelo toma como entrada la observación visual del entorno, el estado del robot y una instrucción en lenguaje natural, y genera las acciones de control correspondientes.

En el leaderboard, FLUX 3 Action alcanza un **42.92% de éxito** (SR%), liderando entre los modelos de su categoría. Lo más destacado es que logra este rendimiento con solo **7B parámetros**, aproximadamente la mitad del tamaño de sus competidores en la clasificación, lo que sugiere una arquitectura eficiente para la inferencia en hardware de robótica con recursos limitados.

El modelo está disponible con **pesos abiertos** y admite fine-tuning, lo que lo convierte en una opción atractiva para equipos de investigación y desarrollo en robótica que buscan personalizar modelos de acción para dominios específicos. La tendencia de combinar modelos multimodales de visión con capacidad de acción es una de las líneas más activas en la intersección entre LLMs y robótica, siguiendo la dirección que marcaron modelos como RT-2 de Google y el propio ecosistema de embodied AI.
