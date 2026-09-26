---
title: "FLUX 3 Action: Black Forest Labs lanza el primer modelo abierto de acción-para-robotos con solo 7B parámetros"
date: 2026-09-26
source: "The Decoder"
source_url: "https://the-decoder.com/black-forest-labs-launches-flux-3-action-an-open-robotics-ai-model/"
category: "modelos"
summary: "FLUX 3 Action usa cámaras multiview para predecir acciones robóticas con 7B params, batiendo récords en RoboLab-120 y con pesos abiertos en Hugging Face."
reading_time: "3 min"
tags: [robotics, world-action-model, open-weights, black-forest-labs, FLUX-3, embodied-ai]
---

Black Forest Labs (BFL), conocida por los modelos de generación de imágenes FLUX, ha lanzado **FLUX 3 Action**: un modelo abierto diseñado específicamente para robótica. A diferencia de los grandes modelos de razonamiento que planean bien pero son demasiado pesados para ejecutar en un robot, FLUX 3 Action toma feeds de vídeo multicámara de un entorno de trabajo y predice **qué acción debería tomar un agente y cómo cambiará el entorno como resultado**. Es un modelo de *acción-mundo* (*world-action model*) que se ejecuta en tiempo real.

## Récord en robolab con solo 7.000 millones de parámetros

En el leaderboard **RoboLab-120** de NVIDIA, FLUX 3 Action establece un nuevo récord de tasa de éxito con solo **7B parámetros**: menos de la mitad del tamaño del mejor modelo abierto anterior ([Cosmos3-Nano-FP8](https://huggingface.co/Reza2kn/Cosmos3-Nano-FP8)) y ejecutándose hasta **3,95 veces más rápido**. Esta eficiencia es crítica para la implementación en dispositivos (*on-device*), donde los robots no pueden depender de un servidor externo para tomar decisiones en tiempo real.

El modelo construye sobre la arquitectura multimodal de FLUX 3, entrenada principalmente en vídeo pero también en datos de imagen y audio. BFL señala que los modelos de razonamiento grandes pueden planificar bien, pero suelen ser demasiado lentos y voluminosos para robots — de ahí la importancia de optimizar para eficiencia.

## Pesos abiertos y aplicaciones más allá de la robótica

Los pesos de FLUX 3 Action están disponibles en [Hugging Face](https://huggingface.co/collections/black-forest-labs/flux-3-action), permitiendo que investigadores y desarrolladores los adapten a sus propios entornos. BFL también ve potencial en **entornos digitales**: los videojuegos como campo de pruebas para navegación y agentes que reaccionan rápido, lo que podría extenderse a agentes de computadora en el futuro.

El lanzamiento posiciona a Black Forest Labs como un actor serio en la intersección entre IA multimodal y robótica embodied, un campo que hasta ahora estaba dominado por laboratorios como NVIDIA (con Cosmos) y Google DeepMind. La diferencia clave: hacerlo **abierto y pequeño**.
