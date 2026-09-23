---
title: "Xiaomi MiMo-V2.6-Pro: modelo abierto que lidera los rankings con 2,62M$ de RL y acusaciones de destilación de Anthropic"
date: 2026-09-22
source: "The Decoder"
source_url: "https://the-decoder.com/xiaomis-affordable-flagship-ai-leads-the-open-models-and-anthropic-says-claude-helped-get-it-there/"
category: "modelos"
summary: "Xiaomi lidera los modelos abiertos con MiMo-V2.6-Pro: 1T parámetros MoE, 42B activos, 46 pts en el Intelligence Index de Artificial Analysis y un coste de RL de solo 2,62M$. Anthropic acusa a Xiaomi de destilar datos de Claude."
reading_time: "4 min"
tags: [xiaomi, mimo, open-weight, reinforcement-learning, moe, distillation, anthropic]
---

## 🧠 XiaomiMiMo-V2.6-Pro: el modelo abierto más potente del mundo, entrenado con 2,62M$ de reinforcement learning

Xiaomi ha publicado su línea MiMo-V2.6, y el modelo insignia, **MiMo-V2.6-Pro**, se ha colocado como el modelo abierto más fuerte del momento según el Intelligence Index de Artificial Analysis, superando a Kimi K3 y Qwen. Pero lo que realmente llama la atención es el coste: la empresa china ha logrado este salto de rendimiento con un presupuesto de reinforcement learning de apenas **2,62 millones de dólares**.

### Arquitectura y rendimiento

MiMo-V2.6-Pro es un modelo **Mixture-of-Experts (MoE)** con **1,02 billones de parámetros totales**, de los cuales solo **42 mil millones se activan por cada petición**. Esto le permite mantener un coste de inferencia de solo **$0,435 por millón de tokens de entrada** y **$0,87 por millón de tokens de salida** — una fracción de lo que cobran modelos comparables.

En concreto:

- **46 puntos** en el Intelligence Index de Artificial Analysis (el más alto entre modelos abiertos)
- **72,6% en DeepSWE** (prueba de código), subiendo desde 58,4% en la versión anterior
- Coste por tarea de aproximadamente **$0,13**, situándolo en la frontera de Pareto de inteligencia y coste

Junto a Pro, Xiaomi ha lanzado **MiMo-V2.6-Flash** (más pequeño y eficiente) y una variante **Pro-UltraSpeed** que ofrece hasta 20 veces la velocidad de salida.

### El secreto: escalado agresivo de reinforcement learning

El salto de rendimiento se debe enteramente a una ronda expandida de **reinforcement learning (RL)** — entrenamiento por ensayo, feedback y recompensa. Xiaomi escaló esta fase en tres ejes simultáneos:

1. **Más datos por paso de entrenamiento**
2. **Entornos de tarea más variados**
3. **Más compute para evaluar las soluciones**

La carrera de RL completa duró **menos de seis días** y costó **2,62 millones de dólares para Pro** y **0,85 millones para Flash**. Para mantener la estabilidad a esta escala, Xiaomi congeló el mecanismo de distribución interna del modelo y añadió múltiples capas de protección contra **"reward hacking"** — los trucos que usa un modelo para obtener puntuaciones altas sin realmente resolver la tarea.

### Toolkit completo abierto

Lo más interesante para la comunidad es que Xiaomi está liberando **todo el stack de RL** junto con los modelos:

- El informe técnico completo
- El framework de entrenamiento
- Un modelo pequeño para continuar entrenando
- Aproximadamente **7.000 tareas de entrenamiento con evaluadores automáticos**

Esto convierte a MiMo-V2.6 en una de las referencias más completas disponibles para investigadores que quieren reproducir y mejorar la metodología de RL a escala.

### La acusación de Anthropic

Sin embargo, la historia tiene un lado polémico. **Anthropic ha acusado a Xiaomi de destilar datos de Claude** para entrenar su línea de modelos. La empresa no ha proporcionado detalles públicos sobre la evidencia concreta, pero la acusación se suma a un debate creciente sobre los límites éticos de la destilación en el entrenamiento de modelos abiertos. Si se confirma, plantearía preguntas serias sobre cómo se entrenan los modelos "abiertos" que compiten en benchmarks contra sistemas propietarios.

La pregunta de fondo para el ecosistema es si esta acusación afectará la reputación de los modelos abiertos chinos en general, o si simplemente es parte del ruido competitivo en un mercado donde las grandes empresas pelean por la supremacía del frontier.
