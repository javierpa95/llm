---
title: "Alibaba presenta Co-Design Bench: el benchmark de agentes de código construido con peticiones reales que dejan a los modelos en un 26% de tareas resueltas"
date: 2026-11-08
source: "The Decoder / arXiv"
source_url: "https://the-decoder.com/ai-coding-agents-still-need-human-cleanup-on-nearly-three-out-of-four-tasks-in-a-real-world-test/"
category: "investigación"
summary: "Borrador: benchmark Co-Design Bench de Alibaba — GPT-6 Astra solo resuelve el 26,4% de tareas reales de modificación de apps web; los benchmarks clásicos están saturados."
reading_time: "3 min"
tags: [benchmark, coding-agents, alibaba, co-design-bench, investigacion]
status: "draft"
---

🔬 **Alibaba y varias universidades asiáticas** han creado **Co-Design Bench**, un benchmark para agentes de programación construido a partir de peticiones de cambio reales de usuarios (con imágenes, audio, vídeo o documentos como entrada). El resultado es humillante para la industria: incluso **GPT-6 Astra**, el mejor de los diez modelos evaluados, solo resuelve por completo el **26%** de las tareas, aunque cumple de media un 70% de los requisitos.

La justificación del paper: los benchmarks clásicos están **saturados** — cuando los agentes pueden ejecutar, verificar y corregir su propio código, alcanzan puntuaciones superiores al 99% y las diferencias entre modelos dejan de ser medibles. Co-Design Bench seleccionó deliberadamente sesiones donde los usuarios tuvieron que reformular peticiones o revertir cambios: tareas que ya sabían que fallaban. El punto débil es el **breadth**: todo modelo cae en cuanto una tarea mezcla tres o cuatro tipos de cambios distintos (layout, diseño, interacción, contenido) — que es la norma en proyectos reales. Y más cómputo no lo arregla: GLM-5.2 quema casi 6× los tokens de GPT-6 Astra y sigue por detrás.

Coherente con el hallazgo de METR: la tasa real de aceptación de código por desarrolladores está ~24 puntos por debajo de SWE-bench Verified.

Fuentes: [The Decoder](https://the-decoder.com/ai-coding-agents-still-need-human-cleanup-on-nearly-three-out-of-four-tasks-in-a-real-world-test/) · [Paper arXiv 2610.35138](https://arxiv.org/abs/2610.35138) · [codesignbench.github.io](https://codesignbench.github.io/)
