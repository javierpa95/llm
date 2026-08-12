---
title: "Un Claude de investigación mejora la cota de la hipótesis de Riemann: del 41,6% al 67,2% coordinando 60 subagentes"
date: 2026-08-12
source: "Anthropic / TechCrunch"
source_url: "https://www.anthropic.com/research/riemann-zeta"
category: "investigación"
summary: "Un modelo de investigación no publicado de Anthropic eleva del 41,6% al 67,2% la proporción conocida de ceros de la función zeta que cumplen la hipótesis de Riemann, orquestando 60 subagentes, 31M de tokens y verificación formal en Lean."
reading_time: "3 min"
tags: [anthropic, claude, riemann, matematicas, agentes, lean, investigacion]
---

Anthropic ha publicado el resultado de un experimento inusual: pidió a un modelo de investigación **no publicado** de Claude que *"lo intentara en serio"* con la **hipótesis de Riemann**, uno de los problemas abiertos más famosos de las matemáticas (1859, con un premio de un millón de dólares). El modelo no la demostró, pero de forma inesperada **mejoró un límite inferior clásico**: la proporción de ceros de la función zeta que cumplen la hipótesis sube del **41,6% al 67,2%**, un avance real sobre décadas de trabajo de matemáticos humanos.

El hallazgo es un caso de estudio de **agentes a escala**. Jarred Sumner, empleado de Anthropic sin formación matemática, lanzó a Claude en *Claude Code* con la instrucción de intentarlo y dejó las decisiones al modelo: primero probó 650 ideas que fallaron y, tras un empujón, coordinó durante día y medio unos **60 subagentes** que ejecutaron 2.400 comandos de shell, escribieron cientos de scripts Python y se arbitraban entre sí, consumiendo **31 millones de tokens** de salida. Solo dos subagentes produjeron las ideas matemáticas clave; otros 13 validaron las pruebas y dos redactaron el paper. El resultado, que combina técnicas de Baluyot, Goldston, Suriajaya y Turnage-Butterbaugh con un trabajo de Bombieri de 2000, fue **revisado por dos matemáticos internos de Anthropic** y por los expertos externos Brian Conrey y Dan Goldston, y además cuenta con una **formalización verificable en Lean**.

El caso se suma a una racha de resultados matemáticos de LLMs: los problemas de Erdős resueltos este año, los 10 teoremas de OpenAI Astra o la refutación de la conjetura de Jacobian por Anthropic. También alimenta el debate sobre la autoría: una declaración de matemáticos de junio pedía que los teoremas sigan siendo atribuibles a personas, mientras el medallista Fields Timothy Gowers relativiza — *"si los teoremas ya no se asocian a matemáticos, quizá no sea más problemático que las estrellas no lleven el nombre de los astrónomos"*. Anthropic matiza que no espera que estas técnicas demuestren la hipótesis completa, pero el experimento muestra la velocidad de progreso de las capacidades matemáticas de los modelos.
