---
title: "🧠 Cloudflare entra en la carrera de los decision models: Clef es open source, corre en 39 ms y deja a Jev sin su ventaja de latencia"
date: 2026-10-03
source: "Cloudflare Blog / The Decoder / Hugging Face"
source_url: "https://blog.cloudflare.com/clef-decision-models/"
category: "modelos"
summary: "Cloudflare publica Clef (27B) y Clef-flash (9B), modelos de decisión Apache 2.0 basados en Qwen que responden en 39-209 ms sobre el edge. Multimodales, con 64K de contexto y API compatible con Jev."
reading_time: "4 min"
tags: [decision-models, system-one, cloudflare, qwen3-8, open-weights, workers-ai, inferencia-local]
---

## 🧠 La categoría que nació hace 12 días ya tiene a su cuarto jugador

El 22 de septiembre publicamos aquí mismo [[2026-09-22-jev-decision-models-typesafe-ai|Jev]], el primer "System One Model": un modelo que no genera texto, sino que puntúa las opciones que tú le das y devuelve probabilidades calibradas en una única pasada hacia delante. Doce días después habían aparecido [[2026-09-29-stanford-nvidia-clm-8b-decision-model-open|CLM-8B de Stanford y Nvidia]] y [[2026-10-02-amazon-strands-decider-2b-open-source-decision-model|Strands Decider 2B de AWS]].

Ayer se sumó el cuarto —y el más inesperado—: **Cloudflare**, una de las principales redes de infraestructura de internet, publicó **Clef** y **Clef-flash**, sus primeros modelos de IA open source, bajo licencia **Apache 2.0** y disponibles en [Hugging Face](https://huggingface.co/Cloudflare/clef) y en Workers AI.

La diferencia con los anteriores no es solo quién los hace, sino **dónde corren**: sobre la red global de Cloudflare, con proximidad a los centros de datos edge. Y eso cambia el cálculo de latencia de toda la categoría.

## Qué hace un decision model (y por qué importa ahora)

Un decision model ocupa el hueco entre un LLM y un clasificador tradicional. Los LLM razonan y llaman a herramientas, pero sus outputs son textos variables y lentos. Los clasificadores son rápidos pero hay que reentrenarlos para cada nueva categoría. Un decision model da lo mejor de ambos mundos: le pasas un **estado** (texto, JSON o una captura de pantalla) y unas **preguntas tipadas** —elección entre opciones, sí/no, o una puntuación— y te devuelve una probabilidad por opción con un score de confianza.

La ventaja práctica es doble: **no puede alucinar** (la respuesta siempre es una de tus opciones) y **la latencia se mide en milisegundos**, no en segundos. Eso permite colocar al decider en puntos del camino del agente donde un LLM frontier nunca podría estar: como guardia antes de cada tool call, clasificando cada mensaje antes de decidir si merece la atención de un modelo caro.

## La arquitectura de Clef: Qwen como base y datos sintéticos

Cloudflare no entrenó estos modelos desde cero. Los detalles técnicos, recogidos por [The Decoder](https://the-decoder.com/cloudflare-says-its-new-clef-model-means-humans-no-longer-need-to-be-in-the-loop-for-ai-agents/):

| Modelo | Parámetros | Base | Contexto | Licencia |
|--------|-----------|------|----------|----------|
| **Clef** | 27B | Qwen3.8-27B | 64K tokens | Apache 2.0 |
| **Clef-flash** | 9B | Qwen3.5-9B | 64K tokens | Apache 2.0 |

El proceso es el siguiente: el modelo base permanece **congelado**, y Cloudflare entrena componentes adicionales con datos sintéticos propios. Estos componentes extraen las opciones de respuesta y sus probabilidades directamente de los **cálculos internos** del modelo —de su hidden state— en lugar de generar texto y parsearlo después. El método de entrenamiento es una variante de **RLCD** (Reinforcement Learning for Calibrated Decisions), el mismo enfoque que TypeSafe usó para entrenar Jev: el modelo responde a múltiples preguntas sobre una misma entrada en una única llamada, y se le entrena para que sus probabilidades coincidan con la frecuencia real de aciertos.

Un detalle que marca distancia con la competencia: **Clef es multimodal**. Jev, de momento, solo procesa texto; Clef lee imágenes —capturas de pantalla, documentos— y su ventana de 64K tokens es el doble que la de su rival directo.

## Los números: más rápido en general, pero no en todo

Cloudflare afirma haber evaluado a Clef en **43 benchmarks** y que **lidera 7 de los 10 benchmarks de decisión** que compara contra la competencia, ganando en velocidad a todos los decision models relevantes. Las latencias medianas que reporta:

| Modelo | Latencia mediana |
|--------|-----------------|
| **Clef-flash** | ~39 ms |
| **Clef** | ~209 ms |
| Jev (TypeSafe) | ~524 ms |

Clef-flash es **13 veces más rápido** que Jev. Pero la precisión es más matizada: en los benchmarks recogidos por The Decoder, Jev sigue ganando en algunos —When2Call (80,97% vs 72,37% de Clef)—, mientras que Clef gana en otros —API Bank (91,93% vs 88,19%)—. Es decir, la categoría aún no tiene un ganador claro en calidad; lo que está cambiando es quién puede ofrecer estas capacidades, a qué precio y en qué infraestructura.

El caso de uso que Cloudflare muestra internamente es ilustrativo: su equipo de threat intelligence clasifica dominios con Clef. Asigna a un sitio web una probabilidad del 95% de ser una tienda de moda y menos del 1% de ser phishing. El proceso completo —descargar, renderizar y clasificar— tomó **2,2 segundos**; el modelo de lenguaje más rápido de Cloudflare tardó **4,7 segundos** y solo devolvió dos categorías.

## Del edge a tu GPU: llama.cpp ya los ejecuta en local

Hay un segundo movimiento que conecta directamente con la filosofía de este sitio. Mientras Cloudflare publicaba Clef, **llama.cpp añadía soporte nativo para decision models** a través de un nuevo endpoint `/v1/systemone` (implementación en el [PR #29818](https://github.com/ggml-org/llama.cpp/pull/29818)). El formato sigue el System One que introdujo Jev, así que los clientes existentes solo necesitan cambiar la base URL.

En la colección oficial de ggml-org hay cinco modelos listos para descargar en GGUF:

| Modelo | Tamaño | Basado en | Idiomas | Imágenes | Latencia* |
|--------|--------|-----------|---------|----------|-----------|
| Julia-1 | 144M | mmBERT-small | 50+ | no | 3 ms |
| Laya | 421M | ModernBERT-large | inglés | no | 5 ms |
| Kev-4B | 4B | Qwen3.5-4B-Base | inglés | no | 12 ms |
| lev | 4B | Qwen3.5-4B | inglés | no | 36 ms |
| OpenJev | 27B | Qwen3.8-27B | 6 idiomas | sí | 43 ms |

*Mediana para responder una pregunta en una RTX PRO 6000.

El patrón es el mismo que en los modelos de lenguaje: **los pesos abiertos llegan primero a la nube y después al hardware de consumo**. Un decider de 144M parámetros respondiendo en 3 milisegundos en tu propia GPU no es una optimización de costes —es una arquitectura nueva para diseñar agentes.

## La carrera, en dos semanas

| Fecha | Modelo | Quién | Licencia |
|-------|--------|-------|----------|
| 22 sep | Jev | TypeSafe AI | Propietaria (API) |
| 29 sep | CLM-8B | Stanford / Nvidia | Apache 2.0 |
| 2 oct | Strands Decider 2B | AWS | Apache 2.0 |
| 2 oct | **Clef / Clef-flash** | **Cloudflare** | **Apache 2.0** |
| 2 oct | Soporte en llama.cpp | ggml-org | Apache 2.0 (toolchain) |

OpenAI también entró la semana pasada con su **Decisions API** construida sobre GPT-6 Luna en DevDay. En doce días, la categoría pasó de un único modelo propietario por API a cinco jugadores, cuatro de ellos con pesos abiertos, y un runtime que los ejecuta en local.

Cloudflare lo dice sin rodeos: *"un humano ya no necesita estar necesariamente en el loop de las decisiones de un agente"*. Los agentes pueden "recoger contexto programáticamente, tomar decisiones y ejecutar acciones, o diferir a un humano cuando sea necesario". La pregunta ya no es si los decision models van a ser infraestructura —lo están siendo—, sino cuántos de tus agentes van a depender de un modelo que ni siquiera genera texto.

---

**Fuentes:** [Blog de Cloudflare](https://blog.cloudflare.com/clef-decision-models/) · [Changelog oficial de Cloudflare](https://developers.cloudflare.com/changelog/post/2026-10-01-clef-workers-ai/) · [The Decoder](https://the-decoder.com/cloudflare-says-its-new-clef-model-means-humans-no-longer-need-to-be-in-the-loop-for-ai-agents/) · [Hugging Face: Cloudflare/clef](https://huggingface.co/Cloudflare/clef) · [Hugging Face Blog: decision models en llama.cpp](https://huggingface.co/blog/ggml-org/decision-models-in-llamacpp)
