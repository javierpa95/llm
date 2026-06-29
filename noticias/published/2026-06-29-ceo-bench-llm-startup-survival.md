---
title: "CEO-Bench: solo tres modelos de IA sobreviven 500 días dirigiendo una startup"
date: 2026-06-29
source: "The Decoder"
source_url: "https://the-decoder.com/only-three-ai-models-finished-above-starting-capital-in-a-500-day-startup-survival-test/"
category: "investigación"
summary: "Investigadores de Princeton crearon CEO-Bench, un simulador donde agentes de IA dirigen una startup durante 500 días. Solo Claude Fable 5, Opus 4.8 y GPT-5.5 terminaron con más capital del inicial. Una heurística sin IA supera a casi todos los modelos."
reading_time: "3 min"
tags: [benchmark, agentes, evaluacion, razonamiento-largo-plazo, frontier-models]
---

## El desafío: dirigir una empresa durante 500 días simulados

Investigadores de la Universidad de Princeton han creado **CEO-Bench**, un benchmark que pone a prueba la capacidad de los LLMs para tomar decisiones estratégicas de largo plazo. La premisa es simple pero exigente: un agente de IA debe dirigir una startup ficticia de software (NovaMind) durante 500 días simulados, comenzando con cero clientes y un millón de dólares en el banco.

El agente controla la empresa a través de una API con 34 herramientas y una base de datos de 19 tablas. Debe tomar decisiones sobre precios, inversión publicitaria, calidad del producto, capacidad de infraestructura, atención al cliente y negociaciones con clientes enterprise. Además, hay una red social simulada donde el agente puede leer quejas, noticias de competidores y tendencias económicas, e incluso publicar mensajes.

Lo que hace difícil la tarea es la **incertidumbre y el desfase temporal**: los ingresos solo llegan en fechas de facturación, los proyectos de I+D tardan días o semanas en dar resultados, y los errores no se manifiestan hasta más tarde a través de la pérdida de clientes o el daño reputacional. Los costes, en cambio, impactan de inmediato.

## Resultados: solo tres modelos no quiebran

De los catorce modelos evaluados, la mayoría fracasa. Casi todos pueden generar comandos y consultas SQL válidas, pero ninguno mantiene una estrategia coherente a lo largo del tiempo. Muchos quiebran antes de que termine la simulación.

Solo tres modelos terminaron su mejor ejecución por encima del capital inicial de un millón de dólares:

| Modelo | Capital final |
|--------|--------------|
| **Claude Fable 5** | $47.15M |
| **Claude Opus 4.8** | $27.8M |
| **GPT-5.5** | $21.3M |
| *Heurística simple (sin IA)* | $15.76M |

Claude Fable 5 es el único que termina por encima del capital inicial en más de una ejecución. Sin embargo, tiene matices: una ejecución abortó porque el modelo se negó a continuar, y en las otras dos algunas solicitudes cayeron en Opus 4.8 como fallback. GPT-5.5 quebró en dos de sus tres ejecuciones.

## La heurística que avergüenza a los LLMs

El resultado más revelador es que una **heurística basada en reglas simples**, que no llama a ningún modelo de lenguaje, alcanza $15.76 millones. Esta heurística fija precios y cuotas constantes, concentra la publicidad en segmentos reducidos de clientes, y ajusta la capacidad según el uso reciente.

Este resultado sugiere que los LLMs actuales, aunque impresionantes en tareas a corto plazo, carecen de lo que los investigadores llaman **"inteligencia de dirección" (steering intelligence)**: la capacidad de tomar decisiones estratégicas bajo incertidumbre, gestionar recursos limitados y mantener una visión coherente a lo largo del tiempo. Es un recordatorio de que la frontera entre capacidades estrechas y razonamiento estratégico general sigue siendo un desafío abierto.
