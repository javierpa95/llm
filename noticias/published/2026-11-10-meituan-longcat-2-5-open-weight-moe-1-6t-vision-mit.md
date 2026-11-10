---
title: "Meituan libera LongCat-2.5: MoE multimodal open-weight de 1,6T parámetros (48B activos) bajo licencia MIT"
date: 2026-11-10
source: "VentureBeat / Hugging Face (Meituan LongCat)"
source_url: "https://venturebeat.com/ai/meituan-releases-the-open-weights-of-its-longcat-2-5-llm-with-vision-under-a-permissive-mit-license/"
category: "modelos"
summary: "Meituan publica los pesos de LongCat-2.5, un MoE multimodal nativo de 1,6T parámetros con ~48B activos por token, licencia MIT y enfoque en agentes de largo horizonte."
reading_time: "3 min"
tags: [open-weight, MoE, multimodal, agentes, MIT]
---

🧠 **Meituan ha liberado los pesos de [LongCat-2.5](https://huggingface.co/meituan-longcat/LongCat-2.5)**, la segunda generación de su familia LongCat, en Hugging Face bajo **licencia MIT**. Es un modelo **MoE multimodal nativo de 1,6 billones de parámetros totales con ~48.000 millones activados por token**, diseñado para tareas agénticas de largo horizonte: comprensión visual integrada en el mismo bucle de razonamiento que escribe código, desarrollo de proyectos completos, diseño creativo y tareas 3D.

| Característica | Valor |
|---|---|
| Parámetros totales | ~1,6T (MoE) |
| Activos por token | ~48B |
| Modalidad | Multimodal nativo (imagen + texto) |
| Licencia | MIT |
| Entrenamiento | Aceleradores domésticos chinos, cuantización a 4 bits de expertos |

**Lo técnicamente interesante** está en la receta de entrenamiento: la visión nativa convierte features visuales a resolución original en tokens discretos alineados con el texto en un espacio semántico compartido (basado en LongCat-Next). El RL agéntico de largo horizonte combina tareas reales de ingeniería con fallos reproducibles de agentes y salvaguardas contra *reward hacking*. Además usan **aprendizaje multi-maestro** (agentes, razonamiento e interacción) vía destilación KL de vocabulario completo y Tree Attention, y reportan un **86% más de throughput por dispositivo** que el baseline DDP en tareas SFT de secuencia larga.

**Benchmarks** (según la model card, mezcla de medidas propias y citadas): en **Terminal Bench v2.1** logra 88,4, a un punto de GPT-5.6 Sol (88,8) y Claude Opus 5 (89,1), un salto enorme desde los 70,8 de LongCat-2.0. En la versión más dura **Terminal Bench v4.0** se queda en 38,5 frente al 53,9 de Opus 5. En **BrowseComp** alcanza 91,9 y en **HLE con herramientas** 63,1, prácticamente empatado con Opus 5. Meituan también publica una [guía de despliegue con SGLang para NPUs](https://github.com/meituan-longcat/SGLang-FluentLLM/blob/longcat-2.5-npu/npu_test/ReadMe.md) y su blog técnico describe la cuantización a 4 bits de pesos de expertos y activaciones sobre aceleradores chinos.

Con este lanzamiento, la gama de modelos abiertos para agentes coding+visión se ensancha aún más: Kimi K3 (2,8T), DeepSeek V4.1-Flash, GLM-5.3 y ahora LongCat-2.5. Para equipos que quieren un agente capaz de mirar una captura de un checkout roto, encontrar el componente en el repo y proponer el patch, hay una alternativa MIT más sin ataduras de licencia.
