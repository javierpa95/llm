---
title: "🔬 NVIDIA publica la receta abierta para oro en la IMO: Nemotron 3 Ultra convierte un modelo general en agente de matemáticas olimpíadas"
date: 2026-09-13
source: "The Agent Times / arXiv / Hugging Face"
source_url: "https://arxiv.org/abs/2609.10712"
category: "investigación"
summary: "NVIDIA libera el pipeline completo — checkpoints, datos, código y benchmark — para replicar su sistema que obtuvo 30/42 en la IMO 2026"
reading_time: "5 min"
tags: [nvidia, nemotron, math-reasoning, agents, open-source, imo]
---

## Del modelo general al agente olimpíada: la receta abierta de NVIDIA

El 9 de septiembre de 2026, NVIDIA publicó en arXiv un paper que detalta cómo convirtió **Nemotron 3 Ultra** — un modelo MoE general-availability de 550B parámetros (55B activos por token) — en un sistema especializado en matemáticas de nivel olimpíada. El resultado: **30 de 42 puntos en la IMO 2026**, superando el umbral de oro (29 puntos), sin usar asistente de demostración formal, herramientas externas ni acceso a internet.

Lo que hace especialmente relevante este resultado para la comunidad de LLMs es que **todo el stack es abierto**: los dos checkpoints especializados, los datos de entrenamiento (414.890 muestras), el código de entrenamiento e inferencia, las soluciones enviadas y un nuevo benchmark de 200 problemas olimpíadas (Nemotron-IMO-Bench).

## Arquitectura: generate-verify-refine sin Lean ni Coq

El sistema funciona en lenguaje natural puro. Tres checkpoints de Nemotron 3 Ultra — el modelo general (GA) y dos especialistas (SFT y RL) — colaboran en un pipeline iterativo:

1. **Generación**: Cada problema produce **384 intentos de demostración** entre los tres checkpoints.
2. **Verificación**: Un panel de verificadores (RL + SFT) juzga cada demostración múltiples veces. Una demostración solo se acepta si **todos los verificadores están de acuerdo** en las 16 evaluaciones.
3. **Refinamiento**: Las demostraciones rechazadas se revisan con las críticas de los verificadores, y el ciclo se repite (máximo 8 rondas).
4. **Selección**: Los finalistas se rankean con 48 calificaciones estilo olimpíada, y se elige la mejor.

La lección práctica del paper es que **escalar solo la generación no basta**: los mayores avances vinieron de los checkpoints complementarios post-entrenados, la verificación guiada por refinamiento que preserva candidatos prometedores entre rondas, y la cantidad de compute dedicada a la evaluación final.

## Post-training: SFT + RL como fórmula para especialización

El equipo entrenó dos specialist checkpoints desde Nemotron 3 Ultra:

- **Nemotron-3-Ultra-SFT**: Supervised fine-tuning sobre 414.890 ejemplos con demostraciones generadas por DeepSeek-V4-Pro en modo Max.
- **Nemotron-3-Ultra-RL**: Reinforcement learning para refinar la capacidad de generación y verificación.

Los datos SFT incluyen trazas de generación, refinamiento, verificación y meta-verificación — un dataset híbrido de fuentes automatizadas, colecta manual y síntesis. El paper documenta que el SFT solo reduce los falsos aceptados del 31,6% (GA) al 4,5%, mientras que el panel unánime RL+SFT llega al 1,1%.

## El coste real: 4.800 GPU-hours en GB200

La competición tomó aproximadamente **1.464 GPU-hours en GB200** para encontrar las demostraciones enviadas, y el run completo (incluyendo rondas adicionales) llegó a 4.800 GPU-hours y 2.310 millones de tokens. Un detalle revelador: el sistema mantuvo buscan-do después del corte de tiempo de la competición (4,5 horas) y encontró una demostración mejor para el problema más difícil, pero su propio verificador no la aceptó — y una re-evaluación humana independiente le dio 4 de 7.

Los autores reconocen honestamente el punto ciego principal: **los verificadores basados en el modelo puntuaron el run en ~32 puntos, dos puntos por encima del resultado oficial de 30**. Esto ilustra la debilidad fundamental de "AI calificando AI": dos jueces entrenados con material similar pueden cometer los mismos errores.

## Por qué importa para la comunidad

Este resultado demuestra que **arquitecturas agénticas — generación iterativa, auto-verificación y bucles de refinamiento — pueden alcanzar rendimiento de nivel experto** en tareas que requieren razonamiento profundo y multi-paso, sin depender de herramientas externas. Para los desarrolladores de agentes, el release abierto proporciona una plantilla concreta de cómo convertir un modelo de propósito general en un agente especializado de dominio mediante post-training.

El Nemotron-IMO-Bench (200 problemas nuevos) también ofrece a la comunidad una superficie de evaluación limpia y no contaminada para medir capacidades de razonamiento en la frontera.

**Requisitos de hardware**: Cada checkpoint especialista ocupa 1.12 TB. La tarjeta de modelo recomienda al menos un nodo de 8 GPUs B200 (~1.5 TB de memoria combinada) o 8+ GPUs H100/H200/GB200 distribuidas. No es hardware de consumo, pero el pipeline completo es replicable por equipos de investigación con acceso a clusters.

**Recursos**: [arXiv:2609.10712](https://arxiv.org/abs/2609.10712) · [Hugging Face Collection](https://huggingface.co/collections/nvidia/nemotron-labs-imo-2026) · [Código de inferencia](https://github.com/NVIDIA-NeMo/Skills/tree/main/recipes/nemotron-imo-tts) · [Receta RL](https://github.com/NVIDIA-NeMo/RL/blob/imo-26-ultra-v3/docs/guides/nemotron-3-ultra-imo.md)
