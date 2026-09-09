---
title: "Mercury 2.5: el primer LLM por difusión que alcanza 1.107 tokens/segundo"
date: 2026-09-09
source: "Inception Labs / Digital Applied"
source_url: "https://www.inceptionlabs.ai/blog/introducing-mercury-2-5"
category: "modelos"
summary: "Inception lanza Mercury 2.5, un LLM por difusión que genera texto refinando tokens en paralelo en vez de secuencialmente, alcanzando 1.107 tok/s en GPUs estándar."
reading_time: "5 min"
tags: [inception, mercury, difusion, inferencia, latencia, agents, vlm, diffusion-llm]
---

# Mercury 2.5: el primer LLM por difusión que alcanza 1.107 tokens/segundo

Inception Labs ha publicado **Mercury 2.5**, su modelo de lenguaje por difusión más capaz hasta la fecha. La cifra que resalta: **1.107 tokens por segundo** en GPUs NVIDIA estándar — unas 5× más rápido que los modelos autoregressivos típicos del mismo nivel de calidad. Pero la velocidad no es la noticia. La noticia es que la arquitectura por difusión, que hasta ahora siempre sacrificaba calidad por velocidad, dice haber cerrado esa brecha.

## ¿Qué es un LLM por difusión?

Un modelo autoregressivo tradicional genera texto prediciendo un token a la vez: predice → append → repite. Generar 1.000 tokens significa 1.000 pasadas secuenciales, y la GPU pasa la mayor parte del tiempo esperando a la memoria, no calculando. Un modelo por difusión hace lo contrario: parte de un **borrador ruidoso de todo el texto** y lo refina posición a posición en un número fijo de pasos. Si el número de pasos de refinamiento es mucho menor que el número de tokens, el modelo termina mucho antes, usando la GPU de la forma que le gusta: **trabajo paralelo masivo**.

La calidad históricamente era el talón de Aquiles. Refinar en paralelo dificulta mantener dependencias a largo alcance, y los primeros modelos por difusión de lenguaje iban por detrás de los autoregressivos de tamaño comparable en razonamiento. Google ya exploró esta dirección con **DiffusionGemma** (junio 2026), un modelo abierto de investigación. Mercury 2.5 dice haber cerrado la brecha: afirma un **40% de aumento de inteligencia** sobre Mercury 2, comparable al tier más barato de los modelos frontier (GPT-5.6 Luna Low, Gemini 3.5 Flash-Lite, Claude Haiku 4.5).

## Números reales vs. números de laboratorio

| Métrica | Claim de Inception | Medición OpenRouter |
|---|---|---|
| Throughput | 1.107 tok/s | ~477 tok/s (tráfico real mixto) |
| Latencia TTFT | <300 ms | 3,56 s |
| Contexto | 260K tokens | 260K |
| Salida máxima | 65.536 tokens | 65.536 |
| Precio (lista) | $0,20 in / $0,75 out / M tok | OpenRouter |
| Precio (descuento lanzamiento) | $0,04 in / $0,15 out / M tok | Hasta 8 sep |

La diferencia entre 1.107 y 477 tok/s no es una contradicción: el primero es un benchmark de laboratorio con condiciones no especificadas (hardware, batch size, longitud de salida), el segundo es mediciones en un endpoint compartido con tráfico real. Inception no publica qué GPU exacta usa ni el batch size. La cifra real de un usuario estará en algún punto intermedio.

## ¿Dónde importa la velocidad?

La velocidad de generación solo cambia una decisión cuando **el tiempo, no los tokens, es la constraint**. Tres escenarios califican:

- **Agent loops con muchas generaciones cortas:** un planificador que llama herramientas 20 veces por tarea gasta la mayor parte del tiempo esperando la siguiente respuesta corta. Un modelo que devuelve la respuesta en una fracción de segundo cambia cuánto dura la tarea.
- **Interfaces con usuario esperando:** sub-segundos vs. segundos es la diferencia entre una función que se usa y una que se abandona. Especialmente relevante para **voice agents** donde 170 ms de latencia media fue lo que logró OpenCall en producción.
- **Procesamiento masivo:** reescritura, clasificación y extracción sobre corpus grandes, donde 5× de throughput = 5× de tiempo menor.

**Dónde no importa:** tareas de razonamiento largo y complejo, donde la calidad decide y el usuario espera. El propio set de comparación de Inception (el tier más barato de cada frontier lab) te dice dónde cree que está Mercury 2.5.

## Mercury Voice y Mercury Router

Junto con 2.5, Inception anunció dos preview:
- **Mercury Voice:** dLLM optimizado para agentes de voz con TTFT <170 ms.
- **Mercury Router:** usa un dLLM para analizar prompts entrantes y enrutarlos al mejor modelo (abierto o cerrado) según calidad, velocidad y costo.

## Contexto: la carrera por la inferencia eficiente

Mercury 2.5 se sitúa en un momento clave. Los modelos frontier alcanzan capacidades impresionantes, pero el costo y la latencia de inferencia siguen siendo el cuello de botella para adoptar IA en producción. Las estrategias van en paralelo:

- **Cuantización:** QAH (Quantization-Aware Healing) de Multiverse Computing demostró que un modelo comprimido a 4 bits puede superar a su versión en bfloat16 en 7 de 9 benchmarks.
- **Arquitecturas alternativas:** modelos por difusión como Mercury, o modelos lineales como los Gated DeltaNet de Qwen3.8.
- **Hardware especializado:** NVIDIA Nemotron 3.5 Lightning y los DGX Spark para inferencia local.

La pregunta abierta es si Mercury 2.5 mantiene su calidad cuando se mide independientemente. Como señala Digital Applied: "toma el 1.107 como cifra de laboratorio, el 477 como cifra de endpoint compartido, y tu propia medición como la única que cuenta." La ventana de descuento del 80% terminó el 8 de septiembre, pero el precio de lista ($0,20/$0,75 por millón de tokens) sigue siendo competitivo para aplicaciones donde la latencia es crítica.

Para quien construye agentes de voz, subagentes de código o sistemas de búsqueda con muchas llamadas al modelo, Mercury 2.5 representa una opción nueva y legítima en un tier que hasta ahora solo tenía modelos autoregressivos. La arquitectura por difusión dejó de ser solo investigación.
