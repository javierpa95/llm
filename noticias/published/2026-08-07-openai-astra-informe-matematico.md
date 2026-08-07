---
title: "OpenAI confirma 'Astra', su próxima familia de modelos: resolvió 10 problemas matemáticos abiertos sin resolver en décadas"
date: 2026-08-07
source: "The Decoder"
source_url: "https://the-decoder.com/openai-announces-its-next-major-model-astra-by-dropping-ten-previously-unsolved-math-solutions/"
category: "modelos"
summary: "OpenAI publica su informe matemático y confirma Astra: una familia multi-agente que resolvió 10 problemas abiertos de matemáticas y teoría de la computación, con pruebas formalizadas en Lean."
reading_time: "4 min"
tags: [openai, astra, matemáticas, test-time-compute, agentes, lean, investigación]
---

OpenAI ha publicado su **informe matemático** y por primera vez confirma oficialmente el nombre de su próxima familia de modelos: **Astra**. Según la compañía, una versión interna de Astra —descrita como su *"next major model family"*— ha resuelto **diez problemas abiertos** en matemáticas y ciencias de la computación teórica sobre los que la comunidad no había avanzado en al menos una década, y en la mayoría de los casos mucho más.

## Resultados que cruzan varias disciplinas

Los diez resultados cubren campos tan dispares como **geometría de alta dimensión, teoría de códigos, teoría de grupos, complejidad cuántica, criptografía de retículos y combinatoria extremal**. Una de las pruebas establece la existencia de **grupos no-sofic**, resolviendo una cuestión abierta mayor en teoría de grupos.

El matemático Thomas Bloom (Universidad de Manchester, responsable de erdosproblems.com) calificó los resultados de *"big news"* en X, considerándolos más significativos que el contraejemplo a la conjetura de la distancia unitaria publicado en mayo: *"quizá no más que una prueba de la distancia unitaria, pero en términos de construcciones, esto es grande"*.

Dos detalles llaman la atención sobre el coste y la verificabilidad:

- Los tokens para generar las **diez soluciones** habrían costado **~2.000 $** a las tarifas API de GPT-5.6 Sol.
- El modelo **formalizó cada prueba en Lean**, generando certificados de corrección comprobables por máquina, y OpenAI publicó un *walkthrough* del razonamiento del modelo para cada solución.

Noam Brown, uno de los investigadores tras la tecnología de *test-time reasoning* que usa Astra, fue cauto en X: *"Tristemente, aún no hay problemas del Milenio (todavía)"*, y añadió que *"no gastamos mucho en cada problema; es posible empujar el test-time compute mucho más lejos"*. OpenAI citó la **Declaración de Leiden sobre IA y matemáticas** para justificar que no atribuye autoría humana a pruebas generadas íntegramente por IA.

## Una nueva clase de modelo multi-agente

Más allá del hito matemático, Astra es estratégicamente importante. Según The Information, Astra formaría una **nueva clase de modelo** junto a las familias Sol, Terra y Luna de OpenAI — aún sin decidir si se lanzará como GPT-6 o como variante de la línea GPT-5 (tipo GPT 5.7), y sin fecha de lanzamiento.

La apuesta es por sistemas que **coordinan múltiples agentes durante horas o incluso días** para problemas largos: complejos proyectos de ingeniería y matemáticas avanzada como casos de uso. Sam Altman ya habría demostrado Astra ante políticos y reguladores en Washington esta semana. Los modelos ya estarían en pruebas y serían los **primeros en pasar el nuevo marco regulatorio de la administración Trump**, que exigiría enviar los modelos al gobierno federal antes de su publicación.

La gran pregunta técnica sigue abierta: si Astra podrá **evitar la acumulación de errores** en flujos de trabajo de larga duración y autocorregirse cuando el contexto crece — la debilidad principal de los sistemas agénticos actuales. OpenAI tiene como objetivo para **marzo de 2028** un investigador de IA totalmente autónomo, y para este septiembre un sistema con habilidades de becario de investigación.

---

*Fuente: [The Decoder — OpenAI announces its "next major model" Astra](https://the-decoder.com/openai-announces-its-next-major-model-astra-by-dropping-ten-previously-unsolved-math-solutions/) — publicado 1 agosto, actualizado 6 agosto 2026*
