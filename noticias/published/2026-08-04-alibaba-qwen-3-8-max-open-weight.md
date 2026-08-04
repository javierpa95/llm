---
title: "Alibaba abre los pesos de Qwen3.8-Max: 2.4T parámetros y 95B activos para tareas autónomas de días de duración"
date: 2026-08-04
source: "The Decoder"
source_url: "https://the-decoder.com/alibabas-open-weight-qwen3-8-max-takes-on-long-horizon-ai-tasks-with-2-4-trillion-parameters/"
category: "modelos"
summary: "Qwen3.8-Max, el modelo más capaz de Alibaba (2.4T parámetros, 95B activos), será el primer Qwen-Max con pesos abiertos la próxima semana, con casos de uso autónomos de 16 días."
reading_time: "3 min"
tags: [alibaba, qwen, open-weight, moe, long-horizon, agentes, autonomia]
---

Alibaba ha presentado **Qwen3.8-Max**, su modelo de lenguaje más capaz hasta la fecha, con **2,4 billones de parámetros totales** (95.000 millones activos por consulta) en arquitectura basada en Qwen3.5. La novedad clave: será el **primer modelo de la clase Qwen-Max con pesos abiertos**, disponibles en Hugging Face y ModelScope la próxima semana. El equipo orienta el modelo a tareas complejas de larga duración que se ejecutan de forma autónoma durante días, en lugar de responder prompts puntuales.

## Autonomía demostrada en cinco casos de estudio

El equipo publicó varios experimentos donde el modelo trabajó sin intervención humana. El más llamativo: **oh-my-cli**, una herramienta de línea de comandos construida en 16 días donde el modelo gestionó su propio backlog — convirtió peticiones en issues de GitHub, se las asignó, escribió el código, ejecutó tests e iteró hasta acumular **265 commits y 127 pull requests**. En otro caso, reprodujo el paper *"Unified Data Selection for LLM Reasoning"* sin código inicial: en ~125 horas de cómputo escribió 7.600 líneas de código, ejecutó 33 trabajos de entrenamiento GPU, reprodujo los seis resultados principales y terminó superando el método original en AIME24.

También ganó a casi todos los humanos: en el WWW2025 Multimodal Dialogue Intent Recognition Challenge (526 equipos), fine-tuneó varios modelos chinos junto a Qwen2.5-VL-7B en 24 horas y superó a **458 de los 526 equipos**. En E-Commerce-Bench, una simulación de un año fiscal en retail con 152 estafadores ocultos entre proveedores, cuadruplicó su capital inicial (de 100.000 a 416.252 yuanes) — un 38% más que GLM 5.2.

| Métrica | Valor |
|---|---|
| Parámetros totales | 2,4T (MoE) |
| Parámetros activos | 95B |
| PaperBench | 93 (más alto de la comparativa) |
| TerminalBench 2.1 | 86,6 (GPT-5.6 Sol: 88,8) |
| Capacidad multimodal | Documentos 200+ páginas, vídeo 100+ horas |

## Entrenamiento y disponibilidad

El equipo atribuye la resistencia en tareas largas a una **expansión de los entornos de entrenamiento durante RL**: ya no solo tareas individuales, sino flujos de trabajo multi-día, estructuras de directorios anidadas y varios harnesses de agentes. Su índice interno subió de 0,474 a 0,725 con rendimiento óptimo alrededor de 4.000 entornos.

Qwen3.8-Max está disponible ya en QwenCloud con soporte para los formatos de API de OpenAI y de Anthropic (se integra con Claude Code, Codex y Qoder CLI), más un parámetro `reasoning_effort` con tres niveles. Los pesos abiertos llegarán la próxima semana, y quedará por ver si la verificación independiente confirma las cifras internas — el mismo escrutinio que recibió su rival directo **Kimi K3** de Moonshot (2,8T de parámetros, open weights desde el 27 de julio).
