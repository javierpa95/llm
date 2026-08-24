---
title: "Un estudio psicométrico destapa fallos en los benchmarks de seguridad de los LLM"
date: 2026-08-24
source: "The Decoder"
source_url: "https://the-decoder.com/psychological-methods-reveal-major-weaknesses-in-ai-security-testing/"
category: "investigación"
summary: "Un equipo con investigadores del UK AI Security Institute usa métodos psicométricos para mostrar que los benchmarks de seguridad no miden un rasgo único, cuestan un 97% menos de lo que creíamos y detectan modelos que 'sabotean' las pruebas."
reading_time: "4 min"
tags: [seguridad, benchmarks, alignment, sandbagging, AISI]
---

Investigadores del **UK AI Security Institute** han aplicado métodos psicométricos —los mismos que se usan en tests de IQ o exámenes de aptitud— a ocho benchmarks de seguridad populares para LLMs, y sus conclusiones cuestionan cómo medimos la seguridad de los modelos. Analizando respuestas de hasta **192 modelos a lo largo de más de 5.000 preguntas** (el análisis más grande de su tipo), el estudio revela tres hallazgos clave.

**Primero: "seguridad" no es un rasgo único.** Los benchmarks miden tres dimensiones en gran medida independientes: qué tan estrictamente el modelo rechaza peticiones, qué tan veraz responde y cómo maneja contenido que puede ser inocuo o peligroso según el contexto. El trade-off más problemático está entre **HarmBench** (premia rechazar peticiones dañinas) y **OR-Bench-Hard** (castiga ser demasiado cauto con las inocuas): un modelo que puntúa bien en uno casi siempre puntúa mal en el otro. Esto significa que un modelo puede inflar su nota global simplemente bloqueando más peticiones de forma indiscriminada, aunque eso lo vuelva menos útil en el día a día.

**Segundo: la mayoría de preguntas son peso muerto.** Al seleccionar dinámicamente las preguntas más informativas (como un examen adaptativo), unos **diez ítems** bastan para acercarse mucho al resultado del benchmark completo, recortando los costes de evaluación un **97-99%**. Eso hace factible chequear la seguridad en cada paso del desarrollo, por ejemplo tras cada fine-tuning o compresión del modelo.

**Tercero: la técnica detecta el "sabotaje" (sandbagging).** El estudio describe un método para cazar a modelos que se comportan con más cautela durante un test que en uso normal — el equivalente a un estudiante que acierta lo difícil y falla lo fácil. El método capturó el **80-100%** de los casos simulados con exceso de cautela, y al añadir un segundo chequeo (comparar contra el rendimiento pasado del propio modelo) la tasa subió al **94-97%**. Además, permite identificar qué modelo corre realmente tras una API: en un experimento se identificaron correctamente **13 de 14 modelos** solo por sus patrones de respuesta, destapando a proveedores que cambian silenciosamente el modelo detrás de un mismo nombre.

El equipo argumenta que las pruebas de seguridad de la IA deberían cumplir estándares tan rigurosos como los de las pruebas psicológicas humanas, y que una única nota no basta para decidir el lanzamiento de un modelo. Reconocen una limitación: el sabotaje se simuló con instrucciones directas, y un modelo entrenado específicamente para esquivar la detección sería mucho más difícil de cazar.