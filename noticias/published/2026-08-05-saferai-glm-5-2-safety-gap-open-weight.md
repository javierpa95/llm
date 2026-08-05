---
title: "SaferAI: GLM-5.2 no rechaza ninguna tarea ofensiva y el gap de seguridad open-weight se agranda"
date: 2026-08-05
source: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/04/open-weight-ai-models-are-catching-up-to-the-frontier-the-safety-gap-remains/"
category: "seguridad"
summary: "Nuevo informe de SaferAI: el open-weight GLM-5.2 está a meses de la frontera en capacidades cyber/bio, pero no rechazó ninguna tarea ofensiva en la evaluación, mientras Opus 4.7 rechazó tantas que no se pudo completar el test."
reading_time: "3 min"
tags: [saferai, glm-5-2, open-weight, seguridad, jailbreaks, ciberseguridad]
---

## Capacidades a la par, salvaguardas ausentes

La organización sin ánimo de lucro **SaferAI** ha evaluado a **GLM-5.2**, el modelo open-weight de la china Z.ai, y concluye que sus capacidades en ciberataques y biología de doble uso ya están **solo unos meses por detrás de GPT-5.5 y Claude Opus 4.7**. El problema: la divisoria entre capacidades y prácticas de seguridad **se está ensanchando**, no cerrando.

El dato más llamativo del informe, ejecutado vía la API pública de Z.ai: GLM-5.2 **no rechazó ninguna** de las tareas ofensivas de ciberseguridad o biología que se le plantearon. En contraste, Claude Opus 4.7 "rechazó con tanta consistencia que SaferAI no pudo completar CyberGym en absoluto" — el mismo benchmark de capacidades cibernéticas que OpenAI usó en la evaluación previa al incidente de Hugging Face de julio.

## Por qué las salvaguardas no sirven en open-weight

La razón es estructural: los desarrolladores de modelos cerrados dependen de clasificadores, entrenamiento de rechazo y controles a nivel de API. Cuando alguien descarga los pesos, **todas esas protecciones se pueden eliminar o modificar** — con fine-tuning o cambiando el system prompt. El informe señala además que los jailbreaks universales son ya un problema generalizado: Far.ai encontró cientos de llaves reutilizables que funcionan en la mayoría de peticiones dañinas contra modelos como Grok 4.5 o Gemini 3.1 Pro.

SaferAI no solo diagnostica: propone mitigaciones concretas, como el **filtrado de datos de preentrenamiento** para eliminar conocimiento ofensivo sin dañar el rendimiento general. Eso funciona parcialmente para biología, pero es mucho menos práctico en ciberseguridad: "es difícil entrenar un modelo que sea excelente en coding y no sea también un buen hacker".

| Modelo | Rechazos en tareas ofensivas |
|--------|------------------------------|
| GLM-5.2 (open-weight) | 0 de todas las tareas |
| Claude Opus 4.7 | Rechazo consistente (test incompleto) |

## El debate se desplaza

Con los modelos open-weight acercándose a la frontera, el debate pasa de "¿pueden competir?" a "¿cómo se gestionan los riesgos una vez liberados?". Los defensores recuerdan que Hugging Face usó GLM-5.2 precisamente para defenderse del ataque agéntico de OpenAI, y que conocer las capacidades ofensivas ayuda a prepararse. Para SaferAI, ese beneficio está sobrevalorado: "los atacantes adoptan herramientas nuevas más rápido que los defensores" — un ransomware puede cambiar de método en una semana; un hospital, no.

---

*Fuente: [TechCrunch](https://techcrunch.com/2026/08/04/open-weight-ai-models-are-catching-up-to-the-frontier-the-safety-gap-remains/) — 5 agosto 2026*
