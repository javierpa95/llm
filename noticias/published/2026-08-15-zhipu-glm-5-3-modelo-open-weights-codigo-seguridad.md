---
title: "Zhipu lanza GLM-5.3: el modelo open-weights de código 'más potente', con +50% solo vía post-training y entrenado en ciberseguridad"
date: 2026-08-15
source: "The Decoder"
source_url: "https://the-decoder.com/zhipu-ai-releases-glm-5-3-claims-its-the-strongest-open-weights-coding-model/"
category: "modelos"
summary: "Zhipu publica GLM-5.3, un modelo open-weights de código con +50% sobre GLM-5.2 solo vía post-training, entrenado en ciberseguridad: 2.436 vulnerabilidades encontradas en 269 proyectos."
reading_time: "3 min"
tags: [zhipu, glm, modelos-abiertos, ciberseguridad, coding]
---

Zhipu AI ha lanzado **GLM-5.3**, una actualización de su familia de modelos que, según la compañía, es **el modelo open-weights de código más potente** hasta la fecha. Lo llamativo del anuncio es que GLM-5.3 **comparte la misma base que GLM-5.2**: todas las mejoras —un **50% de ganancia** según Zhipu— provienen exclusivamente de un **post-training extendido**, sin cambios en el preentrenamiento. Los mayores saltos se registran en **tareas basadas en agentes**, el terreno donde los modelos abiertos chinos compiten más directamente con los frontier cerrados.

La otra pata del lanzamiento es la **ciberseguridad**. Zhipu entrenó GLM-5.3 con datos y entornos diseñados para **encontrar vulnerabilidades de software**, un área donde reconoce que modelos como Kimi o Qwen todavía van por detrás de los frontier estadounidenses. Según Z.ai, el modelo "empezó a razonar a través de múltiples etapas de explotación, formando planes coherentes para cadenas de explotación completas". Trabajando con equipos de seguridad en China, la compañía asegura haber encontrado **2.436 vulnerabilidades en 269 proyectos**, algunos con **hasta 40 años de antigüedad**, documentadas en un registro público.

| Dato | Detalle |
|------|---------|
| Base | Misma que GLM-5.2 (mejora solo por post-training) |
| Ganancia | ~50% frente a su predecesor (según Zhipu) |
| Foco | Coding + agentes + ciberseguridad |
| Resultado | 2.436 vulnerabilidades en 269 proyectos |

GLM-5.3 ya está disponible a través del **GLM Coding Plan** y funciona con agentes de código como **ZCode, Claude Code u OpenCode**. Los pesos se abrirán **dentro de dos semanas**, una vez concluyan las revisiones de seguridad — un detalle que conecta con el informe de SaferAI de principios de mes que señalaba el gap de seguridad de GLM-5.2: esta versión parece ser, también, la respuesta de Zhipu a esa crítica.
