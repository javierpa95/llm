---
title: "Runway libera Praxis-1: un modelo de vídeo preentrenado que controla robots físicos, con pesos y código bajo Apache 2.0"
date: 2026-11-15
source: "The Decoder / Runway"
source_url: "https://the-decoder.com/runways-open-source-praxis-1-turns-video-ai-into-a-robot-controller/"
category: "modelos"
summary: "Runway publica los pesos y el código de Praxis-1 bajo Apache 2.0: un World Action Model que aprendió de vídeo genérico y ahora mueve brazos robóticos reales, líder de su categoría en RoboLab-120."
reading_time: "4 min"
tags: [runway, praxis-1, open-weight, robotica, apache-2.0]
---

🧠 **Runway**, conocido por sus modelos de vídeo generativo como Gen-4.5, ha liberado los **pesos y el código fuente de Praxis-1** bajo licencia **Apache 2.0**, con uso comercial permitido. El modelo, presentado en septiembre solo para socios seleccionados, llega ahora acompañado de un [informe de investigación](https://runway.com/research/praxis-1-video-pretraining-to-robot-control) detallado y está disponible en [Hugging Face](https://huggingface.co/collections/runwayml/praxis-1) y [GitHub](https://github.com/runwayml/praxis-1-oss). Es la apuesta de Runway por lo que llama **World Action Models**: modelos que predicen cómo va a cambiar una escena y derivan de ahí los movimientos exactos que un robot debe ejecutar.

## Del vídeo de YouTube al brazo robótico

La idea técnica es sencilla de contar y potente en la práctica: Praxis-1 parte de un modelo de vídeo que aprendió **cómo se mueven e interactúan los objetos del mundo real** viendo grabaciones ordinarias. Después se ajustó con vídeos de acciones humanas y datos de robots. La entrada es multimodal (imágenes de cámara, instrucciones en texto y la posición del robot) y la salida son las órdenes de control, que se recalculan continuamente con cada fotograma nuevo. Si funciona como promete, reduciría la dependencia de los **datasets robóticos específicos**, históricamente carísimos de recopilar — aunque el propio Runway reconoce que todavía necesita datos especializados: ~277 horas del dataset público DROID para adaptar un brazo Franka, y entre 1.400 y 2.600 horas para un robot bimanual.

| Métrica | Praxis-1 | Comparación |
|---------|----------|-------------|
| RoboLab-120 (simulación) | **46,2%** | FLUX 3 Action: 42,9% |
| Tareas reales brazo Franka | **88/100** | FLUX 3 Action: 80/100 |
| Transferencia a robot nuevo (RT-1, ~95 h de datos) | **80%** | RT-1 original: 52,4% |
| Requisito de GPU (versión estándar) | **80 GB VRAM** | Versión comprimida: RTX 5090 (32 GB) |

En el leaderboard de **Nvidia RoboLab-120**, Praxis-1 lidera la categoría World Action Model y ocupa el quinto puesto global. En pruebas reales con un brazo Franka resolvió 88 de 100 intentos en diez tareas (colocar un plátano en un plato, cerrar un cajón...). Y en la prueba de transferencia más interesante: tras afinarse con solo ~95 horas de datos de un robot que nunca había visto (la plataforma móvil con pinza de Google RT-1), alcanzó un 80% de éxito frente al 52,4% del RT-1 original. Ojo: **todos los tests los ejecutó el propio Runway** y aún no hay verificación independiente.

## Límites honestos y por qué importa

Runway es transparente con las limitaciones: Praxis-1 **confunde objetos parecidos**, falla con instrucciones vagas y **no puede planificar secuencias de acciones complejas por sí solo** — para tareas largas hay que desglosarle los pasos. Su papel concebido es el de ejecutor rápido de movimientos, en combinación con un LLM generalista que planifique. La versión estándar requiere una GPU de 80 GB, aunque Runway estima que una versión comprimida cabe en una RTX 5090 de 32 GB (sin medición confirmada de pico de memoria).

Más allá de la robótica, la noticia es relevante para el ecosistema LLM por lo que representa: la transferencia de **preentrenamiento masivo de vídeo** a control físico, liberada con pesos abiertos y licencia permisiva — la misma jugada que FLUX 3 Action intentó en septiembre. Los open weights empiezan a salir del chat y a tocar el mundo físico.
